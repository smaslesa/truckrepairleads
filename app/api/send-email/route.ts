import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { NotificationEmail } from '@/emails/NotificationEmail';
import { WelcomeEmail } from '@/emails/WelcomeEmail';

// Initialize Resend with your API key (only if available)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const { name, firstName, lastName, shop, email, phone, message, source = 'website', timestamp } = formData;
    
    // Handle both old format (name) and new format (firstName + lastName)
    const fullName = name || (firstName && lastName ? `${firstName} ${lastName}` : firstName || lastName);
    const [extractedFirstName, ...lastNameParts] = fullName.split(' ');
    const extractedLastName = lastNameParts.join(' ') || '';
    
    // Use provided names or extracted names
    const finalFirstName = firstName || extractedFirstName;
    const finalLastName = lastName || extractedLastName;

    // Validate required fields
    if (!fullName || !email || !shop) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and shop name are required' },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY || !resend) {
      console.log('Resend API key not configured, skipping email send');
      return NextResponse.json({
        success: true,
        message: "Thanks! We'll call you within 24 hours",
        note: "Email service not configured"
      });
    }

    try {
      // Send notification email to you (admin)
      const notificationHtml = await render(NotificationEmail({
        firstName: finalFirstName,
        lastName: finalLastName,
        shopName: shop,
        email,
        phone: phone || 'Not provided',
        message,
        source,
        timestamp: timestamp || new Date().toISOString(),
      }));

      const notificationEmailData = await resend.emails.send({
        from: 'Truck Repair Shop Leads <noreply@truckrepairleads.com>',
        to: ['smaslesa@gmail.com', 'senad@truckrepairleads.com'], // Your emails
        subject: `🚗 New Lead: ${shop} - ${fullName}`,
        html: notificationHtml,
      });

      console.log('Admin notification sent:', notificationEmailData.data?.id);

      // Send welcome email to the customer
      const welcomeHtml = await render(WelcomeEmail({
        firstName: finalFirstName,
        lastName: finalLastName,
        shopName: shop,
        email,
      }));

      const welcomeEmailData = await resend.emails.send({
        from: 'Truck Repair Shop Leads <noreply@truckrepairleads.com>',
        to: [email],
        subject: 'Welcome to Truck Repair Shop Leads - Your Digital Marketing Journey Starts Here!',
        html: welcomeHtml,
      });

      console.log('Welcome email sent:', welcomeEmailData.data?.id);

      // Optionally, you can also send a plain text version as fallback
      // This is good for email clients that don't support HTML
      const fallbackNotification = await resend.emails.send({
        from: 'Truck Repair Shop Leads <noreply@truckrepairleads.com>',
        to: ['smaslesa@gmail.com', 'senad@truckrepairleads.com'],
        subject: `🚗 New Lead: ${shop} - ${fullName}`,
        text: `
New Lead Received!

Contact Information:
- Name: ${fullName}
- Shop Name: ${shop}
- Email: ${email}
- Phone: ${phone || 'Not provided'}
- Source: ${source}
- Submitted: ${new Date(timestamp || Date.now()).toLocaleString()}

${message ? `Message:\n${message}\n` : ''}

⚡ Remember: Quick response times dramatically increase conversion rates!

Call them at: ${phone || 'No phone provided'}
Email them at: ${email}

---
This lead was generated from your Truck Repair Shop Leads website.
        `,
      });

      return NextResponse.json({
        success: true,
        message: "Thanks! We'll call you within 24 hours",
        notificationId: notificationEmailData.data?.id,
        welcomeId: welcomeEmailData.data?.id,
      });

    } catch (emailError) {
      console.error('Resend error:', emailError);
      
      // Even if email fails, we want to acknowledge the lead was received
      // You might want to store this in a database or backup system
      return NextResponse.json({
        success: true,
        message: "Thanks! We'll call you within 24 hours",
        warning: "Email notification failed but your request was received",
      });
    }

  } catch (error) {
    console.error('Request processing failed:', error);
    return NextResponse.json(
      { error: 'Failed to process request. Please try again.' },
      { status: 500 }
    );
  }
}
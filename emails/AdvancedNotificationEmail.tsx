import React from 'react';
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

interface AdvancedNotificationEmailProps {
  firstName: string;
  lastName: string;
  shopName: string;
  email: string;
  phone: string;
  message?: string;
  source?: string;
  timestamp?: string;
  // Advanced tracking fields
  pageViewed?: string;
  timeOnSite?: string;
  deviceType?: string;
  location?: string;
  referrer?: string;
}

export const AdvancedNotificationEmail = ({
  firstName = 'John',
  lastName = 'Doe',
  shopName = 'Example Truck Repair',
  email = 'customer@example.com',
  phone = '(555) 123-4567',
  message,
  source = 'website',
  timestamp = new Date().toISOString(),
  pageViewed,
  timeOnSite,
  deviceType,
  location,
  referrer,
}: AdvancedNotificationEmailProps) => {
  const formattedDate = new Date(timestamp).toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  // Calculate lead score based on various factors
  const calculateLeadScore = () => {
    let score = 0;
    if (phone) score += 30;
    if (message) score += 20;
    if (timeOnSite && parseInt(timeOnSite) > 60) score += 15;
    if (source === 'google-ads') score += 25;
    if (deviceType === 'mobile') score += 10;
    return Math.min(score, 100);
  };

  const leadScore = calculateLeadScore();
  const scoreColor = leadScore >= 70 ? '#10b981' : leadScore >= 40 ? '#f59e0b' : '#ef4444';
  const priorityLevel = leadScore >= 70 ? 'HIGH' : leadScore >= 40 ? 'MEDIUM' : 'NORMAL';

  return (
    <Html>
      <Head />
      <Preview>🔥 {priorityLevel} Priority Lead: {shopName} - {firstName} {lastName}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Priority Alert Bar */}
          {leadScore >= 70 && (
            <Section style={alertBar}>
              <Text style={alertText}>
                ⚡ HIGH-VALUE LEAD ALERT - Immediate Action Required!
              </Text>
            </Section>
          )}

          {/* Header with Dynamic Priority */}
          <Section style={{...header, borderTop: `4px solid ${scoreColor}`}}>
            <Row>
              <Column>
                <Heading style={h1}>
                  New Lead Received
                </Heading>
              </Column>
              <Column align="right">
                <div style={{...scoreBadge, backgroundColor: scoreColor}}>
                  Score: {leadScore}/100
                </div>
              </Column>
            </Row>
            <Text style={leadTimestamp}>
              {formattedDate}
            </Text>
          </Section>

          {/* Quick Action Buttons */}
          <Section style={quickActions}>
            <Row>
              <Column align="center" style={actionColumn}>
                <Button
                  href={`tel:${phone.replace(/\D/g, '')}`}
                  style={callButton}
                >
                  📞 Call Now
                </Button>
                <Text style={actionLabel}>Best for conversion</Text>
              </Column>
              <Column align="center" style={actionColumn}>
                <Button
                  href={`sms:${phone.replace(/\D/g, '')}?body=Hi ${firstName}, this is [Your Name] from Truck Repair Shop Leads. Thanks for your interest!`}
                  style={smsButton}
                >
                  💬 Send SMS
                </Button>
                <Text style={actionLabel}>Quick response</Text>
              </Column>
              <Column align="center" style={actionColumn}>
                <Button
                  href={`mailto:${email}?subject=Re: Your Truck Repair Shop Marketing Inquiry&body=Hi ${firstName},%0D%0A%0D%0AThank you for reaching out about marketing services for ${shopName}.`}
                  style={emailButton}
                >
                  ✉️ Email
                </Button>
                <Text style={actionLabel}>Detailed follow-up</Text>
              </Column>
            </Row>
          </Section>

          {/* Lead Details Grid */}
          <Section style={detailsGrid}>
            <Row>
              <Column style={detailColumn}>
                <Heading as="h3" style={sectionTitle}>
                  Contact Information
                </Heading>
                <div style={detailItem}>
                  <Text style={detailLabel}>Name</Text>
                  <Text style={detailValue}>{firstName} {lastName}</Text>
                </div>
                <div style={detailItem}>
                  <Text style={detailLabel}>Shop</Text>
                  <Text style={detailValueBold}>{shopName}</Text>
                </div>
                <div style={detailItem}>
                  <Text style={detailLabel}>Email</Text>
                  <Link href={`mailto:${email}`} style={linkValue}>
                    {email}
                  </Link>
                </div>
                <div style={detailItem}>
                  <Text style={detailLabel}>Phone</Text>
                  <Link href={`tel:${phone.replace(/\D/g, '')}`} style={linkValue}>
                    {phone}
                  </Link>
                </div>
              </Column>

              <Column style={detailColumn}>
                <Heading as="h3" style={sectionTitle}>
                  Lead Intelligence
                </Heading>
                <div style={detailItem}>
                  <Text style={detailLabel}>Source</Text>
                  <Text style={detailValue}>{source}</Text>
                </div>
                {deviceType && (
                  <div style={detailItem}>
                    <Text style={detailLabel}>Device</Text>
                    <Text style={detailValue}>{deviceType}</Text>
                  </div>
                )}
                {location && (
                  <div style={detailItem}>
                    <Text style={detailLabel}>Location</Text>
                    <Text style={detailValue}>{location}</Text>
                  </div>
                )}
                {timeOnSite && (
                  <div style={detailItem}>
                    <Text style={detailLabel}>Engagement</Text>
                    <Text style={detailValue}>{timeOnSite}s on site</Text>
                  </div>
                )}
              </Column>
            </Row>
          </Section>

          {/* Message Section */}
          {message && (
            <Section style={messageSection}>
              <Heading as="h3" style={sectionTitle}>
                Customer Message
              </Heading>
              <div style={messageBox}>
                <Text style={messageText}>{message}</Text>
              </div>
            </Section>
          )}

          {/* Lead Insights */}
          <Section style={insightsSection}>
            <Heading as="h3" style={sectionTitle}>
              📊 Lead Analysis
            </Heading>
            <Row>
              <Column style={insightColumn}>
                <div style={insightCard}>
                  <Text style={insightLabel}>Priority Level</Text>
                  <Text style={{...insightValue, color: scoreColor}}>
                    {priorityLevel}
                  </Text>
                </div>
              </Column>
              <Column style={insightColumn}>
                <div style={insightCard}>
                  <Text style={insightLabel}>Response Time</Text>
                  <Text style={insightValue}>
                    &lt; 1 hour recommended
                  </Text>
                </div>
              </Column>
              <Column style={insightColumn}>
                <div style={insightCard}>
                  <Text style={insightLabel}>Conversion Chance</Text>
                  <Text style={insightValue}>
                    {leadScore >= 70 ? 'High' : leadScore >= 40 ? 'Medium' : 'Standard'}
                  </Text>
                </div>
              </Column>
            </Row>
          </Section>

          {/* Best Practices Reminder */}
          <Section style={tipsSection}>
            <Heading as="h3" style={tipTitle}>
              💡 Quick Tips for Success
            </Heading>
            <ul style={tipsList}>
              <li style={tipItem}>Call within 5 minutes for 100x better connection rate</li>
              <li style={tipItem}>Mention their shop name "{shopName}" early in conversation</li>
              <li style={tipItem}>Have pricing and timeline ready to discuss</li>
              <li style={tipItem}>Schedule a follow-up if they don't answer</li>
            </ul>
          </Section>

          {/* CRM Integration Buttons */}
          <Section style={crmSection}>
            <Text style={crmText}>
              Quick Actions:
            </Text>
            <Row>
              <Column align="center">
                <Button
                  href={`https://your-crm.com/leads/new?name=${encodeURIComponent(firstName + ' ' + lastName)}&shop=${encodeURIComponent(shopName)}&email=${email}&phone=${phone}`}
                  style={crmButton}
                >
                  Add to CRM
                </Button>
              </Column>
              <Column align="center">
                <Button
                  href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=Follow up with ${firstName} from ${shopName}&details=Phone: ${phone}%0AEmail: ${email}`}
                  style={crmButton}
                >
                  Schedule Follow-up
                </Button>
              </Column>
            </Row>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Lead #{Math.random().toString(36).substr(2, 9).toUpperCase()} • Generated via Truck Repair Shop Leads
            </Text>
            <Text style={footerSubtext}>
              This is an automated notification. Reply-to address is monitored.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: '#f3f4f6',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  borderRadius: '12px',
  overflow: 'hidden',
  maxWidth: '680px',
};

const alertBar = {
  backgroundColor: '#dc2626',
  padding: '12px',
  textAlign: 'center' as const,
};

const alertText = {
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0',
  letterSpacing: '0.5px',
};

const header = {
  padding: '24px 32px',
  backgroundColor: '#fafafa',
};

const h1 = {
  color: '#111827',
  fontSize: '24px',
  fontWeight: '700',
  margin: '0',
};

const scoreBadge = {
  display: 'inline-block',
  padding: '6px 12px',
  borderRadius: '20px',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '600',
};

const leadTimestamp = {
  color: '#6b7280',
  fontSize: '14px',
  marginTop: '8px',
};

const quickActions = {
  padding: '24px 32px',
  backgroundColor: '#f9fafb',
  borderBottom: '1px solid #e5e7eb',
};

const actionColumn = {
  padding: '0 8px',
};

const callButton = {
  backgroundColor: '#10b981',
  borderRadius: '6px',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '600',
  padding: '10px 20px',
  textDecoration: 'none',
  display: 'inline-block',
};

const smsButton = {
  backgroundColor: '#3b82f6',
  borderRadius: '6px',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '600',
  padding: '10px 20px',
  textDecoration: 'none',
  display: 'inline-block',
};

const emailButton = {
  backgroundColor: '#8b5cf6',
  borderRadius: '6px',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '600',
  padding: '10px 20px',
  textDecoration: 'none',
  display: 'inline-block',
};

const actionLabel = {
  color: '#6b7280',
  fontSize: '12px',
  marginTop: '6px',
};

const detailsGrid = {
  padding: '32px',
};

const detailColumn = {
  padding: '0 16px',
};

const sectionTitle = {
  color: '#111827',
  fontSize: '16px',
  fontWeight: '600',
  marginBottom: '16px',
  paddingBottom: '8px',
  borderBottom: '2px solid #e5e7eb',
};

const detailItem = {
  marginBottom: '12px',
};

const detailLabel = {
  color: '#6b7280',
  fontSize: '12px',
  fontWeight: '500',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
  margin: '0 0 2px',
};

const detailValue = {
  color: '#374151',
  fontSize: '14px',
  margin: '0',
};

const detailValueBold = {
  color: '#111827',
  fontSize: '15px',
  fontWeight: '600',
  margin: '0',
};

const linkValue = {
  color: '#3b82f6',
  fontSize: '14px',
  textDecoration: 'none',
};

const messageSection = {
  padding: '0 32px 32px',
};

const messageBox = {
  backgroundColor: '#f0f9ff',
  border: '1px solid #bfdbfe',
  borderLeft: '4px solid #3b82f6',
  borderRadius: '6px',
  padding: '16px',
};

const messageText = {
  color: '#1e40af',
  fontSize: '14px',
  lineHeight: '22px',
  margin: '0',
};

const insightsSection = {
  padding: '24px 32px',
  backgroundColor: '#f9fafb',
};

const insightColumn = {
  padding: '0 8px',
};

const insightCard = {
  backgroundColor: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: '6px',
  padding: '12px',
  textAlign: 'center' as const,
};

const insightLabel = {
  color: '#6b7280',
  fontSize: '11px',
  fontWeight: '500',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
  margin: '0 0 4px',
};

const insightValue = {
  color: '#111827',
  fontSize: '16px',
  fontWeight: '700',
  margin: '0',
};

const tipsSection = {
  padding: '24px 32px',
  backgroundColor: '#fef3c7',
  margin: '24px 0',
};

const tipTitle = {
  color: '#78350f',
  fontSize: '15px',
  fontWeight: '600',
  margin: '0 0 12px',
};

const tipsList = {
  margin: '0',
  paddingLeft: '20px',
};

const tipItem = {
  color: '#92400e',
  fontSize: '13px',
  lineHeight: '20px',
  marginBottom: '6px',
};

const crmSection = {
  padding: '24px 32px',
  borderTop: '1px solid #e5e7eb',
};

const crmText = {
  color: '#6b7280',
  fontSize: '14px',
  marginBottom: '12px',
  textAlign: 'center' as const,
};

const crmButton = {
  backgroundColor: '#ffffff',
  border: '1px solid #d1d5db',
  borderRadius: '6px',
  color: '#374151',
  fontSize: '13px',
  fontWeight: '500',
  padding: '8px 16px',
  textDecoration: 'none',
  display: 'inline-block',
};

const footer = {
  padding: '24px 32px',
  backgroundColor: '#f9fafb',
  textAlign: 'center' as const,
};

const footerText = {
  color: '#6b7280',
  fontSize: '12px',
  margin: '0 0 4px',
};

const footerSubtext = {
  color: '#9ca3af',
  fontSize: '11px',
  margin: '0',
};

export default AdvancedNotificationEmail;

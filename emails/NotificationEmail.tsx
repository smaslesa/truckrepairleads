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

interface NotificationEmailProps {
  firstName: string;
  lastName: string;
  shopName: string;
  email: string;
  phone: string;
  message?: string;
  source?: string;
  timestamp?: string;
}

export const NotificationEmail = ({
  firstName = 'John',
  lastName = 'Doe',
  shopName = 'Example Truck Repair',
  email = 'customer@example.com',
  phone = '(555) 123-4567',
  message,
  source = 'website',
  timestamp = new Date().toISOString(),
}: NotificationEmailProps) => {
  const formattedDate = new Date(timestamp).toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <Html>
      <Head />
      <Preview>🚗 New Lead: {shopName} - {firstName} {lastName}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header with Logo */}
          <Section style={header}>
            <Heading style={h1}>
              🚗 New Truck Repair Shop Lead!
            </Heading>
            <Text style={leadSource}>
              Source: {source.charAt(0).toUpperCase() + source.slice(1)}
            </Text>
          </Section>

          {/* Priority Badge */}
          <Section style={prioritySection}>
            <div style={priorityBadge}>
              🔥 HOT LEAD - Contact within 24 hours!
            </div>
          </Section>

          {/* Contact Information Card */}
          <Section style={infoCard}>
            <Heading as="h2" style={h2}>
              Contact Information
            </Heading>
            
            <Row style={infoRow}>
              <Column style={labelColumn}>
                <Text style={label}>Name:</Text>
              </Column>
              <Column>
                <Text style={value}>{firstName} {lastName}</Text>
              </Column>
            </Row>

            <Row style={infoRow}>
              <Column style={labelColumn}>
                <Text style={label}>Shop Name:</Text>
              </Column>
              <Column>
                <Text style={shopNameValue}>{shopName}</Text>
              </Column>
            </Row>

            <Row style={infoRow}>
              <Column style={labelColumn}>
                <Text style={label}>Email:</Text>
              </Column>
              <Column>
                <Link href={`mailto:${email}`} style={emailLink}>
                  {email}
                </Link>
              </Column>
            </Row>

            <Row style={infoRow}>
              <Column style={labelColumn}>
                <Text style={label}>Phone:</Text>
              </Column>
              <Column>
                <Link href={`tel:${phone.replace(/\D/g, '')}`} style={phoneLink}>
                  {phone}
                </Link>
              </Column>
            </Row>

            <Row style={infoRow}>
              <Column style={labelColumn}>
                <Text style={label}>Submitted:</Text>
              </Column>
              <Column>
                <Text style={value}>{formattedDate}</Text>
              </Column>
            </Row>
          </Section>

          {/* Message Section (if provided) */}
          {message && (
            <>
              <Hr style={divider} />
              <Section style={messageSection}>
                <Heading as="h3" style={h3}>
                  Additional Message
                </Heading>
                <Text style={messageText}>{message}</Text>
              </Section>
            </>
          )}

          {/* Action Buttons */}
          <Section style={buttonSection}>
            <Row>
              <Column align="center">
                <Button
                  href={`tel:${phone.replace(/\D/g, '')}`}
                  style={primaryButton}
                >
                  📞 Call Now
                </Button>
              </Column>
              <Column align="center">
                <Button
                  href={`mailto:${email}`}
                  style={secondaryButton}
                >
                  ✉️ Send Email
                </Button>
              </Column>
            </Row>
          </Section>

          {/* Lead Score Card */}
          <Section style={scoreCard}>
            <Heading as="h3" style={h3}>
              Lead Quality Indicators
            </Heading>
            <Row>
              <Column style={scoreItem}>
                <Text style={scoreLabel}>✅ Contact Info</Text>
                <Text style={scoreValue}>Complete</Text>
              </Column>
              <Column style={scoreItem}>
                <Text style={scoreLabel}>📍 Shop Name</Text>
                <Text style={scoreValue}>Provided</Text>
              </Column>
              <Column style={scoreItem}>
                <Text style={scoreLabel}>⏰ Response Time</Text>
                <Text style={scoreValue}>Critical</Text>
              </Column>
            </Row>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              This lead was generated from your Truck Repair Shop Leads website.
            </Text>
            <Text style={footerText}>
              Quick response times dramatically increase conversion rates.
            </Text>
            <Hr style={footerDivider} />
            <Text style={footerCopyright}>
              © {new Date().getFullYear()} Truck Repair Shop Leads. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const header = {
  padding: '32px 48px 24px',
  textAlign: 'center' as const,
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  borderRadius: '8px 8px 0 0',
};

const h1 = {
  color: '#ffffff',
  fontSize: '32px',
  fontWeight: '700',
  margin: '0',
  padding: '0',
  lineHeight: '1.3',
};

const leadSource = {
  color: '#ffffff',
  fontSize: '14px',
  marginTop: '8px',
  opacity: 0.9,
};

const prioritySection = {
  padding: '0 48px 24px',
  textAlign: 'center' as const,
};

const priorityBadge = {
  display: 'inline-block',
  backgroundColor: '#ef4444',
  color: '#ffffff',
  padding: '8px 24px',
  borderRadius: '24px',
  fontSize: '14px',
  fontWeight: '600',
  letterSpacing: '0.5px',
};

const infoCard = {
  padding: '24px 48px',
  backgroundColor: '#f8fafc',
  margin: '0 24px',
  borderRadius: '8px',
};

const h2 = {
  color: '#1a202c',
  fontSize: '24px',
  fontWeight: '600',
  margin: '0 0 24px',
};

const h3 = {
  color: '#2d3748',
  fontSize: '18px',
  fontWeight: '600',
  margin: '0 0 16px',
};

const infoRow = {
  marginBottom: '16px',
};

const labelColumn = {
  width: '140px',
};

const label = {
  color: '#718096',
  fontSize: '14px',
  fontWeight: '500',
  margin: '0',
};

const value = {
  color: '#2d3748',
  fontSize: '16px',
  margin: '0',
};

const shopNameValue = {
  color: '#2d3748',
  fontSize: '18px',
  fontWeight: '600',
  margin: '0',
};

const emailLink = {
  color: '#3182ce',
  fontSize: '16px',
  textDecoration: 'underline',
};

const phoneLink = {
  color: '#3182ce',
  fontSize: '16px',
  textDecoration: 'none',
  fontWeight: '500',
};

const divider = {
  borderColor: '#e2e8f0',
  margin: '32px 0',
};

const messageSection = {
  padding: '0 48px 24px',
};

const messageText = {
  color: '#4a5568',
  fontSize: '15px',
  lineHeight: '24px',
  backgroundColor: '#f7fafc',
  padding: '16px',
  borderRadius: '8px',
  borderLeft: '4px solid #4299e1',
};

const buttonSection = {
  padding: '32px 48px',
};

const primaryButton = {
  backgroundColor: '#10b981',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '14px 28px',
  width: '180px',
};

const secondaryButton = {
  backgroundColor: '#3b82f6',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '14px 28px',
  width: '180px',
};

const scoreCard = {
  margin: '24px',
  padding: '24px',
  backgroundColor: '#fef3c7',
  borderRadius: '8px',
  border: '1px solid #fbbf24',
};

const scoreItem = {
  textAlign: 'center' as const,
};

const scoreLabel = {
  color: '#92400e',
  fontSize: '12px',
  fontWeight: '600',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
  margin: '0 0 4px',
};

const scoreValue = {
  color: '#78350f',
  fontSize: '16px',
  fontWeight: '700',
  margin: '0',
};

const footer = {
  padding: '32px 48px',
  textAlign: 'center' as const,
};

const footerText = {
  color: '#718096',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0 0 8px',
};

const footerDivider = {
  borderColor: '#e2e8f0',
  margin: '24px 0 16px',
};

const footerCopyright = {
  color: '#a0aec0',
  fontSize: '12px',
  margin: '0',
};

export default NotificationEmail;

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

interface WelcomeEmailProps {
  firstName: string;
  lastName: string;
  shopName: string;
  email: string;
}

export const WelcomeEmail = ({
  firstName = 'John',
  lastName = 'Doe',
  shopName = 'Example Truck Repair',
  email = 'customer@example.com',
}: WelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Truck Repair Shop Leads - Your Digital Marketing Journey Starts Here!</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Hero Section */}
          <Section style={hero}>
            <Heading style={heroHeading}>
              Welcome to the Future of Truck Repair Marketing
            </Heading>
            <Text style={heroSubtext}>
              {firstName}, your journey to digital dominance starts now
            </Text>
          </Section>

          {/* Personal Greeting */}
          <Section style={greeting}>
            <Heading as="h2" style={h2}>
              Hello {firstName} {lastName}! 👋
            </Heading>
            <Text style={greetingText}>
              Thank you for your interest in transforming <strong>{shopName}</strong> into a lead-generating powerhouse. 
              We're excited to show you how our proven digital marketing system can revolutionize your business.
            </Text>
          </Section>

          {/* What Happens Next */}
          <Section style={stepsSection}>
            <Heading as="h3" style={h3}>
              Here's What Happens Next:
            </Heading>
            
            <div style={stepItem}>
              <Row>
                <Column style={stepNumber}>
                  <div style={numberCircle}>1</div>
                </Column>
                <Column style={stepContent}>
                  <Text style={stepTitle}>Personal Consultation Call</Text>
                  <Text style={stepDescription}>
                    Within 24 hours, one of our truck repair marketing experts will call you to discuss your specific needs and goals.
                  </Text>
                </Column>
              </Row>
            </div>

            <div style={stepItem}>
              <Row>
                <Column style={stepNumber}>
                  <div style={numberCircle}>2</div>
                </Column>
                <Column style={stepContent}>
                  <Text style={stepTitle}>Custom Strategy Development</Text>
                  <Text style={stepDescription}>
                    We'll analyze your market, competition, and create a tailored digital marketing strategy designed to dominate your local area.
                  </Text>
                </Column>
              </Row>
            </div>

            <div style={stepItem}>
              <Row>
                <Column style={stepNumber}>
                  <div style={numberCircle}>3</div>
                </Column>
                <Column style={stepContent}>
                  <Text style={stepTitle}>Rapid Implementation</Text>
                  <Text style={stepDescription}>
                    Your professional website and marketing system can be live in as little as 48 hours, starting to generate leads immediately.
                  </Text>
                </Column>
              </Row>
            </div>
          </Section>

          {/* Value Propositions */}
          <Section style={valueSection}>
            <Heading as="h3" style={h3Center}>
              Why Top Shops Choose Truck Repair Shop Leads
            </Heading>
            
            <Row style={valueRow}>
              <Column style={valueColumn}>
                <div style={valueIcon}>🚀</div>
                <Text style={valueTitle}>Fast Results</Text>
                <Text style={valueText}>
                  Start seeing new leads within days, not months
                </Text>
              </Column>
              <Column style={valueColumn}>
                <div style={valueIcon}>📈</div>
                <Text style={valueTitle}>Proven ROI</Text>
                <Text style={valueText}>
                  Average 5-10x return on marketing investment
                </Text>
              </Column>
              <Column style={valueColumn}>
                <div style={valueIcon}>🎯</div>
                <Text style={valueTitle}>Targeted Traffic</Text>
                <Text style={valueText}>
                  Reach customers actively seeking truck repair
                </Text>
              </Column>
            </Row>
          </Section>

          {/* CTA Section */}
          <Section style={ctaSection}>
            <Heading as="h3" style={ctaHeading}>
              Ready to Get Started?
            </Heading>
            <Text style={ctaText}>
              Can't wait for our call? Reach out directly:
            </Text>
            <Row>
              <Column align="center">
                <Button
                  href="tel:7029000265"
                  style={primaryButton}
                >
                  📞 Call (702) 900-0265
                </Button>
              </Column>
            </Row>
            <Text style={alternativeContact}>
              Or reply to this email with your preferred contact time
            </Text>
          </Section>


          {/* Footer */}
          <Section style={footer}>
            <Row>
              <Column align="center">
                <Link href="https://truckrepairleads.com" style={footerLink}>
                  Website
                </Link>
                <Text style={footerDivider}>•</Text>
                <Link href="mailto:hello@truckrepairleads.com" style={footerLink}>
                  Email Support
                </Link>
                <Text style={footerDivider}>•</Text>
                <Link href="tel:7029000265" style={footerLink}>
                  (702) 900-0265
                </Link>
              </Column>
            </Row>
            <Text style={footerText}>
              © {new Date().getFullYear()} Truck Repair Shop Leads. All rights reserved.
            </Text>
            <Text style={unsubscribe}>
              This email was sent to {email} because you requested information about our services.
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
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  marginTop: '20px',
  marginBottom: '20px',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
};

const hero = {
  background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
  padding: '48px 32px',
  textAlign: 'center' as const,
};

const heroHeading = {
  color: '#ffffff',
  fontSize: '32px',
  fontWeight: '700',
  margin: '0 0 12px',
  lineHeight: '1.2',
};

const heroSubtext = {
  color: '#e0e7ff',
  fontSize: '18px',
  margin: '0',
};

const greeting = {
  padding: '40px 48px 32px',
};

const h2 = {
  color: '#111827',
  fontSize: '28px',
  fontWeight: '700',
  margin: '0 0 16px',
};

const h3 = {
  color: '#1f2937',
  fontSize: '20px',
  fontWeight: '600',
  margin: '0 0 20px',
};

const h3Center = {
  color: '#1f2937',
  fontSize: '20px',
  fontWeight: '600',
  margin: '0 0 32px',
  textAlign: 'center' as const,
};

const greetingText = {
  color: '#4b5563',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '0',
};

const stepsSection = {
  padding: '32px 48px',
  backgroundColor: '#f9fafb',
};

const stepItem = {
  marginBottom: '24px',
};

const stepNumber = {
  width: '60px',
  paddingRight: '16px',
};

const numberCircle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: '#3b82f6',
  color: '#ffffff',
  fontSize: '18px',
  fontWeight: '700',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const stepContent = {
  paddingTop: '4px',
};

const stepTitle = {
  color: '#111827',
  fontSize: '16px',
  fontWeight: '600',
  margin: '0 0 4px',
};

const stepDescription = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0',
};

const valueSection = {
  padding: '48px 32px',
};

const valueRow = {
  marginBottom: '32px',
};

const valueColumn = {
  textAlign: 'center' as const,
  padding: '0 16px',
};

const valueIcon = {
  fontSize: '36px',
  marginBottom: '12px',
};

const valueTitle = {
  color: '#111827',
  fontSize: '16px',
  fontWeight: '600',
  margin: '8px 0',
};

const valueText = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0',
};

const ctaSection = {
  padding: '40px 48px',
  backgroundColor: '#eff6ff',
  textAlign: 'center' as const,
};

const ctaHeading = {
  color: '#1e40af',
  fontSize: '24px',
  fontWeight: '700',
  margin: '0 0 12px',
};

const ctaText = {
  color: '#3730a3',
  fontSize: '16px',
  margin: '0 0 24px',
};

const primaryButton = {
  backgroundColor: '#3b82f6',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '14px 32px',
  margin: '0 auto',
};

const alternativeContact = {
  color: '#6b7280',
  fontSize: '14px',
  marginTop: '16px',
};

const footer = {
  padding: '32px 48px',
  backgroundColor: '#f9fafb',
  textAlign: 'center' as const,
};

const footerLink = {
  color: '#6b7280',
  fontSize: '14px',
  textDecoration: 'none',
  display: 'inline-block',
  margin: '0 8px',
};

const footerDivider = {
  color: '#d1d5db',
  fontSize: '14px',
  display: 'inline-block',
  margin: '0 4px',
};

const footerText = {
  color: '#9ca3af',
  fontSize: '12px',
  margin: '16px 0 8px',
};

const unsubscribe = {
  color: '#9ca3af',
  fontSize: '11px',
  margin: '8px 0 0',
  lineHeight: '16px',
};

export default WelcomeEmail;

import React, { useEffect } from "react";
import "./UnverifiedQRPage.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Footer from "../../components/footer/Footer";

const UnverifiedQRPage = () => {
  useEffect(() => {
    document.title = "QR Code Security Warning | Jagriti IIT (BHU)";
  }, []);

  return (
    <div className="unverifiedqr-bg">
      <div className="unverifiedqr-container">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          className="unverifiedqr-content"
        >
          {/* Warning Icon */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            className="warning-icon-container"
          >
            <div className="warning-icon">⚠️</div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            className="main-heading"
          >
            One scan.
            <br />
            One second.
            <br />
            <span className="highlight">That's all it takes.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            className="subheading"
          >
            You just scanned an unverified QR code
          </motion.p>

          {/* Alert Banner */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            className="alert-banner"
          >
            <div className="alert-icon">🚨</div>
            <div className="alert-content">
              <strong>Security Alert:</strong> This QR code was intentionally
              unverified to demonstrate the importance of cybersecurity awareness.
              In a real scenario, this could have led to a security breach.
            </div>
          </motion.div>

          {/* Statistics Section */}
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            animate="show"
            className="stats-section"
          >
            <h2 className="section-title">The Growing Threat</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">89%</div>
                <div className="stat-label">
                  of users scan QR codes without verifying the source
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-number">300%</div>
                <div className="stat-label">
                  increase in QR code phishing attacks in 2023
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-number">$3M+</div>
                <div className="stat-label">
                  lost to QR code scams in recent years
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Message Card */}
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            animate="show"
            className="message-card"
          >
            <h2 className="card-title">What Could Have Happened?</h2>
            <p className="card-text">
              QR codes are convenient, but they're also invisible to human
              inspection. You can't see where they lead until you scan them.
              Malicious actors exploit this by creating QR codes that redirect to:
            </p>
            <div className="threat-list">
              <div className="threat-item">
                <span className="threat-icon">🌐</span>
                <div>
                  <strong>Phishing Websites:</strong> Fake login pages designed
                  to steal your credentials
                </div>
              </div>
              <div className="threat-item">
                <span className="threat-icon">💾</span>
                <div>
                  <strong>Malware Downloads:</strong> Automatic downloads of
                  viruses, ransomware, or spyware
                </div>
              </div>
              <div className="threat-item">
                <span className="threat-icon">📧</span>
                <div>
                  <strong>Email/SMS Triggers:</strong> Automatically sends
                  malicious messages from your device
                </div>
              </div>
              <div className="threat-item">
                <span className="threat-icon">💰</span>
                <div>
                  <strong>Payment Fraud:</strong> Redirects to fake payment
                  portals to steal financial information
                </div>
              </div>
              <div className="threat-item">
                <span className="threat-icon">📱</span>
                <div>
                  <strong>App Installation:</strong> Forces installation of
                  malicious apps that can access your data
                </div>
              </div>
              <div className="threat-item">
                <span className="threat-icon">📍</span>
                <div>
                  <strong>Location Tracking:</strong> Reveals your location or
                  tracks your movements
                </div>
              </div>
            </div>
          </motion.div>

          {/* Common Attack Vectors */}
          <motion.div
            variants={fadeIn("up", 0.9)}
            initial="hidden"
            animate="show"
            className="attack-vectors-section"
          >
            <h2 className="section-title">Common QR Code Attack Scenarios</h2>
            <div className="attack-grid">
              <div className="attack-card">
                <div className="attack-number">01</div>
                <h3 className="attack-title">Sticker Overlays</h3>
                <p className="attack-description">
                  Attackers place malicious QR code stickers over legitimate ones
                  in public places like restaurants, parking meters, or event
                  venues.
                </p>
              </div>
              <div className="attack-card">
                <div className="attack-number">02</div>
                <h3 className="attack-title">Fake Payment Codes</h3>
                <p className="attack-description">
                  Fraudulent QR codes in payment scenarios that redirect to fake
                  payment portals, stealing credit card and banking information.
                </p>
              </div>
              <div className="attack-card">
                <div className="attack-number">03</div>
                <h3 className="attack-title">Wi-Fi Network Hacking</h3>
                <p className="attack-description">
                  QR codes that automatically connect your device to malicious
                  Wi-Fi networks, allowing attackers to intercept your data.
                </p>
              </div>
              <div className="attack-card">
                <div className="attack-number">04</div>
                <h3 className="attack-title">Social Engineering</h3>
                <p className="attack-description">
                  QR codes in emails, messages, or social media posts that
                  appear legitimate but lead to credential harvesting sites.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Security Tips */}
          <motion.div
            variants={fadeIn("up", 1.0)}
            initial="hidden"
            animate="show"
            className="tips-section"
          >
            <h2 className="section-title">How to Protect Yourself</h2>
            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-header">
                  <span className="tip-icon-large">🔍</span>
                  <h3 className="tip-card-title">Verify the Source</h3>
                </div>
                <p className="tip-card-text">
                  Only scan QR codes from trusted sources. If you find a QR code
                  in a public place, verify it's legitimate before scanning.
                </p>
              </div>
              <div className="tip-card">
                <div className="tip-header">
                  <span className="tip-icon-large">🔗</span>
                  <h3 className="tip-card-title">Preview URLs</h3>
                </div>
                <p className="tip-card-text">
                  Use QR scanner apps that show you the destination URL before
                  opening it. Check for suspicious domains or typos.
                </p>
              </div>
              <div className="tip-card">
                <div className="tip-header">
                  <span className="tip-icon-large">🛡️</span>
                  <h3 className="tip-card-title">Check HTTPS</h3>
                </div>
                <p className="tip-card-text">
                  Ensure websites use HTTPS (look for the padlock icon). Never
                  enter sensitive information on HTTP sites.
                </p>
              </div>
              <div className="tip-card">
                <div className="tip-header">
                  <span className="tip-icon-large">📱</span>
                  <h3 className="tip-card-title">Update Security</h3>
                </div>
                <p className="tip-card-text">
                  Keep your device's operating system and security software
                  updated to protect against known vulnerabilities.
                </p>
              </div>
              <div className="tip-card">
                <div className="tip-header">
                  <span className="tip-icon-large">🚫</span>
                  <h3 className="tip-card-title">Avoid Auto-Connections</h3>
                </div>
                <p className="tip-card-text">
                  Disable automatic Wi-Fi connections and app installations from
                  QR codes. Always review permissions before granting access.
                </p>
              </div>
              <div className="tip-card">
                <div className="tip-header">
                  <span className="tip-icon-large">💳</span>
                  <h3 className="tip-card-title">Verify Payment Codes</h3>
                </div>
                <p className="tip-card-text">
                  When making payments, double-check the recipient details and
                  amount. Use official payment apps when possible.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Red Flags Section */}
          <motion.div
            variants={fadeIn("up", 1.1)}
            initial="hidden"
            animate="show"
            className="red-flags-section"
          >
            <h2 className="section-title">Red Flags to Watch For</h2>
            <div className="red-flags-list">
              <div className="red-flag-item">
                <span className="red-flag-icon">🚩</span>
                <div>
                  <strong>QR codes in unexpected locations</strong> (e.g.,
                  stickers on public surfaces)
                </div>
              </div>
              <div className="red-flag-item">
                <span className="red-flag-icon">🚩</span>
                <div>
                  <strong>Unsolicited QR codes</strong> in emails, messages, or
                  social media from unknown senders
                </div>
              </div>
              <div className="red-flag-item">
                <span className="red-flag-icon">🚩</span>
                <div>
                  <strong>URLs with suspicious domains</strong> (misspellings,
                  unusual extensions, or random characters)
                </div>
              </div>
              <div className="red-flag-item">
                <span className="red-flag-icon">🚩</span>
                <div>
                  <strong>Requests for sensitive information</strong> (passwords,
                  credit cards, personal details)
                </div>
              </div>
              <div className="red-flag-item">
                <span className="red-flag-icon">🚩</span>
                <div>
                  <strong>Immediate redirects</strong> or automatic downloads
                  without your consent
                </div>
              </div>
            </div>
          </motion.div>

          {/* Real-World Impact */}
          <motion.div
            variants={fadeIn("up", 1.2)}
            initial="hidden"
            animate="show"
            className="impact-section"
          >
            <h2 className="section-title">Real-World Impact</h2>
            <div className="impact-content">
              <p className="impact-text">
                QR code attacks have caused significant financial losses and data
                breaches worldwide. In 2023, a major restaurant chain fell victim
                to QR code sticker attacks where criminals replaced legitimate
                menu QR codes with malicious ones, stealing customer payment
                information. Similarly, parking meter QR codes have been
                compromised in multiple cities, redirecting payments to
                fraudulent accounts.
              </p>
              <p className="impact-text">
                The convenience of QR codes makes them attractive to both users
                and attackers. As QR code usage continues to grow in payment
                systems, event check-ins, and contactless services, awareness and
                vigilance become increasingly critical.
              </p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={fadeIn("up", 1.3)}
            initial="hidden"
            animate="show"
            className="cta-section"
          >
            <div className="cta-card">
              <h2 className="cta-title">Stay Informed, Stay Safe</h2>
              <p className="cta-text">
                This QR code was created as part of a cybersecurity awareness
                campaign by <strong>Jagriti IIT (BHU)</strong> to educate users
                about the importance of verifying QR codes before scanning them.
                Remember: when in doubt, don't scan it out!
              </p>
              <div className="cta-buttons">
                <motion.a
                  href="/"
                  className="home-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Return to Home
                </motion.a>
                <motion.a
                  href="/about"
                  className="learn-more-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More About Jagriti
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default UnverifiedQRPage;

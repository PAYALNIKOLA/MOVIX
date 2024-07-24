import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      {/* <p>Last updated: [Date]</p> */}

      <section>
        <h2>Introduction</h2>
        <p>
          Welcome to Movix! This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>
      </section>

      <section>
        <h2>Information We Collect</h2>
        <p>
          We may collect information about you in a variety of ways. The information we may collect on the Site includes:
        </p>
        <ul>
          <li>Personal Data: Personally identifiable information, such as your name, shipping address, email address, and telephone number.</li>
          <li>Derivative Data: Information our servers automatically collect when you access the Site, such as your IP address, browser type, and access times.</li>
        </ul>
      </section>

      <section>
        <h2>Use of Your Information</h2>
        <p>We may use information collected about you via the Site to:</p>
        <ul>
          <li>Administer your account.</li>
          <li>Deliver targeted advertising and other marketing communications.</li>
          <li>Respond to customer service requests.</li>
        </ul>
      </section>

      <section>
        <h2>Disclosure of Your Information</h2>
        <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
        <ul>
          <li>By Law or to Protect Rights: If we believe the release of information about you is necessary to respond to legal process or protect the rights, property, and safety of others.</li>
          <li>Third-Party Service Providers: We may share your information with third parties that perform services for us or on our behalf.</li>
        </ul>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
        <p>Email: support@movix.com</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

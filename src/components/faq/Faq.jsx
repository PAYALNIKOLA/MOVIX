import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>

      <section>
        <h2>General Questions</h2>
        <div className="faq-item">
          <h3>What is Movix?</h3>
          <p>Movix is a platform where you can watch and discover new movies and TV shows.</p>
        </div>
        <div className="faq-item">
          <h3>How can I create an account?</h3>
          <p>You can create an account by clicking the sign-up button on the homepage and filling out the registration form.</p>
        </div>
      </section>

      <section>
        <h2>Subscription</h2>
        <div className="faq-item">
          <h3>What subscription plans do you offer?</h3>
          <p>We offer several subscription plans, including monthly, yearly, and family plans. Visit our subscription page for more details.</p>
        </div>
        <div className="faq-item">
          <h3>Can I cancel my subscription?</h3>
          <p>Yes, you can cancel your subscription at any time from your account settings.</p>
        </div>
      </section>

      <section>
        <h2>Technical Support</h2>
        <div className="faq-item">
          <h3>I forgot my password. What should I do?</h3>
          <p>You can reset your password by clicking the "Forgot Password" link on the login page and following the instructions.</p>
        </div>
        <div className="faq-item">
          <h3>How can I contact customer support?</h3>
          <p>You can contact our customer support by emailing support@movix.com or by using the contact form on our website.</p>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

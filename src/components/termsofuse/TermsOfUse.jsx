import React from 'react';
import './Tstyle.css'; // Assuming you have a CSS file for styling

const TermsOfUse = () => {
    return (
        <div className="container">
            <h1>Terms of Use</h1>
            <p>
                Welcome to Movix! These Terms of Use ("Terms") govern your use of our website located at 
                <a href="https://www.movix.com"> Movix</a> ("Website") and any related services, content, or applications 
                (collectively, "Services") provided by Movix ("we," "us," or "our"). By accessing or using our Services, 
                you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not 
                use our Services.
            </p>

            <h2>1. Use of Services</h2>
            <h3>1.1 Eligibility</h3>
            <p>You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you meet this age requirement.</p>

            <h3>1.2 License</h3>
            <p>Movix grants you a limited, non-exclusive, non-transferable, and revocable license to access and use our Services for personal, non-commercial purposes only.</p>

            <h3>1.3 Restrictions</h3>
            <p>You agree not to:</p>
            <ul>
                <li>Use the Services for any illegal or unauthorized purpose.</li>
                <li>Modify, adapt, translate, or reverse engineer any portion of the Services.</li>
                <li>Use any automated means to access the Services or collect any information from the Services.</li>
                <li>Interfere with or disrupt the Services or servers or networks connected to the Services.</li>
            </ul>

            <h2>2. Account Registration</h2>
            <h3>2.1 Account Creation</h3>
            <p>To access certain features of our Services, you may need to create an account. You agree to provide accurate and complete information when creating your account and to keep this information up to date.</p>

            <h3>2.2 Account Security</h3>
            <p>You are responsible for maintaining the confidentiality of your account login information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.</p>

            <h2>3. Content</h2>
            <h3>3.1 User Content</h3>
            <p>You may have the opportunity to post, upload, or otherwise make available content, including reviews, comments, and other materials ("User Content") on our Services. You retain ownership of your User Content, but you grant Movix a non-exclusive, worldwide, royalty-free, transferable license to use, reproduce, distribute, prepare derivative works of, and display your User Content in connection with the Services.</p>

            <h3>3.2 Prohibited Content</h3>
            <p>You agree not to post, upload, or otherwise make available any content that:</p>
            <ul>
                <li>Is illegal, harmful, or offensive.</li>
                <li>Infringes any third party's intellectual property rights.</li>
                <li>Contains any viruses or other harmful components.</li>
                <li>Violates any laws or regulations.</li>
            </ul>

            <h2>4. Termination</h2>
            <p>We reserve the right to terminate or suspend your account and access to the Services at our sole discretion, without prior notice, for conduct that we believe violates these Terms or is harmful to other users of the Services, us, or third parties, or for any other reason.</p>

            <h2>5. Disclaimer of Warranties</h2>
            <p>The Services are provided "as is" and "as available" without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Services will be uninterrupted, error-free, or free of viruses or other harmful components.</p>

            <h2>6. Limitation of Liability</h2>
            <p>In no event shall Movix, its directors, officers, employees, or agents be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Services, whether based on warranty, contract, tort, or any other legal theory.</p>

            <h2>7. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on the Website. Your continued use of the Services after the posting of changes constitutes your acceptance of such changes.</p>

            <h2>8. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at <a href="mailto:support@movix.com">support@movix.com</a>.</p>
        </div>
    );
};

export default TermsOfUse;

import React from 'react';
import "./TermsAndConditon.scss"
import Warning from '../../components/warning/Warning';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
function Policy() {
    return (
        <>
        <Warning />
        <Navbar />
    
            <div className="wrapper_terms">
                <div className="tom-big">
                    <div className="conteiner">
                        <div className="big-text">
                            <h3>Privacy Policy</h3>
                        </div>
                       
                    </div>
                </div>
                <div className="conteiner">
                <div className="terms">
                  
                        
                    <div className="block-t">
                                <div className="title-t">
                                    <p>Introduction</p>
                                </div>
                                <div className="main-text"><p className='text-center'>
                                This Privacy Policy outlines the types of personal information collected by "Our Brand," how that information is used, and the measures taken to protect your privacy. By using the services provided by "Our Brand," you agree to the terms and practices described in this Privacy Policy.
                                    </p></div>
                            </div>
                            <div className="block-t">
                                <div className="title-t">
                                    <p>Information Collected</p>
                                </div>
                                <div className="main-text"><p className='text-center'>
                                a. Personal Information: We may collect personal information, such as your name, contact details, and billing information, when you use our services or interact with our website.<br />
b. Usage Information: "Our Brand" may collect information about your usage of our website and services, including IP addresses, device information, and browsing behavior.<br />
                                    </p></div>
                            </div>
    
                            <div className="block-t">
                                <div className="title-t">
                                    <p>Use of Information</p>
                                </div>
                                <div className="main-text"><p className='text-center'>
                                a. Service Delivery: We use your personal information to provide and improve our services, process transactions, and communicate with you.<br />
b. Analytics: We may analyze usage data to improve our website, services, and user experience.<br />
c. Marketing: With your consent, we may use your information to send you promotional materials and offers.
                                    </p></div>
                            </div>
    
                            <div className="block-t">
                                <div className="title-t">
                                    <p>Information Sharing</p>
                                </div>
                                <div className="main-text"><p className='text-center'>
                                a. Third-Party Service Providers: "Our Brand" may share your information with trusted third-party service providers for purposes such as payment processing, analytics, and marketing.
b. Legal Compliance: We may disclose your information to comply with applicable laws, regulations, or legal processes.
                                    </p></div>
                            </div>
     
                            <div className="block-t">
                                <div className="title-t">
                                    <p> Data Security</p>
                                </div>
                                <div className="main-text"><p className='text-center'>
                                a. "Our Brand" employs industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, and destruction.<br />
b. Despite our efforts, no online transmission or electronic storage is completely secure. Therefore, we cannot guarantee the absolute security of your information.
                                    </p></div>
                            </div>
                            <div className="block-t">
                                <div className="title-t">
                                    <p>Cookies and Tracking Technologies</p>
                                </div>
                                <div className="main-text"><p className='text-center'>
                                a. "Our Brand" may use cookies and similar tracking technologies to enhance your user experience and collect information about your preferences and activities.<br />
b. You can manage your cookie preferences through your browser settings.
                                    </p></div>
                            </div>
                            <div className="block-t">
                                <div className="title-t">
                                    <p>Your Choices</p>
                                </div>
                                <div className="main-text"><p className='text-center'>
                                a. You have the right to opt-out of receiving marketing communications from "Our Brand."<br />
b. You can access, correct, or delete your personal information by contacting us at [contact email].<br />
                                    </p></div>
                            </div>
                            <div className="block-t">
                                <div className="title-t">
                                    <p>Changes to Privacy Policy</p>
                                </div>
                                <div className="main-text"><p className='text-center'>
                                "We Brand" reserves the right to update or modify this Privacy Policy at any time. We will notify you of significant changes through our website or other communication channels.
                                    </p></div>
                            </div>
                            <div className="block-t">
                                <div className="title-t">
                                    <p>Contact Information</p>
                                </div>
                                <div className="main-text"><p className='text-center'>
                                If you have questions or concerns about this Privacy Policy, please contact us at [contact email].<br />
By using "Our Brand," you acknowledge that you have read, understood, and agree to this Privacy Policy.
                                    </p></div>
                            </div>
                           
    
                        </div>
                           
                    </div>
            </div>
        <Footer />
        </>
      )
}

export default Policy
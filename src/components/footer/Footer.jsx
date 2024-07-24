import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const TermsOfUse = () => <div>Terms of Use Content</div>;
const PrivacyPolicy = () => <div>Privacy Policy Content</div>;
// const About = () => <div>About Content</div>;
const Blog = () => <div>Blog Content</div>;
const FAQ = () => <div>FAQ Content</div>;

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem"><Link to="/termsofuse">Terms Of Use</Link></li>
                    <li className="menuItem"><Link to="/privacy-policy">Privacy Policy</Link></li>
                    <li className="menuItem"><Link to="/about">About</Link></li>
                    <li className="menuItem"><Link to="/blog">Blog</Link></li>
                    <li className="menuItem"><Link to="/faq">FAQ</Link></li>
                </ul>
                <div className="infoText">
                    
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};



export default Footer;

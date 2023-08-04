import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    const facebookUrl = "https://www.facebook.com/anupam.sinha.7169";
    const instagramUrl = "https://www.instagram.com/fozyhero/";
    const githubUrl = "https://github.com/ANU4247";
    const linkedinUrl = "https://www.linkedin.com/in/anupam-sinha-3377a4227/";
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="socialIcons">
                    {/* Add anchor tags for each social media icon */}
                    <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                        <span className="icon">
                        <FaFacebookF />
                        </span>
                    </a>
                    <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                        <span className="icon">
                        <FaInstagram />
                        </span>
                    </a>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                        <span className="icon">
                        <FaGithub />
                        </span>
                    </a>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <span className="icon">
                        <FaLinkedin />
                        </span>
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;



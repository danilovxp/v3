import React, { Component } from 'react';
import { GitHub, LinkedIn, Resume, Email } from './../icons'

const DATA = [
    {
        href: "https://github.com/danilovxp",
        aria: "Visit my GitHub profile to learn more about the projects I have created and contributed to",
        icon: <GitHub />,
        label: "Github",
    },
    {
        href: "https://www.linkedin.com/in/danilovxp/",
        aria: "Visit my LinkedIn profile to learn more about my education and work experience",
        icon: <LinkedIn />,
        label: "LinkedIn",
    },
    {
        href: "https://docs.google.com/document/d/1sKglB0H2vqyFtG7eJ2VAKKPXkNus0cuy6u04SS6UBfo/edit?usp=sharing",
        aria: "Visit Google Drive to view and download a copy of my resume",
        icon: <Resume />,
        label: "Resume",
    },
    {
        href: "mailto:danilovxp@gmail.com",
        aria: "Open a pre-addressed email prompt to me that you can fill out",
        icon: <Email />,
        label: "Email",
    }
];

const Button = ({ href, aria, icon, label }) => {
    return (
        <span className='button-container'>
            <a className='button' href={href} target='_self' aria-label={aria} rel='noopener noreferrer'>
                <div className='icon'>{icon}</div>
                <span className='icon_title'>{label}</span>
            </a>
        </span>
    );
};

class Buttons extends Component {
    render() {
        return (
            <div>
                {DATA.map((props, i) => (
                    <Button {...props} key={i} />
                ))}
            </div>
        );
    }
}

export default Buttons;

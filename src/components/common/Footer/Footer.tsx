import React from 'react';

interface FooterProps {
    title: string
}

const Footer = (props: FooterProps) => {
    return (
        <footer className="wrapper">{props.title}</footer>
    );
};

export default Footer;
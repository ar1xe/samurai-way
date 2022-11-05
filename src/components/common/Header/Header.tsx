import React from 'react';

interface HeaderProps {
    title: string
}

const Header = (props: HeaderProps) => {
    return (
        <header>{props.title}
            <a href="#sd"> Home </a>
            <a href="#sd"> News </a>
            <a href="#sd"> About </a>
            <button type="button">Log In</button>
        </header>
    );
};

export default Header;
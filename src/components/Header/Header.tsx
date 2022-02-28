import React from 'react';

type HeaderProps = {
    children: string;
}

const Header = (props: HeaderProps) => {
    return (
        <h1>{props.children}</h1>
    )
}

export default Header;
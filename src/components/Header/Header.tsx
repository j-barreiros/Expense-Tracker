import React from 'react';

export interface Props {
    title: string
}

const Header = (props: Props) => {
    const {title} = props;
    return (
        <h1>{title}</h1>
    )
}

export default Header;
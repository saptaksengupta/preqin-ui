import React from 'react'
import "../pages/Pages.style.css";


interface HeaderComponentProps {
    heading: string;
}

const Header: React.FC<HeaderComponentProps> = (props: HeaderComponentProps) => {
    const { heading } = props;
    return (
        <div className='commitment-page-heading'>{heading}</div>
    )
}


export default Header;
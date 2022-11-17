import React from 'react'

const Header = ({ title, subTitle }) => {
    return (
        <h1 className="title">
            {title}
            <span>{subTitle}</span>
        </h1>
    )
}

export default Header
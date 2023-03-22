import React from 'react'
import MyInput from '../UI/Input/MyInput'
import "./Header.css"

const Header = (props) => {
    return (
        <header className='header'>
            <h1 className='header_title'>Google Books</h1>
            <div className="header_search">
            <MyInput props={props}   placeholder="Поиск..." />
            </div>
        </header>
    )
}

export default Header

import React from 'react'

// Native
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

// Components
import SearchInput from 'components/SearchInput'

// Private
import './styles.scss'

const Header: React.FC = () => {
    return (
        <header className='Header'>
            <div className='content'>
                <Link to='/'>
                    <FaGithub />
                </Link>

                <SearchInput />
            </div>
        </header>
    )
}

export default Header
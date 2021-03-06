import React from 'react'

// Native
import { Link } from 'react-router-dom'

// Utils
import { UserProps } from 'utils/interfaces'

// Private
import './styles.scss'

interface LayoutProps {
    item?: UserProps;
}

const Item: React.FC<LayoutProps> = (props) => {
    const { item } = props

    return (
        <Link to={`/user/${String(item?.login)}`} className='Item'>
            <img src={item?.avatar_url} alt='user-photo' />

            <span>@{item?.login}</span>
        </Link>
    )
}

export default Item
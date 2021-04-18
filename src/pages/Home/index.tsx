import React, { useContext, useEffect } from 'react'

// Components
import Header from 'components/Header'

// Contexts
import { UserContext } from 'contexts/UserContext';

// Private
import Item from './Item'
import './styles.scss'

const Home: React.FC = () => {
    const { users, handleGetAll } = useContext(UserContext);

    useEffect(() => {
        handleGetAll()
    }, [])

    return (
        <div className='Home'>
            <Header />

            <main>
                {users?.map((user) => <Item item={user} />)}
            </main>
        </div>
    )
}

export default Home
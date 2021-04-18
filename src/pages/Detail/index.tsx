
import React, { useContext, useEffect } from 'react'

// Native
import { useHistory, useParams } from 'react-router'
import { FiMapPin } from "react-icons/fi";

// Components
import Header from 'components/Header';

// Context
import { UserContext } from 'contexts/UserContext'

// Private
import RepoList from '../../components/RepoList'
import './styles.scss'
import { validateUsername } from 'utils/validator';

interface RouteParams {
    username: string;
}

const Detail: React.FC = () => {
    const params = useParams<RouteParams>()
    const history = useHistory()

    const { user, handleGetUser } = useContext(UserContext);

    useEffect(() => {
        if (validateUsername(params.username)) {
            handleGetUser(params.username)
        } else {
            alert('Usuário invalido')
            history.push('/')
        }

    }, [params.username])


    return (
        <div className='Detail'>
            <Header />

            <main>
                <aside>
                    <img src={user?.avatar_url} alt='user-photo' />
                    <h1>{user?.name}</h1>
                    <h3>{user?.login}</h3>

                    <h4>
                        {user?.bio}
                    </h4>

                    {user?.location && <p><FiMapPin />{user?.location}</p>}
                </aside>

                <RepoList />
            </main>
        </div>
    )
}

export default Detail
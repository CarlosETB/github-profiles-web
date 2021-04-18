
import React, { useContext, useEffect, useState } from 'react'

// Native
import { AiOutlineStar, AiOutlineBook } from 'react-icons/ai'
import { Tabs, TabList, TabPanel } from 'react-tabs'
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

// Contexts
import { UserContext } from 'contexts/UserContext';

// Private
import Item from './Item'
import './styles.scss'

interface RouteParams {
    username: string;
}

const RepoList: React.FC = () => {
    const params = useParams<RouteParams>()
    const { t } = useTranslation("RepoList");

    const {
        repos,
        starred,
        handleGetRepos,
        handleGetStarred
    } = useContext(UserContext);

    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        handleGetRepos(params.username)
        handleGetStarred(params.username)
    }, [params.username])

    return (
        <div className='RepoList'>
            <Tabs
                className='tab'
                selectedIndex={tabIndex}
            >
                <TabList className='tab-list'>
                    <div className='tab-title'>
                        <button
                            onClick={() => setTabIndex(0)}
                            className={tabIndex === 0 ? 'active' : ''}
                        >
                            <AiOutlineBook /><p>{t('repositories')}</p>
                        </button>
                    </div>

                    <div className='tab-title'>
                        <button
                            onClick={() => setTabIndex(1)}
                            className={tabIndex === 1 ? 'active' : ''}
                        >
                            <AiOutlineStar /><p>{t('starred')}</p>
                        </button>
                    </div>
                </TabList>

                <TabPanel>
                    <div className="tab-content">
                        {repos?.map((response) => <Item item={response} />)}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="tab-content">
                        {starred?.map((response) => <Item item={response} starred />)}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default RepoList
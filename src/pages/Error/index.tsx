import React from 'react'

// Native
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'

// Components
import Header from 'components/Header'

// Private
import './styles.scss'

const Error: React.FC = () => {
    const { t } = useTranslation('Error')
    const history = useHistory()

    const handleGoHome = () => {
        history.push('/')
    }

    return (
        <div className='Error'>
            <Header />

            <main>
                <h1>{t('title')}</h1>
                <span>{t('text')}</span>
                <button onClick={handleGoHome}>{t('button')}</button>
            </main>
        </div>
    )
}

export default Error
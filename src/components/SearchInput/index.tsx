import React, { ChangeEvent, FormEvent, useState } from 'react'

// Native
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";

// Utils
import { validateUsername } from 'utils/validator';

// Private
import './styles.scss'

const SearchInput: React.FC = () => {
    const history = useHistory()
    const { t } = useTranslation("SearchInput");

    const [searchField, setSearchField] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchField(event.target.value);
    };

    async function handleSearch(event: FormEvent) {
        event.preventDefault()

        if (validateUsername(searchField)) {
            history.push(`/${searchField}`)
        } else {
            alert(t('invalid'))
        }
    }

    return (
        <form onSubmit={handleSearch}>
            <label className='SearchInput'>
                <input
                    id='search'
                    name='search'
                    type='text'
                    value={searchField}
                    onChange={handleChange}
                    placeholder={`${t('search')}...`}
                />

                <button type='submit'>
                    <FiSearch />
                </button>
            </label>
        </form>
    )
}

export default SearchInput
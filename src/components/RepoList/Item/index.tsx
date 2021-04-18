
import React from 'react'

// Native
import { AiOutlineStar, AiOutlineBranches } from 'react-icons/ai'
import { FaBalanceScale } from "react-icons/fa";
import { Link } from 'react-router-dom'

// Utils
import { languageColor } from 'utils/languageColor'
import { StarredProps } from 'utils/interfaces'

// Private
import './styles.scss'

interface ItemProps {
    starred?: boolean;
    item?: StarredProps;
}

const Item: React.FC<ItemProps> = (props) => {
    const { item, starred } = props

    return (
        <div className='ItemRepo'>
            <h2>
                {starred &&
                    <Link to={`/user/${String(item?.owner?.login)}`}>
                        {`${item?.owner?.login} / `}
                    </Link>}

                {item?.name}
            </h2>

            {item?.description && <h4>{item?.description}</h4>}

            <div>
                {item?.language &&
                    <span>
                        <div
                            className="language"
                            style={{
                                backgroundColor: languageColor(item?.language)
                            }}
                        />
                        {item?.language}
                    </span>
                }
                {Number(item?.stargazers_count) > 0 &&
                    <span><AiOutlineStar />{item?.stargazers_count}</span>}

                {Number(item?.stargazers_count) > 0 &&
                    <span><AiOutlineBranches />{item?.forks}</span>}

                {item?.license?.name &&
                    <span><FaBalanceScale />{item?.license?.name}</span>}
            </div>
        </div >
    )
}

export default Item
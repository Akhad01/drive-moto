import React, { useState } from 'react'
import AsideFilterContent from './AsideFilterContent'
import FilterItemContent from './FilterItemContent'

const FilterItem = (props) => {
    const [isActiveDrop, setIsActiveDrop] = useState(false)

    const handleToggleArrow = () => {
        setIsActiveDrop(!isActiveDrop)
    }

    return (
        <li className="aside-filter__item-drop">
            <p
                className={`aside-filter__item-title filter__item-drop ${
                isActiveDrop ? 'filter__item-drop--active' : ''
                }`}
                onClick={handleToggleArrow}
            >
                {props.title}
            </p>
            {isActiveDrop && (
                <FilterItemContent filterItem={props.filterItem} {...props} />
            )}
        </li>
    )
}

export default FilterItem
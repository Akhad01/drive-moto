import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { toggleLayout } from '../features/layoutSlice';

const CatalogFilterButton = () => {
    const dispatch = useDispatch()
    const [activeButton, setActiveButton] = useState('grid');

    const buttons = [
        { id: 'grid', svg: <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="21" height="19" stroke="#2F3035" strokeWidth="2"/>
        <rect x="7" y="6" width="2" height="2" fill="#2F3035" stroke="#2F3035" strokeWidth="2"/>
        <rect x="7" y="13" width="2" height="2" fill="#2F3035" stroke="#2F3035" strokeWidth="2"/>
        <rect x="14" y="6" width="2" height="2" fill="#2F3035" stroke="#2F3035" strokeWidth="2"/>
        <rect x="14" y="13" width="2" height="2" fill="#2F3035" stroke="#2F3035" strokeWidth="2"/>
        </svg> },
        { id: 'line', svg: <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="1">
        <rect x="6" width="19" height="3" rx="1.5" fill="#2F3035" />
        <rect
            x="6"
            y="8"
            width="19"
            height="3"
            rx="1.5"
            fill="#2F3035"
        />
        <rect
            x="6"
            y="16"
            width="19"
            height="3"
            rx="1.5"
            fill="#2F3035"
        />
        <rect width="3" height="3" rx="1.5" fill="#2F3035" />
        <rect y="8" width="3" height="3" rx="1.5" fill="#2F3035" />
        <rect y="16" width="3" height="3" rx="1.5" fill="#2F3035" />
        </g>
    </svg> }
    ]

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
        dispatch(toggleLayout(buttonId))
    };

    return (
        <>
            {
                buttons.map(button => (
                    <button 
                        className={`catalog__filter-btn${button.id} catalog__filter-button ${activeButton === button.id ? "catalog__filter-button--active" : "" }`}
                        onClick={() => handleButtonClick(button.id)} >
                        {
                            button.svg
                        }
                    </button>
                ))
            }
        </>
    )
}

export default CatalogFilterButton
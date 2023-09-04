import React from 'react'
import AsideFilterContent from './AsideFilterContent'



const FilterItemContent = ({ filterItem, isRadio }) => {
  return (
    <div className={`aside-filter__item-content ${isRadio ? "aside-filter__item-content-radio" : ""}`}>
        {
            filterItem.map(filter => {
                return filter.component(filter)
            })
        }
    </div>
  )
}

export default FilterItemContent
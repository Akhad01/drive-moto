import React from 'react'

const AsideFilterContent = ({type, title, body}) => {
  return (
    <div className="aside-filter__content-box">
      <label className="checkbox style-checkbox">
        <input type={type} name={type === "radio" ? "radio" : ""} />
        <div className={`checkbox__checkmark ${type === "radio" ? "radio__checkmark" : ""}`}></div>
        <div className="checkbox__body">
          {
            body ? <span className='btn-checked__text'>{title}</span> : title
          }
        </div>
      </label>
    </div>
  )
}

export default AsideFilterContent
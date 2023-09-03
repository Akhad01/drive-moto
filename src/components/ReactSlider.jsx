import React, { useState } from 'react'
import ReactSlider from 'react-slider'


const RangeSlider = () => {
  const [rangeValue, setRangeValue] = useState(["100000", "500000"])

  return (
    <>
        <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            defaultValue={[200000, 360000]}
            ariaLabel
            max={500000}
            min={100000}
            onChange={(value, index) => setRangeValue(value)}
        />
        <div className="range-parameters">
            <div className="range-parameter">от &nbsp;<span>{rangeValue[0]}</span></div>
            <div className="range-parameter">до &nbsp;<span>{rangeValue[1]}</span></div>
        </div>
    </>
  )
}

export default RangeSlider
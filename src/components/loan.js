import React from 'react'
import Slider from 'react-rangeslider'

const Loan = (props) => {
    return (
        <div className='slider'>
        <div className='label'>Select Your amount</div>
        <Slider
          min={500}
          max={5000}
          value={props.value}
          onChangeStart={props.onChangeStart}
          onChange={props.onChange}
          onChangeComplete={props.onChangeComplete}
        />
        <div className='value'>${props.children}</div>
      </div> 
    )
}

export default Loan
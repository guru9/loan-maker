import React from 'react'
import Slider from 'react-rangeslider'

const Period = (props) => {
    return (
        <div className='slider'>
        <div className='label'>Select Your amount</div>
        <Slider
          min={6}
          max={24}
          value={props.value}
          onChangeStart={props.onChangeStart}
          onChange={props.onChange}
          onChangeComplete={props.onChangeComplete}
        />
        <div className='value'>{props.children}</div>
      </div> 
    )
}

export default Period
import React from 'react'
import { Carousel as CarouselAntd } from 'antd'

const contentStyle = {
    width: '100%',
    height: '500px',
}

export default function Carousel() {
    const onChange = (currentSlide) => {
        console.log(currentSlide)
    }
    return (
        <CarouselAntd afterChange={onChange}>
            <div>
                <img
                    style={contentStyle}
                    src="https://cdnimg.vietnamplus.vn/uploaded/fsmsy/2019_12_25/mat_biec.jpg"
                    alt=""
                />
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </CarouselAntd>
    )
}

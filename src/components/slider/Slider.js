import React from "react"
import Carousel from 'react-bootstrap/Carousel'

export default function (props) {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={props.Image1} alt={props.Label1}/>
                <Carousel.Caption>
                    <h3>{props.Label1}</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={props.Image2} alt={props.Label2}/>
                <Carousel.Caption>
                    <h3>{props.Label2}</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={props.Image2} alt={props.Label2}/>
                <Carousel.Caption>
                    <h3>{props.Label2}</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
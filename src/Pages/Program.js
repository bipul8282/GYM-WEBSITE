import React from 'react'
import {Carousel} from "react-bootstrap"
import './Program.css'
function Program() {
  return (
    <div id='program'>

    <div className='programcomponent'>
    <div className='programmain'>
    <h3 className='programhead'>Training Program</h3>
    <div className='scroll'>
    <Carousel fade>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://thumbs.dreamstime.com/b/african-personal-trainer-helping-men-to-fill-membership-form-health-club-47294389.jpg"
          alt="First slide"
          height="500vh"
          width="20%"
        />
        <Carousel.Caption>
          <h3>Flexibility</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://thumbs.dreamstime.com/b/personal-trainer-assisting-women-lose-weight-gym-beautiful-woman-128818634.jpg"
          alt="Second slide"
          height="500vh"
          width="20%"
        />

        <Carousel.Caption>
          <h3>BodyBuilding</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://thumbs.dreamstime.com/b/personal-trainer-gym-15159974.jpg"
          alt="Third slide"
          height="500vh"
          width="20%"
        />

        <Carousel.Caption>
          <h3>Aerobic</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://thumbs.dreamstime.com/b/african-personal-trainer-helping-men-to-fill-membership-form-health-club-47294389.jpg"
          alt="First slide"
          height="500vh"
          width="20%"
        />
        <Carousel.Caption>
          <h3>Flexibility</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://t4.ftcdn.net/jpg/01/11/39/63/360_F_111396381_28yE6BKl7xF5znOmTB8a5aJIuizW5aay.jpg"
          alt="First slide"
          height="500vh"
          width="20%"
        />
        <Carousel.Caption>
          <h3>Yoga</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://www.usnews.com/dims4/USNEWS/8b22b54/2147483647/crop/2000x1334%2B0%2B0/resize/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F80%2F97%2Fcba0db8a4625aac2b5e61336e13a%2F191212-scale-stock.jpg"
          alt="First slide"
          height="500vh"
          width="20%"
        />
        <Carousel.Caption>
          <h3>WeightLoss</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://ik.imagekit.io/jhrhgmul6/venketfitness/wp-content/uploads/2021/10/Low-Budget-Diet-Plan.jpg"
          alt="First slide"
          height="500vh"
          width="20%"
        />
        <Carousel.Caption>
          <h3>Healthy diet-Plan</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Program
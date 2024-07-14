import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../styles/About-section.css'
import aboutImg from '../../assets/all-images/cars-img/bmw-offer.png'

const AboutSection = () => {
  return (
  <section className='about__section'>
    <Container>
        <Row>
            <Col lg='6' md='6'>
                <div className='about__section-content'>
                    <h4 className='section__subtitle'>About us</h4>
                    <h2 className='section__title'>Welcome to car rent service</h2>
                    <p className='section__description'>
                    A car is a machine that helps us travel from one place to another. It has four wheels and an engine that makes it move. Cars can be different colors like red, blue, or yellow. Some cars are big and can carry many people, while others are small for just a few people. Cars have seats for people to sit and a steering wheel for driving. Cars need fuel to work, just like we need food to have energy. They also have lights to help us see at night. We must always wear a seatbelt in a car for safety.
                    </p>

                <div className='about__section-item d-flex align-items-center'>
                    <p className='section__description d-flex align-item-center gap-2'>
                    </p>

                    <p className='section__description d-flex align-item-center gap-2'>
                    </p>
                </div>
                </div>
            </Col>

            <Col lg='6' md='6'>
                <div className='about__img'>
                    <img src={aboutImg} alt="" className='w-100'/>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
  )
}

export default AboutSection
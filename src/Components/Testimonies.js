import React from 'react'
import ProfilePic from '../Assets/john-doe-image.png'
import {AiFillStar} from 'react-icons/ai'

const Testimonies = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonial</p>
            <h1 className='primary-heading'>What They're saying</h1>
            <p className='primary-text'>
                Lorem ipsum dolor sit amet consectetur.
                Non tincidunt magna non et elit.
            </p>           
        </div>
        <div className='testimonial-section-bottom'>
            <img src={ProfilePic} alt='' />
            <p>
                Lorem ipsum dolor sit amet consectetur. Non
                Tincidunt magna non elit.
            </p>
            <div className='testimonials-stars-container'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h2>João Doido</h2>
        </div>
    </div>
  )
}

export default Testimonies
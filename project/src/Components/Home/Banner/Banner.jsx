import React from 'react'
import "./Banner.scss";
import BannerImg from '../../../../src/assets/banner-img.png';
function Banner() {
  return (
    <div className='hero-banner'>
      <div className='content'>
        <div className='text-content'>
            <h1>SALES</h1>
            <p>
                Lorem Ipsum es simplemente el texto de relleno de las 
                imprentas y archivos de texto. <br/>Lorem Ipsum ha sido el 
                texto de relleno estándar de las industrias desde el año 1500,
            </p>
            <div className='ctas'>
                <div className='banner-cta'>Read More</div>
                <div className='banner-cta v2'>Shope Now</div>
            </div>
        </div>
        <img  className='banner-img' src={BannerImg} alt=''></img>
      </div>
    </div>
  )
}

export default Banner

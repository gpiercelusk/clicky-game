import React from 'react';
import "./Hero.css";

function Hero() {
  return (
    <section className='hero is-info has-text-centered'>
      <div className='hero-body'>
        <div className='container'>
          <img class="title-logo" src='https://help.redbubble.com/hc/article_attachments/360023220451/RS_Logo.png' alt='Regular Show logo' />
          <h2 className='subtitle'>
            Click on an image to earn points, if you click on the same image twice the game is over!
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Hero
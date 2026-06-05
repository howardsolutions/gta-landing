import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Hero() {
  return (
    <section className='hero-section'>
      <div className='size-full mask-wrapper'>
        <img
          src='/images/hero-bg.webp'
          alt='background of the hero section'
          className='scale-out'
        />
        <img
          src='/images/hero-text.webp'
          alt='hero-logo'
          className='title-logo fade-out'
        />
        <img
          src='/images/watch-trailer.png'
          alt='Trailer'
          className='trailer-logo fade-out'
        />
        {/* Play btn */}
        <div className='play-img fade-out'>
          <img src='/images/play.png' alt='play' className='w-7 ml-1' />
        </div>
      </div>

      <div>
        <img src='' alt='' />
      </div>
    </section>
  );
}

export default Hero;

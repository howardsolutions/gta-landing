import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ComingSoon from './ComingSoon';
import { useMaskSettings } from '../../constants/index';

const BIG_HERO_TEXT_SRC = '/images/big-hero-text.svg';

function Hero() {
  const { initialMaskPos, initialMaskSize, maskSize } = useMaskSettings();

  useGSAP(() => {
    gsap.set('.mask-wrapper', {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    });

    gsap.set('.mask-logo', { marginTop: '-100vh', opacity: 0 });

    gsap.set('.entrance-message', { marginTop: '0vh' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-section',
        // start when the top of the hero section reach top of the viewport
        start: 'top top',
        // scrub: sync the scroll position to the SCROLL PROGRESS with smoothing delay of 2.5
        scrub: 2.5,
        // keep the animation end after 200% of the start position (because we have 2 section scroll into one.)
        end: '+=200%',
        pin: true,
      },
    });

    tl.to('.fade-out', {
      opacity: 0,
      ease: 'power1.inOut',
    })

      .to('.scale-out', { scale: 1, ease: 'power1.inOut' })
      .to('.mask-wrapper', { maskSize, ease: 'power1.inOut' }, '<')
      .to('.mask-wrapper', { opacity: 0 })
      .to(
        '.overlay-logo',
        {
          opacity: 1,
          onComplete: () => {
            gsap.to('.overlay-logo', { opacity: 0 });
          },
        },
        '<',
      )
      .to(
        '.entrance-message',
        {
          duration: 1,
          ease: 'power1.inOut',
          maskImage:
            'radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)',
        },
        '<',
      );
  }, []);

  return (
    <section className='hero-section'>
      <div className='size-full mask-wrapper'>
        {/* bg image */}
        <img
          src='/images/hero-bg.webp'
          alt='background'
          className='scale-out'
        />
        {/* main hero text */}
        <img
          src='/images/hero-text.webp'
          alt='hero-logo'
          className='title-logo fade-out'
        />
        {/* trailer text  */}
        <img
          src='/images/watch-trailer.png'
          alt='trailer'
          className='trailer-logo fade-out'
        />
        {/* play btn */}
        <div className='play-img fade-out'>
          <img src='/images/play.png' alt='play' className='w-7 ml-1' />
        </div>
      </div>

      <div>
        <img
          src={BIG_HERO_TEXT_SRC}
          alt='logo'
          className='size-full object-cover mask-logo'
        />
      </div>

      <div className='fake-logo-wrapper'>
        <img src={BIG_HERO_TEXT_SRC} alt='logo' className='overlay-logo' />
      </div>

      <ComingSoon />
    </section>
  );
}

export default Hero;

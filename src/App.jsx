import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Hero from './sections/Hero';
import FirstVideo from './sections/FirstVideo';

// Set up plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main>
      <Hero />
      <FirstVideo />
    </main>
  );
}

export default App;

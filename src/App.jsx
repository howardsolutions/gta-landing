import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Hero from './sections/Hero';
import FirstVideo from './sections/FirstVideo';
import Jason from './sections/Jason';

// Set up plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main>
      <Hero />
      <FirstVideo />
      <Jason />
    </main>
  );
}

export default App;

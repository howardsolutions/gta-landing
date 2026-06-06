import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Hero from './sections/Hero';
import FirstVideo from './sections/FirstVideo';
import Jason from './sections/Jason';
import SecondVideo from './sections/SecondVideo';
import Lucia from './sections/Lucia';

// Set up plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main>
      <Hero />
      <FirstVideo />
      <Jason />
      <SecondVideo />
      <Lucia />
    </main>
  );
}

export default App;

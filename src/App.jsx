import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

// Set up plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main>
      <div className='text-3xl text-indigo-600'>Welcome to GTA and GSAP</div>
    </main>
  );
}

export default App;

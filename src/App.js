import { useState} from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Section8 from './components/Section8';

function App () {
  const [dark, setDark] = useState (false);
  const darkButtonHandler = () => {
    setDark (!dark);
  };

    
  
  return (
    <div
      className={` relative  ${dark ? ' dark:bg-slate-800 dark:text-white ' : null}`}
    >
      {/* the navbar */}
      <Navbar className='hiddenSection' darkButtonHandler={darkButtonHandler} dark={dark} />
      <div
        aria-hidden="true"
        className="  absolute top-0 right-0   md:mr-0 :mr-[600px]     -z-10"
      >
        <svg
          className=" w-[800px]  "
          height="502"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="400"
            cy="102"
            r="400"
            fill="url(#heroglow_paint0_radial)"
            fillOpacity=".6"
          />
          <circle
            cx="209"
            cy="289"
            r="170"
            fill="url(#heroglow_paint1_radial)"
            fillOpacity=".4"
          />
          <defs>
            <radialGradient
              id="heroglow_paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(90 149 251) scale(315.089)"
            >
              <stop stopColor="#3ABAB4" />
              <stop offset="1" stopColor="#3ABAB4" stopOpacity=".01" />
            </radialGradient>
            <radialGradient
              id="heroglow_paint1_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(90 -40 249) scale(133.913)"
            >
              <stop stopColor="#667EEA" />
              <stop offset="1" stopColor="#667EEA" stopOpacity=".01" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      {/* the navbar */}
      <Section1 />
      {/*  */}
      <Section2 />
      {/*  */}
      <Section3 />
      {/*  */}
      <Section4/>
      {/*  */}
      <Section5/>
      {/*  */}
      <Section6/>
      {/*  */}
    <Section7/>
    {/*  */}
    <Section8/>
    {/*  */}
    <Footer/>
    </div>
  );
}

export default App;

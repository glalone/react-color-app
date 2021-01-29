import { useState } from 'react';
import ColorGen from './components/ColorGen';
import Header from './components/Header';

function App() {
  const [colorG, setColorG] = useState('	#FFFFFF');
  const onClick = () => {
    console.log(colorG);
    const randomColor = require('randomcolor');
    setColorG(
      randomColor({
        luminosity: 'random',
        hue: 'random',
      }),
    );
  };

  return (
    <div
      className="container"
      style={{
        backgroundColor: 'green',
      }}
    >
      <Header
        handler={onClick}
        title="Random Color App"
        btnText="shuffle color"
      />
      {/* <Button text="shuffle color" /> */}
      {/* <ColorDisplay lum="random" hue="random" testHex={colorG} /> */}
      <ColorGen hex={colorG} />
    </div>
  );
}

export default App;

// style={{
//   backgroundImage: `url("https://gtswiki.gt-beginners.net/decal/png/64/60/41/5053702955739416064_1.png")`,
//   backgroundImage: `url("https://www.pngkey.com/png/full/61-618676_marilyn-monroe-gr-marilyn-monroe-andy-warhol-black.png")`,
//   backgroundColor: 'green',
// }}

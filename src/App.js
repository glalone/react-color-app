import { useState } from 'react';
import ColorGen from './components/ColorGen';
import Footer from './components/Footer';
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
        backgroundColor: colorG,
        backgroundImage: `url("bottle.png")`,
      }}
    >
      <Header
        handler={onClick}
        title="Random Color App"
        btnText="shuffle color"
        titleCol={colorG}
      />
      <ColorGen hex={colorG} />
      <Footer hex={colorG} />
    </div>
  );
}

export default App;

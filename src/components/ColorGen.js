import PropTypes from 'prop-types';

const ColorGen = ({ hex }) => {
  // const randomColor = require('randomcolor');
  // const hex2 = randomColor({
  //   luminosity: lumin,
  //   hue: huein,
  // });
  console.log({ hex });
  return (
    <div>
      <h1 style={{ backgroundColor: hex, color: 'white', width: '150px' }}>
        {hex}
      </h1>
    </div>
  );
};

ColorGen.defaultProps = {
  colorG: '#FFFFFF',
};

ColorGen.propTypes = {
  hex: PropTypes.string,
};

export default ColorGen;

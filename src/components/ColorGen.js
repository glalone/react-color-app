import PropTypes from 'prop-types';

const ColorGen = ({ hex }) => {
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

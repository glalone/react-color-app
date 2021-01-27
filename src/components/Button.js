import PropTypes from 'prop-types';

const Button = ({ color, text }) => {
  const onClick = () => {
    console.log('click');
  };
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      classname="btn"
    >
      {text}
    </button>
  );
};
Button.defaultProps = {
  title: 'c`est la vie',
};

Button.defaultProps = {
  color: 'blue',
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;

import PropTypes from 'prop-types';

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="btn">
      {text}
    </button>
  );
};

Button.defaultProps = {
  // color: 'blue',
  text: 'c`est la vie',
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  // color: PropTypes.string,
};

export default Button;

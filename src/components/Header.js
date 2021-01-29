import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, btnText, handler }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text={btnText} onClick={handler} />
    </header>
  );
};
Header.defaultProps = {
  title: 'c`est la vie',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

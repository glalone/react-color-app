import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
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

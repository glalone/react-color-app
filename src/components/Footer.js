import Choose from './Choose';

const Footer = ({ hex }) => {
  return (
    <footer className="footer" style={{ backgroundColor: hex }}>
      <p>Choose</p>
      <p>Color</p>
      <Choose hex1={hex} />
    </footer>
  );
};

export default Footer;

const ColorDisplay = ({ hex }) => {
  return (
    <div style={{ backgroundColor: hex }}>
      <h1>{hex}</h1>
    </div>
  );
};

export default ColorDisplay;

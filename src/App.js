import Button from './components/Button';
import ColorDisplay from './components/ColorDisplay';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <Header title="Random Color App2" />
      <Button color="yellow" text="shuffle color" />
      <ColorDisplay hex="#2596be" />
    </div>
  );
}

export default App;

import { Button } from './reusableComponents/Button';
import './App.css';

function App() {

  const logIt = () => {
    console.log('button clicked')
  }

  return (
    <div className="App">
      <Button handleClick={logIt} label={'log to console'} type={'primary'} />
      <Button handleClick={logIt} label={'not passing type'} />

    </div>
  );
}

export default App;

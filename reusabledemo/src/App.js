import { Button } from './reusableComponents/button/Button';
import './App.css';
import { Avatar } from './reusableComponents/avatar/Avatar';
import { Hamburger } from './reusableComponents/hamburger/Hamburger';

function App() {

  const logIt = () => {
    console.log('button clicked')
  }

  return (
    <div className="App">
      <Button handleClick={logIt} label={'log to console'} type={'primary'} />
      <Button handleClick={logIt} label={'not passing type'} />
      <Avatar type={'small'} image={'https://bit.ly/3DNmtbS'} alt={'profile pic'} />
      <Avatar type={'normal'} image={'https://bit.ly/3DNmtbS'} alt={'profile pic'} />
      <Avatar type={'large'} image={'https://bit.ly/3DNmtbS'} alt={'profile pic'} />
      <div className="menu">
        <Hamburger />
      </div>


    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Intro from './Components/Intro';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    return () => {
      const timer = setTimeout(()=>{
        navigate('/')
        }, 3000)
    }
  }, [])
  
  return (
    <div className="App">
      <Intro/>

    </div>
  );
}

export default App;

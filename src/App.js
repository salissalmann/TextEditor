import './App.css';
import { useState } from 'react';
import Tutorial1 from './components/Tutorial1';
import Tutorial2 from './components/Tutorial2';
import Tutorial3 from './components/Tutorial3';
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom';


function App() 
{
  const [Theme, setTheme] = useState('light');  
  const ChangeMode = ()=>
  {
    if (Theme==='light')
    {
      setTheme("dark");
      document.body.style.backgroundColor = "#212529";
    }
    else
    {
      setTheme("light");
      document.body.style.backgroundColor = "#F8F9FA";
    }
  }


  return (
    <>
      <Tutorial1 title="Text-Utilities" mode={Theme} ModeFunc={ChangeMode} />  {/*Navigation Bar and Props */}
      {/*<Tutorial2 heading="TextBox"/>                                    Forms and Controls*/}
      {/*<Tutorial3/>                                                      Dark Mode Challenge*/ }
    
    
    
      <Router>
      <Routes>
          <Route path="/" element={<Tutorial2 heading="TextBox"/>} /> 
          <Route path="/home" element={<Tutorial2 heading="TextBox"/>}/> 
      </Routes>
    </Router>



    </>
  );
}

export default App;

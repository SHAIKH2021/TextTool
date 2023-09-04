import React from 'react';
import {useState} from 'react';
import Article from './ArticleComponent/Article';
import {Header} from './HeaderComponent/Header'
import { NavBar } from './NavBarComponent/NavBar';


export default function App(){
  const [mode,setMode] = useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#2E2E2E'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
    }
  }
  const toggleBlueMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#58ACFA';
     // document.body.style.form-control.backgroundColor='#0B3B17';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  return(
      <div>
        <Header></Header>
        <NavBar mode={mode} toggleMode={toggleMode} toggleBlueMode={toggleBlueMode}></NavBar>
        <Article mode={mode} heading="Enter text to analyze"></Article>
      </div>
  );
}
import React, { useState } from 'react';


function Options(props){
  const bgColor = props.name === props.selected ? 'cyan' : ''
  const style = {
    backgroundColor: bgColor,
    border: `1px solid black`,
    borderRadius: '3px',
    margin: '7px',
    padding: '10px',
    fontFamily: 'sans-serif'
  }
  return <div style={style} onClick={props.onClick}>{props.name.toUpperCase()}</div>
}

function JokenElements() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const style = {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '40px'
  }
  
  return (
    <div style = {style}>
      <Options name={'pedra'} selected={selectedOption} onClick={()=>{handleOptionClick('pedra')}}/>
      <Options name={'papel'} selected={selectedOption} onClick={()=>{handleOptionClick('papel')}}/>
      <Options name={'tesoura'} selected={selectedOption} onClick={()=>{handleOptionClick('tesoura')}}/>
    </div>
  );
}

function ChoseOption(){
  return <>
    <div>
      <h1 style={{textAlign: 'center', fontSize: 70}}>Jankenpon</h1>
      <hr/>
      <p style={{fontFamily: 'sans-serif', fontSize: '20px', margin: '0px'}}>Escolha sua mão</p>
      <JokenElements/>
      <button>Teste</button>
    </div>
  </>
}

function Result(){
  return <>
    <div style={{border: 'solid', padding: '10px'}}>

    </div>
  </>
}

function Main(){
  return <>
      <ChoseOption/>
      <Result/>
  </>
}

export default Main;

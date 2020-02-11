import React from 'react';
import './App.css';
import StopWatch from './components/comp';
import Counter from './components/Click';
import NameForm from './components/NameForm';
import MyFormControl from './components/ControlFormValue';
import RendList from './components/RenderingList'

function App() {
  return (
    <div className="App">
      {/* <StopWatch></StopWatch>
      <Counter></Counter>
      <NameForm 
      getErrorMessage = {value=>{
        if(value.length < 3){
          return `Value must be at least 3 character,but is only 0`
        }
        if(!value.includes('s')){
          return `Value does not include 's' but it should`
        }
        return null
      }}
      />
      <MyFormControl></MyFormControl>
      <RendList />
       */}
       
    </div>
  );
}

export default App;

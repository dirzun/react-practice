import React from 'react';
import './App.css';
import SetPro from './Components/SetProp.js'
import StateSetState from './Components/StateSetState'
import ComponentAC from './Components/ComponentAsChildren'
import CustomPropValidation from './Components/CustomPropTypeValidation';
import EvReactSynt from './Components/EventReactSyntEvent'
import ReferenceToSpecificCom from './Components/ReferenceToSpecificComp';
import Wrapper from './Components/ComponentLifecycleMethods';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      {/*
       <SetPro />
      <StateSetState />
      < ComponentAC />
      <CustomPropValidation />
      <EvReactSynt/>
      <ReferenceToSpecificCom />
      <Wrapper />
      */}
      
    </div>
  );
  }
}

export default App;

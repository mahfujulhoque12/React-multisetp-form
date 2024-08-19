
import { Step, StepLabel, Stepper } from '@mui/material';
import './App.css';
import FristStep from './components/FristStep';
import SecStep from './components/SecStep';
import ThirdSetp from './components/ThirdSetp';
import { multiStepContext } from './StepContext';

import { useContext } from 'react';
import DisplayData from './components/DisplayData';

function App() {
  const {step,finalData}=useContext(multiStepContext)

  const showStep = (step)=>{
    switch(step){
      case 1:
      return <FristStep/>
      case 2:
        return <SecStep/>
        case 3 :
          return <ThirdSetp/>
      default:
        return null    
    }
  }
  return (
    <div className="App">

      <h1 style={{color:'salmon', textDecoration:'underline'}}>React Js Multistep Application</h1>
      <div className="center-stepper">
        <Stepper style={{width:'18%'}} activeStep={step-1} orientation='horizontal'>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>

      </div>
      {showStep(step)}
      <br />
      {finalData.length >0 ?  <DisplayData/>: 'No Data here' }

    </div>
  );
}

export default App;

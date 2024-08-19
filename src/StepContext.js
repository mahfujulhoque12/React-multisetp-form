import React, { createContext, useState } from 'react';
import App from './App';
export const multiStepContext = createContext();
const StepContext = () => {
 
    const [step,setStep]=useState(1)
    const [userData,setUserData]=useState([])
    const [finalData,setFinalData]=useState([])

    const submitData= ()=>{
        setFinalData(finalData=>[...finalData, userData]);
        setUserData('');
        setStep(1);
    }

    return (
        <div>
            <multiStepContext.Provider value={{step,setStep,userData,setUserData,finalData,setFinalData,submitData}}>
            <App/>
            </multiStepContext.Provider>
        </div>
    );
};

export default StepContext;
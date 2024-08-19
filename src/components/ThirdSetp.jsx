import React, { useContext } from 'react';
import { Button, TextField } from '@mui/material';
import { multiStepContext } from '../StepContext';
const ThirdSetp = () => {
    const {setStep,userData,setUserData,submitData}=useContext(multiStepContext)
    return (
        <div>
        <div>
            <TextField label="City" margin='normal' variant='outlined' color='secondary'
            value={userData.city} onChange={(e)=>setUserData({...userData, city: e.target.value})} />
        </div>
        <div>
            <TextField label="Landmark" margin='normal' variant='outlined' color='secondary'
            value={userData.landmark} onChange={(e)=>setUserData({...userData, landmark: e.target.value})} />
        </div>
        <div>
            <TextField label="Postal code" margin='normal' variant='outlined' color='secondary' 
            value={userData.postalcode} onChange={(e)=>setUserData({...userData, postalcode: e.target.value})}/>
        </div>

        <div>
        <Button variant='contained' color='secondary' onClick={()=>{setStep(2)}}> Back</Button>
        <span/>      <span/>       <span/>       <span/> 
            <Button variant='contained' color='primary' onClick={submitData}> Submit</Button>
        </div>

    </div>
    );
};

export default ThirdSetp;
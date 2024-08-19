import { Button, Input, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { multiStepContext } from '../StepContext';

const FristStep = () => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        setUserData({ ...userData, image: imageUrl });
    };

    return (
        <div>
            <div>
                <TextField 
                    label="First name" 
                    margin='normal' 
                    variant='outlined' 
                    color='secondary'  
                    value={userData.firstName}
                    onChange={(e) => setUserData({ ...userData, firstName: e.target.value })} 
                />
            </div>

            <div>
                <TextField 
                    label="Last name" 
                    margin='normal' 
                    variant='outlined' 
                    color='secondary' 
                    value={userData.lastName} 
                    onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} 
                />
            </div>
            
            <div>
                <Typography 
                    margin='normal' 
                    variant='outlined' 
                    color='secondary'>
                        Upload Image
                        </Typography>
             
            </div>
            <div>
            <Input
                      margin='normal' 
                      variant='outlined' 
                      color='secondary'
                    type="file"
                    inputProps={{ accept: 'image/*' }}
                    onChange={handleImageUpload}
                />
            </div>
            
            <div>
                <TextField 
                    label="Contact number" 
                    margin='normal' 
                    variant='outlined' 
                    color='secondary' 
                    value={userData.contactNumber} 
                    onChange={(e) => setUserData({ ...userData, contactNumber: e.target.value })} 
                />
            </div>

            <div>
                <Button variant='contained' color='primary' onClick={() => { setStep(2) }}>Next</Button>
            </div>
        </div>
    );
};

export default FristStep;

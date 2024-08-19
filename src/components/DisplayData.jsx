import React, { useContext } from 'react';
import { multiStepContext } from '../StepContext';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const DisplayData = () => {
    const { finalData } = useContext(multiStepContext);
    console.log(finalData, 'final data---------------');

    return (
        <div>
            <TableContainer style={{ display: 'flex', justifyContent: 'center' }}>
                <Table border="1" style={{ width: '70%', justifyContent: 'center' }} size='small' aria-label='caption table'>
                    <TableHead>
                        <TableRow style={{ backgroundColor: 'burlywood', color: 'aliceblue' }}>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Contact Number</TableCell>
                            <TableCell>Email Address</TableCell>
                            <TableCell>Country</TableCell>
                            <TableCell>District</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Landmark</TableCell>
                            <TableCell>Postal Code</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {finalData.map((data) => (
                            <TableRow key={data.email}>
                                <TableCell>{data.firstName}</TableCell>
                                <TableCell>{data.lastName}</TableCell>
                                <TableCell>
                                    {data.image && <img src={data.image} alt="Uploaded" style={{ width: '100px', height: '100px' }} />}
                                </TableCell>
                                <TableCell>{data.contactNumber}</TableCell>
                                <TableCell>{data.email}</TableCell>
                                <TableCell>{data.country}</TableCell>
                                <TableCell>{data.district}</TableCell>
                                <TableCell>{data.city}</TableCell>
                                <TableCell>{data.landmark}</TableCell>
                                <TableCell>{data.postalcode}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default DisplayData;

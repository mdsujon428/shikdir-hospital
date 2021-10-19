import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='my-3'>
            <h1 className='text-danger'>404 This Page is Not Found</h1>
            <NavLink to='/home' style={{width:'110px',height:'15px',margin:'5px',padding:'10px',color:'white',background:'blue'}}>Go Back</NavLink>
        </div>
    );
};

export default NotFound;
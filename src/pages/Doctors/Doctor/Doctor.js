import React from 'react';

const Doctor = ({doctor}) => {
    const {name,degree,designation,institution,room,block,time,serileDay} = doctor;
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{degree}</td>
                <td>{designation}</td>
                <td>{institution}</td>
                <td>{room}</td>
                <td>{block}</td>
                <td>{time}</td>
                <td>{serileDay}</td>
            </tr>
        </>
    );
};

export default Doctor;
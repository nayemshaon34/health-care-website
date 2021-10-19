import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

const Services = () => {
    const [course,setCourse] = useState([]);
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=5')
        .then(res => res.JSON())
        .then(data => setCourse(data))
    },[])
    
    const newCourse = course.slice(0,4);
    console.log(newCourse);
       
    return (
        <div>
            
        </div>
    );
};

export default Services;
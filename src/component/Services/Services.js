import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
        const [course,setCourse] = useState([]);
        useEffect(()=>{
            fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setCourse(data))
        },[])
    
        const newCourse = course.slice(9,17);
        console.log(newCourse);
    return (
        <div>
            <h1 className="text-4xl font-semibold mt-20">Our Services</h1>
            <div className="card-contain my-12">
            
            <div className="card-contanier">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                      {
                          newCourse.map(course => <Service
                            course={course}
                            key={course.index}
                            ></Service>)
                      }      
                </div>
            </div>         
        </div>
        </div>
    );
};

export default Services;
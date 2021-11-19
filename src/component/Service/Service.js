import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({course}) => {
    const {courseName,picture,courseDes,index} =course;

    return (
        <div>
            <div className="col card-contain">
        <div className="card h-100">
            <img src={picture} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body  cart">
                     <div className="course-info d-flex justify-content-around my-3">
                        <h4 className="card-title text-4xl">{courseName}</h4>
                        
                     </div>
                     <div className="d-flex justify-content-around my-2">
                     </div>
                     <div className="description">
                         {courseDes}
                     </div>
                     <div className="container d-flex justify-content-around mt-4 mb-3">
                         <button className="btn btn-outline-success">For Service</button>
                         

                         <Link to={`/service/${index}`}>
                        <button className="btn btn-outline-primary">Details</button>
                    </Link>
                     </div>
                </div>
         </div>
    </div>
        </div>
    );
};

export default Service;
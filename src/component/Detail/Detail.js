import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import './Detail.css'

const Detail = () => {
    const [course,setCourse] = useState([]);
        useEffect(()=>{
            fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setCourse(data))
        },[])
        const newCourse = course.slice(9,17);
    return (
        <div>
            <Banner></Banner>
            <div className="div mt-5 mb-5">
                <h1>All Courses:</h1>
            </div>
             <div className="card-contain container">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                      {
                          newCourse.map(course => 
                            <div class="col">
                                <div class="card h-100">
                                    <img src={course.picture} class="card-img-top" alt="..."/>
                                        <div class="card-body  cart">
                                             <div className="course-info d-flex justify-content-around my-3">
                                                <h4 class="card-title ">{course.courseName}</h4>
                                                
                                             </div>
                                             <h6 className="mb-3 text-center"><small>Price: £{course.price} </small></h6>
                                             <div className="d-flex justify-content-around my-2">
                                                <h6>Duration: <small>{course.hours}</small></h6>
                                                <p class="card-text">Rating: ({course.rating})</p>
                                             </div>
                                             <div className="description">
                                                 {course.courseDes}
                                             </div>
                                             <div className="container d-flex justify-content-around mt-4 mb-3">
                                                 <button className="btn btn-outline-success">Apply Now</button>
                                                 <button className="btn btn-outline-primary">Details</button>
                                             </div>
                                        </div>
                                 </div>
                            </div>)
                      }      
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Detail;
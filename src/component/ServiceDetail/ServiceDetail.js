import React from 'react';
import { Col } from 'react-bootstrap';

const ServiceDetail = ({service}) => {
        return (
        <Col xs={12} md={6} lg={4} className="mx-auto">
            <div className="bg-light border">
            <div className="p-4">
                    <div className="d-flex align-items-center">
                        <img src={service.picture} alt="" width="36" />
                        <h4 className="fw-bold ms-2 d-inline-block fs-2">{service.courseName}</h4>
                    </div>
                    
                    
                </div>
                <div>
                    <img src={service.picture} alt="" className="img-fluid" />
                </div>
                <p className="mt-2 ms-1 ms-md-2 text-lg ms-lg-3 ms-xl-5 mb-3 text-center">{service.courseDes}</p>
                
                <p className="text-lg">For More: Please Call </p>

                <p className="text-lg text-info">800-123-4567

</p>
            </div>
        </Col>
    )
};

export default ServiceDetail;
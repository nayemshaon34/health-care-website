import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faWheelchair } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Emergency.css'

const Emergency = () => {
    const whatsApp = <FontAwesomeIcon icon={faWhatsapp} />
    const chair = <FontAwesomeIcon icon={faWheelchair} />
    return (
        <div className="emergency p-6 ">
            <div className="grid grid-cols-6 position">
            <div className="pos">
            <div>
                <h1 className="text-5xl mr-2">{whatsApp}</h1>
            </div>
            <div>
                <h2> 
                    <small>24/7 service available</small><br />
                    <span className='text-yellow-50'>01 300 383 3433 </span>
                </h2>
            </div>
            </div>

            <div className="pos">
                <div>
                    <h1 className="text-5xl mr-1">{chair}</h1>    
                </div>
                <div>
                    <h2> 
                        <small> our brochure 2022</small><br />
                        <span className='text-yellow-50'>Read Now </span>
                    </h2>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Emergency;
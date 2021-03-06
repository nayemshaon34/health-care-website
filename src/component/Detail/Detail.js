import React from 'react';
import { useParams } from 'react-router';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Detail.css'

const Detail = () => {
    const { serviceId } = useParams();
    console.log(serviceId);
    const services = [
        {
          "_id": "616dbc3258fff8a9e541535b",
          "index": 0,
          "isActive": true,
          "picture": "https://i.ibb.co/jw0dc7P/d-2.jpg",
          "age": 35,
          "courseName": "Deena Silva",
          "gender": "female",
          "email": "deenasilva@phormula.com",
          "rating": 2921
        },
        {
          "_id": "616dbc329118bc2e7be223b2",
          "index": 1,
          "isActive": true,
          "picture": "https://i.ibb.co/ZLM7PMd/d-3.jpg",
          "age": 29,
          "courseName": "Shelia Combs",
          "gender": "female",
          "email": "sheliacombs@phormula.com",
          "rating": 2142
        },
        {
          "_id": "616dbc32564c73248deee088",
          "index": 2,
          "isActive": false,
          "picture": "https://i.ibb.co/zR9127z/d-4.jpg",
          "age": 43,
          "courseName": "Sutton Gilmore",
          "gender": "male",
          "email": "suttongilmore@phormula.com",
          "rating": 271
        },
        {
          "_id": "616dbc32abd8f6d714c8b724",
          "index": 3,
          "isActive": true,
          "picture": "https://i.ibb.co/mzPrtmW/d-1.jpg",
          "age": 28,
          "courseName": "Allie Meyer",
          "gender": "female",
          "email": "alliemeyer@phormula.com",
          "rating": 2584
        },
        {
          "_id": "616dbc321ed4ec50e2e8d50b",
          "index": 4,
          "isActive": false,
          "picture": "https://i.ibb.co/P4TxHbG/d-5.jpg",
          "age": 32,
          "courseName": "Newton Mcclain",
          "gender": "female",
          "email": "newtonmcclain@phormula.com",
          "rating": 450
        },
        {
          "_id": "616dbc3233332844999a5326",
          "index": 5,
          "isActive": false,
          "picture": "https://i.ibb.co/bmJJnRb/d-6.jpg",
          "age": 35,
          "courseName": "Greer Burnett",
          "gender": "female",
          "email": "greerburnett@phormula.com",
          "rating": 1083
        },
        {
          "_id": "616dbc32ebb07533c6bc3514",
          "index": 6,
          "isActive": false,
          "picture": "https://i.ibb.co/93YKCWw/d-7.jpg",
          "age": 34,
          "courseName": "Welch Colon",
          "gender": "male",
          "email": "welchcolon@phormula.com",
          "rating": 2588
        },
        {
          "_id": "616dbc32e492b9359a4bd48b",
          "index": 7,
          "isActive": false,
          "picture": "https://i.ibb.co/Cnqn1d8/d-8.jpg",
          "age": 38,
          "courseName": "Boyle Mercado",
          "gender": "male",
          "email": "boylemercado@phormula.com",
          "rating": 745
        },
        {
          "_id": "616dbc321ab78eccd7a152160",
          "index": 8,
          "isActive": false,
          "picture": "https://i.ibb.co/TgKxNNp/d-9.jpg",
          "age": 42,
          "courseName": "Beth David",
          "gender": "female",
          "email": "bethdavid@phormula.com",
          "rating": 3445
        },
        {
          "_id": "616dbc321ab78esccd7152160",
          "index": 9,
          "isActive": false,
          "picture": "https://live.linethemes.com/nanocare/wp-content/uploads/2017/03/s3-500x385.jpeg",
          "age": 42,
          "courseName": "Hospital to home care",
          "gender": "female",
          "email": "bethdavid@phormula.com",
          "courseDes": "One of the leading causes of hospital readmission or slow post-hospitalization recovery is the lack of proper support following a hospital discharge. "
        },
        {
          "_id": "616dbfc321ab78eccd7152160",
          "index": 10,
          "isActive": false,
          "picture": "https://live.linethemes.com/nanocare/wp-content/uploads/2017/03/s1-500x385.jpeg",
          "age": 42,
          "courseName": "Hourly home care",
          "gender": "female",
          "email": "bethdavid@phormula.com",
          "courseDes": "Hourly home care allows clients to use our caregivers on an hourly or as-needed basis."
        },
        {
          "_id": "616dbc321gab78eccd7152160",
          "index": 11,
          "isActive": false,
          "picture": "https://live.linethemes.com/nanocare/wp-content/uploads/2017/03/s2-500x385.jpeg",
          "age": 42,
          "courseName": "Daily home care",
          "gender": "female",
          "email": "bethdavid@phormula.com",
          "courseDes": "Daily Care provicourseDes older adults with 24/7, around-the-clock care. Clients and their families enjoy peace of mind with reliable"
        },
        {
          "_id": "616h5dbc321ab78eccd7152160",
          "index": 12,
          "isActive": false,
          "picture": "https://live.linethemes.com/nanocare/wp-content/uploads/2017/03/s5-500x385.jpeg",
          "age": 42,
          "courseName": "Specialized and advanced care at home",
          "gender": "female",
          "email": "bethdavid@phormula.com",
          "courseDes": "Many assume that when the needs of an aging adult reach a certain point, their options for care are limited to a care facility."
        },
        {
          "_id": "616dbc6j321ab78eccd7152160",
          "index": 13,
          "isActive": false,
          "picture": "https://live.linethemes.com/nanocare/wp-content/uploads/2017/03/s4-500x385.jpeg",
          "age": 42,
          "courseName": "Respite home care",
          "gender": "female",
          "email": "bethdavid@phormula.com",
          "courseDes": "Respite Care is temporary care to provide family caregivers relief from the full-time care they have been providing for a loved one."
        },
        {
          "_id": "616dbk7kc321ab78eccd7152160",
          "index": 14,
          "isActive": false,
          "picture": "https://live.linethemes.com/nanocare/wp-content/uploads/2017/03/s5-500x385.jpeg",
          "age": 42,
          "courseName": "Advanced care",
          "gender": "female",
          "email": "bethdavid@phormula.com",
          "courseDes": "Many assume that when the needs of an aging adult reach a certain point, their options for care are limited to a care facility."
        },
        {
          "_id": "616dbcl8321ab78eccd7152160",
          "index": 15,
          "isActive": false,
          "picture": "https://live.linethemes.com/nanocare/wp-content/uploads/2017/03/s4-500x385.jpeg",
          "age": 42,
          "courseName": "Respite home care",
          "gender": "female",
          "email": "bethdavid@phormula.com",
          "courseDes": "Respite Care is temporary care to provide family caregivers relief from the full-time care they have been providing for a loved one."
        },
        {
          "_id": "616dbcv4321ab78eccd7152160",
          "index": 16,
          "isActive": false,
          "picture": "https://live.linethemes.com/nanocare/wp-content/uploads/2017/03/s3-500x385.jpeg",
          "age": 42,
          "courseName": "Hospital to home care",
          "gender": "female",
          "email": "bethdavid@phormula.com",
          "courseDes": "One of the leading causes of hospital readmission or slow post-hospitalization recovery is the lack of proper support following a hospital discharge. "
        }
      
      
      ];
    return (
        <div>
            <div className="div mt-5 mb-5">
                <h1 className="text-3xl font-semibold">Service Details:</h1>
            </div>
            <h1 className="text-2xl mb-5 font-semibold">Here You Will Find the best care Available in city: </h1>
            
            {
               services.filter(service => service.index === parseInt(serviceId)).map(service => <ServiceDetail key={service.id} service={service}></ServiceDetail>)
            }
        </div>
    );
};

export default Detail;
import React from 'react'
//fetch content from sanity
import {getServices, type Service} from '@/sanity/lib/services';

const getService = async(): Promise<Service[]> => {
  const service = await getServices();

  return service.map((service) => ({
    ...service,
  }));
};


const page = () => {
  return (
    <>
        {
            getService().then((services) => {
                return services.map((service) => (
                    <div key={service.id}>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                    </div>
                ))
            })
        }
    </>
  )
}

export default page
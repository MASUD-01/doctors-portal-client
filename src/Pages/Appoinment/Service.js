import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body mx-auto">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{slots.length > 0
                    ? <span>{slots[0]}</span>
                    : <span className='text-red-500'>Try another date</span>}</p>
                <p>{slots.slice(0, 6).length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <div className="card-actions justify-center">
                    <label
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0} for="booking-modal" className="btn btn-sm btn-secondary uppercase bg-gradient-to-r from-secondary to-primary">Book Appoinment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;
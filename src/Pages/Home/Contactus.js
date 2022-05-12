import React from 'react';
import appoinment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Contactus = () => {
    return (
        <div className='h-[450px] flex items-center justify-center' style={{
            background: `url(${appoinment})`
        }}>
            <div className='my-5'>
                <div className='text-center'>
                    <h4 className="text-xl text-primary font-bold">Contact us</h4>
                    <h2 className='text-3xl text-white'>stay connected with us</h2>
                </div>
                <div className='text-center mt-5'>
                    <input type="text" placeholder="Email Address" className="input w-full max-w-xs" />
                </div>
                <div className='text-center mt-5'>
                    <input type="text" placeholder="Subject" className="input w-full max-w-xs" />
                </div>
                <div className='text-center mt-5'>
                    <textarea className="textarea w-80" placeholder="Message"></textarea>
                </div>
                <div className='text-center mt-3'>
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>

        </div>
    );
};

export default Contactus;
import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appoinment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppoinmaent = () => {
    return (
        <section style={{
            background: `url(${appoinment})`
        }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-70px] h-96' src={doctor} alt="" />
            </div>
            <div className='flex-1 pr-28'>
                <h3 className='text-xl text-primary font-bold'>Appoinment</h3>
                <h2 className='text-3xl text-white'>Make an appoinment Today</h2>
                <p className='text-white'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eum cum eligendi ducimus beatae quibusdam blanditiis itaque voluptas ipsa laboriosam, dolorum dignissimos velit? Sequi iste blanditiis rerum dolorum saepe et quisquam doloremque, placeat totam ducimus animi, itaque, cum natus voluptatibus!
                </p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppoinmaent;
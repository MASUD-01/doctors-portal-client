import { format } from 'date-fns';
import React from 'react';

const AvailableAppoinment = ({ date }) => {
    return (
        <div>
            <p className='text-center text-primary font-bold'>Available appionment on: {format(date, 'PP')}</p>
        </div>
    );
};

export default AvailableAppoinment;
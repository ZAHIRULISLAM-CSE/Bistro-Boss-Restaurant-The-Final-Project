import React from 'react';

const Title = ({heading,subHeading}) => {
    return (
        <div className='text-center'>
            <h1 className='mt-20 mb-2 text-orange-600'>{subHeading}</h1>
            <hr className='w-4/12 border-2 mx-auto' />
            <h1 className='my-6 text-3xl'>{heading}</h1>
            <hr className='w-4/12 border-2 mx-auto' />
        </div>
    );
};

export default Title;
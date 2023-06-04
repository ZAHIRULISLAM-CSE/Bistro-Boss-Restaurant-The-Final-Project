import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckOutForm from './checkOutForm';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_paymentkey);

const Payment = () => {
    return (
        <div>
            <h1 className='text-center text-3xl mt-6 mb-8'>Payment Below</h1>
            <Elements stripe={stripePromise} >
                <CheckOutForm></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;
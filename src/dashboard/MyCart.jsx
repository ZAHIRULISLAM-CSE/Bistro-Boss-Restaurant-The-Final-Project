import React from 'react';
import useAddededCart from '../hooks/useAddededCart';

const MyCart = () => {
    const [cart]=useAddededCart();
    console.log(cart);
    const price=cart.reduce((sum,item)=>{
        return item.price+sum;
    },0)

    return (
        <div>
            <h1>Total Items:{cart.length}</h1>
            <h1>Price:{price}</h1>
        </div>
    );
};

export default MyCart;
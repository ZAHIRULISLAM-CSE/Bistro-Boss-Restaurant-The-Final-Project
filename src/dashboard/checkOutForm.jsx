import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import useAddededCart from "../hooks/useAddededCart";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { AuthContext } from "../providers/AuthProviders";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [cart] = useAddededCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  const [axiosSecure] = useAxiosSecure();
  const[txId,settxId]=useState(null);
  const [processing,setProcessing]=useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if(price>0){
        axiosSecure.post("/create-payment-intent", { price }).then((res) => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        });
    }
  }, [price, useAxiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    setProcessing(true)
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

      setProcessing(false);

    if (confirmError) {
      console.log(confirmError);
    }

    if(paymentIntent.status=="succeeded"){
        settxId(paymentIntent.id)
        const paymentInfo={
            email:user?.email,
            txId:paymentIntent.id,
            price,
            quantity:cart.length,
            items:cart.map(item=> item._id),
            itemsName:cart.map(item => item.name)
        }
        axiosSecure.post("/payments",paymentInfo)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){

            }
        })
    }

    console.log("payment intent", paymentIntent);
  };

  return (
    <form className="w-1/2 mx-auto" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="text-2xl mt-8 bg-blue-600 px-2 py-1 rounded-md"
        type="submit"
        disabled={!stripe || !clientSecret || processing}
      >
        Pay
      </button>
      {error && <p>{error}</p>}
      {txId && <p>Payment is Complete txId: {txId} </p>}
    </form>
  );
};

export default CheckOutForm;

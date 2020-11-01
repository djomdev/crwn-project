import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51He9pqBWjBdvp5FeRHTyNoHbncoIGcWiJxQ0JUcOLoN0MCEsQlhnOLLeA2gg9dE3cVrbZOdf6JyULXMpsoXdWRvy00Xe6Y4UX5';

    const onToken = token => {
        console.log(token);
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
import StripeCheckout from 'react-stripe-checkout';
import React from 'react'


const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_N5tEjNWTKtQL0Nm9NKaGADIm003iH5OKv7';
    const onToken = token => console.log(token, 'PAYMENT SUCCESS')

    return (
        <StripeCheckout
            label='Pay now'
            name='Sweets House'
            billingAddress
            shippingAddress
            image='https://cdn.clipart.email/a018ef99e14ef0ebc1f8b3c8a12ac0f6_dabbing-chef-cartoon-art-cartoon-cooking-clipart_585-755.jpeg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton
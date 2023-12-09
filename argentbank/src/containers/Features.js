import React from 'react';
import FeatureItem from '../components/FeatureItem';
import IconChat from '../images/argentBankLogo.png'

const Features = () => {
    return (
        <section className='features'>
            <FeatureItem 
            image="../images/argentBankLogo.png"
            title="You are our #1 priority"
            text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            />
            <FeatureItem
            image="./images/icon-money.png"
            title="More savings means higher rates"
            text="The more you save with us, the higher your interest rate will be!"
            />
            <FeatureItem
            image="./images/icon-security.png"
            title="Security you can trust"
            text="We use top of the line encryption to make sure your data and money
            is always safe."            
            />
        </section>
    );
};

export default Features;
import React from "react";
import CookieConsent from 'react-cookie-consent-notification';

export default function CookieConsent1(props) {
    return (
        <CookieConsent 
            background={'#000'}
            bottomPosition={true}
            buttonText={'I agree'}
            buttonBackground={'#fff'}
            buttonColor={'#000'}
            buttonFontSize={16}
            color={'#fff'}
            padding={20}>
            This website uses cookies to improve service, for analytical and advertising purposes.
            Please read our <a href={'/cookies'} style={{ color: '#fff' }}>Cookie Policy</a>.
            Confirm your consent to the use of cookies.
        </CookieConsent>
    );
}
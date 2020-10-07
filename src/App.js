import React from 'react';
import './App.css';
import CookieConsent from 'react-cookie-consent-notification';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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

      </header>
    </div>
  );
}

export default App;

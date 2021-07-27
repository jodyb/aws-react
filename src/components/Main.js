import React from 'react';
import HotelInfo from './main-components/HotelInfo.js';
import Welcome from './main-components/Welcome.js';

const Main = () => {
    return (
      <main id="wrapper">
        <Welcome />
        <HotelInfo />
      </main>
    );
}

export default Main;
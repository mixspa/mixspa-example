import React from 'react';
import { Route } from "react-router-dom";
import AppLoader from './AppLoader';

// <AppLoader name="ReactNavApp" ></AppLoader>
const HomePage = () => (
  <div>
    <div>Hello World</div>
    <div>
      <AppLoader name="ReactNavApp" baseUrl="/mixspa-example/react-router-app"></AppLoader>
    </div>
  </div>
);

export default HomePage;

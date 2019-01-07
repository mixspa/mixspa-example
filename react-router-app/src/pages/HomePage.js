import React from 'react';
import { Route } from "react-router-dom";
import AppLoader from './AppLoader';

// <AppLoader name="ReactNavApp" ></AppLoader>
const HomePage = () => (
  <div>
    <div>Hello World</div>
    <div>
      <AppLoader name="ReactNavApp"></AppLoader>
    </div>
  </div>
);

export default HomePage;

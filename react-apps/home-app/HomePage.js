import React from 'react';
import { Route } from 'react-router-dom';
import { AppLoader } from '@mixspa/react';
import style from './HomePage.scss';

const Loading = () => <div>Loading ...</div>

const HomePage = ({ location }) => {
  return (
    <div className={ style.home }>
      <div className={ style.title }>Hello World</div>
      <div className={ style.header }>
        <AppLoader appId="react-nav-app" baseUrl={`${location.pathname}`}><Loading/></AppLoader>
      </div>
      <div className={ style.content }>
        <Route path={`${location.pathName}/app-one`} >
          <AppLoader appId="react-app-one" baseUrl="/mixspa-example/react-router-app/app-one"><Loading/></AppLoader>
        </Route>
        <Route path={`${location.pathname}/app-two`} >
          <AppLoader appId="react-app-two" baseUrl="/mixspa-example/react-router-app/app-two"><Loading/></AppLoader>
        </Route>
      </div>
    </div>
  )
};

export default HomePage;

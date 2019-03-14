import React from 'react';
import { Route } from 'react-router-dom';
import { AppLoader } from '@mixspa/react';
import style from './HomePage.scss';

const Loading = () => <div>Loading ...</div>

const HomePage = ({ match }) => {
  console.log('===========');
  console.log(match);
  console.log('===========');
  return (
    <div className={ style.home }>
      <div className={ style.title }>Hello World</div>
      <div className={ style.header }>
        <AppLoader appId="react-nav-app" baseUrl="/mixspa-example/react-router-app"><Loading/></AppLoader>
      </div>
      <div className={ style.content }>
        <Route path={`${match.url}/app-one`} render={props => {
          console.log('===== one ====');
          console.log(props);
          console.log('===== one ====');
          return (
            <AppLoader appId="react-app-one" baseUrl="/mixspa-example/react-router-app/app-one"><Loading/></AppLoader>
          )
        }} />
        <Route path={`${match.url}/app-two`} render={props => {
          console.log('===== two ====');
          console.log(props);
          console.log('===== two ====');
          return (
            <AppLoader appId="react-app-two" baseUrl="/mixspa-example/react-router-app/app-two"><Loading/></AppLoader>
          )
        }} />
      </div>
    </div>
  )
};

export default HomePage;

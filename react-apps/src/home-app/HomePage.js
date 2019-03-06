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
        <AppLoader name="ReactNavApp" baseUrl="/mixspa-example/react-router-app"><Loading/></AppLoader>
      </div>
      <div className={ style.content }>
        <Route path={`${match.url}/app-one`} render={props => {
          console.log('===== one ====');
          console.log(props);
          console.log('===== one ====');
          return (
            <AppLoader name="ReactAppOne" baseUrl="/mixspa-example/react-router-app/app-one"><Loading/></AppLoader>
          )
        }} />
        <Route path={`${match.url}/app-two`} render={props => {
          console.log('===== two ====');
          console.log(props);
          console.log('===== two ====');
          return (
            <AppLoader name="ReactAppTwo" baseUrl="/mixspa-example/react-router-app/app-two"><Loading/></AppLoader>
          )
        }} />
        <Route path={`${match.url}/`} exact render={props => {
          console.log('====== home =====');
          console.log(props);
          console.log('====== home =====');
          return (
            <div>
              <span>home</span>
              <AppLoader name="ReactAppHome" baseUrl="/mixspa-example/react-router-app/"><Loading/></AppLoader>
            </div>
          );
        }} />
      </div>
    </div>
  )
};

export default HomePage;

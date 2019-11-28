/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
// import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import { ProfilePage } from '../HomePage';
// import Header from 'components/Header';
// import Footer from 'components/Footer';
import GlobalStyle from '../../global-styles';
import MemberPage from '../MemberPage';
import PrivateRoute from '../../components/PrivateRoute';
import DashboardPage from '../DashboardPage';
// import MemberPage from '../MemberPage';
import LoginPage from '../LoginPage';


const AppWrapper = styled.div`
  // max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  // padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Switch>
        <Route exact path="/profile" component={ProfilePage} />
        <Route path="/features" component={FeaturePage} />

        <Route exact path="/admin/login" component={LoginPage} />
        <Route exact path="/admin" component={MemberPage} />
        {/* <PrivateRoute
          path="/admin/member"
          layout={Dashboard}
          component={MemberPage}
          title="Thành Viên"
        />
        <PrivateRoute
          path="/admin"
          layout={Dashboard}
          component={MemberPage}
          title="Thành Viên"
        /> */}
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
}

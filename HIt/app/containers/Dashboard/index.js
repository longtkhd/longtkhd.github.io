/**
 *
 * Dashboard
 *
 */

import React, { useState, Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import classNames from 'classnames';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';


import { Drawer, withStyles, withWidth } from '@material-ui/core';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Snackbar from '../../components/Snackbar';
// Component styles
import styles from './styles';
import { closeSnackbar } from './actions';

export function Dashboard(props) {
  const [open, setOpen] = useState(false);
  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });

  // handleClose = () => {
  //   this.setState({ isOpen: false });
  // };

  function handleToggleOpen() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  const { classes, width, title, children, dashboard } = props;
  const [isOpen, setIsOpen] = useState('open');
  // console.log(this.props);
  return (
    <Fragment>
      <Snackbar
        open={dashboard.status}
        variant={dashboard.variant}
        message={dashboard.message}
      // onClose={this.props.closeSnackbar}
      />
      <Topbar
        className={classNames(classes.topbar)}
        isSidebarOpen={isOpen}
        onToggleSidebar={handleToggleOpen}
        title={title}
      />
      <Drawer
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
        // onClose={this.handleClose}
        open={isOpen}
      >
        <Sidebar className={classes.sidebar} />
      </Drawer>
      <main
        className={classNames(classes.content)}
      >
        {children}
        <Footer />
      </main>
    </Fragment>
  );
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  width: PropTypes.string.isRequired,
  closeSnackbar: PropTypes.func,
  dashboard: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  dashboard: makeSelectDashboard(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    closeSnackbar: () => dispatch(closeSnackbar()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'dashboard', reducer });
const withSaga = injectSaga({ key: 'dashboard', saga });

export default compose(
  withStyles(styles),
  withWidth(),
  withReducer,
  withSaga,
  withConnect,
)(Dashboard);

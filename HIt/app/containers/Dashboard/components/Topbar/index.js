/**
 *
 * Topbar
 *
 */

import React, { Component, Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';

// Externals
import classNames from 'classnames';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core/styles';

// Material components
import {
  Badge,
  IconButton,
  Popover,
  Toolbar,
  Typography,
} from '@material-ui/core';

// Material icons
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  NotificationsOutlined as NotificationsIcon,
  Input as InputIcon,
} from '@material-ui/icons';

// Shared services
// import { getNotifications } from 'services/notification';


// Component styles
import styles from './styles';

function Topbar(props) {
  const [signal, setSignal] = useState(true);

  // function handleSignOut() {
  //   const { history } = this.props;
  //   localStorage.clear();
  //   history.push('/login');
  // };
  const {
    classes,
    className,
    title,
    isSidebarOpen,
    onToggleSidebar,
  } = props;

  const rootClassName = classNames(classes.root, className);
  return (
    <Fragment>
      <div className={rootClassName}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            className={classes.menuButton}
            onClick={onToggleSidebar}
            variant="text"
          >
            {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography className={classes.title} variant="h4">
            {title}
          </Typography>
          <IconButton
            className={classes.signOutButton}
          // onClick={handleSignOut}
          >
            <InputIcon />
          </IconButton>
        </Toolbar>
      </div>
    </Fragment>
  );
}

Topbar.propTypes = {}

Topbar.defaultProps = {
  onToggleSidebar: () => { },
};

export default compose(
  withRouter,
  withStyles(styles),
)(Topbar);

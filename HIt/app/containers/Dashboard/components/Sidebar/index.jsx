import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Material helpers

// Material components
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
  withStyles,
} from '@material-ui/core';
// Material Icons
import {
  DashboardOutlined as DashboardIcon,
  PeopleOutlined as PeopleIcon,
  ShoppingBasketOutlined as ShoppingBasketIcon,
  LockOpenOutlined as LockOpenIcon,
  TextFields as TextFieldsIcon,
  ImageOutlined as ImageIcon,
  InfoOutlined as InfoIcon,
  // AccountBoxOutlined as AccountBoxIcon,
  // SettingsOutlined as SettingsIcon,
} from '@material-ui/icons';
import logo from '../../../../images/logos/logo.png';
import avatar from '../../../../images/avatars/avatar_1.png';
import decodeJWT from '../../../../common/decodeJWT';
// Component styles
import styles from './styles';

const AdapterLink = React.forwardRef((props, ref) => (
  <NavLink innerRef={ref} {...props} />
));

class Sidebar extends React.Component {

  render() {
    const { classes, className } = this.props;
    return (
      <nav>
        <div className={classes.logoWrapper}>
          <Link className={classes.logoLink} to="/">
            <img
              className={classes.logoImage}
              // src="/images/logos/brainalytica_logo.svg"
              src={logo}
            />
          </Link>
        </div>
        <Divider className={classes.logoDivider} />
        <div className={classes.profile}>
          <Link to="/profile">
            <Avatar
              className={classes.avatar}
              src={avatar}
            />
          </Link>
          <Typography className={classes.nameText} variant="h5">
            Admin
          </Typography>
          <Typography className={classes.bioText} variant="caption">
            0987654321
          </Typography>
        </div>
        <Divider className={classes.profileDivider} />
        <List component="div" disablePadding>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={AdapterLink}
            to="/admin/member"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Thành viên"
            />
          </ListItem>
        </List>
        <Divider className={classes.listDivider} />
      </nav>
    );
  }
}

Sidebar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);

/**
 *
 * Footer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme();
const useStyles = makeStyles({
  root: {
    padding: theme.spacing.unit * 4,
  },
  company: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 0.5,
  },
});
function Footer(props) {
  const classes = useStyles();
  const { className } = props;
  const rootClassName = classNames(classes.root, className);
  return (
    <div className={rootClassName}>
      <Divider style={{ marginBottom: "15px" }} />
      <Typography variant="caption">
        Powered by HIT Club ❤️
      </Typography>
    </div>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

export default Footer;

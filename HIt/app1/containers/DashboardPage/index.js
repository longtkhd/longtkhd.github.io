/**
 *
 * DashboardPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { withStyles } from '@material-ui/core/styles';
// import { Dashboard as DashboardLayout } from 'layouts';
import makeSelectDashboardPage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
  },
  item: {
    height: '100%',
  },
});
/* eslint-disable react/prefer-stateless-function */
class DashboardPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        akdjhkjsahkjdhkj
      </div>
    );
  }
}

DashboardPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dashboardPage: makeSelectDashboardPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'dashboardPage', reducer });
const withSaga = injectSaga({ key: 'dashboardPage', saga });

export default compose(
  withReducer,
  withSaga,
  withStyles(styles),
  withConnect,
)(DashboardPage);

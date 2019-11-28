/**
 *
 * MemberPage
 *
 */
// import axios from 'axios';
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination,
  Fab,
  Grid,
  Button,
  TextField,
} from '@material-ui/core';
import { Edit, Lock, LockOpen, Delete } from '@material-ui/icons';
import {
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletContent,
  // Status,
} from 'components';
import makeSelectMemberPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getUsers } from './actions';
import DialogMember from '../../components/DialogMember';
import DialogAlert from '../../components/DialogAlert';
const styles = theme => ({
  root: {
    padding: theme.spacing(4),
  },
  item: {
    height: '100%',
  },
  button: {
    marginRight: 15,
  },
  portletContent: {
    minWidth: '600px',
  },
  newEntryButton: {
    marginLeft: theme.spacing.unit,
  },
  progressWrapper: {
    padding: theme.spacing.unit * 3,
    display: 'flex',
    justifyContent: 'center',
  },
  tableRow: {
    cursor: 'pointer',
  },
  customerCell: {
    maxWidth: '200px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontWeight: 500,
  },
  statusWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  status: {
    marginRight: theme.spacing.unit,
  },
  flexButton: {
    display: 'flex',
    justifyContent: 'center',
  },
  bold: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export function MemberPage(props) {
  // const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  useInjectReducer({ key: 'memberPage', reducer });
  useInjectSaga({ key: 'memberPage', saga });
  const { classes, className, memberPage } = props;

  const rootClassName = classNames(classes.root, className, memberPage);

  useEffect(() => {
    props.onGetUsers({
      filter: {
        role: 'admin',
      },
    });
    console.log(memberPage);
  }, []);

  return (
    <div>
      <div>
        <title>Quản lý người dùng</title>
        <meta name="description" content="Description of MemberPage" />
      </div>
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item lg={12} md={12} xl={12} xs={12}>
            <Portlet className={rootClassName}>
              <PortletHeader noDivider>
                <PortletLabel subtitle="0 trên tổng số 0" title="Người dùng" />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Thêm mới
                </Button>
              </PortletHeader>
              <PerfectScrollbar>
                <PortletContent className={classes.portletContent} noPadding>
                  <Table className="MemberTable">
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          Ảnh đại diện
                          <br />
                          <TextField id="standard-basic" label="Search" />
                        </TableCell>
                        <TableCell>
                          Họ tên
                          <br />
                          <TextField id="standard-basic" label="Search" />
                        </TableCell>
                        <TableCell>
                          Số điện thoại
                          <br />
                          <TextField id="standard-basic" label="Search" />
                        </TableCell>
                        <TableCell>
                          Khoá
                          <br />
                          <TextField id="standard-basic" label="Search" />
                        </TableCell>
                        <TableCell>Hành động</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {memberPage.users.map(user => (
                        <TableRow className={classes.tableRow} hover>
                          <TableCell>{user.id} </TableCell>
                          <TableCell>{user.fullName}</TableCell>
                          <TableCell>{user.phone}</TableCell>
                          <TableCell> {user.schoolYear}</TableCell>
                          <TableCell>
                            <div className={classes.flexButton}>
                              <Fab
                                style={{ margin: '0px 10px' }}
                                size="small"
                                color="primary"
                                onClick={() => {
                                  setOpen(true);
                                }}
                              >
                                <Edit />
                              </Fab>
                              <DialogAlert
                                icon={<Delete />}
                                style={{ margin: '0px 10px' }}
                                // value={order._id}
                                // onAccept={this.props.onDeleleLevel}
                                message="Bạn có muốn xoá thành viên này"
                              />
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                    <TableFooter>
                      <TablePagination
                        rowsPerPageOptions={[5, 10, 20]}
                        // rowsPerPage={this.state.rowsPerPage}
                        page={1}
                        count={10}
                        labelRowsPerPage="Số phần tử trên một trang"
                        // onChangePage={this.handleChangePage}
                        labelDisplayedRows={({ from, to, count }) =>
                          ` ${from}-${to} của ${count}`
                        }
                        // onChangeRowsPerPage={this.handleChangeRowPerPage}
                      />
                    </TableFooter>
                  </Table>
                </PortletContent>
              </PerfectScrollbar>
              <DialogMember
                open={open}
                handleClose={() => {
                  setOpen(false);
                }}
              />
            </Portlet>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

MemberPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onGetUsers: PropTypes.func,
  memberPage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  memberPage: makeSelectMemberPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onGetUsers: query => dispatch(getUsers(query)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withStyles(styles),
  withConnect,
)(MemberPage);

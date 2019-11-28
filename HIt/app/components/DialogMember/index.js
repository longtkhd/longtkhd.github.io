/**
 *
 * DialogMember
 *
 */

import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { createStructuredSelector } from 'reselect';
import makeSelectMemberPage from '../../containers/MemberPage/selectors';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { compose } from 'redux';
import {
  Grid,
  Button,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  FormControlLabel,
  Switch

} from '@material-ui/core';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from '../../containers/MemberPage/reducer';
import saga from '../../containers/MemberPage/saga';
import { createUserAction } from '../../containers/MemberPage/actions';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Close } from '@material-ui/icons';
import { Portlet } from 'components';
import styles from './styles';
function Transition(props) {
  return <Slide direction="left" {...props} />;
}
const defineLevel = {
  fullName: undefined,
  email: undefined,
  password: undefined,
  role: undefined,
  studentCode: undefined,
  userClass: undefined,
  faculty: undefined,
  schoolYear: undefined,
  clubYear: undefined,
  phone: undefined,
  address: undefined,
  dob: undefined,
  position: undefined,
  gender: undefined,
  isActive: undefined,
  expiredAt: undefined,
  bio: undefined,
  avatar: undefined,
  qrCode: undefined,
  isFormer: undefined,
  birth: undefined,
};

function DialogMember(props) {
  const [open, setOpen] = useState(true);
  const [userInfor, setUserInfor] = useState({
    fullName: undefined,
    email: undefined,
    password: undefined,
    role: undefined,
    studentCode: undefined,
    userClass: undefined,
    faculty: undefined,
    schoolYear: undefined,
    clubYear: undefined,
    phone: undefined,
    address: undefined,
    dob: undefined,
    position: undefined,
    gender: undefined,
    isActive: undefined,
    expiredAt: undefined,
    bio: undefined,
    avatar: undefined,
    qrCode: undefined,
    isFormer: undefined,
    birth: undefined,
  },);
  useInjectReducer({ key: 'memberPage', reducer });
  useInjectSaga({ key: 'memberPage', saga });
  //useEffect
  useEffect((prop) => {
    setOpen(props.open);
    setUserInfor(defineLevel);
    
  });
  const handChangeUserInfor = name => event => {
    // const userInfors = { userInfor};
    userInfor[name] = event.target.value;
    setUserInfor({userInfor});
  

  };
  const handleSubmit = () => {
    const newUser = Object.assign({}, {userInfor});
    console.log(newUser.userInfor);
   
    if (!props.isEdit) {
      newUser.role = props.type;
      props.onCreateUser(newUser.userInfor);
    } ;
    props.handleClose();

    // this.setState({ userInfor: defineUser, open: false });
 
  };
  
  
 
  
  

  
  const { classes, className, ...rest } = props;
  return (
    <div style={{ background: '#F8FAFC' }}>
      <Dialog
        style={{ marginLeft: 271, backgroundColor: '#f8fafc' }}
        fullScreen
        open={open}
        onClose={props.handleClose}
        TransitionComponent={Transition}
      >
        <ValidatorForm onSubmit={handleSubmit}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={props.handleClose}
                aria-label="Close"
              >
                <Close />
              </IconButton>
              <Typography
                variant="h6"
                color="inherit"
                className={classes.flex}
              >
                Thoát
              </Typography>
              <Button type="submit" color="inherit">
                Lưu
              </Button>
            </Toolbar>
          </AppBar>
          <div
            className="p-4"
            style={{ height: '100%', paddingTop: '50px' }}
          >
            <Portlet {...rest}>
              <Grid
                container
                spacing={12}
                className="p-4"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={8}>
                  <Grid container justify="center" alignItems="center">
                    <Grid item xs={12}>
                      <TextValidator
                        className={classes.textField}
                        fullWidth
                        validators={['required']}
                        errorMessages={['Vui lòng nhập dữ liệu trường này']}
                        onChange={handChangeUserInfor('fullName')}
                        value={userInfor.fullName}
                        label="Tên thành viên"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextValidator
                        className={classes.textField}
                        fullWidth
                        label="Email"
                        validators={['required']}
                        errorMessages={['Vui lòng nhập dữ liệu trường này']}
                        onChange={handChangeUserInfor('email')}
                        value={userInfor.email}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextValidator
                        className={classes.textField}
                        fullWidth
                        label="Chức vụ"
                        validators={['required']}
                        errorMessages={['Vui lòng nhập dữ liệu trường này']}
                        onChange={handChangeUserInfor('role')}
                        value={userInfor.role}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextValidator
                        className={classes.textField}
                        fullWidth
                        label="Mã Sinh Viên"
                        validators={['required']}
                        errorMessages={['Vui lòng nhập dữ liệu trường này']}
                        onChange={handChangeUserInfor('studentCode')}
                        value={userInfor.studentCode}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextValidator
                        className={classes.textField}
                        fullWidth
                        label="Lớp"
                        validators={['required']}
                        errorMessages={['Vui lòng nhập dữ liệu trường này']}
                        onChange={handChangeUserInfor('userClass')}
                        value={userInfor.userClass}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextValidator
                        className={classes.textField}
                        fullWidth
                        label="Khoa"
                        validators={['required']}
                        errorMessages={['Vui lòng nhập dữ liệu trường này']}
                        onChange={handChangeUserInfor('faculty')}
                        value={userInfor.faculty}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextValidator
                        className={classes.textField}
                        fullWidth
                        label="Niên khoá CLB"
                        validators={['required']}
                        errorMessages={['Vui lòng nhập dữ liệu trường này']}
                        onChange={handChangeUserInfor('clubYear')}
                        value={userInfor.clubYear}
                        margin="normal"
                        type="Number"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextValidator
                        className={classes.textField}
                        fullWidth
                        validators={['required']}
                        errorMessages={['Vui lòng nhập dữ liệu trường này']}
                        onChange={handChangeUserInfor('expiredAt')}
                        value={userInfor.expiredAt}
                        label="Điểm"
                        margin="normal"
                        type="Number"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextValidator
                        className={classes.textField}
                        fullWidth
                        validators={['required']}
                        errorMessages={['Vui lòng nhập dữ liệu trường này']}
                        onChange={handChangeUserInfor('phone')}
                        value={userInfor.phone}
                        label="Số điện thoại"
                        margin="normal"
                        type="Number"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextValidator
                        className={classes.textField}
                        fullWidth
                        validators={['required']}
                        errorMessages={['Vui lòng nhập dữ liệu trường này']}
                        onChange={handChangeUserInfor('address')}
                        value={userInfor.address}
                        label="Địa chỉ"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextValidator
                        className={classes.textField}
                        fullWidth
                        validators={['required']}
                        errorMessages={['Vui lòng nhập dữ liệu trường này']}
                        onChange={handChangeUserInfor('birth')}
                        value={userInfor.birth}
                        label="Ngày sinh"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextValidator
                        className={classes.textField}
                        fullWidth
                        validators={['required']}
                        errorMessages={['Vui lòng nhập dữ liệu trường này']}
                        onChange={handChangeUserInfor('position')}
                        value={userInfor.position}
                        label="Vị trí"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextValidator
                        className={classes.textField}
                        fullWidth
                        validators={['required']}
                        errorMessages={['Vui lòng nhập dữ liệu trường này']}
                        onChange={handChangeUserInfor('gender')}
                        value={userInfor.gender}
                        label="Giới tính"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={true}
                            value="checkedA"
                            color="primary"
                          />
                        }
                        label="Trạng thái"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={true}
                            value="checkedA"
                            color="primary"
                          />
                        }
                        label="Cựu"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextValidator
                        className={classes.textField}
                        fullWidth
                        validators={['required']}
                        errorMessages={['Vui lòng nhập dữ liệu trường này']}
                        onChange={handChangeUserInfor('bio')}
                        value={userInfor.bio}
                        label="Giới thiệu ngắn "
                        margin="normal"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Portlet>
          </div>
        </ValidatorForm>
      </Dialog>
    </div >
  );
}

DialogMember.propTypes = {
  classes: PropTypes.object,
};
const mapStateToProps = createStructuredSelector({
  memberPage: makeSelectMemberPage(),
});
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    // onGetUsers: query => dispatch(getUsers(query)),
    onCreateUser: newUser => dispatch(createUserAction(newUser)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);



export default compose(
  withStyles(styles),
  withConnect,
)(DialogMember);


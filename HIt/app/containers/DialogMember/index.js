// /**
//  *
//  * DialogMember
//  *
//  */
// // ten khoa lop chuc vu
// import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import { compose } from 'redux';
// import { createStructuredSelector } from 'reselect';
// import { makeSelectDialogMember} from './selectors';
// import { createUserAction} from './actions';
// import {
//   Grid,
//   Button,
//   Dialog,
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
//   Slide,
//   FormControlLabel,
//   Switch

// } from '@material-ui/core';
// import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
// import { Close } from '@material-ui/icons';
// import { Portlet } from 'components';
// import styles from './styles';
// function Transition(props) {
//   return <Slide direction="left" {...props} />;
// }
// /* eslint-disable react/prefer-stateless-function */
// const defineLevel = {
//   fullName: undefined,
//   email: undefined,
//   password: undefined,
//   role: undefined,
//   studentCode: undefined,
//   userClass: undefined,
//   faculty: undefined,
//   schoolYear: undefined,
//   clubYear: undefined,
//   phone: undefined,
//   address: undefined,
//   dob: undefined,
//   position: undefined,
//   gender: undefined,
//   isActive: undefined,
//   expiredAt: undefined,
//   bio: undefined,
//   avatar: undefined,
//   qrCode: undefined,
//   isFormer: undefined,
//   birth: undefined,
// };
// class DialogMember extends React.Component {
//   state = {
//     open: false
//   }
//   constructor(props) {
//     super(props);
//     this.submitBtn = React.createRef();
//   }
//   state = {
//     userInfor: {
//       fullName: undefined,
//       email: undefined,
//       password: undefined,
//       role: undefined,
//       studentCode: undefined,
//       userClass: undefined,
//       faculty: undefined,
//       schoolYear: undefined,
//       clubYear: undefined,
//       phone: undefined,
//       address: undefined,
//       dob: undefined,
//       position: undefined,
//       gender: undefined,
//       isActive: undefined,
//       expiredAt: undefined,
//       bio: undefined,
//       avatar: undefined,
//       qrCode: undefined,
//       isFormer: undefined,
//       birth : undefined,
//     },
//   };
  
//   handleSubmit = () => {
//     const newUser = Object.assign({}, this.state.userInfor);
//     console.log(newUser.userInfor);
//     this.props.onCreateUser(newUser);
  
//     this.setState({ userInfor: defineLevel});
    



//   };
//   handChangeUserInfor = event => event => {
//     const { userInfor } = this.state;
//     userInfor[event] = event.target.value;
//     this.setState({ userInfor });
//     console.log(userInfor);
//   };

//   componentWillReceiveProps(props) { 
//       this.state.open = props.open;
//       this.state.userInfor = defineLevel; 
//   }
//   render() {
//     const { userInfor } = this.state;
//     console.log(userInfor);
    
//     const { classes, className, ...rest, dialogMember } = this.props;


    

//     return (
//       <div style={{ background: '#F8FAFC' }}>
//         <Dialog
//           style={{ marginLeft: 271, backgroundColor: '#f8fafc' }}
//           fullScreen
//           open={this.state.open}
//           onClose={this.props.handleClose}
//           TransitionComponent={Transition}
//         >
//           <ValidatorForm onSubmit={this.handleSubmit}>
//             <AppBar className={classes.appBar}>
//               <Toolbar>
//                 <IconButton
//                   color="inherit"
//                   onClick={this.props.handleClose}
//                   aria-label="Close"
//                 >
//                   <Close />
//                 </IconButton>
//                 <Typography
//                   variant="h6"
//                   color="inherit"
//                   className={classes.flex}
//                 >
//                   Thoát
//                 </Typography>
//                 <Button type="submit" color="inherit">
//                   Lưu
//                 </Button>
//               </Toolbar>
//             </AppBar>
//             <div
//               className="p-4"
//               style={{ backgroundColor: '#f8fafc', height: '100%' }}
//             >
//               <Portlet {...rest}>
//                 <Grid
//                   container
//                   spacing={12}
//                   className="p-4"
//                   justify="center"
//                   alignItems="center"
//                 >
//                   <Grid item xs={8}>
//                     <Grid container justify="center" alignItems="center">
//                       <Grid item xs={12} className="px-3">
//                         <TextValidator
//                           className="my-2"
//                           fullWidth
//                           validators={['required']}
//                           errorMessages={['Vui lòng nhập dữ liệu trường này']}
//                           onChange={this.handChangeUserInfor('fullName')}
//                           value={userInfor.fullName}
//                           label="Tên thành viên"
//                           variant="outlined"
//                           margin="dense"
//                         />
//                       </Grid>
//                       <Grid item xs={6} className="px-3">
//                         <TextValidator
//                           className="my-2"
//                           fullWidth
//                           label="Email"
//                           validators={['required']}
//                           errorMessages={['Vui lòng nhập dữ liệu trường này']}
//                           onChange={this.handChangeUserInfor('email')}
//                           value={userInfor.email}
//                           variant="outlined"
//                           margin="dense"
//                         />
//                       </Grid>
//                       <Grid item xs={6} className="px-3">
//                         <TextValidator
//                           className="my-2"
//                           fullWidth
//                           label="Chức vụ"
//                           validators={['required']}
//                           errorMessages={['Vui lòng nhập dữ liệu trường này']}
//                           onChange={this.handChangeUserInfor('position')}
//                           value={userInfor.position}
//                           variant="outlined"
//                           margin="dense"
//                         />
//                       </Grid>
//                       <Grid item xs={6} className="px-3">
//                         <TextValidator
//                           className="my-2"
//                           fullWidth
//                           label="Mã Sinh Viên"
//                           validators={['required']}
//                           errorMessages={['Vui lòng nhập dữ liệu trường này']}
//                           onChange={this.handChangeUserInfor('studentCode')}
//                           value={userInfor.studentCode}
//                           variant="outlined"
//                           margin="dense"
//                         />
//                       </Grid>
//                       <Grid item xs={6} className="px-3">
//                         <TextValidator
//                           className="my-2"
//                           fullWidth
//                           label="Lớp"
//                           validators={['required']}
//                           errorMessages={['Vui lòng nhập dữ liệu trường này']}
//                           onChange={this.handChangeUserInfor('userClass')}
//                           value={userInfor.userClass}
//                           variant="outlined"
//                           margin="dense"
//                         />
//                       </Grid>
//                       <Grid item xs={6} className="px-3">
//                         <TextValidator
//                           className="my-2"
//                           fullWidth
//                           label="Khoa"
//                           validators={['required']}
//                           errorMessages={['Vui lòng nhập dữ liệu trường này']}
//                           onChange={this.handChangeUserInfor('faculty')}
//                           value={userInfor.faculty}
//                           variant="outlined"
//                           margin="dense"
//                         />
//                       </Grid>
//                       <Grid item xs={6} className="px-3">
//                         <TextValidator
//                           className="my-2"
//                           fullWidth
//                           label="Niên khoá CLB"
//                           validators={['required']}
//                           errorMessages={['Vui lòng nhập dữ liệu trường này']}
//                           onChange={this.handChangeUserInfor('clubYear')}
//                           value={userInfor.clubYear}
//                           variant="outlined"
//                           margin="dense"
//                           type="Number"
//                         />
//                       </Grid>
//                       <Grid item xs={6} className="px-3">
//                         <TextValidator
//                           className="my-2"
//                           fullWidth
//                           validators={['required']}
//                           errorMessages={['Vui lòng nhập dữ liệu trường này']}
//                           onChange={this.handChangeUserInfor('schoolYear')}
//                           value={userInfor.schoolYear}
//                           label="Điểm"
//                           variant="outlined"
//                           margin="dense"
//                           type="Number"
//                         />
//                       </Grid>
//                       <Grid item xs={6} className="px-3">
//                         <TextValidator
//                           className="my-2"
//                           fullWidth
//                           validators={['required']}
//                           errorMessages={['Vui lòng nhập dữ liệu trường này']}
//                           onChange={this.handChangeUserInfor('phone')}
//                           value={userInfor.phone}
//                           label="Số điện thoại"
//                           variant="outlined"
//                           margin="dense"
//                           type="Number"
//                         />
//                       </Grid>
//                       <Grid item xs={6} className="px-3">
//                         <TextValidator
//                           className="my-2"
//                           fullWidth
//                           validators={['required']}
//                           errorMessages={['Vui lòng nhập dữ liệu trường này']}
//                           onChange={this.handChangeUserInfor('address')}
//                           value={userInfor.address}
//                           label="Địa chỉ"
//                           variant="outlined"
//                           margin="dense"
//                         />
//                       </Grid>
//                       <Grid item xs={6} className="px-3">
//                         <TextValidator
//                           className="my-2"
//                           fullWidth
//                           validators={['required']}
//                           errorMessages={['Vui lòng nhập dữ liệu trường này']}
//                           onChange={this.handChangeUserInfor('birth')}
//                           value={userInfor.birth}
//                           label="Ngày sinh"
//                           variant="outlined"
//                           margin="dense"
//                         />
//                       </Grid>
//                       <Grid item xs={6} className="px-3">
//                         <TextValidator
//                           className="my-2"
//                           fullWidth
//                           validators={['required']}
//                           errorMessages={['Vui lòng nhập dữ liệu trường này']}
//                           onChange={this.handChangeUserInfor('position')}
//                           value={userInfor.position}
//                           label="Vị trí"
//                           variant="outlined"
//                           margin="dense"
//                         />
//                       </Grid>
//                       <Grid item xs={6} className="px-3">
//                         <TextValidator
//                           className="my-2"
//                           fullWidth
//                           validators={['required']}
//                           errorMessages={['Vui lòng nhập dữ liệu trường này']}
//                           onChange={this.handChangeUserInfor('gender')}
//                           value={userInfor.gender}
//                           label="Giới tính"
//                           variant="outlined"
//                           margin="dense"
//                         />
//                       </Grid>
//                       <Grid item xs={6} className="px-3">
//                         <FormControlLabel
//                           control={
//                             <Switch
//                               checked={true}
//                               value="checkedA"
//                               color="primary"
//                             />
//                           }
//                           label="Trạng thái"
//                         />
//                       </Grid>
//                       <Grid item xs={6} className="px-3">
//                         <FormControlLabel
//                           control={
//                             <Switch
//                               checked={true}
//                               value="checkedA"
//                               color="primary"
//                             />
//                           }
//                           label="Cựu"
//                         />
//                       </Grid>
//                       <Grid item xs={12} className="px-3">
//                         <TextValidator
//                           className="my-2"
//                           fullWidth
//                           validators={['required']}
//                           errorMessages={['Vui lòng nhập dữ liệu trường này']}
//                           label="Giới thiệu ngắn "
//                           variant="outlined"
//                           margin="dense"
//                         />
//                       </Grid>
//                     </Grid>
//                   </Grid>
//                 </Grid>
//               </Portlet>
//             </div>
//           </ValidatorForm>
//         </Dialog>
//       </div>
//     );
//   }
// }

// DialogMember.propTypes = {};

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//     onCreateUser: newUser => dispatch(createUserAction(newUser)),
//   };
// }

// const mapStateToProps = createStructuredSelector({
//   dialogMember: makeSelectDialogMember(),
// });

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// );
// export default compose(
//   withStyles(styles),
//   withConnect,
// )(DialogMember);


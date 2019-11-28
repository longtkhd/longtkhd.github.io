/**
 *
 * DialogAlert
 *
 */

import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Fab,
} from '@material-ui/core';
import Draggable from 'react-draggable';
function PaperComponent(props) {
  return (
    <Draggable>
      <Paper {...props} />
    </Draggable>
  );
}
function DialogAlert(props) {
  const [open, setOpen] = useState(false);
  function handleClickOpen() {
    setOpen(true);
  };

  function handleClose() {
    setOpen(false);
  };

  function onDelete() {
    props.onAccept(props.value);
    setOpen(false);
  };
  return (
    <div>
      <Fab
        color="secondary"
        className={`${props.color} mx-1`}
        aria-label="add"
        size="small"
        onClick={handleClickOpen}
      >
        {props.icon}
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle id="draggable-dialog-title">Chú ý</DialogTitle>
        <DialogContent>
          <DialogContentText>{props.message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            variant="contained"
          >
            Hủy
          </Button>
          <Button
            onClick={onDelete}
            color="secondary"
            variant="contained"
          >
            Xác nhận
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

DialogAlert.propTypes = {};

export default DialogAlert;

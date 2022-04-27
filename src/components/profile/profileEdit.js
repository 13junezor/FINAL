/* eslint-disable no-unused-vars */
import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {  useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { Box, TextField } from '@mui/material';
import { updateProfileQuery} from '../../redux/actionCreators/profileAC'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 0,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({ name, about }) {
    const [newName, setNewName] = useState(name);
  const [newAbout, setNewAbout] = useState(about);
   const dispatch = useDispatch();
  const person = useSelector((store) => store.person);
  const submitHandler = () => {
    const preparedProfileQuery = {
      name: newName,
      about: newAbout,
      
    };
   
    const body = JSON.stringify(preparedProfileQuery);

    dispatch(updateProfileQuery(body, person.token));
    setNewName(newName);
    setNewAbout(newAbout);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
<div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Изменить профиль
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <form  onSubmit={submitHandler} className="d-flex flex-column align-items-center">
        <div className="mb-3">
    <div id="emailHelp" className="form-text">Имя</div>
    </div>
    <div 
    className="mb-3">
          <input 
      onChange={(e) => setNewName(e.target.value)}
      type="text" 
      className="form-control" 
      id="exampleInputPassword1" 
      value={newName}
      />
    </div>

    <div className="mb-3">
    <div id="emailHelp" className="form-text">О себе</div>
    </div>
    <div 
    className="mb-3">
          <input 
      onChange={(e) => setNewAbout(e.target.value)}
      type="text" 
      className="form-control" 
      id="exampleInputPassword1" 
      value={newAbout}
      />
    </div>
          <button 
    type="submit" 
    className="btn btn-primary">
        Сохранить изменения
        </button>
  </form>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Закрыть
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>



    
   ) 
}
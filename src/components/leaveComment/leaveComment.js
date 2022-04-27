import { Button, DialogActions, DialogContent } from "@mui/material"
import {  useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {  queryNewComm} from "../../redux/actionCreators/postAC"
import { useParams } from "react-router-dom";
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
  
const Comform = () => {
    const { postsId } = useParams();
  const dispatch = useDispatch()
   const [text, setText] = useState('')
const changeTitle = (e) => {
    setText(e.target.value)}
const person = useSelector((store) => store.person);
const submitHandler = () => {
  const preparedComentQuery = {
      text: text,
    }
  const body = JSON.stringify(preparedComentQuery);
  
  dispatch(queryNewComm(body, person.token, postsId));
    setText('')
          }
     
      const [open, setOpen] = React.useState(false);
      const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
   return (
     <>
<div>
      <Button variant="outlined" onClick={handleClickOpen}>
       Комментировать
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
      onChange={changeTitle}
      type="text" 
      className="form-control" 
      id="exampleInputPassword1" 
      value={text}
      />
    </div>

          <button 
    type="submit" 
    className="btn btn-primary">
        Комментировать
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
     </>
       ) 
}
export default Comform
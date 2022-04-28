import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import Redach from "../redach/redach";
import './style.css'
import CustomizedDialogs from "../modalComm/modalComm";
import {  useSelector } from "react-redux";
import Comform from "../leaveComment/leaveComment";

const Detail = ({ id, author, title, text, img, tag, likes, index }) => {
  const navigate = useNavigate();
  const [viewModal, setViewModal] = useState(false);
  const openModal = () => {
    setViewModal(true);
  };
  const closeModal = () => {
    setViewModal(false);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    closeModal();
  };
  const post = useSelector((store) => store.post);
  const person = useSelector((store) => store.person)
  let edit = <></>
  if (post.author?._id === person._id) {
    edit = <button onClick={openModal} type="button" className="btn btn-warning">
    Изменить
  </button>
  }
    
  return (
    <>
      <div className="container">
        <h1 className="media-heading">{title}</h1>
        <div className="text-center">
          <img src={img} className="rounded pict" alt="картинка" />
        </div>
        <p>
          <strong>Отправитель: {author}</strong>
        </p>
        <p>
          <strong>Подпись:</strong>
          {text}
        </p>
        <p>
          <strong>Тэги:</strong>
          {tag}
        </p>
        <p>
          
          Публикация понравилась: {likes.length} раз
        </p>

        <div className="btn-group btn-group-sm butt" role="group" aria-label="Basic example">
          <button
            onClick={() => {
              navigate(`/posts`);
            }}
            type="button"
            className="btn btn-secondary rding"
          >
            Назад
          </button>
          <Comform  />
          <CustomizedDialogs />
          {edit}
        </div>
      </div>

      <Modal state={viewModal} onClose={closeModal}>
        <Redach onClick={submitHandler}
         {...post}
        />
      </Modal>
    </>
  );
};
export default Detail;

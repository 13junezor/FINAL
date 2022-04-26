import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import Redach from "../redach/redach";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import CustomizedDialogs from "../modalComm/modalComm";
import { useSelector } from "react-redux";

const Detail = ({ _id, author, title, text, img, tag, likes, index }) => {
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
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          Публикация понравилась: <strong>{likes}</strong> раз
        </p>

        <div className="d-flex justify-content-around">
          <button
            onClick={() => {
              navigate(`/posts`);
            }}
            type="button"
            className="btn btn-secondary rding"
          >
            Назад
          </button>
          <CustomizedDialogs />
          <button onClick={openModal} type="button" className="btn btn-warning">
            Изменить
          </button>
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

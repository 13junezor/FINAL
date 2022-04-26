/* eslint-disable react-hooks/exhaustive-deps */
import {  useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  useParams } from "react-router-dom"
import { API_TOKEN } from "../../constants/constans"
import { getPostQuery } from "../../redux/actionCreators/selectedPostAC"
import Detail from "../Detail/Detail"

const Detailpost = () => {
        const { postsId } = useParams();
        const post = useSelector((store) => store.post);
        const [comments, setComments] = useState([]);
        const person = useSelector((store) => store.person);
        const controller = useRef(new AbortController());
        const controllerForApi = controller.current.signal;
        const dispatch = useDispatch();
        useEffect(() => {
          dispatch(getPostQuery(person.token, postsId));
        }, [postsId, dispatch, person.token, controllerForApi]);

        useEffect(() => {
                fetch(`https://api.react-learning.ru/posts/comments/${postsId}`, {
                  metod: "GET",
                  headers: {
                    authorization: `Bearer ${person.token}`,
                  },
                })
                  .then((response) => response.json())
                  .then((dataFromServer) => setComments(dataFromServer));
              }, [postsId, person.token]);  
      console.log(post, postsId)
        const content = () => {
          if (!post._id) {
            return <strong>Подождите...</strong>;
          }
      

        return (
                <>
                <div className='container post'>
                 <div>Детальная информация об открытке: </div> 
                {
                                  <Detail
                        title={post?.title}
                        text={post?.text} 
                        img={post?.image}
                        tag={post?.tags.join(', ')}
                        likes ={post?.likes.length} />     
                }
                </div>
                
      {comments.map((comment, index) => (
        <div key={index}>
          {comment.author.name}: {comment.text}
        </div>
      ))}
   
                </>
                      )
            };
  return <div>{content()}</div>;
}
export default Detailpost
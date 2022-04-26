/* eslint-disable react-hooks/exhaustive-deps */
import {  useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  useParams } from "react-router-dom"

import { getPostQuery } from "../../redux/actionCreators/selectedPostAC"
import Detail from "../Detail/Detail"

const Detailpost = () => {
        const { postsId } = useParams();
        const post = useSelector((store) => store.post);
        const person = useSelector((store) => store.person);
        const controller = useRef(new AbortController());
        const controllerForApi = controller.current.signal;
        const dispatch = useDispatch();
        useEffect(() => {
          dispatch(getPostQuery(person.token, postsId));
        }, [postsId, dispatch, person.token, controllerForApi]);

       
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
                </>
                      )
            };
  return <div>{content()}</div>;
}
export default Detailpost
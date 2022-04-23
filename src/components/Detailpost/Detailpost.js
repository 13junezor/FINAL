/* eslint-disable react-hooks/exhaustive-deps */


import {  useEffect, useRef, useState } from "react"

import {  useParams } from "react-router-dom"
import { API_TOKEN } from "../../constants/constans"

import Detail from "../Detail/Detail"

const Detailpost = () => {
        const { postsId } = useParams();
        const [post, setPost] = useState({});
        
        const controller = useRef(new AbortController());

      
        useEffect(() => {
          fetch(`https://api.react-learning.ru/posts/${postsId}`, {
            
            headers: {
              authorization: `Bearer ${API_TOKEN}`,
            },
          })
            .then((response) => response.json())
            .then((dataFromServer) => setPost(dataFromServer));
      
          return () => {
            
            controller.current.abort();
          };
        }, [postsId, API_TOKEN]);
      console.log(post, postsId)
        const content = () => {
          if (!post._id) {
            return <strong>Loading...</strong>;
          }
      

        return (
                <ul className='list-group post'>
                 <div>Детальная информация об открытке: </div> 
                {
                
                  <Detail
                        title={post?.title}
                        text={post?.text} 
                        img={post?.image}
                        tag={post?.tags.join(', ')}
                        likes ={post?.likes.length} />     
                }
                </ul>
                      )
            };
  return <div>{content()}</div>;
}
export default Detailpost
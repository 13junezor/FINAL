import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Postitem from "../Postitem/Postitem";

export const MyPosts = () => {
    const posts = useSelector((store) => store.posts)
    const person = useSelector((store) => store.person);
    let filtor = posts.filter(item => item?.author?._id === person._id)
if (filtor.length === 0) return <div>У вас еще нет открыток! Скорее создайте<Link className='nav-link but' to="/posting">свою первую открытку!</Link>
 </div>
return (
    <div >
    {filtor.map((post, i) => {
        return <Postitem key={post._id} isAut={post?.autor?._id} index={i}{...post} />;
      })}
  </div>
)
    }
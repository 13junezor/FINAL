import {  useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import Detail from "../Detail/Detail"


const LSPostKey = 'postos'

function Detailpost() {
    const {postsId} = useParams()
    
    const postos = useSelector(store => store.post)
    useEffect(() => {
        const dataFromLs = localStorage.getItem(LSPostKey)
        JSON.parse(dataFromLs)
                }, [])
        useEffect(() => {
                localStorage.setItem(LSPostKey, JSON.stringify(postos))
                }, [postos])
        

const ner = postos.filter(item => item.id === +postsId)
        return (
<ul className='list-group post'>
  {
  ner.map((postos, i) => (
    <Detail key={postos.id}
          index={i} id={postos.id} 
          title={postos.title}
          text={postos.text} 
          img={postos.img}
          tag={postos.tag} />     
  ))}
  </ul>
        )
}
export default Detailpost
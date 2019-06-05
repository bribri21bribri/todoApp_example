import React from 'react'
import {data} from '../data/data'
import {Link} from 'react-router-dom'

const Home = () => {
return(
    <>
      <div className="list-group">
      <h1>首頁</h1>
        {data.map(item=>(
           <Link key={item.id} className="list-group-item list-group-item-action" to={'/student/'+item.id}>
             {item.name}
           </Link>
        ))}
      </div>
    </>
  )
}
export default Home
import React from 'react'
import { data } from '../data/data'
import { Link } from 'react-router-dom'


const Student = (props) => {

    const studentData = data.find(item=>item.id === + props.match.params.id)
    console.log(props.match)
    return (
      <>
      <h1>學生詳細頁面</h1>
      {studentData? (
      <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">{studentData.name}</h5>
          <ul className='list-group'>
            <li className='list-group-item'>學號: {studentData.id}</li>
            <li className='list-group-item'>出生年月日: {studentData.birth}</li>
          </ul>
        </div>
      </div>
      ):(
        <div className="alert alert-danger">
          沒找到資料
        </div>
      )}
      </>
    )
  
}

export default Student

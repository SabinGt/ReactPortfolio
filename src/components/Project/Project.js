import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import './Project.scss'
import person from '../assets/images/person.png'


function Project() {
  const [data,setData] = useState([]);
      useEffect(()=>{
          Axios.get('https://api.github.com/users/SabinGt/repos?per_page=3').then((response)=>{
              setData(response.data)
          })
      })
  
  return (
    <div className='projects'>
      <div className="cards">
      {data.map((data)=>{
        return(
          <div className="card">
          <img src={person} alt="" />
          <div className="card-title">
            {data.name}
          </div>
          <div className="card-info">
           {data.description}
           
          </div>
          <div className="card-footer">
            <a href={data.html_url}>Github</a>
          
          </div>
        </div>
        )
      })}
        
        
      </div>
    </div>
  )
}

export default Project
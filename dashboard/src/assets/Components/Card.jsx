import React from 'react'
import { BiLogoHtml5 } from 'react-icons/bi'
import { BiLogoAndroid } from 'react-icons/bi'
import { BiBuilding } from 'react-icons/bi'
import '../Styles/content.css'

const courses = [
    {
        title: 'Web Development',
        icon: <BiLogoHtml5 />,
    },

    {
        title:  'App Development',
        icon: <BiLogoAndroid />,
    },

    {
        title:  'UI & UX',
        icon: <BiBuilding />,
    }
]

function Card() {
  return (
    <div className='card-container'>
        {courses.map((item) => (

            <div className="card">
                <div className='card-cover'>{item.icon}</div>

                <div className="card-title">
                    <h2>{item.title}</h2>
                </div>
            </div>

        ))}
        
    </div>
  )
}

export default Card
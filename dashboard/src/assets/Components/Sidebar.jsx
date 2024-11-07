import React from 'react'
import { BiHome } from "react-icons/bi";
import { BiBookAlt } from "react-icons/bi";
import { BiMessage } from "react-icons/bi";
import { BiSolidReport } from "react-icons/bi";
import { BiTask } from "react-icons/bi";
import { BiStats } from "react-icons/bi";
import { BiHelpCircle } from "react-icons/bi";
// to import the sidebar css styling file
import '../Styles/sidebar.css'
// import { Link } from 'react-router-dom';




function Sidebar() {
  return (
    <div className='menu'>
        <div className='logo'>
            <BiBookAlt className='logo-icon'/>
            <h2>StudyFlex</h2>
        </div>

        <div className=" menu-list">
            <a href="" className="item">
                <BiHome className='menu-icon'/>
                Dashboard
            </a>

            <a href="" className="item">
                <BiTask className='menu-icon'/>
                Assignments
            </a>

            <a href="" className="item">
                <BiSolidReport className='menu-icon'/>
                Report
            </a>

            <a href="" className="item">
                <BiMessage className='menu-icon'/>
                Messages
            </a>

            <a href="" className="item">
                <BiHelpCircle className='menu-icon'/>
                Help
            </a>

        </div>
    </div>
  )
}

export default Sidebar
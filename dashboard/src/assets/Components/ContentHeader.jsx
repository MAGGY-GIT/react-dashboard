import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { BiNotification } from 'react-icons/bi'

import '../Styles/content.css'

function ContentHeader() {
  return (
    <div className='content-header'>
        <h1 className="header-title">
            Dashboard
        </h1>

        <div className="header-activity">
            <div className="search-box">
                <input type="text" placeholder="Search..." />
                <BiSearch className="icon search-icon" />
            </div>

            <div className="notify">
                <BiNotification className='icon notify-icon'/>
            </div>
        </div>
    </div>
  )
}

export default ContentHeader
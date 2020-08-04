import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',background:'black',color:'white',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p> forthezorba@gmail.com </p>
           <h5 style={{color:'white'}}> By Zorba  <Icon type="smile" /></h5>
        </div>
    )
}

export default Footer

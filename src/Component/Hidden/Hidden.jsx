import React, { useState } from 'react'
import './Hidden.css'
import countries from './Countries.json';

function Hidden(props) {
    const [data,setData]=useState(countries);

    const setCountry=(valId)=>{
    setData(data(item=>
      data.id===valId
    ))
}  
return (
    <div>
        <div className='main_bar' style={{}}>
            <div className='header_bar'></div>
            <div className='hidden_bar'>
                <div className='bar_content'>
                    <ul>
                        <li><img src={data.flag}></img>{data.name}<i className="fa-solid fa-caret-down"></i></li>
                        <div></div>
                        <li>Brand USA</li>
                        <li>Media Inquiries</li>
                        <li>Contact US</li>
                        <li>Terms of Use</li>
                        <li>USA Travel Information</li>
                        <li>FAQs</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='countries'>
                    <ul>
                    
                    </ul>
                </div>   
            </div>
            <div className='side_bar'>
                <div id='upper_side'></div>
                <div id='down_side'></div>
            </div>
        </div>
    </div>
  )
}
export default Hidden;
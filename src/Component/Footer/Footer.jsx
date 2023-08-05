import React from 'react'
import ad from './ad.png';
import './Footer.css';
import Google from './google.jpg';
import Apple from './apple.jpg';

function Footer() {
  return (
    <div className='footer_container'>
        <div className='list_item'>
            <div className='first_list'>
                <ul>
                    <li>Brand USA</li>
                    <li>Media Inquiries</li>
                    <li>Contact US</li>
                    <li>Terms of Use</li>
                    <li>USA Travel Information</li>
                </ul>
            </div>
            <div className='last_list'>
                <ul>
                    <li>FAQs</li>
                    <li>Privacy Policy</li>
                    <li>Travel Trade</li>
                </ul>
            </div>
        </div>
        <div className='icons'>
            <a><i className="fa-brands fa-tiktok"></i></a>
            <a><i className="fa-brands fa-facebook-f"></i></a>
            <a><i className="fa-brands fa-youtube"></i></a>
            <a><i className="fa-brands fa-instagram"></i></a>
        </div>
        <div className='pic_para'>
            <div className='first'>
                <img src='https://wallpaperaccess.com/full/267434.jpg'></img>
                <p>Find vacation ideas in the latest Visit The USA Guide</p>
            </div>
            <div className='last'>
                <img src='https://www.hdwallpaperspulse.com/wp-content/uploads/2019/02/15/awesome-Full-HD-Nature-Wallpaper.jpg'></img>
                <p>Create a custom itinerary with the USA Trip Planner</p>
            </div>
        </div>
        <div className='ad'>
            <img src={ad} id='ad'></img>
            <img src={Google} id='google'></img>
            <img src={Apple} id='apple'></img>
        </div>
        <div className='last_div'>
            <div className='underline_last_div'></div>
            <p>Visit The USA 2023 Brand USA. All rights reserved.</p>
        </div>
    </div>
  )
}
export default Footer;
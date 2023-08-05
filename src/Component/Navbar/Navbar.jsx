import React from 'react'
import { useState, useEffect } from 'react';
import Usa from './USA.png';
import Hidden from '../Hidden/Hidden';
import India from './Flag_of_India.png';
import countries from './Countries.json';
import './Navbar.css';
import America1 from './America1.jpg';
import America2 from './America2.jpg';
import America3 from './America3.jpg';
import America4 from './America4.jpg';
import America5 from './America5.jpg';
import America6 from './America6.jpg';
import America7 from './America7.jpg';

function Navbar(props) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = (props) => {
        setIsActive(current => !current);
    }
    const view = false;
    const icon = false;

    const [isShowing, setShowing] = useState(view);
    const [isIcon, setIcon] = useState(icon);

    const showinhHandler = (props) => {
        setShowing(true);
        setIcon(true)
    }
    const hidingHandler = (props) => {
        setShowing(false);
        setIcon(false)
    }

    const [isShow, setShow] = useState(view);
    const [isIconshow, setIconshow] = useState(icon);

    const destinationDetailsHandler = () => {
        if (isShow === false) {
            setShow(true);
            setIconshow(true);
        }
        else {
            setShow(false);
            setIconshow(false)
        }
    }

    const [isTripDetails, setTripDetails] = useState(false)
    const tripDetailsHandler = () => {
        setTripDetails(!isTripDetails)
    }

    const [cuntry, setData] = useState(countries);

    const [isRecord, setRecord] = useState([]);
    useEffect(() => {
        async function getUsers() {
            const response = await fetch('https://travel-api-lous.onrender.com/api/v1/admin/state', {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                },
            });
            const finaldata = await response.json();
            setRecord(finaldata);
        }
        getUsers();
    }, []);

    const array = ['Pacific', 'West', 'Southwest', 'Midwest', 'Southeast', 'Northeast', 'USA Territories'];

    const [result, setResult] = useState({
        region: null,
        name: null
    })

    var value = ''
    return (
        <div className='nav_bar_container'>
            <nav className='nav_bar' style={{ display: props.showValue ? 'grid' : 'grid' }}>
                <div className='upper_nav'>
                    <div className='first_nav'>
                        <div>
                            <img src={Usa}></img>
                            <figcaption>GoUSA.in</figcaption>
                        </div>
                        <p>The official travel site<br></br> of the USA</p>
                    </div>
                    <div className='last_nav'>
                        <ul>
                            <li><a href='#' onClick={handleClick} ><i className="fa fa-search" aria-hidden="true"></i></a></li>
                            <li><a href='#'><i className="fa-regular fa-heart"></i></a></li>
                            <li style={{ backgroundColor: "red", display: isIcon ? 'none' : 'grid' }} onClick={showinhHandler}><a className='lastLi' href='#'><i className='fa-solid fa-bars' style={{ color: "white" }} ></i></a></li>
                            <li style={{ backgroundColor: "red", display: isIcon ? 'grid' : 'none' }} onClick={hidingHandler}><a className='lastLi' href='#'><i className="fa-solid fa-xmark" style={{ color: "white", padding: "5px" }}></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className='down_nav'>
                    <ul>
                        <li id='firstdest' onClick={destinationDetailsHandler}>Destinations<i className={isIconshow ? "fa-solid fa-sort-up" : "fa-solid fa-sort-down"}></i></li>
                        <li onClick={tripDetailsHandler}>Trips<i className={isTripDetails ? "fa-solid fa-sort-up" : "fa-solid fa-sort-down"}></i></li>
                        <li>Experiences<i className="fa-solid fa-sort-down"></i></li>
                    </ul>
                </div>
            </nav>
            {
                isShow ?
                    <div className='destinationdetails'>
                        <div className='header_bar'></div>
                        <ul>
                            <li style={{ color: 'orange', textDecoration: 'underline' }}>States</li>
                            <li>Cities</li>
                            <li>Parks</li>
                        </ul>
                        <div className='USAplaces'>

                            {array.map((items, id) => {
                                switch (items) {
                                    case "Pacific": return (
                                        <div key={id}>
                                            <p style={{ color: '#90b3cf' }}>{items}</p>
                                            {isRecord.data?.map((item, index) =>
                                                <p key={index}>{item.region == items ? item.name : null}</p>
                                            )}
                                        </div>
                                    )
                                    case "West": return (
                                        <div key={id}>
                                            <p style={{ color: '#90b3cf' }}>{items}</p>
                                            {isRecord.data?.map((item, index) =>
                                                <p key={index}>{item.region == items ? item.name : null}</p>
                                            )}
                                        </div>
                                    )
                                    case "Southwest": return (
                                        <div key={id}>
                                            <p style={{ color: '#90b3cf' }}>{items}</p>
                                            {isRecord.data?.map((item, index) =>
                                                <p key={index}>{item.region == items ? item.name : null}</p>
                                            )}
                                        </div>
                                    )
                                    case "Midwest": return (
                                        <div key={id}>
                                            <p style={{ color: '#90b3cf' }}>{items}</p>
                                            {isRecord.data?.map((item, index) =>
                                                <p key={index}>{item.region == items ? item.name : null}</p>
                                            )}
                                        </div>
                                    )
                                    case "Southeast": return (
                                        <div key={id}>
                                            <p style={{ color: '#90b3cf' }}>{items}</p>
                                            {isRecord.data?.map((item, index) =>
                                                <p key={index}>{item.region == items ? item.name : null}</p>
                                            )}
                                        </div>
                                    )
                                    case "Northeast": return (
                                        <div key={id}>
                                            <p style={{ color: '#90b3cf' }}>{items}</p>
                                            {isRecord.data?.map((item, index) =>
                                                <p key={index}>{item.region == items ? item.name : null}</p>
                                            )}
                                        </div>
                                    )
                                    case "USA Territories": return (
                                        <div key={id}>
                                            <p style={{ color: '#90b3cf' }}>{items}</p>
                                            {isRecord.data?.map((item, index) =>
                                                <p key={index}>{item.region == items ? item.name : null}</p>
                                            )}
                                        </div>
                                    )
                                }
                            }
                            )}

                           
                        
                        </div >
                        <div className='destinationDetailsBar' style={{ height: "300px" }}>
                            <i className="fa-solid fa-x" onClick={destinationDetailsHandler}></i>
                        </div>
                    </div>
                    :
                    ""
            }
            {
                isTripDetails ? (
                    <div className='tripdetails'>
                        <div className='header_bar'></div>
                        <div className='tripdetailsMiddle'>
                            <div>
                                <img src='https://blog.hubspot.com/hubfs/image-file-extensions.jpg'></img>
                                <p className='tripdetailsFirstP'>Trip 1-2 weeks</p>
                                <p className='tripdetailsLastP'>Idaho Road Trip: of the beaten path to Yellowstone</p>
                            </div>
                            <div>
                                <img src='https://img.freepik.com/free-vector/traditional-diwali-background-with-image-text-space_1017-40122.jpg'></img>
                                <p className='tripdetailsFirstP'>Trip 1-2 weeks</p>
                                <p className='tripdetailsLastP'>A Specific Pride Road Trip</p>
                            </div>
                            <div>
                                <img src='https://wallpapers.com/images/hd/bubbles-background-cxu66nt9guprib70.jpg'></img>
                                <p className='tripdetailsFirstP'>Trip 1-2 weeks</p>
                                <p className='tripdetailsLastP'>Small Towns and Countri Road through Louisiana and Arkansans</p>
                            </div>
                        </div>
                        <button>View all trips</button>
                        <div className='tripdetailsBar'>
                            <i className="fa-solid fa-x" onClick={tripDetailsHandler}></i>
                            <div id='upper_side'></div>
                            <div id='down_side'></div>
                        </div>
                    </div>
                )
                    :
                    (
                        ""
                    )
            }
            <div className='main_bar' style={{ display: isShowing ? 'block' : 'none' }}>
                <div className='header_bar'></div>
                <div className='hidden_bar'>
                    <div className='bar_content'>
                        <ul>
                            <li><img src={India}></img>English (India)<i className="fa-solid fa-caret-down"></i></li>
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
                </div>
                <div className='side_bar'>
                    <div id='upper_side'></div>
                    <div id='down_side'></div>
                </div>
            </div>
        </div >
    )
}
export default Navbar;
import React from 'react'
import './Bottom.css';
import TripVisit from './travel.png';

function Bottom() {
  return (
    <div className='bottom_Content'>
        <h1>This or That?</h1>
        <a><i className="fa-solid fa-circle-arrow-down"></i></a>
        <div className='para'>
           <p className='para_p'>Choose one of the two images belolow to customize your jurney and match with content that interests you.</p>
        </div>
        <span className='dashedline'></span>
        <div className='mainDiv'>
            <div className='img_portion'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/1/19/Empire_State_Building_in_Rainbow_Colors_for_Gay_Pride_2015_%2819258537982%29.jpg'></img>
                <p id='first_p'>Big-city-glamour</p>
                <div className='or'><h3>Or</h3></div>
                <img src='https://media.istockphoto.com/id/653780424/photo/autumn-mist-in-the-village-of-tyringham-in-the-berkshires.webp?b=1&s=170667a&w=0&k=20&c=f_5B6WXYdKMXpo_-ybtuuUpvbVvug7wQFwgNMbIyvbo='></img>
                <p>Small-town-charm</p>
            </div>
            <div className='box_container'>
                <div className='dotted_box'></div>
                <p className='dotted_box_p'>Ideas to inspire you</p>
            </div>
            <div className='bottom_image_container'>
                <div className='bottom_images'>
                    <div className='first_bottom_images'>
                        <div className='bottom_image'>
                            <img src='https://www.shutterstock.com/image-photo/micro-peacock-feather-hd-imagebest-260nw-1127238599.jpg'></img>
                            <p className='bottom_exp'>Experiences</p>
                            <p className='bottom_places'>6 Places To be Outside in the USA This Winter</p>
                        </div>
                        <div className='bottom_image'>
                            <img src='https://wallpapers.com/images/featured/a5u9zq0a0ymy2dug.jpg'></img>
                            <p className='bottom_exp'>Experiences</p>
                            <p className='bottom_places'>Ski Utah: Winter Sports Haven</p>
                        </div>
                    </div>
                    <div className='last_bottom_images'>
                        <div className='bottom_image'>
                            <img src='https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-HD-1080P-3D-Download.jpg'></img>
                            <p className='bottom_exp'>Experiences</p>
                            <p className='bottom_places'>New Maxico Undergroud: Touring Caves and Caverns in the Southwest</p>
                        </div>
                        <div className='bottom_image'>
                            <img src='https://www.pixelstalk.net/wp-content/uploads/2016/05/Download-hd-wallpapers-1080p-screen.jpg'></img>
                            <p className='bottom_exp'>Experiences</p>
                            <p className='bottom_places'>5 Flowers You Inly Found in the USA</p>
                        </div>
                    </div>
                </div>
                <button>Shuffle results</button>
            </div>
        </div>
        {/* Bottom Image section end */}
        {/* Down area start */}
        <div className='down_area'>
            <h2>Ask a Local</h2>
            <div className='down_div'>
                <div className='down_left'>
                    <img src='https://c4.wallpaperflare.com/wallpaper/764/505/66/baby-groot-4k-hd-superheroes-wallpaper-preview.jpg'></img>
                </div>
                <div className='down_right'>
                    <h3>
                        Get the bestmost recommendations from local who love their cities
                    </h3>
                    <p>In each and every destination, you will find information, advice and experiences from locals. Learn about the layest recommendations on attractions, places to eat, shop and much more.</p>
                    <button>View all videos</button>
                    <p className='exploreP'>Explore destinations</p>
                    <div></div>
                    <span>
                        <p className='lastp'>U.S.Virgin Islands</p>
                        <p className='lastp'> St.Croix</p>
                        <p className='lastp'> St.John</p>
                        <p className='lastp'> St.Thomas</p>
                    </span>
                    
                </div>
            </div>
        </div>
        <span className='last_span'>
            <p>Now featuring traveller ratings from:</p>
            <img src={TripVisit}></img>
        </span>
    </div>
  )
}
export default Bottom;
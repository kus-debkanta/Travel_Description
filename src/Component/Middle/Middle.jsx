import React, { useState } from 'react';
import './Middle.css';

function Middle() {

   const [isColor, setColor]=useState(false)
   const changeColor=(index)=>{
     setColor(!isColor)
   }


   const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };
  return (
    <div className='middleContent'>
        <img src='https://wallpapercave.com/wp/wp8168902.jpg'></img>
        <h1>Browse day-by-day itineraries and travel ideas</h1>
            <div className='middlearea'>
                <ul className="tabs">
                    <li className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1) }>Featured</li>
                    <li className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2) } >Lifestyle</li>
                    <li className={activeTab === 3 ? 'active' : ''} onClick={() => handleTabClick(3) }>Shopping</li>
                    <li className={activeTab === 4 ? 'active' : ''} onClick={() => handleTabClick(4) }>Food & Drink</li>
                    <li className={activeTab === 5 ? 'active' : ''} onClick={() => handleTabClick(5) } style={{paddingTop: '0px'}}>Cities & Towns</li>
                    <li className={activeTab === 6 ? 'active' : ''} onClick={() => handleTabClick(6) } style={{paddingTop: '0px'}}>Culture & History</li>
                    <li className={activeTab === 7 ? 'active' : ''} onClick={() => handleTabClick(7) }>Entertainment</li>
                </ul>
            </div> 
        <div className='miunderline'></div>
        <div className='videoContent'>
            <h3>Trips</h3>
            { activeTab === 1?
              <>
              <div className='videos'>
                <div className='firstVideos'>
                    <div className='video'>
                        <iframe  
                            src="https://www.youtube.com/embed/ESnrn1kAD4E" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                        <p className='tour'>Trip-1-2 weeks</p>
                        <p className='destination'>An Epic Tour of Southern California Culture, Cuisine and Attractions</p>
                    </div>
                    <div className='video'>
                        <iframe 
                            src="https://www.youtube.com/embed/CBYHwZcbD-s" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                        <p className='tour'>Trip-1-2 weeks</p>
                        <p className='destination'>Puerto Rico Road Trip: Island Adventure and Scenic Beauty</p>
                    </div>
                </div>
                <div className='lastVideos'>
                    <div className='video'>
                        <iframe
                            src="https://www.youtube.com/embed/lGmRnu--iU8" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                        <p className='tour'>Trip-1-2 weeks</p>
                        <p className='destination'>The Ultimate Hawaiian Island-Hopping Itinerary</p>
                    </div>
                    <div className='video'>
                        <iframe 
                            src="https://www.youtube.com/embed/RDV3Z1KCBvo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                        <p className='tour'>Trip-1-2 weeks</p>
                        <p className='destination'>Cultrure, History, and Tranquility: 3 Captivating Stops in Georgia</p>
                    </div>
                </div>
            </div>
              </>
              :
              ""

            }
            { activeTab === 2?
              <>
              <div className='videos'>
                <div className='firstVideos'>
                    <div className='video'>
                        <iframe  
                            src="https://www.youtube.com/embed/ESnrn1kAD4E" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                        <p className='tour'>Trip-1-2 weeks</p>
                        <p className='destination'>An Epic Tour of Southern California Culture, Cuisine and Attractions</p>
                    </div>
                    <div className='video'>
                        <iframe 
                            src="https://www.youtube.com/embed/CBYHwZcbD-s" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                        <p className='tour'>Trip-1-2 weeks</p>
                        <p className='destination'>Puerto Rico Road Trip: Island Adventure and Scenic Beauty</p>
                    </div>
                </div>
                <div className='lastVideos'>
                    <div className='video'>
                        <iframe
                            src="https://www.youtube.com/embed/lGmRnu--iU8" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                        <p className='tour'>Trip-1-2 weeks</p>
                        <p className='destination'>The Ultimate Hawaiian Island-Hopping Itinerary</p>
                    </div>
                </div>
            </div>
              </>
              :
              ""

            }
            { activeTab === 3?
              <>
              <div className='videos'>
                <div className='firstVideos'>
                    <div className='video'>
                        <iframe  
                            src="https://www.youtube.com/embed/ESnrn1kAD4E" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                        <p className='tour'>Trip-1-2 weeks</p>
                        <p className='destination'>An Epic Tour of Southern California Culture, Cuisine and Attractions</p>
                    </div>
                    <div className='video'>
                        <iframe 
                            src="https://www.youtube.com/embed/CBYHwZcbD-s" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                        <p className='tour'>Trip-1-2 weeks</p>
                        <p className='destination'>Puerto Rico Road Trip: Island Adventure and Scenic Beauty</p>
                    </div>
                </div>
            </div>
              </>
              :
              ""

            }
            { activeTab === 4?
              <>
              <div className='videos'>
                <div className='firstVideos'>
                    <div className='video'>
                        <iframe  
                            src="https://www.youtube.com/embed/ESnrn1kAD4E" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                        <p className='tour'>Trip-1-2 weeks</p>
                        <p className='destination'>An Epic Tour of Southern California Culture, Cuisine and Attractions</p>
                    </div>
                    <div className='video'>
                        <iframe 
                            src="https://www.youtube.com/embed/CBYHwZcbD-s" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                        <p className='tour'>Trip-1-2 weeks</p>
                        <p className='destination'>Puerto Rico Road Trip: Island Adventure and Scenic Beauty</p>
                    </div>
                </div>
                <div className='lastVideos'>
                    <div className='video'>
                        <iframe 
                            src="https://www.youtube.com/embed/RDV3Z1KCBvo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                        <p className='tour'>Trip-1-2 weeks</p>
                        <p className='destination'>Cultrure, History, and Tranquility: 3 Captivating Stops in Georgia</p>
                    </div>
                </div>
            </div>
              </>
              :
              ""

            }
            { activeTab === 5?
              <>
              <div className='videos'>
                <div className='firstVideos'>
                    <div className='video'>
                        <iframe  
                            src="https://www.youtube.com/embed/ESnrn1kAD4E" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                        <p className='tour'>Trip-1-2 weeks</p>
                        <p className='destination'>An Epic Tour of Southern California Culture, Cuisine and Attractions</p>
                    </div>
                    <div className='video'>
                        <iframe 
                            src="https://www.youtube.com/embed/CBYHwZcbD-s" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                        <p className='tour'>Trip-1-2 weeks</p>
                        <p className='destination'>Puerto Rico Road Trip: Island Adventure and Scenic Beauty</p>
                    </div>
                </div>
                <div className='lastVideos'>
                    <div className='video'>
                        <iframe
                            src="https://www.youtube.com/embed/lGmRnu--iU8" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                        <p className='tour'>Trip-1-2 weeks</p>
                        <p className='destination'>The Ultimate Hawaiian Island-Hopping Itinerary</p>
                    </div>
                    <div className='video'>
                        <iframe 
                            src="https://www.youtube.com/embed/RDV3Z1KCBvo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                        <p className='tour'>Trip-1-2 weeks</p>
                        <p className='destination'>Cultrure, History, and Tranquility: 3 Captivating Stops in Georgia</p>
                    </div>
                </div>
            </div>
              </>
              :
              ""

            }
            { activeTab === 6?
              <>
              <div className='videos'>
                <div className='lastVideos'>
                    <div className='video'>
                        <iframe
                            src="https://www.youtube.com/embed/lGmRnu--iU8" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                        <p className='tour'>Trip-1-2 weeks</p>
                        <p className='destination'>The Ultimate Hawaiian Island-Hopping Itinerary</p>
                    </div>
                    <div className='video'>
                        <iframe 
                            src="https://www.youtube.com/embed/RDV3Z1KCBvo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                        <p className='tour'>Trip-1-2 weeks</p>
                        <p className='destination'>Cultrure, History, and Tranquility: 3 Captivating Stops in Georgia</p>
                    </div>
                </div>
            </div>
              </>
              :
              ""

            }
            { activeTab === 7?
              <>
              <div className='videos'>
                <div className='firstVideos'>
                    <div className='video'>
                        <iframe  
                            src="https://www.youtube.com/embed/ESnrn1kAD4E" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                        <p className='tour'>Trip-1-2 weeks</p>
                        <p className='destination'>An Epic Tour of Southern California Culture, Cuisine and Attractions</p>
                    </div>
                    <div className='video'>
                        <iframe 
                            src="https://www.youtube.com/embed/CBYHwZcbD-s" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                        </iframe>
                        <p className='tour'>Trip-1-2 weeks</p>
                        <p className='destination'>Puerto Rico Road Trip: Island Adventure and Scenic Beauty</p>
                    </div>
                </div>
                <div className='lastVideos'>
                    <div className='video'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/rN1fNO-ATb0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <p className='tour'>Trip-1-2 weeks</p>
                        <p className='destination'>The Ultimate Hawaiian Island-Hopping Itinerary</p>
                    </div>
                    <div className='video'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/MfhZJcTOy1A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <p className='tour'>Trip-1-2 weeks</p>
                        <p className='destination'>Cultrure, History, and Tranquility: 3 Captivating Stops in Georgia</p>
                    </div>
                </div>
            </div>
              </>
              :
              ""

            }
            <button>view all trips</button>
        </div>
        <div className='imageContent'>
            <h3>Experience</h3>
            <div className='images'>
                <div className='firstImages'>
                    <div className='mi_image'>
                        <img src='https://www.shutterstock.com/image-photo/micro-peacock-feather-hd-imagebest-260nw-1127238599.jpg'></img>
                        <p className='exp'>Experiences</p>
                        <p className='places'>6 Places To be Outside in the USA This Winter</p>
                    </div>
                    <div className='mi_image'>
                        <img src='https://wallpapers.com/images/featured/a5u9zq0a0ymy2dug.jpg'></img>
                        <p className='exp'>Experiences</p>
                        <p className='places'>Ski Utah: Winter Sports Haven</p>
                    </div>
                </div>
                <div className='lastImages'>
                    <div className='mi_image'>
                        <img src='https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-HD-1080P-3D-Download.jpg'></img>
                        <p className='exp'>Experiences</p>
                        <p className='places'>New Maxico Undergroud: Touring Caves and Caverns in the Southwest</p>
                    </div>
                    <div className='mi_image'>
                        <img src='https://www.pixelstalk.net/wp-content/uploads/2016/05/Download-hd-wallpapers-1080p-screen.jpg'></img>
                        <p className='exp'>Experiences</p>
                        <p className='places'>5 Flowers You Inly Found in the USA</p>
                    </div>
                </div>
            </div>
            <button>view all Experiences</button>
        </div>
        <div className='factdiv'>
            <div className='factdivFirst'><img src='https://file.kreditings.com/uploads/preview/sitting-lion-background-images-hd-for-picsart-11657445991avdajm08su.jpg'></img></div>
            <div className='factdivLast'>
                <p className='factfirstp'>Fun fact</p>
                <p>Utah's Arches National Park is home to the highest concentration of natural stone arches in the world</p>
            </div>
            <div className='arrow_icon'>
                <a id='right_arrow'><i className="fa-solid fa-chevron-right"></i></a>
                <a id='left_arrow'><i className="fa-solid fa-chevron-left"></i></a>
            </div>
        </div>

    </div>
  )
}
export default  Middle;
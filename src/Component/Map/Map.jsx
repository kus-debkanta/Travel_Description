
import Nature4 from './Nature4.jpg';
import './Map.css';
import America from './America.png';
import React, { Component } from 'react'

class Map extends Component {
    constructor() {
        super();
        this.state = {
            isShowing: false,
            data: [],
            activeTab: 1
        }
    }


    handleTabClick = (id) => {
        this.setState({
            activeTab: id
        })
    };
    componentDidMount() {
        fetch("https://travel-api-lous.onrender.com/api/v1/admin/trip")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isShowing: true,
                        data: result.data
                    });
                },
                (error) => {
                    this.setState({
                        isShowing: true,
                        error
                    });
                }
            )
    }
    render() {
        const { error, isShowing, data } = this.state;

        if (error) {
            return <div>This is Error</div>;
        } else if (!isShowing) {
            return <div></div>;
        } else {
            return (

                <div className='maping'>
                    <p id='firstp'>Scrool to explore more</p>
                    <span></span>
                    <div className='allContent'>
                        <img src={Nature4} id='natureImg'></img>
                        <div className='area'>
                            {/* <div className='firstdiv'>
                        <p id='secondp'><b>All</b></p>
                    </div>
                    <div>
                    <p><b>Not-To-Be-missed Iconic U.S Landmark </b></p>
                    </div>
                    <div>
                        <p><b>Must-Visit Cultural Hot Spots in the USA</b></p>
                    </div>
                    <div>
                        <p><b>First Growing US Cities You'll Want to visit</b></p>
                    </div>
                    <div>
                        <p><b>Where To See Wildflowers in the USA</b></p>
                    </div> */}
                            <ul className="tabs">
                                <li className={this.state.activeTab === 1 ? 'active' : ''} onClick={() => this.handleTabClick(1)}>All</li>
                                <li className={this.state.activeTab === 2 ? 'active' : ''} onClick={() => this.handleTabClick(2)} >Not-To-Be-missed Iconic U.S Landmark</li>
                                <li className={this.state.activeTab === 3 ? 'active' : ''} onClick={() => this.handleTabClick(3)}>Must-Visit Cultural Hot Spots in the USA</li>
                                <li className={this.state.activeTab === 4 ? 'active' : ''} onClick={() => this.handleTabClick(4)}>First Growing US Cities You'll Want to visit</li>
                                <li className={this.state.activeTab === 5 ? 'active' : ''} onClick={() => this.handleTabClick(5)}>Where To See Wildflowers in the USA</li>
                            </ul>
                        </div>
                        <div className='underline'></div>
                        <img src={America} className='america'></img>
                        <div className='underDiv'>
                            <div className='underImage'>
                            </div>
                            <div className='bgDiv'>
                                <p>Love a challenge? Try our new digital puzzles.</p>
                            </div>
                        </div>
                        <div className='lastDiv'>
                            <div className='lastbgDiv'>
                                <p>Now Trending.</p>
                            </div>
                            <div className='lastImage'>
                                {data.map((item, id) => (
                                    <div className='last_Image_Portion' key={id}>
                                        <img src={`https://travel-api-lous.onrender.com/${item.image}`}></img>
                                        <p>{item.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
export default Map

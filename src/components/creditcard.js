import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
//import Cript from './components/cript';



class Creditcard extends Component {
    render() {
        return(
            <div>
            <section class="creditcard ahead">
                    <div>
                    <Grid>
                    <Cell col={4}>
                    
                    <img className="front-face"
                    src="img/fcb.jpg"
                    alt="alien"
                    
                    />
            
                <div style={{marginTop: '25px'}}>
                <img className="front-face"
                src="img/go.png"
                alt="so"
                />
                </div>
            
                <div className="creditcard-right-col" col={8}>
                <p style={{color: 'white', position: 'absolute', marginLeft: '220px', marginTop: '0px', marginBottom: '200px', top: '122px'}}>DEBIT</p>
                <div style={{position: 'absolute', marginLeft: '190px', marginTop: '20px', marginBottom: '100px', top: '120px'}}>
                <img className="front-face"
                src="img/chip.png"
                alt="benz"
                />
                </div>
                <div style={{position: 'absolute', marginTop: '70px', marginLeft: '189px'}}>
                <img className="front-face"
                src="img/dow.png"
                alt="do"
                />
                </div>
                <div style={{position: 'absolute', color: 'white', marginLeft: '-90px', marginTop: '20px'}}>
                    <span style={{ fontSize: '30px' }}>50610 82001 01358 8906</span>
                </div>
                <div style={{position: 'absolute', color: 'white', marginTop: '50px', marginLeft: '50px'}}>
                    <p style={{fontSize: '0.7rem', marginLeft: '10px'}}>MONTH/YEAR</p>
                </div>
                <div style={{position: 'absolute', color: 'white', marginTop: '70px', marginLeft: '70px'}}>
                    <p>12 / 50</p>
                </div>
                <div style={{position: 'absolute', color: 'white', marginTop: '65px', marginLeft: '0.5px'}}>
                    <p style={{fontSize: '0.7rem'}}>Valid Thru</p>
                </div>
                <div style={{position: 'absolute', color: 'black', marginTop: '100px', marginLeft: '-90px'}}>
                    <p style={{fontSize: '1rem'}}>NWAOGU OBINNA DANIEL</p>
                </div>
                
                </div>
                    </Cell>
                        <p style={{color: 'white', float: 'right', marginLeft: '90px', marginTop: '10px', fontSize: 'small'}}>FIRST CITY MONUMENT BANK</p>
                        
                        
                                
                        
                    </Grid> 
                </div>
            </section>
            
            <section class="behind">
                    <div>
                    <Grid>
                    <div className="back-face">
                    <p style={{position: 'absolute', marginTop: '180px', fontSize: '0.7rem'}}>www.fcmb.com</p>
                            </div>
                            <div>
                                <p style={{position: 'absolute', marginTop: '180px', marginLeft: '355px',fontSize: '0.7rem'}}>SCM-3622-1118</p>
                            </div>
                                <Cell col={4}>
                                
                                <img style={{position: 'absolute' , marginTop: '190px', marginLeft: '-79px'}}
                                img className="back-face"
                                src="img/barcode.jpg"
                                alt="ali"
                                />
                                <div style={{position: 'absolute', marginTop: '247px', marginLeft: '-15px'}}>
                            <img className="back-face"
                            src="img/secc.jpg"
                            alt="yo"
                            />
                            </div>
                            <div className="back-face">
                                <p style={{position: 'absolute', marginTop: '270px', marginLeft: '375px', fontSize: '0.7rem'}}>8906 273</p>
                            </div>
                            <div className="back-face">
                                <p style={{position: 'absolute', marginTop: '310px', fontSize: '0.7rem'}}>This card should be used in accordance with FCMB terms and conditions.</p>
                            </div>
                            <div className="back-face">
                                <p style={{position: 'absolute', marginTop: '328px', fontSize: '0.7rem'}}>24 Hours FCMB Contact Center(+234) 01 - 2798800</p>
                            </div>
                            <div className="back-face">
                                <p style={{position: 'absolute', marginTop: '346px', fontSize: '0.7rem'}}>0700 329 0000</p>
                            </div>
                            <div className="back-face">
                                <p style={{position: 'absolute', marginTop: '364px', fontSize: '0.7rem'}}>Or send an email to customerservice@fcmb.com</p>
                            </div>
                            <div style={{position: 'absolute',  marginTop: '400px', marginLeft: '-1px'}}>
                            <img className="back-face"
                            src="img/reward.jpg"
                            alt="ako"
                            />
                            </div>
                    <div style={{position: 'absolute', marginTop: '410px', marginLeft: '300px'}}>
                        <img className="back-face"
                        src="img/it.png"
                        alt="range"
                        />
                    </div>

                    </Cell>
                    </Grid>
                    </div>
                                
                </section>
            </div>

        )
    }
}

export default Creditcard;
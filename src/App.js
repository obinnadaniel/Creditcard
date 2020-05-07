import React, { Component } from 'react';
import './app.css';
import { Content } from 'react-mdl';
import Creditcard from './components/creditcard';
//import Cript from './components/cript';


class App extends Component {
    render() {
        return (
            <section className="">
                <div className="creditcard-body">
                    <Creditcard/>
                    <div className="creditcard-back">
                        
                    </div>
                </div>
            </section>
        )
    }
}
export default App;


{/*class App extends Component {
    constructor(){
        super();

        this.state = {
            creditcard: ""
        }
    }

    render() {
        return (
            <div>
                <div className="creditcard-body">
                <h6 style={{color:'#fff', fontSize: '10px', float:'right'}}>FIRST CITY MONUMENT BANK</h6>
                    <img style={{float: 'left', marginTop: '10px', marginLeft: '40px'}}
                    src="img/fcb.jpg"
                    alt="go"
                    />
                    <img style={{float: 'left', marginTop: '100px'}}
                    src="img/go.png"
                    alt="ho"
                    />
                </div>
            </div>
        );
    }
}

export default App;*/}

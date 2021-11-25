import React, { Component } from 'react';

class Practice extends Component {
    constructor() {
        super();
        this.state = {};
    }

    fizzBuzz = (n) => {
        for(let i=0; i<=n; i++) {
            if(i % 15) {
                console.log('fizzBuzz');
            } else if(i % 3) {
                console.log('fizz');
            } else if(i % 5) {
                console.log('buzz');
            } else {
                console.log('');
            }


            switch (i) {
                case i % 15:
                    console.log('fizzBuzz');
                    break;

                case i % 3:
                    console.log('fizz');
                    break;
                
                case i % 5:
                    console.log('buzz');
                    break;
                
                default:
                    console.log('');
                    break;
            }
        }
    }

    

    render() {
        return (
            <div>
                <h1>Practice</h1>
                <input type="text" value={this.state.input} onChange={this.handleInputChange}/>
            </div>
        )
    }
}

export default Practice;
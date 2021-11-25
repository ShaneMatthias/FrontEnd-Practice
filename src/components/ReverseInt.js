import React, { Component } from 'react';

class ReverseInt extends Component {
    constructor() {
        super();
        this.state = { val: '', reversed: '' }
    }

    handleChange = (e) => {
        this.setState({ val: e.target.value });
    }

    handleClick = () => { this.setState({ reversed: parseInt(this.state.val.split('').reverse().join('')) * Math.sign(this.state.val) }); }

    render() {
        return (
            <div>
                <h1>Reverse Int</h1>
                <input type="number" value={this.state.val} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Revese the number</button>
                <p>{this.state.reversed}</p>
            </div>
        )
    }
}

export default ReverseInt;
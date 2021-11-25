import { Component } from 'react';

class MaxChars extends Component {
    constructor() {
        super();
        this.state = { 
            val: '',
            maxChar: ''
        }
    }

    handleChange = (e) => { this.setState({ val: e.target.value }); }

    handleClick = () => {
        const charMap = this.createMap(this.state.val);
        let max = 0;
        let maxChar = '';

        for(let char in charMap) {
            if(charMap[char] > max) {
                maxChar = char;
                max = charMap[char];
            }
        }

        this.setState({ maxChar });
    }

    createMap = (data) => {
        let map= {};

        for(let char of data) {
            if(map[char]) {
                map[char]++;
            } else {
                map[char] = 1;
            }
        }

        return map;
    }

    render() {
        return (
            <div>
                <h1>Get the maximum characters in a string</h1>
                <input value={this.state.val} onChange={this.handleChange} />
                <button onClick={this.handleClick}>Find max char</button>
                <p>{this.state.maxChar}</p>
            </div>
        )
    }
}

export default MaxChars;
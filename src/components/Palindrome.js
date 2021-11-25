import React, { Component } from 'react';

class Palindrome extends Component {
    constructor() {
        super();
        this.state = { input: '', isPalindrome: '' };
    }

    handleInputChange = (data) => {
        this.setState({ input: data.target.value })
    }

    palindromeCheck = () => {
        console.log(this.state.input)
        let str = this.state.input.split('').reverse().join('');

        if(this.state.input === str) {
            this.setState({ 
                isPalindrome: "Yes it is."
            })
        } else {
            this.setState({
                isPalindrome: "No it is not."
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Palindrome check</h1>
                <input type="text" value={this.state.input} onChange={this.handleInputChange}/>
                <button onClick={this.palindromeCheck}>Is palindrome?</button>
                <p>{this.state.isPalindrome}</p>
            </div>
        )
    }
}

export default Palindrome;
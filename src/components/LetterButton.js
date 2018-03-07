import React, { Component } from 'react';

class LetterButton extends Component {

    render() {
        return (
            <button className="letter-button" onClick={() => this.props.onClick()} disabled={this.props.disabled}>
                {this.props.letter}
            </button>
        );
    }
}

export default LetterButton;
import React, {Component} from "react";

export class Input extends Component { // цю компоненту не використовував
    state = {
        inputValue: ''
    };

    input = (e) => {
        const val = e.target.value;
        this.setState({inputValue: val})
    };

    render() {
        const {inputValue} = this.state;
        const {onEnter} = this.props;
        return (
                <input type='number'
                       className='button'
                       placeholder='Enter to Submit'
                       value={inputValue}
                       onChange={this.input}
                       onKeyPress={onEnter}/>
        )
    }
}

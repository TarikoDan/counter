import React, {Component} from "react";

const buttonValues = [-100, -10, -1, 1, 10, 100];

export class ViewBox extends Component {
    state = {
        count: 0,
        inputValue: ''
    };

    changeCount = (event) => {
        const val = Number(event.target.value);
        this.setState({ count: val || val == 0 ? this.state.count + val : 0 }) // умова для того щоб count обнулювався тільки при кліку на cancel
                                                                                    // не включаючи порожній(або з нулем) input.
    };

    input = (event) => {
        const val = event.target.value;
        console.log(val);
        this.setState({inputValue: val})
    };
    inputSubmit = (event) => {
        if (event.key === 'Enter') {
            this.changeCount(event)
        }
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.count < 0) {
            alert('Count can"t be less than 0, select another value');
            this.setState({count : prevState.count})
        }
    }

    render() {
        const { count,inputValue } = this.state;
        return (
            <div className='contain'>
                <div className='viewBox'>{ count }</div>
                <div className='buttonsDiv'>
                    { buttonValues.map((value,id) => {
                        return (
                            <button key={id} className='button' value={value} onClick={this.changeCount}>
                                {value < 0 ? value : "+" + value}
                            </button>
                        )
                    })}
                </div>
                <button value='cancel' onClick={this.changeCount}>cancel</button>
                <input type='number'
                       className='button'
                       placeholder='Enter to Submit'
                       value={ inputValue }
                       onChange={this.input}
                       onKeyPress={this.inputSubmit}/>
            </div>
        )
    }
}

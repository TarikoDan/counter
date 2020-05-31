import React,{Component} from "react";

export class Button extends Component{
    render() {
        const {value,onClick} = this.props;
        return (
            <button className='button'
                    value={value}
                    onClick={onClick}>
                {value < 0 || !+value ? value : "+" + value}
            </button>
        )
    }
}

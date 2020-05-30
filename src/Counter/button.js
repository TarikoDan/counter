import React,{Component} from "react";

export class Button extends Component{ // не использовал эту компоненту
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        const {value} = this.props;
        return (
            <button className='button'>{value}</button>
        )
    }
}

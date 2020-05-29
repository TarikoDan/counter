import React,{Component} from "react";

export class Button extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }


    render() {
        const {count} = this.state;
        const {value} = this.props;
        return (
            <button className='button'>{value}</button>
        )
    }
}

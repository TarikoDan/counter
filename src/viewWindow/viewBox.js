import React,{Component} from "react";

export class ViewBox extends Component{
    state = {
        count: 0
    };
    render() {
        const {count} = this.state;
        return (
            <div className='viewBox'>{count}</div>
        )
    }
}

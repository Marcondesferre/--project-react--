import "./styles.css"
import { Component } from "react";

export class Button extends Component {
    render() {
        const { text, click, disabled } = this.props;
        return (
            <button className='button'  onClick={click} disabled={disabled}> 
                {text}
            </button>
        )
    }
}   
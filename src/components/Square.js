import React from "react";

export class Square extends React.Component {
    
    render() {
        var buttonStyle;

            buttonStyle = "#FFD712"

        return (
            <button className="square"
                onClick={() => {
                    this.props.onClick()
                }}
                style = {{
                    margin:15,
                    backgroundColor: buttonStyle
                }}
                onMouseEnter={this.toggleHover}
                onMouseLeave={this.resetHover}
                >
                <img src={this.props.link} alt="rick" 
                style = {{
                    width:200,
                    height:200,
                    padding:10
                    }} />
            </button>
        );
    }
}
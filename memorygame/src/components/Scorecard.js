import React from "react";
// import {Cletus} from "./Cletus.png"

export class Scorecard extends React.Component {
    render() {
        return (
            <div className="score">
                <h1>
                    Top Score: {this.props.value}
                </h1>
            </div>
        );
    }
}
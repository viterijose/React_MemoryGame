import React from "react";
import { Square } from "./Square"
import { Scorecard } from "./Scorecard";
import images from "../images.json"

export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(false),
            charArray: images,
            score: 0,
            topScore: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        let score = this.state.score;
        let topScore = this.state.topScore;

        if (squares[i] === false) {
            squares[i] = true;
            score = score + 1;
            if (score >= topScore) {
                topScore = topScore + 1
            } else {
                topScore = topScore
            }
            alert('Good Job')
            this.setState({
                squares: squares,
                score: score,
                topScore: topScore
            })
            this.state.squares.forEach(element => {
                if (!element) {
                    return squares
                } else {
                    this.setState({
                        squares: Array(9).fill(false)
                    })
                }
            })
        } else {
            alert('You Lost')
            this.setState({
                squares: Array(9).fill(false),
                score: 0
            })
            return
        }
        // this.renderScore(this.state.score);
    }
    renderSquare(array) {
        return <Square
            value={array.value}
            onClick={() => this.handleClick(array.value)}
            link={array.src}
        />
    }
    // renderScore(i) {
    //     return <Scorecard value={i} />
    // }

    render() {
        let score = "Current Score :" + this.state.score
        let random = shuffle(this.state.charArray);
        // const winner = calculateWinner(this.state.squares);
        // if (winner){
        //     status = "Score "+winner
        // }
        return (
            <div>
                <div className="score">{score}</div>
                <div className="topScore"><Scorecard value={this.state.topScore} /></div>
                <div className="board-row">
                    {this.renderSquare(random[0])}
                    {this.renderSquare(random[1])}
                    {this.renderSquare(random[2])}
                </div>
                <div className="board-row">
                    {this.renderSquare(random[3])}
                    {this.renderSquare(random[4])}
                    {this.renderSquare(random[5])}
                </div>
                <div className="board-row">
                    {this.renderSquare(random[6])}
                    {this.renderSquare(random[7])}
                    {this.renderSquare(random[8])}
                </div>
            </div>
        );
    }
}
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue
    }
    return array
}
import React, { Component } from 'react';
import _ from "lodash"

//import our service
import JeopardyService from "../../jeopardyService";

import GameBoard from "./Gameboard"

import Categories from "./Categories"

class Jeopardy extends Component {

    constructor(props) {
        super(props);
        this.client = new JeopardyService();
        this.state = {
            questionData: {},
            categories: [],
            score: 0
        }
    }

    getQuestion = (category) => {
        return this.client.getQuestion(category).then(result => {
            this.setState({
                questionData: result.data[0]
            })
            console.log(this.state.questionData.answer)
        })
    }

    getCategories = () => {
        return this.client.getCategories(3).then(result => {
            this.setState({
                categories: result.data
            })
        })
    }

    componentDidMount = () => {
        this.getCategories();
    }

    checkAnswer = (event) => {
        event.preventDefault();

        this.getCategories()

        const userAnswer = event.target.answer.value
        if (userAnswer === this.state.questionData.answer) {
            this.setState((state, props) => ({
                score: state.score + state.questionData.value,
                questionData: {}
            }));
        } else {
            this.setState((state, props) => ({
                score: state.score - state.questionData.value,
                questionData: {}
            }));
        }
        event.target.answer.value = "";
    }

    render() {

        if(_.isEmpty(this.state.questionData)){
            return  <Categories clickHandler={this.getQuestion} categories={this.state.categories} />
        }

        return (
            <div>
                <GameBoard scoreGame={this.checkAnswer} questionData={this.state.questionData} score={this.state.score} />
            </div>
        );        
    }
}

export default Jeopardy;

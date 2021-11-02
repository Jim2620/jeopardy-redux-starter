import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import * as jeopardyActions from "../../redux/actions/jeopardyActions";
import { bindActionCreators } from "redux";

import JeopardyService from "../../jeopardyService";

import GameBoard from "./Gameboard";

import Categories from "./Categories";

class Jeopardy extends Component {
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
    };
  }

  getQuestion = (category) => {
    return this.client.getQuestion(category).then((result) => {
        this.props.actions.questionData(result.data[0])
      console.log(this.props.questionData.answer);
    });
  };

  getCategories = () => {
    return this.client.getCategories(3).then((result) => {
        this.props.actions.getCategories(result.data)
    });
  };

  componentDidMount = () => {
    this.getCategories();
  };

  checkAnswer = (event) => {
    event.preventDefault();

    this.getCategories();

    const userAnswer = event.target.answer.value;
    if (userAnswer === this.props.questionData.answer) {
        this.props.score + this.props.questionData.value,
        this.props.actions.questionData,
    }
     else if (userAnswer !== this.props.questionData.answer){
        this.props.score - this.props.questionData.value,
        this.props.actions.questionData,
    }
    event.target.answer.value = "";
  };

  render() {
    if (_.isEmpty(this.props.questionData)) {
      return (
        <Categories
          clickHandler={this.getQuestion}
          categories={this.props.categories}
        />
      );
    }

    return (
      <div>
        <GameBoard
          scoreGame={this.checkAnswer}
          questionData={this.props.questionData}
          score={this.props.score}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.jeopardy.categories,
    questionData: state.jeopardy.questionData,
    score: state.jeopardy.score,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(jeopardyActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Jeopardy);
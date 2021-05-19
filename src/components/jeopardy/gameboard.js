import React from 'react';

function GameBoard(props) {

    return (
      <div>
        Question: {props.questionData.question} <br/>
        Category: {props.questionData.category.title}<br/>
        Point Value: {props.questionData.value}<br/>
        score: {props.score}<br/>
        <form onSubmit={props.scoreGame}>
          <input name="answer" type="text" /><button>submit</button>
        </form>
      </div>
    );
    
}

export default GameBoard;
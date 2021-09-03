import React from 'react';

const Result = ({score, playAgain}) => {
    return (
        <div className="score-board">
            <div>You scored {score} / 5 correct answers!</div>
            <button onClick={playAgain}>
                Play Again!!
            </button>
        </div>
    )
}

export default Result;
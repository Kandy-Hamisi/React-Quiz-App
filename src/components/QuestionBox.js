import React, { useState } from 'react'
import styled from 'styled-components';


const QuestionBox = ( { question, options, selected } ) => {

    const [answer, setAnswer] = useState(options);

    return (
        <div className="questionBox">
            <div className="question">{ question }</div>
            <AnswerWrap>
                {answer.map((text, index) => (
                    <Button
                     key={index}
                     className="answerbtn"
                     onClick={() => {
                         setAnswer([text]);
                         selected(text);
                     }}
                    >
                        {text}
                    </Button>
                ))}
            </AnswerWrap>
        </div>
    )
}
const Button = styled.button `
    background-color: magenta;
    border-radius: 2px;
    color: #333;
    padding: 10px 5px;
    margin: 5px;
`;

const AnswerWrap = styled.section `
    display: flex;
    flex-direction: column;
`;
export default QuestionBox;
import React, { Component } from 'react';
import quizService from '../quizService';

class QuizBee extends Component {
    state = { 
        questionBank: []
     };

    getQuestions = () => {
        quizService.then(question => {
            this.setState({
                questionBank: question
            });
        });
    }

    componentDidMount() {
        this.getQuestions();
    }
    
    render() { 
        return ( 
            <div>
                <h1>Hello this is Kandy</h1>
                <h4>{this.props.message}</h4>
                {this.state.questionBank.length > 0 &&
                    this.state.questionBank.map(
                        ({question, answers, correct, questionId}) => <h6>{ question }</h6>
                    ) }
            </div>
         );
    }
}
 
export default QuizBee;
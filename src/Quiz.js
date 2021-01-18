import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'

let quizData = require('./quiz_data.json')
class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {quiz_position: 1}
    }

    showNextQuestion() {
        this.setState ({
            quiz_position: this.state.quiz_position + 1
        })
    }

    render() {
        const isQuizEnd = this.state.quiz_position - 1 == quizData.quiz_questions.length
        return (
            <div>
                {/* <div className="QuizQuestion">{quizData.quiz_questions[0].instruction_text}</div> */}
                {isQuizEnd? (<QuizEnd />) : 
                (<QuizQuestion showNextQuestionHandler={this.showNextQuestion.bind(this)} quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />)
                }
            </div>
        );
    }
}

export default Quiz
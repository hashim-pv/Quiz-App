import React, { useState } from 'react';
import QuestionResult from '../components/QuestionResult';
import { QuizData } from '../components/QuizData';

function Questions() {
    const [showResult, setShowResult] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);  // Set to null initially

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0); // Reset the clicked option for the next question
        } else {
            setShowResult(true); // Show result after the last question
        }
    };

    const updateScore = () => {
        if (clickedOption === QuizData[currentQuestion].answer) {
            setScore(score + 1);
        }
    };

    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0); // Reset to null
        setScore(0);
    };

    return (
<>
<h3  className='mb-5 fw-bold fs-5 text-white '>Quiz Application</h3>
<p></p>

            <div>
                <div className='container'>
                    {showResult ? (
                        <QuestionResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
                    ) : (
                        <>
                            <div className='question'>
                                <span id="question-number">{currentQuestion + 1}</span>
                                <span id="question-txt">{QuizData[currentQuestion].question}</span>
                            </div>
                            <div className='option-container'>
                                {QuizData[currentQuestion].option.map((option, i) => (
                                    <button
                                        className={`option-btn ${clickedOption === i + 1 ? 'checked' : ''}`}
                                        key={i}
                                        onClick={() => setClickedOption(i + 1)}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                            <input
                                type="button"
                                value={currentQuestion < QuizData.length - 1 ? "Next" : "Finish"}
                                id="next-button"
                                onClick={changeQuestion}
                                disabled={!clickedOption} // Disable if no option selected
                            />
                        </>
                    )}
                </div>
            </div>
</>
    );
}

export default Questions;

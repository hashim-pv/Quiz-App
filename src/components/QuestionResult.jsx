import React from 'react'

function QuestionResult(props) {
  return (
    <>
    <div className="show-score mt-5 text-dark fw-bold">
        your Score :{props.score} <br/>
        Total Score :{props.totalScore}
    </div>
    <button id='next-button' className='mb-5' onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuestionResult
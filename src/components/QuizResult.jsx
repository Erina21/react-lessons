

function QuizResult({ name, correctAnswers, totalQuestions }) {
    return (
        <div className="task-card">
            <h3>{name}</h3>
            <p>Score: {correctAnswers} / {totalQuestions}</p>
            <p>
                {correctAnswers >= 8
                    ? 'Excellent'
                    : correctAnswers >= 5
                        ? 'Good'
                        : 'Try Again'}
            </p>
        </div>
    )
}

export default QuizResult
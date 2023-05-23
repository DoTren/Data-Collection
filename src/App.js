import React, { useEffect, useState } from "react";

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const handleUser = (user) => {
            if (!user) {
                let name = prompt("Name:");
                while (name.length === 0) {
                    name = prompt(
                        "Please, Enter correct information about Name:"
                    );
                }
                let age = parseInt(prompt("Age:"));
                while (!age) {
                    age = parseInt(
                        prompt("Please, Enter correct information about age:")
                    );
                }
                let height = parseInt(prompt("Height (cm):"));
                while (!height) {
                    height = parseInt(
                        prompt(
                            "Please, Enter correct information about Height (cm):"
                        )
                    );
                }
                let weight = parseInt(prompt("Weight (kg):"));
                while (!weight) {
                    weight = parseInt(
                        prompt(
                            "Please, Enter correct information about Weight (kg):"
                        )
                    );
                }

                setUser({ ...user, name, age, weight, height });
            }
        };

        handleUser();
    }, []);

    const questions = [
        {
            questionText: "Menstrual irregularities",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: false },
            ],
        },
        {
            questionText: "Unwanted hair growth",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: false },
            ],
        },
        {
            questionText: "Thinning of the hair",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: false },
            ],
        },
        {
            questionText: "Acne",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: false },
            ],
        },
        {
            questionText: "Obesity",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: false },
            ],
        },
        {
            questionText: "Food Habits",
            answerOptions: [
                { answerText: "Junk Food", isCorrect: true },
                { answerText: "Healty Food", isCorrect: false },
            ],
        },
        {
            questionText: "Irregular Sleep",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: false },
            ],
        },
        {
            questionText: "Male Pattern Baldness",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: false },
            ],
        },
        {
            questionText:
                "Taking any medications on regular basis that affect menstrual cycle",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: false },
            ],
        },
        {
            questionText: "Any dark patches on skin",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: false },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className={`app ${showScore && "app__len"}`}>
            {user && (
                <div className={`user ${showScore && "user__len"}`}>
                    <span className="name">{`Name: ${user.name}`}</span>
                    <span className="age">{`Age: ${user.age}`}</span>
                    <span className="height">{`Height: ${user.height} cm`}</span>
                    <span className="weight">{`Weight: ${user.weight} kg`}</span>
                </div>
            )}
            {showScore ? (
                <div className="score-section">
                    You are at {score}0% risk of PCOD (Polycystic ovary
                    syndrome)
                </div>
            ) : (
                <>
                    <div className="question-section">
                        <div className="question-count">
                            <span>Question {currentQuestion + 1}</span>/
                            {questions.length}
                        </div>
                        <div className="question-text">
                            {questions[currentQuestion].questionText}
                        </div>
                    </div>
                    <div className="answer-section">
                        {questions[currentQuestion].answerOptions.map(
                            (answerOption, index) => (
                                <button
                                    key={index}
                                    onClick={() =>
                                        handleAnswerOptionClick(
                                            answerOption.isCorrect
                                        )
                                    }
                                >
                                    {answerOption.answerText}
                                </button>
                            )
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default App;

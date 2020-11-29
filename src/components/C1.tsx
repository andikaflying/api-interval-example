import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { fetchQuizQuestions, useInterval, Question } from '../API';

function C1() {
    const [delay, setDelay] = useState(1000);
    const [questions, setQuestions] = useState<Question[]>([]);

    useInterval(async () => {
        const fetchedQuestion = await fetchQuizQuestions(10);
        setQuestions(fetchedQuestion);
    }, delay);

    return (
        <div>
            <h1> Component 1 Questions </h1>
            {
                questions.map(question => (
                    <p> {question.question} </p>
                ))
            }
            <br />
            <br />
        </div>
    );
}

export default C1;
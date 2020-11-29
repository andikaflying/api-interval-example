import React, { useState, useEffect, useRef } from "react";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export const fetchQuizQuestions = async  (amount : number) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    console.log("Data : " + JSON.stringify(data));

    return data.results;
}

export function useInterval(callback : any, delay : number) {
  const savedCallback: any = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
        if (savedCallback) {
            savedCallback.current()
        }
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
  
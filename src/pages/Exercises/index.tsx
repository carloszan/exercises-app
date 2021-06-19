import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ExerciseItem from "../../components/ExerciseItem";
import Explanation from "../../components/Explanation";
import { Exercise, fetchExercises } from "../../services/exercises";

interface ExerciseAnswer {
  exerciseId: string;
  answer: string;
}
const delay = (delayMs: number) =>
  new Promise((resolve) => setTimeout(resolve, delayMs));

const FinalExplanation = ({
  exerciseAnswers,
}: {
  exerciseAnswers: ExerciseAnswer[];
}) => {
  const [sendingAnswer, setSendingAnswer] = useState(false);
  useEffect(() => {
    setSendingAnswer(true);

    const sendingAnswerPromise = async () => {
      await delay(2000);
      console.log("enviando respostas");
      setSendingAnswer(false);
    };

    sendingAnswerPromise();
  }, []);
  return (
    <>
      {sendingAnswer && <h3>Enviando resposta...</h3>}

      {exerciseAnswers.map((exerciseAnswer) => (
        <h3 key={exerciseAnswer.exerciseId}>{exerciseAnswer.answer}</h3>
      ))}
    </>
  );
};

const Exercises = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [exerciseIndex, setExerciseIndex] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState<ExerciseAnswer[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState(``);

  useEffect(() => {
    const getExercises = async () => {
      setLoading(true);
      const fExercises = await fetchExercises();
      setExercises(fExercises);
      setLoading(false);
    };

    getExercises();
  }, []);

  const setAnswer = () => {
    const cAnswer = answers.find(
      (answer) => answer.exerciseId === exercises[exerciseIndex].id
    );

    if (exerciseIndex < 0) {
      return;
    }

    if (cAnswer !== undefined) {
      cAnswer.answer = currentAnswer;

      const newAnswers = [...answers, cAnswer];

      setAnswers(newAnswers);
    } else {
      const answer: ExerciseAnswer = {
        exerciseId: exercises[exerciseIndex].id,
        answer: currentAnswer,
      };

      const newAnswers = [...answers, answer];

      setAnswers(newAnswers);
    }
  };

  //TODO
  const previousQuestion = () => {
    setExerciseIndex(exerciseIndex - 1);

    console.log("implementar");
  };

  const nextQuestion = () => {
    setExerciseIndex(exerciseIndex + 1);

    setAnswer();
  };

  return (
    <>
      {loading && <h1>Loading...</h1>}

      {!loading && (
        <>
          {exerciseIndex === -1 && <Explanation />}

          {exerciseIndex > -1 && exerciseIndex < exercises.length && (
            <ExerciseItem
              exercise={exercises[exerciseIndex]}
              onChange={(e) => setCurrentAnswer(e)}
            />
          )}

          {exerciseIndex >= exercises.length && (
            <FinalExplanation exerciseAnswers={answers} />
          )}
        </>
      )}

      {exerciseIndex < exercises.length && (
        <div>
          {exerciseIndex > 0 && (
            <Button
              variant="primary"
              className="mr-2"
              onClick={previousQuestion}
            >
              Voltar
            </Button>
          )}

          <Button variant="primary" onClick={nextQuestion}>
            Avancar
          </Button>
        </div>
      )}
    </>
  );
};

export default Exercises;

import React from "react";
import { Exercise } from "../../services/exercises";

type ExerciseItemProps = {
  exercise: Exercise;
};

const ExerciseItem = ({ exercise }: ExerciseItemProps) => {
  return (
    <>
      <h2>{exercise.question}</h2>

      {exercise.options.map((option) => (
        <div key={option}>
          <input
            type="radio"
            id={option}
            name={exercise.question}
            value={option}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </>
  );
};

export default ExerciseItem;

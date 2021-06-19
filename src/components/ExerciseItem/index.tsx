import React from "react";
import { Exercise } from "../../services/exercises";

type ExerciseItemProps = {
  exercise: Exercise;
  onChange: (e: string) => void;
};

const ExerciseItem = ({ exercise, onChange }: ExerciseItemProps) => {
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
            onChange={(e) => onChange(e.target.value)}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </>
  );
};

export default ExerciseItem;

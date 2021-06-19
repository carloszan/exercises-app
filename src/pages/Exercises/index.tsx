import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ExerciseItem from "../../components/ExerciseItem";
import Explanation from "../../components/Explanation";
import { Exercise, fetchExercises } from "../../services/exercises";

const FinalExplanation = () => {
  return <h3>Acabou!</h3>;
};

const Exercises = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [exerciseIndex, setExerciseIndex] = useState(-1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getExercises = async () => {
      setLoading(true);
      const fExercises = await fetchExercises();
      setExercises(fExercises);
      setLoading(false);
    };

    getExercises();
  }, []);

  const nextQuestion = () => {
    setExerciseIndex(exerciseIndex + 1);
  };

  return (
    <>
      {loading && <h1>Loading...</h1>}

      {!loading && (
        <>
          {exerciseIndex === -1 && <Explanation />}

          {exerciseIndex > -1 && exerciseIndex < exercises.length && (
            <ExerciseItem exercise={exercises[exerciseIndex]} />
          )}

          {exerciseIndex >= exercises.length && <FinalExplanation />}
        </>
      )}

      {exerciseIndex < exercises.length && (
        <div>
          <Button variant="primary" onClick={nextQuestion}>
            Avancar
          </Button>
        </div>
      )}
    </>
  );
};

export default Exercises;

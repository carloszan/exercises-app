import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./styles";

interface ExerciseProps {
  id: string;
}

const Exercises = () => {
  const params = useParams<ExerciseProps>();

  useEffect(() => {
    console.log(params.id);
  }, []);

  return (
    <Container>
      <h2>Exercises</h2>
      {params.id}
    </Container>
  );
};

export default Exercises;

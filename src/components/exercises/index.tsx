import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./styles";

const Exercises = () => {
  const params = useParams();
  useEffect(() => {
    console.log(params);
  }, []);

  return (
    <Container>
      <h2>Exercises</h2>
    </Container>
  );
};

export default Exercises;

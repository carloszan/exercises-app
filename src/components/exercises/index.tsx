import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./styles";
import { fetchExercise } from "./../../services";

interface ExerciseProps {
  id: string;
}

const Exercises = () => {
  const params = useParams<ExerciseProps>();
  const [loading, setLoading] = useState(true);
  const [question, setQuestion] = useState(``);
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await fetchExercise(params.id);

      setLoading(false);
      setQuestion(response.question);
      setOptions(response.options);
    };

    fetchData();
  }, [params]);

  return (
    <Container>
      {loading && <h2>Loading</h2>}

      {!loading && (
        <form>
          <h3>{question}</h3>

          {options.map((option) => (
            <label key={option}>
              <input type="radio" name={question} />
              {option}
            </label>
          ))}

          <input type="submit" value="Submit" />
        </form>
      )}
    </Container>
  );
};

export default Exercises;

import axios from 'axios';

const DEFAULT_URL = "http://localhost:3001"

interface Exercise {
  id: string;
  question: string;
  options: string[];
}

export const fetchExercise = async (id: string) => {
  const response = await axios.get<Exercise>(`${DEFAULT_URL}/questions/${id}`);
  return response.data;
};

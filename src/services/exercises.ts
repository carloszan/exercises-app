import axios from './axios';

export interface Exercise {
  id: string;
  question: string;
  options: string[];
}

export const fetchExercises = async () => {
  const response = await axios.get<Exercise[]>('/questions');

  return response.data;
};
import { IdeaForm } from "../../types/Idea";

const isNotEmpty = (value: string): boolean => {
  return value.trim().length !== 0;
};

export const validateNewIdeaForm = (form: IdeaForm): boolean => {
  const { title, description, justification } = form;
  return [title, description, justification].every(isNotEmpty);
};

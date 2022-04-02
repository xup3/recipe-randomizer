export type Recipe = {
  id: number;
  heading: string;
  description: string;
  img: string;
  planned: Date;
  history: Date | undefined;
};

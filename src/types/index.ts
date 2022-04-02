export type Recipe = {
  id: number;
  heading: string;
  description: string;
  img: string;
  planned: Dates;
  history: Dates;
};

export type Dates = Date[] | null;

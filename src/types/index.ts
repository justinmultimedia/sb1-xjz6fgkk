export interface Lesson {
  id: number;
  title: string;
  description: string;
  duration: string;
  date: string;
  category: string;
  tags: string[];
  imageUrl: string;
}

export interface Transcript {
  timestamp: string;
  text: string;
}
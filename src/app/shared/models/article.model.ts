import { Photo } from './photo.model';

export class Article {
  id: number;
  title: string;
  position: number;
  bajada: string;
  cintillo: string;
  volanta: string;
  path: string;
  photo: {
    src: string;
    alt: string;
    title: string;
  };  
}

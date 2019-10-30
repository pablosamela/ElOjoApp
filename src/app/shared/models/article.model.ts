import { Photo } from './photo.model';
import { Journalist } from './journalist.model';

export class Article {
  id: number;
  title: string;
  position: number;
  bajada: string;
  cintillo: string;
  volanta: string;
  path: string;
  body: string;
  periodista: number;
  photo: Photo;
  journalist: Journalist;
}

import { INTEGER } from 'sequelize';
import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Movie } from './movie.model';
import { Genre } from '../../genres/models/genre.model';

@Table
export class MovieGenre extends Model {
  @PrimaryKey
  @ForeignKey(() => Movie)
  @Column(INTEGER)
  movieId: number;

  @BelongsTo(() => Movie)
  movie: Movie;

  @PrimaryKey
  @ForeignKey(() => Genre)
  @Column(INTEGER)
  genreId: number;

  @BelongsTo(() => Genre)
  genre: Genre;
}

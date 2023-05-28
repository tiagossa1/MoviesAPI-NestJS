import { STRING } from 'sequelize';
import { INTEGER } from 'sequelize';
import { DATE } from 'sequelize';
import {
  AllowNull,
  AutoIncrement,
  Column,
  IsDate,
  IsUrl,
  Min,
  NotEmpty,
  NotNull,
  PrimaryKey,
  Table,
  Model,
  BelongsToMany,
} from 'sequelize-typescript';
import { MovieGenre } from './movie-genre.model';
import { MovieCast } from './movie-cast.model';
import { Genre } from '../../genres/models/genre.model';
import { Person } from '../../people/models/person.model';

@Table
export class Movie extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(INTEGER)
  id: number;

  @NotNull
  @NotEmpty
  @AllowNull(false)
  @Column(STRING)
  title: string;

  @Min(0)
  @Column(INTEGER)
  budget: number;

  @AllowNull
  @IsUrl
  @Column(STRING)
  homepageUrl: string;

  @NotNull
  @NotEmpty
  @AllowNull(false)
  @Column(STRING)
  plot: string;

  @IsDate
  @Column(DATE)
  releaseDate: Date;

  @Min(1)
  @Column(INTEGER)
  runtimeInMinutes: number;

  @IsDate
  @Column(DATE)
  createdAt: Date;

  @IsDate
  @Column(DATE)
  updatedAt: Date;

  @BelongsToMany(() => Genre, () => MovieGenre)
  genres: MovieGenre[];

  @BelongsToMany(() => Person, () => MovieCast)
  cast: MovieCast[];
}

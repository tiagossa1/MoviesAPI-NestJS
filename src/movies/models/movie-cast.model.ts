import { STRING } from 'sequelize';
import { INTEGER } from 'sequelize';
import {
  AllowNull,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  NotEmpty,
  NotNull,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Movie } from './movie.model';
import { Gender } from '../../genders/models/gender.model';
import { Person } from '../../people/models/person.model';

@Table
export class MovieCast extends Model {
  @PrimaryKey
  @ForeignKey(() => Movie)
  @Column(INTEGER)
  movieId: number;

  @BelongsTo(() => Movie)
  movie: Movie;

  @PrimaryKey
  @ForeignKey(() => Gender)
  @Column(INTEGER)
  genderId: number;

  @BelongsTo(() => Gender)
  gender: Gender;

  @PrimaryKey
  @ForeignKey(() => Person)
  @Column(INTEGER)
  personId: number;

  @BelongsTo(() => Person)
  person: Person;

  @NotNull
  @NotEmpty
  @AllowNull(false)
  @Column(STRING)
  characterName: number;
}

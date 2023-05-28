import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Movie } from './models/movie.model';
import { Gender } from '../genders/models/gender.model';
import { Genre } from '../genres/models/genre.model';
import { MovieCast } from './models/movie-cast.model';
import { MovieGenre } from './models/movie-genre.model';
import { Person } from '../people/models/person.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Movie,
      Gender,
      Genre,
      MovieCast,
      MovieGenre,
      Person,
    ]),
  ],
  controllers: [MoviesController],
  providers: [MoviesService],
  exports: [SequelizeModule],
})
export class MoviesModule {}

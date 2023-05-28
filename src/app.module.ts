import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Movie } from './movies/models/movie.model';
import { Gender } from './genders/models/gender.model';
import { Genre } from './genres/models/genre.model';
import { MovieCast } from './movies/models/movie-cast.model';
import { MovieGenre } from './movies/models/movie-genre.model';
import { Person } from './people/models/person.model';
import { PeopleModule } from './people/people.module';
import { GenresModule } from './genres/genres.module';
import { GendersModule } from './genders/genders.module';

@Module({
  imports: [
    MoviesModule,
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: '../movies.db',
      models: [Movie, Gender, Genre, MovieCast, MovieGenre, Person],
      autoLoadModels: true,
      synchronize: true,
    }),
    PeopleModule,
    GenresModule,
    GendersModule,
  ],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}

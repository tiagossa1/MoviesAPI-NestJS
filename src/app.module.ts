import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [MoviesModule],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}

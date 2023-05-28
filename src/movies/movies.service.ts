import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Movie } from './models/movie.model';
import { DateTimeProvider } from 'src/providers/date-time.provider';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie)
    private movieModel: typeof Movie,
    private dateTimeProvider: DateTimeProvider,
  ) {}

  async create(createMovieDto: CreateMovieDto) {
    const utcDateTime = this.dateTimeProvider.getUtcDate();

    return this.movieModel.create({
      title: createMovieDto.title,
      budget: createMovieDto.budget,
      homepageUrl: createMovieDto.homepageUrl,
      plot: createMovieDto.plot,
      releaseDate: createMovieDto.releaseDate,
      runtimeInMinutes: createMovieDto.runtimeInMinutes,
      createdAt: utcDateTime,
      updatedAt: utcDateTime,
    });
  }

  async findAll() {
    return this.movieModel.findAll();
  }

  async findOne(id: number) {
    return this.movieModel.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateMovieDto: UpdateMovieDto) {
    const movie = await this.findOne(id);
    const utcDateTime = this.dateTimeProvider.getUtcDate();

    movie.set({
      title: updateMovieDto.title,
      budget: updateMovieDto.budget,
      plot: updateMovieDto.plot,
      releaseDate: updateMovieDto.releaseDate,
      runtimeInMinutes: updateMovieDto.runtimeInMinutes,
      updatedAt: utcDateTime,
    });
  }

  async remove(id: number) {
    const movie = await this.findOne(id);
    await movie.destroy();
  }
}

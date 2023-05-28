import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Sequelize } from 'sequelize';
import { InjectModel } from '@nestjs/sequelize';
import { Movie } from './models/movie.model';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie)
    private movieModel: typeof Movie,
  ) {}

  create(createMovieDto: CreateMovieDto) {
    return 'This action adds a new movie';
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

    const now = new Date();
    movie.set({
      title: updateMovieDto.title,
      budget: updateMovieDto.budget,
      plot: updateMovieDto.plot,
      releaseDate: updateMovieDto.releaseDate,
      runtimeInMinutes: updateMovieDto.runtimeInMinutes,
      updatedAt: Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds(),
        now.getUTCMilliseconds(),
      ),
    });
  }

  async remove(id: number) {
    const movie = await this.findOne(id);
    await movie.destroy();
  }
}

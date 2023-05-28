import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Genre } from './models/genre.model';
import { DateTimeProvider } from 'src/providers/date-time.provider';

@Injectable()
export class GenresService {
  constructor(
    @InjectModel(Genre)
    private genreModel: typeof Genre,
    private dateTimeProvider: DateTimeProvider,
  ) {}

  async create(createGenreDto: CreateGenreDto) {
    const utcDateTime = this.dateTimeProvider.getUtcDate();

    return await this.genreModel.create({
      name: createGenreDto.name,
      createdAt: utcDateTime,
      updatedAt: utcDateTime,
    });
  }

  async findAll() {
    return this.genreModel.findAll();
  }

  async findOne(id: number) {
    return this.genreModel.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateGenreDto: UpdateGenreDto) {
    const genre = await this.findOne(id);

    genre.set({
      name: updateGenreDto.name,
      updatedAt: this.dateTimeProvider.getUtcDate(),
    });

    return genre;
  }

  async remove(id: number) {
    const genre = await this.findOne(id);
    await genre.destroy();
  }
}

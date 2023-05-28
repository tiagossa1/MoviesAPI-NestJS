import { Injectable } from '@nestjs/common';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Gender } from './models/gender.model';
import { InjectModel } from '@nestjs/sequelize';
import { DateTimeProvider } from 'src/providers/date-time.provider';

@Injectable()
export class GendersService {
  constructor(
    @InjectModel(Gender)
    private genderModel: typeof Gender,
    private dateTimeProvider: DateTimeProvider,
  ) {}

  create(createGenderDto: CreateGenderDto) {
    const utcDateTime = this.dateTimeProvider.getUtcDate();

    return this.genderModel.create({
      name: createGenderDto.name,
      createdAt: utcDateTime,
      updatedAt: utcDateTime,
    });
  }

  findAll() {
    return this.genderModel.findAll();
  }

  async findOne(id: number) {
    return this.genderModel.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateGenderDto: UpdateGenderDto) {
    const gender = await this.findOne(id);
    const utcDateTime = this.dateTimeProvider.getUtcDate();

    gender.set({
      name: updateGenderDto.name,
      updatedAt: utcDateTime,
    });
  }

  async remove(id: number) {
    const gender = await this.findOne(id);
    await gender.destroy();
  }
}

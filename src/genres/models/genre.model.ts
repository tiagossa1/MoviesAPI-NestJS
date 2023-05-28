import { STRING } from 'sequelize';
import { INTEGER } from 'sequelize';
import {
  AllowNull,
  AutoIncrement,
  Column,
  Model,
  NotEmpty,
  NotNull,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table
export class Genre extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(INTEGER)
  id: number;

  @NotNull
  @NotEmpty
  @AllowNull(false)
  @Column(STRING)
  name: string;
}

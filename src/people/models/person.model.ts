import { TEXT } from 'sequelize';
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
export class Person extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(INTEGER)
  id: number;

  @NotNull
  @NotEmpty
  @AllowNull(false)
  @Column(TEXT)
  name: string;
}

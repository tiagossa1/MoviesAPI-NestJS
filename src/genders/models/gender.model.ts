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
export class Gender extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column(INTEGER)
  id: number;

  @NotNull
  @NotEmpty
  @AllowNull(false)
  @Column(TEXT)
  name: string;
}

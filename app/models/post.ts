import { DateTime } from "luxon";
import { BaseModel, belongsTo, column } from "@adonisjs/lucid/orm";
import User from "#models/user";
import type { BelongsTo } from "@adonisjs/lucid/types/relations";

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  declare id: string;

  @column()
  declare title: string;

  @column()
  declare userId: string;

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime;

  @column()
  declare firstName: string;

  @column()
  declare lastName: string;

  @column()
  declare email: string;
}

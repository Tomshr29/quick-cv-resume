import { BaseSchema } from "@adonisjs/lucid/schema";

export default class extends BaseSchema {
  protected tableName = "posts";

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid("id")
        .primary()
        .defaultTo(this.db.rawQuery("gen_random_uuid()").knexQuery);

      table.string("title");

      table.timestamp("created_at").notNullable();
      table.timestamp("updated_at").nullable();

      table.string("first_name");
      table.string("last_name");
      table.string("email");
      table
        .uuid("user_id")
        .references("id")
        .inTable("users")
        .onDelete("CASCADE");
    });
  }

  async down() {
    this.schema.dropTable(this.tableName);
  }
}

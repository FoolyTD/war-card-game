
exports.up = function(knex) {
    return knex.schema.createTable("cards", (table) => {
        table.increments("card_id").primary(); 
        table.string("card_name").notNullable();
        table.string("img_url").notNullable();
        table.integer("value");
        table.integer("suit_id").unsigned().notNullable();
        table
          .foreign("suit_id")
          .references("suit_id")
          .inTable("suits")
          .onDelete("cascade");
        table.timestamps(true, true); 
    }); 
};

exports.down = function(knex) {
    return knex.schema.dropTable("cards");
};

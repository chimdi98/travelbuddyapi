/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
    return knex.schema.createTable('details', (table) => {
        table.increments('id').primary();
        table.integer('trip_id')
             .unsigned();
        table.string('origin').notNullable();
        table.string('destination').notNullable();
        table.string('airline').notNullable();
      table.integer('travellers').notNullable();
      table.integer('price').notNullable();
      table.date('return_date').notNullable();
      table.date('departure_date').notNullable();
      table.string('image'); 
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
      //table.foreign('trip_id').references `traveller`('trip_id').onUpdate('CASCADE').onDelete('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
    return knex.schema.dropTable('details');
};

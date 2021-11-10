exports.up = (knex) => {
    return knex.schema
        .createTable('categories', function (table) {
            table.increments('id');
            table.string('categoryName', 128).notNullable();
            table.string('image', 128).notNullable();
        });
    };

exports.down = (knex) => {
    return knex.schema.dropTableIfExists('categories');
};


exports.up = function(knex, Promise) {
    return knex.schema.createTable("yokai_watch", (table)=>{
        table.increments();
        table.string("name").notNullable();
        table.string("class");
        table.string("rank");
        table.string("element");
        table.string("favoriteFood");
        table.string("evolution");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("yokai_watch");
};
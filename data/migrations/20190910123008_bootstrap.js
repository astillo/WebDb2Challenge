//changes we want to make
exports.up = function (knex) {
    //here is where we create the table with all of the attributes from the car.
    return knex.schema.createTable('cars', tbl => {
        tbl.increments()
        tbl.string('VIN', 500).unique().notNullable();
        tbl.string('make', 128).notNullable();
        tbl.string('model', 128).notNullable();
        tbl.string('mileage', 128).notNullable();
        tbl.string('transmission_type', 128);
        tbl.string('title_status', 128)
    })
};
//revert the changes
exports.down = function (knex) {

};

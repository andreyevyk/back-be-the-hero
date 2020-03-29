
exports.up = function(knex) {
  return knex.schema.table('ongs', (table) => {
   table.renameColumn('UF','uf')
  })
};

exports.down = function(knex) {
  
};

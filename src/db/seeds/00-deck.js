
exports.seed = function(knex) {
  // Deletes ALL existing entries
  const table_name = "deck";
  return knex(table_name).del()
    .then(function () {
      // Inserts seed entries
      return knex(table_name).insert([
        {suit_id: 1, suit_name: 'spades'},
        {suit_id: 2, suit_name: 'hearts'},
        {suit_id: 3, suit_name: 'clubs'},
        {suit_id: 4, suit_name: 'diamonds'}
      ]);
    });
};

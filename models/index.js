//import
const Volunteers = require('./volunteers.js');
const Opportunities = require('./opportunities.js');


Volunteers.hasMany(Opportunities,  {
    foreignKey: 'user_id'
});

// User.belongsTo(Volunteers, {
//     foreignKey: 'user_id'
// });

/*foradmin?
User.hasMany(Volunteers,  {
    foreignKey: 'user_id'
});
*/

module.exports = { Volunteers, Opportunities};
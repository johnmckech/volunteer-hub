//import
const Volunteers = require('./opportunities.js');
const Opportunities = require('./volunteers.js');


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

module.exports = { Volunteers, Opportunities, User};
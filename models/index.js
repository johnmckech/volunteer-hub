//import
const Volunteers = require('./opportunities.js');
const Opportunities = require('./volunteers.js');
const User = require('./user.js');

User.hasMany(Opportunities,  {
    foreignKey: 'user_id'
});

User.belongsTo(Volunteers, {
    foreignKey: 'user_id'
});

/*foradmin?
User.hasMany(Volunteers,  {
    foreignKey: 'user_id'
});
*/

module.exports = { Volunteers, Opportunities, User,};
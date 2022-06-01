const User = require('./User');
const Credentials = require('./Credentials');
const Site = require('./Site');

User.hasMany(Credentials, {
    foreignKey: 'user_id'
});

Credentials.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Site.hasMany(Credentials, {
    foreignKey: 'site_id'
});
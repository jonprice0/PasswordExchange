// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class UserSite extends Model {}

// UserSite.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         user_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: 'user',
//                 key: 'id'
//             }
//         },
//         site_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: 'site',
//                 key: 'id'
//             }
//         }
//     },
//     {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'usersite'
//     }
// );

// module.exports = UserSite;
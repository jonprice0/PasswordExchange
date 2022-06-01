const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Credentials extends Model {}

Credentials.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        site_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'site',
                key: 'id'
            }
        },
        site_username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        site_password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'credentials'
    }     
);

module.exports = Credentials;
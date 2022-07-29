const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        brideName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        groomName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        weddingDate: {
            type: DataTypes.DATE,
            allowNull: false 
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {

                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [7]
            }
        }
    },
    {
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;
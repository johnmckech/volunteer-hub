const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Volunteer extends Model {}

Volunteer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        },

        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5]
            }
        },
        
        languages: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        },

        techKnowledge: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5]
            }
        },

        specialKnowledge: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5]
            }
        },

        HoursPerWeek: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'volunteer',
      }
    
)

module.exports = Volunteer

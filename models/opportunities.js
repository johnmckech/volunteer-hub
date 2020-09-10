const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Opportunity extends Model { }

Opportunity.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        opportunityName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        },

        languages: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3]
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
        modelName: 'opportunity',
    }

)

module.exports = Opportunity

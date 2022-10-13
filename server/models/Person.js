const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize')

class Person extends Model {}

Person.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }, 
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  }, 
  gender: {
    type: DataTypes.CHAR,
    allowNull: false
  }, 
  about: {
    type: DataTypes.TEXT
  },
  address: {
    type: DataTypes.STRING
  }, 
  image: {
    type: DataTypes.STRING
  }
}, {
  sequelize, 
  modelName: 'Person',
});

module.exports = Person


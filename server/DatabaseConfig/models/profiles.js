'use strict';
module.exports = (sequelize, DataTypes) => {
  const profiles = sequelize.define('profiles', {
    username: DataTypes.STRING,
    website: DataTypes.STRING,
    about: DataTypes.STRING,
    token: DataTypes.STRING
  }, {});
  profiles.associate = function(models) {
    // associations can be defined here
  };
  return profiles;
};
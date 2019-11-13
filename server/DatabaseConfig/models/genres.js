'use strict';
module.exports = (sequelize, DataTypes) => {
  const genres = sequelize.define('genres', {
    title: DataTypes.STRING
  }, {});
  genres.associate = function(models) {
    // associations can be defined here
  };
  return genres;
};
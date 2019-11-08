'use strict';
module.exports = (sequelize, DataTypes) => {
  const genres = sequelize.define('genres', {
    genre: DataTypes.STRING
  }, {});
  genres.associate = function(models) {
    // associations can be defined here
  };
  return genres;
};
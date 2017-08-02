module.exports = function(db) {
  db.Asset.belongsTo(db.User, { foreignKey: { allowNull: false } });
  db.Insure.belongsTo(db.User,{ foreignKey: { allowNull: false } });
  db.Location.belongsTo(db.User,{ foreignKey: { allowNull: false } });
  db.User.hasMany(db.Asset, { onDelete: "cascade" });
  db.User.hasMany(db.Location, { onDelete: "cascade" });
  db.User.hasMany(db.Insure, { onDelete: "cascade" });
};

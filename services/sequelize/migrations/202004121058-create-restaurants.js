module.exports.up = (queryInterface, DataTypes) => {
  //create a table
  return queryInterface.createTable(
    "restaurants",
    {
      id: {
        allowNull: false,
        autoIncerement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      chefId: {
        allowNull: false,
        references: {
          key: "id",
          model: "chefs",
        },
        type: DataTypes.INTEGER.UNSIGNED,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deletedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      charset: "utf8",
    }
  );
};

//drop a table
module.exports.down = (queryInterface) =>
  queryInterface.dropTable("restaurants");

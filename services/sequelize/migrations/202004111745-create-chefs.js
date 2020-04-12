module.exports.up = (queryInterface, DataTypes) => {
  //create a table
  return queryInterface.createTable(
    "chefs",
    {
      id: {
        allowNull: false,
        autoIncerement: true,
        primaryKey: true,
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

module.exports.down = (queryInterface) => {
  //drop a table
  queryInterface.dropTable("chefs");
};

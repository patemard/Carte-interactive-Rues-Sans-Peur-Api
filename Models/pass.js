module.exports = (sequelize, Sequelize) => {
    const Pass = sequelize.define("Pass", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  
    module.exports = Pass;
  };
  
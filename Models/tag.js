
module.exports = (sequelize, Sequelize) => {
     const Tag = sequelize.define("Tag", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING
        },
        text: {
            type: Sequelize.STRING
        },
        longitude: {
            type: Sequelize.STRING
        },
        latitude: {
            type: Sequelize.STRING
        }
     });
    
   module.exports = Tag;
};
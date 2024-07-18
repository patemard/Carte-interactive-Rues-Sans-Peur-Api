
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
            type: Sequelize.TEXT
        },
        longitude: {
            type: Sequelize.STRING
        },
        latitude: {
            type: Sequelize.STRING
        },
         trajectory: {
             type: Sequelize.JSON
         },
        emotion: {
            type: Sequelize.STRING
        },
        transport: {
            type: Sequelize.STRING
        },
        heart: {
            type: Sequelize.INTEGER,
          }
     });
    
   module.exports = Tag;
};
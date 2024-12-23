
module.exports = (sequelize, Sequelize) => {
     const Tag = sequelize.define("Tag", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        active: {
            type: Sequelize.BOOLEAN
        },
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        },
        longitude: {
            type: Sequelize.STRING
        },
        latitude: {
            type: Sequelize.STRING
        },
        mercatorCoord: {
            type: Sequelize.JSON
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
        identification: {
            type: Sequelize.STRING
        },
        heart: {
            type: Sequelize.JSON,
          },
        flagged: {
            type: Sequelize.JSON,
        }
     });
    
   module.exports = Tag;
};
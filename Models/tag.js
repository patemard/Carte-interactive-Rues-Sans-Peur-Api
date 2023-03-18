module.exports = (sequelize, Sequelize) => {
     const Tag = sequelize.define("tag", {
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
    
      return Tag;
    };
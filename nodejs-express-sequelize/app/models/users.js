module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      
      first__name: {
        type: Sequelize.STRING
      },
      middle__name: {
        type: Sequelize.STRING
      },
      last__name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      datetime: {
        type: Sequelize.DATE
      },
      customer_id: {
        type: Sequelize.INTEGER
      }//,
      // created_at: {
      //   type: Sequelize.DATE
      // },
      // updated_at: {
      //   type: Sequelize.DATE
      // }
    },{tableName:"users"});
  
    return User;
  };
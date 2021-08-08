module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customer", {
     
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      }//,
      // created_at: {
      //   type: Sequelize.DATE
      // }//,
      // updated_at: {
      //   type: Sequelize.DATE
      // }
    },{tableName:"customer"});
  
    return Customer;
  };
module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("role", {
        name:{
            type: Sequelize.STRING
        },
        key:{
            type: Sequelize.INTEGER
        }//,
        // created_at: {
        //     type: Sequelize.DATE
        //   },
        //   updated_at: {
        //     type: Sequelize.DATE
        //   }
    },{tableName:"role"}
    )
    return Role;
};
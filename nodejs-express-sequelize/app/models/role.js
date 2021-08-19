module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("role", {
        name:{
            type: Sequelize.STRING
        },
        key:{
            type: Sequelize.INTEGER
        }
    },{tableName:"role"}
    )
    return Role;
};
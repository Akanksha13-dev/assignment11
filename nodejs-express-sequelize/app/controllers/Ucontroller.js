const db = require("../models");
const User = db.users;
const Customer=db.customer;
const Role=db.role;
const Op = db.Sequelize.Op;
Customer.hasMany(User,{foreignKey:'customer_id'});
User.belongsTo(Customer,{foreignKey:'customer_id'});

// Create and Save a new User
exports.create = (req, res) => {
    // if (!req.body.title) {
    //     res.status(400).send({
    //       message: "Content can not be empty!"
    //     });
    //     return;
    //   }
      const CustomerName= req.body.customer_Name;
      // Create a Tutorial
    //   const user = {
    //     ID: req.body.id,
    //     First__Name: req.body.first__name,
    //     Middle__Name: req.body.middle__name,
    //     Last__Name: req.body.last__name,
    //     Email: req.body.email,
    //     Phone_Number: req.body.phone_number,
    //     Role: req.body.role,
    //     Address: req.body.address,
    //     DateTime: req.body.datetime,
    //     CustomerName: req.body.customer_Name
    // };
      Customer.findOne({where:{name:`${CustomerName}`}})
      .then(customer=>{
        const val=customer.id;
        const user = {
          id: req.body.id,
          first__name: req.body.first__name,
          middle__name: req.body.middle__name,
          last__name: req.body.last__name,
          email: req.body.email,
          phone_number: req.body.phone_number,
          role: req.body.role,
          address: req.body.address,
          datetime: req.body.datetime,
          customer_id: val
      };
      console.log("Hey",user);
        User.create(user)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the User."
          });
        });
      }
      )
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "May You enter wrong customer name."
        });
      });
    
      // Save Tutorial in the database
      // User.create(user)
      //   .then(data => {
      //     res.send(data);
      //   })
      //   .catch(err => {
      //     res.status(500).send({
      //       message:
      //         err.message || "Some error occurred while creating the Tutorial."
      //     });
      //   });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    //const title = req.query.title;
  //var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
  //{ where: condition }
  User.findAll({
    include:[{model:Customer,required:true}]
  })
    .then(users => {
      const resObj=users.map(user=>{
        return Object.assign(
          {},{
            id:user.id,
            first__name:user.first__name,
            middle__name:user.middle__name,
            last__name:user.last__name,
            email:user.email,
            phone_number:user.phone_number,
            role:user.role,
            address:user.address,
            datetime:user.datetime,
            customer_Name:user.customer.name

          }
        )
      })
      res.json(resObj)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
  
};

// Find a single User with an id
exports.findOne = (req, res) => {
    const id = parseInt(req.params.id);

    User.findByPk(id,{
      include:[{model:Customer,required:true}]
    })
      .then(user => {
        //console.log(users);
        const resObj={
              id:user.id,
              first__name:user.first__name,
              middle__name:user.middle__name,
              last__name:user.last__name,
              email:user.email,
              phone_number:user.phone_number,
              role:user.role,
              address:user.address,
              datetime:user.datetime,
              customer_Name:user.customer.name
  
            }
            res.json(resObj)
            //console.log(res.json(resObj))
        })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User with id=" + id
        });
      });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  const id = parseInt(req.params.id);
  const CustomerName= req.body.customer_Name;
  Customer.findOne({where:{name:`${CustomerName}`}})
  .then(customer=>{
    const val=customer.id;
     const user1 = {
      ID: req.body.id,
      First__Name: `${req.body.first__name}`,
      Middle__Name: `${req.body.middle__name}`,
      Last__Name:`${ req.body.last__name}`,
      Email: `${req.body.email}`,
      Phone_Number: `${req.body.phone_number}`,
      Role: `${req.body.role}`,
      Address:`${ req.body.address}`,
      DateTime: `${req.body.datetime}`,
      Customer_id: val
    };
    console.log("Hey",user1);//extra
  
    User.update({
      first__name:user1.First__Name,middle__name:user1.Middle__Name,
      last__name:user1.Last__Name,email:user1.Email,phone_number:user1.Phone_Number,
      role:user1.Role,address:user1.Address,datetime:user1.DateTime,customer_id:user1.Customer_id,
      //updatedtedAt:
    }, {
    where: { id: `${id}` }
  })
    .then(num => {
      console.log(num);//extra
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });})
  }

  //)
//   .catch(err => {
//     res.status(500).send({
//       message:
//         err.message || "May be You enter wrong customer name."
//     });
//   });
//};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: " was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not user User with id=" + id
      });
    });
};
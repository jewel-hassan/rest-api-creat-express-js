const { v4: uuidv4 } = require('uuid');

const users = [
    {
        id:uuidv4(),
        username:"jewel hassan",
        email:"jewelhassan29@gmail.com",
    },
    {
        id:uuidv4(),
        username:"zidan hassan",
        email:"zidanhassan399@gmail.com",
    }

]

module.exports=users;
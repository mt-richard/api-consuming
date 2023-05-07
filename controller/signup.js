const {students,admin} = require('../models/index.js')

module.exports= async function signup(req, res){
    const { name,email,phone,username,password } = req.body
    try {
        // const exist = await students.findAll({ where: {email}})
        // // if (exist) {
        // //     res.json({ message: 'Email was taken' });
        // // }
        await students.create({ name,email,phone,username,password });
        res.json({ message: 'Account Created successful' });
      
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
}
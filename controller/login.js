const {students,admin} = require('../models/index.js')

module.exports= async function login(req, res){
    const { email, password } = req.body
    
    
    try {
        const user = await students.findOne({  where: { email,password} });
        
        const  adminuser = await admin.findOne({  where: { email,password} })
        
        if (!user) {
          return res.status(401).json({ message: 'Invalid email or password' });
        }
        if (!adminuser) {
          return res.status(401).json({ message: 'Invalid email or password' });
        }
        res.json({ message: 'Login successful' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
}
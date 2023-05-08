const {students,admin} = require('../models/index.js')

module.exports= async function login(req, res){
    const { email, password } = req.body
    
    
    try {
        const user = await students.findOne({  where: { email: email,password : password} })
       
            if(user){
              res.json({ message: 'Login successful....' });
            }else{
            return res.status(401).json({ message: 'Invalid email or password' });
            }

        
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
}
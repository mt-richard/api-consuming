const {students,admin} = require('../models/index.js')

module.exports = async function getParticipants(req, res) {
    try {
        const allpart = await students.findAll()
        res.send(allpart)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
   
}
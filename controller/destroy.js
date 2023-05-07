const {students,admin} = require('../models/index.js')

module.exports = async function destroy(req, res) {
    try {
        const id = req.params.id
        const partcipant = await students.findByPk(id).then( part =>{
                part.destroy()
                res.json({message: 'Participant Deleted...'})
            }
        )
        
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal server error' });
    }
}
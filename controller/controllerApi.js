const {Drug} = require('../models/farmacia');

const verMedicaciones = async (req, res) => {
    const medicaciones = await Drug.find()
    if (medicaciones === []) {
        res.status(401).json({msg:"base de datos sin informacion"})
    } else { 
    res.status(200).json({medicaciones}) 
    }
}

const crearMedicaciones = async (req, res) => {
    try {
        const save = new Drug(req.body);
        await save.save()
        res.status(201).json(save)
    } catch (err) {
        res.status(501).json({msg: "no se puede guardar la medicacion, por favor intente mas tarde", err})
    }
}

module.exports = {verMedicaciones, crearMedicaciones}


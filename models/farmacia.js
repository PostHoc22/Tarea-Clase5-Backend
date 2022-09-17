const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const farmaciaSchema /*(nombre de const puede ser tamb storeSchema)*/ = new Schema({
    producto: {
        type:String,
        required:true,
        unique:true
    },
    droga: {
        type:String,
        required:true
    },
    presentacion: {
        type:String,
        required:true
    },
    precio: {
        type:Number,
        required:true
    },
    codigoBarra: {
        type:Number,
        required:true
    },
    laboratorio: {
        type:String,
        required:true
    },
    enStock: {
        type:Boolean,
        required:true
    }
});

const Drug = mongoose.model('Drug', farmaciaSchema);

module.exports = {Drug}
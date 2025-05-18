const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
title: { type: String, required: true },
author: { type: String, required: true, unique: true },
genre: { type: String, optional:true},
genre: { type:Number, optional:true},
}, { timestamps: true });
module.exports = mongoose.model('Book', bookSchema);


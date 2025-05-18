const express = require('express');
const router = express.Router();
const Book = require('../Models/bookModel');

router.post('/', async (req, res) => {
    try {
        const books = new Book(req.body);
        await books.save();
        res.status(201).json(books);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const books = await Book.findById(req.params.id); 
        if (!books) {
            return res.status(404).json({ message: 'Book not found' }); 
        }
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
});


router.put('/:id', async (req, res) => {
    try {
        const books= await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!books) return res.status(404).json({ message: 'Book not found' });
        res.json(books);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const books = await Book.findByIdAndDelete(req.params.id);
        if (!books) return res.status(404).json({ message: 'Book not found' });
        res.json({ message: 'Book deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports = router;



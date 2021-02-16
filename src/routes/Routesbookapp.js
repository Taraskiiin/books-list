const { Router } = require('express');
const BooksList = require('../models/BooksList');
const router = Router();

router.get('/', async (req, res) => {
  BooksList.find().then((BooksList) =>
    res.json(BooksList)
  );
});

router.post("/", async (req, res) => {
  const newList = BooksList({
    title: req.body.title || " ",
    name: req.body.name || " ",
    secondname: req.body.secondname || " ",
    category: req.body.category || " ",
    isbn: req.body.isbn || 0,
    img: req.body.img || " "
  });
  newList
    .save()
    .then((announcementsList) => res.json(announcementsList));
});

router.put('/:id', async (req, res) => {
  const book = await BooksList.findById(req.params.id);
    book.title = req.body.title || " ";
    book.name = req.body.name || " ";
    book.secondname = req.body.secondname || " ";
    book.category = req.body.category || " ";
    book.isbn = req.body.isbn || 0;
    book.img = req.body.img || " "
  await book.save();
    res.redirect("/:id");
});

router.delete('/:id', (req, res) => {
  BooksList.findByIdAndDelete(req.params.id).then(() =>
    res.json({ remove: true })
  );
});
module.exports = router;
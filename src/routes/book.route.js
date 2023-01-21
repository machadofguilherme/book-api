const router = require('express').Router();
const { bookController } = require('../controllers');

router.get('/books', bookController.findAll);
router.get('/books/:id', bookController.findById);
router.post('/books', bookController.create);
router.put('/books/:id', bookController.update);
router.delete('/books/:id', bookController.remove);

module.exports = {
  router
}
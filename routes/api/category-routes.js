const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const category_name = await Category.findAll()
    res.json(category_name)
  }
  catch (err) {
    res.json(err) 
  }
});


// find one category by its `id` value
router.get('/:id', async (req, res) => {
  try {
    const category_name = await Category.findOne({
      where: {
        id: req.params.id
      }
    })
    res.json(category_name)
  }
  catch (err) {
    res.json(err) 
  }

  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    const category_name = await Category.create(req.body)
    res.json(category_name)
  }
  catch (err) {
    res.json(err) 
  }
});
  // create a new category

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    const category_data = Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(category_data)
  } catch(err){
    res.json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
    const category_data = Category.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(category_data)
  } catch (err){
    res.json(err)
  }
});

module.exports = router;

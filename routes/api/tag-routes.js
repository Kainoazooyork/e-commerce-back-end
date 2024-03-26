const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tag = await Tag.findAll()
    res.json(tag)
  }
  catch (err) {
    res.json(err) 
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findOne({
      where: {
        id: req.params.id
      }
    })
    res.json(tag)
  }
  catch (err) {
    res.json(err) 
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const tag = await Tag.create(req.body)
    res.json(tag)
  }
  catch (err) {
    res.json(err) 
  }
  // create a new tag
});

router.put('/:id',async (req, res) => {
  try{
    const tag = Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(tag)
  } catch(err){
    res.json(err)
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try{
    const tag = Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(tag)
  } catch (err){
    res.json(err)
  }
  // delete on tag by its `id` value
});

module.exports = router;

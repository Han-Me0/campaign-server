const Category = require("../models/Category.model");

const router = require("express").Router();

router.get("/", async (req, res, next) => {
  const category = await Category.find().populate('campaigns')
  res.json(category)
})

router.get("/:categoryId", async (req, res, next) => {
  const {categoryId} = req.params
  const category = await Category.findById(categoryId)
  res.json(category)
})

router.post("/", async (req, res, next) => {
  const {kind, campaigns} = req.body
  try {
   const category = await Category.create({
     kind: kind.trim(),
     campaigns,
    })

    res.status(201).json({message: 'new category created', id: category.id})
  } catch (error) {
    res.status(500).json(error)
  }
  
})

router.put("/:categoryId", async (req, res, next) => {
  const {categoryId} = req.params
  const {kind, campaigns} = req.body
  const newData = {campaigns}

  if(kind !== ''){
    newData.kind = kind.trim()
  }
  
  try {
   const category = await Category.findByIdAndUpdate(categoryId, newData)
    res.status(202).json({message: 'campaign updated', id: category.id})
  } catch (error) {
    res.status(500).json(error)
  } 
})

router.delete("/:categoryId", async (req, res, next) => {
  const {categoryId} = req.params
  
  await Category.findByIdAndDelete(categoryId)
  res.status(200).json({message: 'category deleted'})
})
// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;

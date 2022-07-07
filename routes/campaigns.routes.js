const Campaign = require("../models/Campaign.model");

const router = require("express").Router();

router.get("/", async (req, res, next) => {
  const campaigns = await Campaign.find()
  res.json(campaigns)
})

// router.get("/search", async (req, res, next) => {
//   const campaigns = await Campaign.find()
//   res.json(campaigns)
// })

router.get("/:campaignId", async (req, res, next) => {
  const {campaignId} = req.params
  const campaign = await Campaign.findById(campaignId)
  res.json(campaign)
})

router.post("/", async (req, res, next) => {
  const {image, title, description, place, campaignType, totalAmount} = req.body
  try {
   const campaign = await Campaign.create({
     image: image.trim(),
     title: title.trim(),
     description: description.trim(),
     place: place.trim(),
     campaignType: campaignType.trim(),
     totalAmount: parseFloat(totalAmount)
    })
    res.status(201).json({message: 'new campaign created', id: campaign.id})
  } catch (error) {
    res.status(500).json(error)
  }
  
})

router.put("/:campaignId", async (req, res, next) => {
  const {campaignId} = req.params
  const {image, title, description, place, campaignType, totalAmount} = req.body
  const newData = {}

  if(image !== '' ){
    newData.image = image.trim()
  }
  if(title !== '' ){
    newData.title = title.trim()
  }
  if(description !== ''){
    newData.description = description.trim()
  }
  if(place !== ''){
    newData.place = place.trim()
  }
  if(campaignType !== ''){
    newData.campaignType = campaignType.trim()
  }
  if(totalAmount !== '0'){
    newData.totalAmount = parseFloat(totalAmount)
  }
  try {
   const campaign = await Campaign.findByIdAndUpdate(campaignId, newData)
    res.status(202).json({message: 'campaign updated', id: campaign.id})
  } catch (error) {
    res.status(500).json(error)
  }
  
})

router.delete("/:campaignId", async (req, res, next) => {
  const {campaignId} = req.params
  
  await Campaign.findByIdAndDelete(campaignId)
  res.status(200).json({message: 'campaign deleted'})
})
// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;

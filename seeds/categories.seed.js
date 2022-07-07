const mongoose = require('mongoose')
// const { addListener } = require('../app')
const categoryModel = require('../models/Category.model')
const categories = [
    {
       kind: "Educational Aid",
       campaigns: '62c34d7f2997e8ca607fc96f',
    },
    {
       kind: "Environmental Aid",
       campaigns: ['62c34d7f2997e8ca607fc971',
                   '62c34d7f2997e8ca607fc972',
                   '62c34d7f2997e8ca607fc975',
       ]
    },

    {
      kind: "Humanitarian Aid",
      campaigns: ['62c34d7f2997e8ca607fc970',
                  '62c34d7f2997e8ca607fc976',
                  '62c34d7f2997e8ca607fc977',
                  '62c34d7f2997e8ca607fc978',
                  '62c34d7f2997e8ca607fc979',
      ]
   },
   {
      kind: "Global Aid",
      campaigns: ['62c34d7f2997e8ca607fc973',
                  '62c34d7f2997e8ca607fc974',
                  '62c34d7f2997e8ca607fc975',
      ]
   }
]

 const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/campaign-server'
 mongoose.connect(MONGO_URI)
 .then((x) => {
   console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
   return categoryModel.insertMany(categories)
 })
 .catch((err) => {
   console.error("Error connecting to mongo: ", err);
 })
 .finally(() => {
   console.log("closing the database")
   mongoose.connection.close()
 })
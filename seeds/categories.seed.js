// const mongoose = require('mongoose')
// // const { addListener } = require('../app')
// const categoryModel = require('../models/Category.model')
// const categories = [
//     {
//        kind: "Educational Aid",
//        campaigns: [{  image: "../puplic/images/boy.jpg",
//        title:"Education is not a luxury of peacetime",
//        description: "In 2021, We continued to provide vital services responding to the most pressing needs, supporting children out of school and bringing them back to the educational path, distributing food to the most vulnerable people, and supporting healthcare services in communities and camps.",
//        place: "Syria",
//        campaignType:"educational aid",
//        totalAmount: 100000,
//     },
//    ]},
//     {
//        kind: "Environmental Aid",
//        campaigns: [{
//        image: "../puplic/images/forest.png",
//        title:"Tree massacre",
//        description: "Majestic forests around the world are being destroyed to produce ever more beef, palm oil, cocoa, timber, and paper. Now legislators in the US are considering new laws to stop forest-killing products from entering their country -- this could transform global supply chains and help save our forests! But with US elections looming we don’t have much time – we need to deliver massive public pressure to lawmakers fast! Add your name to protect our precious forests:",
//        place: "US",
//        campaignType:"environmental aid",
//     },
// {
//       image: "../puplic/images/extinction.png",
//        title:"A deafening roar for life on Earth",
//        description: `65 million years ago, an asteroid killed 75% of life on Earth.Today we're facing another mass extinction -- but this time, the asteroid is us. 
//        Humanity has now destroyed two-thirds of the world's rainforests, half the coral reefs, and 87% of all wetlands. Now a million species are howling on the sharp edge of extinction.
//        We couldn't stop the last mass die-off, but we can stop this one. The next five months are critical.
//        Governments are busy negotiating a new global deal to save nature, with final talks at the end of August. It means we only have 150 days to ensure leaders follow the science and agree to protect half the planet.`,
//        place: "Global",
//        campaignType:"environmental aid",
//        totalAmount: 1000000,
//     },
// {     image: "../puplic/images/forest.png",
//        title:"Tree massacre",
//        description: "Majestic forests around the world are being destroyed to produce ever more beef, palm oil, cocoa, timber, and paper. Now legislators in the US are considering new laws to stop forest-killing products from entering their country -- this could transform global supply chains and help save our forests! But with US elections looming we don’t have much time – we need to deliver massive public pressure to lawmakers fast! Add your name to protect our precious forests:",
//        place: "US",
//        campaignType:"environmental aid",
//     },
// {     image: "../puplic/images/extinction.png",
//        title:"A deafening roar for life on Earth",
//        description: `65 million years ago, an asteroid killed 75% of life on Earth.Today we're facing another mass extinction -- but this time, the asteroid is us. 
//        Humanity has now destroyed two-thirds of the world's rainforests, half the coral reefs, and 87% of all wetlands. Now a million species are howling on the sharp edge of extinction.
//        We couldn't stop the last mass die-off, but we can stop this one. The next five months are critical.
//        Governments are busy negotiating a new global deal to save nature, with final talks at the end of August. It means we only have 150 days to ensure leaders follow the science and agree to protect half the planet.`,
//        place: "Global",
//        campaignType:"environmental aid",
//        totalAmount: 1000000,
//     },
// {     image: "../puplic/images/tanza.png",
//        title:"BREAKING: bullets are flying",
//        description: "This is urgent! The Tanzanian government is seemingly charging ahead with violent evictions of Maasai families, to make way for luxury safari hunts and elite tourism. Horrifying videos show Maasai people running as the bullets fly, and many have gunshot wounds and serious injuries. Massive global public pressure helped stop the eviction plans in the past -- let's do it again. Join 3 million Avaazers now and share the call from Maasai elders with everyone! ",
//        place: "Tanzania",
//        campaignType:"environmental aid",
//     }
//    ]},

//    {
//       kind: "Humanitarian Aid",
//       campaigns: [
//    {  image: "../puplic/images/amazonian.png",
//        title:"Stop the Amazon's Massacres",
//        description: "We call on you to take urgent measures to stop all attacks against the Yanomami people in the Brazilian Amazon, including putting political and economic pressure on the Brazilian government to ensure the rights of all Indigenous peoples are duly respected. We cannot allow this massacre to continue anymore. Together, your actions can give the Yanomami the assurance that the world won't turn the back on them at this darkest hour.",
//        place: "Amazon",
//        campaignTyp:"humanitarian aid",
//        totalAmount: 1000000,
//  },
//    {  image: "../puplic/images/Afghanestan.png",
//        title:"Afghanistan S.O.S.",
//        description: "Afghanistan is starving: 23 million people are on the edge of famine and one million children could die this winter. Some are barely surviving on nothing but dry flour. Courageous aid workers are doing all they can, but the scale of suffering is intensifying daily, and many are struggling to cope.",
//        place: "Afghanistan",
//        campaignType:"humanitarian aid",
// }, 
//    {  image: "../puplic/images/Ukraine.png",
//        title:"Putin's killers",
//        description: "Putin's killers. The killings caused global outrage – but instead of bringing them to justice, Putin gave MEDALS to the soldiers accused of the massacre! Ukraine’s people are alleged to have faced an estimated 10,000 possible war crimes already – executions, rapes and torture at the hands of Russian troops. They need justice -- and we can help to get it. Chip in now -- let’s hold Putin’s killers to account and bring justice to Ukraine:",
//        place: "Ukraine",
//        campaignType:"humanitarian aid",
// }, 
//    {  image: "../puplic/images/aborto.png",
//        title:"Roe v. Wade",
//        description: "This is horrifying! The US Supreme Court just stripped millions of the right to a safe and legal abortion! But activists from across the world are fighting back -- and they need our help! Add your name to their open letter and let's make it the biggest call for reproductive rights we've ever seen. Once we get to one million, we’ll publish it in US media -- sign with one click and share now!",
//        place: "US",
//        campaignType:"humanitarian aid"
// },
//    {  image: "../puplic/images/massai.png",
//        title:"The Maasai are under attack",
//        description: "The Maasai's future is going up in flames. They've been terrorised by the Tanzanian government for years -- hundreds of homes have been burnt to the ground. Now the government is even more determined to get rid of them, cutting vital medical services, and threatening to evict thousands of families so a foreign company can expand trophy hunting on Maasai land. The Maasai are cattle herders -- losing their ancestral grasslands in Ngorongoro could push thousands into severe poverty, and they just don't have the money for another legal battle. They're asking for our help.",
//        place: "Tanzania",
//        campaignType:"humanitarian aid",
// },
   
//       ]
//    }

//  ]

//  const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/campaign-server'
//  mongoose.connect(MONGO_URI)
//  .then((x) => {
//    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
//    return categoryModel.insertMany(categories)
//  })
//  .catch((err) => {
//    console.error("Error connecting to mongo: ", err);
//  })
//  .finally(() => {
//    console.log("closing the database")
//    mongoose.connection.close()
//  })
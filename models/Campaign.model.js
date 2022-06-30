const {Schema, model} = require("mongoose")

const campaignSchema = new Schema(
    {
      image: String,
      title: {
        type:String,
        unique: true,
      },
      description: String,
      place: String,
      campaignType: String,
      totalAmount: Number,
      //creator: [{type: Schema.Types.ObjectId, ref:'User'}], do we need this?
      donations: [{type: Schema.Types.ObjectId, ref:'User'}]
    },
    {
        timestamps: true
    }
)

const Campaign = model("Campaign", campaignSchema)
module.exports = Campaign
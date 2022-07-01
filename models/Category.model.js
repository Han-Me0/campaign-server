const { Schema, model } = require("mongoose");

const CategorySchema = new Schema(
  {
    kind: String,
    campaigns: [{type: Schema.Types.ObjectId, ref: 'Campaign'}]
  },
  {
    timestamps: true,
  }
);

const Category = model("Category", CategorySchema);

module.exports = Category;
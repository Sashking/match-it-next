import { Schema, model, models } from 'mongoose'

const clothesSchema = new Schema({
	name: String,
	image: String,
	inWardrobe: Boolean,
	price: Number,
	category: String,
	subcategory: String,
	type: String,
	color: String,
	styles: [String]
})

export default models.Clothes || model('Clothes', clothesSchema)

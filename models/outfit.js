import { Schema, model, models } from 'mongoose'

const outfitSchema = new Schema({
	image: String,
	clothes: [{ type: Schema.Types.ObjectId, ref: 'Clothes' }]
})

export default models.Outfit || model('Outfit', outfitSchema)

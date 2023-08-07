import { Schema, model, models } from 'mongoose'
import clothes from './clothes.js'

const outfitSchema = new Schema({
	image: String,
	clothes: [{ type: Schema.Types.ObjectId, ref: clothes }]
})

export default models.Outfit || model('Outfit', outfitSchema)

import { Schema, model, models } from 'mongoose'
import clothes from './clothes.js'

const stylesSchema = new Schema({
  name: String,
	clothes: [{ type: Schema.Types.ObjectId, ref: clothes }]
})

export default models.Style || model('Style', stylesSchema)

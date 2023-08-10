import connectMongo from "@/utils/dbConfig"
import NewItemForm from "./NewItemForm"
import clothes from "@/models/clothes"

export default function NewItemFormContext() {
    async function handleReturn(data) {
        'use server'

        await connectMongo()
		  
        await clothes.updateOne(data, { inWardrobe: true })
	}

    return (
        <>
            <NewItemForm handleReturn={handleReturn}/>
        </>
    )
}
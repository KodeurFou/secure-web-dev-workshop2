import * as dotenv from "dotenv"
dotenv.config()
console.log(process.env.MONGO_URI)

import mongoose, {model} from 'mongoose';
import * as Console from "console";
const { Schema } = mongoose;


const schemaLocations = new Schema(
    {
        "filmType": String,
        "filmProducerName": String,
        "endDate": Date,
        "filmName": String,
        "district": Number,
        "geolocation": {
            "coordinates": [
                Number
            ],
            "type": String
        },
        "sourceLocationId": String,
        "filmDirectorName": String,
        "address": String,
        "startDate": Date,
        "year": Number,
    }
)




async function main(){
    await mongoose.connect(process.env.MONGO_URI)
    console.log("connected!");

    const Location = new model('Locations', schemaLocations)
    const premierLocation = new Location({filmType: 'Horror'})
    await premierLocation.save()
}

main()



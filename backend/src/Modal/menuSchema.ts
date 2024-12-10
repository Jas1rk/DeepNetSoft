
import mongoose, { Schema } from "mongoose";
import { MenuTypes } from "../Interface/MenuTypes";


const menuSchema: Schema = new Schema<MenuTypes>({
    menuName: {
        type: String
    },
    description: {
        type: String
    },
    items: [{
        itemName: {
            type: String
        },
        price: {
            type: Number
        },
        itemDescription: {
            type: String
        }
    }],
}, { versionKey: false, timestamps: true })

const Menu = mongoose.model<MenuTypes>('Menu', menuSchema)
export default Menu


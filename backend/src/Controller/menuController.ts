import { Request, Response } from "express"
import Menu from "../Modal/menuSchema"
import { MenuTypes } from "../Interface/MenuTypes"


export const createMenu = async (req: Request, res: Response): Promise<void> => {
    try {
        const { menu, description, itemName, price, itemsDescription } = req.body;

        const updateResult = await Menu.updateOne(
            { menuName: menu },
            {
                $set: {
                    description: description,
                },
                $push: {
                    items: {
                        itemName: itemName,
                        price: price,
                        itemDescription: itemsDescription
                    }
                }
            },
            { upsert: true }
        );

        if (updateResult.upsertedCount > 0) {
            res.status(200).json({ message: "Menu created successfully" });
        } else {
            res.status(200).json({ message: "Item added to existing menu" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating or updating menu" });
    }
};




export const getMenu = async (req: Request, res: Response): Promise<void> => {
    try {
        const fetchMenu = await Menu.find({})
        console.log(fetchMenu)
        res.status(200).json(fetchMenu)
    } catch (error) {
        console.log(error)
    }
}
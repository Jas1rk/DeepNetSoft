
import { connect } from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const mongo_url: string = process.env.MONGO_CLUSTER_URL as string

async function DatabaseConnection(): Promise<void> {
    try {
        await connect(mongo_url)
        console.log("Database connected successfully😎")
    } catch (error) {
        console.log("Failed to connect database😭", error)
    }
}

export default DatabaseConnection

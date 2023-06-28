import dotenv from 'dotenv'
import { program } from 'process.js'

dotenv.config({
    path: program.opts().mode === 'testing' ? '.env.testing' : '.env.development'
    
})

export default {
    secret_key_jwt: process.env.secret_key_jwt,
    mongo_uri: process.env.MONGO_URI,
    port: process.env.SECRET_KEY
}
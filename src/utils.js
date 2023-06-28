import {dirname} from 'path';
import {fileURLToPath} from 'url';
import bycrpt from 'bcrypt';
export const __dirname = dirname(fileURLToPath(import.meta.url));


export const hashPassword = async (password) => {
    return await bycrpt.hash(password, 10);

    
}

export const compareData = async( data, hashData) => {
    return await bycrpt.compare(data, hashData);
}

export const generateToken = async (user) => {
    return await jwt.sign({id: user._id}, process.env.SECRET_KEY, {
        expiresIn: '1h'
    })
}
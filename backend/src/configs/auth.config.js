import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'

dotenv.config();

const JWT_KEY = process.env.JWT_KEY;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

const encodeToken = (email, id) =>{
    
    const payload = { email, id };
    
    return jwt.sign( payload, JWT_KEY, { expiresIn: JWT_EXPIRES_IN});
};

const decodeToken = (token) => {
    try {
        const decoded = jwt.verify(token, key);
        return decoded;
    } catch (error) {
        return null
    }
}

const authConfigs = {encodeToken, decodeToken};

export default authConfigs;
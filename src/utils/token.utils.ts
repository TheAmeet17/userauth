import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your-secret-key'; // Replace with a secure key from your environment variables

// Function to generate an access token
export const generateAccessToken = (userId: number, username: string): string => {
    return jwt.sign(
        { id: userId, username: username },
        JWT_SECRET,
        { expiresIn: '1h' } // Token expiration time
    );
};
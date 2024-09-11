// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';

// const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// // Type definition for the decoded token payload
// interface DecodedToken {
//     id: number;
//     username: string;
// }

// declare global {
//     namespace Express {
//         interface Request {
//             user?: DecodedToken;
//         }
//     }
// }

// // Middleware to verify the access token
// export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
//     // Extract token from the Authorization header
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

//     if (!token) {
//         return res.status(401).json({ message: 'Access token is required' });
//     }

//     // Verify the token
//     jwt.verify(token, JWT_SECRET, (err, decoded) => {
//         if (err) {
//             return res.status(403).json({ message: 'Invalid or expired token' });
//         }

//         // Attach the user information to the request object
//         req.user = decoded as DecodedToken;
//         next(); // Proceed to the next middleware or route handler
//     });
// };

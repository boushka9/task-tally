const jwt = require('jsonwebtoken');

const payload = { user_id: 123 };
const secretKey = "your-secret-key";
const token = jwt.sign(payload, secretKey, { algorithm: "HS256" });
console.log("Generated JWT:", token);

const decodedToken = jwt.verify(token, secretKey);
console.log("Decoded JWT:", decodedToken);
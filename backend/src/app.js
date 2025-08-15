
// import express, { urlencoded } from "express";
// import cookieParser from "cookie-parser";
// import cors from "cors"



 
// const app = express();

// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"]
// }));

// // Handle preflight explicitly (for older browsers / strict setups)
// app.options("*", cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }));




// app.use(express.json({limit: "16kb"
// }))
// app.use(express.urlencoded({
//     extended: true,
//     limit: "16kb"
// }))
// app.use(express.static("public"));
// app.use(cookieParser())


// import userRouter from './route/user.route.js'

// app.use("/api/v1/users", userRouter)
// app.use("/api/v1/users",userRouter)

// import propertyRoutes from './route/property.route.js';
// app.use('/api/properties', propertyRoutes);



// export default app;




import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from './route/user.route.js';
import propertyRoutes from './route/property.route.js';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/properties", propertyRoutes);

export default app;

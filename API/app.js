import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';

const app = express();

// Application-level middleware
app.use(cors());
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

// Routers
import userRouter from './router/user.router.js';
import categoryRouter from './router/category.router.js';
import subcategoryRouter from './router/subcategory.router.js';
import orderRoutes from './router/order_routes.js';
import contactRoutes from './router/contact_routes.js'
app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/subcategory", subcategoryRouter);
app.use("/order", orderRoutes);
app.use('/contact',contactRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Start server
app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});

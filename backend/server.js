import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

// TODO: importeer hier je routes als je ze hebt gemaakt
// Voorbeeld: import clientRoutes from './src/routes/clientRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route - check of server draait
app.get('/', (req, res) => {
  res.json({
    message: 'Mini-CRM backend draait!',
    success: true,
  });
});

// TODO: koppel hier je routes als je ze hebt gemaakt
// Voorbeeld: app.use('/api/clients', clientRoutes);

// Database verbinden en server starten
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Database verbonden & server draait op poort ${process.env.PORT}`,
      );
    });
  })
  .catch((err) => console.error(err));

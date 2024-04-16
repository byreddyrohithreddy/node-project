import express, { Request, Response } from 'express';
import { Pool } from 'pg';

export const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'applicants_db',
  password: 'Enter Your Password',
  port: 5432,
});

app.use(express.json());

app.get('/awesome/applicant', async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM applicants WHERE id = 1');
    const data = result.rows[0];
    res.json(data);
    client.release();
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Create a new applicant
app.post('/awesome/applicant', async (req: Request, res: Response) => {
    const { name, age, email } = req.body;
    try {
      const client = await pool.connect();
      const result = await client.query('INSERT INTO applicants (name, age, email) VALUES ($1, $2, $3) RETURNING *', [name, age, email]);
      const newApplicant = result.rows[0];
      res.status(201).json(newApplicant);
      client.release();
    } catch (error) {
      console.error('Error creating applicant', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  // Get all applicants
  app.get('/awesome/applicants', async (req: Request, res: Response) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM applicants');
      const applicants = result.rows;
      res.json(applicants);
      client.release();
    } catch (error) {
      console.error('Error getting applicants', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  // Get a single applicant by ID
  app.get('/awesome/applicant/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM applicants WHERE id = $1', [id]);
      const applicant = result.rows[0];
      if (!applicant) {
        return res.status(404).json({ message: 'Applicant not found' });
      }
      res.json(applicant);
      client.release();
    } catch (error) {
      console.error('Error getting applicant by ID', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  // Update an applicant by ID
  app.put('/awesome/applicant/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, age, email } = req.body;
    try {
      const client = await pool.connect();
      const result = await client.query('UPDATE applicants SET name = $1, age = $2, email = $3 WHERE id = $4 RETURNING *', [name, age, email, id]);
      const updatedApplicant = result.rows[0];
      if (!updatedApplicant) {
        return res.status(404).json({ message: 'Applicant not found' });
      }
      res.json(updatedApplicant);
      client.release();
    } catch (error) {
      console.error('Error updating applicant', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  // Delete an applicant by ID
  app.delete('/awesome/applicant/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const client = await pool.connect();
      const result = await client.query('DELETE FROM applicants WHERE id = $1 RETURNING *', [id]);
      const deletedApplicant = result.rows[0];
      if (!deletedApplicant) {
        return res.status(404).json({ message: 'Applicant not found' });
      }
      res.json({ message: 'Applicant deleted successfully' });
      client.release();
    } catch (error) {
      console.error('Error deleting applicant', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });  

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

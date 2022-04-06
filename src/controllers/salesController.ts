import { Request, Response } from 'express';
import { getConnection, sql } from '../database/connection';

export const getSales = async (_req: Request, res: Response) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query('SELECT * FROM Sales');

    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const addNewSale = async (req: Request, res: Response) => {
  const { productId, quantity } = req.body;

  if (!productId || !quantity) {
    return res.status(400).json({ message: 'Bad request. Fill all fields' });
  }

  try {
    const pool = await getConnection();
    await pool.request()
      .input('productId', sql.Int, productId)
      .input('quantity', sql.Int, quantity)

      .query(`INSERT INTO Sales (product_id, quantity, sale_date)
        VALUES (@productId, @quantity, GETDATE())`);

    res.status(201).json({ productId, quantity });
  } catch (error) {
    res.status(500).send(error);
  }
};

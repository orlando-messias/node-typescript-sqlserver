import { Request, Response } from 'express';
import { getConnection, sql } from '../database/connection';
import queries from "../database/queries";

export const getProducts = async (_req: Request, res: Response) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(queries.getProducts);

    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getProductByName = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;
    const pool = await getConnection();
    const result = await pool
      .request()
      .input('Name', name)
      .execute('listaProduto');
    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input('Id', id)
    .query('SELECT * FROM Products WHERE Id = @Id');

  if (!result.recordset[0]) return res.status(200).json({ message: 'Product not found' });

  res.status(200).json(result.recordset[0]);
};

export const addNewProduct = async (req: Request, res: Response) => {
  const { product, descriptionProduct } = req.body;
  let { quantity } = req.body;

  if (!product || !descriptionProduct) {
    return res.status(400).json({ message: 'Bad request. Fill all fields' });
  }
  if (quantity === null) quantity = 0;

  try {
    const pool = await getConnection();
    const result = await pool.request()
      .query('SELECT MAX(Id) as product_Id FROM Products');
    const id = result.recordset[0].product_Id + 1;

    await pool.request()
      .input('id', sql.Int, id)
      .input('product', sql.VarChar, product)
      .input('descriptionproduct', sql.VarChar, descriptionProduct)
      .input('quantity', sql.Int, quantity)

      .query(`INSERT INTO Products (id, product, description_product, quantity)
        VALUES (@id, @product, @descriptionproduct, @quantity)`);

    res.status(201).json({ id, product, descriptionProduct, quantity });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const pool = await getConnection();
    const verifyId = await pool.request()
      .input('Id', id)
      .query('SELECT * FROM Products WHERE Id = @id AND Available = "y"');

    if (!verifyId.recordset.length) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const result = await pool.request()
      .input('Id', id)
      .query('UPDATE Products SET Available = "n" WHERE Id = @Id');

    await pool.request()
      .input('Id', id)
      .query('UPDATE Stored_Products SET Final = 0, Updated_At = GETDATE() WHERE Product_Id = @Id');

    res.json({ deletedId: id, numberOfItens: result.rowsAffected });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateProductById = async (req: Request, res: Response) => {
  const { product, descriptionProduct, quantity } = req.body;
  const { id } = req.params;

  if (!product || !descriptionProduct || !quantity) {
    return res.status(400).json({ msg: 'Bad request. Fill all fields' });
  }

  try {
    const pool = await getConnection();
    await pool.request()
      .input('product', sql.VarChar, product)
      .input('descriptionproduct', sql.VarChar, descriptionProduct)
      .input('quantity', sql.Int, quantity)
      .input('id', sql.Int, id)
      .query('UPDATE Products SET Product = @Product, description_product = @descriptionProduct, Quantity = @quantity WHERE Id = @id');

    return res.status(200).json({ id, product, descriptionProduct, quantity });
  } catch (error) {
    res.status(500).send(error);
  }
};

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer');
import { MongoClient } from 'mongodb';
import { MONGO_DB } from '../../constants/config';

export default async function handler(req, res) {
  if (req.method === 'POST') {
      try {
          const { nombre, email, asunto, mensaje } = req.body;
      const client = await MongoClient.connect(MONGO_DB);
      const db = client.db();
      const collection = db.collection('mail');

      const templateMessage = {
          nombre, email, asunto, mensaje
      };
      await collection.insertOne(templateMessage);

      client.close();
      res.status(200).json({
        message: 'El mensaje se envio correctamente.',
      });
    } catch (err) {
        console.log(err)
      res.status(500);
    }
  }
}


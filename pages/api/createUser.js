import axios from "axios";

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users`, req.body);
        res.status(200).json({ data: response.data });
      } catch (error) {
        res.status(500).json({ error: '內部服務器錯誤' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  
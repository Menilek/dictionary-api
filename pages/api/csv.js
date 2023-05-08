import dbConnect from "../../lib/dbConnect";
import Word from "../../models/word";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  if (method === "POST") {
      try {
        const reqWords = req.body;
        await Word.insertMany(reqWords).then(() => {
          return res.status(200).json(reqWords);
        });
      } catch (error) {
        return res.status(500).send(error.message || error);
      }
  } else if (method === "OPTIONS") {
    return res.status(200).end();
  }
}

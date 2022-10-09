import dbConnect from "../../lib/dbConnect";
import Word from "../../models/word";

const testData = [
    {
    "amharic": "megzat",
    "geez": "",
    "english": "to buy",
    "category": "verb"
    },
    {
    "amharic": "mesrat",
    "geez": "",
    "english": "to work",
    "category": "verb"
    }
]

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const reqWords = req.body.words;
        await Word.insertMany(reqWords);
        return res.status(200).json({ message: 'Successful inserted new word(s)' });
      } catch (error) {
        return res.status(500).send(error.message || error)
      }
      break
  }
}

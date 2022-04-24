import dbConnect from '../../lib/dbConnect';
const Word = require("../../models/word");

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const words = await Word.find({}, '-__v')
          .sort({ '_id': -1 });

          console.log(words);

        res.status(200).json({ success: true, data: words });
      } catch (error) {
        res.status(500).send(error.message || error)
      }
      break
  }
}

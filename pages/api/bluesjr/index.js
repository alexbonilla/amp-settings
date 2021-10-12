// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import settings from '../../../data/bluesjr';
export default function handler(req, res) {
  res.status(200).json(settings)
}

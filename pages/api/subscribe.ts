import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;

  // Here you would typically add the email to your database or mailing list
  console.log(`New subscription: ${email}`);

  res.status(200).json({ message: 'Subscription successful' });
}
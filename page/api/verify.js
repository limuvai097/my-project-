export default function handler(req, res) {
  if (req.method === 'POST') {
    const { code } = req.body;

    console.log('Received verification code:', code);

    res.status(200).send('Verification code received!');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}

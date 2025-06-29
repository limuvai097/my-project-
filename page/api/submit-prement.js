export default function handler(req, res) {
  if (req.method === 'POST') {
    const { 'bkash-number': bkashNumber, 'nagad-number': nagadNumber, uid, price } = req.body;

    console.log('=== Payment Received ===');
    console.log('UID:', uid);
    console.log('Price:', price);

    if (bkashNumber) {
      console.log('bKash Number:', bkashNumber);
      res.writeHead(302, { Location: `/verify-bkash.html?uid=${uid}&price=${price}` });
      res.end();
    } else if (nagadNumber) {
      console.log('Nagad Number:', nagadNumber);
      res.writeHead(302, { Location: `/verify-nagod.html?uid=${uid}&price=${price}` });
      res.end();
    } else {
      res.status(400).send('No payment number provided!');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
  }

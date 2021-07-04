import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const clint = await MongoClient.connect(
            'mongodb+srv://orkun:UVRrbrRBlNywzv4n@cluster0.5aoss.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
        );
        const db = clint.db();

        const meetupCollection = db.collection('meetups');

        const result = await meetupCollection.insertOne(data);
        console.log(result);
        clint.close();

        res.status(201).json({ message: 'Meetup inserted!' });
    }
}

export default handler;
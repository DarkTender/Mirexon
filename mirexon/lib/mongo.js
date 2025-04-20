import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('❌ MONGODB_URI nie je definovaný v .env súbore');
}

if (process.env.NODE_ENV === 'development') {
  // V development móde cache-ujeme spojenie (hot reload friendly)
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // V produkcii len jedno spojenie
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

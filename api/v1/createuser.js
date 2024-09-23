import { v4 as uuidv4 } from 'uuid';
import mongoose from 'mongoose';




export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { username, password } = req.body;
  
      if (!username || !password) {
        res.status(401).json({ error: "Please provide a username and password when creating a user." });
        return 1;
      }
  
      const successdata = {
        reason: "Nice, your account is being created",
        uuid: uuidv4(),
        username: username,
        password: password,
        Authkey: btoa(`${username}:${password}`)
      };
  
    
    } else { // Handle non-POST requests
      res.status(405).json({ error: { reason: 'The request type must be POST for this request.' } });
    }
  }
  
  

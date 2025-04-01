import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate input
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email address' });
      }
      
      // In a real app, you would:
      // 1. Store the message in a database
      // 2. Send an email notification
      // 3. Maybe set up a webhook to Slack or similar
      
      // For now, just return success
      res.status(200).json({ message: 'Message received successfully' });
    } catch (error) {
      console.error('Error handling contact form submission:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  // Resume download route
  app.get('/api/resume', (req: Request, res: Response) => {
    // In a real app, you would serve a real PDF file
    res.status(200).json({ message: 'Resume download endpoint' });
  });

  const httpServer = createServer(app);
  return httpServer;
}

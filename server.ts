import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Gemini API client
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // API endpoint for parts search/inquiry using Gemini
  app.post("/api/inquiry", async (req, res) => {
    try {
      const { message, customerInfo } = req.body;
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `You are an expert parts consultant at Jai Vidimta Auto Parts Center. 
        A customer named "${customerInfo || 'Valued Customer'}" is asking: "${message}".
        Please provide a professional, helpful response in both Nepali and English if possible.
        The shop specializes in:
        - Genuine spare parts for motorcycles and scooters (all companies).
        - Engine repair and servicing.
        - Oil change, brakes, and clutch service.
        - Located in Hetauda-5, Sanopokhara.
        
        Keep it concise and inviting.`,
      });

      res.json({ response: response.text });
    } catch (error: any) {
      console.error("Gemini Error:", error);
      res.status(500).json({ error: "Failed to process inquiry" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

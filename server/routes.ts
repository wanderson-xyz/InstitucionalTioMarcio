import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  school: z.string().optional(),
  neighborhood: z.string().optional(),
  message: z.string().min(1, "Mensagem é obrigatória"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      // Log the contact form submission
      console.log("Contact form submission:", {
        name: validatedData.name,
        phone: validatedData.phone,
        school: validatedData.school,
        neighborhood: validatedData.neighborhood,
        message: validatedData.message,
        timestamp: new Date().toISOString(),
      });

      // In a real application, you would:
      // 1. Save to database
      // 2. Send email notification
      // 3. Send WhatsApp message to business owner
      // 4. Add to CRM system

      res.json({ 
        success: true, 
        message: "Mensagem recebida com sucesso! Entraremos em contato em breve." 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Dados inválidos", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Erro interno do servidor" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

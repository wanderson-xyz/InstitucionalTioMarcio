import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  school: z.string().optional(),
  neighborhood: z.string().optional(),
  message: z.string().min(1, "Mensagem é obrigatória"),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Método não permitido" });
  }

  try {
    const validatedData = contactSchema.parse(req.body);

    // Log semelhante ao que já existe
    console.log("Contact form submission:", {
      name: validatedData.name,
      phone: validatedData.phone,
      school: validatedData.school,
      neighborhood: validatedData.neighborhood,
      message: validatedData.message,
      timestamp: new Date().toISOString(),
    });

    return res.status(200).json({
      success: true,
      message: "Mensagem enviada com sucesso",
    });
  } catch (error: any) {
    if (error?.name === "ZodError") {
      return res.status(400).json({
        success: false,
        message: "Erro de validação",
        errors: error.errors,
      });
    }
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Erro interno do servidor",
    });
  }
}
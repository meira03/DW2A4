import express from 'express';
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedback-repositories";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";


export const routes = express.Router();

routes.post('/feedbacks', async (req,res) => {
    const { type, comment, screenshot } = req.body;

    const nodemailerMailAdapter = new NodemailerMailAdapter();

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nodemailerMailAdapter
    );

    await submitFeedbackUseCase.execute({ 
        type,
        comment,
        screenshot
    });

    
    
    
    
    
    
    
    
    
    
    

    console.log(req.body);
    return res.status(201).send();
});
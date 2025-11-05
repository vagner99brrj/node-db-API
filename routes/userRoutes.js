import express from 'express';
import { PrismaClient } from '@prisma/client/extension';

const prisma = new PrismaClient();
const routes = express.Router();

router.post('/', async (req, res) => {
    
    try {
        await prisma.user.create({
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age
            }
        });
        res.status(201).json({ message: 'Usuário criado com sucesso!' });
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        res.status(500).json({ error: "Erro ao criar usuário no banco de dados." });
    }
});

// ROTA DE LISTAGEM DE USUÁRIOS
router.get('/', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users); 
    } catch (error) {
        console.error("Erro ao listar usuários:", error);
        res.status(500).json({ error: "Erro ao buscar usuários no banco de dados." });
    }
});

// ROTA DE EDIÇÃO DE USUÁRIO 
router.put('/', async (req, res) => {
    const { id } = req.params; 
    const { email, name, age } = req.body; 

    
    const dataToUpdate = {};
    if (email !== undefined) dataToUpdate.email = email;
    if (name !== undefined) dataToUpdate.name = name;
    if (age !== undefined) dataToUpdate.age = age;

    
    if (Object.keys(dataToUpdate).length === 0) {
        return res.status(400).json({ error: "Nenhum dado válido fornecido para atualização." });
    }

    try {
        const updatedUser = await prisma.user.update({
            where: {
                id: id, 
            },
            data: dataToUpdate,
        });

        res.status(200).json(updatedUser); 

    } catch (error) {
        console.error("Erro ao editar usuário:", error);
         
        if (error.code === 'P2025') {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }
        
       
        res.status(500).json({ error: "Erro ao editar usuário no banco de dados." });
    }
});

// ROTA DE EXCLUSÃO DE USUÁRIO 
router.delete('/:id', async (req, res) => {
    const { id } = req.params; 

    try {
        await prisma.user.delete({
            where: {
                id: id, 
            },
        });

      
        res.status(204).send(); 

    } catch (error) {
        console.error("Erro ao deletar usuário:", error);
        
        
        if (error.code === 'P2025') {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }
        
       
        res.status(500).json({ error: "Erro ao deletar usuário no banco de dados." });
    }
});

export default router;
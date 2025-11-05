import express from 'express';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = 9000; 

app.use(express.json());

app.use('/usuarios', userRoutes);

// ROTA DE CRIAÇÃO DE USUÁRIO



function main() { 
    try {
        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("ERRO FATAL NA INICIALIZAÇÃO:", error); 
        process.exit(1);
    }
}

main(); // Chamar a função principal


// server.js

// Importando o módulo Express
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Dados fictícios para simular uma lista de usuários
const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Mike Johnson' },
];

// Rota GET para obter todos os usuários
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Rota GET para obter um usuário específico pelo ID
app.get('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);

    if (!user) {
        return res.status(404).send('User not found');
    }

    res.json(user);
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
app.use(express.json());
// Rota PUT para atualizar um usuário pelo ID
app.put('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const { name } = req.body;

    // Encontrar o usuário pelo ID
    const user = users.find(user => user.id === userId);

    // Se o usuário não existir, retornar um erro 404
    if (!user) {
        return res.status(404).send('User not found');
    }

    // Atualizar o nome do usuário com os dados fornecidos na requisição
    user.name = name;

    res.json(user);
});
// Habilita o parsing de JSON para requisições com corpo
app.use(express.json());

// Rota DELETE para excluir um usuário pelo ID
app.delete('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);

    // Encontrar o índice do usuário no array de usuários
    const index = users.findIndex(user => user.id === userId);

    // Se o usuário não existir, retornar um erro 404
    if (index === -1) {
        return res.status(404).send('User not found');
    }

    // Remover o usuário do array de usuários
    users.splice(index, 1);


    res.send('User deleted successfully');
});
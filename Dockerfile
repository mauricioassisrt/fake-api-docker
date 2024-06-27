FROM node:16

# Cria e define o diretório de trabalho dentro do contêiner
WORKDIR /usr/html/

# Copia o arquivo package.json e package-lock.json para o diretório de trabalho
COPY html/package*.json ./

# Instala as dependências da aplicação
RUN npm install

# Copia todo o conteúdo do diretório local 'html' para dentro do contêiner em /usr/html/
COPY html .

#especifica a porta 
ENV PORT=3000

# Comando para executar a aplicação
CMD [ "node", "server.js" ]

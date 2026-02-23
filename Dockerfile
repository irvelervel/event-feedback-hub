# Usa l'immagine di Node.js ufficiale come base
FROM node:18-slim

# Imposta la cartella di lavoro all'interno del container
WORKDIR /usr/src/app

# Copia il package.json e il package-lock.json per installare le dipendenze
COPY package*.json ./

# Installa le dipendenze
RUN npm install

# Copia il resto del codice dell'applicazione nel container
COPY dist ./dist

ENV URL=https://mywebsite.org
ENV PORT=4000

# Espone la porta su cui l'applicazione ascolta (modifica in base alla configurazione della tua app)
EXPOSE 4000

# Comando per avviare l'applicazione Fastify
# CMD ["ls"]
CMD ["npm", "start"]
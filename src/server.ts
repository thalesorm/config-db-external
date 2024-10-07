import { config } from 'dotenv';
import app from './app';

config();
const PORT: number = parseInt(process.env.PORT as string, 10) || 3010;

app.listen(PORT, () => {
    console.info(`Server is running on port ${PORT}`);
});

// Configuração do servidor HTTPS


import express, { NextFunction, Response, Request, Express } from 'express';
import helmet from 'helmet';
// import cors from 'cors';

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
// app.use(cors());

app.use((request: Request, response: Response, next: NextFunction) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', '*');
    response.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    response.setHeader("Content-Security-Policy", "frame-ancestors *;");
    next();
});

// const baseUrl = '/api/v1';


app.get('/', (req: Request, res: Response) => {
    res.send('Servidor está rodando!');
});


export default app;

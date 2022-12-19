import app from './app';
import http from 'http';

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
export default server;

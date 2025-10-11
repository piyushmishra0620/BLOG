const server = require('./app');
require('dotenv').config();
const port = process.env.PORT || 3000;

server.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);
});

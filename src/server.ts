import express from "express";

import routes from "./routes";

const server = express();

server.listen(5000);

server.use(routes);

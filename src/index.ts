import createServer from "./utils";

const app = createServer();
const port = 5000;

app.listen(port, () => console.log(`server running at ${port}`));

export default app;

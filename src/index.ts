import 'dotenv/config'
import createServer from "./utils";

const app = createServer();
const port = process.env.PORT;

app.listen(port, () => console.log(`server running at ${port}`));

export default app;

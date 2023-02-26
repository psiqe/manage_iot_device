import app from "./app";
import Loaders from "./loaders";


Loaders.start()
const PORT = 3333
app.listen(PORT, () => console.log(`Running around the world saying hello, through port ${PORT}!`))
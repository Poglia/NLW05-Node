import {http} from "./http";
import "./websocket/client"

http.listen(3333, () => console.log("Servers is runing on port 3333"));
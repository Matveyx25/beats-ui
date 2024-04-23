import { setAuthToken } from "helpers/tokens";
import { Routes } from "./routes";

function App() {
	const token = localStorage.getItem("token");
	if(token) {
		setAuthToken(token);
	}

  return <Routes/>;
}

export default App;

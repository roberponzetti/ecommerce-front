import "./App.css";
import { RoutesComponent } from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    
    <div className="App">
      <Provider store={store}>
        <RoutesComponent />
      </Provider>
    </div>
  );
}

export default App;

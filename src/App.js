import "./App.css";
import { RoutesComponent } from "./routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import './style.reset.css'

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <ToastContainer limit={20} />
        <RoutesComponent />
      </Provider>
    </div>
  );

}

export default App;

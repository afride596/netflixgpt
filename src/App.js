import { Provider } from "react-redux";
import Body from "./components/Body";
import appstore from "./utils/appstore";

function App() {
  return (
    <div className="m-0 p-0">
      <Provider store={ appstore }>
        <Body />
      </Provider>
    </div>
  );
}

export default App;

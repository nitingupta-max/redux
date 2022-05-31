import "./App.css";
import axios from "axios";
import Data from "./data";
import { useDispatch } from "react-redux";
import { storeEven } from "../src/action/index";

function App() {
  let number;
  const dispatch = useDispatch();

  let res;
  const callApi = async () => {
    const url = "https://hirebus-backend.herokuapp.com/getData";
    res = await axios.post(url).then((result) => result.data);

    number = res.number;
  };

  return (
    <div>
      <div className="head">
        <h1> BooksApp Assessment Task </h1>
      </div>
      <button
        className="btn"
        onClick={() => {
          callApi();
          if (number % 2 === 0) dispatch(storeEven(res));
        }}
      >
        Refresh
      </button>
      <Data />
    </div>
  );
}

export default App;

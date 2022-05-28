import logo from "./logo.svg";
import "./App.css";
import {useAppSelector, useAppDispatch} from "./hooks/hooks";
import {incremented, amountAdded} from "./redux/features/counterSlice";
import PostsList from "./posts/PostsList";
import AddPostForm from "./posts/AddPostForm";

function App() {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo" className="App-logo" src={logo} />
        <p>Hello Vite + React!</p>
        <button type="button" onClick={() => dispatch(incremented())}>
          Increment 1
        </button>
        <button type="button" onClick={() => dispatch(amountAdded(3))}>
          Increment 3
        </button>

        <p>{value}</p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vite Docs
          </a>
        </p>
      </header>
      <PostsList />
      <AddPostForm />
    </div>
  );
}

export default App;

import "./App.css";
import PostsList from "./posts/PostsList";
import AddPostForm from "./posts/AddPostForm";
import {Home} from "./components/Home";
import {Counter} from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Home />
      <PostsList />
      <AddPostForm />
      <Counter />
    </div>
  );
}

export default App;

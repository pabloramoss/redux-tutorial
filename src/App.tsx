import "./App.css";
import PostsList from "./posts/PostsList";
import AddPostForm from "./posts/AddPostForm";
import {Home} from "./components/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <PostsList />
      <AddPostForm />
    </div>
  );
}

export default App;

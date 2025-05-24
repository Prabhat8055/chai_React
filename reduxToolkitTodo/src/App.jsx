import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="text-3xl font-semibold text-center p-10" >Write Your TODO's</h1>
      <AddTodo />
      <Todos/>
    </>
  );
}

export default App;

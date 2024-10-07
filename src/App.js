import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./pages/Main";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <main className="p-4 md:p-32">
        <Main />
      </main>
    </div>
  );
};

export default App;

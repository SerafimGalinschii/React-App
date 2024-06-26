import Like from "./components/Like";

function App() {
  return (
    <div>
      <Like onClick={() => console.log("Cliked")} />
    </div>
  );
}

export default App;

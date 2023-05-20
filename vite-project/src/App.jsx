import "./App.css";
import Home from "./component/Home";

function App() {
  return (
    <div>
      <div
        className="card shadow-lg p-3 mb-5 bg-body rounded"
        style={{ width: "30rem" }}
      >
        <div className="card-body">
          <h5 className="text-primary mb-3">
            Simple Props Rendering and Adding
          </h5>
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;

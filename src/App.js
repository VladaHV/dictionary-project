// import logo from "./animation.gif";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="mt-5 container">
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a href="https://gregarious-figolla-9cbc1d.netlify.app/">
              Vlada Honchar
            </a>{" "}
            and is open-sourced on{" "}
            <a href="https://github.com/VladaHV/dictionary-project">GitHub</a>
          </small>
        </footer>
      </div>
    </div>
  );
}

// import Copy from "./components/Event";
// import Button from "./components/Event";
import Move from "./components/Event";
import Footer from "./components/Footer";
import Icons from "./components/Icons";
import Navbar from "./components/Navbar";
import Something from "./components/Something";
import Welcome from "./components/Welcom";

const App = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: "40px", minHeight: "70vh" }}>
        <h1>Welcome To MyReactApp</h1>
        <p>This is your React masterclass playground🚀</p>
      </div>

      <h3>1. JSX Rules:</h3>

      <ol>
        <li>Return a single root element</li>
        <li>
          To return multiple elements from a component, wrap them with a single
          parent tag
        </li>
      </ol>

      <h1>https://react-icons.github.io/react-icons</h1>

      <Welcome name="React Masterclass" />
      <Welcome name="JavaScript Masterclass " />

      <Something />

      <Icons />

      {/* <Button /> */}
      {/* <Copy /> */}
      <Move />

      <Footer />
    </>
  );
};

export default App;

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: "40px", minHeight: "70vh" }}>
        <h1>Welcome To MyReactApp</h1>
        <p>This is your React masterclass playground🚀</p>
      </div>

      <Footer />
    </>
  );
};

export default App;

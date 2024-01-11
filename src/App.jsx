import ReactDOM from "react-dom";

import BajrangBan from "./components/BajrangBan.jsx";
import Banner from "./components/Banner.jsx";
import Chalisa from "./components/Chalisa.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

import "./App.css";

function App() {
  function renderApp(component, str) {
    ReactDOM.render(component, document.getElementById("workspace"));
  }

  return (
    <>
      <Header />
      <Banner />
      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4"
        onClick={() => renderApp(<Chalisa />)}
      >
        Hanuman-Chalisa
      </button>
      <button
        className="ml-2 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4"
        onClick={() => renderApp(<BajrangBan />)}
      >
        Bajrang-Ban
      </button>

      <div className="my-8 text-center" id="workspace">
        <Chalisa />
      </div>

      <div className="py-8 flex justify-center">
        <iframe
          style={{ width: "60%", height: "500px" }}
          src="https://www.youtube.com/embed/dXl2NdlmeIE?si=yHJd5PCcdoFi-07p&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <Footer />
    </>
  );
}

export default App;

import ReactDOM from "react-dom";

import BajrangBan from "./components/Literature/BajrangBan.jsx";
import Chalisa from "./components/Literature/Chalisa.jsx";
import HanumanAarti from "./components/Literature/Hanuman-Aarti.jsx";
import HanumanAstak from "./components/Literature/HanumanAstak.jsx";

import Banner from "./components/Banner.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

import Gallery from "./components/Gallery.jsx";

import "./App.css";

function App() {
  function renderApp(component, str) {
    ReactDOM.render(component, document.getElementById("workspace"));
  }

  return (
    <>
      <Header />
      <Banner />
      <Gallery />

      <div className="mx-32 flex justify-center bg-orange-500 sm:mx-8 sm:grid sm:grid-cols-2">
        <button
          className="px-4 py-2 text-white hover:bg-orange-700"
          onClick={() => renderApp(<BajrangBan />)}
        >
          Bajrang-Ban
        </button>
        <button
          className="px-4 py-2 text-white hover:bg-orange-700"
          onClick={() => renderApp(<Chalisa />)}
        >
          Hanuman-Chalisa
        </button>
        <button
          className="px-4 py-2 text-white hover:bg-orange-700"
          onClick={() => renderApp(<HanumanAarti />)}
        >
          Hanuman-Aarti
        </button>
        <button
          className="px-4 py-2 text-white hover:bg-orange-700"
          onClick={() => renderApp(<HanumanAstak />)}
        >
          Hanuman-Astak
        </button>
      </div>

      <div className="my-8 text-center sm:px-8" id="workspace">
        <Chalisa />
      </div>

      <div className="flex justify-center py-8">
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

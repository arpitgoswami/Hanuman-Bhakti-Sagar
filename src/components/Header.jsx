import ".././App.css";

function Header() {
  return (
    <>
      <div
        className="grid grid-cols-5 gap-0 devanagri sm:grid-cols-1"
        style={{ backgroundColor: "#FF6100" }}
      >
        <div className="mx-20 py-20 col-span-3 sm:mx-4 sm:py-2">
          <div className="text-white font-semibold text-xl">हनुमान जी</div>
          <div
            className="mt-36 text-white font-semibold"
            style={{ fontSize: "5rem" }}
          >
            ॥ ॐ हं हनुमते नमः ॥
          </div>
          <div
            className="mt-2 text-white font-semibold text-xl"
            style={{ width: "70%" }}
          >
            जय जय जय बजरंग बली एक भारतीय पौराणिक टेलीविजन श्रृंखला है, जिसका
            प्रीमियर 6 जून 2011 को सहारा वन पर हुआ था ।
          </div>
          <div className="mt-2 text-white font-semibold text-xl">
            <a href="https://google.com">जाने रामचरितमानस में</a>
          </div>

          <div className="mt-36 text-white font-semibold text-xl">
            <div className="flex space-x-14">
              <a href="">राम भक्त</a>
              <a href="">हनुमान</a>
              <a href="">केसरी नंदन</a>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex justify-center">
          <img
            className="inline-block align-middle"
            src="./main.png"
            style={{
              height: "80%",
              width: "auto",
              marginTop: "auto",
              marginBottom: "auto",
              filter: "drop-shadow(5px 5px 5px #222)",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Header;

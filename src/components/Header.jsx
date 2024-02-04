import ".././App.css";
import "boxicons";

function Header() {
  return (
    <>
      <div
        className="grid grid-cols-5 gap-0 devanagri sm:grid-cols-1"
        style={{
          background:
            "linear-gradient(45deg, rgba(199,77,3,1) 0%, rgba(255,97,0,1) 50%, rgba(199,77,3,1) 100%)",
        }}
      >
        <div className="mx-20 py-20 col-span-3 sm:mx-4 sm:py-4">
          <div className="text-white font-semibold text-xl sm:text-lg flex justify-between">
            <span>हनुमान जी</span>
          </div>
          <div className="mt-36 text-white font-semibold header-font">
            ॥ ॐ हं हनुमते नमः ॥
          </div>
          <div className="text-white font-semibold  header-width text-xl sm:text-lg">
            जय जय जय बजरंग बली एक भारतीय पौराणिक टेलीविजन श्रृंखला है, जिसका
            प्रीमियर 6 जून 2011 को सहारा वन पर हुआ था ।
          </div>
          <div className="mt-2 text-xl sm:text-base text-white font-semibold">
            <a href="https://google.com">
              जाने रामचरितमानस में{" "}
              <box-icon
                name="right-arrow"
                type="solid"
                animation="tada-hover"
                size="xs"
              />
            </a>
          </div>
          <div className="mt-36 text-xl sm:text-lg text-white font-semibold">
            <div className="flex space-x-14">
              <a href="">राम भक्त</a>
              <a href="">हनुमान</a>
              <a href="">केसरी नंदन</a>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex justify-center">
          <img
            className="inline-block align-middle header-img"
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

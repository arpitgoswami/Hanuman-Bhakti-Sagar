import ReactDOM from "react";
import First from "./First.jsx";
import "./App.css";

function App() {
  function renderApp(component, str) {
    ReactDOM.render(component, document.getElementById("workspace"));
  }

  return (
    <>
      <div className="p-4" style={{ backgroundColor: "#EF4036" }}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Bala Ji Maharaj</div>
          <div className="flex space-x-4">
            <div>
              <a href="#" className="text-white hover:underline">
                Home
              </a>
            </div>
            <div>
              <a href="#" className="text-white hover:underline">
                About
              </a>
            </div>
            <div>
              <a href="#" className="text-white hover:underline">
                Gallery
              </a>
            </div>
            <div>
              <a href="#" className="text-white hover:underline">
                Prayers
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="banner">
        <img src="./balaji-banner.jpg" alt="" />
      </div>

      <div className="py-8 px-16 text-center">
        <div className="font-semibold text-4xl inkut-font">|| दोहा ||</div>
        <div className="py-4 font-medium inkut-font">
          || श्रीगुरु चरन सरोज रज, निजमन मुकुरु सुधारि। बरनउं रघुबर बिमल जसु, जो
          दायक फल चारि ||
          <br />
          || बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार। बल बुधि बिद्या देहु मोहिं,
          हरहु कलेस बिकार ||
        </div>

        <div className="pt-4 font-semibold text-4xl inkut-font">
          || चौपाई ||
        </div>
        <div className="py-4 font-medium inkut-font">
          जय हनुमान ज्ञान गुन सागर। जय कपीस तिहुं लोक उजागर।।
          <br />
          राम दूत अतुलित बल धामा। अंजनि-पुत्र पवनसुत नामा।।
          <br />
          महाबीर बिक्रम बजरंगी। कुमति निवार सुमति के संगी।।
          <br />
          कंचन बरन बिराज सुबेसा। कानन कुण्डल कुँचित केसा।।
          <br />
          हाथ बज्र औ ध्वजा बिराजे। कांधे मूंज जनेउ साजे।।
          <br />
          शंकर सुवन केसरी नंदन। तेज प्रताप महा जग वंदन।।
          <br />
          बिद्यावान गुनी अति चातुर। राम काज करिबे को आतुर।।
          <br />
          प्रभु चरित्र सुनिबे को रसिया। राम लखन सीता मन बसिया।।
          <br />
          सूक्ष्म रूप धरि सियहिं दिखावा। बिकट रूप धरि लंक जरावा।।
          <br />
          भीम रूप धरि असुर संहारे। रामचन्द्र के काज संवारे।।
          <br />
          लाय सजीवन लखन जियाये। श्री रघुबीर हरषि उर लाये।।
          <br />
          रघुपति कीन्ही बहुत बड़ाई। तुम मम प्रिय भरतहि सम भाई।।
          <br />
          सहस बदन तुम्हरो जस गावैं। अस कहि श्रीपति कण्ठ लगावैं।।
          <br />
          सनकादिक ब्रह्मादि मुनीसा। नारद सारद सहित अहीसा।।
          <br />
          जम कुबेर दिगपाल जहां ते। कबि कोबिद कहि सके कहां ते।।
          <br />
          तुम उपकार सुग्रीवहिं कीन्हा। राम मिलाय राज पद दीन्हा।।
          <br />
          तुम्हरो मंत्र बिभीषन माना। लंकेश्वर भए सब जग जाना।।
          <br />
          जुग सहस्र जोजन पर भानु। लील्यो ताहि मधुर फल जानू।।
          <br />
          प्रभु मुद्रिका मेलि मुख माहीं। जलधि लांघि गये अचरज नाहीं।।
          <br />
          दुर्गम काज जगत के जेते। सुगम अनुग्रह तुम्हरे तेते।।
          <br />
          राम दुआरे तुम रखवारे। होत न आज्ञा बिनु पैसारे।।
          <br />
          सब सुख लहै तुम्हारी सरना। तुम रच्छक काहू को डर ना।।
          <br />
          आपन तेज सम्हारो आपै। तीनों लोक हांक तें कांपै।।
          <br />
          भूत पिसाच निकट नहिं आवै। महाबीर जब नाम सुनावै।।
          <br />
          नासै रोग हरे सब पीरा। जपत निरन्तर हनुमत बीरा।।
          <br />
          संकट तें हनुमान छुड़ावै। मन क्रम बचन ध्यान जो लावै।।
          <br />
          सब पर राम तपस्वी राजा। तिन के काज सकल तुम साजा।।
          <br />
          और मनोरथ जो कोई लावै। सोई अमित जीवन फल पावै।।
          <br />
          चारों जुग परताप तुम्हारा। है परसिद्ध जगत उजियारा।।
          <br />
          साधु संत के तुम रखवारे।। असुर निकन्दन राम दुलारे।।
          <br />
          अष्टसिद्धि नौ निधि के दाता। अस बर दीन जानकी माता।।
          <br />
          राम रसायन तुम्हरे पासा। सदा रहो रघुपति के दासा।।
          <br />
          तुह्मरे भजन राम को पावै। जनम जनम के दुख बिसरावै।।
          <br />
          अंत काल रघुबर पुर जाई। जहां जन्म हरिभक्त कहाई।।
          <br />
          और देवता चित्त न धरई। हनुमत सेइ सर्ब सुख करई।।
          <br />
          सङ्कट कटै मिटै सब पीरा। जो सुमिरै हनुमत बलबीरा।।
          <br />
          जय जय जय हनुमान गोसाईं। कृपा करहु गुरुदेव की नाईं।।
          <br />
          जो सत बार पाठ कर कोई। छूटहि बन्दि महा सुख होई।।
          <br />
          जो यह पढ़ै हनुमान चालीसा। होय सिद्धि साखी गौरीसा।।
          <br />
          तुलसीदास सदा हरि चेरा। कीजै नाथ हृदय महं डेरा।।
        </div>

        <div className="pt-4 font-semibold text-4xl inkut-font">|| दोहा ||</div>
        <div className="pt-4 font-medium inkut-font">
          | पवनतनय संकट हरन, मंगल मूरति रूप |
          <br />
          || राम लखन सीता सहित, हृदय बसहु सुर भूप ||
        </div>
      </div>

      <div
        className="py-4 text-center text-white"
        style={{ backgroundColor: "#EF4036" }}
      >
        || Jai Shree Ram ||
      </div>

      <button onClick={() => renderApp(<First />)}>Click Me</button>

      <div id="workspace"></div>
    </>
  );
}

export default App;

import "./App.css";
import logo from "./assets/logo.png";
import im from "./assets/img.png";

function App() {
  return (
    <>
      <div className="bg-[rgb(18,18,18)] min-h-screen text-white">
        <nav className="flex flex-col sm:flex-row p-5 sm:p-10">
          <div className="mb-4 sm:mb-0">
            <img src={logo} alt="tedx_logo" className="w-[20vh] sm:w-[35vh]" />
          </div>
          <div className="hidden sm:block">
            <p className="text-red-600 text-xl sm:text-xl text-center sm:pt-5 sm:pr-10">
              KRONOSPECT
            </p>
          </div>
        </nav>

        <main className="flex flex-col items-center w-[90%] sm:w-[60%] mx-auto text-center">
          <div className="pt-8 text-3xl sm:text-4xl">
            <span className="text-5xl sm:text-6xl">
              KRONO<span className="text-red-600">SPECT</span>
            </span>{" "}
            <br />
            Where Time Meets Perspective
          </div>

          <br /><br />

          <div className="text-xl">TEDXSIDDAGANGA INSTITUTE OF TECHNOLOGY Presents:</div>

          <div className="text-[2.7rem] sm:text-[5rem] flex justify-center mt-5 sm:mt-10">
            <span className="text-red-600">Tag</span>Xplore
          </div>

          <div className="text-base sm:text-xl mt-4 sm:m-7 text-justify">
          

Here’s how it works:  <br />

1️⃣ Find the QR codes in the props placed at AD and GJCB. <br />
2️⃣ Scan them to uncover the questions.  <br />
3️⃣ Share a photo of the answer on Instagram and tag us @tedxsiddaganga.   <br /><br />

🎁 Stand a chance to win amazing prizes! <br />

For more details, click here: <a className="text-blue-400" href="https://qr-codes.io/TohuPa">https://qr-codes.io/TohuPa</a>
<br /><br />
Get ready to explore, tag, and win! 🌟
          </div>
        </main>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 items-center sm:ml-36 py-10 px-4">
          <div className="p-8 h-fit sm:h-fit w-full sm:w-[30%] bg-white text-black text-lg">
            <span className="text-3xl">I</span>n a realm where stones and steel are framed, I stand untouched, yet
            widely acclaimed. Amidst drafts and plans for earthly design, I hold
            a flute, with grace divine. Though numbers and angles define this
            place, I whisper of love, devotion, and grace. Who am I, whose
            presence so still, Uplifts the heart, bends time to my will?
          </div>
          <div className="p-8 h-fit w-full sm:w-[30%] bg-white">
            <img src={im} />
          </div>
          <div className="p-8 h-fit sm:h-fit w-full sm:w-[30%] bg-white text-black text-lg">
          <span className="text-3xl">I</span> carry no books, no desks in sight, Yet I connect with speed and
            might. Words on paper, parcels in hand, I bridge the gap across the
            land. A quiet corner, yet bustling with care, Where letters and
            stamps fill the air. In this college, I stand with pride, What am I,
            where messages reside?
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

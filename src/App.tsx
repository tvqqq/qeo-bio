import avatar from "/avatar.jpg";
import qeoqeo from "./assets/qeoqeo-symbol.svg";
import qrCode from "./assets/qr-code.svg";
import Social from "./components/Social";
import facebookLogo from "./assets/social/facebook.svg";
import instagramLogo from "./assets/social/instagram.svg";
import twitterLogo from "./assets/social/twitter.svg";
import tiktokLogo from "./assets/social/tiktok.svg";
import linkedinLogo from "./assets/social/linkedin.svg";
import telegramLogo from "./assets/social/telegram.svg";
import githubLogo from "./assets/social/github.svg";
import Link from "./components/Link";
import quyenPaymentLogo from "./assets/link/quyen-payment-logo.png";
import qeoCgv from "./assets/link/qeo-cgv.png";

function App() {
  return (
    <>
      <div className="overflow-hidden bg-hero-dark bg-cover bg-right-top min-h-screen">
        <div className="container mx-auto px-4 py-10 w-full lg:w-1/2 flex flex-col items-center">
          <div className="image">
            <div className="image-container">
              <div className="image-bg"></div>
              <img
                className="w-40 p-1 rounded-full ring-2 ring-gray-100 image-src"
                src={avatar}
                alt="Quyen Tat avatar"
              />
            </div>
          </div>
          <h1 className="mt-5 font-extrabold text-4xl lg:text-5xl tracking-tight text-center text-white">
            <span className="tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-indigo-200">
              Quyen Tat
            </span>
          </h1>
          <h2 className="mt-2 mb-4">
            <span className="tracking-wide text-gray-200 font-semibold text-xl">
              #QeoQeo #TVQ
            </span>
          </h2>
          <h3>
            <span className="font-bold text-sm mr-2 px-2.5 py-1 rounded bg-gray-900 text-gray-200 border border-gray-400">
              Software Engineer
            </span>
            <span className="font-bold text-sm mr-2 px-2.5 py-1 rounded bg-gray-900 text-gray-200 border border-gray-400">
              Solopreneur
            </span>
          </h3>

          <ul className="flex flex-wrap items-center justify-center my-8">
            <Social
              name="Facebook"
              logo={facebookLogo}
              url={"https://www.facebook.com/tvqqq"}
            ></Social>
            <Social
              name="Instagram"
              logo={instagramLogo}
              url={"https://www.instagram.com/tvq9612"}
            ></Social>
            <Social
              name="Twitter"
              logo={twitterLogo}
              url={"https://twitter.com/tvq9612"}
            ></Social>
            <Social
              name="TikTok"
              logo={tiktokLogo}
              url={"https://www.tiktok.com/@tvq9612"}
            ></Social>
            <Social
              name="GitHub"
              logo={githubLogo}
              url={"https://github.com/tvqqq"}
            ></Social>
            <Social
              name="LinkedIn"
              logo={linkedinLogo}
              url={"https://www.linkedin.com/in/tvq/"}
            ></Social>
            <Social
              name="Telegram"
              logo={telegramLogo}
              url={"https://t.me/tvq9612"}
            ></Social>
          </ul>

          <div className="w-full md:w-2/3 2xl:w-1/2 px-5">
            <Link
              title="Quyen Payment"
              url="https://pay.qeoqeo.com"
              image={quyenPaymentLogo}
            />
            <Link
              title="Book vé CGV"
              url="https://cgv.qeoqeo.com"
              image={qeoCgv}
            />
          </div>

          <hr className="w-20 h-0.5 mx-auto mt-10 mb-5 bg-gray-300 border-0 rounded-full"></hr>
          <button
            data-modal-target="defaultModal"
            data-modal-toggle="defaultModal"
            className="flex items-center relative"
            type="button"
          >
            <img
              className="w-14 opacity-50 hover:opacity-100"
              src={qeoqeo}
              alt="QeoQeo"
            />
          </button>
        </div>
      </div>

      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full md:w-2/3 max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                QR qeoqeo.com
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <img className="w-full" src={qrCode} alt="QR qeoqeo.com" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

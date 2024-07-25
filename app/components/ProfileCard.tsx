import starsIcon from "/stars_icon.svg";
import heartIcon from "/heart_icon.svg";
import androidIcon from "/android_icon.svg";
import windowsLogo from "/windows_logo.svg";
import appleLogo from "/apple_logo.svg";
import cardImage13 from "/card_image13.png";
import cardImage14 from "/card_image14.png";

import panelData from "../devLogsData.json";
const patchNotes = panelData.patchNotes;

interface Panel {
  id: number;
  version: string;
  author: string;
  publishedType: string;
  publishedTime: string;
  updateDescription: string;
  detailedDescription: string;
  tags?: boolean;
  image: string;
  profileImage: string;
  update?: boolean;
  downloadSection?: boolean;
  buttonText: string;
  isCollection?: boolean;
  isRegular?: boolean;
  starRating?: boolean;
}

const panels: Panel[] = patchNotes as Panel[];

export default function ProfileCard() {
  return (
    <>
      {panels.map((panel) => (
        <div
          className="relative p-10 flex flex-col bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(${panel.image})`,
          }}
        >
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"
            style={{ zIndex: 0 }}
          ></div>

          {/* Element 1 */}
          <div
            className="relative flex flex-col justify-between ml-4 mt-4 w-full"
            style={{ zIndex: 1 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-10 items-center justify-between">
                <img
                  src={panel.profileImage}
                  alt="Profile"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <h2 className="text-xl font-normal text-white">
                  {panel.author}
                </h2>
                <p className="text-grey3">{panel.publishedType}</p>
                <p className="text-grey3">{panel.publishedTime}</p>
              </div>
              <div className="flex gap-10 items-center justify-between">
                <button className="bg-lightGold text-white font-bold px-4 py-2 w-72">
                  + Follow {panel.author}
                </button>
                <img src={heartIcon} alt="Heart Icon" />
              </div>
            </div>
          </div>

          {/* Element 2 */}
          {panel.isCollection && (
            <div className="relative mt-8" style={{ zIndex: 1 }}>
              <div className="text-center text-white my-8">
                <h2 className="text-lg font-bold">A New Collection!</h2>
                <p className="font-light">A Collection Of 18,900 Items</p>
              </div>
              <div className="flex w-full">
                <div
                  className="relative w-1/2 text-white p-4 flex"
                  style={{ zIndex: 1 }}
                >
                  <div className="w-1/2">
                    <img
                      src={cardImage13}
                      alt="Landscape Simulator"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="ml-4 w-1/2">
                    <h3 className="text-lg font-bold mt-2">
                      Landscape Simulator
                    </h3>
                    <div className="bg-lightGrey bg-opacity-50 backdrop-blur-md text-white text-xs px-2 py-1 mt-2 inline-block">
                      Ksh. 600
                    </div>
                    <p className="mt-2 text-sm">
                      The third installment of the popular simulator coming to
                      PC
                    </p>
                    <div className="flex gap-2 mt-2 text-sm">
                      <span className="text-gold">#FirstPersonShooter</span>
                      <span className="text-gold">#3D</span>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <img src={windowsLogo} alt="Icon 1" />
                      <img src={appleLogo} alt="Icon 2" />
                    </div>
                  </div>
                </div>
                <div
                  className="relative w-1/2 text-white p-4 flex"
                  style={{ zIndex: 1 }}
                >
                  <div className="w-1/2">
                    <img
                      src={cardImage14}
                      alt="DIABLO IV"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="ml-4 w-1/2">
                    <h3 className="text-lg font-bold mt-2">DIABLO IV</h3>
                    <div className="bg-lightGrey text-xs bg-opacity-50 backdrop-blur-md text-white px-2 py-1 mt-2 inline-block">
                      Ksh. 3K
                    </div>
                    <p className="mt-2 text-sm">
                      The most popular MMO on Jiwe.io. You can get it now and
                      enjoy it with your friends and family
                    </p>
                    <div className="flex gap-2 mt-2 text-sm">
                      <span className="text-gold">#MMO</span>
                      <span className="text-gold">#3D</span>
                    </div>

                    <img src={windowsLogo} alt="Icon 1" className="mt-2" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Element 3 */}
          {panel.isRegular && (
            <div className="relative flex mt-8" style={{ zIndex: 1 }}>
              <div className="w-1/2 pr-4">
                <img
                  src={panel.image}
                  alt="Monkey Island"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="w-1/2 pl-4 flex flex-col items-start text-darkWhite">
                <h3 className="text-2xl font-bold mb-2">{panel.version}</h3>

                <p className="mb-4">{panel.updateDescription}</p>
                {panel.starRating && (
                  <img
                    src={starsIcon}
                    alt="Star Ratings"
                    className="w-40 h-auto mb-4"
                  />
                )}

                <p className="mb-4">{panel.detailedDescription}</p>
                {panel.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-gold">#FirstPersonShooter</span>
                    <span className="text-gold">#3D</span>
                    <span className="text-gold">#Multiplayer</span>
                    <span className="text-gold">#Action</span>
                    <span className="text-gold">#TwoPlayer</span>
                  </div>
                )}
                {panel.update && <p className="mb-4">1 New Update</p>}
                {panel.downloadSection && (
                  <div className="text-white border border-white p-4 flex flex-col gap-1 mb-4">
                    <p className="text-sm">
                      black-island-simulator-android-quest.zip
                    </p>
                    <div className="flex items-center gap-1">
                      <img
                        src={androidIcon}
                        alt="File Icon"
                        className="w-4 h-4"
                      />
                      <p className="text-sm">763 MB</p>
                    </div>
                    <p className="text-sm">VERSION 0.5.1</p>
                  </div>
                )}
                <button className="bg-orange w-56 text-white font-bold px-6 py-2">
                  {panel.buttonText}
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

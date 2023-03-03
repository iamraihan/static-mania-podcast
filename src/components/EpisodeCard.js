import { useState } from "react";
import playIcon from "../assets/images/episodes/play-icon.svg";

const EpisodeCard = ({ episode }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className="mb-8">
        <img className="w-full" src={episode?.photos} alt="" />
      </div>
      <h3 className="heading-3 mb-4">{episode?.title}</h3>
      <p className="body-text mb-4">
        Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.
      </p>
      <div className=" flex gap-2 items-center">
        <div onClick={() => setShowModal(true)} className=" cursor-pointer">
          <img src={playIcon} alt="" />
        </div>
        {/* modal  */}
        <>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <iframe
                      width="520"
                      height="295"
                      src="https://www.youtube.com/embed/CfZ9kIK4tKU?autoplay=1"
                      title="Rick Astley - Never Gonna Give You Up (Video)"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>

                    <div className="  absolute top-[-15px] right-[-15px] bg-white rounded-full grid place-items-center px-3 py-1">
                      <button
                        className="text-xl"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>

        <p className="body-text text-primary font-semibold">List en Now</p>
      </div>
    </div>
  );
};

export default EpisodeCard;

import ty_button_play from "../public/typlayb.svg";

const PlayerCard = ({ plays, logo }) => {
  return (
    <div className="flex flex-col max-h-80 text-white mx-auto rounded-lg mt-1 md:h-48 ">
      <div className="flex items-center flex-row h-6">
        <div className="  w-1/6 img w-4 h-4 ">
          <img
            src={plays?.logo?.url}
            alt=""
            className=" w-4 h-4 bg-gray-500 flex items-center rounded-2xl"
          />
        </div>
        <div className="w-4/6">
          {" "}
          <p
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "16ch",
            }}
          >
            {" "}
            Quran is a gift from Almighty
          </p>
        </div>

        <div className="w-1/6 flex justify-end items-center ml-6">
          <img src={ty_button_play} alt="" className=" w-4 h-4  flex" />
          <p className="font-bold text-xs	pl-1">2:20</p>
        </div>
      </div>
      <div className="w-full mx-auto my-auto h-56 rounded-lg md:h-40">
        <img
          src={plays?.logo?.url}
          className=" w-full h-full overflow-hidden rounded-lg"
          alt=""
        />
      </div>
    </div>
  );
};

export default PlayerCard;

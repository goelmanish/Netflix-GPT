import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-12 absolute text-white bg-gradient-to-r from-gray">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="w-2/12 py-6">{overview}</p>
      <div>
        <button className="bg-white p-2 px-10 text-l font-bold rounded-lg text-black hover:bg-opacity-75">Play</button>
        <button className="bg-gray-700 p-2 px-10 text-l font-bold rounded-lg text-white mx-4">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle

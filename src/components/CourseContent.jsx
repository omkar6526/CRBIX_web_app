import { useState } from "react";
import { ChevronDown, ChevronUp, Lock, Play } from "lucide-react";

export default function CourseContent({ content }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [openVideo, setOpenVideo] = useState(null);

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Course content</h2>

      {content.map((day, index) => (
        <div key={index} className="border rounded-lg mb-3">
          {/* HEADER */}
          <div
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex justify-between items-center p-4 cursor-pointer bg-gray-100"
          >
            <div>
              <p className="font-semibold">{day.title}</p>
              <p className="text-sm text-gray-500">
                {day.videos.length} lectures • {day.totalTime}
              </p>
            </div>
            {openIndex === index ? <ChevronUp /> : <ChevronDown />}
          </div>

          {/* VIDEOS */}
          {openIndex === index && (
            <div className="bg-white px-4 py-3">
              {day.videos.map((video, i) => (
                <div
                  key={i}
                  onClick={() => {
                    if (!video.locked && video.videoUrl) {
                      setOpenVideo(video);
                    }
                  }}
                  className={`flex justify-between items-center py-2 border-b text-sm
    ${video.locked
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer hover:bg-gray-50"
                    }
  `}
                >
                  {/* LEFT */}
                  <div className="flex items-center gap-2">
                    {video.locked ? (
                      <Lock size={14} className="text-gray-400" />
                    ) : (
                      <Play size={14} className="text-blue-600" />
                    )}

                    <span
                      className={`${video.locked ? "text-gray-400" : "text-gray-800"
                        }`}
                    >
                      {video.name}
                    </span>

                    {!video.locked && (
                      <span className="ml-2 text-xs text-green-600 font-semibold">
                        Preview
                      </span>
                    )}
                  </div>

                  {/* RIGHT */}
                  <span className="text-gray-500">{video.time}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      {openVideo && (
  <div className="fixed inset-0 bg-black z-50">

    {/* TOP BAR */}
    <div className="h-12 flex items-center px-4 text-white bg-black">
      <button
        onClick={() => setOpenVideo(null)}
        className="font-semibold"
      >
        ← Back
      </button>

      <span className="ml-4 text-sm truncate">
        {openVideo.name}
      </span>
    </div>

    {/* VIDEO */}
    <iframe
      src={openVideo.videoUrl}
      className="w-full h-[calc(100vh-48px)]"
      allow="autoplay; fullscreen"
      allowFullScreen
    />
  </div>
)}

    </div>
    
  );
}
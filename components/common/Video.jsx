import React, { useState } from 'react';

const Video = ({ 
  title = "From Farm to You", 
  videos = [] 
}) => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0] || null);

  if (!videos || videos.length === 0) {
    return null;
  }

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#9B5AB3] font-cursive text-xl mb-2">Video</p>
          <h2 className="text-3xl md:text-4xl font-bold font-secondary text-gray-800 mb-6">
            {title}
          </h2>
        </div>

        {/* Main Video */}
        <div className="mb-8">
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-xl">
              {selectedVideo.type === 'video' ? (
                <video
                  controls
                  className="w-full h-64 md:h-96 object-cover"
                  poster={selectedVideo.thumbnail}
                >
                  <source src={selectedVideo.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="relative">
                  <img
                    src={selectedVideo.thumbnail}
                    alt={selectedVideo.title}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => window.open(selectedVideo.src, '_blank')}
                      className="w-16 h-16 bg-[#9B5AB3] rounded-full flex items-center justify-center hover:bg-[#7C4098] transition-colors"
                    >
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Video List - Only show if more than 1 video */}
        {videos.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div
                key={index}
                onClick={() => handleVideoSelect(video)}
                className={`cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 ${
                  selectedVideo === video 
                    ? 'ring-2 ring-[#9B5AB3]' 
                    : 'hover:shadow-lg'
                }`}
              >
                {/* Video Thumbnail */}
                <div className="relative h-40 bg-gray-900">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#9B5AB3] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Video Clip Label */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                      VIDEO CLIP
                    </span>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 text-base mb-2 line-clamp-2">
                    {video.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Video;
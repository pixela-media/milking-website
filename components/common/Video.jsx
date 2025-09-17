const Video = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 text-center">
      {/* Section Header */}
      <h4 className="text-[#9B5AB3] font-cursive font-extrabold text-2xl mb-2">
        Our Story
      </h4>
      <h2 className="text-3xl md:text-4xl font-bold font-secondary text-gray-800 mb-6">
        Watch the Journey of Milking
      </h2>

      {/* Responsive YouTube Embed */}
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/adzrFymkgNk"
          title="Milking Story Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;

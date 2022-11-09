import VideoListEntry from './VideoListEntry.js';

var VideoList = ({videos, updateVideo}) => {

  return (
    <div className="video-list">
      {videos.map((video) => {
        return <VideoListEntry updateVideo={updateVideo} video={video} key={video.id.videoId} />;
      })}
    </div>
  );

};

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
};

export default VideoList;

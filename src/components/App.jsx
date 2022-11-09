import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';

const App = () => {
  const [videos, setVideos] = React.useState(exampleVideoData);

  const [selectedVideo, updateVideo] = React.useState({
    link: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    title: 'Rick Astley - Never Gonna Give You Up (Official Music Video)',
    description: 'The official video for “Never Gonna Give You Up” by Rick Astley'
  });

  let timeout = null;

  const searchHandler = (e) => {
    let query = e.target.value;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      searchYouTube(query, (videos => {
        setVideos(videos);
      }));
    }, 500);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5>Search<Search searchHandler={(e) => searchHandler(e)}/></h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5>Video Player<VideoPlayer video={selectedVideo} videos={videos} /></h5></div>
        </div>
        <div className="col-md-5">
          <div><h5>Video List<VideoList updateVideo={updateVideo} videos={videos} /></h5></div>
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

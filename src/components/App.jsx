import exampleVideoData from "../data/exampleVideoData.js";
import Search from "./Search.js";
import VideoList from "./VideoList.js";
import VideoPlayer from "./VideoPlayer.js";
import YOUTUBE_API_KEY from "../config/youtube.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: exampleVideoData,//one for all of our videos && one for first video
      current: exampleVideoData[0]
    };
  }

  onTitleClick(video) {
    this.setState({
      current: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search state={this.setState.bind(this)} searchYouTube={this.props.searchYouTube} APIKey={YOUTUBE_API_KEY}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.current}/>
          </div>
          <div className="col-md-5">
            <VideoList onTitleClick={this.onTitleClick.bind(this)} videos={this.state.videos}/>
          </div>
        </div>
      </div>
    );
  };

  componentDidMount() {
    let options = {
      query: 'cat',
      max: 5,
      key: YOUTUBE_API_KEY
    }

    this.props.searchYouTube(options, videos => {
      this.setState({
        videos: videos,
        current: videos[0]
      });
    });
  };
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

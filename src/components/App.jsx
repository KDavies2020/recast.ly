import exampleVideoData from "../data/exampleVideoData.js";
import VideoList from "./VideoList.js";
import VideoPlayer from "./VideoPlayer.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: exampleVideoData[0]
    };
  }

  onTitleClick() {
    this.setState({
      current: props.video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.current}/>
          </div>
          <div className="col-md-5">
            <VideoList onClick={this.onTitleClick.bind(this)} videos={exampleVideoData}/>
          </div>
        </div>
      </div>
    );
  };

};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

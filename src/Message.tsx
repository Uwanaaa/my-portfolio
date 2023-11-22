import "./App.css";
function ListGroup() {
  const job = [
    "Backend Developer",
    "Machine Learning Engineer",
    "Physicist",
    "Mathematician",
  ];
  return (
    <>
      <div className="intro">
        <h3>Who am I ? </h3>
        <p>
          My name is Udofia Unwana-Abasi. I am a backend developer and machine
          learning engineer. The programming languages I use for now are
          Javascript, Python and C++ but I am always learning new languages.
          Apart from addictively coding and randomly solving math questions, I
          love playing table tennis, traveling, watching movies and learning new
          human languages.
        </p>
      </div>

      <h3>My Projects</h3>
      <div className="projects-card">
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Project One</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              See
            </a>
          </div>
        </div>
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Project Two</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              See
            </a>
          </div>
        </div>
      </div>

      <div className="resume">
        <a href="http://">
          <button type="button" className="btn btn-success">
            Generate Resume
          </button>
        </a>
      </div>

      <div className="socials">
        <ul>
          <a href="http://x.com">
            <li>Twitter</li>
          </a>
          <a href="http://github.com/Uwanaa">
            <li>GitHub</li>
          </a>
          <a href="http://linkden.com">
            <li>Linkden</li>
          </a>
          <a href="mailto:uwanaudofia8@gmail.com">
            <li>Gmail</li>
          </a>
        </ul>
      </div>
    </>
  );
}
//export default Message;
export default ListGroup;

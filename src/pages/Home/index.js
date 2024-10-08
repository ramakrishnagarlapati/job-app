import { Link } from "react-router-dom";
import "./index.css";

function Home() {
  return (
    <div className="home-page-container">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Find The Job That Fits Your Life</h1>
          <p className="home-description">
            Millions of people are searching for jobs, salary information,
            company reviews. Find the job that fits your ability and potential.
          </p>
          <Link to="/jobs">
            <button className="find-jobs-btn" type="button">
              Find Jobs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

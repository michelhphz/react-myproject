import { Link } from "react-router-dom";

import "./portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio-panel-projects">
        <Link to="/Blog">
          <div className="portfolio-card-project">
            <div className="portfolio-card-project-title">
                Title
            </div>
            <div className="portfolio-card-project-image">
                Image
            </div>
            <div className="portfolio-card-project-description">
              Description
            </div>
          </div>
        </Link>
        <div className="portfolio-card-project">
          <div className="portfolio-card-project-title">Title</div>
          <div className="portfolio-card-project-image">Image</div>
          <div className="portfolio-card-project-description">Description</div>
        </div>
        <div className="portfolio-card-project">
          <div className="portfolio-card-project-title">Title</div>
          <div className="portfolio-card-project-image">Image</div>
          <div className="portfolio-card-project-description">Description</div>
        </div>
        <div className="portfolio-card-project">
          <div className="portfolio-card-project-title">Title</div>
          <div className="portfolio-card-project-image">Image</div>
          <div className="portfolio-card-project-description">Description</div>
        </div>
      </div>
    </div>
  );
}

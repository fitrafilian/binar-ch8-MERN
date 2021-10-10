import { BrowserRouter as Router, Route } from "react-router-dom";
import "./style.css";
import Player from "../Components/Player/Player";
import CreatePlayer from "../Components/CreatePlayer/CreatePlayer";
import UpdatePlayer from "../Components/UpdatePlayer/UpdatePlayer";
import SearchPlayer from "../Components/SearchPlayer/SearchPlayer";

export default () => {
  window.addEventListener("DOMContentLoaded", (event) => {
    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector("#sidebarToggle");
    if (sidebarToggle) {
      // Uncomment Below to persist sidebar toggle between refreshes
      // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
      //     document.body.classList.toggle('sb-sidenav-toggled');
      // }
      sidebarToggle.addEventListener("click", (event) => {
        event.preventDefault();
        document.body.classList.toggle("sb-sidenav-toggled");
        localStorage.setItem("sb|sidebar-toggle", document.body.classList.contains("sb-sidenav-toggled"));
      });
    }
  });
  return (
    <main>
      <div className="d-flex" id="wrapper">
        <div className="border-end bg-white" id="sidebar-wrapper">
          <div className="sidebar-heading border-bottom bg-light">Dashboard</div>
          <div className="list-group list-group-flush">
            <a
              className="
                list-group-item list-group-item-action list-group-item-light
                p-3
              "
              href="/"
            >
              Players
            </a>
          </div>
        </div>
        <div id="page-content-wrapper">
          <nav className="navbar navbar-expand-lg navbar-dark bg-light border-bottom">
            <div className="container-fluid">
              <button className="btn btn-success" id="sidebarToggle">
                <span className="navbar-toggler-icon"></span>
              </button>
              {/* <div>
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                  <li className="nav-item active">
                    <a className="btn btn-success" href="/dashboard/homepage">
                      Homepage
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </nav>
          <Router>
            <Route exact path="/" component={Player} />
            <Route exact path="/create" component={CreatePlayer} />
            <Route exact path="/player/:id" component={UpdatePlayer} />
            <Route exact path="/search" component={SearchPlayer} />
          </Router>
        </div>
      </div>
    </main>
  );
};

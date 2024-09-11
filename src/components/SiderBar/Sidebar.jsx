import React from "react";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  // const handleOnClick = (val) => {
  //   setSelectedTab(val);
  // };

  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 bg-light"
        style={{ width: "4.6rem", height: "100vh" }}
      >
        <a
          href="/"
          className="d-block p-3 link-dark text-decoration-none"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-original-title="Icon-only"
        >
          <svg className="bi" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="visually-hidden">Icon-only</span>
        </a>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li
            className="nav-item"
            onClick={() => {
              setSelectedTab("Home");
            }}
          >
            <a
              href="#"
              className={`nav-link  py-3 border-bottom ${
                selectedTab === "Home" && "active"
              }`}
              aria-current="page"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Home"
            >
              <svg
                className="bi"
                width="24"
                height="24"
                role="img"
                aria-label="Home"
              >
                <use xlinkHref="#home"></use>
              </svg>
              Home
            </a>
          </li>
          <li
            onClick={() => {
              setSelectedTab("CreatePost");
            }}
          >
            <a
              href="#"
              className={`nav-link py-3 border-bottom ${
                selectedTab === "CreatePost" && "active"
              }`}
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Dashboard"
            >
              <svg
                className="bi"
                width="24"
                height="24"
                role="img"
                aria-label="Dashboard"
              >
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Create 
            </a>
          </li>
        </ul>
        <div className="dropdown border-top">
          <a
            href="#"
            className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser3"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="24"
              height="24"
              className="rounded-circle"
            />
          </a>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser3"
          >
            <li>
              <a className="dropdown-item" href="#">
                New
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

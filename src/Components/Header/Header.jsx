import "./header.css";
const Header = ({ logo, project }) => (
  <header className="container-fluid">
    <div className="row">
      <div className="col-auto header-title logo">{logo}</div>
      <div className="col-auto header-title project">{project}</div>
    </div>
  </header>
);

export default Header;

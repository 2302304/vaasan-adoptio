import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ background: "#eee", padding: "10px" }}>
      <h3>Vaasan Eläinadoptio</h3>
      <Link to="/" style={{ marginRight: "10px" }}>Etusivu</Link>
    </nav>
  );
}

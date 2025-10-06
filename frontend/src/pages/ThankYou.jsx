import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Kiitos adoptiohakemuksestasi! 🎉</h1>
      <p>Olemme vastaanottaneet hakemuksesi.</p>
      <Link to="/">
        <button>Takaisin etusivulle</button>
      </Link>
    </div>
  );
}

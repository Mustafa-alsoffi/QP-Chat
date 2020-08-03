

import Navbarr from "../components/Navbar";
import QRCard from "../components/QRCard";

export default function qrpage() {
  

  return (
    <>
      <Navbarr />
      <div
        className="container-fluid d-flex justify-content-center"
        style={{ minHeight: "100vh" }}
      >
      <QRCard />
      </div>
    </>
  );
}

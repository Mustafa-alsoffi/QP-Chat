

import Navbarr from "../components/Navbar";
import QRCard from "../components/QRCard";
import { useFetchUser } from "../utils/user";

export default function qrpage() {
  
  const { user, loading } = useFetchUser();
  return (
    <>
     <Navbarr />
    {user && !loading ? 
      (
       
        <div
          className="container-fluid d-flex justify-content-center"
          style={{ minHeight: "100vh" }}
        >
        <QRCard />
        </div>
      )
      :
      <h1>Error</h1>}
      </>
  );
}

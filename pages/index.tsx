import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container-fluid d-flex justify-content-center" style={{minHeight: '100vh'}}>
      <div className="card my-auto w-50 p-3">
        
          <button type="button" className="btn btn-primary m-1" style={{minHeight: '50px'}}>
            Login
          </button>
          <button type="button" className="btn btn-outline-primary m-1" style={{minHeight: '50px'}}>
            sign up
          </button>

      </div>
    </div>
  );
}

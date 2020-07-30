import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container-fluid d-flex justify-content-center" style={{minHeight: '100vh'}}>
      <div className="card my-auto p-3">
      <div className="card-body">
    <h5 className="card-title text-center">Welcome to QP Chat!</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
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

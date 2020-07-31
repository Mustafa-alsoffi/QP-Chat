import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navbarr from "../components/Navbar";
import { useFetchUser } from "../utils/user";
export default function Home() {
  const { user, loading } = useFetchUser();
  return (
    <div>
      <Navbarr />
      <div
        className="container-fluid d-flex justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="card my-auto p-3">
          <div className="card-body">
            <h5 className="card-title text-center">Welcome to QP Chat!</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          {user && !loading ? (
            <h2 className='text-center'>You're logged in!</h2>
          ) : (
            [
              <Link href="/api/login">
                <button
                  type="button"
                  className="btn btn-primary m-1"
                  style={{ minHeight: "50px" }}
                >
                  Login
                </button>
              </Link>,
              <Link href="/api/signUp">
                <button
                  type="button"
                  className="btn btn-outline-primary m-1"
                  style={{ minHeight: "50px" }}
                >
                  sign up
                </button>
              </Link>,
            ]
          )}
        </div>
      </div>
    </div>
  );
}

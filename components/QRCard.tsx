import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Head from "next/head";
import QRCode from "qrcode";
import Firebase from "../utils/firebase";

import {
  Form,
  FormGroup,
  FormControl,
  Row,
  FormLabel,
  Col,
  Button,
  Tooltip,
  Overlay,
} from "react-bootstrap";

export default function QRCard({ fRoomId }) {
  const [show, setShow] = useState(false);
  if (show) {
    setTimeout(function () {
      setShow(false);
    }, 1500);
  }

  const [width, setWidth] = useState(global.innerWidth);
  const breakpoint = 620;

  //Listen to the viewport width value
  useEffect(function mount() {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return function unMount() {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  //Create QR canvas and adjusts its width based on viewport
  useEffect(() => {
    const setViewSize = () => (width > breakpoint ? 350 : 300);

    QRCode.toCanvas(
      document.getElementById("canvas"),
      "https://getbootstrap.com",
      { width: setViewSize() },
      function (error) {
        if (error) console.error(error);
        console.log("success!");
      }
    );
  });

  const target = useRef(null);
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
  }
  return (
    <div className="card my-auto">
      <div className="card-header text-center">Scan QR</div>

      <canvas id="canvas"></canvas>
      <div className="card-body">
        <Form>
          <FormGroup as={Row} controlId="formPlaintext">
            <FormLabel
              style={{ width: "fit-content" }}
              column
              xs={1}
              className="text-center"
            >
              Link
            </FormLabel>
            <Col xs={6}>
              <FormControl
                ref={textAreaRef}
                plaintext
                readOnly
                defaultValue=" A link here "
              />
            </Col>

            <Col xs={1}>
              <Button
                ref={target}
                onClick={(event) => {
                  setShow(true);
                  copyToClipboard(event);
                }}
              >
                Copy
              </Button>
            </Col>
            <Col xs={1}>
              <Link
                href={{
                  pathname: "/chatRoom",
                  query: { roomID: fRoomId },
                }}
              >
                <Button>Test</Button>
              </Link>
            </Col>
          </FormGroup>
        </Form>
      </div>

      <Overlay target={target.current} show={show} placement="top">
        {(props) => (
          <Tooltip id="tooltip" {...props}>
            Copied!
          </Tooltip>
        )}
      </Overlay>
    </div>
  );
}

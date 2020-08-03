import React, { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
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
import Navbarr from "../components/Navbar";

export default function qrpage() {
  const [show, setShow] = useState(false);
  if (show) {
    setTimeout(function () {
      setShow(false);
    }, 1500);
  }

        const [width, setWidth] = useState(global.innerWidth);
    const breakpoint = 620;
    

    useEffect(function mount() {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      console.log('here is your width ' + width);
        
      return function unMount() {
        window.removeEventListener("resize", handleWindowResize);
      };
    });
 


  useEffect(() => {
      const setViewSize = () => width > breakpoint ? 350 : 300;

    QRCode.toCanvas(
      document.getElementById("canvas"),
      "sample text",
      { width: setViewSize()},
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
    <>
      <Navbarr />
      <div
        className="container-fluid d-flex justify-content-center"
        style={{ minHeight: "100vh" }}
      >
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
              </FormGroup>
            </Form>
          </div>

          <Overlay target={target.current} show={show} placement="right">
            {(props) => (
              <Tooltip id="tooltip" {...props}>
                Copied!
              </Tooltip>
            )}
          </Overlay>
        </div>
      </div>
    </>
  );
}

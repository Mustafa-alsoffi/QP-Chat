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
import { eventNames } from "process";
export default function qrpage() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
  }
  if (show) {
    setTimeout(function () {
      setShow(false);
    }, 1500);
  }
  useEffect(() => {
    QRCode.toCanvas(
      document.getElementById("canvas"),
      "sample text",
      { width: "350" },
      function (error) {
        if (error) console.error(error);
        console.log("success!");
      }
    );
  }, []);

  return (
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
                style={{ width: 'fit-content' }}
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
          {(props) => <Tooltip {...props}>Copied!</Tooltip>}
        </Overlay>
      </div>
    </div>
  );
}

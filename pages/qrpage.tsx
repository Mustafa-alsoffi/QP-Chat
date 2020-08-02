import React, { useEffect, useState, useRef } from "react";
import QRCode from "qrcode";

export default function qrpage() {


  useEffect(() => {
    QRCode.toCanvas(document.getElementById('canvas'),
    'sample text', { toSJISFunc: QRCode.toSJIS }, function (error) {
    if (error) console.error(error)
    console.log('success!')
  })
  }, [])


  return (
    <div>
      <div
        className="container-fluid d-flex justify-container-center"
        style={{ minHeight: "100vh" }}
      >
        <div>
          <h1>QR Image</h1>
          <canvas
            id='canvas'
          ></canvas>
        </div>
      </div>
    </div>
  );
}

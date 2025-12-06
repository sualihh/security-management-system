import React, { useState } from "react";
import { QrReader } from "@blackbox-vision/react-qr-reader";

const QRCodeScanner = ({ setRecentScans, setAlerts }) => {
  const [scanResult, setScanResult] = useState("");
  const [scanning, setScanning] = useState(false);

  const handleScan = (data) => {
    if (data) {
      setScanResult(data);

      // Example: Validate QR code
      const isValid = data.includes("approved"); // replace with backend check

      // Update recent scans table automatically
      
      

    }
  };

  

  return (
    <div >
      

      
    </div>
  );
};

export default QRCodeScanner;

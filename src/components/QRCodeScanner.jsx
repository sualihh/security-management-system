import React, { useState } from "react";
import { QrReader } from "@blackbox-vision/react-qr-reader";

const QRCodeScanner = ({ setRecentScans, setAlerts }) => {
  const [scanResult, setScanResult] = useState("");

  const handleScan = (data) => {
    if (data) {
      setScanResult(data);

      // Example: Validate QR code
      const isValid = data.includes("approved"); // replace with backend check

      // Update recent scans table automatically
      setRecentScans((prev) => [
        {
          time: new Date().toLocaleTimeString(),
          student: "John Doe", // ideally from QR or backend
          device: "MAC: xx:xx:xx",
          result: isValid ? "Valid" : "Suspicious",
        },
        ...prev,
      ]);

      // Add alert if suspicious
      if (!isValid) {
        setAlerts((prev) => [
          `Suspicious QR scanned at ${new Date().toLocaleTimeString()}`,
          ...prev,
        ]);
      }

      // Optional: stop scanning after one scan
      // setScanning(false);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      
      
    </div>
  );
};

export default QRCodeScanner;

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
      
      {scanning && (
        <div className="flex flex-col items-center w-full">
          {/* Live Camera Feed */}
          

          {/* Stop Scan Button */}
         

          {/* Display last scanned QR on screen */}
          {scanResult && (
            <p className="mt-2 text-gray-700">
              Last scanned QR: <span className="font-bold">{scanResult}</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default QRCodeScanner;

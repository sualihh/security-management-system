import React from 'react'
import Stats from '../components/Stats';
import QRCodeScanner from '../components/QRCodeScanner';
import { useState } from 'react';

const Home = () => {
    
  const [recentScans, setRecentScans] = useState([]);
  const [alerts, setAlerts] = useState([]);

  const stats = [
    { label: "Total Scans ", value: 22 },
    { label: "Valid Entries", value: 22 },
    { label: "Blocked Devices", value: 25 },
    { label: "Suspicious Attempts", value: 45 },
  ]


  return (
    <div>   
      <div className="min-h-screen bg-gray-100">
        {/* QR Scanner */}
      <div className="bg-white p-4 rounded-lg shadow-lg mb-6 w-96">
        <h2 className="text-xl font-semibold mb-4">QR Code Scanner</h2>
        <QRCodeScanner setRecentScans={setRecentScans} setAlerts={setAlerts} />
      </div>

      {/* Recent Scans */}
      <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Recent Scans</h2>
        <ul>
          {recentScans.map((scan, i) => (
            <li key={i}>
              {scan.time} - {scan.student} - {scan.device} -{" "}
              <span className={scan.result === "Valid" ? "text-green-600" : "text-red-600"}>
                {scan.result}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <Stats stats={stats} />
      {/* Other components like QR Scanner and recent logs */}
    </div>
    </div>
  )
}

export default Home

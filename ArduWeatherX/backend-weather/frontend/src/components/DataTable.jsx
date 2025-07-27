import React from "react";

const DataTable = ({ data }) => {
  // Handle initial empty state
  if (!data || data.length === 0) {
    return (
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <p>No weather data available yet...</p>
      </div>
    );
  }
// Basic current datetime
function getCurrentDateTime() {
  return new Date(); // Returns Date object
}

// Formatted as string
function getFormattedDateTime() {
  return new Date().toLocaleString(); // "7/28/2023, 10:30:15 AM"
}

// Custom format
function getCustomFormatDateTime() {
  const now = new Date();
  return {
    date: now.toLocaleDateString(), // "7/28/2023"
    time: now.toLocaleTimeString(), // "10:30:15 AM"
    iso: now.toISOString(),         // "2023-07-28T14:30:15.000Z"
    timestamp: now.getTime()        // 1690540215000 (milliseconds since epoch)
  };
}

// For your weather data (to add timestamp to new readings)
function addTimestampToData(weatherData) {
  return {
    ...weatherData,
    timestamp: new Date().toISOString()
  };
}
  return (
    <div style={{ overflowX: 'auto', marginTop: '20px' }}>
      <table style={{ 
        width: '100%', 
        borderCollapse: 'collapse',
        border: '1px solid #ddd',
        fontFamily: 'sans-serif'
      }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Date</th>
            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Timestamp</th>
            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Temperature (°C)</th>
            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ddd', '&:hover': { backgroundColor: '#f5f5f5' } }}>
              <td style={{ padding: '12px' }}>
                {getCustomFormatDateTime().date}
              </td>
              <td style={{ padding: '12px' }}>
                {getCustomFormatDateTime().time}
              </td>
              <td style={{ padding: '12px' }}>
                {typeof item.temperature === 'number' ? item.temperature.toFixed(1) : 'N/A'}
              </td>
              <td style={{ padding: '12px' }}>
                {typeof item.humidity === 'number' ? item.humidity.toFixed(1) : 'N/A'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
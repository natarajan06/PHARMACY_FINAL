import React from 'react';
import './ReportandAnalysis.css';
import Navbar from '../Navbar/Navbar';

const ReportAnalysis = () => {
  // Sample report and analysis data
  const reportData = [
    { id: 1, month: 'January', revenue: 5000, profit: 3000 },
    { id: 2, month: 'February', revenue: 6000, profit: 3500 },
    { id: 3, month: 'March', revenue: 5500, profit: 3200 },
    // Add more report data here
  ];

  return (
    <div className="report-analysis-container">
        <Navbar/>
      <h2 className="report-heading">Pharmacy Report and Analysis</h2>

      <table className="report-table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Revenue</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((item) => (
            <tr key={item.id}>
              <td>{item.month}</td>
              <td>${item.revenue}</td>
              <td>${item.profit}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="analysis-container">
        <h3 className="analysis-heading">Sales Analysis</h3>
        {/* Add sales analysis charts or data here */}
      </div>
    </div>
  );
};

export default ReportAnalysis;

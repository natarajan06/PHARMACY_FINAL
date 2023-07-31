import React, { useState, useEffect } from 'react';

const StaffPage = () => {
  const [staffData, setStaffData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an API call to fetch staff data
    setTimeout(() => {
      const staffData = [
        { id: 1, name: 'John Doe', department: 'Sales' },
        { id: 2, name: 'Jane Smith', department: 'Marketing' },
        { id: 3, name: 'Alex Johnson', department: 'HR' },
      ];
      setStaffData(staffData);
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      <h1>Welcome, Staff Member!</h1>
      {isLoading ? (
        <p>Loading staff data...</p>
      ) : (
        <>
          <p>Here is some information about the staff:</p>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              {staffData.map((staffMember) => (
                <tr key={staffMember.id}>
                  <td>{staffMember.id}</td>
                  <td>{staffMember.name}</td>
                  <td>{staffMember.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default StaffPage;

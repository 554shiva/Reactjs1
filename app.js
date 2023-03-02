import React, { useState } from 'react';

function App() {
  const [customers, setCustomers] = useState([]);
  const [regions, setRegions] = useState([]);
  const [activeTab, setActiveTab] = useState('ready');

  const handleCustomerClick = () => {
    // You can replace the mock data with your actual API call to fetch customer data
    setCustomers(['Customer 1', 'Customer 2', 'Customer 3']);
    setRegions([]);
  };

  const handleRegionClick = () => {
    // You can replace the mock data with your actual API call to fetch region data
    setRegions(['Region 1', 'Region 2', 'Region 3']);
    setCustomers([]);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleTabClick('ready')}>Ready</button>
        <button onClick={() => handleTabClick('business')}>Business</button>
      </div>
      {activeTab === 'business' && (
        <div>
          <div>
            <button onClick={handleCustomerClick}>Customers</button>
            <button onClick={handleRegionClick}>Regions</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Customers</th>
                <th>Regions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {customers.map((customer, index) => (
                    <div key={index}>{customer}</div>
                  ))}
                </td>
                <td>
                  {regions.map((region, index) => (
                    <div key={index}>{region}</div>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;

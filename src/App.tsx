import React from 'react';
import './App.css'; // Assuming some base CSS
import User from './components/User'; // Import the new component

function App() {
  const user1 = {
    name: 'Alice Wonderland',
    email: 'alice@example.com',
    profilePicture: 'https://i.pravatar.cc/150?img=1',
    role: 'Editor',
  };

  const user2 = {
    name: 'Bob The Builder',
    email: 'bob@example.com',
    // No profile picture provided
    role: 'Contributor',
  };

  const user3 = {
    name: 'Charlie Chaplin',
    email: 'charlie@example.com',
    profilePicture: 'https://i.pravatar.cc/150?img=3',
  };

  return (
    <div className="App p-8 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">User Profiles</h1>

      <User {...user1} />
      <User {...user2} />
      <User {...user3} />

      <div className="max-w-sm mx-auto p-4 text-center text-gray-500 text-sm">
        <p>Demonstrating the reusable User component.</p>
      </div>
    </div>
  );
}

export default App;

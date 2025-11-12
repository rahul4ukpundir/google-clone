import React from 'react';

export interface UserProps {
  name: string;
  email: string;
  profilePicture?: string; // Optional
  role?: string; // Optional
}

const User: React.FC<UserProps> = ({ name, email, profilePicture, role }) => {
  // A simple placeholder for a default avatar
  const defaultAvatar = 'https://via.placeholder.com/150/cccccc/ffffff?text=NA';

  return (
    <div className="flex items-center p-4 border border-gray-200 rounded-lg shadow-sm bg-white max-w-sm mx-auto">
      <div className="flex-shrink-0 mr-4">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src={profilePicture || defaultAvatar}
          alt={`${name}'s profile`}
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">{email}</p>
        {role && <p className="text-xs text-gray-500 mt-1">Role: {role}</p>}
      </div>
    </div>
  );
};

export default User;

import React from 'react';
import { render, screen } from '@testing-library/react';
import User from './User';

describe('User Component', () => {
  const completeUserData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: 'https://example.com/john.jpg',
    role: 'Admin',
  };

  const partialUserData = {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    // profilePicture is missing
  };

  const minimalUserData = {
    name: 'Guest User',
    email: 'guest@example.com',
  };

  it('renders user details correctly with complete data', () => {
    render(<User {...completeUserData} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
    expect(screen.getByAltText("John Doe's profile")).toHaveAttribute('src', completeUserData.profilePicture);
    expect(screen.getByText('Role: Admin')).toBeInTheDocument();
  });

  it('renders default avatar when profile picture is missing', () => {
    render(<User {...partialUserData} />);

    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('jane.smith@example.com')).toBeInTheDocument();
    const avatar = screen.getByAltText("Jane Smith's profile");
    expect(avatar).toHaveAttribute('src', expect.stringContaining('via.placeholder.com')); // Check for default placeholder
    expect(screen.queryByText('Role:')).not.toBeInTheDocument(); // Role is missing
  });

  it('renders with minimal data (name and email only)', () => {
    render(<User {...minimalUserData} />);

    expect(screen.getByText('Guest User')).toBeInTheDocument();
    expect(screen.getByText('guest@example.com')).toBeInTheDocument();
    const avatar = screen.getByAltText("Guest User's profile");
    expect(avatar).toHaveAttribute('src', expect.stringContaining('via.placeholder.com')); // Default avatar
    expect(screen.queryByText('Role:')).not.toBeInTheDocument();
  });

  it('does not render role if not provided', () => {
    const { name, email, profilePicture } = completeUserData; // Exclude role
    render(<User name={name} email={email} profilePicture={profilePicture} />);
    expect(screen.queryByText('Role: Admin')).not.toBeInTheDocument();
  });
});

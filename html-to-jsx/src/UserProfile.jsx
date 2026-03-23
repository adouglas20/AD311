import React from 'react';

// We use destructuring to pull name, email, and imageUrl from props
const UserProfile = ({ name, email, imageUrl }) => {
  return (

    <div className="profile-card" style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', maxWidth: '300px' }}>
      <h2>User Profile</h2>

   
      <img
        src={imageUrl}
        alt={`${name}'s photo`}
        className="photo"
        style={{ width: '100px', borderRadius: '50%' }}
      />

      <p>Name: {name}</p>
      <p>Email: {email}</p>

      <a href={`mailto:${email}`}>Send Email</a>
    </div>
  );
};

export default UserProfile;
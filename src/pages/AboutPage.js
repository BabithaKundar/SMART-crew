import React from 'react';
import './AboutPage.css';

const teamMembers = [
  { name: 'Babitha', usn: '4SF23CS222' },
  { name: 'Dhanyashree', usn: '4SF23CS226' },
  { name: 'Inchara', usn: '4SF23CS986' },
  { name: 'Thrupthi', usn: '4SF23CS876' },
];

function AboutPage() {
  return (
    <div className="about-page">
     <h1 style={{ marginTop: '20px',paddingLeft: '20px' }}>About Happy Tummy</h1>
<p style={{ marginTop: '20px',paddingLeft: '20px' }}>
    Welcome to Happy Tummy, your go-to destination for delicious, wholesome meals! At Happy Tummy, we believe that food is not just about taste, but an experience that brings people together. Whether you're craving a hearty main course, a flavorful starter, or a refreshing beverage, our carefully curated menu has something for every taste.
</p>
<p style={{ marginTop: '20px' ,paddingLeft: '20px'}}>
    Our mission is to provide you with the finest quality dishes made from the freshest ingredients, ensuring that every bite leaves you satisfied and happy. With a wide range of options from starters to desserts, and everything in between, Happy Tummy is dedicated to delivering a memorable dining experience right at your doorstep.
</p>
<p style={{ marginTop: '20px',paddingLeft: '20px' }}>
    Join us on a culinary journey and let us treat your tummy to some happiness!
</p>

      <div className="team-section">
        <div className= "meet"><h2>Meet Our Team</h2></div>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="profile-circle">
                {member.name.charAt(0)}
              </div>
              <div className="profile-info">
                <h3>{member.name}</h3>
                <p>{member.usn}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

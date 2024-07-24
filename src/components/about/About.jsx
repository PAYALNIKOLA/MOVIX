import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>About Our Movie & TV Show App</h1>
      </header>
      <section style={styles.section}>
        <h2>App Description</h2>
        <p style={styles.p}>
          Welcome to our Movie & TV Show app, your ultimate destination for all things entertainment. 
          Discover, watch, and manage your favorite movies and TV shows with ease. Our app offers a seamless 
          experience, ensuring you never miss out on the latest releases and hidden gems.
        </p>
      </section>
      <section style={styles.section}>
        <h2>Features</h2>
        <ul>
          <li>Extensive library of movies and TV shows</li>
          <li>Personalized recommendations based on your preferences</li>
          <li>Watch trailers and read reviews</li>
          <li>Create and manage your watchlist</li>
          <li>Seamless streaming experience</li>
        </ul>
      </section>
      <section style={styles.section}>
        <h2>Meet the Team</h2>
        <div style={styles.team}>
          <div style={styles.teamMember}>
            <img src="src/image1.png" alt="Team Member" style={styles.teamImage} />
            <h3>Jane Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div style={styles.teamMember}>
            <img src="src/image2.png" alt="Team Member" style={styles.teamImage} />
            <h3>John Smith</h3>
            <p>Chief Technology Officer</p>
          </div>
          <div style={styles.teamMember}>
            <img src="src/image3.png" alt="Team Member" style={styles.teamImage} />
            <h3>Alice Johnson</h3>
            <p>Lead Designer</p>
          </div>
          <div style={styles.teamMember}>
            <img src="src/image4.png" alt="Team Member" style={styles.teamImage} />
            <h3>Bob Brown</h3>
            <p>Head of Marketing</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    color:'white',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    color:'white',
    opicity:'100%',
    marginTop : '50px',
  },
  section: {
    marginBottom: '40px',
  },
  p:{
color:'white',
  },
  team: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  teamMember: {
    textAlign: 'center',
    margin: '20px',
  },
  teamImage: {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
  },
};

export default About;

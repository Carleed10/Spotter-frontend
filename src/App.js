import React from 'react';
// import NavBar from './NavBar';
import '../src/Styling/navbar4.css';
import NavBar4 from './Components/NavBar4';

const App = () => {
  return (
    <div className="page-wrapper">
      <NavBar4 />
      <section className="headline">
        <h1>Responsive Navigation</h1>
        <p>Using CSS grid and flexbox to easily build navbars!</p>
      </section>
      <section className="features">
        <div className="feature-container">
          <img
            src="https://cdn-images-1.medium.com/max/2000/1*HFAEJvVOq4AwFuBivNu_OQ.png"
            alt="Flexbox Feature"
          />
          <h2>Flexbox Featured</h2>
          <p>
            This pen contains use of flexbox for the headline and feature
            section! We use it in our mobile navbar and show the power of mixing
            css grid and flexbox.
          </p>
        </div>
        <div className="feature-container">
          <img
            src="https://blog.webix.com/wp-content/uploads/2017/06/20170621-CSS-Grid-Layout-710x355-tiny.png"
            alt="CSS Grid Feature"
          />
          <h2>CSS Grid Navigation</h2>
          <p>
            While flexbox is used for the mobile navbar, CSS grid is used for
            the desktop navbar showing many ways we can use both.
          </p>
        </div>
        <div className="feature-container">
          <img
            src="https://www.graycelltech.com/wp-content/uploads/2015/06/GCT-HTML5.jpg"
            alt="Basic HTML5 Feature"
          />
          <h2>Basic HTML5</h2>
          <p>
            This pen contains basic html to setup the page to display the
            responsive navbar.
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;

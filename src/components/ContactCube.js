import React, { useState } from 'react';

function ContactCube() {
  const [rotation, setRotation] = useState(0);

  const rotateCube = () => {
    setRotation((prevRotation) => prevRotation + 90); // Increment by 90° for a cube
  };

  return (
    <div className="contact-cube-container">
      <div className="contact-cube" onClick={rotateCube} style={{ transform: `rotateY(${rotation}deg)` }}>
        {[1, 2, 3, 4, 5, 6].map((face) => (
          <div key={face} className={`contact-face face-${face}`}>
            <ContentForFace face={face} />
          </div>
        ))}
      </div>
    </div>
  );
}

const contentMap = {
  1: { link: 'https://github.com/Gdel-J', label: 'GitHub', iconClass: 'fab fa-github', fontSize: '1.4em' },
  2: { link: 'https://www.linkedin.com/in/gerard-del-vecchio-39a231285/', label: 'LinkedIn', iconClass: 'fab fa-linkedin', fontSize: '1.4em' },
  3: { link: 'mailto:jessygdelvecchio@gmail.com', label: 'jessygdelvecchio@gmail.com', iconClass: 'fas fa-envelope', fontSize: '0.4em' },
  4: { link: 'https://github.com/Gdel-J', label: 'GitHub', iconClass: 'fab fa-github', fontSize: '1.4em' },
  5: { link: 'https://www.linkedin.com/in/gerard-del-vecchio-39a231285/', label: 'LinkedIn', iconClass: 'fab fa-linkedin', fontSize: '1.4em' },
  6: { link: 'mailto:jessygdelvecchio@gmail.com', label: 'jessygdelvecchio@gmail.com', iconClass: 'fas fa-envelope', fontSize: '0.4em' },
};

function ContentForFace({ face }) {
  return (
    <a href={contentMap[face].link} target="_blank" rel="noreferrer" style={{ fontSize: contentMap[face].fontSize }}>
      <i className={contentMap[face].iconClass}></i> {contentMap[face].label}
    </a>
  );
}

export default ContactCube;

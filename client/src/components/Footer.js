import React from 'react';
import '../Footer.css';

function Footer() {
  return (
    <div className="Footer">
      <p>
        Copyright &copy;{new Date().getFullYear()} Charlotter Bergeron
      </p>
      <p>Designed by WZ</p>
    </div>
  )
}

export default Footer
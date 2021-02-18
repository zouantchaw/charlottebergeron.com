import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-3 col-sm-6">
          <h4>Lorem Ipsum</h4>
            <ul className="list-unstyled">
              <li>Lorem, Ipsum</li>
              <li>Lorem, Ipsum</li>
              <li>Lorem, Ipsum</li>
              <li>Lorem, Ipsum</li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="col-md-3 col-sm-6">
          <h4>Lorem Ipsum</h4>
            <ul className="list-unstyled">
              <li>Lorem, Ipsum</li>
              <li>Lorem, Ipsum</li>
              <li>Lorem, Ipsum</li>
              <li>Lorem, Ipsum</li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="col-md-3 col-sm-6">
          <h4>Lorem Ipsum</h4>
            <ul className="list-unstyled">
              <li>Lorem, Ipsum</li>
              <li>Lorem, Ipsum</li>
              <li>Lorem, Ipsum</li>
              <li>Lorem, Ipsum</li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} Made with love <i class="fas fa-heart"></i>
          </p>
        </div>
      </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
.footer-middle {
  background: var(--mainDark);
  padding-top: 3rem;
  color: var(--mainWhite);
  text-align: center;
}

.footer-bottom {
  padding-top: 1rem;
  padding-bottom: 2rem;
  text-align: center;
  
}

.main-footer {
  position:absolute;
  left:0;
  bottom:0;
  right:0;
  padding-bottom:60px;
}
`;
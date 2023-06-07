import React from 'react';
import { Layout } from 'antd';
import './AppFooter.css';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer>
      <div className="footer-container">
        <div className="resource-container">
          <h3>Resources</h3>
          <ul>
            <li>
              <a href="https://justenergy.com/blog/earth-day-is-every-day-reducing-your-carbon-footprint-year-round/" target="_blank">
                Earth Day is Every Day: Reducing Your Carbon Footprint Year-Round
              </a>
            </li>
            <li>
              <a href="https://justenergy.com/blog/what-are-carbon-offsets/" target="_blank">
                What are Carbon Offsets?
              </a>
            </li>
            <li>
              <a href="https://justenergy.com/blog/top-tips-reduce-familys-environmental-footprint/" target="_blank">
                Top Tips for Reducing your Family’s Environmental Footprint
              </a>
            </li>
            <li>
              <a href="https://justenergy.com/blog/carbon-trading-a-primer/" target="_blank">
                Carbon Trading: A Primer
              </a>
            </li>
          </ul>
        </div>
        <div className="team-container">
          <h3>Our Team</h3>
          <ul className='team'>
            <li>
              Reka Kovacs
            </li>
            <li>
              Calum Seath
            </li>
            <li>
              Alex Ofori
            </li>
            <li>
              Panos
            </li>
          </ul>
        </div>
      </div>
      <p>© 2023</p>
    </Footer>
  );
};

export default AppFooter;
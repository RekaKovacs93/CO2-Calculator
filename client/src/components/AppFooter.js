import React from 'react';
import { Layout } from 'antd';


const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ 
      backgroundColor: 'darkgrey', 
      textAlign: 'center', 
      fontSize: '17px', 
      padding: '20px' 
      }}>

      <ul style={{ 
        listStyleType: 'none', 
        paddingInlineStart: 0,
        textAlign: 'left',
        marginLeft: '20px'
        }}>
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
    </Footer>
  );
};

export default AppFooter;

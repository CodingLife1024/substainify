"use client";

import React from 'react';
import styles from './dashboard.module.css';
import Topbar from '../../components/Topbar/Topbar';

const Dashboard = () => {
  return (
    <>
    <div className={styles.full}>
      <div style={{height: "70px"}}></div>
      <Topbar />
      <div className={styles.main}>
        <div className={styles.title}>
          Dashboard
        </div>
        <div className={styles.slide_container}>
          <div className={styles.bigslide}>
            <div className={styles.slide} style={{ backgroundImage: 'url(/1.svg)' }}>
              <div className={styles.slide_title} style={{ marginBottom: "30px" }}>The Sustainability Dashboard: Your Window to Impact</div>
              <div className={styles.slide_content_1}>
                <p>The Sustainability Dashboard is a unique feature that sets Sustanify Hub apart. This tool empowers both businesses and consumers to take control of their sustainability journey, offering transparency, insights, and data-driven decision-making. Its key elements are:</p>
              </div>
            </div>
            <div className={styles.slide} style={{ backgroundImage: 'url(/2.svg)' }}>
              <div className={styles.slide_title} style={{ marginBottom: "20px" }}>For Businesses: </div>
              <div className={styles.slide_content_2}>
                <p style={{ marginBottom: "10px" }}>Tracking Sustainability Progress: Businesses can monitor and assess their sustainability initiatives, from reducing their carbon footprint to implementing waste reduction strategies. The dashboard allows them to measure and visualize their impact over time, providing essential insights for continuous improvement.</p>
                <p style={{ marginBottom: "10px" }}>Carbon Footprint Reduction: We place a special emphasis on carbon footprint reduction. The dashboard displays real-time data on carbon emissions, allowing businesses to set targets and track their progress towards a lower carbon impact.</p>
                <p style={{ marginBottom: "10px" }}>Waste Reduction: Waste management is a critical aspect of sustainability. The dashboard records waste reduction metrics, helping businesses identify opportunities to minimize waste generation and optimize resource use.</p>
                <p style={{ marginBottom: "10px" }}>Eco-Friendly Materials Usage: Sustanify Hub encourages the use of eco-friendly materials. The dashboard keeps track of the types and quantities of such materials used, fostering accountability and promoting the adoption of sustainable alternatives.</p>
              </div>
              </div>
            <div className={styles.slide} style={{ backgroundImage: 'url(/3.svg)' }}>
              <div className={styles.slide_title} style={{ marginBottom: "20px" }}>For Consumers: </div>
                <div className={styles.slide_content_2}>
                  <p style={{ marginBottom: "10px" }}>Empowering Informed Choices: For consumers, the Sustainability Dashboard is a valuable tool for making informed choices. Each product's environmental impact is clearly displayed, allowing consumers to assess its contribution to carbon footprint reduction, waste reduction, and the use of eco-friendly materials.</p>
                  <p style={{ marginBottom: "10px" }}>Personal Carbon Footprint Reduction: The dashboard goes a step further by enabling consumers to track their personal carbon footprint. By inputting data on their lifestyle and consumption habits, individuals can see the real-world impact of their choices and make adjustments as needed.</p>
                  <p style={{ marginBottom: "10px" }}>Progress Over Time: Over time, consumers can see how their purchasing decisions have contributed to the reduction of carbon emissions and waste. This feature offers a sense of achievement and motivates users to continue supporting sustainable products.</p>
                </div>
            </div>
            <div className={styles.slide} style={{ backgroundImage: 'url(/4.svg)' }}>
              <div className={styles.slide_title} style={{ marginBottom: "30px" }}>Sustanify Hub's Annual Green Impact Report</div>
              <div className={styles.slide_content_1}>
                <p>At Sustanify Hub, we believe that transparency and accountability are fundamental to achieving our mission of promoting sustainable development and eco-friendly products. One of the ways we demonstrate this commitment is through our Annual Green Impact Report, a comprehensive document that not only showcases our achievements but also highlights the collective positive impact our platform and users have made on the environment and society.</p>
              </div>
            </div>
            <div className={styles.slide} style={{ backgroundImage: 'url(/5.svg)' }}>
              <div className={styles.slide_title} style={{ marginBottom: "30px" }}>The Product Rating Agency - Your Guide to Eco-Friendly Shopping</div>
              <div className={styles.slide_content_1}>
                <p>In a world where sustainable choices are paramount, it can be challenging for consumers to distinguish between genuinely eco-friendly products and those that merely claim to be. To address this issue, Sustanify Hub has introduced the Product Rating Agency, an impartial entity with a crucial role in evaluating and rating products available on our platform. We evaluate products based on a pass/fail system comprising of 10 factors.</p>
              </div>
            </div>
            <div className={styles.slide} style={{ backgroundImage: 'url(/6.svg)' }}>
              <div className={styles.slide_title} style={{ marginBottom: "20px" }}>Pass/Fail Evaluation System </div>
                <div className={styles.slide_content_2}>
                  <p style={{ marginBottom: "0px" }}>Feature 1: Carbon Footprint</p>
                  <p style={{ marginBottom: "0px" }}>Feature 2: Water Usage</p>
                  <p style={{ marginBottom: "0px" }}>Feature 3: Waste Reduction</p>
                  <p style={{ marginBottom: "0px" }}>Feature 4: Sustainable Materials</p>
                  <p style={{ marginBottom: "0px" }}>Feature 5: Supply Chain Transparency</p>
                  <p style={{ marginBottom: "0px" }}>Feature 6: End-of-Life Considerations</p>
                  <p style={{ marginBottom: "0px" }}>Feature 7: Fair Labor Practices</p>
                  <p style={{ marginBottom: "0px" }}>Feature 8: Energy Efficiency</p>
                  <p style={{ marginBottom: "0px" }}>Feature 9: Biodiversity Preservation</p>
                  <p style={{ marginBottom: "0px" }}>Feature 10: Contribution to Sustainable Development Goals (SDGs)</p>
                </div>
            </div>
            <div className={styles.slide} style={{ backgroundImage: 'url(/7.svg)' }}>
              <div className={styles.slide_title} style={{ marginBottom: "30px" }}>Blockchain-Enabled Carbon Credits: A New Era of Sustainability</div>
              <div className={styles.slide_content_2}>
                <p>In the pursuit of a greener, more sustainable world, carbon credits play a vital role. They provide a means for businesses and individuals to offset their carbon emissions by investing in projects that reduce or capture an equivalent amount of carbon elsewhere. However, the traditional carbon credit market has often faced challenges related to transparency, accountability, and accessibility.</p>
              </div>
              <div className={styles.slide_content_2}>
                <p>Sustanify Hub is committed to revolutionizing the carbon credit market through blockchain technology. Blockchain offers a decentralized and immutable ledger that can ensure the transparency and reliability of carbon credit transactions, making it a powerful tool for achieving our sustainability goals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Dashboard;

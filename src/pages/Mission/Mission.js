import React from 'react';
import styles from './mission.module.css';
import Topbar from '../../components/Topbar/Topbar';

const Mission = () => {
  return (
    <>
      <div className={styles.full}>
        <div style={{ height: "70px" }}></div>
        <Topbar />
        <div className={styles.main}>
          <div className='left'>
            <div className={styles.title}>
              Our Mission
            </div>
            <div className={styles.title2}>
            A Sustainable Revolution
            </div>
            <div className={styles.title3}>
            In a world faced with escalating environmental challenges, the need for change has never been more critical. Sustanify hub, a groundbreaking e-commerce and consulting enterprise, stands at the forefront of this transformation. Our mission is simple: to redefine commerce by providing a platform that exclusively showcases and promotes eco-friendly products at a cheaper cost while also empowering underdeveloped countries. As we embark on this journey, let us delve into the essence of Sustanify hub, exploring not only our mission but the wider significance of sustainable development and eco-friendly products.
            </div>
            <div className={styles.title2}>
            Transparency and Accountability
            </div>
            <div className={styles.title3}>
            Promoting transparency in environmental initiatives involves establishing an open dialogue with environmentalists by regularly inviting them to participate. To ensure transparency, unrestricted access to raw data is crucial. This approach fosters trust and cooperation between stakeholders, enabling a collaborative effort towards sustainable practices. Environmentalists can analyze the data, identify concerns, and offer valuable insights. By embracing this inclusive approach, The Sustanify Hub can demonstrate a commitment to environmental protection, accountability, and data-driven decision-making, ultimately leading to more effective and responsible environmental policies and actions.
            </div>
          </div>

          <div className={styles.right}>
            <img src='/8.svg' />
            <img src='/12.svg' />
            <img src='/13.svg' />
            <img src='/15.svg' />
          </div>
        </div>
      </div>

    </>
  );
}

export default Mission;

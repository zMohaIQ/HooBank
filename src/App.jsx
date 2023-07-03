import styles from "./styles";

import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, Cta, Footer } from "./components";

const App = () => {
  return (
    <div className="w-full overflow-hidden bg-primary">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={` bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={` bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <Cta />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import { Link } from "react-router-dom";
import clx from "classnames";
import styles from "./MainPage.module.scss";

interface MainPageProps {
  className?: string;
}

const MainPage: React.FC<MainPageProps> = (props) => {
  const { className } = props;

  const mainpageClasses = clx(styles.MainPage, {
    [className!]: className,
  });

  return (
    <div className={mainpageClasses}>
      <h1 className={styles.title}>The Advanced react-router-dom Configuration</h1>
   
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/profiles" className={styles.link}>
          Profiles
        </Link>
        <Link to="/profiles/123" className={styles.link}>
          Profile Details (123)
        </Link>
      </nav>
      <section className={styles.routes}>
        <h2>Available Routes</h2>
        <ul className={styles.routeList}>
          <li className={styles.routeItem}>
            <code className={styles.routeCode}>/</code> - Main Page
          </li>
          <li className={styles.routeItem}>
            <code className={styles.routeCode}>/profiles</code> - Profile Page
          </li>
          <li className={styles.routeItem}>
            <code className={styles.routeCode}>/profiles/:id</code> - Profile Details Page
          </li>
          <li className={styles.routeItem}>
            <code className={styles.routeCode}>*</code> - Not Found Page
          </li>
        </ul>
      </section>
    </div>
  );
};

export default React.memo(MainPage);

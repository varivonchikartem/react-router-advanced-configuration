import React from "react";
import clx from "classnames";
import styles from "./App.module.scss";
import { AppRouter } from "./providers/AppRouter/ui/AppRouter";

interface AppProps {
  className?: string;
}

const App: React.FC<AppProps> = (props) => {
  const { className } = props;

  const appClasses = clx(styles.App, {
    [className!]: className,
  });

  return (
    <main className={appClasses}>
      <AppRouter />
    </main>
  );
};

export default React.memo(App);

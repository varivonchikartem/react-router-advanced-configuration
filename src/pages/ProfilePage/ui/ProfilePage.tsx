import React from "react";
import clx from "classnames";
import styles from "./ProfilePage.module.scss";

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = (props) => {
  const { className } = props;

  const profilepageClasses = clx(styles.ProfilePage, {
    [className!]: className,
  });

  return <div className={profilepageClasses}>ProfilePage</div>;
};

export default React.memo(ProfilePage);

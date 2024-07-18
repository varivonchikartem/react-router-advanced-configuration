import React from "react";
import clx from "classnames";
import styles from "./ProfileDetailsPage.module.scss";

import { useParams } from "react-router-dom";

interface ProfileDetailsPageProps {
  className?: string;
}

const ProfileDetailsPage: React.FC<ProfileDetailsPageProps> = (props) => {
  const { className } = props;

  const profiledetailspageClasses = clx(styles.ProfileDetailsPage, {
    [className!]: className,
  });

  const { id } = useParams<{ id: string }>();

  return (
    <div className={profiledetailspageClasses}>
      <h1>Profile Details Page</h1>
      <p>Profile ID: {id}</p>
    </div>
  );
};

export default React.memo(ProfileDetailsPage);

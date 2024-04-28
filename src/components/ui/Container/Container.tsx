import clsx from "clsx";
import styles from "./Container.module.scss";

const Container = ({ children, className, ...props }:any) => {
  return (
    <div className={clsx(styles.container, className)} {...props}>
      {children}
    </div>
  );
};

export default Container;

import { FieldHookConfig, useField } from 'formik';
import styles from "./CheckBox.module.scss";

interface ICheckBoxProps {
  label: string;
}

function CheckBox({
  label,
  ...props
}: ICheckBoxProps & FieldHookConfig<string>) {
  const [field, meta] = useField(props);
  return (
    <div className={styles.container}>
      <input type="checkbox" className={styles.checkbox} {...field} />
      <label htmlFor={props.id || props.name} className={styles.label}>{label}</label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default CheckBox;

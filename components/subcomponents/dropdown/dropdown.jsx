import style from "./dropdown.module.css";

const Dropdown = ({ children }) => {
  return (
    <div className={style.dropdowncontainer}>
      <div className={style.innercontainer}>{children}</div>
    </div>
  );
};

export default Dropdown;

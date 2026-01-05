function TabButton({ label, isActive, onClick }) {
  return (
    <button className={isActive ? "active" : ""} onClick={onClick}>
      {label}
    </button>
  );
}

export default TabButton;

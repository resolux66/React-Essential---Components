function TabContent(props) {
  return (
    <div id="tab-content">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <pre>{props.code}</pre>
    </div>
  );
}

export { TabContent };

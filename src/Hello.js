const Hello = ({name, color}) => {
  return (
      <div style={{color: color}}>
        hello, {name}
      </div>
  );
};

Hello.defaultProps = {
  name: 'Unknown'
}

export default Hello;
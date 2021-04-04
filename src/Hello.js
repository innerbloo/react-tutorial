const Hello = ({name, color, isSpecial}) => {
  return (
    <div style={{
      color
    }}>
      {isSpecial && <b>* </b>}
      hello, {name}
    </div>
  );
};

Hello.defaultProps = {
  name: 'Unknown'
}

export default Hello;
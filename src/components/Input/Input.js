export const Input = (props) => {
  return (
    <div>
      <label>
        {props.label}
        <input onChange={props.onChange} {...props} maxLength="20" />
      </label>
    </div>
  );
};

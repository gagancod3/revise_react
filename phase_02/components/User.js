const User = (props) => {
    //* Destructuring array
    const {name, profile} = props;
  return (
    <div className="user-card">
      <h1>{name}</h1>
      <h2>{profile}</h2>
      <h3>Functional component</h3>
    </div>
  );
};
export default User;
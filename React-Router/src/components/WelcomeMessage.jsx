const WelcomeMessage = ({ onGetPostClick }) => {
  return (
    <center className="welcome">
      <h1>There is no post</h1>
      {/* <button
        type="button"
        className="btn btn-primary "
        onClick={onGetPostClick}
      >
        Get Posts From Server
      </button> */}
    </center>
  );
};
export default WelcomeMessage;

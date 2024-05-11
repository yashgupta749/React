function Random() {
  let random = Math.ceil(Math.random() * 100);
  return (
    <p style={{ "background-color": "#red" }}>random number is: {random}</p>
  );
}

export default Random;

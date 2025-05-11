const Something = () => {
  const myName = "Tomba Meitei";
  const multiply = (a, b) => a * b;
  const specialClass = "Dynamic-Coders";

  return (
    <section>
      <p>2 + 2 = {2 + 2}</p>
      <h1>{myName}</h1>
      <p>My Friend List: {["Chaoba", "John", "Thoibi", "Khamba"]}</p>
      <p>2 * 2 ={multiply(2, 2)}</p>
      <p>{specialClass}This is a Special Class</p>
    </section>
  );
};

export default Something;

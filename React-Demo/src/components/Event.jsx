// const Button = () => {
//     // Example-01
// //   const handleClick = () => console.log(Math.round(Math.random() * 10));
// //   return <button onClick={handleClick}>Click Me</button>;

// // Example-02

// };

// export default Button;

// Example-02

// const Copy = () => {
//   function copyHandler() {
//     console.log("Stop stealing My Content");
//   }

//   return (
//     <p onCopy={copyHandler}>
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae,
//       molestias nobis. Aliquid reiciendis impedit, cumque aspernatur officia,
//       doloribus excepturi dolores assumenda magnam odit cum debitis.
//     </p>
//   );
// };

// export default Copy;

// Example -03
const Move = () => {
  function moveHandler() {
    alert("Mouse Move Event Fired");
    console.log("Mouse Move Event Fired");
  }

  return (
    <p onMouseOver={moveHandler}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste obcaecati
      mollitia laborum. Hic dignissimos voluptatum perspiciatis. Praesentium
      officiis impedit itaque earum assumenda? Aspernatur iste, quibusdam vel
      quis nobis veritatis necessitatibus quod accusantium, minus ab provident
      dolorem reprehenderit impedit sit quos sint. Nesciunt magnam reprehenderit
      facilis. Nam, nemo! Et, culpa at?
    </p>
  );
};

export default Move;

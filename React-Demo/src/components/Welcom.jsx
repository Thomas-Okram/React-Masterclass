// Props are how we pass data from one component to another.
// They allow components to be dynamic and reuseable.

function Welcome(props) {
  return <h1>Welcome to, {props.name}</h1>;
}

export default Welcome;

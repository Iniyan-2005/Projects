// YOUR JAVASCRIPT CODE FOR INDEX.HTML GOES HERE
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}

export default function App() {
  return <Greeting name="world" />
}

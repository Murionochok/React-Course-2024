import StackItem from "./StackItem";
const stack = [
  {
    technology: "JavaScript",
    level: "Intermediate",
    color: "#ff0000",
  },
  {
    technology: "React",
    level: "Intermediate",
    color: "#0fffff",
  },
  {
    technology: "HTML+CSS",
    level: "Beginner",
    color: "#0000ff",
  },
];
export default function App() {
  return (
    <div className="container">
      <img
        src="https://photoscissors.com/images/samples/1-before.jpg"
        alt="test"
      />
      <div className="description">
        <h1>Ivan Fedoniuk</h1>
        <p>
          Student at Lviv Polytechnic National University. Stydy web
          technologies. Currently enrolled on 2 courses: React.js and Node.js
        </p>
        <div className="stack">
          {stack.map((item) => (
            <StackItem {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

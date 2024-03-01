export default function StackItem({ technology, level, color }) {
  return (
    <div className="item" style={{ backgroundColor: color }}>
      {technology}
      <span>
        {level == "Beginner" && "👋"}
        {level == "Intermediate" && "🤟"}
        {level == "Advanced" && "🥵"}
      </span>
    </div>
  );
}

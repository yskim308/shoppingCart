import { useParams } from "react-router-dom";

export default function Category() {
  const { category } = useParams();
  return (
    <div>
      <h1>now at {category}</h1>
    </div>
  );
}

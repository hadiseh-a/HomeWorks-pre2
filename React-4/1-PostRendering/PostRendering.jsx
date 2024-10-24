import { useEffect, useState } from "react";

function PostRendering() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setData(data);
          setLoading(false);
        }
      });
  }, []);
  return loading ? (
    <p>Loading...</p>
  ) : (
    <ul>
      {data.map((item) => (
        <li key={item.id} style={{listStyle:"none"
        }}>
          <article style={{width:"20rem", backgroundColor:"green", borderRadius:"1rem"} }>
            <h2>{item.userId}</h2>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}
export default PostRendering;

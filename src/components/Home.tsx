import { useEffect, useState } from "react";
import axios from "axios";

const Home: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchData = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/user`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(res.data);
    };

    fetchData();
  }, []);

  return (
    <div className="home-container flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">{message}</h1>
    </div>
  );
};

export default Home;

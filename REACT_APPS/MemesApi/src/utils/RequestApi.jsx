import axios from "axios";
import { useEffect, useState } from "react";
export default function RequestApi() {
  const [memes, setMemes] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      const fetchData = () => {
        const options = {
          method: "GET",
          url: "https://programming-memes-reddit.p.rapidapi.com/",
          headers: {
            "X-RapidAPI-Key":
              "5871677ea2mshcf8ac0ea6b394a9p1e600fjsn13707ac9fc95",
            "X-RapidAPI-Host": "programming-memes-reddit.p.rapidapi.com",
          },
        };

        axios
          .request(options)
          .then(function (response) {
            setMemes(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });
      };
      fetchData();
    }, 3000);
  }, []);
  return memes;
}

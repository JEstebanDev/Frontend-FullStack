import React, { useEffect, useState } from "react";
import { User } from "../interfaces/User.interface";
import { fetchJsonPlaceHolder } from "../Utils/JsonPlaceHolder";
import UserCard from "./UserCard";

export default function Card() {
  const [user, setUser] = useState<User[]>([]);

  useEffect(() => {
    fetchJsonPlaceHolder().then((response) => {
      setUser(response);
    });
  }, []);

  const deleteUser = (id: number) => {
    const filterUser = user.filter((src) => src.id != id);
    setUser(filterUser);
  };

  return (
    <div className="list">
      {user.map((element) => {
        return (
          <UserCard
            key={element.id}
            user={element}
            deleteUser={deleteUser}
          ></UserCard>
        );
      })}
    </div>
  );
}

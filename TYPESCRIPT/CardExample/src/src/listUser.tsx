import React, { useEffect, useState } from "react";
import { ListUsers } from "../interfaces/listUsers.interface";
import { fetchJsonPlaceHolder } from "../utils/jsonPlace";
import CardUser from "./cardUser";

export default function ListUser() {
  const [users, setUsers] = useState<ListUsers[]>([]);
  useEffect(() => {
    fetchJsonPlaceHolder().then((result) => {
      setUsers(result);
    });
  }, []);

  return (
    <div>
      <CardUser users={users} />
    </div>
  );
}

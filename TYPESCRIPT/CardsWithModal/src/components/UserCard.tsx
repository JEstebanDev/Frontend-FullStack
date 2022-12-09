import React from "react";
import Swal from "sweetalert2";
import { User } from "../interfaces/User.interface";
import { fetchDeleteUser } from "../Utils/JsonPlaceHolder";

type userProps = {
  user: User;
  deleteUser: (id: number) => void;
};

export default function UserCard({ user, deleteUser }: userProps) {
  function removeUser(id: number) {
    fetchDeleteUser(id).then((response) => {
      if (response == 200) {
        deleteUser(id);
        console.log("PERFECT");
      }
    });
  }

  function Show(user: User) {
    Swal.fire({
      title: "<strong>INFO USER</strong>",
      icon: "info",
      html: `Name: <strong>${user.name}</strong> </br>
      Phone:<strong>${user.phone}</strong> </br>
      Website:<a href="${user.website} ">Click me</a>`,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: "Thumbs up, great!",
    });
  }

  return (
    <div className="card" onClick={() => Show(user)} key={user.id}>
      <div className="top">
        <button
          onClick={(e) => {
            e.stopPropagation();
            removeUser(user.id);
          }}
        >
          X
        </button>
        <h5>{user.name}</h5>
      </div>
      <div className="bottom">
        <h6>{user.email}</h6>
      </div>
    </div>
  );
}

import React from "react";
import { useSelector } from "react-redux";
import User from "../User";
import s from "./style.module.css"

export default function UserList() {
  const users = useSelector((state) => state);
  return (
    <div>
      <div className={s.man}>
        Man
        <div className={s.user}>
          {users
            .filter((user) => user.gender === "man")
            .map((user) => (
              <User key={user.id} {...user} />
            ))}
        </div>
      </div>

      <div className={s.man}>
        Woman
        <div className={s.user}>
          {users
            .filter((user) => user.gender !== "man")
            .map((user) => (
              <User key={user.id} {...user} />
            ))}
        </div>
      </div>
    </div>
  );
}

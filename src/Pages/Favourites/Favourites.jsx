import React from "react";
import style from "./styles/Favourites.module.scss";
import { FaTrashCan } from "react-icons/fa6";

function Favourites() {
  return (
    <div className={style.Favourites}>
      <div className={style.Favourites_left_part}>
        <div className={style.btn}>
          Count
          <span>: 0</span>
        </div>
      </div>
      <div className={style.Favourites_right_part}>
        <button className={style.btn}>
          <FaTrashCan className={style.trash_icon}></FaTrashCan>
          EMPTY
        </button>
      </div>
    </div>
  );
}

export default Favourites;

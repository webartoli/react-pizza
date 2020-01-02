import React, { useState} from 'react';
import { Link } from "react-router-dom";

export const WhoAreYou = (props) => {
  return (
  <div>
    <h2>Chi sei ?</h2>
    <input type="text" value={props.name} onChange={x => props.setName(x.target.value)} />
     <Link to="/ingredients">Scegli gli ingredienti</Link>
  </div>)
  }

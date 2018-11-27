import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPoll, faListAlt} from '@fortawesome/free-solid-svg-icons'
import {library} from '@fortawesome/fontawesome-svg-core'
import {Link} from "react-router-dom";

library.add(faPoll, faListAlt);


export default function Menu(props) {
  return (
    <div className="menuContainer">
      <h1 className="menuTitle">Bonjour Jean</h1>
      {props.stats ? <Link className="linkMenu" to="/stats" onClick={props.updateStats}><FontAwesomeIcon icon="poll"/></Link> :
        <Link className="linkMenu" to="/report" onClick={props.updateStats}><FontAwesomeIcon icon="list-alt"/></Link>}
    </div>
  );
}

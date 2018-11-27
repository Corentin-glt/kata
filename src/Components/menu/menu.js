import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPoll, faListAlt} from '@fortawesome/free-solid-svg-icons'
import {library} from '@fortawesome/fontawesome-svg-core'
import {Link} from "react-router-dom";
import Proptypes from "prop-types";

library.add(faPoll, faListAlt);


export default function Menu(props) {
  const {name, stats} = props;
  return (
    <div className="menuContainer">
      <h1 className="menuTitle">Bonjour {name} !</h1>
      {stats ?
        <Link
          className="linkMenu" to="/report"
          onClick={props.updateStats}><FontAwesomeIcon
          icon="list-alt"
        />
        </Link>
        :
        <Link
          className="linkMenu" to="/stats"
          onClick={props.updateStats}
        >
          <FontAwesomeIcon
            icon="poll"
          />
        </Link>}
    </div>
  );
}

Menu.prototypes = {
  name: Proptypes.string.isRequired,
  stats: Proptypes.bool.isRequired
};

/**
 * Created by corentin on 27/11/2018.
 */
import React from 'react';
import Proptypes from 'prop-types';
import Reporting from "../../Components/Reporting/reporting";

const StatsScene = (props) => {
  return(
    <div>
      <div className="titleStatsContainer">
        Voici tes stats
      </div>
      <div className="containerMyPacks">
        <Reporting myPacks={props.myPacks}
                   isUpdate={false}
        />
      </div>
    </div>
  )
};

StatsScene.proptypes = {
  myPacks: Proptypes.array.isRequired,
};

export default StatsScene;
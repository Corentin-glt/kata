/**
 * Created by corentin on 27/11/2018.
 */
import React from 'react';
import Proptypes from 'prop-types';
import Reporting from "../../Components/reporting/reporting";

const ReportScene = (props) => {
  return (
    <div>
      REPORT
      <div className="containerMyPacks">
        <Reporting myPacks={props.myPacks}
                   isUpdate
                   updatePack={props.updateMyPack}
                   deletePack={props.deleteMyPack}
        />
      </div>
    </div>
  )
};

ReportScene.proptypes = {
  packArray: Proptypes.array.isRequired,
  myPacks: Proptypes.array.isRequired,
  myPackToUpdate: Proptypes.object.isRequired,
  updateMyPack: Proptypes.func.isRequired,
  deleteMyPack: Proptypes.func.isRequired,
};

export default ReportScene;
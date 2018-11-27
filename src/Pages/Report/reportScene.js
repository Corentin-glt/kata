/**
 * Created by corentin on 27/11/2018.
 */
import React from 'react';
import Proptypes from 'prop-types';
import ButtonArray from '../../Components/buttonArray/buttonArray';

const ReportScene = (props) => {
  return(
    <div>
      <ButtonArray array={props.packArray}/>
    </div>
  )
};

ReportScene.proptypes = {
  packArray: Proptypes.arrayOf(Object).isRequired
};

export default ReportScene;
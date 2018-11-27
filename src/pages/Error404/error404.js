/**
 * Created by corentin on 27/11/2018.
 */
import React from 'react';

const Page404Error = (props) => {
  return (
    <div>
      <div>
        <div>
          <h1>
            Page 404 !
          </h1>
        </div>
        <div>
        </div>
        <div>
          <h1>
            Oooops! Nobody knows where you are ...
          </h1>
          <p>The page you're looking for can't be found.
            Go home by
            <a href={'http://localhost:3000/'}>
               clicking here!
            </a>
          </p>
        </div>
      </div>
    </div>
  )
};
export default Page404Error;
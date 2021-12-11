import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';

export const Login = () => {
  return (
    <>
      <Link to={AppRoute.home}>Products page</Link>
      <h2>Login</h2>
      <form>
        <div>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            username:
            <input name="username" />
          </label>
        </div>
        <div>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            password:
            <input name="password" type="password" />
          </label>
        </div>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

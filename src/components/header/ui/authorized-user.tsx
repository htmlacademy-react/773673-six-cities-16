import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '@/consts/routes';
import { UserInfo } from '@/types/user';
import { useLogout } from '@/hooks/user';

type Props = {
  user: UserInfo;
};

export const AuthorizedUser: FC<Props> = ({ user }) => {
  const logout = useLogout();

  const handleLogout = (event: React.MouseEvent) => {
    event.preventDefault();
    logout();
  };

  return (
    <>
      <li className="header__nav-item user">
        <Link
          className="header__nav-link header__nav-link--profile"
          to={ROUTE_PATHS.FAVORITES}
        >
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__user-name user__name">{user.name}</span>
          <span className="header__favorite-count">3</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <a className="header__nav-link" href="#">
          <span onClick={handleLogout} className="header__signout">
            Sign out
          </span>
        </a>
      </li>
    </>
  );
};

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card shadow-lg compact side bg-white dark:bg-base-100">
      <div className="flexrow items-center space-x-4 card-body">
        <div className="avatar">
          <div className="rounded-full shadow width-14 h-14">
            <img src={avatar_url} alt="Profile" />
          </div>
        </div>
      </div>
      <div className="mx-3">
        <h2 className="card-title">{login}</h2>
        <Link className="text-purple-700" to={`/user/${login}`}>
          Visit Profile
        </Link>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;

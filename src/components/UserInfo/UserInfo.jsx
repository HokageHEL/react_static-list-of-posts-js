import './UserInfo.scss';

export const UserInfo = ({ user }) => {
  const href = `mailto:${user.email}`;

  return (
    <a className="UserInfo" href={href}>
      {user.name}
    </a>
  );
};

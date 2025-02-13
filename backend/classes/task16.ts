export const task16 = (): void => {
  type verifyUserFn = (user: User, sentValue: User) => boolean;
  type User = { username: string; password: string };

  const verifyUser: verifyUserFn = (user, sentValue) => {
    return (
      user.username === sentValue.username &&
      user.password === sentValue.password
    );
  };

  const bdUser = { username: 'joao', password: '123456' };
  const sentUser = {
    username: 'joao',
    password: '123456',
    permissions: '',
  };
  const loggedIn = verifyUser(bdUser, sentUser);
  sentUser.permissions = loggedIn.toString();

  console.log(loggedIn);
  console.log(sentUser);
};

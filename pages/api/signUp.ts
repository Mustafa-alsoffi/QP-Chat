import auth0 from '../../utils/auth0';

export default async function login(req, res) {
  try {
    await auth0.handleLogin(req, res, {
        authParams: {
            mode: 'signUp'
          }
    });
  } catch (error) {
    console.log('Here is your error buddy!')
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}

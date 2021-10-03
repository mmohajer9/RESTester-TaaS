import routes from '../../common/routes';

import { authActions } from '.';
import { toast } from 'react-toastify';
import getAxiosInstance from '../../common/axios';

export const register = (values, history) => {
  return async (dispatch) => {
    const axios = getAxiosInstance();
    const path = routes.api.registration.path;
    const payload = routes.api.registration.payload;
    payload.username = values.username;
    payload.password1 = values.password;
    payload.password2 = values.confirmPassword;
    payload.email = values.email;
    try {
      const { data } = await axios.post(path, payload);
      dispatch(authActions.setLoginInfo(data));
      toast.success('You have signed up successfully', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
      });
      toast.info('Activation Email has been sent, Check your mailbox!', {
        position: 'top-right',
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
      });
      history.push(routes.dashboard);
    } catch (error) {
      const errorMessages = error?.response?.data;
      toast.error('Registration has been failed', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      for (const field in errorMessages) {
        const message = `${field}: ${errorMessages[field][0]}`;
        toast.error(message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      }
    }
  };
};

export default register;

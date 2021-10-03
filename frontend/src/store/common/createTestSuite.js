import { toast } from 'react-toastify';
import routes from '../../common/routes';
import getAxiosInstance from '../../common/axios';
import { commonActions } from '.';

export const createTestSuite = (values, history) => {
  return async (dispatch) => {
    const axios = getAxiosInstance();
    const path = routes.api.createTestSuite.path;
    const payload = routes.api.createTestSuite.payload;

    payload.test_plan = values.testPlanId;

    try {
      await axios.post(path, payload);
      toast.success('Your test suite has been created', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
      });
      dispatch(commonActions.closeCreateModal());
      history.push(routes.testSuites);
    } catch (error) {
      toast.error('Test suite creation has been failed', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
      });
    }
  };
};

export default createTestSuite;

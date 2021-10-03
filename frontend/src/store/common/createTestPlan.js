import { toast } from 'react-toastify';
import routes from '../../common/routes';
import getAxiosInstance from '../../common/axios';
import { commonActions } from '.';

export const createTestPlan = (values, history) => {
  return async (dispatch) => {
    const axios = getAxiosInstance();
    const path = routes.api.createTestPlan.path;
    // const payload = routes.api.createTestPlan.payload;
    const data = new FormData();
    data.append('open_api_spec_file', values.name);
    data.append('operation_dep_graph_file', values.oasFile);
    data.append('name', values.odgFile);
    data.append('number_of_test_cases', +values.numberOfTestCases);
    data.append('use_example', values.useExample);

    try {
      await axios.post(path, data);
      toast.success('Your test plan has been created', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
      });
      dispatch(commonActions.closeCreateModal());
      history.push(routes.testPlans);
    } catch (error) {
      toast.error('Test plan creation has been failed', {
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

export default createTestPlan;

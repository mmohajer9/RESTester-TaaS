import routes from '../../common/routes';
import getAxiosInstance from '../../common/axios';
import { commonActions } from '.';

export const getTestSuites = (testPlanId) => {
  return async (dispatch) => {
    const axios = getAxiosInstance();
    const path = routes.api.getTestSuites.path;

    const config = {};
    if (testPlanId) {
      config.params = {};
      config.params.test_plan = testPlanId;
    }

    try {
      const { data: testSuites } = await axios.get(path, config);
      dispatch(commonActions.setTestSuites({ testSuites }));
    } catch (error) {}
  };
};

export default getTestSuites;

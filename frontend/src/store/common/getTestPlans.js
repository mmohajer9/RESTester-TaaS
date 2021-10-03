import routes from '../../common/routes';
import getAxiosInstance from '../../common/axios';
import { commonActions } from '.';

export const getTestPlans = () => {
  return async (dispatch) => {
    const axios = getAxiosInstance();
    const path = routes.api.getTestPlans.path;

    try {
      const { data: testPlans } = await axios.get(path);
      dispatch(commonActions.setTestPlans({ testPlans }));
    } catch (error) {}
  };
};

export default getTestPlans;

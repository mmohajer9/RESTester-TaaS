const routes = {
  homepage: '/',
  dashboard: '/dashboard',
  testPlans: '/dashboard/test-plans',
  testPlanDetail: '/dashboard/test-plans/:id',
  testSuites: '/dashboard/test-suites',
  testSuiteDetail: '/dashboard/test-suites/:id',

  auth: '/auth',
  api: {
    login: {
      path: '/api/rest-auth/login/',
      payload: {
        username: 'string',
        email: 'user@example.com',
        password: 'string',
      },
    },
    logout: {
      path: '/api/rest-auth/logout/',
    },
    changePassword: {
      path: '/api/rest-auth/password/change/',
      payload: {
        old_password: 'string',
        new_password1: 'string',
        new_password2: 'string',
      },
    },
    resetPassword: {
      path: '/api/rest-auth/password/reset/',
      payload: {
        email: 'user@example.com',
      },
    },
    resetPasswordConfirm: {
      path: '/api/rest-auth/password/reset/confirm/',
      payload: {
        new_password1: 'string',
        new_password2: 'string',
        uid: 'string',
        token: 'string',
      },
    },
    registration: {
      path: '/api/rest-auth/registration/',
      payload: {
        username: 'string',
        email: 'user@example.com',
        password1: 'string',
        password2: 'string',
      },
    },
    registrationResendEmail: {
      path: '/api/rest-auth/registration/verify-email/',
      payload: {
        key: 'string',
      },
    },
    registrationVerifyEmail: {
      path: '/api/rest-auth/registration/verify-email/',
      payload: {
        key: 'string',
      },
    },
    tokenRefresh: {
      path: '/api/rest-auth/token/refresh/',
      payload: {
        refresh: 'string',
      },
    },
    tokenVerify: {
      path: '/api/rest-auth/token/verify/',
      payload: {
        token: 'string',
      },
    },
    userDetail: {
      path: '/api/rest-auth/user/',
    },
  },
};

export default routes;

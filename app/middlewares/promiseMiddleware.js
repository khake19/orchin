const promiseMiddleware = () => next => async action => {
  const {
    type,
    payload: { promise, types, ...rest },
    meta = {}
  } = action;

  if (meta && 'request' in meta && meta.request === 'api') {
    const [SUCCESS, FAILURE] = types;
    next({ ...rest, type });

    try {
      const result = await promise;
      next({ ...rest, result, type: SUCCESS });
    } catch (error) {
      console.log('error: ', error);
      next({ ...rest, error, type: FAILURE });
    }
  } else {
    return next(action);
  }
};

export default promiseMiddleware;

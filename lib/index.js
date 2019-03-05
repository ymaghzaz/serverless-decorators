export const response_aws = info => {
  console.log("response_aws", 1);
  let { descriptor, key } = info;
  const fn = descriptor.value;
  return {
    ...info,
    descriptor: {
      ...descriptor,
      value: event => {
        let data = fn.call({}, event);
        return {
          statusCode: 200,
          body: JSON.stringify({
            message: data
          })
        };
      }
    }
  };
};

export const lambda_aws_async = info => {
  console.log("lambda_aws_async", 2);
  let { descriptor, key } = info;
  const fn = descriptor.value;
  return {
    ...info,
    descriptor: {
      ...descriptor,
      value: async event => {
        let data = fn.call({}, event);
        return data;
      }
    }
  };
};

export const lambda_aws = info => {
  console.log("info", info);
  let { descriptor, key } = info;
  const fn = descriptor.value;
  return {
    ...info,
    descriptor: {
      ...descriptor,
      value: (event, context) => {
        let data = fn.call({}, event);
        return {
          statusCode: 200,
          body: JSON.stringify({
            message: data
          })
        };
      }
    }
  };
};

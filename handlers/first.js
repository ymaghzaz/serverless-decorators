import { lambda_aws_async, response_aws } from "../lib";

const exportedData = {};
const dataclassexaport = ({ kind, elements }) => {
  for (let key in elements) {
    let element = elements[key];
    // console.log("elll", element);
  }
};

@dataclassexaport
class functionGropping {
  //set the decorator and everything works!
  @response_aws
  @lambda_aws_async
  name(name) {
    return name + "hello";
  }
}

const w = new functionGropping();

module.exports.hello = w.name;

// async (event, context) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: "Go Serverless v1.0! Your function executed successfully!",
//       input: event
//     })
//   };
// };

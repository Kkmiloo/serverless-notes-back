import { APIGatewayProxyEventHeaders } from 'aws-lambda';

export const getResponseHeaders = () => {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers':
      'Content-Type, Authorization, Content-Length, X-Requested-With',
  };
};

export const getUserId = (headers: APIGatewayProxyEventHeaders) => {
  console.log(headers['app-user-id']);

  return headers['app-user-id'];
};

export const getUserName = (headers: APIGatewayProxyEventHeaders) => {
  return headers['app-user-name'];
};

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
  return headers['App-User-Id'];
};

export const getUserName = (headers: APIGatewayProxyEventHeaders) => {
  return headers['App-User-Name'];
};

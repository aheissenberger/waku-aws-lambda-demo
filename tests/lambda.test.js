import { test } from 'node:test'
import assert from "node:assert"

import { handler } from '../dist/aws/serve.mjs'

// create a cloudfront api gateway event with the url path /about
const event = (path)=>({
    version: '2.0',
    routeKey: '$default',
    rawPath: path,
    rawQueryString: '',
    headers: {
        'accept-encoding': 'br,gzip',
        'cache-control': 'no-cache',
        'cloudfront-viewer-country': 'US',
        'content-length': '0',
        host: '9q2lj636ce.execute-api.us-east-1.amazonaws.com',
        pragma: 'no-cache',
        'user-agent': 'Amazon CloudFront',
        via: '2.0 dcb9765526b3272617b95932c8fefee2.cloudfront.net (CloudFront)',
        'x-amz-cf-id': 'DpxXSiSX5gNmJj_XXLtCkiFXzItBYSgfK32VLyIJ7amHjZ6d6Ejhtg==',
        'x-amzn-trace-id': 'Root=1-65afa7bb-1277f7601a7b21273bac69fe',
        'x-forwarded-for': '84.115.223.218, 64.252.89.28',
        'x-forwarded-port': '443',
        'x-forwarded-proto': 'https'
    },
    requestContext: {
        accountId: '999999999999',
        apiId: '9q2lj636ce',
        domainName: '9q2lj636ce.execute-api.us-east-1.amazonaws.com',
        domainPrefix: '9q2lj636ce',
        http: {
            method: 'GET',
            path: path,
            protocol: 'HTTP/1.1',
            sourceIp: '121.135.238.318',
            userAgent: 'Amazon CloudFront'
        },
        requestId: 'R_ceShdXoUeeaIA=',
        routeKey: '$default',
        stage: '$default',
        time: '23/Jan/2024:11:49:15 +0000',
        timeEpoch: 1706010555763
    },
    isBase64Encoded: false
})
const context = {
    //callbackWaitsForEmptyEventLoop: [Getter / Setter],
    // succeed: [Function(anonymous)],
    // fail: [Function(anonymous)],
    // done: [Function(anonymous)],
    functionVersion: '$LATEST',
    functionName: 'waku-aws-lambda-demo',
    memoryLimitInMB: '1024',
    logGroupName: '/aws/lambda/waku-aws-lambda-demo',
    logStreamName: '2024/01/23/[$LATEST]1c031f3fefea4sd69ec97ed084a8bed9',
    clientContext: undefined,
    identity: undefined,
    invokedFunctionArn: 'arn:aws:lambda:us-east-1:999999999999:function:waku-aws-lambda-demo',
    awsRequestId: 'bad54f79-4a7e-430d-a60e-41cffc9494ce',
    //getRemainingTimeInMillis: [Function: getRemainingTimeInMillis]
}


test('get static page', async t => {
    const response = await handler(event('/about'), context)
    console.log(response)
    assert.equal(response.statusCode, 200)
})
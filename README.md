# Waku AWS Lambda Template


## Introduction

This is an example setup which uses the [serverless framework](https://www.serverless.com) to deploy an application build with ⛩️ [waku.gg](https://waku.gg) to AWS.

## Architecture

* AWS CloudFront
* AWS API Gateway
* AWS Lambda
* AWS S3 buckets

## Configuration

- copy /public/** to S3 bucket
- CloudFront
  - /assets/*, /images/* from S3 bucket
  - /* from API Gateway with Lambda Function
 - API Gateway / Lambda Function
  - serve all dynamic content
  - serve static content which is not coved by the url pattern forwarded to the S3 bucket

**Important:** Change `client` and `project` to be unique before you deploy!

**serverless.yml:**
```yml
custom:
  client: demo
  project: wakuaws
```

## Deploy

```sh
pnpm deploy:aws
```

By default it will be built and deployed to you default AWS Account.

## Demo App

* `/about` static prerended page
* `/dir` dynamic page showing the directory listing from the server

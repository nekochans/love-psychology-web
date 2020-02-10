#!/bin/sh

if [ "${DEPLOY_STAGE}" != "stg" ] && [ "$1" != "prod" ]
then
  echo  "Invalid Environment variable! Please set Your DEPLOY_STAGE."
  exit 1
fi

if [ "${CLOUDFRONT_DISTRIBUTION_ID}" = "" ]
then
  echo  "Invalid Environment variable! Please set Your CLOUDFRONT_DISTRIBUTION_ID."
  exit 1
fi

yarn run build:${DEPLOY_STAGE}
aws s3 rm s3://${DEPLOY_STAGE}-love-psychology-web --recursive
aws s3 sync ./build s3://${DEPLOY_STAGE}-love-psychology-web
aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_DISTRIBUTION_ID} --paths "/*"

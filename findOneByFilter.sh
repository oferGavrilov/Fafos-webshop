#!/bin/bash

appid ="data-drwva"

apikey="5bjHlorLPDthuztKPbtxIpPIlDjUCkOr29KYSHt4IynAOXAlCWCrELIAnRSBFQAP"

baseurl="https://eu-central-1.aws.data.mongodb-api.com/app/data-drwva/endpoint/data/v1"

endpoint="/action/findOne"

dataSource="Cluster0"

database="fafos"

collection="product"

filter='{
      "title":{
            "$regex": "jasmin",
            "$options": "i"
      }
}'

curl -XPOST -H "api-key: $apikey" -H 'Access-Control-Request-Headers: *' -H 'Content-type: application/json' -d '{ 
  "dataSource": "'"$dataSource"'", 
  "database": "'"$database"'", 
  "collection": "'"$collection"'",
  "filter": '"$filter"'
}' $baseurl$endpoint | npx json
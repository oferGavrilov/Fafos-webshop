#!/bin/bash
source .env

appid="data-drwva"

apikey=$NEXT_PUBLIC_MONGO_DATA_API_KEY

baseurl=$NEXT_PUBLIC_MONGODB_DATA_API_URL

endpoint="/action/findOne"

dataSource=$NEXT_PUBLIC_MONGODB_DATA_SOURCE

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
#!/bin/bash

API="http://localhost:4741"
URL_PATH="/bugs"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "bug": {
      "name": "'"${NAME}"'",
      "age": "'"${AGE}"'",
      "favErrorCode": "'"${FAVERRCODE}"'"
    }
  }'

echo

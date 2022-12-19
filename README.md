# NodeJS API to rate/price shipping orders based on given parcel attributes
## example POST success where shipping coverage can be found
```
# request based on zip coverage
curl --location --request POST 'localhost:3000/api/v1/orders/rate' \
--header 'Content-Type: application/json' \
--data-raw '{
   "parcel":{
      "weight":10,
      "height":10,
      "length":10,
      "width":10,
      "unit":"oz",
      "zip":94107
   }
}'

# response
{
    "price": 10,
    "zip": 94107,
    "max_weight": 800,
    "carrier": "x",
    "unit": "oz",
    "region": "local"
}
```

## example POST failure where to shipping coverage can be found

```
# request based on no zip coverage
curl --location --request POST 'localhost:3000/api/v1/orders/rate' \
--header 'Content-Type: application/json' \
--data-raw '{
   "parcel":{
      "weight":10,
      "height":10,
      "length":10,
      "width":10,
      "unit":"oz",
      "zip":11111
   }
}'

# response
{
    "errors": [
        {
            "message": "Unable to find shipping coverage for given parcel. Make sure the weight and dimentional weight does not surpase agreed weight limit of 800 oz",
            "field": "Check fields: weight, height, length or width for possible errors"
        }
    ],
    "message": "Unprocessable Entity"
}
```

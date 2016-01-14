curl --header "Authorization: key=AIzaSyCmX8OsnHG8uXJyhoNaI9rtLkf4myZsHRY" \
       --header Content-Type:"application/json" \
       https://gcm-http.googleapis.com/gcm/send \
       -d "{\"registration_ids\":[\"eQI-YHETokk:APA91bGzKHQJj-rWsOnspHqJElvulrWlS3k3OlUw2uKLWkl6_75gPl6JMPHXZYvg87uBmvtGGEO0Vvywg4_WVb3iYJI3SyQx39HCAhUtspkVCad3yhKBEuQqTTIvlf4lymKVqcqPN282\"]}"

https://android.googleapis.com/gcm/send/fvgaDTdRc4o:APA91bGQMhyI4JiFXbcjCRRDXY5JLu5S4gDnB-7Z_jEENkNERKNVvO3JSBmmU9SyOxf8K_suz-2RCjxTFMwlUoFdYP6zFHsjAzXT7hg9Hcw3ARyZ_Ne2Hf-obMZ8YpNaaAl21-H2SNkk

https://android.googleapis.com/gcm/send/eQI-YHETokk:APA91bGzKHQJj-rWsOnspHqJElvulrWlS3k3OlUw2uKLWkl6_75gPl6JMPHXZYvg87uBmvtGGEO0Vvywg4_WVb3iYJI3SyQx39HCAhUtspkVCad3yhKBEuQqTTIvlf4lymKVqcqPN282

var gcmUrl = 'https://gcm-http.googleapis.com/gcm/send'
var gcmKey = 'key=AIzaSyCmX8OsnHG8uXJyhoNaI9rtLkf4myZsHR'
var registrationId = 'eQI-YHETokk:APA91bGzKHQJj-rWsOnspHqJElvulrWlS3k3OlUw2uKLWkl6_75gPl6JMPHXZYvg87uBmvtGGEO0Vvywg4_WVb3iYJI3SyQx39HCAhUtspkVCad3yhKBEuQqTTIvlf4lymKVqcqPN282'

fetch(gcmUrl, {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': gcmKey
  },
  body: JSON.stringify({
    'registration_ids': [ registrationId ]
  })
})


curl --header "Authorization: key=AIzaSyCmX8OsnHG8uXJyhoNaI9rtLkf4myZsHRY" \
       --header Content-Type:"application/json" \
       https://gcm-http.googleapis.com/gcm/send \
       -d "{\"registration_ids\":[\"cenAZ6Z0ji8:APA91bECMVAo3BRX2OzcIEaX8TLn0HBScuqrAkPwWfPAVlAgj6-8fCJvvN1OZfpWPWv9q05s-67BVxdvPq-A3InKwBQQBeXHb7E8FP-isLv3jaQb0MCk2Fo6Kz5dLr9q4FuziL9p_xMO\"]}"

"endpointID": "cenAZ6Z0ji8:APA91bECMVAo3BRX2OzcIEaX8TLn0HBScuqrAkPwWfPAVlAgj6-8fCJvvN1OZfpWPWv9q05s-67BVxdvPq-A3InKwBQQBeXHb7E8FP-isLv3jaQb0MCk2Fo6Kz5dLr9q4FuziL9p_xMO"

![demo](images/screenshot.PNG)

# Push Notifications
![Build Status](https://travis-ci.org/shawnlimws/push-notifications-app.svg?branch=master)

## Description
Simple experiment with [Google Cloud Messaging](https://developers.google.com/cloud-messaging) and [Service Workers](https://developers.google.com/web/fundamentals/getting-started/push-notifications/?hl=en). Linked it to our [Giant CRM](http://giantcrm.herokuapp.com/) system to allow users to send notifications to their subscribers.

### PouchDB
Made use of [PouchDB](http://pouchdb.com/) to store the subscriber endpoints and allow the crm to pull the data and send new notifications to entire subscriber list.

#### Things to Work On
1. Subscribe/Unsubscribe button doesn't catch error.

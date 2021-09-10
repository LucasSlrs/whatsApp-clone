import { Meteor } from "meteor/meteor";
import { createUsers } from "../imports/api/helpers";
import { listOfusers } from "../imports/api/users";

Meteor.startup(() => {
  const numberOfUsers: number = Meteor.users.find().count();
  if (numberOfUsers === 0) {
    console.log("no users found");
    createUsers(listOfusers);
  } else {
    console.log("there's some users");
  }
});

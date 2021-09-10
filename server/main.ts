import { Meteor } from "meteor/meteor";

Meteor.startup(() => {
  const numberOfUsers: number = Meteor.users.find().count();
  if (numberOfUsers === 0) {
    console.log("no users found");
  } else {
    console.log("there's some users");
  }
});

// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by agenda-jobs-collection.js.
import { name as packageName } from "meteor/igoandsee:agenda-jobs-collection";

// Write your tests here!
// Here is an example.
Tinytest.add('agenda-jobs-collection - example', function (test) {
  test.equal(packageName, "agenda-jobs-collection");
});

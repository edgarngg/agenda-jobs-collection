import { Mongo } from 'meteor/mongo';

class AgendaJobsCollection extends Mongo.Collection {

};

export const AgendaJobs = new AgendaJobsCollection('agendaJobs');
AgendaJobs.attachBehaviour('timestampable');

import type {Types, PopulatedDoc, Document} from 'mongoose';
import {Schema, model} from 'mongoose';
import type {User} from '../user/model';
import type {Freet} from '../freet/model'

/**
 * This file defines the properties stored in a Circle
 * DO NOT implement operations here ---> use collection file
 */

// Type definition for Freet on the backend
export type Circle = {
  _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
  authorId: Types.ObjectId;
  name: String;
  users: Set<Types.ObjectId>;
  freets: Set<Types.ObjectId>;
};

export type PopulatedCircle = {
  _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
  authorId: User;
  name: String;
  users: Set<User>;
  freets: Set<Freet>;
};

// Mongoose schema definition for interfacing with a MongoDB table
// Freets stored in this table will have these fields, with the
// type given by the type property, inside MongoDB
const CircleSchema = new Schema<Circle>({
  // The author userId of a circle
  authorId: {
    // Use Types.ObjectId outside of the schema
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  // The name of the circle
  name: {
    type: String,
    required: true
  },
  // The users that make up a circle
  users: {
    type: Set<User>,
    required: true
  },
  // The freets that make up a circle
  freets: {
    type: Set<Freet>,
    required: true
  },
});

const CircleModel = model<Circle>('Circle', CircleSchema);
export default CircleModel;

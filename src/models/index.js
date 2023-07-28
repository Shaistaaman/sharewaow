// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Cities = {
  "ISLAMABAD": "ISLAMABAD",
  "LAHORE": "LAHORE",
  "KARACHI": "KARACHI",
  "DIKHAN": "DIKHAN",
  "DGKHAN": "DGKHAN",
  "FAISALABAD": "FAISALABAD",
  "HYDERABAD": "HYDERABAD",
  "MULTAN": "MULTAN",
  "PESHAWAR": "PESHAWAR",
  "GUJARANWALA": "GUJARANWALA",
  "QUETTA": "QUETTA"
};

const FoodCondition = {
  "FRESH": "FRESH",
  "LEFTOVER": "LEFTOVER"
};

const Condition = {
  "NEW": "NEW",
  "USED": "USED"
};

const UserType = {
  "SELLER": "SELLER",
  "REQUESTER": "REQUESTER"
};

const Status = {
  "ACTIVE": "ACTIVE",
  "BLOCK": "BLOCK"
};

const { FAQ, Rides, Foods, Books, Clothes, Users } = initSchema(schema);

export {
  FAQ,
  Rides,
  Foods,
  Books,
  Clothes,
  Users,
  Cities,
  FoodCondition,
  Condition,
  UserType,
  Status
};
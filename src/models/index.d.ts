import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

export enum Cities {
  ISLAMABAD = "ISLAMABAD",
  LAHORE = "LAHORE",
  KARACHI = "KARACHI",
  DIKHAN = "DIKHAN",
  DGKHAN = "DGKHAN",
  FAISALABAD = "FAISALABAD",
  HYDERABAD = "HYDERABAD",
  MULTAN = "MULTAN",
  PESHAWAR = "PESHAWAR",
  GUJARANWALA = "GUJARANWALA",
  QUETTA = "QUETTA"
}

export enum FoodCondition {
  FRESH = "FRESH",
  LEFTOVER = "LEFTOVER"
}

export enum Condition {
  NEW = "NEW",
  USED = "USED"
}

export enum UserType {
  SELLER = "SELLER",
  REQUESTER = "REQUESTER"
}

export enum Status {
  ACTIVE = "ACTIVE",
  BLOCK = "BLOCK"
}



type EagerFAQ = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FAQ, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly question: string;
  readonly answer: string;
  readonly status: Status | keyof typeof Status;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFAQ = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FAQ, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly question: string;
  readonly answer: string;
  readonly status: Status | keyof typeof Status;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FAQ = LazyLoading extends LazyLoadingDisabled ? EagerFAQ : LazyFAQ

export declare const FAQ: (new (init: ModelInit<FAQ>) => FAQ) & {
  copyOf(source: FAQ, mutator: (draft: MutableModel<FAQ>) => MutableModel<FAQ> | void): FAQ;
}

type EagerRides = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Rides, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly price_per_seat: number;
  readonly title: string;
  readonly no_of_seats: number;
  readonly male_seats: number;
  readonly female_seats: number;
  readonly date_to_leave: string;
  readonly time_to_leave: string;
  readonly ride_destination: Cities | keyof typeof Cities;
  readonly ride_from: Cities | keyof typeof Cities;
  readonly expire_ride?: string | null;
  readonly phone?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRides = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Rides, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly price_per_seat: number;
  readonly title: string;
  readonly no_of_seats: number;
  readonly male_seats: number;
  readonly female_seats: number;
  readonly date_to_leave: string;
  readonly time_to_leave: string;
  readonly ride_destination: Cities | keyof typeof Cities;
  readonly ride_from: Cities | keyof typeof Cities;
  readonly expire_ride?: string | null;
  readonly phone?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Rides = LazyLoading extends LazyLoadingDisabled ? EagerRides : LazyRides

export declare const Rides: (new (init: ModelInit<Rides>) => Rides) & {
  copyOf(source: Rides, mutator: (draft: MutableModel<Rides>) => MutableModel<Rides> | void): Rides;
}

type EagerFoods = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Foods, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image: string;
  readonly condition: FoodCondition | keyof typeof FoodCondition;
  readonly price: number;
  readonly title: string;
  readonly UsersFoods?: Users | null;
  readonly expire_foods?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly foodsUsersFoodsId?: string | null;
}

type LazyFoods = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Foods, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image: string;
  readonly condition: FoodCondition | keyof typeof FoodCondition;
  readonly price: number;
  readonly title: string;
  readonly UsersFoods: AsyncItem<Users | undefined>;
  readonly expire_foods?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly foodsUsersFoodsId?: string | null;
}

export declare type Foods = LazyLoading extends LazyLoadingDisabled ? EagerFoods : LazyFoods

export declare const Foods: (new (init: ModelInit<Foods>) => Foods) & {
  copyOf(source: Foods, mutator: (draft: MutableModel<Foods>) => MutableModel<Foods> | void): Foods;
}

type EagerBooks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Books, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image: string;
  readonly condition: Condition | keyof typeof Condition;
  readonly price: number;
  readonly title: string;
  readonly UsersBooks?: Users | null;
  readonly expire_books?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly booksUsersBooksId?: string | null;
}

type LazyBooks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Books, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image: string;
  readonly condition: Condition | keyof typeof Condition;
  readonly price: number;
  readonly title: string;
  readonly UsersBooks: AsyncItem<Users | undefined>;
  readonly expire_books?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly booksUsersBooksId?: string | null;
}

export declare type Books = LazyLoading extends LazyLoadingDisabled ? EagerBooks : LazyBooks

export declare const Books: (new (init: ModelInit<Books>) => Books) & {
  copyOf(source: Books, mutator: (draft: MutableModel<Books>) => MutableModel<Books> | void): Books;
}

type EagerClothes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Clothes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image: string;
  readonly condition: Condition | keyof typeof Condition;
  readonly price: number;
  readonly UsersClothes?: Users | null;
  readonly title: string;
  readonly expire_clothes?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly clothesUsersClothesId?: string | null;
}

type LazyClothes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Clothes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly image: string;
  readonly condition: Condition | keyof typeof Condition;
  readonly price: number;
  readonly UsersClothes: AsyncItem<Users | undefined>;
  readonly title: string;
  readonly expire_clothes?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly clothesUsersClothesId?: string | null;
}

export declare type Clothes = LazyLoading extends LazyLoadingDisabled ? EagerClothes : LazyClothes

export declare const Clothes: (new (init: ModelInit<Clothes>) => Clothes) & {
  copyOf(source: Clothes, mutator: (draft: MutableModel<Clothes>) => MutableModel<Clothes> | void): Clothes;
}

type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name: string;
  readonly last_name?: string | null;
  readonly profile_pic?: string | null;
  readonly phone: string;
  readonly email: string;
  readonly status?: Status | keyof typeof Status | null;
  readonly user_type?: (UserType | null)[] | keyof typeof UserType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name: string;
  readonly last_name?: string | null;
  readonly profile_pic?: string | null;
  readonly phone: string;
  readonly email: string;
  readonly status?: Status | keyof typeof Status | null;
  readonly user_type?: (UserType | null)[] | keyof typeof UserType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}
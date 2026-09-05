/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as applications from "../applications.js";
import type * as auth from "../auth.js";
import type * as auth_emailOtp from "../auth/emailOtp.js";
import type * as dailyTasks from "../dailyTasks.js";
import type * as diary from "../diary.js";
import type * as enquiries from "../enquiries.js";
import type * as http from "../http.js";
import type * as internships from "../internships.js";
import type * as profiles from "../profiles.js";
import type * as rateLimits from "../rateLimits.js";
import type * as roadmap from "../roadmap.js";
import type * as seedMore from "../seedMore.js";
import type * as seedMore2 from "../seedMore2.js";
import type * as skills from "../skills.js";
import type * as users from "../users.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  applications: typeof applications;
  auth: typeof auth;
  "auth/emailOtp": typeof auth_emailOtp;
  dailyTasks: typeof dailyTasks;
  diary: typeof diary;
  enquiries: typeof enquiries;
  http: typeof http;
  internships: typeof internships;
  profiles: typeof profiles;
  rateLimits: typeof rateLimits;
  roadmap: typeof roadmap;
  seedMore: typeof seedMore;
  seedMore2: typeof seedMore2;
  skills: typeof skills;
  users: typeof users;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};

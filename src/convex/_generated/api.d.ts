/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type { ApiFromModules, FilterApi, FunctionReference } from "convex/server";
import type * as applications from "../applications.js";
import type * as auth from "../auth.js";
import type * as dailyTasks from "../dailyTasks.js";
import type * as diary from "../diary.js";
import type * as enquiries from "../enquiries.js";
import type * as internships from "../internships.js";
import type * as profiles from "../profiles.js";
import type * as rateLimits from "../rateLimits.js";
import type * as roadmap from "../roadmap.js";
import type * as seedMore from "../seedMore.js";
import type * as seedMore2 from "../seedMore2.js";
import type * as skills from "../skills.js";
import type * as users from "../users.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  applications: typeof applications;
  auth: typeof auth;
  dailyTasks: typeof dailyTasks;
  diary: typeof diary;
  enquiries: typeof enquiries;
  internships: typeof internships;
  profiles: typeof profiles;
  rateLimits: typeof rateLimits;
  roadmap: typeof roadmap;
  seedMore: typeof seedMore;
  seedMore2: typeof seedMore2;
  skills: typeof skills;
  users: typeof users;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

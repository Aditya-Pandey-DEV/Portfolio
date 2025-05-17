
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Resume
 * 
 */
export type Resume = $Result.DefaultSelection<Prisma.$ResumePayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model Experience
 * 
 */
export type Experience = $Result.DefaultSelection<Prisma.$ExperiencePayload>
/**
 * Model Education
 * 
 */
export type Education = $Result.DefaultSelection<Prisma.$EducationPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Certification
 * 
 */
export type Certification = $Result.DefaultSelection<Prisma.$CertificationPayload>
/**
 * Model SocialLink
 * 
 */
export type SocialLink = $Result.DefaultSelection<Prisma.$SocialLinkPayload>
/**
 * Model SEO
 * 
 */
export type SEO = $Result.DefaultSelection<Prisma.$SEOPayload>
/**
 * Model Theme
 * 
 */
export type Theme = $Result.DefaultSelection<Prisma.$ThemePayload>
/**
 * Model FocusArea
 * 
 */
export type FocusArea = $Result.DefaultSelection<Prisma.$FocusAreaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resume`: Exposes CRUD operations for the **Resume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resumes
    * const resumes = await prisma.resume.findMany()
    * ```
    */
  get resume(): Prisma.ResumeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experience`: Exposes CRUD operations for the **Experience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiences
    * const experiences = await prisma.experience.findMany()
    * ```
    */
  get experience(): Prisma.ExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.education`: Exposes CRUD operations for the **Education** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Educations
    * const educations = await prisma.education.findMany()
    * ```
    */
  get education(): Prisma.EducationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.certification`: Exposes CRUD operations for the **Certification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Certifications
    * const certifications = await prisma.certification.findMany()
    * ```
    */
  get certification(): Prisma.CertificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socialLink`: Exposes CRUD operations for the **SocialLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialLinks
    * const socialLinks = await prisma.socialLink.findMany()
    * ```
    */
  get socialLink(): Prisma.SocialLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sEO`: Exposes CRUD operations for the **SEO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SEOS
    * const sEOS = await prisma.sEO.findMany()
    * ```
    */
  get sEO(): Prisma.SEODelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.theme`: Exposes CRUD operations for the **Theme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Themes
    * const themes = await prisma.theme.findMany()
    * ```
    */
  get theme(): Prisma.ThemeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.focusArea`: Exposes CRUD operations for the **FocusArea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FocusAreas
    * const focusAreas = await prisma.focusArea.findMany()
    * ```
    */
  get focusArea(): Prisma.FocusAreaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Resume: 'Resume',
    Skill: 'Skill',
    Experience: 'Experience',
    Education: 'Education',
    Project: 'Project',
    Certification: 'Certification',
    SocialLink: 'SocialLink',
    SEO: 'SEO',
    Theme: 'Theme',
    FocusArea: 'FocusArea'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "resume" | "skill" | "experience" | "education" | "project" | "certification" | "socialLink" | "sEO" | "theme" | "focusArea"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Resume: {
        payload: Prisma.$ResumePayload<ExtArgs>
        fields: Prisma.ResumeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findFirst: {
            args: Prisma.ResumeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findMany: {
            args: Prisma.ResumeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          create: {
            args: Prisma.ResumeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          createMany: {
            args: Prisma.ResumeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ResumeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          update: {
            args: Prisma.ResumeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          deleteMany: {
            args: Prisma.ResumeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResumeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResumeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          aggregate: {
            args: Prisma.ResumeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResume>
          }
          groupBy: {
            args: Prisma.ResumeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResumeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ResumeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ResumeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ResumeCountArgs<ExtArgs>
            result: $Utils.Optional<ResumeCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SkillFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SkillAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      Experience: {
        payload: Prisma.$ExperiencePayload<ExtArgs>
        fields: Prisma.ExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findFirst: {
            args: Prisma.ExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findMany: {
            args: Prisma.ExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          create: {
            args: Prisma.ExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          createMany: {
            args: Prisma.ExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          update: {
            args: Prisma.ExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          deleteMany: {
            args: Prisma.ExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          aggregate: {
            args: Prisma.ExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperience>
          }
          groupBy: {
            args: Prisma.ExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienceGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ExperienceFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ExperienceAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienceCountAggregateOutputType> | number
          }
        }
      }
      Education: {
        payload: Prisma.$EducationPayload<ExtArgs>
        fields: Prisma.EducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findFirst: {
            args: Prisma.EducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findMany: {
            args: Prisma.EducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          create: {
            args: Prisma.EducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          createMany: {
            args: Prisma.EducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          update: {
            args: Prisma.EducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          deleteMany: {
            args: Prisma.EducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          aggregate: {
            args: Prisma.EducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducation>
          }
          groupBy: {
            args: Prisma.EducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EducationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EducationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EducationCountArgs<ExtArgs>
            result: $Utils.Optional<EducationCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProjectFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProjectAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Certification: {
        payload: Prisma.$CertificationPayload<ExtArgs>
        fields: Prisma.CertificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CertificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CertificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationPayload>
          }
          findFirst: {
            args: Prisma.CertificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CertificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationPayload>
          }
          findMany: {
            args: Prisma.CertificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationPayload>[]
          }
          create: {
            args: Prisma.CertificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationPayload>
          }
          createMany: {
            args: Prisma.CertificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CertificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationPayload>
          }
          update: {
            args: Prisma.CertificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationPayload>
          }
          deleteMany: {
            args: Prisma.CertificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CertificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CertificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificationPayload>
          }
          aggregate: {
            args: Prisma.CertificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCertification>
          }
          groupBy: {
            args: Prisma.CertificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CertificationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CertificationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CertificationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CertificationCountArgs<ExtArgs>
            result: $Utils.Optional<CertificationCountAggregateOutputType> | number
          }
        }
      }
      SocialLink: {
        payload: Prisma.$SocialLinkPayload<ExtArgs>
        fields: Prisma.SocialLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          findFirst: {
            args: Prisma.SocialLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          findMany: {
            args: Prisma.SocialLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>[]
          }
          create: {
            args: Prisma.SocialLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          createMany: {
            args: Prisma.SocialLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SocialLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          update: {
            args: Prisma.SocialLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          deleteMany: {
            args: Prisma.SocialLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SocialLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          aggregate: {
            args: Prisma.SocialLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialLink>
          }
          groupBy: {
            args: Prisma.SocialLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialLinkGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SocialLinkFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SocialLinkAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SocialLinkCountArgs<ExtArgs>
            result: $Utils.Optional<SocialLinkCountAggregateOutputType> | number
          }
        }
      }
      SEO: {
        payload: Prisma.$SEOPayload<ExtArgs>
        fields: Prisma.SEOFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SEOFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SEOPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SEOFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SEOPayload>
          }
          findFirst: {
            args: Prisma.SEOFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SEOPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SEOFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SEOPayload>
          }
          findMany: {
            args: Prisma.SEOFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SEOPayload>[]
          }
          create: {
            args: Prisma.SEOCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SEOPayload>
          }
          createMany: {
            args: Prisma.SEOCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SEODeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SEOPayload>
          }
          update: {
            args: Prisma.SEOUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SEOPayload>
          }
          deleteMany: {
            args: Prisma.SEODeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SEOUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SEOUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SEOPayload>
          }
          aggregate: {
            args: Prisma.SEOAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSEO>
          }
          groupBy: {
            args: Prisma.SEOGroupByArgs<ExtArgs>
            result: $Utils.Optional<SEOGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SEOFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SEOAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SEOCountArgs<ExtArgs>
            result: $Utils.Optional<SEOCountAggregateOutputType> | number
          }
        }
      }
      Theme: {
        payload: Prisma.$ThemePayload<ExtArgs>
        fields: Prisma.ThemeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThemeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThemeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          findFirst: {
            args: Prisma.ThemeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThemeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          findMany: {
            args: Prisma.ThemeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>[]
          }
          create: {
            args: Prisma.ThemeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          createMany: {
            args: Prisma.ThemeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ThemeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          update: {
            args: Prisma.ThemeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          deleteMany: {
            args: Prisma.ThemeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ThemeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ThemeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThemePayload>
          }
          aggregate: {
            args: Prisma.ThemeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTheme>
          }
          groupBy: {
            args: Prisma.ThemeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ThemeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ThemeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ThemeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ThemeCountArgs<ExtArgs>
            result: $Utils.Optional<ThemeCountAggregateOutputType> | number
          }
        }
      }
      FocusArea: {
        payload: Prisma.$FocusAreaPayload<ExtArgs>
        fields: Prisma.FocusAreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FocusAreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusAreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FocusAreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusAreaPayload>
          }
          findFirst: {
            args: Prisma.FocusAreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusAreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FocusAreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusAreaPayload>
          }
          findMany: {
            args: Prisma.FocusAreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusAreaPayload>[]
          }
          create: {
            args: Prisma.FocusAreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusAreaPayload>
          }
          createMany: {
            args: Prisma.FocusAreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FocusAreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusAreaPayload>
          }
          update: {
            args: Prisma.FocusAreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusAreaPayload>
          }
          deleteMany: {
            args: Prisma.FocusAreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FocusAreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FocusAreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusAreaPayload>
          }
          aggregate: {
            args: Prisma.FocusAreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFocusArea>
          }
          groupBy: {
            args: Prisma.FocusAreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FocusAreaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FocusAreaFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FocusAreaAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FocusAreaCountArgs<ExtArgs>
            result: $Utils.Optional<FocusAreaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    resume?: ResumeOmit
    skill?: SkillOmit
    experience?: ExperienceOmit
    education?: EducationOmit
    project?: ProjectOmit
    certification?: CertificationOmit
    socialLink?: SocialLinkOmit
    sEO?: SEOOmit
    theme?: ThemeOmit
    focusArea?: FocusAreaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ResumeCountOutputType
   */

  export type ResumeCountOutputType = {
    skills: number
    experiences: number
    education: number
    projects: number
    certifications: number
    socialLinks: number
    focusAreas: number
    themes: number
  }

  export type ResumeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | ResumeCountOutputTypeCountSkillsArgs
    experiences?: boolean | ResumeCountOutputTypeCountExperiencesArgs
    education?: boolean | ResumeCountOutputTypeCountEducationArgs
    projects?: boolean | ResumeCountOutputTypeCountProjectsArgs
    certifications?: boolean | ResumeCountOutputTypeCountCertificationsArgs
    socialLinks?: boolean | ResumeCountOutputTypeCountSocialLinksArgs
    focusAreas?: boolean | ResumeCountOutputTypeCountFocusAreasArgs
    themes?: boolean | ResumeCountOutputTypeCountThemesArgs
  }

  // Custom InputTypes
  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeCountOutputType
     */
    select?: ResumeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountCertificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificationWhereInput
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountSocialLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialLinkWhereInput
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountFocusAreasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FocusAreaWhereInput
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountThemesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThemeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Resume
   */

  export type AggregateResume = {
    _count: ResumeCountAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  export type ResumeMinAggregateOutputType = {
    id: string | null
    name: string | null
    title: string | null
    email: string | null
    phone: string | null
    location: string | null
    about: string | null
    profileImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    title: string | null
    email: string | null
    phone: string | null
    location: string | null
    about: string | null
    profileImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeCountAggregateOutputType = {
    id: number
    name: number
    title: number
    email: number
    phone: number
    location: number
    about: number
    profileImage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResumeMinAggregateInputType = {
    id?: true
    name?: true
    title?: true
    email?: true
    phone?: true
    location?: true
    about?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeMaxAggregateInputType = {
    id?: true
    name?: true
    title?: true
    email?: true
    phone?: true
    location?: true
    about?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeCountAggregateInputType = {
    id?: true
    name?: true
    title?: true
    email?: true
    phone?: true
    location?: true
    about?: true
    profileImage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResumeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resume to aggregate.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resumes
    **/
    _count?: true | ResumeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumeMaxAggregateInputType
  }

  export type GetResumeAggregateType<T extends ResumeAggregateArgs> = {
        [P in keyof T & keyof AggregateResume]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResume[P]>
      : GetScalarType<T[P], AggregateResume[P]>
  }




  export type ResumeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
    orderBy?: ResumeOrderByWithAggregationInput | ResumeOrderByWithAggregationInput[]
    by: ResumeScalarFieldEnum[] | ResumeScalarFieldEnum
    having?: ResumeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumeCountAggregateInputType | true
    _min?: ResumeMinAggregateInputType
    _max?: ResumeMaxAggregateInputType
  }

  export type ResumeGroupByOutputType = {
    id: string
    name: string
    title: string
    email: string
    phone: string
    location: string
    about: string
    profileImage: string | null
    createdAt: Date
    updatedAt: Date
    _count: ResumeCountAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  type GetResumeGroupByPayload<T extends ResumeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeGroupByOutputType[P]>
        }
      >
    >


  export type ResumeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    title?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    about?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skills?: boolean | Resume$skillsArgs<ExtArgs>
    experiences?: boolean | Resume$experiencesArgs<ExtArgs>
    education?: boolean | Resume$educationArgs<ExtArgs>
    projects?: boolean | Resume$projectsArgs<ExtArgs>
    certifications?: boolean | Resume$certificationsArgs<ExtArgs>
    socialLinks?: boolean | Resume$socialLinksArgs<ExtArgs>
    focusAreas?: boolean | Resume$focusAreasArgs<ExtArgs>
    seo?: boolean | Resume$seoArgs<ExtArgs>
    themes?: boolean | Resume$themesArgs<ExtArgs>
    _count?: boolean | ResumeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>



  export type ResumeSelectScalar = {
    id?: boolean
    name?: boolean
    title?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    about?: boolean
    profileImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ResumeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "title" | "email" | "phone" | "location" | "about" | "profileImage" | "createdAt" | "updatedAt", ExtArgs["result"]["resume"]>
  export type ResumeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | Resume$skillsArgs<ExtArgs>
    experiences?: boolean | Resume$experiencesArgs<ExtArgs>
    education?: boolean | Resume$educationArgs<ExtArgs>
    projects?: boolean | Resume$projectsArgs<ExtArgs>
    certifications?: boolean | Resume$certificationsArgs<ExtArgs>
    socialLinks?: boolean | Resume$socialLinksArgs<ExtArgs>
    focusAreas?: boolean | Resume$focusAreasArgs<ExtArgs>
    seo?: boolean | Resume$seoArgs<ExtArgs>
    themes?: boolean | Resume$themesArgs<ExtArgs>
    _count?: boolean | ResumeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ResumePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resume"
    objects: {
      skills: Prisma.$SkillPayload<ExtArgs>[]
      experiences: Prisma.$ExperiencePayload<ExtArgs>[]
      education: Prisma.$EducationPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      certifications: Prisma.$CertificationPayload<ExtArgs>[]
      socialLinks: Prisma.$SocialLinkPayload<ExtArgs>[]
      focusAreas: Prisma.$FocusAreaPayload<ExtArgs>[]
      seo: Prisma.$SEOPayload<ExtArgs> | null
      themes: Prisma.$ThemePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      title: string
      email: string
      phone: string
      location: string
      about: string
      profileImage: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["resume"]>
    composites: {}
  }

  type ResumeGetPayload<S extends boolean | null | undefined | ResumeDefaultArgs> = $Result.GetResult<Prisma.$ResumePayload, S>

  type ResumeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResumeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResumeCountAggregateInputType | true
    }

  export interface ResumeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resume'], meta: { name: 'Resume' } }
    /**
     * Find zero or one Resume that matches the filter.
     * @param {ResumeFindUniqueArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumeFindUniqueArgs>(args: SelectSubset<T, ResumeFindUniqueArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resume that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResumeFindUniqueOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumeFindUniqueOrThrowArgs>(args: SelectSubset<T, ResumeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumeFindFirstArgs>(args?: SelectSubset<T, ResumeFindFirstArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumeFindFirstOrThrowArgs>(args?: SelectSubset<T, ResumeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resumes
     * const resumes = await prisma.resume.findMany()
     * 
     * // Get first 10 Resumes
     * const resumes = await prisma.resume.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumeWithIdOnly = await prisma.resume.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResumeFindManyArgs>(args?: SelectSubset<T, ResumeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resume.
     * @param {ResumeCreateArgs} args - Arguments to create a Resume.
     * @example
     * // Create one Resume
     * const Resume = await prisma.resume.create({
     *   data: {
     *     // ... data to create a Resume
     *   }
     * })
     * 
     */
    create<T extends ResumeCreateArgs>(args: SelectSubset<T, ResumeCreateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resumes.
     * @param {ResumeCreateManyArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResumeCreateManyArgs>(args?: SelectSubset<T, ResumeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Resume.
     * @param {ResumeDeleteArgs} args - Arguments to delete one Resume.
     * @example
     * // Delete one Resume
     * const Resume = await prisma.resume.delete({
     *   where: {
     *     // ... filter to delete one Resume
     *   }
     * })
     * 
     */
    delete<T extends ResumeDeleteArgs>(args: SelectSubset<T, ResumeDeleteArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resume.
     * @param {ResumeUpdateArgs} args - Arguments to update one Resume.
     * @example
     * // Update one Resume
     * const resume = await prisma.resume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResumeUpdateArgs>(args: SelectSubset<T, ResumeUpdateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resumes.
     * @param {ResumeDeleteManyArgs} args - Arguments to filter Resumes to delete.
     * @example
     * // Delete a few Resumes
     * const { count } = await prisma.resume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResumeDeleteManyArgs>(args?: SelectSubset<T, ResumeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResumeUpdateManyArgs>(args: SelectSubset<T, ResumeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Resume.
     * @param {ResumeUpsertArgs} args - Arguments to update or create a Resume.
     * @example
     * // Update or create a Resume
     * const resume = await prisma.resume.upsert({
     *   create: {
     *     // ... data to create a Resume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resume we want to update
     *   }
     * })
     */
    upsert<T extends ResumeUpsertArgs>(args: SelectSubset<T, ResumeUpsertArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resumes that matches the filter.
     * @param {ResumeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const resume = await prisma.resume.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ResumeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Resume.
     * @param {ResumeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const resume = await prisma.resume.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ResumeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeCountArgs} args - Arguments to filter Resumes to count.
     * @example
     * // Count the number of Resumes
     * const count = await prisma.resume.count({
     *   where: {
     *     // ... the filter for the Resumes we want to count
     *   }
     * })
    **/
    count<T extends ResumeCountArgs>(
      args?: Subset<T, ResumeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResumeAggregateArgs>(args: Subset<T, ResumeAggregateArgs>): Prisma.PrismaPromise<GetResumeAggregateType<T>>

    /**
     * Group by Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumeGroupByArgs['orderBy'] }
        : { orderBy?: ResumeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resume model
   */
  readonly fields: ResumeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skills<T extends Resume$skillsArgs<ExtArgs> = {}>(args?: Subset<T, Resume$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    experiences<T extends Resume$experiencesArgs<ExtArgs> = {}>(args?: Subset<T, Resume$experiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    education<T extends Resume$educationArgs<ExtArgs> = {}>(args?: Subset<T, Resume$educationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends Resume$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Resume$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    certifications<T extends Resume$certificationsArgs<ExtArgs> = {}>(args?: Subset<T, Resume$certificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    socialLinks<T extends Resume$socialLinksArgs<ExtArgs> = {}>(args?: Subset<T, Resume$socialLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    focusAreas<T extends Resume$focusAreasArgs<ExtArgs> = {}>(args?: Subset<T, Resume$focusAreasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FocusAreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seo<T extends Resume$seoArgs<ExtArgs> = {}>(args?: Subset<T, Resume$seoArgs<ExtArgs>>): Prisma__SEOClient<$Result.GetResult<Prisma.$SEOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    themes<T extends Resume$themesArgs<ExtArgs> = {}>(args?: Subset<T, Resume$themesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Resume model
   */
  interface ResumeFieldRefs {
    readonly id: FieldRef<"Resume", 'String'>
    readonly name: FieldRef<"Resume", 'String'>
    readonly title: FieldRef<"Resume", 'String'>
    readonly email: FieldRef<"Resume", 'String'>
    readonly phone: FieldRef<"Resume", 'String'>
    readonly location: FieldRef<"Resume", 'String'>
    readonly about: FieldRef<"Resume", 'String'>
    readonly profileImage: FieldRef<"Resume", 'String'>
    readonly createdAt: FieldRef<"Resume", 'DateTime'>
    readonly updatedAt: FieldRef<"Resume", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resume findUnique
   */
  export type ResumeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findUniqueOrThrow
   */
  export type ResumeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findFirst
   */
  export type ResumeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findFirstOrThrow
   */
  export type ResumeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findMany
   */
  export type ResumeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resumes to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume create
   */
  export type ResumeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to create a Resume.
     */
    data: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
  }

  /**
   * Resume createMany
   */
  export type ResumeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
  }

  /**
   * Resume update
   */
  export type ResumeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to update a Resume.
     */
    data: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
    /**
     * Choose, which Resume to update.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume updateMany
   */
  export type ResumeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
  }

  /**
   * Resume upsert
   */
  export type ResumeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The filter to search for the Resume to update in case it exists.
     */
    where: ResumeWhereUniqueInput
    /**
     * In case the Resume found by the `where` argument doesn't exist, create a new Resume with this data.
     */
    create: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
    /**
     * In case the Resume was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
  }

  /**
   * Resume delete
   */
  export type ResumeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter which Resume to delete.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume deleteMany
   */
  export type ResumeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resumes to delete
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to delete.
     */
    limit?: number
  }

  /**
   * Resume findRaw
   */
  export type ResumeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Resume aggregateRaw
   */
  export type ResumeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Resume.skills
   */
  export type Resume$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    cursor?: SkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Resume.experiences
   */
  export type Resume$experiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    cursor?: ExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Resume.education
   */
  export type Resume$educationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    cursor?: EducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Resume.projects
   */
  export type Resume$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Resume.certifications
   */
  export type Resume$certificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certification
     */
    select?: CertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certification
     */
    omit?: CertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationInclude<ExtArgs> | null
    where?: CertificationWhereInput
    orderBy?: CertificationOrderByWithRelationInput | CertificationOrderByWithRelationInput[]
    cursor?: CertificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificationScalarFieldEnum | CertificationScalarFieldEnum[]
  }

  /**
   * Resume.socialLinks
   */
  export type Resume$socialLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    where?: SocialLinkWhereInput
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    cursor?: SocialLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * Resume.focusAreas
   */
  export type Resume$focusAreasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusArea
     */
    select?: FocusAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusArea
     */
    omit?: FocusAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusAreaInclude<ExtArgs> | null
    where?: FocusAreaWhereInput
    orderBy?: FocusAreaOrderByWithRelationInput | FocusAreaOrderByWithRelationInput[]
    cursor?: FocusAreaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FocusAreaScalarFieldEnum | FocusAreaScalarFieldEnum[]
  }

  /**
   * Resume.seo
   */
  export type Resume$seoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SEO
     */
    select?: SEOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SEO
     */
    omit?: SEOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SEOInclude<ExtArgs> | null
    where?: SEOWhereInput
  }

  /**
   * Resume.themes
   */
  export type Resume$themesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    where?: ThemeWhereInput
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    cursor?: ThemeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Resume without action
   */
  export type ResumeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    resumeId: string | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    resumeId: string | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    category: number
    resumeId: number
    _all: number
  }


  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    resumeId?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    resumeId?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    resumeId?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: string
    name: string
    category: string
    resumeId: string
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    resumeId?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>



  export type SkillSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    resumeId?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "resumeId", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: string
      resumeId: string
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * @param {SkillFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const skill = await prisma.skill.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SkillFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Skill.
     * @param {SkillAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const skill = await prisma.skill.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SkillAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'String'>
    readonly name: FieldRef<"Skill", 'String'>
    readonly category: FieldRef<"Skill", 'String'>
    readonly resumeId: FieldRef<"Skill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill findRaw
   */
  export type SkillFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Skill aggregateRaw
   */
  export type SkillAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model Experience
   */

  export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  export type ExperienceMinAggregateOutputType = {
    id: string | null
    company: string | null
    position: string | null
    startDate: Date | null
    endDate: Date | null
    description: string | null
    resumeId: string | null
  }

  export type ExperienceMaxAggregateOutputType = {
    id: string | null
    company: string | null
    position: string | null
    startDate: Date | null
    endDate: Date | null
    description: string | null
    resumeId: string | null
  }

  export type ExperienceCountAggregateOutputType = {
    id: number
    company: number
    position: number
    startDate: number
    endDate: number
    description: number
    resumeId: number
    _all: number
  }


  export type ExperienceMinAggregateInputType = {
    id?: true
    company?: true
    position?: true
    startDate?: true
    endDate?: true
    description?: true
    resumeId?: true
  }

  export type ExperienceMaxAggregateInputType = {
    id?: true
    company?: true
    position?: true
    startDate?: true
    endDate?: true
    description?: true
    resumeId?: true
  }

  export type ExperienceCountAggregateInputType = {
    id?: true
    company?: true
    position?: true
    startDate?: true
    endDate?: true
    description?: true
    resumeId?: true
    _all?: true
  }

  export type ExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experience to aggregate.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experiences
    **/
    _count?: true | ExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceMaxAggregateInputType
  }

  export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience[P]>
      : GetScalarType<T[P], AggregateExperience[P]>
  }




  export type ExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithAggregationInput | ExperienceOrderByWithAggregationInput[]
    by: ExperienceScalarFieldEnum[] | ExperienceScalarFieldEnum
    having?: ExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceCountAggregateInputType | true
    _min?: ExperienceMinAggregateInputType
    _max?: ExperienceMaxAggregateInputType
  }

  export type ExperienceGroupByOutputType = {
    id: string
    company: string
    position: string
    startDate: Date
    endDate: Date | null
    description: string
    resumeId: string
    _count: ExperienceCountAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  type GetExperienceGroupByPayload<T extends ExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
        }
      >
    >


  export type ExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    position?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    resumeId?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>



  export type ExperienceSelectScalar = {
    id?: boolean
    company?: boolean
    position?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    resumeId?: boolean
  }

  export type ExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company" | "position" | "startDate" | "endDate" | "description" | "resumeId", ExtArgs["result"]["experience"]>
  export type ExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $ExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Experience"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company: string
      position: string
      startDate: Date
      endDate: Date | null
      description: string
      resumeId: string
    }, ExtArgs["result"]["experience"]>
    composites: {}
  }

  type ExperienceGetPayload<S extends boolean | null | undefined | ExperienceDefaultArgs> = $Result.GetResult<Prisma.$ExperiencePayload, S>

  type ExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperienceCountAggregateInputType | true
    }

  export interface ExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Experience'], meta: { name: 'Experience' } }
    /**
     * Find zero or one Experience that matches the filter.
     * @param {ExperienceFindUniqueArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperienceFindUniqueArgs>(args: SelectSubset<T, ExperienceFindUniqueArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Experience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExperienceFindUniqueOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, ExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperienceFindFirstArgs>(args?: SelectSubset<T, ExperienceFindFirstArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, ExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experience.findMany()
     * 
     * // Get first 10 Experiences
     * const experiences = await prisma.experience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceWithIdOnly = await prisma.experience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExperienceFindManyArgs>(args?: SelectSubset<T, ExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Experience.
     * @param {ExperienceCreateArgs} args - Arguments to create a Experience.
     * @example
     * // Create one Experience
     * const Experience = await prisma.experience.create({
     *   data: {
     *     // ... data to create a Experience
     *   }
     * })
     * 
     */
    create<T extends ExperienceCreateArgs>(args: SelectSubset<T, ExperienceCreateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Experiences.
     * @param {ExperienceCreateManyArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExperienceCreateManyArgs>(args?: SelectSubset<T, ExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Experience.
     * @param {ExperienceDeleteArgs} args - Arguments to delete one Experience.
     * @example
     * // Delete one Experience
     * const Experience = await prisma.experience.delete({
     *   where: {
     *     // ... filter to delete one Experience
     *   }
     * })
     * 
     */
    delete<T extends ExperienceDeleteArgs>(args: SelectSubset<T, ExperienceDeleteArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Experience.
     * @param {ExperienceUpdateArgs} args - Arguments to update one Experience.
     * @example
     * // Update one Experience
     * const experience = await prisma.experience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExperienceUpdateArgs>(args: SelectSubset<T, ExperienceUpdateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Experiences.
     * @param {ExperienceDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExperienceDeleteManyArgs>(args?: SelectSubset<T, ExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExperienceUpdateManyArgs>(args: SelectSubset<T, ExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Experience.
     * @param {ExperienceUpsertArgs} args - Arguments to update or create a Experience.
     * @example
     * // Update or create a Experience
     * const experience = await prisma.experience.upsert({
     *   create: {
     *     // ... data to create a Experience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience we want to update
     *   }
     * })
     */
    upsert<T extends ExperienceUpsertArgs>(args: SelectSubset<T, ExperienceUpsertArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Experiences that matches the filter.
     * @param {ExperienceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const experience = await prisma.experience.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ExperienceFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Experience.
     * @param {ExperienceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const experience = await prisma.experience.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ExperienceAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experience.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
    **/
    count<T extends ExperienceCountArgs>(
      args?: Subset<T, ExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExperienceAggregateArgs>(args: Subset<T, ExperienceAggregateArgs>): Prisma.PrismaPromise<GetExperienceAggregateType<T>>

    /**
     * Group by Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienceGroupByArgs['orderBy'] }
        : { orderBy?: ExperienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Experience model
   */
  readonly fields: ExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Experience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Experience model
   */
  interface ExperienceFieldRefs {
    readonly id: FieldRef<"Experience", 'String'>
    readonly company: FieldRef<"Experience", 'String'>
    readonly position: FieldRef<"Experience", 'String'>
    readonly startDate: FieldRef<"Experience", 'DateTime'>
    readonly endDate: FieldRef<"Experience", 'DateTime'>
    readonly description: FieldRef<"Experience", 'String'>
    readonly resumeId: FieldRef<"Experience", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Experience findUnique
   */
  export type ExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findUniqueOrThrow
   */
  export type ExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findFirst
   */
  export type ExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findFirstOrThrow
   */
  export type ExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findMany
   */
  export type ExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience create
   */
  export type ExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a Experience.
     */
    data: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
  }

  /**
   * Experience createMany
   */
  export type ExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
  }

  /**
   * Experience update
   */
  export type ExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a Experience.
     */
    data: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
    /**
     * Choose, which Experience to update.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience updateMany
   */
  export type ExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to update.
     */
    limit?: number
  }

  /**
   * Experience upsert
   */
  export type ExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the Experience to update in case it exists.
     */
    where: ExperienceWhereUniqueInput
    /**
     * In case the Experience found by the `where` argument doesn't exist, create a new Experience with this data.
     */
    create: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
    /**
     * In case the Experience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
  }

  /**
   * Experience delete
   */
  export type ExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter which Experience to delete.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience deleteMany
   */
  export type ExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experiences to delete
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to delete.
     */
    limit?: number
  }

  /**
   * Experience findRaw
   */
  export type ExperienceFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Experience aggregateRaw
   */
  export type ExperienceAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Experience without action
   */
  export type ExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
  }


  /**
   * Model Education
   */

  export type AggregateEducation = {
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  export type EducationMinAggregateOutputType = {
    id: string | null
    institution: string | null
    degree: string | null
    field: string | null
    startDate: Date | null
    endDate: Date | null
    gpa: string | null
    resumeId: string | null
  }

  export type EducationMaxAggregateOutputType = {
    id: string | null
    institution: string | null
    degree: string | null
    field: string | null
    startDate: Date | null
    endDate: Date | null
    gpa: string | null
    resumeId: string | null
  }

  export type EducationCountAggregateOutputType = {
    id: number
    institution: number
    degree: number
    field: number
    startDate: number
    endDate: number
    gpa: number
    resumeId: number
    _all: number
  }


  export type EducationMinAggregateInputType = {
    id?: true
    institution?: true
    degree?: true
    field?: true
    startDate?: true
    endDate?: true
    gpa?: true
    resumeId?: true
  }

  export type EducationMaxAggregateInputType = {
    id?: true
    institution?: true
    degree?: true
    field?: true
    startDate?: true
    endDate?: true
    gpa?: true
    resumeId?: true
  }

  export type EducationCountAggregateInputType = {
    id?: true
    institution?: true
    degree?: true
    field?: true
    startDate?: true
    endDate?: true
    gpa?: true
    resumeId?: true
    _all?: true
  }

  export type EducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Education to aggregate.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Educations
    **/
    _count?: true | EducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationMaxAggregateInputType
  }

  export type GetEducationAggregateType<T extends EducationAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation[P]>
      : GetScalarType<T[P], AggregateEducation[P]>
  }




  export type EducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithAggregationInput | EducationOrderByWithAggregationInput[]
    by: EducationScalarFieldEnum[] | EducationScalarFieldEnum
    having?: EducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationCountAggregateInputType | true
    _min?: EducationMinAggregateInputType
    _max?: EducationMaxAggregateInputType
  }

  export type EducationGroupByOutputType = {
    id: string
    institution: string
    degree: string
    field: string
    startDate: Date
    endDate: Date | null
    gpa: string | null
    resumeId: string
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  type GetEducationGroupByPayload<T extends EducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationGroupByOutputType[P]>
            : GetScalarType<T[P], EducationGroupByOutputType[P]>
        }
      >
    >


  export type EducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institution?: boolean
    degree?: boolean
    field?: boolean
    startDate?: boolean
    endDate?: boolean
    gpa?: boolean
    resumeId?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>



  export type EducationSelectScalar = {
    id?: boolean
    institution?: boolean
    degree?: boolean
    field?: boolean
    startDate?: boolean
    endDate?: boolean
    gpa?: boolean
    resumeId?: boolean
  }

  export type EducationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "institution" | "degree" | "field" | "startDate" | "endDate" | "gpa" | "resumeId", ExtArgs["result"]["education"]>
  export type EducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $EducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Education"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      institution: string
      degree: string
      field: string
      startDate: Date
      endDate: Date | null
      gpa: string | null
      resumeId: string
    }, ExtArgs["result"]["education"]>
    composites: {}
  }

  type EducationGetPayload<S extends boolean | null | undefined | EducationDefaultArgs> = $Result.GetResult<Prisma.$EducationPayload, S>

  type EducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EducationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EducationCountAggregateInputType | true
    }

  export interface EducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Education'], meta: { name: 'Education' } }
    /**
     * Find zero or one Education that matches the filter.
     * @param {EducationFindUniqueArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EducationFindUniqueArgs>(args: SelectSubset<T, EducationFindUniqueArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Education that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EducationFindUniqueOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EducationFindUniqueOrThrowArgs>(args: SelectSubset<T, EducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EducationFindFirstArgs>(args?: SelectSubset<T, EducationFindFirstArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EducationFindFirstOrThrowArgs>(args?: SelectSubset<T, EducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educations
     * const educations = await prisma.education.findMany()
     * 
     * // Get first 10 Educations
     * const educations = await prisma.education.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationWithIdOnly = await prisma.education.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EducationFindManyArgs>(args?: SelectSubset<T, EducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Education.
     * @param {EducationCreateArgs} args - Arguments to create a Education.
     * @example
     * // Create one Education
     * const Education = await prisma.education.create({
     *   data: {
     *     // ... data to create a Education
     *   }
     * })
     * 
     */
    create<T extends EducationCreateArgs>(args: SelectSubset<T, EducationCreateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Educations.
     * @param {EducationCreateManyArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EducationCreateManyArgs>(args?: SelectSubset<T, EducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Education.
     * @param {EducationDeleteArgs} args - Arguments to delete one Education.
     * @example
     * // Delete one Education
     * const Education = await prisma.education.delete({
     *   where: {
     *     // ... filter to delete one Education
     *   }
     * })
     * 
     */
    delete<T extends EducationDeleteArgs>(args: SelectSubset<T, EducationDeleteArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Education.
     * @param {EducationUpdateArgs} args - Arguments to update one Education.
     * @example
     * // Update one Education
     * const education = await prisma.education.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EducationUpdateArgs>(args: SelectSubset<T, EducationUpdateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Educations.
     * @param {EducationDeleteManyArgs} args - Arguments to filter Educations to delete.
     * @example
     * // Delete a few Educations
     * const { count } = await prisma.education.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EducationDeleteManyArgs>(args?: SelectSubset<T, EducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EducationUpdateManyArgs>(args: SelectSubset<T, EducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Education.
     * @param {EducationUpsertArgs} args - Arguments to update or create a Education.
     * @example
     * // Update or create a Education
     * const education = await prisma.education.upsert({
     *   create: {
     *     // ... data to create a Education
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education we want to update
     *   }
     * })
     */
    upsert<T extends EducationUpsertArgs>(args: SelectSubset<T, EducationUpsertArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Educations that matches the filter.
     * @param {EducationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const education = await prisma.education.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: EducationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Education.
     * @param {EducationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const education = await prisma.education.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EducationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationCountArgs} args - Arguments to filter Educations to count.
     * @example
     * // Count the number of Educations
     * const count = await prisma.education.count({
     *   where: {
     *     // ... the filter for the Educations we want to count
     *   }
     * })
    **/
    count<T extends EducationCountArgs>(
      args?: Subset<T, EducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EducationAggregateArgs>(args: Subset<T, EducationAggregateArgs>): Prisma.PrismaPromise<GetEducationAggregateType<T>>

    /**
     * Group by Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationGroupByArgs['orderBy'] }
        : { orderBy?: EducationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Education model
   */
  readonly fields: EducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Education.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Education model
   */
  interface EducationFieldRefs {
    readonly id: FieldRef<"Education", 'String'>
    readonly institution: FieldRef<"Education", 'String'>
    readonly degree: FieldRef<"Education", 'String'>
    readonly field: FieldRef<"Education", 'String'>
    readonly startDate: FieldRef<"Education", 'DateTime'>
    readonly endDate: FieldRef<"Education", 'DateTime'>
    readonly gpa: FieldRef<"Education", 'String'>
    readonly resumeId: FieldRef<"Education", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Education findUnique
   */
  export type EducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findUniqueOrThrow
   */
  export type EducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findFirst
   */
  export type EducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findFirstOrThrow
   */
  export type EducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findMany
   */
  export type EducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Educations to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education create
   */
  export type EducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to create a Education.
     */
    data: XOR<EducationCreateInput, EducationUncheckedCreateInput>
  }

  /**
   * Education createMany
   */
  export type EducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
  }

  /**
   * Education update
   */
  export type EducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to update a Education.
     */
    data: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
    /**
     * Choose, which Education to update.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education updateMany
   */
  export type EducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
  }

  /**
   * Education upsert
   */
  export type EducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The filter to search for the Education to update in case it exists.
     */
    where: EducationWhereUniqueInput
    /**
     * In case the Education found by the `where` argument doesn't exist, create a new Education with this data.
     */
    create: XOR<EducationCreateInput, EducationUncheckedCreateInput>
    /**
     * In case the Education was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
  }

  /**
   * Education delete
   */
  export type EducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter which Education to delete.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education deleteMany
   */
  export type EducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Educations to delete
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to delete.
     */
    limit?: number
  }

  /**
   * Education findRaw
   */
  export type EducationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Education aggregateRaw
   */
  export type EducationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Education without action
   */
  export type EducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    technologies: string | null
    image: string | null
    link: string | null
    resumeId: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    technologies: string | null
    image: string | null
    link: string | null
    resumeId: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title: number
    description: number
    technologies: number
    image: number
    link: number
    resumeId: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    technologies?: true
    image?: true
    link?: true
    resumeId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    technologies?: true
    image?: true
    link?: true
    resumeId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    technologies?: true
    image?: true
    link?: true
    resumeId?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    title: string
    description: string
    technologies: string
    image: string | null
    link: string | null
    resumeId: string
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    technologies?: boolean
    image?: boolean
    link?: boolean
    resumeId?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>



  export type ProjectSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    technologies?: boolean
    image?: boolean
    link?: boolean
    resumeId?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "technologies" | "image" | "link" | "resumeId", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      technologies: string
      image: string | null
      link: string | null
      resumeId: string
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * @param {ProjectFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const project = await prisma.project.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ProjectFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Project.
     * @param {ProjectAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const project = await prisma.project.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProjectAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly technologies: FieldRef<"Project", 'String'>
    readonly image: FieldRef<"Project", 'String'>
    readonly link: FieldRef<"Project", 'String'>
    readonly resumeId: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project findRaw
   */
  export type ProjectFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Project aggregateRaw
   */
  export type ProjectAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Certification
   */

  export type AggregateCertification = {
    _count: CertificationCountAggregateOutputType | null
    _min: CertificationMinAggregateOutputType | null
    _max: CertificationMaxAggregateOutputType | null
  }

  export type CertificationMinAggregateOutputType = {
    id: string | null
    name: string | null
    issuer: string | null
    date: Date | null
    image: string | null
    resumeId: string | null
  }

  export type CertificationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    issuer: string | null
    date: Date | null
    image: string | null
    resumeId: string | null
  }

  export type CertificationCountAggregateOutputType = {
    id: number
    name: number
    issuer: number
    date: number
    image: number
    resumeId: number
    _all: number
  }


  export type CertificationMinAggregateInputType = {
    id?: true
    name?: true
    issuer?: true
    date?: true
    image?: true
    resumeId?: true
  }

  export type CertificationMaxAggregateInputType = {
    id?: true
    name?: true
    issuer?: true
    date?: true
    image?: true
    resumeId?: true
  }

  export type CertificationCountAggregateInputType = {
    id?: true
    name?: true
    issuer?: true
    date?: true
    image?: true
    resumeId?: true
    _all?: true
  }

  export type CertificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certification to aggregate.
     */
    where?: CertificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certifications to fetch.
     */
    orderBy?: CertificationOrderByWithRelationInput | CertificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CertificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Certifications
    **/
    _count?: true | CertificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificationMaxAggregateInputType
  }

  export type GetCertificationAggregateType<T extends CertificationAggregateArgs> = {
        [P in keyof T & keyof AggregateCertification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertification[P]>
      : GetScalarType<T[P], AggregateCertification[P]>
  }




  export type CertificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificationWhereInput
    orderBy?: CertificationOrderByWithAggregationInput | CertificationOrderByWithAggregationInput[]
    by: CertificationScalarFieldEnum[] | CertificationScalarFieldEnum
    having?: CertificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificationCountAggregateInputType | true
    _min?: CertificationMinAggregateInputType
    _max?: CertificationMaxAggregateInputType
  }

  export type CertificationGroupByOutputType = {
    id: string
    name: string
    issuer: string
    date: Date
    image: string | null
    resumeId: string
    _count: CertificationCountAggregateOutputType | null
    _min: CertificationMinAggregateOutputType | null
    _max: CertificationMaxAggregateOutputType | null
  }

  type GetCertificationGroupByPayload<T extends CertificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificationGroupByOutputType[P]>
            : GetScalarType<T[P], CertificationGroupByOutputType[P]>
        }
      >
    >


  export type CertificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    issuer?: boolean
    date?: boolean
    image?: boolean
    resumeId?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certification"]>



  export type CertificationSelectScalar = {
    id?: boolean
    name?: boolean
    issuer?: boolean
    date?: boolean
    image?: boolean
    resumeId?: boolean
  }

  export type CertificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "issuer" | "date" | "image" | "resumeId", ExtArgs["result"]["certification"]>
  export type CertificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $CertificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Certification"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      issuer: string
      date: Date
      image: string | null
      resumeId: string
    }, ExtArgs["result"]["certification"]>
    composites: {}
  }

  type CertificationGetPayload<S extends boolean | null | undefined | CertificationDefaultArgs> = $Result.GetResult<Prisma.$CertificationPayload, S>

  type CertificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CertificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CertificationCountAggregateInputType | true
    }

  export interface CertificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Certification'], meta: { name: 'Certification' } }
    /**
     * Find zero or one Certification that matches the filter.
     * @param {CertificationFindUniqueArgs} args - Arguments to find a Certification
     * @example
     * // Get one Certification
     * const certification = await prisma.certification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CertificationFindUniqueArgs>(args: SelectSubset<T, CertificationFindUniqueArgs<ExtArgs>>): Prisma__CertificationClient<$Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Certification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CertificationFindUniqueOrThrowArgs} args - Arguments to find a Certification
     * @example
     * // Get one Certification
     * const certification = await prisma.certification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CertificationFindUniqueOrThrowArgs>(args: SelectSubset<T, CertificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CertificationClient<$Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificationFindFirstArgs} args - Arguments to find a Certification
     * @example
     * // Get one Certification
     * const certification = await prisma.certification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CertificationFindFirstArgs>(args?: SelectSubset<T, CertificationFindFirstArgs<ExtArgs>>): Prisma__CertificationClient<$Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificationFindFirstOrThrowArgs} args - Arguments to find a Certification
     * @example
     * // Get one Certification
     * const certification = await prisma.certification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CertificationFindFirstOrThrowArgs>(args?: SelectSubset<T, CertificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CertificationClient<$Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Certifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Certifications
     * const certifications = await prisma.certification.findMany()
     * 
     * // Get first 10 Certifications
     * const certifications = await prisma.certification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const certificationWithIdOnly = await prisma.certification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CertificationFindManyArgs>(args?: SelectSubset<T, CertificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Certification.
     * @param {CertificationCreateArgs} args - Arguments to create a Certification.
     * @example
     * // Create one Certification
     * const Certification = await prisma.certification.create({
     *   data: {
     *     // ... data to create a Certification
     *   }
     * })
     * 
     */
    create<T extends CertificationCreateArgs>(args: SelectSubset<T, CertificationCreateArgs<ExtArgs>>): Prisma__CertificationClient<$Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Certifications.
     * @param {CertificationCreateManyArgs} args - Arguments to create many Certifications.
     * @example
     * // Create many Certifications
     * const certification = await prisma.certification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CertificationCreateManyArgs>(args?: SelectSubset<T, CertificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Certification.
     * @param {CertificationDeleteArgs} args - Arguments to delete one Certification.
     * @example
     * // Delete one Certification
     * const Certification = await prisma.certification.delete({
     *   where: {
     *     // ... filter to delete one Certification
     *   }
     * })
     * 
     */
    delete<T extends CertificationDeleteArgs>(args: SelectSubset<T, CertificationDeleteArgs<ExtArgs>>): Prisma__CertificationClient<$Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Certification.
     * @param {CertificationUpdateArgs} args - Arguments to update one Certification.
     * @example
     * // Update one Certification
     * const certification = await prisma.certification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CertificationUpdateArgs>(args: SelectSubset<T, CertificationUpdateArgs<ExtArgs>>): Prisma__CertificationClient<$Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Certifications.
     * @param {CertificationDeleteManyArgs} args - Arguments to filter Certifications to delete.
     * @example
     * // Delete a few Certifications
     * const { count } = await prisma.certification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CertificationDeleteManyArgs>(args?: SelectSubset<T, CertificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Certifications
     * const certification = await prisma.certification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CertificationUpdateManyArgs>(args: SelectSubset<T, CertificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Certification.
     * @param {CertificationUpsertArgs} args - Arguments to update or create a Certification.
     * @example
     * // Update or create a Certification
     * const certification = await prisma.certification.upsert({
     *   create: {
     *     // ... data to create a Certification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Certification we want to update
     *   }
     * })
     */
    upsert<T extends CertificationUpsertArgs>(args: SelectSubset<T, CertificationUpsertArgs<ExtArgs>>): Prisma__CertificationClient<$Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Certifications that matches the filter.
     * @param {CertificationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const certification = await prisma.certification.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CertificationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Certification.
     * @param {CertificationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const certification = await prisma.certification.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CertificationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Certifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificationCountArgs} args - Arguments to filter Certifications to count.
     * @example
     * // Count the number of Certifications
     * const count = await prisma.certification.count({
     *   where: {
     *     // ... the filter for the Certifications we want to count
     *   }
     * })
    **/
    count<T extends CertificationCountArgs>(
      args?: Subset<T, CertificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Certification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CertificationAggregateArgs>(args: Subset<T, CertificationAggregateArgs>): Prisma.PrismaPromise<GetCertificationAggregateType<T>>

    /**
     * Group by Certification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CertificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CertificationGroupByArgs['orderBy'] }
        : { orderBy?: CertificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CertificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Certification model
   */
  readonly fields: CertificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Certification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CertificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Certification model
   */
  interface CertificationFieldRefs {
    readonly id: FieldRef<"Certification", 'String'>
    readonly name: FieldRef<"Certification", 'String'>
    readonly issuer: FieldRef<"Certification", 'String'>
    readonly date: FieldRef<"Certification", 'DateTime'>
    readonly image: FieldRef<"Certification", 'String'>
    readonly resumeId: FieldRef<"Certification", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Certification findUnique
   */
  export type CertificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certification
     */
    select?: CertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certification
     */
    omit?: CertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationInclude<ExtArgs> | null
    /**
     * Filter, which Certification to fetch.
     */
    where: CertificationWhereUniqueInput
  }

  /**
   * Certification findUniqueOrThrow
   */
  export type CertificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certification
     */
    select?: CertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certification
     */
    omit?: CertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationInclude<ExtArgs> | null
    /**
     * Filter, which Certification to fetch.
     */
    where: CertificationWhereUniqueInput
  }

  /**
   * Certification findFirst
   */
  export type CertificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certification
     */
    select?: CertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certification
     */
    omit?: CertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationInclude<ExtArgs> | null
    /**
     * Filter, which Certification to fetch.
     */
    where?: CertificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certifications to fetch.
     */
    orderBy?: CertificationOrderByWithRelationInput | CertificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certifications.
     */
    cursor?: CertificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certifications.
     */
    distinct?: CertificationScalarFieldEnum | CertificationScalarFieldEnum[]
  }

  /**
   * Certification findFirstOrThrow
   */
  export type CertificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certification
     */
    select?: CertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certification
     */
    omit?: CertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationInclude<ExtArgs> | null
    /**
     * Filter, which Certification to fetch.
     */
    where?: CertificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certifications to fetch.
     */
    orderBy?: CertificationOrderByWithRelationInput | CertificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certifications.
     */
    cursor?: CertificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certifications.
     */
    distinct?: CertificationScalarFieldEnum | CertificationScalarFieldEnum[]
  }

  /**
   * Certification findMany
   */
  export type CertificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certification
     */
    select?: CertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certification
     */
    omit?: CertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationInclude<ExtArgs> | null
    /**
     * Filter, which Certifications to fetch.
     */
    where?: CertificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certifications to fetch.
     */
    orderBy?: CertificationOrderByWithRelationInput | CertificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Certifications.
     */
    cursor?: CertificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certifications.
     */
    skip?: number
    distinct?: CertificationScalarFieldEnum | CertificationScalarFieldEnum[]
  }

  /**
   * Certification create
   */
  export type CertificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certification
     */
    select?: CertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certification
     */
    omit?: CertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Certification.
     */
    data: XOR<CertificationCreateInput, CertificationUncheckedCreateInput>
  }

  /**
   * Certification createMany
   */
  export type CertificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Certifications.
     */
    data: CertificationCreateManyInput | CertificationCreateManyInput[]
  }

  /**
   * Certification update
   */
  export type CertificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certification
     */
    select?: CertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certification
     */
    omit?: CertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Certification.
     */
    data: XOR<CertificationUpdateInput, CertificationUncheckedUpdateInput>
    /**
     * Choose, which Certification to update.
     */
    where: CertificationWhereUniqueInput
  }

  /**
   * Certification updateMany
   */
  export type CertificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Certifications.
     */
    data: XOR<CertificationUpdateManyMutationInput, CertificationUncheckedUpdateManyInput>
    /**
     * Filter which Certifications to update
     */
    where?: CertificationWhereInput
    /**
     * Limit how many Certifications to update.
     */
    limit?: number
  }

  /**
   * Certification upsert
   */
  export type CertificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certification
     */
    select?: CertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certification
     */
    omit?: CertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Certification to update in case it exists.
     */
    where: CertificationWhereUniqueInput
    /**
     * In case the Certification found by the `where` argument doesn't exist, create a new Certification with this data.
     */
    create: XOR<CertificationCreateInput, CertificationUncheckedCreateInput>
    /**
     * In case the Certification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CertificationUpdateInput, CertificationUncheckedUpdateInput>
  }

  /**
   * Certification delete
   */
  export type CertificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certification
     */
    select?: CertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certification
     */
    omit?: CertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationInclude<ExtArgs> | null
    /**
     * Filter which Certification to delete.
     */
    where: CertificationWhereUniqueInput
  }

  /**
   * Certification deleteMany
   */
  export type CertificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certifications to delete
     */
    where?: CertificationWhereInput
    /**
     * Limit how many Certifications to delete.
     */
    limit?: number
  }

  /**
   * Certification findRaw
   */
  export type CertificationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Certification aggregateRaw
   */
  export type CertificationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Certification without action
   */
  export type CertificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certification
     */
    select?: CertificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certification
     */
    omit?: CertificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificationInclude<ExtArgs> | null
  }


  /**
   * Model SocialLink
   */

  export type AggregateSocialLink = {
    _count: SocialLinkCountAggregateOutputType | null
    _min: SocialLinkMinAggregateOutputType | null
    _max: SocialLinkMaxAggregateOutputType | null
  }

  export type SocialLinkMinAggregateOutputType = {
    id: string | null
    platform: string | null
    url: string | null
    icon: string | null
    resumeId: string | null
  }

  export type SocialLinkMaxAggregateOutputType = {
    id: string | null
    platform: string | null
    url: string | null
    icon: string | null
    resumeId: string | null
  }

  export type SocialLinkCountAggregateOutputType = {
    id: number
    platform: number
    url: number
    icon: number
    resumeId: number
    _all: number
  }


  export type SocialLinkMinAggregateInputType = {
    id?: true
    platform?: true
    url?: true
    icon?: true
    resumeId?: true
  }

  export type SocialLinkMaxAggregateInputType = {
    id?: true
    platform?: true
    url?: true
    icon?: true
    resumeId?: true
  }

  export type SocialLinkCountAggregateInputType = {
    id?: true
    platform?: true
    url?: true
    icon?: true
    resumeId?: true
    _all?: true
  }

  export type SocialLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialLink to aggregate.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialLinks
    **/
    _count?: true | SocialLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialLinkMaxAggregateInputType
  }

  export type GetSocialLinkAggregateType<T extends SocialLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialLink[P]>
      : GetScalarType<T[P], AggregateSocialLink[P]>
  }




  export type SocialLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialLinkWhereInput
    orderBy?: SocialLinkOrderByWithAggregationInput | SocialLinkOrderByWithAggregationInput[]
    by: SocialLinkScalarFieldEnum[] | SocialLinkScalarFieldEnum
    having?: SocialLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialLinkCountAggregateInputType | true
    _min?: SocialLinkMinAggregateInputType
    _max?: SocialLinkMaxAggregateInputType
  }

  export type SocialLinkGroupByOutputType = {
    id: string
    platform: string
    url: string
    icon: string
    resumeId: string
    _count: SocialLinkCountAggregateOutputType | null
    _min: SocialLinkMinAggregateOutputType | null
    _max: SocialLinkMaxAggregateOutputType | null
  }

  type GetSocialLinkGroupByPayload<T extends SocialLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialLinkGroupByOutputType[P]>
            : GetScalarType<T[P], SocialLinkGroupByOutputType[P]>
        }
      >
    >


  export type SocialLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    url?: boolean
    icon?: boolean
    resumeId?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialLink"]>



  export type SocialLinkSelectScalar = {
    id?: boolean
    platform?: boolean
    url?: boolean
    icon?: boolean
    resumeId?: boolean
  }

  export type SocialLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "platform" | "url" | "icon" | "resumeId", ExtArgs["result"]["socialLink"]>
  export type SocialLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $SocialLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialLink"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      platform: string
      url: string
      icon: string
      resumeId: string
    }, ExtArgs["result"]["socialLink"]>
    composites: {}
  }

  type SocialLinkGetPayload<S extends boolean | null | undefined | SocialLinkDefaultArgs> = $Result.GetResult<Prisma.$SocialLinkPayload, S>

  type SocialLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialLinkCountAggregateInputType | true
    }

  export interface SocialLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialLink'], meta: { name: 'SocialLink' } }
    /**
     * Find zero or one SocialLink that matches the filter.
     * @param {SocialLinkFindUniqueArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialLinkFindUniqueArgs>(args: SelectSubset<T, SocialLinkFindUniqueArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialLinkFindUniqueOrThrowArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkFindFirstArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialLinkFindFirstArgs>(args?: SelectSubset<T, SocialLinkFindFirstArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkFindFirstOrThrowArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialLinks
     * const socialLinks = await prisma.socialLink.findMany()
     * 
     * // Get first 10 SocialLinks
     * const socialLinks = await prisma.socialLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialLinkWithIdOnly = await prisma.socialLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialLinkFindManyArgs>(args?: SelectSubset<T, SocialLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialLink.
     * @param {SocialLinkCreateArgs} args - Arguments to create a SocialLink.
     * @example
     * // Create one SocialLink
     * const SocialLink = await prisma.socialLink.create({
     *   data: {
     *     // ... data to create a SocialLink
     *   }
     * })
     * 
     */
    create<T extends SocialLinkCreateArgs>(args: SelectSubset<T, SocialLinkCreateArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialLinks.
     * @param {SocialLinkCreateManyArgs} args - Arguments to create many SocialLinks.
     * @example
     * // Create many SocialLinks
     * const socialLink = await prisma.socialLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialLinkCreateManyArgs>(args?: SelectSubset<T, SocialLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SocialLink.
     * @param {SocialLinkDeleteArgs} args - Arguments to delete one SocialLink.
     * @example
     * // Delete one SocialLink
     * const SocialLink = await prisma.socialLink.delete({
     *   where: {
     *     // ... filter to delete one SocialLink
     *   }
     * })
     * 
     */
    delete<T extends SocialLinkDeleteArgs>(args: SelectSubset<T, SocialLinkDeleteArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialLink.
     * @param {SocialLinkUpdateArgs} args - Arguments to update one SocialLink.
     * @example
     * // Update one SocialLink
     * const socialLink = await prisma.socialLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialLinkUpdateArgs>(args: SelectSubset<T, SocialLinkUpdateArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialLinks.
     * @param {SocialLinkDeleteManyArgs} args - Arguments to filter SocialLinks to delete.
     * @example
     * // Delete a few SocialLinks
     * const { count } = await prisma.socialLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialLinkDeleteManyArgs>(args?: SelectSubset<T, SocialLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialLinks
     * const socialLink = await prisma.socialLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialLinkUpdateManyArgs>(args: SelectSubset<T, SocialLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SocialLink.
     * @param {SocialLinkUpsertArgs} args - Arguments to update or create a SocialLink.
     * @example
     * // Update or create a SocialLink
     * const socialLink = await prisma.socialLink.upsert({
     *   create: {
     *     // ... data to create a SocialLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialLink we want to update
     *   }
     * })
     */
    upsert<T extends SocialLinkUpsertArgs>(args: SelectSubset<T, SocialLinkUpsertArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialLinks that matches the filter.
     * @param {SocialLinkFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const socialLink = await prisma.socialLink.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SocialLinkFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SocialLink.
     * @param {SocialLinkAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const socialLink = await prisma.socialLink.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SocialLinkAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkCountArgs} args - Arguments to filter SocialLinks to count.
     * @example
     * // Count the number of SocialLinks
     * const count = await prisma.socialLink.count({
     *   where: {
     *     // ... the filter for the SocialLinks we want to count
     *   }
     * })
    **/
    count<T extends SocialLinkCountArgs>(
      args?: Subset<T, SocialLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SocialLinkAggregateArgs>(args: Subset<T, SocialLinkAggregateArgs>): Prisma.PrismaPromise<GetSocialLinkAggregateType<T>>

    /**
     * Group by SocialLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SocialLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialLinkGroupByArgs['orderBy'] }
        : { orderBy?: SocialLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SocialLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialLink model
   */
  readonly fields: SocialLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SocialLink model
   */
  interface SocialLinkFieldRefs {
    readonly id: FieldRef<"SocialLink", 'String'>
    readonly platform: FieldRef<"SocialLink", 'String'>
    readonly url: FieldRef<"SocialLink", 'String'>
    readonly icon: FieldRef<"SocialLink", 'String'>
    readonly resumeId: FieldRef<"SocialLink", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SocialLink findUnique
   */
  export type SocialLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink findUniqueOrThrow
   */
  export type SocialLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink findFirst
   */
  export type SocialLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialLinks.
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialLinks.
     */
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * SocialLink findFirstOrThrow
   */
  export type SocialLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialLinks.
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialLinks.
     */
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * SocialLink findMany
   */
  export type SocialLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLinks to fetch.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialLinks.
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * SocialLink create
   */
  export type SocialLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a SocialLink.
     */
    data: XOR<SocialLinkCreateInput, SocialLinkUncheckedCreateInput>
  }

  /**
   * SocialLink createMany
   */
  export type SocialLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialLinks.
     */
    data: SocialLinkCreateManyInput | SocialLinkCreateManyInput[]
  }

  /**
   * SocialLink update
   */
  export type SocialLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a SocialLink.
     */
    data: XOR<SocialLinkUpdateInput, SocialLinkUncheckedUpdateInput>
    /**
     * Choose, which SocialLink to update.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink updateMany
   */
  export type SocialLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialLinks.
     */
    data: XOR<SocialLinkUpdateManyMutationInput, SocialLinkUncheckedUpdateManyInput>
    /**
     * Filter which SocialLinks to update
     */
    where?: SocialLinkWhereInput
    /**
     * Limit how many SocialLinks to update.
     */
    limit?: number
  }

  /**
   * SocialLink upsert
   */
  export type SocialLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the SocialLink to update in case it exists.
     */
    where: SocialLinkWhereUniqueInput
    /**
     * In case the SocialLink found by the `where` argument doesn't exist, create a new SocialLink with this data.
     */
    create: XOR<SocialLinkCreateInput, SocialLinkUncheckedCreateInput>
    /**
     * In case the SocialLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialLinkUpdateInput, SocialLinkUncheckedUpdateInput>
  }

  /**
   * SocialLink delete
   */
  export type SocialLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter which SocialLink to delete.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink deleteMany
   */
  export type SocialLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialLinks to delete
     */
    where?: SocialLinkWhereInput
    /**
     * Limit how many SocialLinks to delete.
     */
    limit?: number
  }

  /**
   * SocialLink findRaw
   */
  export type SocialLinkFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SocialLink aggregateRaw
   */
  export type SocialLinkAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SocialLink without action
   */
  export type SocialLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
  }


  /**
   * Model SEO
   */

  export type AggregateSEO = {
    _count: SEOCountAggregateOutputType | null
    _min: SEOMinAggregateOutputType | null
    _max: SEOMaxAggregateOutputType | null
  }

  export type SEOMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    keywords: string | null
    ogTitle: string | null
    ogDescription: string | null
    ogImage: string | null
    twitterTitle: string | null
    twitterDescription: string | null
    twitterImage: string | null
    canonicalUrl: string | null
    resumeId: string | null
  }

  export type SEOMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    keywords: string | null
    ogTitle: string | null
    ogDescription: string | null
    ogImage: string | null
    twitterTitle: string | null
    twitterDescription: string | null
    twitterImage: string | null
    canonicalUrl: string | null
    resumeId: string | null
  }

  export type SEOCountAggregateOutputType = {
    id: number
    title: number
    description: number
    keywords: number
    ogTitle: number
    ogDescription: number
    ogImage: number
    twitterTitle: number
    twitterDescription: number
    twitterImage: number
    canonicalUrl: number
    resumeId: number
    _all: number
  }


  export type SEOMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    keywords?: true
    ogTitle?: true
    ogDescription?: true
    ogImage?: true
    twitterTitle?: true
    twitterDescription?: true
    twitterImage?: true
    canonicalUrl?: true
    resumeId?: true
  }

  export type SEOMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    keywords?: true
    ogTitle?: true
    ogDescription?: true
    ogImage?: true
    twitterTitle?: true
    twitterDescription?: true
    twitterImage?: true
    canonicalUrl?: true
    resumeId?: true
  }

  export type SEOCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    keywords?: true
    ogTitle?: true
    ogDescription?: true
    ogImage?: true
    twitterTitle?: true
    twitterDescription?: true
    twitterImage?: true
    canonicalUrl?: true
    resumeId?: true
    _all?: true
  }

  export type SEOAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SEO to aggregate.
     */
    where?: SEOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SEOS to fetch.
     */
    orderBy?: SEOOrderByWithRelationInput | SEOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SEOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SEOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SEOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SEOS
    **/
    _count?: true | SEOCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SEOMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SEOMaxAggregateInputType
  }

  export type GetSEOAggregateType<T extends SEOAggregateArgs> = {
        [P in keyof T & keyof AggregateSEO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSEO[P]>
      : GetScalarType<T[P], AggregateSEO[P]>
  }




  export type SEOGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SEOWhereInput
    orderBy?: SEOOrderByWithAggregationInput | SEOOrderByWithAggregationInput[]
    by: SEOScalarFieldEnum[] | SEOScalarFieldEnum
    having?: SEOScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SEOCountAggregateInputType | true
    _min?: SEOMinAggregateInputType
    _max?: SEOMaxAggregateInputType
  }

  export type SEOGroupByOutputType = {
    id: string
    title: string
    description: string
    keywords: string
    ogTitle: string | null
    ogDescription: string | null
    ogImage: string | null
    twitterTitle: string | null
    twitterDescription: string | null
    twitterImage: string | null
    canonicalUrl: string | null
    resumeId: string
    _count: SEOCountAggregateOutputType | null
    _min: SEOMinAggregateOutputType | null
    _max: SEOMaxAggregateOutputType | null
  }

  type GetSEOGroupByPayload<T extends SEOGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SEOGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SEOGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SEOGroupByOutputType[P]>
            : GetScalarType<T[P], SEOGroupByOutputType[P]>
        }
      >
    >


  export type SEOSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    keywords?: boolean
    ogTitle?: boolean
    ogDescription?: boolean
    ogImage?: boolean
    twitterTitle?: boolean
    twitterDescription?: boolean
    twitterImage?: boolean
    canonicalUrl?: boolean
    resumeId?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sEO"]>



  export type SEOSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    keywords?: boolean
    ogTitle?: boolean
    ogDescription?: boolean
    ogImage?: boolean
    twitterTitle?: boolean
    twitterDescription?: boolean
    twitterImage?: boolean
    canonicalUrl?: boolean
    resumeId?: boolean
  }

  export type SEOOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "keywords" | "ogTitle" | "ogDescription" | "ogImage" | "twitterTitle" | "twitterDescription" | "twitterImage" | "canonicalUrl" | "resumeId", ExtArgs["result"]["sEO"]>
  export type SEOInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $SEOPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SEO"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      keywords: string
      ogTitle: string | null
      ogDescription: string | null
      ogImage: string | null
      twitterTitle: string | null
      twitterDescription: string | null
      twitterImage: string | null
      canonicalUrl: string | null
      resumeId: string
    }, ExtArgs["result"]["sEO"]>
    composites: {}
  }

  type SEOGetPayload<S extends boolean | null | undefined | SEODefaultArgs> = $Result.GetResult<Prisma.$SEOPayload, S>

  type SEOCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SEOFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SEOCountAggregateInputType | true
    }

  export interface SEODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SEO'], meta: { name: 'SEO' } }
    /**
     * Find zero or one SEO that matches the filter.
     * @param {SEOFindUniqueArgs} args - Arguments to find a SEO
     * @example
     * // Get one SEO
     * const sEO = await prisma.sEO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SEOFindUniqueArgs>(args: SelectSubset<T, SEOFindUniqueArgs<ExtArgs>>): Prisma__SEOClient<$Result.GetResult<Prisma.$SEOPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SEO that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SEOFindUniqueOrThrowArgs} args - Arguments to find a SEO
     * @example
     * // Get one SEO
     * const sEO = await prisma.sEO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SEOFindUniqueOrThrowArgs>(args: SelectSubset<T, SEOFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SEOClient<$Result.GetResult<Prisma.$SEOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SEO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SEOFindFirstArgs} args - Arguments to find a SEO
     * @example
     * // Get one SEO
     * const sEO = await prisma.sEO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SEOFindFirstArgs>(args?: SelectSubset<T, SEOFindFirstArgs<ExtArgs>>): Prisma__SEOClient<$Result.GetResult<Prisma.$SEOPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SEO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SEOFindFirstOrThrowArgs} args - Arguments to find a SEO
     * @example
     * // Get one SEO
     * const sEO = await prisma.sEO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SEOFindFirstOrThrowArgs>(args?: SelectSubset<T, SEOFindFirstOrThrowArgs<ExtArgs>>): Prisma__SEOClient<$Result.GetResult<Prisma.$SEOPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SEOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SEOFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SEOS
     * const sEOS = await prisma.sEO.findMany()
     * 
     * // Get first 10 SEOS
     * const sEOS = await prisma.sEO.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sEOWithIdOnly = await prisma.sEO.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SEOFindManyArgs>(args?: SelectSubset<T, SEOFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SEOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SEO.
     * @param {SEOCreateArgs} args - Arguments to create a SEO.
     * @example
     * // Create one SEO
     * const SEO = await prisma.sEO.create({
     *   data: {
     *     // ... data to create a SEO
     *   }
     * })
     * 
     */
    create<T extends SEOCreateArgs>(args: SelectSubset<T, SEOCreateArgs<ExtArgs>>): Prisma__SEOClient<$Result.GetResult<Prisma.$SEOPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SEOS.
     * @param {SEOCreateManyArgs} args - Arguments to create many SEOS.
     * @example
     * // Create many SEOS
     * const sEO = await prisma.sEO.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SEOCreateManyArgs>(args?: SelectSubset<T, SEOCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SEO.
     * @param {SEODeleteArgs} args - Arguments to delete one SEO.
     * @example
     * // Delete one SEO
     * const SEO = await prisma.sEO.delete({
     *   where: {
     *     // ... filter to delete one SEO
     *   }
     * })
     * 
     */
    delete<T extends SEODeleteArgs>(args: SelectSubset<T, SEODeleteArgs<ExtArgs>>): Prisma__SEOClient<$Result.GetResult<Prisma.$SEOPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SEO.
     * @param {SEOUpdateArgs} args - Arguments to update one SEO.
     * @example
     * // Update one SEO
     * const sEO = await prisma.sEO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SEOUpdateArgs>(args: SelectSubset<T, SEOUpdateArgs<ExtArgs>>): Prisma__SEOClient<$Result.GetResult<Prisma.$SEOPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SEOS.
     * @param {SEODeleteManyArgs} args - Arguments to filter SEOS to delete.
     * @example
     * // Delete a few SEOS
     * const { count } = await prisma.sEO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SEODeleteManyArgs>(args?: SelectSubset<T, SEODeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SEOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SEOUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SEOS
     * const sEO = await prisma.sEO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SEOUpdateManyArgs>(args: SelectSubset<T, SEOUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SEO.
     * @param {SEOUpsertArgs} args - Arguments to update or create a SEO.
     * @example
     * // Update or create a SEO
     * const sEO = await prisma.sEO.upsert({
     *   create: {
     *     // ... data to create a SEO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SEO we want to update
     *   }
     * })
     */
    upsert<T extends SEOUpsertArgs>(args: SelectSubset<T, SEOUpsertArgs<ExtArgs>>): Prisma__SEOClient<$Result.GetResult<Prisma.$SEOPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SEOS that matches the filter.
     * @param {SEOFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const sEO = await prisma.sEO.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SEOFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SEO.
     * @param {SEOAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const sEO = await prisma.sEO.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SEOAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SEOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SEOCountArgs} args - Arguments to filter SEOS to count.
     * @example
     * // Count the number of SEOS
     * const count = await prisma.sEO.count({
     *   where: {
     *     // ... the filter for the SEOS we want to count
     *   }
     * })
    **/
    count<T extends SEOCountArgs>(
      args?: Subset<T, SEOCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SEOCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SEO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SEOAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SEOAggregateArgs>(args: Subset<T, SEOAggregateArgs>): Prisma.PrismaPromise<GetSEOAggregateType<T>>

    /**
     * Group by SEO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SEOGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SEOGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SEOGroupByArgs['orderBy'] }
        : { orderBy?: SEOGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SEOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSEOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SEO model
   */
  readonly fields: SEOFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SEO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SEOClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SEO model
   */
  interface SEOFieldRefs {
    readonly id: FieldRef<"SEO", 'String'>
    readonly title: FieldRef<"SEO", 'String'>
    readonly description: FieldRef<"SEO", 'String'>
    readonly keywords: FieldRef<"SEO", 'String'>
    readonly ogTitle: FieldRef<"SEO", 'String'>
    readonly ogDescription: FieldRef<"SEO", 'String'>
    readonly ogImage: FieldRef<"SEO", 'String'>
    readonly twitterTitle: FieldRef<"SEO", 'String'>
    readonly twitterDescription: FieldRef<"SEO", 'String'>
    readonly twitterImage: FieldRef<"SEO", 'String'>
    readonly canonicalUrl: FieldRef<"SEO", 'String'>
    readonly resumeId: FieldRef<"SEO", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SEO findUnique
   */
  export type SEOFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SEO
     */
    select?: SEOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SEO
     */
    omit?: SEOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SEOInclude<ExtArgs> | null
    /**
     * Filter, which SEO to fetch.
     */
    where: SEOWhereUniqueInput
  }

  /**
   * SEO findUniqueOrThrow
   */
  export type SEOFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SEO
     */
    select?: SEOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SEO
     */
    omit?: SEOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SEOInclude<ExtArgs> | null
    /**
     * Filter, which SEO to fetch.
     */
    where: SEOWhereUniqueInput
  }

  /**
   * SEO findFirst
   */
  export type SEOFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SEO
     */
    select?: SEOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SEO
     */
    omit?: SEOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SEOInclude<ExtArgs> | null
    /**
     * Filter, which SEO to fetch.
     */
    where?: SEOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SEOS to fetch.
     */
    orderBy?: SEOOrderByWithRelationInput | SEOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SEOS.
     */
    cursor?: SEOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SEOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SEOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SEOS.
     */
    distinct?: SEOScalarFieldEnum | SEOScalarFieldEnum[]
  }

  /**
   * SEO findFirstOrThrow
   */
  export type SEOFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SEO
     */
    select?: SEOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SEO
     */
    omit?: SEOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SEOInclude<ExtArgs> | null
    /**
     * Filter, which SEO to fetch.
     */
    where?: SEOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SEOS to fetch.
     */
    orderBy?: SEOOrderByWithRelationInput | SEOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SEOS.
     */
    cursor?: SEOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SEOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SEOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SEOS.
     */
    distinct?: SEOScalarFieldEnum | SEOScalarFieldEnum[]
  }

  /**
   * SEO findMany
   */
  export type SEOFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SEO
     */
    select?: SEOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SEO
     */
    omit?: SEOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SEOInclude<ExtArgs> | null
    /**
     * Filter, which SEOS to fetch.
     */
    where?: SEOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SEOS to fetch.
     */
    orderBy?: SEOOrderByWithRelationInput | SEOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SEOS.
     */
    cursor?: SEOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SEOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SEOS.
     */
    skip?: number
    distinct?: SEOScalarFieldEnum | SEOScalarFieldEnum[]
  }

  /**
   * SEO create
   */
  export type SEOCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SEO
     */
    select?: SEOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SEO
     */
    omit?: SEOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SEOInclude<ExtArgs> | null
    /**
     * The data needed to create a SEO.
     */
    data: XOR<SEOCreateInput, SEOUncheckedCreateInput>
  }

  /**
   * SEO createMany
   */
  export type SEOCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SEOS.
     */
    data: SEOCreateManyInput | SEOCreateManyInput[]
  }

  /**
   * SEO update
   */
  export type SEOUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SEO
     */
    select?: SEOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SEO
     */
    omit?: SEOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SEOInclude<ExtArgs> | null
    /**
     * The data needed to update a SEO.
     */
    data: XOR<SEOUpdateInput, SEOUncheckedUpdateInput>
    /**
     * Choose, which SEO to update.
     */
    where: SEOWhereUniqueInput
  }

  /**
   * SEO updateMany
   */
  export type SEOUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SEOS.
     */
    data: XOR<SEOUpdateManyMutationInput, SEOUncheckedUpdateManyInput>
    /**
     * Filter which SEOS to update
     */
    where?: SEOWhereInput
    /**
     * Limit how many SEOS to update.
     */
    limit?: number
  }

  /**
   * SEO upsert
   */
  export type SEOUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SEO
     */
    select?: SEOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SEO
     */
    omit?: SEOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SEOInclude<ExtArgs> | null
    /**
     * The filter to search for the SEO to update in case it exists.
     */
    where: SEOWhereUniqueInput
    /**
     * In case the SEO found by the `where` argument doesn't exist, create a new SEO with this data.
     */
    create: XOR<SEOCreateInput, SEOUncheckedCreateInput>
    /**
     * In case the SEO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SEOUpdateInput, SEOUncheckedUpdateInput>
  }

  /**
   * SEO delete
   */
  export type SEODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SEO
     */
    select?: SEOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SEO
     */
    omit?: SEOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SEOInclude<ExtArgs> | null
    /**
     * Filter which SEO to delete.
     */
    where: SEOWhereUniqueInput
  }

  /**
   * SEO deleteMany
   */
  export type SEODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SEOS to delete
     */
    where?: SEOWhereInput
    /**
     * Limit how many SEOS to delete.
     */
    limit?: number
  }

  /**
   * SEO findRaw
   */
  export type SEOFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SEO aggregateRaw
   */
  export type SEOAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SEO without action
   */
  export type SEODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SEO
     */
    select?: SEOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SEO
     */
    omit?: SEOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SEOInclude<ExtArgs> | null
  }


  /**
   * Model Theme
   */

  export type AggregateTheme = {
    _count: ThemeCountAggregateOutputType | null
    _avg: ThemeAvgAggregateOutputType | null
    _sum: ThemeSumAggregateOutputType | null
    _min: ThemeMinAggregateOutputType | null
    _max: ThemeMaxAggregateOutputType | null
  }

  export type ThemeAvgAggregateOutputType = {
    borderRadius: number | null
    buttonRadius: number | null
    cardRadius: number | null
  }

  export type ThemeSumAggregateOutputType = {
    borderRadius: number | null
    buttonRadius: number | null
    cardRadius: number | null
  }

  export type ThemeMinAggregateOutputType = {
    id: string | null
    primaryColor: string | null
    secondaryColor: string | null
    accentColor: string | null
    backgroundColor: string | null
    textColor: string | null
    headingColor: string | null
    linkColor: string | null
    buttonColor: string | null
    buttonTextColor: string | null
    cardColor: string | null
    borderColor: string | null
    darkPrimaryColor: string | null
    darkSecondaryColor: string | null
    darkAccentColor: string | null
    darkBackgroundColor: string | null
    darkTextColor: string | null
    darkHeadingColor: string | null
    darkLinkColor: string | null
    darkButtonColor: string | null
    darkButtonTextColor: string | null
    darkCardColor: string | null
    darkBorderColor: string | null
    headingFont: string | null
    bodyFont: string | null
    borderRadius: number | null
    buttonRadius: number | null
    cardRadius: number | null
    name: string | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    resumeId: string | null
  }

  export type ThemeMaxAggregateOutputType = {
    id: string | null
    primaryColor: string | null
    secondaryColor: string | null
    accentColor: string | null
    backgroundColor: string | null
    textColor: string | null
    headingColor: string | null
    linkColor: string | null
    buttonColor: string | null
    buttonTextColor: string | null
    cardColor: string | null
    borderColor: string | null
    darkPrimaryColor: string | null
    darkSecondaryColor: string | null
    darkAccentColor: string | null
    darkBackgroundColor: string | null
    darkTextColor: string | null
    darkHeadingColor: string | null
    darkLinkColor: string | null
    darkButtonColor: string | null
    darkButtonTextColor: string | null
    darkCardColor: string | null
    darkBorderColor: string | null
    headingFont: string | null
    bodyFont: string | null
    borderRadius: number | null
    buttonRadius: number | null
    cardRadius: number | null
    name: string | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    resumeId: string | null
  }

  export type ThemeCountAggregateOutputType = {
    id: number
    primaryColor: number
    secondaryColor: number
    accentColor: number
    backgroundColor: number
    textColor: number
    headingColor: number
    linkColor: number
    buttonColor: number
    buttonTextColor: number
    cardColor: number
    borderColor: number
    darkPrimaryColor: number
    darkSecondaryColor: number
    darkAccentColor: number
    darkBackgroundColor: number
    darkTextColor: number
    darkHeadingColor: number
    darkLinkColor: number
    darkButtonColor: number
    darkButtonTextColor: number
    darkCardColor: number
    darkBorderColor: number
    headingFont: number
    bodyFont: number
    borderRadius: number
    buttonRadius: number
    cardRadius: number
    name: number
    isDefault: number
    createdAt: number
    updatedAt: number
    resumeId: number
    _all: number
  }


  export type ThemeAvgAggregateInputType = {
    borderRadius?: true
    buttonRadius?: true
    cardRadius?: true
  }

  export type ThemeSumAggregateInputType = {
    borderRadius?: true
    buttonRadius?: true
    cardRadius?: true
  }

  export type ThemeMinAggregateInputType = {
    id?: true
    primaryColor?: true
    secondaryColor?: true
    accentColor?: true
    backgroundColor?: true
    textColor?: true
    headingColor?: true
    linkColor?: true
    buttonColor?: true
    buttonTextColor?: true
    cardColor?: true
    borderColor?: true
    darkPrimaryColor?: true
    darkSecondaryColor?: true
    darkAccentColor?: true
    darkBackgroundColor?: true
    darkTextColor?: true
    darkHeadingColor?: true
    darkLinkColor?: true
    darkButtonColor?: true
    darkButtonTextColor?: true
    darkCardColor?: true
    darkBorderColor?: true
    headingFont?: true
    bodyFont?: true
    borderRadius?: true
    buttonRadius?: true
    cardRadius?: true
    name?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    resumeId?: true
  }

  export type ThemeMaxAggregateInputType = {
    id?: true
    primaryColor?: true
    secondaryColor?: true
    accentColor?: true
    backgroundColor?: true
    textColor?: true
    headingColor?: true
    linkColor?: true
    buttonColor?: true
    buttonTextColor?: true
    cardColor?: true
    borderColor?: true
    darkPrimaryColor?: true
    darkSecondaryColor?: true
    darkAccentColor?: true
    darkBackgroundColor?: true
    darkTextColor?: true
    darkHeadingColor?: true
    darkLinkColor?: true
    darkButtonColor?: true
    darkButtonTextColor?: true
    darkCardColor?: true
    darkBorderColor?: true
    headingFont?: true
    bodyFont?: true
    borderRadius?: true
    buttonRadius?: true
    cardRadius?: true
    name?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    resumeId?: true
  }

  export type ThemeCountAggregateInputType = {
    id?: true
    primaryColor?: true
    secondaryColor?: true
    accentColor?: true
    backgroundColor?: true
    textColor?: true
    headingColor?: true
    linkColor?: true
    buttonColor?: true
    buttonTextColor?: true
    cardColor?: true
    borderColor?: true
    darkPrimaryColor?: true
    darkSecondaryColor?: true
    darkAccentColor?: true
    darkBackgroundColor?: true
    darkTextColor?: true
    darkHeadingColor?: true
    darkLinkColor?: true
    darkButtonColor?: true
    darkButtonTextColor?: true
    darkCardColor?: true
    darkBorderColor?: true
    headingFont?: true
    bodyFont?: true
    borderRadius?: true
    buttonRadius?: true
    cardRadius?: true
    name?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    resumeId?: true
    _all?: true
  }

  export type ThemeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Theme to aggregate.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Themes
    **/
    _count?: true | ThemeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ThemeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ThemeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThemeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThemeMaxAggregateInputType
  }

  export type GetThemeAggregateType<T extends ThemeAggregateArgs> = {
        [P in keyof T & keyof AggregateTheme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTheme[P]>
      : GetScalarType<T[P], AggregateTheme[P]>
  }




  export type ThemeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThemeWhereInput
    orderBy?: ThemeOrderByWithAggregationInput | ThemeOrderByWithAggregationInput[]
    by: ThemeScalarFieldEnum[] | ThemeScalarFieldEnum
    having?: ThemeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThemeCountAggregateInputType | true
    _avg?: ThemeAvgAggregateInputType
    _sum?: ThemeSumAggregateInputType
    _min?: ThemeMinAggregateInputType
    _max?: ThemeMaxAggregateInputType
  }

  export type ThemeGroupByOutputType = {
    id: string
    primaryColor: string
    secondaryColor: string
    accentColor: string
    backgroundColor: string
    textColor: string
    headingColor: string
    linkColor: string
    buttonColor: string
    buttonTextColor: string
    cardColor: string
    borderColor: string
    darkPrimaryColor: string
    darkSecondaryColor: string
    darkAccentColor: string
    darkBackgroundColor: string
    darkTextColor: string
    darkHeadingColor: string
    darkLinkColor: string
    darkButtonColor: string
    darkButtonTextColor: string
    darkCardColor: string
    darkBorderColor: string
    headingFont: string
    bodyFont: string
    borderRadius: number
    buttonRadius: number
    cardRadius: number
    name: string | null
    isDefault: boolean
    createdAt: Date
    updatedAt: Date
    resumeId: string | null
    _count: ThemeCountAggregateOutputType | null
    _avg: ThemeAvgAggregateOutputType | null
    _sum: ThemeSumAggregateOutputType | null
    _min: ThemeMinAggregateOutputType | null
    _max: ThemeMaxAggregateOutputType | null
  }

  type GetThemeGroupByPayload<T extends ThemeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThemeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThemeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThemeGroupByOutputType[P]>
            : GetScalarType<T[P], ThemeGroupByOutputType[P]>
        }
      >
    >


  export type ThemeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    accentColor?: boolean
    backgroundColor?: boolean
    textColor?: boolean
    headingColor?: boolean
    linkColor?: boolean
    buttonColor?: boolean
    buttonTextColor?: boolean
    cardColor?: boolean
    borderColor?: boolean
    darkPrimaryColor?: boolean
    darkSecondaryColor?: boolean
    darkAccentColor?: boolean
    darkBackgroundColor?: boolean
    darkTextColor?: boolean
    darkHeadingColor?: boolean
    darkLinkColor?: boolean
    darkButtonColor?: boolean
    darkButtonTextColor?: boolean
    darkCardColor?: boolean
    darkBorderColor?: boolean
    headingFont?: boolean
    bodyFont?: boolean
    borderRadius?: boolean
    buttonRadius?: boolean
    cardRadius?: boolean
    name?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resumeId?: boolean
    resume?: boolean | Theme$resumeArgs<ExtArgs>
  }, ExtArgs["result"]["theme"]>



  export type ThemeSelectScalar = {
    id?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    accentColor?: boolean
    backgroundColor?: boolean
    textColor?: boolean
    headingColor?: boolean
    linkColor?: boolean
    buttonColor?: boolean
    buttonTextColor?: boolean
    cardColor?: boolean
    borderColor?: boolean
    darkPrimaryColor?: boolean
    darkSecondaryColor?: boolean
    darkAccentColor?: boolean
    darkBackgroundColor?: boolean
    darkTextColor?: boolean
    darkHeadingColor?: boolean
    darkLinkColor?: boolean
    darkButtonColor?: boolean
    darkButtonTextColor?: boolean
    darkCardColor?: boolean
    darkBorderColor?: boolean
    headingFont?: boolean
    bodyFont?: boolean
    borderRadius?: boolean
    buttonRadius?: boolean
    cardRadius?: boolean
    name?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resumeId?: boolean
  }

  export type ThemeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "primaryColor" | "secondaryColor" | "accentColor" | "backgroundColor" | "textColor" | "headingColor" | "linkColor" | "buttonColor" | "buttonTextColor" | "cardColor" | "borderColor" | "darkPrimaryColor" | "darkSecondaryColor" | "darkAccentColor" | "darkBackgroundColor" | "darkTextColor" | "darkHeadingColor" | "darkLinkColor" | "darkButtonColor" | "darkButtonTextColor" | "darkCardColor" | "darkBorderColor" | "headingFont" | "bodyFont" | "borderRadius" | "buttonRadius" | "cardRadius" | "name" | "isDefault" | "createdAt" | "updatedAt" | "resumeId", ExtArgs["result"]["theme"]>
  export type ThemeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | Theme$resumeArgs<ExtArgs>
  }

  export type $ThemePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Theme"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      primaryColor: string
      secondaryColor: string
      accentColor: string
      backgroundColor: string
      textColor: string
      headingColor: string
      linkColor: string
      buttonColor: string
      buttonTextColor: string
      cardColor: string
      borderColor: string
      darkPrimaryColor: string
      darkSecondaryColor: string
      darkAccentColor: string
      darkBackgroundColor: string
      darkTextColor: string
      darkHeadingColor: string
      darkLinkColor: string
      darkButtonColor: string
      darkButtonTextColor: string
      darkCardColor: string
      darkBorderColor: string
      headingFont: string
      bodyFont: string
      borderRadius: number
      buttonRadius: number
      cardRadius: number
      name: string | null
      isDefault: boolean
      createdAt: Date
      updatedAt: Date
      resumeId: string | null
    }, ExtArgs["result"]["theme"]>
    composites: {}
  }

  type ThemeGetPayload<S extends boolean | null | undefined | ThemeDefaultArgs> = $Result.GetResult<Prisma.$ThemePayload, S>

  type ThemeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ThemeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ThemeCountAggregateInputType | true
    }

  export interface ThemeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Theme'], meta: { name: 'Theme' } }
    /**
     * Find zero or one Theme that matches the filter.
     * @param {ThemeFindUniqueArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ThemeFindUniqueArgs>(args: SelectSubset<T, ThemeFindUniqueArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Theme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ThemeFindUniqueOrThrowArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ThemeFindUniqueOrThrowArgs>(args: SelectSubset<T, ThemeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Theme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindFirstArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ThemeFindFirstArgs>(args?: SelectSubset<T, ThemeFindFirstArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Theme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindFirstOrThrowArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ThemeFindFirstOrThrowArgs>(args?: SelectSubset<T, ThemeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Themes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Themes
     * const themes = await prisma.theme.findMany()
     * 
     * // Get first 10 Themes
     * const themes = await prisma.theme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const themeWithIdOnly = await prisma.theme.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ThemeFindManyArgs>(args?: SelectSubset<T, ThemeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Theme.
     * @param {ThemeCreateArgs} args - Arguments to create a Theme.
     * @example
     * // Create one Theme
     * const Theme = await prisma.theme.create({
     *   data: {
     *     // ... data to create a Theme
     *   }
     * })
     * 
     */
    create<T extends ThemeCreateArgs>(args: SelectSubset<T, ThemeCreateArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Themes.
     * @param {ThemeCreateManyArgs} args - Arguments to create many Themes.
     * @example
     * // Create many Themes
     * const theme = await prisma.theme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ThemeCreateManyArgs>(args?: SelectSubset<T, ThemeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Theme.
     * @param {ThemeDeleteArgs} args - Arguments to delete one Theme.
     * @example
     * // Delete one Theme
     * const Theme = await prisma.theme.delete({
     *   where: {
     *     // ... filter to delete one Theme
     *   }
     * })
     * 
     */
    delete<T extends ThemeDeleteArgs>(args: SelectSubset<T, ThemeDeleteArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Theme.
     * @param {ThemeUpdateArgs} args - Arguments to update one Theme.
     * @example
     * // Update one Theme
     * const theme = await prisma.theme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ThemeUpdateArgs>(args: SelectSubset<T, ThemeUpdateArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Themes.
     * @param {ThemeDeleteManyArgs} args - Arguments to filter Themes to delete.
     * @example
     * // Delete a few Themes
     * const { count } = await prisma.theme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ThemeDeleteManyArgs>(args?: SelectSubset<T, ThemeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Themes
     * const theme = await prisma.theme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ThemeUpdateManyArgs>(args: SelectSubset<T, ThemeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Theme.
     * @param {ThemeUpsertArgs} args - Arguments to update or create a Theme.
     * @example
     * // Update or create a Theme
     * const theme = await prisma.theme.upsert({
     *   create: {
     *     // ... data to create a Theme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Theme we want to update
     *   }
     * })
     */
    upsert<T extends ThemeUpsertArgs>(args: SelectSubset<T, ThemeUpsertArgs<ExtArgs>>): Prisma__ThemeClient<$Result.GetResult<Prisma.$ThemePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Themes that matches the filter.
     * @param {ThemeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const theme = await prisma.theme.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ThemeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Theme.
     * @param {ThemeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const theme = await prisma.theme.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ThemeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeCountArgs} args - Arguments to filter Themes to count.
     * @example
     * // Count the number of Themes
     * const count = await prisma.theme.count({
     *   where: {
     *     // ... the filter for the Themes we want to count
     *   }
     * })
    **/
    count<T extends ThemeCountArgs>(
      args?: Subset<T, ThemeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThemeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ThemeAggregateArgs>(args: Subset<T, ThemeAggregateArgs>): Prisma.PrismaPromise<GetThemeAggregateType<T>>

    /**
     * Group by Theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ThemeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThemeGroupByArgs['orderBy'] }
        : { orderBy?: ThemeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ThemeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThemeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Theme model
   */
  readonly fields: ThemeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Theme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThemeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends Theme$resumeArgs<ExtArgs> = {}>(args?: Subset<T, Theme$resumeArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Theme model
   */
  interface ThemeFieldRefs {
    readonly id: FieldRef<"Theme", 'String'>
    readonly primaryColor: FieldRef<"Theme", 'String'>
    readonly secondaryColor: FieldRef<"Theme", 'String'>
    readonly accentColor: FieldRef<"Theme", 'String'>
    readonly backgroundColor: FieldRef<"Theme", 'String'>
    readonly textColor: FieldRef<"Theme", 'String'>
    readonly headingColor: FieldRef<"Theme", 'String'>
    readonly linkColor: FieldRef<"Theme", 'String'>
    readonly buttonColor: FieldRef<"Theme", 'String'>
    readonly buttonTextColor: FieldRef<"Theme", 'String'>
    readonly cardColor: FieldRef<"Theme", 'String'>
    readonly borderColor: FieldRef<"Theme", 'String'>
    readonly darkPrimaryColor: FieldRef<"Theme", 'String'>
    readonly darkSecondaryColor: FieldRef<"Theme", 'String'>
    readonly darkAccentColor: FieldRef<"Theme", 'String'>
    readonly darkBackgroundColor: FieldRef<"Theme", 'String'>
    readonly darkTextColor: FieldRef<"Theme", 'String'>
    readonly darkHeadingColor: FieldRef<"Theme", 'String'>
    readonly darkLinkColor: FieldRef<"Theme", 'String'>
    readonly darkButtonColor: FieldRef<"Theme", 'String'>
    readonly darkButtonTextColor: FieldRef<"Theme", 'String'>
    readonly darkCardColor: FieldRef<"Theme", 'String'>
    readonly darkBorderColor: FieldRef<"Theme", 'String'>
    readonly headingFont: FieldRef<"Theme", 'String'>
    readonly bodyFont: FieldRef<"Theme", 'String'>
    readonly borderRadius: FieldRef<"Theme", 'Int'>
    readonly buttonRadius: FieldRef<"Theme", 'Int'>
    readonly cardRadius: FieldRef<"Theme", 'Int'>
    readonly name: FieldRef<"Theme", 'String'>
    readonly isDefault: FieldRef<"Theme", 'Boolean'>
    readonly createdAt: FieldRef<"Theme", 'DateTime'>
    readonly updatedAt: FieldRef<"Theme", 'DateTime'>
    readonly resumeId: FieldRef<"Theme", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Theme findUnique
   */
  export type ThemeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme findUniqueOrThrow
   */
  export type ThemeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme findFirst
   */
  export type ThemeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Themes.
     */
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Theme findFirstOrThrow
   */
  export type ThemeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Theme to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Themes.
     */
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Theme findMany
   */
  export type ThemeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter, which Themes to fetch.
     */
    where?: ThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Themes to fetch.
     */
    orderBy?: ThemeOrderByWithRelationInput | ThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Themes.
     */
    cursor?: ThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Themes.
     */
    skip?: number
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * Theme create
   */
  export type ThemeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The data needed to create a Theme.
     */
    data: XOR<ThemeCreateInput, ThemeUncheckedCreateInput>
  }

  /**
   * Theme createMany
   */
  export type ThemeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Themes.
     */
    data: ThemeCreateManyInput | ThemeCreateManyInput[]
  }

  /**
   * Theme update
   */
  export type ThemeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The data needed to update a Theme.
     */
    data: XOR<ThemeUpdateInput, ThemeUncheckedUpdateInput>
    /**
     * Choose, which Theme to update.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme updateMany
   */
  export type ThemeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Themes.
     */
    data: XOR<ThemeUpdateManyMutationInput, ThemeUncheckedUpdateManyInput>
    /**
     * Filter which Themes to update
     */
    where?: ThemeWhereInput
    /**
     * Limit how many Themes to update.
     */
    limit?: number
  }

  /**
   * Theme upsert
   */
  export type ThemeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * The filter to search for the Theme to update in case it exists.
     */
    where: ThemeWhereUniqueInput
    /**
     * In case the Theme found by the `where` argument doesn't exist, create a new Theme with this data.
     */
    create: XOR<ThemeCreateInput, ThemeUncheckedCreateInput>
    /**
     * In case the Theme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThemeUpdateInput, ThemeUncheckedUpdateInput>
  }

  /**
   * Theme delete
   */
  export type ThemeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
    /**
     * Filter which Theme to delete.
     */
    where: ThemeWhereUniqueInput
  }

  /**
   * Theme deleteMany
   */
  export type ThemeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Themes to delete
     */
    where?: ThemeWhereInput
    /**
     * Limit how many Themes to delete.
     */
    limit?: number
  }

  /**
   * Theme findRaw
   */
  export type ThemeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Theme aggregateRaw
   */
  export type ThemeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Theme.resume
   */
  export type Theme$resumeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    where?: ResumeWhereInput
  }

  /**
   * Theme without action
   */
  export type ThemeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Theme
     */
    select?: ThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Theme
     */
    omit?: ThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThemeInclude<ExtArgs> | null
  }


  /**
   * Model FocusArea
   */

  export type AggregateFocusArea = {
    _count: FocusAreaCountAggregateOutputType | null
    _min: FocusAreaMinAggregateOutputType | null
    _max: FocusAreaMaxAggregateOutputType | null
  }

  export type FocusAreaMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    icon: string | null
    resumeId: string | null
  }

  export type FocusAreaMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    icon: string | null
    resumeId: string | null
  }

  export type FocusAreaCountAggregateOutputType = {
    id: number
    title: number
    description: number
    icon: number
    resumeId: number
    _all: number
  }


  export type FocusAreaMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    icon?: true
    resumeId?: true
  }

  export type FocusAreaMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    icon?: true
    resumeId?: true
  }

  export type FocusAreaCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    icon?: true
    resumeId?: true
    _all?: true
  }

  export type FocusAreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FocusArea to aggregate.
     */
    where?: FocusAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FocusAreas to fetch.
     */
    orderBy?: FocusAreaOrderByWithRelationInput | FocusAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FocusAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FocusAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FocusAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FocusAreas
    **/
    _count?: true | FocusAreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FocusAreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FocusAreaMaxAggregateInputType
  }

  export type GetFocusAreaAggregateType<T extends FocusAreaAggregateArgs> = {
        [P in keyof T & keyof AggregateFocusArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFocusArea[P]>
      : GetScalarType<T[P], AggregateFocusArea[P]>
  }




  export type FocusAreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FocusAreaWhereInput
    orderBy?: FocusAreaOrderByWithAggregationInput | FocusAreaOrderByWithAggregationInput[]
    by: FocusAreaScalarFieldEnum[] | FocusAreaScalarFieldEnum
    having?: FocusAreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FocusAreaCountAggregateInputType | true
    _min?: FocusAreaMinAggregateInputType
    _max?: FocusAreaMaxAggregateInputType
  }

  export type FocusAreaGroupByOutputType = {
    id: string
    title: string
    description: string
    icon: string
    resumeId: string
    _count: FocusAreaCountAggregateOutputType | null
    _min: FocusAreaMinAggregateOutputType | null
    _max: FocusAreaMaxAggregateOutputType | null
  }

  type GetFocusAreaGroupByPayload<T extends FocusAreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FocusAreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FocusAreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FocusAreaGroupByOutputType[P]>
            : GetScalarType<T[P], FocusAreaGroupByOutputType[P]>
        }
      >
    >


  export type FocusAreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    resumeId?: boolean
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["focusArea"]>



  export type FocusAreaSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    resumeId?: boolean
  }

  export type FocusAreaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "icon" | "resumeId", ExtArgs["result"]["focusArea"]>
  export type FocusAreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | ResumeDefaultArgs<ExtArgs>
  }

  export type $FocusAreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FocusArea"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      icon: string
      resumeId: string
    }, ExtArgs["result"]["focusArea"]>
    composites: {}
  }

  type FocusAreaGetPayload<S extends boolean | null | undefined | FocusAreaDefaultArgs> = $Result.GetResult<Prisma.$FocusAreaPayload, S>

  type FocusAreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FocusAreaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FocusAreaCountAggregateInputType | true
    }

  export interface FocusAreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FocusArea'], meta: { name: 'FocusArea' } }
    /**
     * Find zero or one FocusArea that matches the filter.
     * @param {FocusAreaFindUniqueArgs} args - Arguments to find a FocusArea
     * @example
     * // Get one FocusArea
     * const focusArea = await prisma.focusArea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FocusAreaFindUniqueArgs>(args: SelectSubset<T, FocusAreaFindUniqueArgs<ExtArgs>>): Prisma__FocusAreaClient<$Result.GetResult<Prisma.$FocusAreaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FocusArea that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FocusAreaFindUniqueOrThrowArgs} args - Arguments to find a FocusArea
     * @example
     * // Get one FocusArea
     * const focusArea = await prisma.focusArea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FocusAreaFindUniqueOrThrowArgs>(args: SelectSubset<T, FocusAreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FocusAreaClient<$Result.GetResult<Prisma.$FocusAreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FocusArea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusAreaFindFirstArgs} args - Arguments to find a FocusArea
     * @example
     * // Get one FocusArea
     * const focusArea = await prisma.focusArea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FocusAreaFindFirstArgs>(args?: SelectSubset<T, FocusAreaFindFirstArgs<ExtArgs>>): Prisma__FocusAreaClient<$Result.GetResult<Prisma.$FocusAreaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FocusArea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusAreaFindFirstOrThrowArgs} args - Arguments to find a FocusArea
     * @example
     * // Get one FocusArea
     * const focusArea = await prisma.focusArea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FocusAreaFindFirstOrThrowArgs>(args?: SelectSubset<T, FocusAreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FocusAreaClient<$Result.GetResult<Prisma.$FocusAreaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FocusAreas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusAreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FocusAreas
     * const focusAreas = await prisma.focusArea.findMany()
     * 
     * // Get first 10 FocusAreas
     * const focusAreas = await prisma.focusArea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const focusAreaWithIdOnly = await prisma.focusArea.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FocusAreaFindManyArgs>(args?: SelectSubset<T, FocusAreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FocusAreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FocusArea.
     * @param {FocusAreaCreateArgs} args - Arguments to create a FocusArea.
     * @example
     * // Create one FocusArea
     * const FocusArea = await prisma.focusArea.create({
     *   data: {
     *     // ... data to create a FocusArea
     *   }
     * })
     * 
     */
    create<T extends FocusAreaCreateArgs>(args: SelectSubset<T, FocusAreaCreateArgs<ExtArgs>>): Prisma__FocusAreaClient<$Result.GetResult<Prisma.$FocusAreaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FocusAreas.
     * @param {FocusAreaCreateManyArgs} args - Arguments to create many FocusAreas.
     * @example
     * // Create many FocusAreas
     * const focusArea = await prisma.focusArea.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FocusAreaCreateManyArgs>(args?: SelectSubset<T, FocusAreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FocusArea.
     * @param {FocusAreaDeleteArgs} args - Arguments to delete one FocusArea.
     * @example
     * // Delete one FocusArea
     * const FocusArea = await prisma.focusArea.delete({
     *   where: {
     *     // ... filter to delete one FocusArea
     *   }
     * })
     * 
     */
    delete<T extends FocusAreaDeleteArgs>(args: SelectSubset<T, FocusAreaDeleteArgs<ExtArgs>>): Prisma__FocusAreaClient<$Result.GetResult<Prisma.$FocusAreaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FocusArea.
     * @param {FocusAreaUpdateArgs} args - Arguments to update one FocusArea.
     * @example
     * // Update one FocusArea
     * const focusArea = await prisma.focusArea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FocusAreaUpdateArgs>(args: SelectSubset<T, FocusAreaUpdateArgs<ExtArgs>>): Prisma__FocusAreaClient<$Result.GetResult<Prisma.$FocusAreaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FocusAreas.
     * @param {FocusAreaDeleteManyArgs} args - Arguments to filter FocusAreas to delete.
     * @example
     * // Delete a few FocusAreas
     * const { count } = await prisma.focusArea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FocusAreaDeleteManyArgs>(args?: SelectSubset<T, FocusAreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FocusAreas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusAreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FocusAreas
     * const focusArea = await prisma.focusArea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FocusAreaUpdateManyArgs>(args: SelectSubset<T, FocusAreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FocusArea.
     * @param {FocusAreaUpsertArgs} args - Arguments to update or create a FocusArea.
     * @example
     * // Update or create a FocusArea
     * const focusArea = await prisma.focusArea.upsert({
     *   create: {
     *     // ... data to create a FocusArea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FocusArea we want to update
     *   }
     * })
     */
    upsert<T extends FocusAreaUpsertArgs>(args: SelectSubset<T, FocusAreaUpsertArgs<ExtArgs>>): Prisma__FocusAreaClient<$Result.GetResult<Prisma.$FocusAreaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FocusAreas that matches the filter.
     * @param {FocusAreaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const focusArea = await prisma.focusArea.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FocusAreaFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a FocusArea.
     * @param {FocusAreaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const focusArea = await prisma.focusArea.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FocusAreaAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of FocusAreas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusAreaCountArgs} args - Arguments to filter FocusAreas to count.
     * @example
     * // Count the number of FocusAreas
     * const count = await prisma.focusArea.count({
     *   where: {
     *     // ... the filter for the FocusAreas we want to count
     *   }
     * })
    **/
    count<T extends FocusAreaCountArgs>(
      args?: Subset<T, FocusAreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FocusAreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FocusArea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusAreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FocusAreaAggregateArgs>(args: Subset<T, FocusAreaAggregateArgs>): Prisma.PrismaPromise<GetFocusAreaAggregateType<T>>

    /**
     * Group by FocusArea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusAreaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FocusAreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FocusAreaGroupByArgs['orderBy'] }
        : { orderBy?: FocusAreaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FocusAreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFocusAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FocusArea model
   */
  readonly fields: FocusAreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FocusArea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FocusAreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends ResumeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResumeDefaultArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FocusArea model
   */
  interface FocusAreaFieldRefs {
    readonly id: FieldRef<"FocusArea", 'String'>
    readonly title: FieldRef<"FocusArea", 'String'>
    readonly description: FieldRef<"FocusArea", 'String'>
    readonly icon: FieldRef<"FocusArea", 'String'>
    readonly resumeId: FieldRef<"FocusArea", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FocusArea findUnique
   */
  export type FocusAreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusArea
     */
    select?: FocusAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusArea
     */
    omit?: FocusAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusAreaInclude<ExtArgs> | null
    /**
     * Filter, which FocusArea to fetch.
     */
    where: FocusAreaWhereUniqueInput
  }

  /**
   * FocusArea findUniqueOrThrow
   */
  export type FocusAreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusArea
     */
    select?: FocusAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusArea
     */
    omit?: FocusAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusAreaInclude<ExtArgs> | null
    /**
     * Filter, which FocusArea to fetch.
     */
    where: FocusAreaWhereUniqueInput
  }

  /**
   * FocusArea findFirst
   */
  export type FocusAreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusArea
     */
    select?: FocusAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusArea
     */
    omit?: FocusAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusAreaInclude<ExtArgs> | null
    /**
     * Filter, which FocusArea to fetch.
     */
    where?: FocusAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FocusAreas to fetch.
     */
    orderBy?: FocusAreaOrderByWithRelationInput | FocusAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FocusAreas.
     */
    cursor?: FocusAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FocusAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FocusAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FocusAreas.
     */
    distinct?: FocusAreaScalarFieldEnum | FocusAreaScalarFieldEnum[]
  }

  /**
   * FocusArea findFirstOrThrow
   */
  export type FocusAreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusArea
     */
    select?: FocusAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusArea
     */
    omit?: FocusAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusAreaInclude<ExtArgs> | null
    /**
     * Filter, which FocusArea to fetch.
     */
    where?: FocusAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FocusAreas to fetch.
     */
    orderBy?: FocusAreaOrderByWithRelationInput | FocusAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FocusAreas.
     */
    cursor?: FocusAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FocusAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FocusAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FocusAreas.
     */
    distinct?: FocusAreaScalarFieldEnum | FocusAreaScalarFieldEnum[]
  }

  /**
   * FocusArea findMany
   */
  export type FocusAreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusArea
     */
    select?: FocusAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusArea
     */
    omit?: FocusAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusAreaInclude<ExtArgs> | null
    /**
     * Filter, which FocusAreas to fetch.
     */
    where?: FocusAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FocusAreas to fetch.
     */
    orderBy?: FocusAreaOrderByWithRelationInput | FocusAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FocusAreas.
     */
    cursor?: FocusAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FocusAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FocusAreas.
     */
    skip?: number
    distinct?: FocusAreaScalarFieldEnum | FocusAreaScalarFieldEnum[]
  }

  /**
   * FocusArea create
   */
  export type FocusAreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusArea
     */
    select?: FocusAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusArea
     */
    omit?: FocusAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusAreaInclude<ExtArgs> | null
    /**
     * The data needed to create a FocusArea.
     */
    data: XOR<FocusAreaCreateInput, FocusAreaUncheckedCreateInput>
  }

  /**
   * FocusArea createMany
   */
  export type FocusAreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FocusAreas.
     */
    data: FocusAreaCreateManyInput | FocusAreaCreateManyInput[]
  }

  /**
   * FocusArea update
   */
  export type FocusAreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusArea
     */
    select?: FocusAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusArea
     */
    omit?: FocusAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusAreaInclude<ExtArgs> | null
    /**
     * The data needed to update a FocusArea.
     */
    data: XOR<FocusAreaUpdateInput, FocusAreaUncheckedUpdateInput>
    /**
     * Choose, which FocusArea to update.
     */
    where: FocusAreaWhereUniqueInput
  }

  /**
   * FocusArea updateMany
   */
  export type FocusAreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FocusAreas.
     */
    data: XOR<FocusAreaUpdateManyMutationInput, FocusAreaUncheckedUpdateManyInput>
    /**
     * Filter which FocusAreas to update
     */
    where?: FocusAreaWhereInput
    /**
     * Limit how many FocusAreas to update.
     */
    limit?: number
  }

  /**
   * FocusArea upsert
   */
  export type FocusAreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusArea
     */
    select?: FocusAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusArea
     */
    omit?: FocusAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusAreaInclude<ExtArgs> | null
    /**
     * The filter to search for the FocusArea to update in case it exists.
     */
    where: FocusAreaWhereUniqueInput
    /**
     * In case the FocusArea found by the `where` argument doesn't exist, create a new FocusArea with this data.
     */
    create: XOR<FocusAreaCreateInput, FocusAreaUncheckedCreateInput>
    /**
     * In case the FocusArea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FocusAreaUpdateInput, FocusAreaUncheckedUpdateInput>
  }

  /**
   * FocusArea delete
   */
  export type FocusAreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusArea
     */
    select?: FocusAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusArea
     */
    omit?: FocusAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusAreaInclude<ExtArgs> | null
    /**
     * Filter which FocusArea to delete.
     */
    where: FocusAreaWhereUniqueInput
  }

  /**
   * FocusArea deleteMany
   */
  export type FocusAreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FocusAreas to delete
     */
    where?: FocusAreaWhereInput
    /**
     * Limit how many FocusAreas to delete.
     */
    limit?: number
  }

  /**
   * FocusArea findRaw
   */
  export type FocusAreaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * FocusArea aggregateRaw
   */
  export type FocusAreaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * FocusArea without action
   */
  export type FocusAreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusArea
     */
    select?: FocusAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusArea
     */
    omit?: FocusAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusAreaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ResumeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    title: 'title',
    email: 'email',
    phone: 'phone',
    location: 'location',
    about: 'about',
    profileImage: 'profileImage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResumeScalarFieldEnum = (typeof ResumeScalarFieldEnum)[keyof typeof ResumeScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    resumeId: 'resumeId'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const ExperienceScalarFieldEnum: {
    id: 'id',
    company: 'company',
    position: 'position',
    startDate: 'startDate',
    endDate: 'endDate',
    description: 'description',
    resumeId: 'resumeId'
  };

  export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum]


  export const EducationScalarFieldEnum: {
    id: 'id',
    institution: 'institution',
    degree: 'degree',
    field: 'field',
    startDate: 'startDate',
    endDate: 'endDate',
    gpa: 'gpa',
    resumeId: 'resumeId'
  };

  export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    technologies: 'technologies',
    image: 'image',
    link: 'link',
    resumeId: 'resumeId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const CertificationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    issuer: 'issuer',
    date: 'date',
    image: 'image',
    resumeId: 'resumeId'
  };

  export type CertificationScalarFieldEnum = (typeof CertificationScalarFieldEnum)[keyof typeof CertificationScalarFieldEnum]


  export const SocialLinkScalarFieldEnum: {
    id: 'id',
    platform: 'platform',
    url: 'url',
    icon: 'icon',
    resumeId: 'resumeId'
  };

  export type SocialLinkScalarFieldEnum = (typeof SocialLinkScalarFieldEnum)[keyof typeof SocialLinkScalarFieldEnum]


  export const SEOScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    keywords: 'keywords',
    ogTitle: 'ogTitle',
    ogDescription: 'ogDescription',
    ogImage: 'ogImage',
    twitterTitle: 'twitterTitle',
    twitterDescription: 'twitterDescription',
    twitterImage: 'twitterImage',
    canonicalUrl: 'canonicalUrl',
    resumeId: 'resumeId'
  };

  export type SEOScalarFieldEnum = (typeof SEOScalarFieldEnum)[keyof typeof SEOScalarFieldEnum]


  export const ThemeScalarFieldEnum: {
    id: 'id',
    primaryColor: 'primaryColor',
    secondaryColor: 'secondaryColor',
    accentColor: 'accentColor',
    backgroundColor: 'backgroundColor',
    textColor: 'textColor',
    headingColor: 'headingColor',
    linkColor: 'linkColor',
    buttonColor: 'buttonColor',
    buttonTextColor: 'buttonTextColor',
    cardColor: 'cardColor',
    borderColor: 'borderColor',
    darkPrimaryColor: 'darkPrimaryColor',
    darkSecondaryColor: 'darkSecondaryColor',
    darkAccentColor: 'darkAccentColor',
    darkBackgroundColor: 'darkBackgroundColor',
    darkTextColor: 'darkTextColor',
    darkHeadingColor: 'darkHeadingColor',
    darkLinkColor: 'darkLinkColor',
    darkButtonColor: 'darkButtonColor',
    darkButtonTextColor: 'darkButtonTextColor',
    darkCardColor: 'darkCardColor',
    darkBorderColor: 'darkBorderColor',
    headingFont: 'headingFont',
    bodyFont: 'bodyFont',
    borderRadius: 'borderRadius',
    buttonRadius: 'buttonRadius',
    cardRadius: 'cardRadius',
    name: 'name',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    resumeId: 'resumeId'
  };

  export type ThemeScalarFieldEnum = (typeof ThemeScalarFieldEnum)[keyof typeof ThemeScalarFieldEnum]


  export const FocusAreaScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    icon: 'icon',
    resumeId: 'resumeId'
  };

  export type FocusAreaScalarFieldEnum = (typeof FocusAreaScalarFieldEnum)[keyof typeof FocusAreaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ResumeWhereInput = {
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    id?: StringFilter<"Resume"> | string
    name?: StringFilter<"Resume"> | string
    title?: StringFilter<"Resume"> | string
    email?: StringFilter<"Resume"> | string
    phone?: StringFilter<"Resume"> | string
    location?: StringFilter<"Resume"> | string
    about?: StringFilter<"Resume"> | string
    profileImage?: StringNullableFilter<"Resume"> | string | null
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    updatedAt?: DateTimeFilter<"Resume"> | Date | string
    skills?: SkillListRelationFilter
    experiences?: ExperienceListRelationFilter
    education?: EducationListRelationFilter
    projects?: ProjectListRelationFilter
    certifications?: CertificationListRelationFilter
    socialLinks?: SocialLinkListRelationFilter
    focusAreas?: FocusAreaListRelationFilter
    seo?: XOR<SEONullableScalarRelationFilter, SEOWhereInput> | null
    themes?: ThemeListRelationFilter
  }

  export type ResumeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    about?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    skills?: SkillOrderByRelationAggregateInput
    experiences?: ExperienceOrderByRelationAggregateInput
    education?: EducationOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
    certifications?: CertificationOrderByRelationAggregateInput
    socialLinks?: SocialLinkOrderByRelationAggregateInput
    focusAreas?: FocusAreaOrderByRelationAggregateInput
    seo?: SEOOrderByWithRelationInput
    themes?: ThemeOrderByRelationAggregateInput
  }

  export type ResumeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    name?: StringFilter<"Resume"> | string
    title?: StringFilter<"Resume"> | string
    email?: StringFilter<"Resume"> | string
    phone?: StringFilter<"Resume"> | string
    location?: StringFilter<"Resume"> | string
    about?: StringFilter<"Resume"> | string
    profileImage?: StringNullableFilter<"Resume"> | string | null
    createdAt?: DateTimeFilter<"Resume"> | Date | string
    updatedAt?: DateTimeFilter<"Resume"> | Date | string
    skills?: SkillListRelationFilter
    experiences?: ExperienceListRelationFilter
    education?: EducationListRelationFilter
    projects?: ProjectListRelationFilter
    certifications?: CertificationListRelationFilter
    socialLinks?: SocialLinkListRelationFilter
    focusAreas?: FocusAreaListRelationFilter
    seo?: XOR<SEONullableScalarRelationFilter, SEOWhereInput> | null
    themes?: ThemeListRelationFilter
  }, "id">

  export type ResumeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    about?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ResumeCountOrderByAggregateInput
    _max?: ResumeMaxOrderByAggregateInput
    _min?: ResumeMinOrderByAggregateInput
  }

  export type ResumeScalarWhereWithAggregatesInput = {
    AND?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    OR?: ResumeScalarWhereWithAggregatesInput[]
    NOT?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resume"> | string
    name?: StringWithAggregatesFilter<"Resume"> | string
    title?: StringWithAggregatesFilter<"Resume"> | string
    email?: StringWithAggregatesFilter<"Resume"> | string
    phone?: StringWithAggregatesFilter<"Resume"> | string
    location?: StringWithAggregatesFilter<"Resume"> | string
    about?: StringWithAggregatesFilter<"Resume"> | string
    profileImage?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    category?: StringFilter<"Skill"> | string
    resumeId?: StringFilter<"Skill"> | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    resumeId?: SortOrder
    resume?: ResumeOrderByWithRelationInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    name?: StringFilter<"Skill"> | string
    category?: StringFilter<"Skill"> | string
    resumeId?: StringFilter<"Skill"> | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }, "id">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    resumeId?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skill"> | string
    name?: StringWithAggregatesFilter<"Skill"> | string
    category?: StringWithAggregatesFilter<"Skill"> | string
    resumeId?: StringWithAggregatesFilter<"Skill"> | string
  }

  export type ExperienceWhereInput = {
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    id?: StringFilter<"Experience"> | string
    company?: StringFilter<"Experience"> | string
    position?: StringFilter<"Experience"> | string
    startDate?: DateTimeFilter<"Experience"> | Date | string
    endDate?: DateTimeNullableFilter<"Experience"> | Date | string | null
    description?: StringFilter<"Experience"> | string
    resumeId?: StringFilter<"Experience"> | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }

  export type ExperienceOrderByWithRelationInput = {
    id?: SortOrder
    company?: SortOrder
    position?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    resumeId?: SortOrder
    resume?: ResumeOrderByWithRelationInput
  }

  export type ExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    company?: StringFilter<"Experience"> | string
    position?: StringFilter<"Experience"> | string
    startDate?: DateTimeFilter<"Experience"> | Date | string
    endDate?: DateTimeNullableFilter<"Experience"> | Date | string | null
    description?: StringFilter<"Experience"> | string
    resumeId?: StringFilter<"Experience"> | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }, "id">

  export type ExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    company?: SortOrder
    position?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    resumeId?: SortOrder
    _count?: ExperienceCountOrderByAggregateInput
    _max?: ExperienceMaxOrderByAggregateInput
    _min?: ExperienceMinOrderByAggregateInput
  }

  export type ExperienceScalarWhereWithAggregatesInput = {
    AND?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    OR?: ExperienceScalarWhereWithAggregatesInput[]
    NOT?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Experience"> | string
    company?: StringWithAggregatesFilter<"Experience"> | string
    position?: StringWithAggregatesFilter<"Experience"> | string
    startDate?: DateTimeWithAggregatesFilter<"Experience"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Experience"> | Date | string | null
    description?: StringWithAggregatesFilter<"Experience"> | string
    resumeId?: StringWithAggregatesFilter<"Experience"> | string
  }

  export type EducationWhereInput = {
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    id?: StringFilter<"Education"> | string
    institution?: StringFilter<"Education"> | string
    degree?: StringFilter<"Education"> | string
    field?: StringFilter<"Education"> | string
    startDate?: DateTimeFilter<"Education"> | Date | string
    endDate?: DateTimeNullableFilter<"Education"> | Date | string | null
    gpa?: StringNullableFilter<"Education"> | string | null
    resumeId?: StringFilter<"Education"> | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }

  export type EducationOrderByWithRelationInput = {
    id?: SortOrder
    institution?: SortOrder
    degree?: SortOrder
    field?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    gpa?: SortOrder
    resumeId?: SortOrder
    resume?: ResumeOrderByWithRelationInput
  }

  export type EducationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    institution?: StringFilter<"Education"> | string
    degree?: StringFilter<"Education"> | string
    field?: StringFilter<"Education"> | string
    startDate?: DateTimeFilter<"Education"> | Date | string
    endDate?: DateTimeNullableFilter<"Education"> | Date | string | null
    gpa?: StringNullableFilter<"Education"> | string | null
    resumeId?: StringFilter<"Education"> | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }, "id">

  export type EducationOrderByWithAggregationInput = {
    id?: SortOrder
    institution?: SortOrder
    degree?: SortOrder
    field?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    gpa?: SortOrder
    resumeId?: SortOrder
    _count?: EducationCountOrderByAggregateInput
    _max?: EducationMaxOrderByAggregateInput
    _min?: EducationMinOrderByAggregateInput
  }

  export type EducationScalarWhereWithAggregatesInput = {
    AND?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    OR?: EducationScalarWhereWithAggregatesInput[]
    NOT?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Education"> | string
    institution?: StringWithAggregatesFilter<"Education"> | string
    degree?: StringWithAggregatesFilter<"Education"> | string
    field?: StringWithAggregatesFilter<"Education"> | string
    startDate?: DateTimeWithAggregatesFilter<"Education"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Education"> | Date | string | null
    gpa?: StringNullableWithAggregatesFilter<"Education"> | string | null
    resumeId?: StringWithAggregatesFilter<"Education"> | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    technologies?: StringFilter<"Project"> | string
    image?: StringNullableFilter<"Project"> | string | null
    link?: StringNullableFilter<"Project"> | string | null
    resumeId?: StringFilter<"Project"> | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    technologies?: SortOrder
    image?: SortOrder
    link?: SortOrder
    resumeId?: SortOrder
    resume?: ResumeOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    technologies?: StringFilter<"Project"> | string
    image?: StringNullableFilter<"Project"> | string | null
    link?: StringNullableFilter<"Project"> | string | null
    resumeId?: StringFilter<"Project"> | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    technologies?: SortOrder
    image?: SortOrder
    link?: SortOrder
    resumeId?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    description?: StringWithAggregatesFilter<"Project"> | string
    technologies?: StringWithAggregatesFilter<"Project"> | string
    image?: StringNullableWithAggregatesFilter<"Project"> | string | null
    link?: StringNullableWithAggregatesFilter<"Project"> | string | null
    resumeId?: StringWithAggregatesFilter<"Project"> | string
  }

  export type CertificationWhereInput = {
    AND?: CertificationWhereInput | CertificationWhereInput[]
    OR?: CertificationWhereInput[]
    NOT?: CertificationWhereInput | CertificationWhereInput[]
    id?: StringFilter<"Certification"> | string
    name?: StringFilter<"Certification"> | string
    issuer?: StringFilter<"Certification"> | string
    date?: DateTimeFilter<"Certification"> | Date | string
    image?: StringNullableFilter<"Certification"> | string | null
    resumeId?: StringFilter<"Certification"> | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }

  export type CertificationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    issuer?: SortOrder
    date?: SortOrder
    image?: SortOrder
    resumeId?: SortOrder
    resume?: ResumeOrderByWithRelationInput
  }

  export type CertificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CertificationWhereInput | CertificationWhereInput[]
    OR?: CertificationWhereInput[]
    NOT?: CertificationWhereInput | CertificationWhereInput[]
    name?: StringFilter<"Certification"> | string
    issuer?: StringFilter<"Certification"> | string
    date?: DateTimeFilter<"Certification"> | Date | string
    image?: StringNullableFilter<"Certification"> | string | null
    resumeId?: StringFilter<"Certification"> | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }, "id">

  export type CertificationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    issuer?: SortOrder
    date?: SortOrder
    image?: SortOrder
    resumeId?: SortOrder
    _count?: CertificationCountOrderByAggregateInput
    _max?: CertificationMaxOrderByAggregateInput
    _min?: CertificationMinOrderByAggregateInput
  }

  export type CertificationScalarWhereWithAggregatesInput = {
    AND?: CertificationScalarWhereWithAggregatesInput | CertificationScalarWhereWithAggregatesInput[]
    OR?: CertificationScalarWhereWithAggregatesInput[]
    NOT?: CertificationScalarWhereWithAggregatesInput | CertificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Certification"> | string
    name?: StringWithAggregatesFilter<"Certification"> | string
    issuer?: StringWithAggregatesFilter<"Certification"> | string
    date?: DateTimeWithAggregatesFilter<"Certification"> | Date | string
    image?: StringNullableWithAggregatesFilter<"Certification"> | string | null
    resumeId?: StringWithAggregatesFilter<"Certification"> | string
  }

  export type SocialLinkWhereInput = {
    AND?: SocialLinkWhereInput | SocialLinkWhereInput[]
    OR?: SocialLinkWhereInput[]
    NOT?: SocialLinkWhereInput | SocialLinkWhereInput[]
    id?: StringFilter<"SocialLink"> | string
    platform?: StringFilter<"SocialLink"> | string
    url?: StringFilter<"SocialLink"> | string
    icon?: StringFilter<"SocialLink"> | string
    resumeId?: StringFilter<"SocialLink"> | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }

  export type SocialLinkOrderByWithRelationInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    resumeId?: SortOrder
    resume?: ResumeOrderByWithRelationInput
  }

  export type SocialLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SocialLinkWhereInput | SocialLinkWhereInput[]
    OR?: SocialLinkWhereInput[]
    NOT?: SocialLinkWhereInput | SocialLinkWhereInput[]
    platform?: StringFilter<"SocialLink"> | string
    url?: StringFilter<"SocialLink"> | string
    icon?: StringFilter<"SocialLink"> | string
    resumeId?: StringFilter<"SocialLink"> | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }, "id">

  export type SocialLinkOrderByWithAggregationInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    resumeId?: SortOrder
    _count?: SocialLinkCountOrderByAggregateInput
    _max?: SocialLinkMaxOrderByAggregateInput
    _min?: SocialLinkMinOrderByAggregateInput
  }

  export type SocialLinkScalarWhereWithAggregatesInput = {
    AND?: SocialLinkScalarWhereWithAggregatesInput | SocialLinkScalarWhereWithAggregatesInput[]
    OR?: SocialLinkScalarWhereWithAggregatesInput[]
    NOT?: SocialLinkScalarWhereWithAggregatesInput | SocialLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SocialLink"> | string
    platform?: StringWithAggregatesFilter<"SocialLink"> | string
    url?: StringWithAggregatesFilter<"SocialLink"> | string
    icon?: StringWithAggregatesFilter<"SocialLink"> | string
    resumeId?: StringWithAggregatesFilter<"SocialLink"> | string
  }

  export type SEOWhereInput = {
    AND?: SEOWhereInput | SEOWhereInput[]
    OR?: SEOWhereInput[]
    NOT?: SEOWhereInput | SEOWhereInput[]
    id?: StringFilter<"SEO"> | string
    title?: StringFilter<"SEO"> | string
    description?: StringFilter<"SEO"> | string
    keywords?: StringFilter<"SEO"> | string
    ogTitle?: StringNullableFilter<"SEO"> | string | null
    ogDescription?: StringNullableFilter<"SEO"> | string | null
    ogImage?: StringNullableFilter<"SEO"> | string | null
    twitterTitle?: StringNullableFilter<"SEO"> | string | null
    twitterDescription?: StringNullableFilter<"SEO"> | string | null
    twitterImage?: StringNullableFilter<"SEO"> | string | null
    canonicalUrl?: StringNullableFilter<"SEO"> | string | null
    resumeId?: StringFilter<"SEO"> | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }

  export type SEOOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    keywords?: SortOrder
    ogTitle?: SortOrder
    ogDescription?: SortOrder
    ogImage?: SortOrder
    twitterTitle?: SortOrder
    twitterDescription?: SortOrder
    twitterImage?: SortOrder
    canonicalUrl?: SortOrder
    resumeId?: SortOrder
    resume?: ResumeOrderByWithRelationInput
  }

  export type SEOWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    resumeId?: string
    AND?: SEOWhereInput | SEOWhereInput[]
    OR?: SEOWhereInput[]
    NOT?: SEOWhereInput | SEOWhereInput[]
    title?: StringFilter<"SEO"> | string
    description?: StringFilter<"SEO"> | string
    keywords?: StringFilter<"SEO"> | string
    ogTitle?: StringNullableFilter<"SEO"> | string | null
    ogDescription?: StringNullableFilter<"SEO"> | string | null
    ogImage?: StringNullableFilter<"SEO"> | string | null
    twitterTitle?: StringNullableFilter<"SEO"> | string | null
    twitterDescription?: StringNullableFilter<"SEO"> | string | null
    twitterImage?: StringNullableFilter<"SEO"> | string | null
    canonicalUrl?: StringNullableFilter<"SEO"> | string | null
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }, "id" | "resumeId">

  export type SEOOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    keywords?: SortOrder
    ogTitle?: SortOrder
    ogDescription?: SortOrder
    ogImage?: SortOrder
    twitterTitle?: SortOrder
    twitterDescription?: SortOrder
    twitterImage?: SortOrder
    canonicalUrl?: SortOrder
    resumeId?: SortOrder
    _count?: SEOCountOrderByAggregateInput
    _max?: SEOMaxOrderByAggregateInput
    _min?: SEOMinOrderByAggregateInput
  }

  export type SEOScalarWhereWithAggregatesInput = {
    AND?: SEOScalarWhereWithAggregatesInput | SEOScalarWhereWithAggregatesInput[]
    OR?: SEOScalarWhereWithAggregatesInput[]
    NOT?: SEOScalarWhereWithAggregatesInput | SEOScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SEO"> | string
    title?: StringWithAggregatesFilter<"SEO"> | string
    description?: StringWithAggregatesFilter<"SEO"> | string
    keywords?: StringWithAggregatesFilter<"SEO"> | string
    ogTitle?: StringNullableWithAggregatesFilter<"SEO"> | string | null
    ogDescription?: StringNullableWithAggregatesFilter<"SEO"> | string | null
    ogImage?: StringNullableWithAggregatesFilter<"SEO"> | string | null
    twitterTitle?: StringNullableWithAggregatesFilter<"SEO"> | string | null
    twitterDescription?: StringNullableWithAggregatesFilter<"SEO"> | string | null
    twitterImage?: StringNullableWithAggregatesFilter<"SEO"> | string | null
    canonicalUrl?: StringNullableWithAggregatesFilter<"SEO"> | string | null
    resumeId?: StringWithAggregatesFilter<"SEO"> | string
  }

  export type ThemeWhereInput = {
    AND?: ThemeWhereInput | ThemeWhereInput[]
    OR?: ThemeWhereInput[]
    NOT?: ThemeWhereInput | ThemeWhereInput[]
    id?: StringFilter<"Theme"> | string
    primaryColor?: StringFilter<"Theme"> | string
    secondaryColor?: StringFilter<"Theme"> | string
    accentColor?: StringFilter<"Theme"> | string
    backgroundColor?: StringFilter<"Theme"> | string
    textColor?: StringFilter<"Theme"> | string
    headingColor?: StringFilter<"Theme"> | string
    linkColor?: StringFilter<"Theme"> | string
    buttonColor?: StringFilter<"Theme"> | string
    buttonTextColor?: StringFilter<"Theme"> | string
    cardColor?: StringFilter<"Theme"> | string
    borderColor?: StringFilter<"Theme"> | string
    darkPrimaryColor?: StringFilter<"Theme"> | string
    darkSecondaryColor?: StringFilter<"Theme"> | string
    darkAccentColor?: StringFilter<"Theme"> | string
    darkBackgroundColor?: StringFilter<"Theme"> | string
    darkTextColor?: StringFilter<"Theme"> | string
    darkHeadingColor?: StringFilter<"Theme"> | string
    darkLinkColor?: StringFilter<"Theme"> | string
    darkButtonColor?: StringFilter<"Theme"> | string
    darkButtonTextColor?: StringFilter<"Theme"> | string
    darkCardColor?: StringFilter<"Theme"> | string
    darkBorderColor?: StringFilter<"Theme"> | string
    headingFont?: StringFilter<"Theme"> | string
    bodyFont?: StringFilter<"Theme"> | string
    borderRadius?: IntFilter<"Theme"> | number
    buttonRadius?: IntFilter<"Theme"> | number
    cardRadius?: IntFilter<"Theme"> | number
    name?: StringNullableFilter<"Theme"> | string | null
    isDefault?: BoolFilter<"Theme"> | boolean
    createdAt?: DateTimeFilter<"Theme"> | Date | string
    updatedAt?: DateTimeFilter<"Theme"> | Date | string
    resumeId?: StringNullableFilter<"Theme"> | string | null
    resume?: XOR<ResumeNullableScalarRelationFilter, ResumeWhereInput> | null
  }

  export type ThemeOrderByWithRelationInput = {
    id?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    accentColor?: SortOrder
    backgroundColor?: SortOrder
    textColor?: SortOrder
    headingColor?: SortOrder
    linkColor?: SortOrder
    buttonColor?: SortOrder
    buttonTextColor?: SortOrder
    cardColor?: SortOrder
    borderColor?: SortOrder
    darkPrimaryColor?: SortOrder
    darkSecondaryColor?: SortOrder
    darkAccentColor?: SortOrder
    darkBackgroundColor?: SortOrder
    darkTextColor?: SortOrder
    darkHeadingColor?: SortOrder
    darkLinkColor?: SortOrder
    darkButtonColor?: SortOrder
    darkButtonTextColor?: SortOrder
    darkCardColor?: SortOrder
    darkBorderColor?: SortOrder
    headingFont?: SortOrder
    bodyFont?: SortOrder
    borderRadius?: SortOrder
    buttonRadius?: SortOrder
    cardRadius?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resumeId?: SortOrder
    resume?: ResumeOrderByWithRelationInput
  }

  export type ThemeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ThemeWhereInput | ThemeWhereInput[]
    OR?: ThemeWhereInput[]
    NOT?: ThemeWhereInput | ThemeWhereInput[]
    primaryColor?: StringFilter<"Theme"> | string
    secondaryColor?: StringFilter<"Theme"> | string
    accentColor?: StringFilter<"Theme"> | string
    backgroundColor?: StringFilter<"Theme"> | string
    textColor?: StringFilter<"Theme"> | string
    headingColor?: StringFilter<"Theme"> | string
    linkColor?: StringFilter<"Theme"> | string
    buttonColor?: StringFilter<"Theme"> | string
    buttonTextColor?: StringFilter<"Theme"> | string
    cardColor?: StringFilter<"Theme"> | string
    borderColor?: StringFilter<"Theme"> | string
    darkPrimaryColor?: StringFilter<"Theme"> | string
    darkSecondaryColor?: StringFilter<"Theme"> | string
    darkAccentColor?: StringFilter<"Theme"> | string
    darkBackgroundColor?: StringFilter<"Theme"> | string
    darkTextColor?: StringFilter<"Theme"> | string
    darkHeadingColor?: StringFilter<"Theme"> | string
    darkLinkColor?: StringFilter<"Theme"> | string
    darkButtonColor?: StringFilter<"Theme"> | string
    darkButtonTextColor?: StringFilter<"Theme"> | string
    darkCardColor?: StringFilter<"Theme"> | string
    darkBorderColor?: StringFilter<"Theme"> | string
    headingFont?: StringFilter<"Theme"> | string
    bodyFont?: StringFilter<"Theme"> | string
    borderRadius?: IntFilter<"Theme"> | number
    buttonRadius?: IntFilter<"Theme"> | number
    cardRadius?: IntFilter<"Theme"> | number
    name?: StringNullableFilter<"Theme"> | string | null
    isDefault?: BoolFilter<"Theme"> | boolean
    createdAt?: DateTimeFilter<"Theme"> | Date | string
    updatedAt?: DateTimeFilter<"Theme"> | Date | string
    resumeId?: StringNullableFilter<"Theme"> | string | null
    resume?: XOR<ResumeNullableScalarRelationFilter, ResumeWhereInput> | null
  }, "id">

  export type ThemeOrderByWithAggregationInput = {
    id?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    accentColor?: SortOrder
    backgroundColor?: SortOrder
    textColor?: SortOrder
    headingColor?: SortOrder
    linkColor?: SortOrder
    buttonColor?: SortOrder
    buttonTextColor?: SortOrder
    cardColor?: SortOrder
    borderColor?: SortOrder
    darkPrimaryColor?: SortOrder
    darkSecondaryColor?: SortOrder
    darkAccentColor?: SortOrder
    darkBackgroundColor?: SortOrder
    darkTextColor?: SortOrder
    darkHeadingColor?: SortOrder
    darkLinkColor?: SortOrder
    darkButtonColor?: SortOrder
    darkButtonTextColor?: SortOrder
    darkCardColor?: SortOrder
    darkBorderColor?: SortOrder
    headingFont?: SortOrder
    bodyFont?: SortOrder
    borderRadius?: SortOrder
    buttonRadius?: SortOrder
    cardRadius?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resumeId?: SortOrder
    _count?: ThemeCountOrderByAggregateInput
    _avg?: ThemeAvgOrderByAggregateInput
    _max?: ThemeMaxOrderByAggregateInput
    _min?: ThemeMinOrderByAggregateInput
    _sum?: ThemeSumOrderByAggregateInput
  }

  export type ThemeScalarWhereWithAggregatesInput = {
    AND?: ThemeScalarWhereWithAggregatesInput | ThemeScalarWhereWithAggregatesInput[]
    OR?: ThemeScalarWhereWithAggregatesInput[]
    NOT?: ThemeScalarWhereWithAggregatesInput | ThemeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Theme"> | string
    primaryColor?: StringWithAggregatesFilter<"Theme"> | string
    secondaryColor?: StringWithAggregatesFilter<"Theme"> | string
    accentColor?: StringWithAggregatesFilter<"Theme"> | string
    backgroundColor?: StringWithAggregatesFilter<"Theme"> | string
    textColor?: StringWithAggregatesFilter<"Theme"> | string
    headingColor?: StringWithAggregatesFilter<"Theme"> | string
    linkColor?: StringWithAggregatesFilter<"Theme"> | string
    buttonColor?: StringWithAggregatesFilter<"Theme"> | string
    buttonTextColor?: StringWithAggregatesFilter<"Theme"> | string
    cardColor?: StringWithAggregatesFilter<"Theme"> | string
    borderColor?: StringWithAggregatesFilter<"Theme"> | string
    darkPrimaryColor?: StringWithAggregatesFilter<"Theme"> | string
    darkSecondaryColor?: StringWithAggregatesFilter<"Theme"> | string
    darkAccentColor?: StringWithAggregatesFilter<"Theme"> | string
    darkBackgroundColor?: StringWithAggregatesFilter<"Theme"> | string
    darkTextColor?: StringWithAggregatesFilter<"Theme"> | string
    darkHeadingColor?: StringWithAggregatesFilter<"Theme"> | string
    darkLinkColor?: StringWithAggregatesFilter<"Theme"> | string
    darkButtonColor?: StringWithAggregatesFilter<"Theme"> | string
    darkButtonTextColor?: StringWithAggregatesFilter<"Theme"> | string
    darkCardColor?: StringWithAggregatesFilter<"Theme"> | string
    darkBorderColor?: StringWithAggregatesFilter<"Theme"> | string
    headingFont?: StringWithAggregatesFilter<"Theme"> | string
    bodyFont?: StringWithAggregatesFilter<"Theme"> | string
    borderRadius?: IntWithAggregatesFilter<"Theme"> | number
    buttonRadius?: IntWithAggregatesFilter<"Theme"> | number
    cardRadius?: IntWithAggregatesFilter<"Theme"> | number
    name?: StringNullableWithAggregatesFilter<"Theme"> | string | null
    isDefault?: BoolWithAggregatesFilter<"Theme"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Theme"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Theme"> | Date | string
    resumeId?: StringNullableWithAggregatesFilter<"Theme"> | string | null
  }

  export type FocusAreaWhereInput = {
    AND?: FocusAreaWhereInput | FocusAreaWhereInput[]
    OR?: FocusAreaWhereInput[]
    NOT?: FocusAreaWhereInput | FocusAreaWhereInput[]
    id?: StringFilter<"FocusArea"> | string
    title?: StringFilter<"FocusArea"> | string
    description?: StringFilter<"FocusArea"> | string
    icon?: StringFilter<"FocusArea"> | string
    resumeId?: StringFilter<"FocusArea"> | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }

  export type FocusAreaOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    resumeId?: SortOrder
    resume?: ResumeOrderByWithRelationInput
  }

  export type FocusAreaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FocusAreaWhereInput | FocusAreaWhereInput[]
    OR?: FocusAreaWhereInput[]
    NOT?: FocusAreaWhereInput | FocusAreaWhereInput[]
    title?: StringFilter<"FocusArea"> | string
    description?: StringFilter<"FocusArea"> | string
    icon?: StringFilter<"FocusArea"> | string
    resumeId?: StringFilter<"FocusArea"> | string
    resume?: XOR<ResumeScalarRelationFilter, ResumeWhereInput>
  }, "id">

  export type FocusAreaOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    resumeId?: SortOrder
    _count?: FocusAreaCountOrderByAggregateInput
    _max?: FocusAreaMaxOrderByAggregateInput
    _min?: FocusAreaMinOrderByAggregateInput
  }

  export type FocusAreaScalarWhereWithAggregatesInput = {
    AND?: FocusAreaScalarWhereWithAggregatesInput | FocusAreaScalarWhereWithAggregatesInput[]
    OR?: FocusAreaScalarWhereWithAggregatesInput[]
    NOT?: FocusAreaScalarWhereWithAggregatesInput | FocusAreaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FocusArea"> | string
    title?: StringWithAggregatesFilter<"FocusArea"> | string
    description?: StringWithAggregatesFilter<"FocusArea"> | string
    icon?: StringWithAggregatesFilter<"FocusArea"> | string
    resumeId?: StringWithAggregatesFilter<"FocusArea"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeCreateInput = {
    id?: string
    name: string
    title: string
    email: string
    phone: string
    location: string
    about: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillCreateNestedManyWithoutResumeInput
    experiences?: ExperienceCreateNestedManyWithoutResumeInput
    education?: EducationCreateNestedManyWithoutResumeInput
    projects?: ProjectCreateNestedManyWithoutResumeInput
    certifications?: CertificationCreateNestedManyWithoutResumeInput
    socialLinks?: SocialLinkCreateNestedManyWithoutResumeInput
    focusAreas?: FocusAreaCreateNestedManyWithoutResumeInput
    seo?: SEOCreateNestedOneWithoutResumeInput
    themes?: ThemeCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateInput = {
    id?: string
    name: string
    title: string
    email: string
    phone: string
    location: string
    about: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutResumeInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutResumeInput
    education?: EducationUncheckedCreateNestedManyWithoutResumeInput
    projects?: ProjectUncheckedCreateNestedManyWithoutResumeInput
    certifications?: CertificationUncheckedCreateNestedManyWithoutResumeInput
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutResumeInput
    focusAreas?: FocusAreaUncheckedCreateNestedManyWithoutResumeInput
    seo?: SEOUncheckedCreateNestedOneWithoutResumeInput
    themes?: ThemeUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUpdateManyWithoutResumeNestedInput
    experiences?: ExperienceUpdateManyWithoutResumeNestedInput
    education?: EducationUpdateManyWithoutResumeNestedInput
    projects?: ProjectUpdateManyWithoutResumeNestedInput
    certifications?: CertificationUpdateManyWithoutResumeNestedInput
    socialLinks?: SocialLinkUpdateManyWithoutResumeNestedInput
    focusAreas?: FocusAreaUpdateManyWithoutResumeNestedInput
    seo?: SEOUpdateOneWithoutResumeNestedInput
    themes?: ThemeUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutResumeNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutResumeNestedInput
    education?: EducationUncheckedUpdateManyWithoutResumeNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutResumeNestedInput
    certifications?: CertificationUncheckedUpdateManyWithoutResumeNestedInput
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutResumeNestedInput
    focusAreas?: FocusAreaUncheckedUpdateManyWithoutResumeNestedInput
    seo?: SEOUncheckedUpdateOneWithoutResumeNestedInput
    themes?: ThemeUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateManyInput = {
    id?: string
    name: string
    title: string
    email: string
    phone: string
    location: string
    about: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateInput = {
    id?: string
    name: string
    category: string
    resume: ResumeCreateNestedOneWithoutSkillsInput
  }

  export type SkillUncheckedCreateInput = {
    id?: string
    name: string
    category: string
    resumeId: string
  }

  export type SkillUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    resume?: ResumeUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
  }

  export type SkillCreateManyInput = {
    id?: string
    name: string
    category: string
    resumeId: string
  }

  export type SkillUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceCreateInput = {
    id?: string
    company: string
    position: string
    startDate: Date | string
    endDate?: Date | string | null
    description: string
    resume: ResumeCreateNestedOneWithoutExperiencesInput
  }

  export type ExperienceUncheckedCreateInput = {
    id?: string
    company: string
    position: string
    startDate: Date | string
    endDate?: Date | string | null
    description: string
    resumeId: string
  }

  export type ExperienceUpdateInput = {
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    resume?: ResumeUpdateOneRequiredWithoutExperiencesNestedInput
  }

  export type ExperienceUncheckedUpdateInput = {
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceCreateManyInput = {
    id?: string
    company: string
    position: string
    startDate: Date | string
    endDate?: Date | string | null
    description: string
    resumeId: string
  }

  export type ExperienceUpdateManyMutationInput = {
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUncheckedUpdateManyInput = {
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
  }

  export type EducationCreateInput = {
    id?: string
    institution: string
    degree: string
    field: string
    startDate: Date | string
    endDate?: Date | string | null
    gpa?: string | null
    resume: ResumeCreateNestedOneWithoutEducationInput
  }

  export type EducationUncheckedCreateInput = {
    id?: string
    institution: string
    degree: string
    field: string
    startDate: Date | string
    endDate?: Date | string | null
    gpa?: string | null
    resumeId: string
  }

  export type EducationUpdateInput = {
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gpa?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: ResumeUpdateOneRequiredWithoutEducationNestedInput
  }

  export type EducationUncheckedUpdateInput = {
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gpa?: NullableStringFieldUpdateOperationsInput | string | null
    resumeId?: StringFieldUpdateOperationsInput | string
  }

  export type EducationCreateManyInput = {
    id?: string
    institution: string
    degree: string
    field: string
    startDate: Date | string
    endDate?: Date | string | null
    gpa?: string | null
    resumeId: string
  }

  export type EducationUpdateManyMutationInput = {
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gpa?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationUncheckedUpdateManyInput = {
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gpa?: NullableStringFieldUpdateOperationsInput | string | null
    resumeId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    id?: string
    title: string
    description: string
    technologies: string
    image?: string | null
    link?: string | null
    resume: ResumeCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    technologies: string
    image?: string | null
    link?: string | null
    resumeId: string
  }

  export type ProjectUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    technologies?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: ResumeUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    technologies?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    resumeId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateManyInput = {
    id?: string
    title: string
    description: string
    technologies: string
    image?: string | null
    link?: string | null
    resumeId: string
  }

  export type ProjectUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    technologies?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    technologies?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    resumeId?: StringFieldUpdateOperationsInput | string
  }

  export type CertificationCreateInput = {
    id?: string
    name: string
    issuer: string
    date: Date | string
    image?: string | null
    resume: ResumeCreateNestedOneWithoutCertificationsInput
  }

  export type CertificationUncheckedCreateInput = {
    id?: string
    name: string
    issuer: string
    date: Date | string
    image?: string | null
    resumeId: string
  }

  export type CertificationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: ResumeUpdateOneRequiredWithoutCertificationsNestedInput
  }

  export type CertificationUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    resumeId?: StringFieldUpdateOperationsInput | string
  }

  export type CertificationCreateManyInput = {
    id?: string
    name: string
    issuer: string
    date: Date | string
    image?: string | null
    resumeId: string
  }

  export type CertificationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CertificationUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    resumeId?: StringFieldUpdateOperationsInput | string
  }

  export type SocialLinkCreateInput = {
    id?: string
    platform: string
    url: string
    icon: string
    resume: ResumeCreateNestedOneWithoutSocialLinksInput
  }

  export type SocialLinkUncheckedCreateInput = {
    id?: string
    platform: string
    url: string
    icon: string
    resumeId: string
  }

  export type SocialLinkUpdateInput = {
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    resume?: ResumeUpdateOneRequiredWithoutSocialLinksNestedInput
  }

  export type SocialLinkUncheckedUpdateInput = {
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
  }

  export type SocialLinkCreateManyInput = {
    id?: string
    platform: string
    url: string
    icon: string
    resumeId: string
  }

  export type SocialLinkUpdateManyMutationInput = {
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type SocialLinkUncheckedUpdateManyInput = {
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
  }

  export type SEOCreateInput = {
    id?: string
    title: string
    description: string
    keywords: string
    ogTitle?: string | null
    ogDescription?: string | null
    ogImage?: string | null
    twitterTitle?: string | null
    twitterDescription?: string | null
    twitterImage?: string | null
    canonicalUrl?: string | null
    resume: ResumeCreateNestedOneWithoutSeoInput
  }

  export type SEOUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    keywords: string
    ogTitle?: string | null
    ogDescription?: string | null
    ogImage?: string | null
    twitterTitle?: string | null
    twitterDescription?: string | null
    twitterImage?: string | null
    canonicalUrl?: string | null
    resumeId: string
  }

  export type SEOUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    ogTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ogDescription?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    twitterTitle?: NullableStringFieldUpdateOperationsInput | string | null
    twitterDescription?: NullableStringFieldUpdateOperationsInput | string | null
    twitterImage?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: ResumeUpdateOneRequiredWithoutSeoNestedInput
  }

  export type SEOUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    ogTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ogDescription?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    twitterTitle?: NullableStringFieldUpdateOperationsInput | string | null
    twitterDescription?: NullableStringFieldUpdateOperationsInput | string | null
    twitterImage?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeId?: StringFieldUpdateOperationsInput | string
  }

  export type SEOCreateManyInput = {
    id?: string
    title: string
    description: string
    keywords: string
    ogTitle?: string | null
    ogDescription?: string | null
    ogImage?: string | null
    twitterTitle?: string | null
    twitterDescription?: string | null
    twitterImage?: string | null
    canonicalUrl?: string | null
    resumeId: string
  }

  export type SEOUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    ogTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ogDescription?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    twitterTitle?: NullableStringFieldUpdateOperationsInput | string | null
    twitterDescription?: NullableStringFieldUpdateOperationsInput | string | null
    twitterImage?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SEOUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    ogTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ogDescription?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    twitterTitle?: NullableStringFieldUpdateOperationsInput | string | null
    twitterDescription?: NullableStringFieldUpdateOperationsInput | string | null
    twitterImage?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeId?: StringFieldUpdateOperationsInput | string
  }

  export type ThemeCreateInput = {
    id?: string
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    backgroundColor?: string
    textColor?: string
    headingColor?: string
    linkColor?: string
    buttonColor?: string
    buttonTextColor?: string
    cardColor?: string
    borderColor?: string
    darkPrimaryColor?: string
    darkSecondaryColor?: string
    darkAccentColor?: string
    darkBackgroundColor?: string
    darkTextColor?: string
    darkHeadingColor?: string
    darkLinkColor?: string
    darkButtonColor?: string
    darkButtonTextColor?: string
    darkCardColor?: string
    darkBorderColor?: string
    headingFont?: string
    bodyFont?: string
    borderRadius?: number
    buttonRadius?: number
    cardRadius?: number
    name?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    resume?: ResumeCreateNestedOneWithoutThemesInput
  }

  export type ThemeUncheckedCreateInput = {
    id?: string
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    backgroundColor?: string
    textColor?: string
    headingColor?: string
    linkColor?: string
    buttonColor?: string
    buttonTextColor?: string
    cardColor?: string
    borderColor?: string
    darkPrimaryColor?: string
    darkSecondaryColor?: string
    darkAccentColor?: string
    darkBackgroundColor?: string
    darkTextColor?: string
    darkHeadingColor?: string
    darkLinkColor?: string
    darkButtonColor?: string
    darkButtonTextColor?: string
    darkCardColor?: string
    darkBorderColor?: string
    headingFont?: string
    bodyFont?: string
    borderRadius?: number
    buttonRadius?: number
    cardRadius?: number
    name?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    resumeId?: string | null
  }

  export type ThemeUpdateInput = {
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    headingColor?: StringFieldUpdateOperationsInput | string
    linkColor?: StringFieldUpdateOperationsInput | string
    buttonColor?: StringFieldUpdateOperationsInput | string
    buttonTextColor?: StringFieldUpdateOperationsInput | string
    cardColor?: StringFieldUpdateOperationsInput | string
    borderColor?: StringFieldUpdateOperationsInput | string
    darkPrimaryColor?: StringFieldUpdateOperationsInput | string
    darkSecondaryColor?: StringFieldUpdateOperationsInput | string
    darkAccentColor?: StringFieldUpdateOperationsInput | string
    darkBackgroundColor?: StringFieldUpdateOperationsInput | string
    darkTextColor?: StringFieldUpdateOperationsInput | string
    darkHeadingColor?: StringFieldUpdateOperationsInput | string
    darkLinkColor?: StringFieldUpdateOperationsInput | string
    darkButtonColor?: StringFieldUpdateOperationsInput | string
    darkButtonTextColor?: StringFieldUpdateOperationsInput | string
    darkCardColor?: StringFieldUpdateOperationsInput | string
    darkBorderColor?: StringFieldUpdateOperationsInput | string
    headingFont?: StringFieldUpdateOperationsInput | string
    bodyFont?: StringFieldUpdateOperationsInput | string
    borderRadius?: IntFieldUpdateOperationsInput | number
    buttonRadius?: IntFieldUpdateOperationsInput | number
    cardRadius?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneWithoutThemesNestedInput
  }

  export type ThemeUncheckedUpdateInput = {
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    headingColor?: StringFieldUpdateOperationsInput | string
    linkColor?: StringFieldUpdateOperationsInput | string
    buttonColor?: StringFieldUpdateOperationsInput | string
    buttonTextColor?: StringFieldUpdateOperationsInput | string
    cardColor?: StringFieldUpdateOperationsInput | string
    borderColor?: StringFieldUpdateOperationsInput | string
    darkPrimaryColor?: StringFieldUpdateOperationsInput | string
    darkSecondaryColor?: StringFieldUpdateOperationsInput | string
    darkAccentColor?: StringFieldUpdateOperationsInput | string
    darkBackgroundColor?: StringFieldUpdateOperationsInput | string
    darkTextColor?: StringFieldUpdateOperationsInput | string
    darkHeadingColor?: StringFieldUpdateOperationsInput | string
    darkLinkColor?: StringFieldUpdateOperationsInput | string
    darkButtonColor?: StringFieldUpdateOperationsInput | string
    darkButtonTextColor?: StringFieldUpdateOperationsInput | string
    darkCardColor?: StringFieldUpdateOperationsInput | string
    darkBorderColor?: StringFieldUpdateOperationsInput | string
    headingFont?: StringFieldUpdateOperationsInput | string
    bodyFont?: StringFieldUpdateOperationsInput | string
    borderRadius?: IntFieldUpdateOperationsInput | number
    buttonRadius?: IntFieldUpdateOperationsInput | number
    cardRadius?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ThemeCreateManyInput = {
    id?: string
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    backgroundColor?: string
    textColor?: string
    headingColor?: string
    linkColor?: string
    buttonColor?: string
    buttonTextColor?: string
    cardColor?: string
    borderColor?: string
    darkPrimaryColor?: string
    darkSecondaryColor?: string
    darkAccentColor?: string
    darkBackgroundColor?: string
    darkTextColor?: string
    darkHeadingColor?: string
    darkLinkColor?: string
    darkButtonColor?: string
    darkButtonTextColor?: string
    darkCardColor?: string
    darkBorderColor?: string
    headingFont?: string
    bodyFont?: string
    borderRadius?: number
    buttonRadius?: number
    cardRadius?: number
    name?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    resumeId?: string | null
  }

  export type ThemeUpdateManyMutationInput = {
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    headingColor?: StringFieldUpdateOperationsInput | string
    linkColor?: StringFieldUpdateOperationsInput | string
    buttonColor?: StringFieldUpdateOperationsInput | string
    buttonTextColor?: StringFieldUpdateOperationsInput | string
    cardColor?: StringFieldUpdateOperationsInput | string
    borderColor?: StringFieldUpdateOperationsInput | string
    darkPrimaryColor?: StringFieldUpdateOperationsInput | string
    darkSecondaryColor?: StringFieldUpdateOperationsInput | string
    darkAccentColor?: StringFieldUpdateOperationsInput | string
    darkBackgroundColor?: StringFieldUpdateOperationsInput | string
    darkTextColor?: StringFieldUpdateOperationsInput | string
    darkHeadingColor?: StringFieldUpdateOperationsInput | string
    darkLinkColor?: StringFieldUpdateOperationsInput | string
    darkButtonColor?: StringFieldUpdateOperationsInput | string
    darkButtonTextColor?: StringFieldUpdateOperationsInput | string
    darkCardColor?: StringFieldUpdateOperationsInput | string
    darkBorderColor?: StringFieldUpdateOperationsInput | string
    headingFont?: StringFieldUpdateOperationsInput | string
    bodyFont?: StringFieldUpdateOperationsInput | string
    borderRadius?: IntFieldUpdateOperationsInput | number
    buttonRadius?: IntFieldUpdateOperationsInput | number
    cardRadius?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThemeUncheckedUpdateManyInput = {
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    headingColor?: StringFieldUpdateOperationsInput | string
    linkColor?: StringFieldUpdateOperationsInput | string
    buttonColor?: StringFieldUpdateOperationsInput | string
    buttonTextColor?: StringFieldUpdateOperationsInput | string
    cardColor?: StringFieldUpdateOperationsInput | string
    borderColor?: StringFieldUpdateOperationsInput | string
    darkPrimaryColor?: StringFieldUpdateOperationsInput | string
    darkSecondaryColor?: StringFieldUpdateOperationsInput | string
    darkAccentColor?: StringFieldUpdateOperationsInput | string
    darkBackgroundColor?: StringFieldUpdateOperationsInput | string
    darkTextColor?: StringFieldUpdateOperationsInput | string
    darkHeadingColor?: StringFieldUpdateOperationsInput | string
    darkLinkColor?: StringFieldUpdateOperationsInput | string
    darkButtonColor?: StringFieldUpdateOperationsInput | string
    darkButtonTextColor?: StringFieldUpdateOperationsInput | string
    darkCardColor?: StringFieldUpdateOperationsInput | string
    darkBorderColor?: StringFieldUpdateOperationsInput | string
    headingFont?: StringFieldUpdateOperationsInput | string
    bodyFont?: StringFieldUpdateOperationsInput | string
    borderRadius?: IntFieldUpdateOperationsInput | number
    buttonRadius?: IntFieldUpdateOperationsInput | number
    cardRadius?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resumeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FocusAreaCreateInput = {
    id?: string
    title: string
    description: string
    icon: string
    resume: ResumeCreateNestedOneWithoutFocusAreasInput
  }

  export type FocusAreaUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    icon: string
    resumeId: string
  }

  export type FocusAreaUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    resume?: ResumeUpdateOneRequiredWithoutFocusAreasNestedInput
  }

  export type FocusAreaUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
  }

  export type FocusAreaCreateManyInput = {
    id?: string
    title: string
    description: string
    icon: string
    resumeId: string
  }

  export type FocusAreaUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type FocusAreaUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type SkillListRelationFilter = {
    every?: SkillWhereInput
    some?: SkillWhereInput
    none?: SkillWhereInput
  }

  export type ExperienceListRelationFilter = {
    every?: ExperienceWhereInput
    some?: ExperienceWhereInput
    none?: ExperienceWhereInput
  }

  export type EducationListRelationFilter = {
    every?: EducationWhereInput
    some?: EducationWhereInput
    none?: EducationWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type CertificationListRelationFilter = {
    every?: CertificationWhereInput
    some?: CertificationWhereInput
    none?: CertificationWhereInput
  }

  export type SocialLinkListRelationFilter = {
    every?: SocialLinkWhereInput
    some?: SocialLinkWhereInput
    none?: SocialLinkWhereInput
  }

  export type FocusAreaListRelationFilter = {
    every?: FocusAreaWhereInput
    some?: FocusAreaWhereInput
    none?: FocusAreaWhereInput
  }

  export type SEONullableScalarRelationFilter = {
    is?: SEOWhereInput | null
    isNot?: SEOWhereInput | null
  }

  export type ThemeListRelationFilter = {
    every?: ThemeWhereInput
    some?: ThemeWhereInput
    none?: ThemeWhereInput
  }

  export type SkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EducationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CertificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SocialLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FocusAreaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ThemeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResumeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    about?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    about?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    about?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type ResumeScalarRelationFilter = {
    is?: ResumeWhereInput
    isNot?: ResumeWhereInput
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    resumeId?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    resumeId?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    resumeId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type ExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    position?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    resumeId?: SortOrder
  }

  export type ExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    position?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    resumeId?: SortOrder
  }

  export type ExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    position?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    resumeId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EducationCountOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    degree?: SortOrder
    field?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    gpa?: SortOrder
    resumeId?: SortOrder
  }

  export type EducationMaxOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    degree?: SortOrder
    field?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    gpa?: SortOrder
    resumeId?: SortOrder
  }

  export type EducationMinOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    degree?: SortOrder
    field?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    gpa?: SortOrder
    resumeId?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    technologies?: SortOrder
    image?: SortOrder
    link?: SortOrder
    resumeId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    technologies?: SortOrder
    image?: SortOrder
    link?: SortOrder
    resumeId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    technologies?: SortOrder
    image?: SortOrder
    link?: SortOrder
    resumeId?: SortOrder
  }

  export type CertificationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    issuer?: SortOrder
    date?: SortOrder
    image?: SortOrder
    resumeId?: SortOrder
  }

  export type CertificationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    issuer?: SortOrder
    date?: SortOrder
    image?: SortOrder
    resumeId?: SortOrder
  }

  export type CertificationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    issuer?: SortOrder
    date?: SortOrder
    image?: SortOrder
    resumeId?: SortOrder
  }

  export type SocialLinkCountOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    resumeId?: SortOrder
  }

  export type SocialLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    resumeId?: SortOrder
  }

  export type SocialLinkMinOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    resumeId?: SortOrder
  }

  export type SEOCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    keywords?: SortOrder
    ogTitle?: SortOrder
    ogDescription?: SortOrder
    ogImage?: SortOrder
    twitterTitle?: SortOrder
    twitterDescription?: SortOrder
    twitterImage?: SortOrder
    canonicalUrl?: SortOrder
    resumeId?: SortOrder
  }

  export type SEOMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    keywords?: SortOrder
    ogTitle?: SortOrder
    ogDescription?: SortOrder
    ogImage?: SortOrder
    twitterTitle?: SortOrder
    twitterDescription?: SortOrder
    twitterImage?: SortOrder
    canonicalUrl?: SortOrder
    resumeId?: SortOrder
  }

  export type SEOMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    keywords?: SortOrder
    ogTitle?: SortOrder
    ogDescription?: SortOrder
    ogImage?: SortOrder
    twitterTitle?: SortOrder
    twitterDescription?: SortOrder
    twitterImage?: SortOrder
    canonicalUrl?: SortOrder
    resumeId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ResumeNullableScalarRelationFilter = {
    is?: ResumeWhereInput | null
    isNot?: ResumeWhereInput | null
  }

  export type ThemeCountOrderByAggregateInput = {
    id?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    accentColor?: SortOrder
    backgroundColor?: SortOrder
    textColor?: SortOrder
    headingColor?: SortOrder
    linkColor?: SortOrder
    buttonColor?: SortOrder
    buttonTextColor?: SortOrder
    cardColor?: SortOrder
    borderColor?: SortOrder
    darkPrimaryColor?: SortOrder
    darkSecondaryColor?: SortOrder
    darkAccentColor?: SortOrder
    darkBackgroundColor?: SortOrder
    darkTextColor?: SortOrder
    darkHeadingColor?: SortOrder
    darkLinkColor?: SortOrder
    darkButtonColor?: SortOrder
    darkButtonTextColor?: SortOrder
    darkCardColor?: SortOrder
    darkBorderColor?: SortOrder
    headingFont?: SortOrder
    bodyFont?: SortOrder
    borderRadius?: SortOrder
    buttonRadius?: SortOrder
    cardRadius?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resumeId?: SortOrder
  }

  export type ThemeAvgOrderByAggregateInput = {
    borderRadius?: SortOrder
    buttonRadius?: SortOrder
    cardRadius?: SortOrder
  }

  export type ThemeMaxOrderByAggregateInput = {
    id?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    accentColor?: SortOrder
    backgroundColor?: SortOrder
    textColor?: SortOrder
    headingColor?: SortOrder
    linkColor?: SortOrder
    buttonColor?: SortOrder
    buttonTextColor?: SortOrder
    cardColor?: SortOrder
    borderColor?: SortOrder
    darkPrimaryColor?: SortOrder
    darkSecondaryColor?: SortOrder
    darkAccentColor?: SortOrder
    darkBackgroundColor?: SortOrder
    darkTextColor?: SortOrder
    darkHeadingColor?: SortOrder
    darkLinkColor?: SortOrder
    darkButtonColor?: SortOrder
    darkButtonTextColor?: SortOrder
    darkCardColor?: SortOrder
    darkBorderColor?: SortOrder
    headingFont?: SortOrder
    bodyFont?: SortOrder
    borderRadius?: SortOrder
    buttonRadius?: SortOrder
    cardRadius?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resumeId?: SortOrder
  }

  export type ThemeMinOrderByAggregateInput = {
    id?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    accentColor?: SortOrder
    backgroundColor?: SortOrder
    textColor?: SortOrder
    headingColor?: SortOrder
    linkColor?: SortOrder
    buttonColor?: SortOrder
    buttonTextColor?: SortOrder
    cardColor?: SortOrder
    borderColor?: SortOrder
    darkPrimaryColor?: SortOrder
    darkSecondaryColor?: SortOrder
    darkAccentColor?: SortOrder
    darkBackgroundColor?: SortOrder
    darkTextColor?: SortOrder
    darkHeadingColor?: SortOrder
    darkLinkColor?: SortOrder
    darkButtonColor?: SortOrder
    darkButtonTextColor?: SortOrder
    darkCardColor?: SortOrder
    darkBorderColor?: SortOrder
    headingFont?: SortOrder
    bodyFont?: SortOrder
    borderRadius?: SortOrder
    buttonRadius?: SortOrder
    cardRadius?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resumeId?: SortOrder
  }

  export type ThemeSumOrderByAggregateInput = {
    borderRadius?: SortOrder
    buttonRadius?: SortOrder
    cardRadius?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FocusAreaCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    resumeId?: SortOrder
  }

  export type FocusAreaMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    resumeId?: SortOrder
  }

  export type FocusAreaMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    resumeId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SkillCreateNestedManyWithoutResumeInput = {
    create?: XOR<SkillCreateWithoutResumeInput, SkillUncheckedCreateWithoutResumeInput> | SkillCreateWithoutResumeInput[] | SkillUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutResumeInput | SkillCreateOrConnectWithoutResumeInput[]
    createMany?: SkillCreateManyResumeInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type ExperienceCreateNestedManyWithoutResumeInput = {
    create?: XOR<ExperienceCreateWithoutResumeInput, ExperienceUncheckedCreateWithoutResumeInput> | ExperienceCreateWithoutResumeInput[] | ExperienceUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutResumeInput | ExperienceCreateOrConnectWithoutResumeInput[]
    createMany?: ExperienceCreateManyResumeInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type EducationCreateNestedManyWithoutResumeInput = {
    create?: XOR<EducationCreateWithoutResumeInput, EducationUncheckedCreateWithoutResumeInput> | EducationCreateWithoutResumeInput[] | EducationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutResumeInput | EducationCreateOrConnectWithoutResumeInput[]
    createMany?: EducationCreateManyResumeInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutResumeInput = {
    create?: XOR<ProjectCreateWithoutResumeInput, ProjectUncheckedCreateWithoutResumeInput> | ProjectCreateWithoutResumeInput[] | ProjectUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutResumeInput | ProjectCreateOrConnectWithoutResumeInput[]
    createMany?: ProjectCreateManyResumeInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type CertificationCreateNestedManyWithoutResumeInput = {
    create?: XOR<CertificationCreateWithoutResumeInput, CertificationUncheckedCreateWithoutResumeInput> | CertificationCreateWithoutResumeInput[] | CertificationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: CertificationCreateOrConnectWithoutResumeInput | CertificationCreateOrConnectWithoutResumeInput[]
    createMany?: CertificationCreateManyResumeInputEnvelope
    connect?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
  }

  export type SocialLinkCreateNestedManyWithoutResumeInput = {
    create?: XOR<SocialLinkCreateWithoutResumeInput, SocialLinkUncheckedCreateWithoutResumeInput> | SocialLinkCreateWithoutResumeInput[] | SocialLinkUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: SocialLinkCreateOrConnectWithoutResumeInput | SocialLinkCreateOrConnectWithoutResumeInput[]
    createMany?: SocialLinkCreateManyResumeInputEnvelope
    connect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
  }

  export type FocusAreaCreateNestedManyWithoutResumeInput = {
    create?: XOR<FocusAreaCreateWithoutResumeInput, FocusAreaUncheckedCreateWithoutResumeInput> | FocusAreaCreateWithoutResumeInput[] | FocusAreaUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: FocusAreaCreateOrConnectWithoutResumeInput | FocusAreaCreateOrConnectWithoutResumeInput[]
    createMany?: FocusAreaCreateManyResumeInputEnvelope
    connect?: FocusAreaWhereUniqueInput | FocusAreaWhereUniqueInput[]
  }

  export type SEOCreateNestedOneWithoutResumeInput = {
    create?: XOR<SEOCreateWithoutResumeInput, SEOUncheckedCreateWithoutResumeInput>
    connectOrCreate?: SEOCreateOrConnectWithoutResumeInput
    connect?: SEOWhereUniqueInput
  }

  export type ThemeCreateNestedManyWithoutResumeInput = {
    create?: XOR<ThemeCreateWithoutResumeInput, ThemeUncheckedCreateWithoutResumeInput> | ThemeCreateWithoutResumeInput[] | ThemeUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ThemeCreateOrConnectWithoutResumeInput | ThemeCreateOrConnectWithoutResumeInput[]
    createMany?: ThemeCreateManyResumeInputEnvelope
    connect?: ThemeWhereUniqueInput | ThemeWhereUniqueInput[]
  }

  export type SkillUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<SkillCreateWithoutResumeInput, SkillUncheckedCreateWithoutResumeInput> | SkillCreateWithoutResumeInput[] | SkillUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutResumeInput | SkillCreateOrConnectWithoutResumeInput[]
    createMany?: SkillCreateManyResumeInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type ExperienceUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<ExperienceCreateWithoutResumeInput, ExperienceUncheckedCreateWithoutResumeInput> | ExperienceCreateWithoutResumeInput[] | ExperienceUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutResumeInput | ExperienceCreateOrConnectWithoutResumeInput[]
    createMany?: ExperienceCreateManyResumeInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type EducationUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<EducationCreateWithoutResumeInput, EducationUncheckedCreateWithoutResumeInput> | EducationCreateWithoutResumeInput[] | EducationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutResumeInput | EducationCreateOrConnectWithoutResumeInput[]
    createMany?: EducationCreateManyResumeInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<ProjectCreateWithoutResumeInput, ProjectUncheckedCreateWithoutResumeInput> | ProjectCreateWithoutResumeInput[] | ProjectUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutResumeInput | ProjectCreateOrConnectWithoutResumeInput[]
    createMany?: ProjectCreateManyResumeInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type CertificationUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<CertificationCreateWithoutResumeInput, CertificationUncheckedCreateWithoutResumeInput> | CertificationCreateWithoutResumeInput[] | CertificationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: CertificationCreateOrConnectWithoutResumeInput | CertificationCreateOrConnectWithoutResumeInput[]
    createMany?: CertificationCreateManyResumeInputEnvelope
    connect?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
  }

  export type SocialLinkUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<SocialLinkCreateWithoutResumeInput, SocialLinkUncheckedCreateWithoutResumeInput> | SocialLinkCreateWithoutResumeInput[] | SocialLinkUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: SocialLinkCreateOrConnectWithoutResumeInput | SocialLinkCreateOrConnectWithoutResumeInput[]
    createMany?: SocialLinkCreateManyResumeInputEnvelope
    connect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
  }

  export type FocusAreaUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<FocusAreaCreateWithoutResumeInput, FocusAreaUncheckedCreateWithoutResumeInput> | FocusAreaCreateWithoutResumeInput[] | FocusAreaUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: FocusAreaCreateOrConnectWithoutResumeInput | FocusAreaCreateOrConnectWithoutResumeInput[]
    createMany?: FocusAreaCreateManyResumeInputEnvelope
    connect?: FocusAreaWhereUniqueInput | FocusAreaWhereUniqueInput[]
  }

  export type SEOUncheckedCreateNestedOneWithoutResumeInput = {
    create?: XOR<SEOCreateWithoutResumeInput, SEOUncheckedCreateWithoutResumeInput>
    connectOrCreate?: SEOCreateOrConnectWithoutResumeInput
    connect?: SEOWhereUniqueInput
  }

  export type ThemeUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<ThemeCreateWithoutResumeInput, ThemeUncheckedCreateWithoutResumeInput> | ThemeCreateWithoutResumeInput[] | ThemeUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ThemeCreateOrConnectWithoutResumeInput | ThemeCreateOrConnectWithoutResumeInput[]
    createMany?: ThemeCreateManyResumeInputEnvelope
    connect?: ThemeWhereUniqueInput | ThemeWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type SkillUpdateManyWithoutResumeNestedInput = {
    create?: XOR<SkillCreateWithoutResumeInput, SkillUncheckedCreateWithoutResumeInput> | SkillCreateWithoutResumeInput[] | SkillUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutResumeInput | SkillCreateOrConnectWithoutResumeInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutResumeInput | SkillUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: SkillCreateManyResumeInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutResumeInput | SkillUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutResumeInput | SkillUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type ExperienceUpdateManyWithoutResumeNestedInput = {
    create?: XOR<ExperienceCreateWithoutResumeInput, ExperienceUncheckedCreateWithoutResumeInput> | ExperienceCreateWithoutResumeInput[] | ExperienceUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutResumeInput | ExperienceCreateOrConnectWithoutResumeInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutResumeInput | ExperienceUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: ExperienceCreateManyResumeInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutResumeInput | ExperienceUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutResumeInput | ExperienceUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type EducationUpdateManyWithoutResumeNestedInput = {
    create?: XOR<EducationCreateWithoutResumeInput, EducationUncheckedCreateWithoutResumeInput> | EducationCreateWithoutResumeInput[] | EducationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutResumeInput | EducationCreateOrConnectWithoutResumeInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutResumeInput | EducationUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: EducationCreateManyResumeInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutResumeInput | EducationUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutResumeInput | EducationUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutResumeNestedInput = {
    create?: XOR<ProjectCreateWithoutResumeInput, ProjectUncheckedCreateWithoutResumeInput> | ProjectCreateWithoutResumeInput[] | ProjectUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutResumeInput | ProjectCreateOrConnectWithoutResumeInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutResumeInput | ProjectUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: ProjectCreateManyResumeInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutResumeInput | ProjectUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutResumeInput | ProjectUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type CertificationUpdateManyWithoutResumeNestedInput = {
    create?: XOR<CertificationCreateWithoutResumeInput, CertificationUncheckedCreateWithoutResumeInput> | CertificationCreateWithoutResumeInput[] | CertificationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: CertificationCreateOrConnectWithoutResumeInput | CertificationCreateOrConnectWithoutResumeInput[]
    upsert?: CertificationUpsertWithWhereUniqueWithoutResumeInput | CertificationUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: CertificationCreateManyResumeInputEnvelope
    set?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
    disconnect?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
    delete?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
    connect?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
    update?: CertificationUpdateWithWhereUniqueWithoutResumeInput | CertificationUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: CertificationUpdateManyWithWhereWithoutResumeInput | CertificationUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: CertificationScalarWhereInput | CertificationScalarWhereInput[]
  }

  export type SocialLinkUpdateManyWithoutResumeNestedInput = {
    create?: XOR<SocialLinkCreateWithoutResumeInput, SocialLinkUncheckedCreateWithoutResumeInput> | SocialLinkCreateWithoutResumeInput[] | SocialLinkUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: SocialLinkCreateOrConnectWithoutResumeInput | SocialLinkCreateOrConnectWithoutResumeInput[]
    upsert?: SocialLinkUpsertWithWhereUniqueWithoutResumeInput | SocialLinkUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: SocialLinkCreateManyResumeInputEnvelope
    set?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    disconnect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    delete?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    connect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    update?: SocialLinkUpdateWithWhereUniqueWithoutResumeInput | SocialLinkUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: SocialLinkUpdateManyWithWhereWithoutResumeInput | SocialLinkUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: SocialLinkScalarWhereInput | SocialLinkScalarWhereInput[]
  }

  export type FocusAreaUpdateManyWithoutResumeNestedInput = {
    create?: XOR<FocusAreaCreateWithoutResumeInput, FocusAreaUncheckedCreateWithoutResumeInput> | FocusAreaCreateWithoutResumeInput[] | FocusAreaUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: FocusAreaCreateOrConnectWithoutResumeInput | FocusAreaCreateOrConnectWithoutResumeInput[]
    upsert?: FocusAreaUpsertWithWhereUniqueWithoutResumeInput | FocusAreaUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: FocusAreaCreateManyResumeInputEnvelope
    set?: FocusAreaWhereUniqueInput | FocusAreaWhereUniqueInput[]
    disconnect?: FocusAreaWhereUniqueInput | FocusAreaWhereUniqueInput[]
    delete?: FocusAreaWhereUniqueInput | FocusAreaWhereUniqueInput[]
    connect?: FocusAreaWhereUniqueInput | FocusAreaWhereUniqueInput[]
    update?: FocusAreaUpdateWithWhereUniqueWithoutResumeInput | FocusAreaUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: FocusAreaUpdateManyWithWhereWithoutResumeInput | FocusAreaUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: FocusAreaScalarWhereInput | FocusAreaScalarWhereInput[]
  }

  export type SEOUpdateOneWithoutResumeNestedInput = {
    create?: XOR<SEOCreateWithoutResumeInput, SEOUncheckedCreateWithoutResumeInput>
    connectOrCreate?: SEOCreateOrConnectWithoutResumeInput
    upsert?: SEOUpsertWithoutResumeInput
    disconnect?: SEOWhereInput | boolean
    delete?: SEOWhereInput | boolean
    connect?: SEOWhereUniqueInput
    update?: XOR<XOR<SEOUpdateToOneWithWhereWithoutResumeInput, SEOUpdateWithoutResumeInput>, SEOUncheckedUpdateWithoutResumeInput>
  }

  export type ThemeUpdateManyWithoutResumeNestedInput = {
    create?: XOR<ThemeCreateWithoutResumeInput, ThemeUncheckedCreateWithoutResumeInput> | ThemeCreateWithoutResumeInput[] | ThemeUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ThemeCreateOrConnectWithoutResumeInput | ThemeCreateOrConnectWithoutResumeInput[]
    upsert?: ThemeUpsertWithWhereUniqueWithoutResumeInput | ThemeUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: ThemeCreateManyResumeInputEnvelope
    set?: ThemeWhereUniqueInput | ThemeWhereUniqueInput[]
    disconnect?: ThemeWhereUniqueInput | ThemeWhereUniqueInput[]
    delete?: ThemeWhereUniqueInput | ThemeWhereUniqueInput[]
    connect?: ThemeWhereUniqueInput | ThemeWhereUniqueInput[]
    update?: ThemeUpdateWithWhereUniqueWithoutResumeInput | ThemeUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: ThemeUpdateManyWithWhereWithoutResumeInput | ThemeUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: ThemeScalarWhereInput | ThemeScalarWhereInput[]
  }

  export type SkillUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<SkillCreateWithoutResumeInput, SkillUncheckedCreateWithoutResumeInput> | SkillCreateWithoutResumeInput[] | SkillUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutResumeInput | SkillCreateOrConnectWithoutResumeInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutResumeInput | SkillUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: SkillCreateManyResumeInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutResumeInput | SkillUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutResumeInput | SkillUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type ExperienceUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<ExperienceCreateWithoutResumeInput, ExperienceUncheckedCreateWithoutResumeInput> | ExperienceCreateWithoutResumeInput[] | ExperienceUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutResumeInput | ExperienceCreateOrConnectWithoutResumeInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutResumeInput | ExperienceUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: ExperienceCreateManyResumeInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutResumeInput | ExperienceUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutResumeInput | ExperienceUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type EducationUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<EducationCreateWithoutResumeInput, EducationUncheckedCreateWithoutResumeInput> | EducationCreateWithoutResumeInput[] | EducationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutResumeInput | EducationCreateOrConnectWithoutResumeInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutResumeInput | EducationUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: EducationCreateManyResumeInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutResumeInput | EducationUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutResumeInput | EducationUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<ProjectCreateWithoutResumeInput, ProjectUncheckedCreateWithoutResumeInput> | ProjectCreateWithoutResumeInput[] | ProjectUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutResumeInput | ProjectCreateOrConnectWithoutResumeInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutResumeInput | ProjectUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: ProjectCreateManyResumeInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutResumeInput | ProjectUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutResumeInput | ProjectUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type CertificationUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<CertificationCreateWithoutResumeInput, CertificationUncheckedCreateWithoutResumeInput> | CertificationCreateWithoutResumeInput[] | CertificationUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: CertificationCreateOrConnectWithoutResumeInput | CertificationCreateOrConnectWithoutResumeInput[]
    upsert?: CertificationUpsertWithWhereUniqueWithoutResumeInput | CertificationUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: CertificationCreateManyResumeInputEnvelope
    set?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
    disconnect?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
    delete?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
    connect?: CertificationWhereUniqueInput | CertificationWhereUniqueInput[]
    update?: CertificationUpdateWithWhereUniqueWithoutResumeInput | CertificationUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: CertificationUpdateManyWithWhereWithoutResumeInput | CertificationUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: CertificationScalarWhereInput | CertificationScalarWhereInput[]
  }

  export type SocialLinkUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<SocialLinkCreateWithoutResumeInput, SocialLinkUncheckedCreateWithoutResumeInput> | SocialLinkCreateWithoutResumeInput[] | SocialLinkUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: SocialLinkCreateOrConnectWithoutResumeInput | SocialLinkCreateOrConnectWithoutResumeInput[]
    upsert?: SocialLinkUpsertWithWhereUniqueWithoutResumeInput | SocialLinkUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: SocialLinkCreateManyResumeInputEnvelope
    set?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    disconnect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    delete?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    connect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    update?: SocialLinkUpdateWithWhereUniqueWithoutResumeInput | SocialLinkUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: SocialLinkUpdateManyWithWhereWithoutResumeInput | SocialLinkUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: SocialLinkScalarWhereInput | SocialLinkScalarWhereInput[]
  }

  export type FocusAreaUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<FocusAreaCreateWithoutResumeInput, FocusAreaUncheckedCreateWithoutResumeInput> | FocusAreaCreateWithoutResumeInput[] | FocusAreaUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: FocusAreaCreateOrConnectWithoutResumeInput | FocusAreaCreateOrConnectWithoutResumeInput[]
    upsert?: FocusAreaUpsertWithWhereUniqueWithoutResumeInput | FocusAreaUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: FocusAreaCreateManyResumeInputEnvelope
    set?: FocusAreaWhereUniqueInput | FocusAreaWhereUniqueInput[]
    disconnect?: FocusAreaWhereUniqueInput | FocusAreaWhereUniqueInput[]
    delete?: FocusAreaWhereUniqueInput | FocusAreaWhereUniqueInput[]
    connect?: FocusAreaWhereUniqueInput | FocusAreaWhereUniqueInput[]
    update?: FocusAreaUpdateWithWhereUniqueWithoutResumeInput | FocusAreaUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: FocusAreaUpdateManyWithWhereWithoutResumeInput | FocusAreaUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: FocusAreaScalarWhereInput | FocusAreaScalarWhereInput[]
  }

  export type SEOUncheckedUpdateOneWithoutResumeNestedInput = {
    create?: XOR<SEOCreateWithoutResumeInput, SEOUncheckedCreateWithoutResumeInput>
    connectOrCreate?: SEOCreateOrConnectWithoutResumeInput
    upsert?: SEOUpsertWithoutResumeInput
    disconnect?: SEOWhereInput | boolean
    delete?: SEOWhereInput | boolean
    connect?: SEOWhereUniqueInput
    update?: XOR<XOR<SEOUpdateToOneWithWhereWithoutResumeInput, SEOUpdateWithoutResumeInput>, SEOUncheckedUpdateWithoutResumeInput>
  }

  export type ThemeUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<ThemeCreateWithoutResumeInput, ThemeUncheckedCreateWithoutResumeInput> | ThemeCreateWithoutResumeInput[] | ThemeUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ThemeCreateOrConnectWithoutResumeInput | ThemeCreateOrConnectWithoutResumeInput[]
    upsert?: ThemeUpsertWithWhereUniqueWithoutResumeInput | ThemeUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: ThemeCreateManyResumeInputEnvelope
    set?: ThemeWhereUniqueInput | ThemeWhereUniqueInput[]
    disconnect?: ThemeWhereUniqueInput | ThemeWhereUniqueInput[]
    delete?: ThemeWhereUniqueInput | ThemeWhereUniqueInput[]
    connect?: ThemeWhereUniqueInput | ThemeWhereUniqueInput[]
    update?: ThemeUpdateWithWhereUniqueWithoutResumeInput | ThemeUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: ThemeUpdateManyWithWhereWithoutResumeInput | ThemeUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: ThemeScalarWhereInput | ThemeScalarWhereInput[]
  }

  export type ResumeCreateNestedOneWithoutSkillsInput = {
    create?: XOR<ResumeCreateWithoutSkillsInput, ResumeUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutSkillsInput
    connect?: ResumeWhereUniqueInput
  }

  export type ResumeUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<ResumeCreateWithoutSkillsInput, ResumeUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutSkillsInput
    upsert?: ResumeUpsertWithoutSkillsInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutSkillsInput, ResumeUpdateWithoutSkillsInput>, ResumeUncheckedUpdateWithoutSkillsInput>
  }

  export type ResumeCreateNestedOneWithoutExperiencesInput = {
    create?: XOR<ResumeCreateWithoutExperiencesInput, ResumeUncheckedCreateWithoutExperiencesInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutExperiencesInput
    connect?: ResumeWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type ResumeUpdateOneRequiredWithoutExperiencesNestedInput = {
    create?: XOR<ResumeCreateWithoutExperiencesInput, ResumeUncheckedCreateWithoutExperiencesInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutExperiencesInput
    upsert?: ResumeUpsertWithoutExperiencesInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutExperiencesInput, ResumeUpdateWithoutExperiencesInput>, ResumeUncheckedUpdateWithoutExperiencesInput>
  }

  export type ResumeCreateNestedOneWithoutEducationInput = {
    create?: XOR<ResumeCreateWithoutEducationInput, ResumeUncheckedCreateWithoutEducationInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutEducationInput
    connect?: ResumeWhereUniqueInput
  }

  export type ResumeUpdateOneRequiredWithoutEducationNestedInput = {
    create?: XOR<ResumeCreateWithoutEducationInput, ResumeUncheckedCreateWithoutEducationInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutEducationInput
    upsert?: ResumeUpsertWithoutEducationInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutEducationInput, ResumeUpdateWithoutEducationInput>, ResumeUncheckedUpdateWithoutEducationInput>
  }

  export type ResumeCreateNestedOneWithoutProjectsInput = {
    create?: XOR<ResumeCreateWithoutProjectsInput, ResumeUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutProjectsInput
    connect?: ResumeWhereUniqueInput
  }

  export type ResumeUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<ResumeCreateWithoutProjectsInput, ResumeUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutProjectsInput
    upsert?: ResumeUpsertWithoutProjectsInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutProjectsInput, ResumeUpdateWithoutProjectsInput>, ResumeUncheckedUpdateWithoutProjectsInput>
  }

  export type ResumeCreateNestedOneWithoutCertificationsInput = {
    create?: XOR<ResumeCreateWithoutCertificationsInput, ResumeUncheckedCreateWithoutCertificationsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutCertificationsInput
    connect?: ResumeWhereUniqueInput
  }

  export type ResumeUpdateOneRequiredWithoutCertificationsNestedInput = {
    create?: XOR<ResumeCreateWithoutCertificationsInput, ResumeUncheckedCreateWithoutCertificationsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutCertificationsInput
    upsert?: ResumeUpsertWithoutCertificationsInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutCertificationsInput, ResumeUpdateWithoutCertificationsInput>, ResumeUncheckedUpdateWithoutCertificationsInput>
  }

  export type ResumeCreateNestedOneWithoutSocialLinksInput = {
    create?: XOR<ResumeCreateWithoutSocialLinksInput, ResumeUncheckedCreateWithoutSocialLinksInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutSocialLinksInput
    connect?: ResumeWhereUniqueInput
  }

  export type ResumeUpdateOneRequiredWithoutSocialLinksNestedInput = {
    create?: XOR<ResumeCreateWithoutSocialLinksInput, ResumeUncheckedCreateWithoutSocialLinksInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutSocialLinksInput
    upsert?: ResumeUpsertWithoutSocialLinksInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutSocialLinksInput, ResumeUpdateWithoutSocialLinksInput>, ResumeUncheckedUpdateWithoutSocialLinksInput>
  }

  export type ResumeCreateNestedOneWithoutSeoInput = {
    create?: XOR<ResumeCreateWithoutSeoInput, ResumeUncheckedCreateWithoutSeoInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutSeoInput
    connect?: ResumeWhereUniqueInput
  }

  export type ResumeUpdateOneRequiredWithoutSeoNestedInput = {
    create?: XOR<ResumeCreateWithoutSeoInput, ResumeUncheckedCreateWithoutSeoInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutSeoInput
    upsert?: ResumeUpsertWithoutSeoInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutSeoInput, ResumeUpdateWithoutSeoInput>, ResumeUncheckedUpdateWithoutSeoInput>
  }

  export type ResumeCreateNestedOneWithoutThemesInput = {
    create?: XOR<ResumeCreateWithoutThemesInput, ResumeUncheckedCreateWithoutThemesInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutThemesInput
    connect?: ResumeWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ResumeUpdateOneWithoutThemesNestedInput = {
    create?: XOR<ResumeCreateWithoutThemesInput, ResumeUncheckedCreateWithoutThemesInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutThemesInput
    upsert?: ResumeUpsertWithoutThemesInput
    disconnect?: boolean
    delete?: ResumeWhereInput | boolean
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutThemesInput, ResumeUpdateWithoutThemesInput>, ResumeUncheckedUpdateWithoutThemesInput>
  }

  export type ResumeCreateNestedOneWithoutFocusAreasInput = {
    create?: XOR<ResumeCreateWithoutFocusAreasInput, ResumeUncheckedCreateWithoutFocusAreasInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutFocusAreasInput
    connect?: ResumeWhereUniqueInput
  }

  export type ResumeUpdateOneRequiredWithoutFocusAreasNestedInput = {
    create?: XOR<ResumeCreateWithoutFocusAreasInput, ResumeUncheckedCreateWithoutFocusAreasInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutFocusAreasInput
    upsert?: ResumeUpsertWithoutFocusAreasInput
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutFocusAreasInput, ResumeUpdateWithoutFocusAreasInput>, ResumeUncheckedUpdateWithoutFocusAreasInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SkillCreateWithoutResumeInput = {
    id?: string
    name: string
    category: string
  }

  export type SkillUncheckedCreateWithoutResumeInput = {
    id?: string
    name: string
    category: string
  }

  export type SkillCreateOrConnectWithoutResumeInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutResumeInput, SkillUncheckedCreateWithoutResumeInput>
  }

  export type SkillCreateManyResumeInputEnvelope = {
    data: SkillCreateManyResumeInput | SkillCreateManyResumeInput[]
  }

  export type ExperienceCreateWithoutResumeInput = {
    id?: string
    company: string
    position: string
    startDate: Date | string
    endDate?: Date | string | null
    description: string
  }

  export type ExperienceUncheckedCreateWithoutResumeInput = {
    id?: string
    company: string
    position: string
    startDate: Date | string
    endDate?: Date | string | null
    description: string
  }

  export type ExperienceCreateOrConnectWithoutResumeInput = {
    where: ExperienceWhereUniqueInput
    create: XOR<ExperienceCreateWithoutResumeInput, ExperienceUncheckedCreateWithoutResumeInput>
  }

  export type ExperienceCreateManyResumeInputEnvelope = {
    data: ExperienceCreateManyResumeInput | ExperienceCreateManyResumeInput[]
  }

  export type EducationCreateWithoutResumeInput = {
    id?: string
    institution: string
    degree: string
    field: string
    startDate: Date | string
    endDate?: Date | string | null
    gpa?: string | null
  }

  export type EducationUncheckedCreateWithoutResumeInput = {
    id?: string
    institution: string
    degree: string
    field: string
    startDate: Date | string
    endDate?: Date | string | null
    gpa?: string | null
  }

  export type EducationCreateOrConnectWithoutResumeInput = {
    where: EducationWhereUniqueInput
    create: XOR<EducationCreateWithoutResumeInput, EducationUncheckedCreateWithoutResumeInput>
  }

  export type EducationCreateManyResumeInputEnvelope = {
    data: EducationCreateManyResumeInput | EducationCreateManyResumeInput[]
  }

  export type ProjectCreateWithoutResumeInput = {
    id?: string
    title: string
    description: string
    technologies: string
    image?: string | null
    link?: string | null
  }

  export type ProjectUncheckedCreateWithoutResumeInput = {
    id?: string
    title: string
    description: string
    technologies: string
    image?: string | null
    link?: string | null
  }

  export type ProjectCreateOrConnectWithoutResumeInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutResumeInput, ProjectUncheckedCreateWithoutResumeInput>
  }

  export type ProjectCreateManyResumeInputEnvelope = {
    data: ProjectCreateManyResumeInput | ProjectCreateManyResumeInput[]
  }

  export type CertificationCreateWithoutResumeInput = {
    id?: string
    name: string
    issuer: string
    date: Date | string
    image?: string | null
  }

  export type CertificationUncheckedCreateWithoutResumeInput = {
    id?: string
    name: string
    issuer: string
    date: Date | string
    image?: string | null
  }

  export type CertificationCreateOrConnectWithoutResumeInput = {
    where: CertificationWhereUniqueInput
    create: XOR<CertificationCreateWithoutResumeInput, CertificationUncheckedCreateWithoutResumeInput>
  }

  export type CertificationCreateManyResumeInputEnvelope = {
    data: CertificationCreateManyResumeInput | CertificationCreateManyResumeInput[]
  }

  export type SocialLinkCreateWithoutResumeInput = {
    id?: string
    platform: string
    url: string
    icon: string
  }

  export type SocialLinkUncheckedCreateWithoutResumeInput = {
    id?: string
    platform: string
    url: string
    icon: string
  }

  export type SocialLinkCreateOrConnectWithoutResumeInput = {
    where: SocialLinkWhereUniqueInput
    create: XOR<SocialLinkCreateWithoutResumeInput, SocialLinkUncheckedCreateWithoutResumeInput>
  }

  export type SocialLinkCreateManyResumeInputEnvelope = {
    data: SocialLinkCreateManyResumeInput | SocialLinkCreateManyResumeInput[]
  }

  export type FocusAreaCreateWithoutResumeInput = {
    id?: string
    title: string
    description: string
    icon: string
  }

  export type FocusAreaUncheckedCreateWithoutResumeInput = {
    id?: string
    title: string
    description: string
    icon: string
  }

  export type FocusAreaCreateOrConnectWithoutResumeInput = {
    where: FocusAreaWhereUniqueInput
    create: XOR<FocusAreaCreateWithoutResumeInput, FocusAreaUncheckedCreateWithoutResumeInput>
  }

  export type FocusAreaCreateManyResumeInputEnvelope = {
    data: FocusAreaCreateManyResumeInput | FocusAreaCreateManyResumeInput[]
  }

  export type SEOCreateWithoutResumeInput = {
    id?: string
    title: string
    description: string
    keywords: string
    ogTitle?: string | null
    ogDescription?: string | null
    ogImage?: string | null
    twitterTitle?: string | null
    twitterDescription?: string | null
    twitterImage?: string | null
    canonicalUrl?: string | null
  }

  export type SEOUncheckedCreateWithoutResumeInput = {
    id?: string
    title: string
    description: string
    keywords: string
    ogTitle?: string | null
    ogDescription?: string | null
    ogImage?: string | null
    twitterTitle?: string | null
    twitterDescription?: string | null
    twitterImage?: string | null
    canonicalUrl?: string | null
  }

  export type SEOCreateOrConnectWithoutResumeInput = {
    where: SEOWhereUniqueInput
    create: XOR<SEOCreateWithoutResumeInput, SEOUncheckedCreateWithoutResumeInput>
  }

  export type ThemeCreateWithoutResumeInput = {
    id?: string
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    backgroundColor?: string
    textColor?: string
    headingColor?: string
    linkColor?: string
    buttonColor?: string
    buttonTextColor?: string
    cardColor?: string
    borderColor?: string
    darkPrimaryColor?: string
    darkSecondaryColor?: string
    darkAccentColor?: string
    darkBackgroundColor?: string
    darkTextColor?: string
    darkHeadingColor?: string
    darkLinkColor?: string
    darkButtonColor?: string
    darkButtonTextColor?: string
    darkCardColor?: string
    darkBorderColor?: string
    headingFont?: string
    bodyFont?: string
    borderRadius?: number
    buttonRadius?: number
    cardRadius?: number
    name?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ThemeUncheckedCreateWithoutResumeInput = {
    id?: string
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    backgroundColor?: string
    textColor?: string
    headingColor?: string
    linkColor?: string
    buttonColor?: string
    buttonTextColor?: string
    cardColor?: string
    borderColor?: string
    darkPrimaryColor?: string
    darkSecondaryColor?: string
    darkAccentColor?: string
    darkBackgroundColor?: string
    darkTextColor?: string
    darkHeadingColor?: string
    darkLinkColor?: string
    darkButtonColor?: string
    darkButtonTextColor?: string
    darkCardColor?: string
    darkBorderColor?: string
    headingFont?: string
    bodyFont?: string
    borderRadius?: number
    buttonRadius?: number
    cardRadius?: number
    name?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ThemeCreateOrConnectWithoutResumeInput = {
    where: ThemeWhereUniqueInput
    create: XOR<ThemeCreateWithoutResumeInput, ThemeUncheckedCreateWithoutResumeInput>
  }

  export type ThemeCreateManyResumeInputEnvelope = {
    data: ThemeCreateManyResumeInput | ThemeCreateManyResumeInput[]
  }

  export type SkillUpsertWithWhereUniqueWithoutResumeInput = {
    where: SkillWhereUniqueInput
    update: XOR<SkillUpdateWithoutResumeInput, SkillUncheckedUpdateWithoutResumeInput>
    create: XOR<SkillCreateWithoutResumeInput, SkillUncheckedCreateWithoutResumeInput>
  }

  export type SkillUpdateWithWhereUniqueWithoutResumeInput = {
    where: SkillWhereUniqueInput
    data: XOR<SkillUpdateWithoutResumeInput, SkillUncheckedUpdateWithoutResumeInput>
  }

  export type SkillUpdateManyWithWhereWithoutResumeInput = {
    where: SkillScalarWhereInput
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyWithoutResumeInput>
  }

  export type SkillScalarWhereInput = {
    AND?: SkillScalarWhereInput | SkillScalarWhereInput[]
    OR?: SkillScalarWhereInput[]
    NOT?: SkillScalarWhereInput | SkillScalarWhereInput[]
    id?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    category?: StringFilter<"Skill"> | string
    resumeId?: StringFilter<"Skill"> | string
  }

  export type ExperienceUpsertWithWhereUniqueWithoutResumeInput = {
    where: ExperienceWhereUniqueInput
    update: XOR<ExperienceUpdateWithoutResumeInput, ExperienceUncheckedUpdateWithoutResumeInput>
    create: XOR<ExperienceCreateWithoutResumeInput, ExperienceUncheckedCreateWithoutResumeInput>
  }

  export type ExperienceUpdateWithWhereUniqueWithoutResumeInput = {
    where: ExperienceWhereUniqueInput
    data: XOR<ExperienceUpdateWithoutResumeInput, ExperienceUncheckedUpdateWithoutResumeInput>
  }

  export type ExperienceUpdateManyWithWhereWithoutResumeInput = {
    where: ExperienceScalarWhereInput
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyWithoutResumeInput>
  }

  export type ExperienceScalarWhereInput = {
    AND?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    OR?: ExperienceScalarWhereInput[]
    NOT?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    id?: StringFilter<"Experience"> | string
    company?: StringFilter<"Experience"> | string
    position?: StringFilter<"Experience"> | string
    startDate?: DateTimeFilter<"Experience"> | Date | string
    endDate?: DateTimeNullableFilter<"Experience"> | Date | string | null
    description?: StringFilter<"Experience"> | string
    resumeId?: StringFilter<"Experience"> | string
  }

  export type EducationUpsertWithWhereUniqueWithoutResumeInput = {
    where: EducationWhereUniqueInput
    update: XOR<EducationUpdateWithoutResumeInput, EducationUncheckedUpdateWithoutResumeInput>
    create: XOR<EducationCreateWithoutResumeInput, EducationUncheckedCreateWithoutResumeInput>
  }

  export type EducationUpdateWithWhereUniqueWithoutResumeInput = {
    where: EducationWhereUniqueInput
    data: XOR<EducationUpdateWithoutResumeInput, EducationUncheckedUpdateWithoutResumeInput>
  }

  export type EducationUpdateManyWithWhereWithoutResumeInput = {
    where: EducationScalarWhereInput
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyWithoutResumeInput>
  }

  export type EducationScalarWhereInput = {
    AND?: EducationScalarWhereInput | EducationScalarWhereInput[]
    OR?: EducationScalarWhereInput[]
    NOT?: EducationScalarWhereInput | EducationScalarWhereInput[]
    id?: StringFilter<"Education"> | string
    institution?: StringFilter<"Education"> | string
    degree?: StringFilter<"Education"> | string
    field?: StringFilter<"Education"> | string
    startDate?: DateTimeFilter<"Education"> | Date | string
    endDate?: DateTimeNullableFilter<"Education"> | Date | string | null
    gpa?: StringNullableFilter<"Education"> | string | null
    resumeId?: StringFilter<"Education"> | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutResumeInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutResumeInput, ProjectUncheckedUpdateWithoutResumeInput>
    create: XOR<ProjectCreateWithoutResumeInput, ProjectUncheckedCreateWithoutResumeInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutResumeInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutResumeInput, ProjectUncheckedUpdateWithoutResumeInput>
  }

  export type ProjectUpdateManyWithWhereWithoutResumeInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutResumeInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    technologies?: StringFilter<"Project"> | string
    image?: StringNullableFilter<"Project"> | string | null
    link?: StringNullableFilter<"Project"> | string | null
    resumeId?: StringFilter<"Project"> | string
  }

  export type CertificationUpsertWithWhereUniqueWithoutResumeInput = {
    where: CertificationWhereUniqueInput
    update: XOR<CertificationUpdateWithoutResumeInput, CertificationUncheckedUpdateWithoutResumeInput>
    create: XOR<CertificationCreateWithoutResumeInput, CertificationUncheckedCreateWithoutResumeInput>
  }

  export type CertificationUpdateWithWhereUniqueWithoutResumeInput = {
    where: CertificationWhereUniqueInput
    data: XOR<CertificationUpdateWithoutResumeInput, CertificationUncheckedUpdateWithoutResumeInput>
  }

  export type CertificationUpdateManyWithWhereWithoutResumeInput = {
    where: CertificationScalarWhereInput
    data: XOR<CertificationUpdateManyMutationInput, CertificationUncheckedUpdateManyWithoutResumeInput>
  }

  export type CertificationScalarWhereInput = {
    AND?: CertificationScalarWhereInput | CertificationScalarWhereInput[]
    OR?: CertificationScalarWhereInput[]
    NOT?: CertificationScalarWhereInput | CertificationScalarWhereInput[]
    id?: StringFilter<"Certification"> | string
    name?: StringFilter<"Certification"> | string
    issuer?: StringFilter<"Certification"> | string
    date?: DateTimeFilter<"Certification"> | Date | string
    image?: StringNullableFilter<"Certification"> | string | null
    resumeId?: StringFilter<"Certification"> | string
  }

  export type SocialLinkUpsertWithWhereUniqueWithoutResumeInput = {
    where: SocialLinkWhereUniqueInput
    update: XOR<SocialLinkUpdateWithoutResumeInput, SocialLinkUncheckedUpdateWithoutResumeInput>
    create: XOR<SocialLinkCreateWithoutResumeInput, SocialLinkUncheckedCreateWithoutResumeInput>
  }

  export type SocialLinkUpdateWithWhereUniqueWithoutResumeInput = {
    where: SocialLinkWhereUniqueInput
    data: XOR<SocialLinkUpdateWithoutResumeInput, SocialLinkUncheckedUpdateWithoutResumeInput>
  }

  export type SocialLinkUpdateManyWithWhereWithoutResumeInput = {
    where: SocialLinkScalarWhereInput
    data: XOR<SocialLinkUpdateManyMutationInput, SocialLinkUncheckedUpdateManyWithoutResumeInput>
  }

  export type SocialLinkScalarWhereInput = {
    AND?: SocialLinkScalarWhereInput | SocialLinkScalarWhereInput[]
    OR?: SocialLinkScalarWhereInput[]
    NOT?: SocialLinkScalarWhereInput | SocialLinkScalarWhereInput[]
    id?: StringFilter<"SocialLink"> | string
    platform?: StringFilter<"SocialLink"> | string
    url?: StringFilter<"SocialLink"> | string
    icon?: StringFilter<"SocialLink"> | string
    resumeId?: StringFilter<"SocialLink"> | string
  }

  export type FocusAreaUpsertWithWhereUniqueWithoutResumeInput = {
    where: FocusAreaWhereUniqueInput
    update: XOR<FocusAreaUpdateWithoutResumeInput, FocusAreaUncheckedUpdateWithoutResumeInput>
    create: XOR<FocusAreaCreateWithoutResumeInput, FocusAreaUncheckedCreateWithoutResumeInput>
  }

  export type FocusAreaUpdateWithWhereUniqueWithoutResumeInput = {
    where: FocusAreaWhereUniqueInput
    data: XOR<FocusAreaUpdateWithoutResumeInput, FocusAreaUncheckedUpdateWithoutResumeInput>
  }

  export type FocusAreaUpdateManyWithWhereWithoutResumeInput = {
    where: FocusAreaScalarWhereInput
    data: XOR<FocusAreaUpdateManyMutationInput, FocusAreaUncheckedUpdateManyWithoutResumeInput>
  }

  export type FocusAreaScalarWhereInput = {
    AND?: FocusAreaScalarWhereInput | FocusAreaScalarWhereInput[]
    OR?: FocusAreaScalarWhereInput[]
    NOT?: FocusAreaScalarWhereInput | FocusAreaScalarWhereInput[]
    id?: StringFilter<"FocusArea"> | string
    title?: StringFilter<"FocusArea"> | string
    description?: StringFilter<"FocusArea"> | string
    icon?: StringFilter<"FocusArea"> | string
    resumeId?: StringFilter<"FocusArea"> | string
  }

  export type SEOUpsertWithoutResumeInput = {
    update: XOR<SEOUpdateWithoutResumeInput, SEOUncheckedUpdateWithoutResumeInput>
    create: XOR<SEOCreateWithoutResumeInput, SEOUncheckedCreateWithoutResumeInput>
    where?: SEOWhereInput
  }

  export type SEOUpdateToOneWithWhereWithoutResumeInput = {
    where?: SEOWhereInput
    data: XOR<SEOUpdateWithoutResumeInput, SEOUncheckedUpdateWithoutResumeInput>
  }

  export type SEOUpdateWithoutResumeInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    ogTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ogDescription?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    twitterTitle?: NullableStringFieldUpdateOperationsInput | string | null
    twitterDescription?: NullableStringFieldUpdateOperationsInput | string | null
    twitterImage?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SEOUncheckedUpdateWithoutResumeInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    ogTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ogDescription?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    twitterTitle?: NullableStringFieldUpdateOperationsInput | string | null
    twitterDescription?: NullableStringFieldUpdateOperationsInput | string | null
    twitterImage?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ThemeUpsertWithWhereUniqueWithoutResumeInput = {
    where: ThemeWhereUniqueInput
    update: XOR<ThemeUpdateWithoutResumeInput, ThemeUncheckedUpdateWithoutResumeInput>
    create: XOR<ThemeCreateWithoutResumeInput, ThemeUncheckedCreateWithoutResumeInput>
  }

  export type ThemeUpdateWithWhereUniqueWithoutResumeInput = {
    where: ThemeWhereUniqueInput
    data: XOR<ThemeUpdateWithoutResumeInput, ThemeUncheckedUpdateWithoutResumeInput>
  }

  export type ThemeUpdateManyWithWhereWithoutResumeInput = {
    where: ThemeScalarWhereInput
    data: XOR<ThemeUpdateManyMutationInput, ThemeUncheckedUpdateManyWithoutResumeInput>
  }

  export type ThemeScalarWhereInput = {
    AND?: ThemeScalarWhereInput | ThemeScalarWhereInput[]
    OR?: ThemeScalarWhereInput[]
    NOT?: ThemeScalarWhereInput | ThemeScalarWhereInput[]
    id?: StringFilter<"Theme"> | string
    primaryColor?: StringFilter<"Theme"> | string
    secondaryColor?: StringFilter<"Theme"> | string
    accentColor?: StringFilter<"Theme"> | string
    backgroundColor?: StringFilter<"Theme"> | string
    textColor?: StringFilter<"Theme"> | string
    headingColor?: StringFilter<"Theme"> | string
    linkColor?: StringFilter<"Theme"> | string
    buttonColor?: StringFilter<"Theme"> | string
    buttonTextColor?: StringFilter<"Theme"> | string
    cardColor?: StringFilter<"Theme"> | string
    borderColor?: StringFilter<"Theme"> | string
    darkPrimaryColor?: StringFilter<"Theme"> | string
    darkSecondaryColor?: StringFilter<"Theme"> | string
    darkAccentColor?: StringFilter<"Theme"> | string
    darkBackgroundColor?: StringFilter<"Theme"> | string
    darkTextColor?: StringFilter<"Theme"> | string
    darkHeadingColor?: StringFilter<"Theme"> | string
    darkLinkColor?: StringFilter<"Theme"> | string
    darkButtonColor?: StringFilter<"Theme"> | string
    darkButtonTextColor?: StringFilter<"Theme"> | string
    darkCardColor?: StringFilter<"Theme"> | string
    darkBorderColor?: StringFilter<"Theme"> | string
    headingFont?: StringFilter<"Theme"> | string
    bodyFont?: StringFilter<"Theme"> | string
    borderRadius?: IntFilter<"Theme"> | number
    buttonRadius?: IntFilter<"Theme"> | number
    cardRadius?: IntFilter<"Theme"> | number
    name?: StringNullableFilter<"Theme"> | string | null
    isDefault?: BoolFilter<"Theme"> | boolean
    createdAt?: DateTimeFilter<"Theme"> | Date | string
    updatedAt?: DateTimeFilter<"Theme"> | Date | string
    resumeId?: StringNullableFilter<"Theme"> | string | null
  }

  export type ResumeCreateWithoutSkillsInput = {
    id?: string
    name: string
    title: string
    email: string
    phone: string
    location: string
    about: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    experiences?: ExperienceCreateNestedManyWithoutResumeInput
    education?: EducationCreateNestedManyWithoutResumeInput
    projects?: ProjectCreateNestedManyWithoutResumeInput
    certifications?: CertificationCreateNestedManyWithoutResumeInput
    socialLinks?: SocialLinkCreateNestedManyWithoutResumeInput
    focusAreas?: FocusAreaCreateNestedManyWithoutResumeInput
    seo?: SEOCreateNestedOneWithoutResumeInput
    themes?: ThemeCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutSkillsInput = {
    id?: string
    name: string
    title: string
    email: string
    phone: string
    location: string
    about: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    experiences?: ExperienceUncheckedCreateNestedManyWithoutResumeInput
    education?: EducationUncheckedCreateNestedManyWithoutResumeInput
    projects?: ProjectUncheckedCreateNestedManyWithoutResumeInput
    certifications?: CertificationUncheckedCreateNestedManyWithoutResumeInput
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutResumeInput
    focusAreas?: FocusAreaUncheckedCreateNestedManyWithoutResumeInput
    seo?: SEOUncheckedCreateNestedOneWithoutResumeInput
    themes?: ThemeUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutSkillsInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutSkillsInput, ResumeUncheckedCreateWithoutSkillsInput>
  }

  export type ResumeUpsertWithoutSkillsInput = {
    update: XOR<ResumeUpdateWithoutSkillsInput, ResumeUncheckedUpdateWithoutSkillsInput>
    create: XOR<ResumeCreateWithoutSkillsInput, ResumeUncheckedCreateWithoutSkillsInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutSkillsInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutSkillsInput, ResumeUncheckedUpdateWithoutSkillsInput>
  }

  export type ResumeUpdateWithoutSkillsInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experiences?: ExperienceUpdateManyWithoutResumeNestedInput
    education?: EducationUpdateManyWithoutResumeNestedInput
    projects?: ProjectUpdateManyWithoutResumeNestedInput
    certifications?: CertificationUpdateManyWithoutResumeNestedInput
    socialLinks?: SocialLinkUpdateManyWithoutResumeNestedInput
    focusAreas?: FocusAreaUpdateManyWithoutResumeNestedInput
    seo?: SEOUpdateOneWithoutResumeNestedInput
    themes?: ThemeUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutSkillsInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experiences?: ExperienceUncheckedUpdateManyWithoutResumeNestedInput
    education?: EducationUncheckedUpdateManyWithoutResumeNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutResumeNestedInput
    certifications?: CertificationUncheckedUpdateManyWithoutResumeNestedInput
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutResumeNestedInput
    focusAreas?: FocusAreaUncheckedUpdateManyWithoutResumeNestedInput
    seo?: SEOUncheckedUpdateOneWithoutResumeNestedInput
    themes?: ThemeUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateWithoutExperiencesInput = {
    id?: string
    name: string
    title: string
    email: string
    phone: string
    location: string
    about: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillCreateNestedManyWithoutResumeInput
    education?: EducationCreateNestedManyWithoutResumeInput
    projects?: ProjectCreateNestedManyWithoutResumeInput
    certifications?: CertificationCreateNestedManyWithoutResumeInput
    socialLinks?: SocialLinkCreateNestedManyWithoutResumeInput
    focusAreas?: FocusAreaCreateNestedManyWithoutResumeInput
    seo?: SEOCreateNestedOneWithoutResumeInput
    themes?: ThemeCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutExperiencesInput = {
    id?: string
    name: string
    title: string
    email: string
    phone: string
    location: string
    about: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutResumeInput
    education?: EducationUncheckedCreateNestedManyWithoutResumeInput
    projects?: ProjectUncheckedCreateNestedManyWithoutResumeInput
    certifications?: CertificationUncheckedCreateNestedManyWithoutResumeInput
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutResumeInput
    focusAreas?: FocusAreaUncheckedCreateNestedManyWithoutResumeInput
    seo?: SEOUncheckedCreateNestedOneWithoutResumeInput
    themes?: ThemeUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutExperiencesInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutExperiencesInput, ResumeUncheckedCreateWithoutExperiencesInput>
  }

  export type ResumeUpsertWithoutExperiencesInput = {
    update: XOR<ResumeUpdateWithoutExperiencesInput, ResumeUncheckedUpdateWithoutExperiencesInput>
    create: XOR<ResumeCreateWithoutExperiencesInput, ResumeUncheckedCreateWithoutExperiencesInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutExperiencesInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutExperiencesInput, ResumeUncheckedUpdateWithoutExperiencesInput>
  }

  export type ResumeUpdateWithoutExperiencesInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUpdateManyWithoutResumeNestedInput
    education?: EducationUpdateManyWithoutResumeNestedInput
    projects?: ProjectUpdateManyWithoutResumeNestedInput
    certifications?: CertificationUpdateManyWithoutResumeNestedInput
    socialLinks?: SocialLinkUpdateManyWithoutResumeNestedInput
    focusAreas?: FocusAreaUpdateManyWithoutResumeNestedInput
    seo?: SEOUpdateOneWithoutResumeNestedInput
    themes?: ThemeUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutExperiencesInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutResumeNestedInput
    education?: EducationUncheckedUpdateManyWithoutResumeNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutResumeNestedInput
    certifications?: CertificationUncheckedUpdateManyWithoutResumeNestedInput
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutResumeNestedInput
    focusAreas?: FocusAreaUncheckedUpdateManyWithoutResumeNestedInput
    seo?: SEOUncheckedUpdateOneWithoutResumeNestedInput
    themes?: ThemeUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateWithoutEducationInput = {
    id?: string
    name: string
    title: string
    email: string
    phone: string
    location: string
    about: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillCreateNestedManyWithoutResumeInput
    experiences?: ExperienceCreateNestedManyWithoutResumeInput
    projects?: ProjectCreateNestedManyWithoutResumeInput
    certifications?: CertificationCreateNestedManyWithoutResumeInput
    socialLinks?: SocialLinkCreateNestedManyWithoutResumeInput
    focusAreas?: FocusAreaCreateNestedManyWithoutResumeInput
    seo?: SEOCreateNestedOneWithoutResumeInput
    themes?: ThemeCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutEducationInput = {
    id?: string
    name: string
    title: string
    email: string
    phone: string
    location: string
    about: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutResumeInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutResumeInput
    projects?: ProjectUncheckedCreateNestedManyWithoutResumeInput
    certifications?: CertificationUncheckedCreateNestedManyWithoutResumeInput
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutResumeInput
    focusAreas?: FocusAreaUncheckedCreateNestedManyWithoutResumeInput
    seo?: SEOUncheckedCreateNestedOneWithoutResumeInput
    themes?: ThemeUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutEducationInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutEducationInput, ResumeUncheckedCreateWithoutEducationInput>
  }

  export type ResumeUpsertWithoutEducationInput = {
    update: XOR<ResumeUpdateWithoutEducationInput, ResumeUncheckedUpdateWithoutEducationInput>
    create: XOR<ResumeCreateWithoutEducationInput, ResumeUncheckedCreateWithoutEducationInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutEducationInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutEducationInput, ResumeUncheckedUpdateWithoutEducationInput>
  }

  export type ResumeUpdateWithoutEducationInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUpdateManyWithoutResumeNestedInput
    experiences?: ExperienceUpdateManyWithoutResumeNestedInput
    projects?: ProjectUpdateManyWithoutResumeNestedInput
    certifications?: CertificationUpdateManyWithoutResumeNestedInput
    socialLinks?: SocialLinkUpdateManyWithoutResumeNestedInput
    focusAreas?: FocusAreaUpdateManyWithoutResumeNestedInput
    seo?: SEOUpdateOneWithoutResumeNestedInput
    themes?: ThemeUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutEducationInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutResumeNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutResumeNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutResumeNestedInput
    certifications?: CertificationUncheckedUpdateManyWithoutResumeNestedInput
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutResumeNestedInput
    focusAreas?: FocusAreaUncheckedUpdateManyWithoutResumeNestedInput
    seo?: SEOUncheckedUpdateOneWithoutResumeNestedInput
    themes?: ThemeUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateWithoutProjectsInput = {
    id?: string
    name: string
    title: string
    email: string
    phone: string
    location: string
    about: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillCreateNestedManyWithoutResumeInput
    experiences?: ExperienceCreateNestedManyWithoutResumeInput
    education?: EducationCreateNestedManyWithoutResumeInput
    certifications?: CertificationCreateNestedManyWithoutResumeInput
    socialLinks?: SocialLinkCreateNestedManyWithoutResumeInput
    focusAreas?: FocusAreaCreateNestedManyWithoutResumeInput
    seo?: SEOCreateNestedOneWithoutResumeInput
    themes?: ThemeCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutProjectsInput = {
    id?: string
    name: string
    title: string
    email: string
    phone: string
    location: string
    about: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutResumeInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutResumeInput
    education?: EducationUncheckedCreateNestedManyWithoutResumeInput
    certifications?: CertificationUncheckedCreateNestedManyWithoutResumeInput
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutResumeInput
    focusAreas?: FocusAreaUncheckedCreateNestedManyWithoutResumeInput
    seo?: SEOUncheckedCreateNestedOneWithoutResumeInput
    themes?: ThemeUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutProjectsInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutProjectsInput, ResumeUncheckedCreateWithoutProjectsInput>
  }

  export type ResumeUpsertWithoutProjectsInput = {
    update: XOR<ResumeUpdateWithoutProjectsInput, ResumeUncheckedUpdateWithoutProjectsInput>
    create: XOR<ResumeCreateWithoutProjectsInput, ResumeUncheckedCreateWithoutProjectsInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutProjectsInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutProjectsInput, ResumeUncheckedUpdateWithoutProjectsInput>
  }

  export type ResumeUpdateWithoutProjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUpdateManyWithoutResumeNestedInput
    experiences?: ExperienceUpdateManyWithoutResumeNestedInput
    education?: EducationUpdateManyWithoutResumeNestedInput
    certifications?: CertificationUpdateManyWithoutResumeNestedInput
    socialLinks?: SocialLinkUpdateManyWithoutResumeNestedInput
    focusAreas?: FocusAreaUpdateManyWithoutResumeNestedInput
    seo?: SEOUpdateOneWithoutResumeNestedInput
    themes?: ThemeUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutProjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutResumeNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutResumeNestedInput
    education?: EducationUncheckedUpdateManyWithoutResumeNestedInput
    certifications?: CertificationUncheckedUpdateManyWithoutResumeNestedInput
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutResumeNestedInput
    focusAreas?: FocusAreaUncheckedUpdateManyWithoutResumeNestedInput
    seo?: SEOUncheckedUpdateOneWithoutResumeNestedInput
    themes?: ThemeUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateWithoutCertificationsInput = {
    id?: string
    name: string
    title: string
    email: string
    phone: string
    location: string
    about: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillCreateNestedManyWithoutResumeInput
    experiences?: ExperienceCreateNestedManyWithoutResumeInput
    education?: EducationCreateNestedManyWithoutResumeInput
    projects?: ProjectCreateNestedManyWithoutResumeInput
    socialLinks?: SocialLinkCreateNestedManyWithoutResumeInput
    focusAreas?: FocusAreaCreateNestedManyWithoutResumeInput
    seo?: SEOCreateNestedOneWithoutResumeInput
    themes?: ThemeCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutCertificationsInput = {
    id?: string
    name: string
    title: string
    email: string
    phone: string
    location: string
    about: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutResumeInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutResumeInput
    education?: EducationUncheckedCreateNestedManyWithoutResumeInput
    projects?: ProjectUncheckedCreateNestedManyWithoutResumeInput
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutResumeInput
    focusAreas?: FocusAreaUncheckedCreateNestedManyWithoutResumeInput
    seo?: SEOUncheckedCreateNestedOneWithoutResumeInput
    themes?: ThemeUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutCertificationsInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutCertificationsInput, ResumeUncheckedCreateWithoutCertificationsInput>
  }

  export type ResumeUpsertWithoutCertificationsInput = {
    update: XOR<ResumeUpdateWithoutCertificationsInput, ResumeUncheckedUpdateWithoutCertificationsInput>
    create: XOR<ResumeCreateWithoutCertificationsInput, ResumeUncheckedCreateWithoutCertificationsInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutCertificationsInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutCertificationsInput, ResumeUncheckedUpdateWithoutCertificationsInput>
  }

  export type ResumeUpdateWithoutCertificationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUpdateManyWithoutResumeNestedInput
    experiences?: ExperienceUpdateManyWithoutResumeNestedInput
    education?: EducationUpdateManyWithoutResumeNestedInput
    projects?: ProjectUpdateManyWithoutResumeNestedInput
    socialLinks?: SocialLinkUpdateManyWithoutResumeNestedInput
    focusAreas?: FocusAreaUpdateManyWithoutResumeNestedInput
    seo?: SEOUpdateOneWithoutResumeNestedInput
    themes?: ThemeUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutCertificationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutResumeNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutResumeNestedInput
    education?: EducationUncheckedUpdateManyWithoutResumeNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutResumeNestedInput
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutResumeNestedInput
    focusAreas?: FocusAreaUncheckedUpdateManyWithoutResumeNestedInput
    seo?: SEOUncheckedUpdateOneWithoutResumeNestedInput
    themes?: ThemeUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateWithoutSocialLinksInput = {
    id?: string
    name: string
    title: string
    email: string
    phone: string
    location: string
    about: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillCreateNestedManyWithoutResumeInput
    experiences?: ExperienceCreateNestedManyWithoutResumeInput
    education?: EducationCreateNestedManyWithoutResumeInput
    projects?: ProjectCreateNestedManyWithoutResumeInput
    certifications?: CertificationCreateNestedManyWithoutResumeInput
    focusAreas?: FocusAreaCreateNestedManyWithoutResumeInput
    seo?: SEOCreateNestedOneWithoutResumeInput
    themes?: ThemeCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutSocialLinksInput = {
    id?: string
    name: string
    title: string
    email: string
    phone: string
    location: string
    about: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutResumeInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutResumeInput
    education?: EducationUncheckedCreateNestedManyWithoutResumeInput
    projects?: ProjectUncheckedCreateNestedManyWithoutResumeInput
    certifications?: CertificationUncheckedCreateNestedManyWithoutResumeInput
    focusAreas?: FocusAreaUncheckedCreateNestedManyWithoutResumeInput
    seo?: SEOUncheckedCreateNestedOneWithoutResumeInput
    themes?: ThemeUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutSocialLinksInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutSocialLinksInput, ResumeUncheckedCreateWithoutSocialLinksInput>
  }

  export type ResumeUpsertWithoutSocialLinksInput = {
    update: XOR<ResumeUpdateWithoutSocialLinksInput, ResumeUncheckedUpdateWithoutSocialLinksInput>
    create: XOR<ResumeCreateWithoutSocialLinksInput, ResumeUncheckedCreateWithoutSocialLinksInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutSocialLinksInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutSocialLinksInput, ResumeUncheckedUpdateWithoutSocialLinksInput>
  }

  export type ResumeUpdateWithoutSocialLinksInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUpdateManyWithoutResumeNestedInput
    experiences?: ExperienceUpdateManyWithoutResumeNestedInput
    education?: EducationUpdateManyWithoutResumeNestedInput
    projects?: ProjectUpdateManyWithoutResumeNestedInput
    certifications?: CertificationUpdateManyWithoutResumeNestedInput
    focusAreas?: FocusAreaUpdateManyWithoutResumeNestedInput
    seo?: SEOUpdateOneWithoutResumeNestedInput
    themes?: ThemeUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutSocialLinksInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutResumeNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutResumeNestedInput
    education?: EducationUncheckedUpdateManyWithoutResumeNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutResumeNestedInput
    certifications?: CertificationUncheckedUpdateManyWithoutResumeNestedInput
    focusAreas?: FocusAreaUncheckedUpdateManyWithoutResumeNestedInput
    seo?: SEOUncheckedUpdateOneWithoutResumeNestedInput
    themes?: ThemeUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateWithoutSeoInput = {
    id?: string
    name: string
    title: string
    email: string
    phone: string
    location: string
    about: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillCreateNestedManyWithoutResumeInput
    experiences?: ExperienceCreateNestedManyWithoutResumeInput
    education?: EducationCreateNestedManyWithoutResumeInput
    projects?: ProjectCreateNestedManyWithoutResumeInput
    certifications?: CertificationCreateNestedManyWithoutResumeInput
    socialLinks?: SocialLinkCreateNestedManyWithoutResumeInput
    focusAreas?: FocusAreaCreateNestedManyWithoutResumeInput
    themes?: ThemeCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutSeoInput = {
    id?: string
    name: string
    title: string
    email: string
    phone: string
    location: string
    about: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutResumeInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutResumeInput
    education?: EducationUncheckedCreateNestedManyWithoutResumeInput
    projects?: ProjectUncheckedCreateNestedManyWithoutResumeInput
    certifications?: CertificationUncheckedCreateNestedManyWithoutResumeInput
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutResumeInput
    focusAreas?: FocusAreaUncheckedCreateNestedManyWithoutResumeInput
    themes?: ThemeUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutSeoInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutSeoInput, ResumeUncheckedCreateWithoutSeoInput>
  }

  export type ResumeUpsertWithoutSeoInput = {
    update: XOR<ResumeUpdateWithoutSeoInput, ResumeUncheckedUpdateWithoutSeoInput>
    create: XOR<ResumeCreateWithoutSeoInput, ResumeUncheckedCreateWithoutSeoInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutSeoInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutSeoInput, ResumeUncheckedUpdateWithoutSeoInput>
  }

  export type ResumeUpdateWithoutSeoInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUpdateManyWithoutResumeNestedInput
    experiences?: ExperienceUpdateManyWithoutResumeNestedInput
    education?: EducationUpdateManyWithoutResumeNestedInput
    projects?: ProjectUpdateManyWithoutResumeNestedInput
    certifications?: CertificationUpdateManyWithoutResumeNestedInput
    socialLinks?: SocialLinkUpdateManyWithoutResumeNestedInput
    focusAreas?: FocusAreaUpdateManyWithoutResumeNestedInput
    themes?: ThemeUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutSeoInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutResumeNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutResumeNestedInput
    education?: EducationUncheckedUpdateManyWithoutResumeNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutResumeNestedInput
    certifications?: CertificationUncheckedUpdateManyWithoutResumeNestedInput
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutResumeNestedInput
    focusAreas?: FocusAreaUncheckedUpdateManyWithoutResumeNestedInput
    themes?: ThemeUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateWithoutThemesInput = {
    id?: string
    name: string
    title: string
    email: string
    phone: string
    location: string
    about: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillCreateNestedManyWithoutResumeInput
    experiences?: ExperienceCreateNestedManyWithoutResumeInput
    education?: EducationCreateNestedManyWithoutResumeInput
    projects?: ProjectCreateNestedManyWithoutResumeInput
    certifications?: CertificationCreateNestedManyWithoutResumeInput
    socialLinks?: SocialLinkCreateNestedManyWithoutResumeInput
    focusAreas?: FocusAreaCreateNestedManyWithoutResumeInput
    seo?: SEOCreateNestedOneWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutThemesInput = {
    id?: string
    name: string
    title: string
    email: string
    phone: string
    location: string
    about: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutResumeInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutResumeInput
    education?: EducationUncheckedCreateNestedManyWithoutResumeInput
    projects?: ProjectUncheckedCreateNestedManyWithoutResumeInput
    certifications?: CertificationUncheckedCreateNestedManyWithoutResumeInput
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutResumeInput
    focusAreas?: FocusAreaUncheckedCreateNestedManyWithoutResumeInput
    seo?: SEOUncheckedCreateNestedOneWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutThemesInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutThemesInput, ResumeUncheckedCreateWithoutThemesInput>
  }

  export type ResumeUpsertWithoutThemesInput = {
    update: XOR<ResumeUpdateWithoutThemesInput, ResumeUncheckedUpdateWithoutThemesInput>
    create: XOR<ResumeCreateWithoutThemesInput, ResumeUncheckedCreateWithoutThemesInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutThemesInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutThemesInput, ResumeUncheckedUpdateWithoutThemesInput>
  }

  export type ResumeUpdateWithoutThemesInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUpdateManyWithoutResumeNestedInput
    experiences?: ExperienceUpdateManyWithoutResumeNestedInput
    education?: EducationUpdateManyWithoutResumeNestedInput
    projects?: ProjectUpdateManyWithoutResumeNestedInput
    certifications?: CertificationUpdateManyWithoutResumeNestedInput
    socialLinks?: SocialLinkUpdateManyWithoutResumeNestedInput
    focusAreas?: FocusAreaUpdateManyWithoutResumeNestedInput
    seo?: SEOUpdateOneWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutThemesInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutResumeNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutResumeNestedInput
    education?: EducationUncheckedUpdateManyWithoutResumeNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutResumeNestedInput
    certifications?: CertificationUncheckedUpdateManyWithoutResumeNestedInput
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutResumeNestedInput
    focusAreas?: FocusAreaUncheckedUpdateManyWithoutResumeNestedInput
    seo?: SEOUncheckedUpdateOneWithoutResumeNestedInput
  }

  export type ResumeCreateWithoutFocusAreasInput = {
    id?: string
    name: string
    title: string
    email: string
    phone: string
    location: string
    about: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillCreateNestedManyWithoutResumeInput
    experiences?: ExperienceCreateNestedManyWithoutResumeInput
    education?: EducationCreateNestedManyWithoutResumeInput
    projects?: ProjectCreateNestedManyWithoutResumeInput
    certifications?: CertificationCreateNestedManyWithoutResumeInput
    socialLinks?: SocialLinkCreateNestedManyWithoutResumeInput
    seo?: SEOCreateNestedOneWithoutResumeInput
    themes?: ThemeCreateNestedManyWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutFocusAreasInput = {
    id?: string
    name: string
    title: string
    email: string
    phone: string
    location: string
    about: string
    profileImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutResumeInput
    experiences?: ExperienceUncheckedCreateNestedManyWithoutResumeInput
    education?: EducationUncheckedCreateNestedManyWithoutResumeInput
    projects?: ProjectUncheckedCreateNestedManyWithoutResumeInput
    certifications?: CertificationUncheckedCreateNestedManyWithoutResumeInput
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutResumeInput
    seo?: SEOUncheckedCreateNestedOneWithoutResumeInput
    themes?: ThemeUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutFocusAreasInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutFocusAreasInput, ResumeUncheckedCreateWithoutFocusAreasInput>
  }

  export type ResumeUpsertWithoutFocusAreasInput = {
    update: XOR<ResumeUpdateWithoutFocusAreasInput, ResumeUncheckedUpdateWithoutFocusAreasInput>
    create: XOR<ResumeCreateWithoutFocusAreasInput, ResumeUncheckedCreateWithoutFocusAreasInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutFocusAreasInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutFocusAreasInput, ResumeUncheckedUpdateWithoutFocusAreasInput>
  }

  export type ResumeUpdateWithoutFocusAreasInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUpdateManyWithoutResumeNestedInput
    experiences?: ExperienceUpdateManyWithoutResumeNestedInput
    education?: EducationUpdateManyWithoutResumeNestedInput
    projects?: ProjectUpdateManyWithoutResumeNestedInput
    certifications?: CertificationUpdateManyWithoutResumeNestedInput
    socialLinks?: SocialLinkUpdateManyWithoutResumeNestedInput
    seo?: SEOUpdateOneWithoutResumeNestedInput
    themes?: ThemeUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutFocusAreasInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutResumeNestedInput
    experiences?: ExperienceUncheckedUpdateManyWithoutResumeNestedInput
    education?: EducationUncheckedUpdateManyWithoutResumeNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutResumeNestedInput
    certifications?: CertificationUncheckedUpdateManyWithoutResumeNestedInput
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutResumeNestedInput
    seo?: SEOUncheckedUpdateOneWithoutResumeNestedInput
    themes?: ThemeUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type SkillCreateManyResumeInput = {
    id?: string
    name: string
    category: string
  }

  export type ExperienceCreateManyResumeInput = {
    id?: string
    company: string
    position: string
    startDate: Date | string
    endDate?: Date | string | null
    description: string
  }

  export type EducationCreateManyResumeInput = {
    id?: string
    institution: string
    degree: string
    field: string
    startDate: Date | string
    endDate?: Date | string | null
    gpa?: string | null
  }

  export type ProjectCreateManyResumeInput = {
    id?: string
    title: string
    description: string
    technologies: string
    image?: string | null
    link?: string | null
  }

  export type CertificationCreateManyResumeInput = {
    id?: string
    name: string
    issuer: string
    date: Date | string
    image?: string | null
  }

  export type SocialLinkCreateManyResumeInput = {
    id?: string
    platform: string
    url: string
    icon: string
  }

  export type FocusAreaCreateManyResumeInput = {
    id?: string
    title: string
    description: string
    icon: string
  }

  export type ThemeCreateManyResumeInput = {
    id?: string
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    backgroundColor?: string
    textColor?: string
    headingColor?: string
    linkColor?: string
    buttonColor?: string
    buttonTextColor?: string
    cardColor?: string
    borderColor?: string
    darkPrimaryColor?: string
    darkSecondaryColor?: string
    darkAccentColor?: string
    darkBackgroundColor?: string
    darkTextColor?: string
    darkHeadingColor?: string
    darkLinkColor?: string
    darkButtonColor?: string
    darkButtonTextColor?: string
    darkCardColor?: string
    darkBorderColor?: string
    headingFont?: string
    bodyFont?: string
    borderRadius?: number
    buttonRadius?: number
    cardRadius?: number
    name?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillUpdateWithoutResumeInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateWithoutResumeInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateManyWithoutResumeInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUpdateWithoutResumeInput = {
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUncheckedUpdateWithoutResumeInput = {
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUncheckedUpdateManyWithoutResumeInput = {
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type EducationUpdateWithoutResumeInput = {
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gpa?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationUncheckedUpdateWithoutResumeInput = {
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gpa?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationUncheckedUpdateManyWithoutResumeInput = {
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gpa?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUpdateWithoutResumeInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    technologies?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateWithoutResumeInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    technologies?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateManyWithoutResumeInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    technologies?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CertificationUpdateWithoutResumeInput = {
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CertificationUncheckedUpdateWithoutResumeInput = {
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CertificationUncheckedUpdateManyWithoutResumeInput = {
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SocialLinkUpdateWithoutResumeInput = {
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type SocialLinkUncheckedUpdateWithoutResumeInput = {
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type SocialLinkUncheckedUpdateManyWithoutResumeInput = {
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type FocusAreaUpdateWithoutResumeInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type FocusAreaUncheckedUpdateWithoutResumeInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type FocusAreaUncheckedUpdateManyWithoutResumeInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type ThemeUpdateWithoutResumeInput = {
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    headingColor?: StringFieldUpdateOperationsInput | string
    linkColor?: StringFieldUpdateOperationsInput | string
    buttonColor?: StringFieldUpdateOperationsInput | string
    buttonTextColor?: StringFieldUpdateOperationsInput | string
    cardColor?: StringFieldUpdateOperationsInput | string
    borderColor?: StringFieldUpdateOperationsInput | string
    darkPrimaryColor?: StringFieldUpdateOperationsInput | string
    darkSecondaryColor?: StringFieldUpdateOperationsInput | string
    darkAccentColor?: StringFieldUpdateOperationsInput | string
    darkBackgroundColor?: StringFieldUpdateOperationsInput | string
    darkTextColor?: StringFieldUpdateOperationsInput | string
    darkHeadingColor?: StringFieldUpdateOperationsInput | string
    darkLinkColor?: StringFieldUpdateOperationsInput | string
    darkButtonColor?: StringFieldUpdateOperationsInput | string
    darkButtonTextColor?: StringFieldUpdateOperationsInput | string
    darkCardColor?: StringFieldUpdateOperationsInput | string
    darkBorderColor?: StringFieldUpdateOperationsInput | string
    headingFont?: StringFieldUpdateOperationsInput | string
    bodyFont?: StringFieldUpdateOperationsInput | string
    borderRadius?: IntFieldUpdateOperationsInput | number
    buttonRadius?: IntFieldUpdateOperationsInput | number
    cardRadius?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThemeUncheckedUpdateWithoutResumeInput = {
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    headingColor?: StringFieldUpdateOperationsInput | string
    linkColor?: StringFieldUpdateOperationsInput | string
    buttonColor?: StringFieldUpdateOperationsInput | string
    buttonTextColor?: StringFieldUpdateOperationsInput | string
    cardColor?: StringFieldUpdateOperationsInput | string
    borderColor?: StringFieldUpdateOperationsInput | string
    darkPrimaryColor?: StringFieldUpdateOperationsInput | string
    darkSecondaryColor?: StringFieldUpdateOperationsInput | string
    darkAccentColor?: StringFieldUpdateOperationsInput | string
    darkBackgroundColor?: StringFieldUpdateOperationsInput | string
    darkTextColor?: StringFieldUpdateOperationsInput | string
    darkHeadingColor?: StringFieldUpdateOperationsInput | string
    darkLinkColor?: StringFieldUpdateOperationsInput | string
    darkButtonColor?: StringFieldUpdateOperationsInput | string
    darkButtonTextColor?: StringFieldUpdateOperationsInput | string
    darkCardColor?: StringFieldUpdateOperationsInput | string
    darkBorderColor?: StringFieldUpdateOperationsInput | string
    headingFont?: StringFieldUpdateOperationsInput | string
    bodyFont?: StringFieldUpdateOperationsInput | string
    borderRadius?: IntFieldUpdateOperationsInput | number
    buttonRadius?: IntFieldUpdateOperationsInput | number
    cardRadius?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThemeUncheckedUpdateManyWithoutResumeInput = {
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    headingColor?: StringFieldUpdateOperationsInput | string
    linkColor?: StringFieldUpdateOperationsInput | string
    buttonColor?: StringFieldUpdateOperationsInput | string
    buttonTextColor?: StringFieldUpdateOperationsInput | string
    cardColor?: StringFieldUpdateOperationsInput | string
    borderColor?: StringFieldUpdateOperationsInput | string
    darkPrimaryColor?: StringFieldUpdateOperationsInput | string
    darkSecondaryColor?: StringFieldUpdateOperationsInput | string
    darkAccentColor?: StringFieldUpdateOperationsInput | string
    darkBackgroundColor?: StringFieldUpdateOperationsInput | string
    darkTextColor?: StringFieldUpdateOperationsInput | string
    darkHeadingColor?: StringFieldUpdateOperationsInput | string
    darkLinkColor?: StringFieldUpdateOperationsInput | string
    darkButtonColor?: StringFieldUpdateOperationsInput | string
    darkButtonTextColor?: StringFieldUpdateOperationsInput | string
    darkCardColor?: StringFieldUpdateOperationsInput | string
    darkBorderColor?: StringFieldUpdateOperationsInput | string
    headingFont?: StringFieldUpdateOperationsInput | string
    bodyFont?: StringFieldUpdateOperationsInput | string
    borderRadius?: IntFieldUpdateOperationsInput | number
    buttonRadius?: IntFieldUpdateOperationsInput | number
    cardRadius?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
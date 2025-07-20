
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
 * Model LibraryItem
 * 
 */
export type LibraryItem = $Result.DefaultSelection<Prisma.$LibraryItemPayload>
/**
 * Model Borrowing
 * 
 */
export type Borrowing = $Result.DefaultSelection<Prisma.$BorrowingPayload>
/**
 * Model BorrowingRule
 * 
 */
export type BorrowingRule = $Result.DefaultSelection<Prisma.$BorrowingRulePayload>
/**
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>
/**
 * Model Fine
 * 
 */
export type Fine = $Result.DefaultSelection<Prisma.$FinePayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Blog
 * 
 */
export type Blog = $Result.DefaultSelection<Prisma.$BlogPayload>
/**
 * Model Announcement
 * 
 */
export type Announcement = $Result.DefaultSelection<Prisma.$AnnouncementPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMINISTRATOR: 'ADMINISTRATOR',
  LIBRARIAN: 'LIBRARIAN',
  PATRON: 'PATRON'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ItemStatus: {
  AVAILABLE: 'AVAILABLE',
  CHECKED_OUT: 'CHECKED_OUT',
  RESERVED: 'RESERVED',
  LOST: 'LOST',
  DAMAGED: 'DAMAGED'
};

export type ItemStatus = (typeof ItemStatus)[keyof typeof ItemStatus]


export const ItemType: {
  BOOK: 'BOOK',
  JOURNAL: 'JOURNAL',
  MULTIMEDIA: 'MULTIMEDIA',
  OTHER: 'OTHER'
};

export type ItemType = (typeof ItemType)[keyof typeof ItemType]


export const NotificationType: {
  OVERDUE: 'OVERDUE',
  RESERVATION_AVAILABLE: 'RESERVATION_AVAILABLE',
  SYSTEM_UPDATE: 'SYSTEM_UPDATE'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]


export const ReservationStatus: {
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  CANCELLED: 'CANCELLED'
};

export type ReservationStatus = (typeof ReservationStatus)[keyof typeof ReservationStatus]


export const FineStatus: {
  UNPAID: 'UNPAID',
  PAID: 'PAID',
  WAIVED: 'WAIVED'
};

export type FineStatus = (typeof FineStatus)[keyof typeof FineStatus]


export const EntityType: {
  USER: 'USER',
  ITEM: 'ITEM',
  BORROWING: 'BORROWING',
  RESERVATION: 'RESERVATION',
  FINE: 'FINE'
};

export type EntityType = (typeof EntityType)[keyof typeof EntityType]


export const ActionType: {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE'
};

export type ActionType = (typeof ActionType)[keyof typeof ActionType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ItemStatus = $Enums.ItemStatus

export const ItemStatus: typeof $Enums.ItemStatus

export type ItemType = $Enums.ItemType

export const ItemType: typeof $Enums.ItemType

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

export type ReservationStatus = $Enums.ReservationStatus

export const ReservationStatus: typeof $Enums.ReservationStatus

export type FineStatus = $Enums.FineStatus

export const FineStatus: typeof $Enums.FineStatus

export type EntityType = $Enums.EntityType

export const EntityType: typeof $Enums.EntityType

export type ActionType = $Enums.ActionType

export const ActionType: typeof $Enums.ActionType

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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


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
   * `prisma.libraryItem`: Exposes CRUD operations for the **LibraryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LibraryItems
    * const libraryItems = await prisma.libraryItem.findMany()
    * ```
    */
  get libraryItem(): Prisma.LibraryItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.borrowing`: Exposes CRUD operations for the **Borrowing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Borrowings
    * const borrowings = await prisma.borrowing.findMany()
    * ```
    */
  get borrowing(): Prisma.BorrowingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.borrowingRule`: Exposes CRUD operations for the **BorrowingRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BorrowingRules
    * const borrowingRules = await prisma.borrowingRule.findMany()
    * ```
    */
  get borrowingRule(): Prisma.BorrowingRuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fine`: Exposes CRUD operations for the **Fine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fines
    * const fines = await prisma.fine.findMany()
    * ```
    */
  get fine(): Prisma.FineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.announcement`: Exposes CRUD operations for the **Announcement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Announcements
    * const announcements = await prisma.announcement.findMany()
    * ```
    */
  get announcement(): Prisma.AnnouncementDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
    LibraryItem: 'LibraryItem',
    Borrowing: 'Borrowing',
    BorrowingRule: 'BorrowingRule',
    Reservation: 'Reservation',
    Fine: 'Fine',
    Notification: 'Notification',
    Blog: 'Blog',
    Announcement: 'Announcement'
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
      modelProps: "user" | "libraryItem" | "borrowing" | "borrowingRule" | "reservation" | "fine" | "notification" | "blog" | "announcement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      LibraryItem: {
        payload: Prisma.$LibraryItemPayload<ExtArgs>
        fields: Prisma.LibraryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LibraryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LibraryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryItemPayload>
          }
          findFirst: {
            args: Prisma.LibraryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LibraryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryItemPayload>
          }
          findMany: {
            args: Prisma.LibraryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryItemPayload>[]
          }
          create: {
            args: Prisma.LibraryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryItemPayload>
          }
          createMany: {
            args: Prisma.LibraryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LibraryItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryItemPayload>[]
          }
          delete: {
            args: Prisma.LibraryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryItemPayload>
          }
          update: {
            args: Prisma.LibraryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryItemPayload>
          }
          deleteMany: {
            args: Prisma.LibraryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LibraryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LibraryItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryItemPayload>[]
          }
          upsert: {
            args: Prisma.LibraryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryItemPayload>
          }
          aggregate: {
            args: Prisma.LibraryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLibraryItem>
          }
          groupBy: {
            args: Prisma.LibraryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<LibraryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.LibraryItemCountArgs<ExtArgs>
            result: $Utils.Optional<LibraryItemCountAggregateOutputType> | number
          }
        }
      }
      Borrowing: {
        payload: Prisma.$BorrowingPayload<ExtArgs>
        fields: Prisma.BorrowingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BorrowingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BorrowingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingPayload>
          }
          findFirst: {
            args: Prisma.BorrowingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BorrowingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingPayload>
          }
          findMany: {
            args: Prisma.BorrowingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingPayload>[]
          }
          create: {
            args: Prisma.BorrowingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingPayload>
          }
          createMany: {
            args: Prisma.BorrowingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BorrowingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingPayload>[]
          }
          delete: {
            args: Prisma.BorrowingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingPayload>
          }
          update: {
            args: Prisma.BorrowingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingPayload>
          }
          deleteMany: {
            args: Prisma.BorrowingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BorrowingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BorrowingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingPayload>[]
          }
          upsert: {
            args: Prisma.BorrowingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingPayload>
          }
          aggregate: {
            args: Prisma.BorrowingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBorrowing>
          }
          groupBy: {
            args: Prisma.BorrowingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BorrowingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BorrowingCountArgs<ExtArgs>
            result: $Utils.Optional<BorrowingCountAggregateOutputType> | number
          }
        }
      }
      BorrowingRule: {
        payload: Prisma.$BorrowingRulePayload<ExtArgs>
        fields: Prisma.BorrowingRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BorrowingRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BorrowingRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingRulePayload>
          }
          findFirst: {
            args: Prisma.BorrowingRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BorrowingRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingRulePayload>
          }
          findMany: {
            args: Prisma.BorrowingRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingRulePayload>[]
          }
          create: {
            args: Prisma.BorrowingRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingRulePayload>
          }
          createMany: {
            args: Prisma.BorrowingRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BorrowingRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingRulePayload>[]
          }
          delete: {
            args: Prisma.BorrowingRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingRulePayload>
          }
          update: {
            args: Prisma.BorrowingRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingRulePayload>
          }
          deleteMany: {
            args: Prisma.BorrowingRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BorrowingRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BorrowingRuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingRulePayload>[]
          }
          upsert: {
            args: Prisma.BorrowingRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BorrowingRulePayload>
          }
          aggregate: {
            args: Prisma.BorrowingRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBorrowingRule>
          }
          groupBy: {
            args: Prisma.BorrowingRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<BorrowingRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.BorrowingRuleCountArgs<ExtArgs>
            result: $Utils.Optional<BorrowingRuleCountAggregateOutputType> | number
          }
        }
      }
      Reservation: {
        payload: Prisma.$ReservationPayload<ExtArgs>
        fields: Prisma.ReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findFirst: {
            args: Prisma.ReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findMany: {
            args: Prisma.ReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          create: {
            args: Prisma.ReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          createMany: {
            args: Prisma.ReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          delete: {
            args: Prisma.ReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          update: {
            args: Prisma.ReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          deleteMany: {
            args: Prisma.ReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          upsert: {
            args: Prisma.ReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.ReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
          }
        }
      }
      Fine: {
        payload: Prisma.$FinePayload<ExtArgs>
        fields: Prisma.FineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>
          }
          findFirst: {
            args: Prisma.FineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>
          }
          findMany: {
            args: Prisma.FineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>[]
          }
          create: {
            args: Prisma.FineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>
          }
          createMany: {
            args: Prisma.FineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>[]
          }
          delete: {
            args: Prisma.FineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>
          }
          update: {
            args: Prisma.FineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>
          }
          deleteMany: {
            args: Prisma.FineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>[]
          }
          upsert: {
            args: Prisma.FineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>
          }
          aggregate: {
            args: Prisma.FineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFine>
          }
          groupBy: {
            args: Prisma.FineGroupByArgs<ExtArgs>
            result: $Utils.Optional<FineGroupByOutputType>[]
          }
          count: {
            args: Prisma.FineCountArgs<ExtArgs>
            result: $Utils.Optional<FineCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Blog: {
        payload: Prisma.$BlogPayload<ExtArgs>
        fields: Prisma.BlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findFirst: {
            args: Prisma.BlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findMany: {
            args: Prisma.BlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          create: {
            args: Prisma.BlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          createMany: {
            args: Prisma.BlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          delete: {
            args: Prisma.BlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          update: {
            args: Prisma.BlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          deleteMany: {
            args: Prisma.BlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          upsert: {
            args: Prisma.BlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
          }
        }
      }
      Announcement: {
        payload: Prisma.$AnnouncementPayload<ExtArgs>
        fields: Prisma.AnnouncementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnouncementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnouncementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findFirst: {
            args: Prisma.AnnouncementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnouncementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findMany: {
            args: Prisma.AnnouncementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          create: {
            args: Prisma.AnnouncementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          createMany: {
            args: Prisma.AnnouncementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnouncementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          delete: {
            args: Prisma.AnnouncementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          update: {
            args: Prisma.AnnouncementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          deleteMany: {
            args: Prisma.AnnouncementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnouncementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnouncementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          upsert: {
            args: Prisma.AnnouncementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          aggregate: {
            args: Prisma.AnnouncementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnouncement>
          }
          groupBy: {
            args: Prisma.AnnouncementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnouncementCountArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
      isolationLevel?: Prisma.TransactionIsolationLevel
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
    libraryItem?: LibraryItemOmit
    borrowing?: BorrowingOmit
    borrowingRule?: BorrowingRuleOmit
    reservation?: ReservationOmit
    fine?: FineOmit
    notification?: NotificationOmit
    blog?: BlogOmit
    announcement?: AnnouncementOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    borrowedItems: number
    reservations: number
    fines: number
    notifications: number
    blogs: number
    announcements: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrowedItems?: boolean | UserCountOutputTypeCountBorrowedItemsArgs
    reservations?: boolean | UserCountOutputTypeCountReservationsArgs
    fines?: boolean | UserCountOutputTypeCountFinesArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    blogs?: boolean | UserCountOutputTypeCountBlogsArgs
    announcements?: boolean | UserCountOutputTypeCountAnnouncementsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBorrowedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BorrowingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FineWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
  }


  /**
   * Count Type LibraryItemCountOutputType
   */

  export type LibraryItemCountOutputType = {
    borrowings: number
    reservations: number
  }

  export type LibraryItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrowings?: boolean | LibraryItemCountOutputTypeCountBorrowingsArgs
    reservations?: boolean | LibraryItemCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * LibraryItemCountOutputType without action
   */
  export type LibraryItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryItemCountOutputType
     */
    select?: LibraryItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LibraryItemCountOutputType without action
   */
  export type LibraryItemCountOutputTypeCountBorrowingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BorrowingWhereInput
  }

  /**
   * LibraryItemCountOutputType without action
   */
  export type LibraryItemCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    userImage: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    libraryCardId: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    userImage: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    libraryCardId: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userImage: number
    firstName: number
    lastName: number
    email: number
    password: number
    role: number
    libraryCardId: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    userImage?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    libraryCardId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userImage?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    libraryCardId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userImage?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    libraryCardId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    userImage: string | null
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    libraryCardId: string | null
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    userImage?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    libraryCardId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    borrowedItems?: boolean | User$borrowedItemsArgs<ExtArgs>
    reservations?: boolean | User$reservationsArgs<ExtArgs>
    fines?: boolean | User$finesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    blogs?: boolean | User$blogsArgs<ExtArgs>
    announcements?: boolean | User$announcementsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userImage?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    libraryCardId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userImage?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    libraryCardId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    userImage?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    libraryCardId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userImage" | "firstName" | "lastName" | "email" | "password" | "role" | "libraryCardId" | "isDeleted" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrowedItems?: boolean | User$borrowedItemsArgs<ExtArgs>
    reservations?: boolean | User$reservationsArgs<ExtArgs>
    fines?: boolean | User$finesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    blogs?: boolean | User$blogsArgs<ExtArgs>
    announcements?: boolean | User$announcementsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      borrowedItems: Prisma.$BorrowingPayload<ExtArgs>[]
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
      fines: Prisma.$FinePayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      blogs: Prisma.$BlogPayload<ExtArgs>[]
      announcements: Prisma.$AnnouncementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userImage: string | null
      firstName: string
      lastName: string
      email: string
      password: string
      role: $Enums.UserRole
      libraryCardId: string | null
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    borrowedItems<T extends User$borrowedItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$borrowedItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservations<T extends User$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, User$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fines<T extends User$finesArgs<ExtArgs> = {}>(args?: Subset<T, User$finesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blogs<T extends User$blogsArgs<ExtArgs> = {}>(args?: Subset<T, User$blogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    announcements<T extends User$announcementsArgs<ExtArgs> = {}>(args?: Subset<T, User$announcementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly userImage: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly libraryCardId: FieldRef<"User", 'String'>
    readonly isDeleted: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.borrowedItems
   */
  export type User$borrowedItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrowing
     */
    select?: BorrowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrowing
     */
    omit?: BorrowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowingInclude<ExtArgs> | null
    where?: BorrowingWhereInput
    orderBy?: BorrowingOrderByWithRelationInput | BorrowingOrderByWithRelationInput[]
    cursor?: BorrowingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BorrowingScalarFieldEnum | BorrowingScalarFieldEnum[]
  }

  /**
   * User.reservations
   */
  export type User$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * User.fines
   */
  export type User$finesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    where?: FineWhereInput
    orderBy?: FineOrderByWithRelationInput | FineOrderByWithRelationInput[]
    cursor?: FineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FineScalarFieldEnum | FineScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.blogs
   */
  export type User$blogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    cursor?: BlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * User.announcements
   */
  export type User$announcementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    cursor?: AnnouncementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model LibraryItem
   */

  export type AggregateLibraryItem = {
    _count: LibraryItemCountAggregateOutputType | null
    _avg: LibraryItemAvgAggregateOutputType | null
    _sum: LibraryItemSumAggregateOutputType | null
    _min: LibraryItemMinAggregateOutputType | null
    _max: LibraryItemMaxAggregateOutputType | null
  }

  export type LibraryItemAvgAggregateOutputType = {
    id: number | null
    yearPublished: number | null
  }

  export type LibraryItemSumAggregateOutputType = {
    id: number | null
    yearPublished: number | null
  }

  export type LibraryItemMinAggregateOutputType = {
    id: number | null
    title: string | null
    author: string | null
    publisher: string | null
    isbn: string | null
    itemType: $Enums.ItemType | null
    yearPublished: number | null
    edition: string | null
    shelfLocation: string | null
    status: $Enums.ItemStatus | null
    coverImage: string | null
    description: string | null
    isReference: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type LibraryItemMaxAggregateOutputType = {
    id: number | null
    title: string | null
    author: string | null
    publisher: string | null
    isbn: string | null
    itemType: $Enums.ItemType | null
    yearPublished: number | null
    edition: string | null
    shelfLocation: string | null
    status: $Enums.ItemStatus | null
    coverImage: string | null
    description: string | null
    isReference: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type LibraryItemCountAggregateOutputType = {
    id: number
    title: number
    author: number
    publisher: number
    isbn: number
    itemType: number
    categories: number
    languages: number
    yearPublished: number
    edition: number
    shelfLocation: number
    status: number
    coverImage: number
    description: number
    isReference: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type LibraryItemAvgAggregateInputType = {
    id?: true
    yearPublished?: true
  }

  export type LibraryItemSumAggregateInputType = {
    id?: true
    yearPublished?: true
  }

  export type LibraryItemMinAggregateInputType = {
    id?: true
    title?: true
    author?: true
    publisher?: true
    isbn?: true
    itemType?: true
    yearPublished?: true
    edition?: true
    shelfLocation?: true
    status?: true
    coverImage?: true
    description?: true
    isReference?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type LibraryItemMaxAggregateInputType = {
    id?: true
    title?: true
    author?: true
    publisher?: true
    isbn?: true
    itemType?: true
    yearPublished?: true
    edition?: true
    shelfLocation?: true
    status?: true
    coverImage?: true
    description?: true
    isReference?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type LibraryItemCountAggregateInputType = {
    id?: true
    title?: true
    author?: true
    publisher?: true
    isbn?: true
    itemType?: true
    categories?: true
    languages?: true
    yearPublished?: true
    edition?: true
    shelfLocation?: true
    status?: true
    coverImage?: true
    description?: true
    isReference?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type LibraryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LibraryItem to aggregate.
     */
    where?: LibraryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryItems to fetch.
     */
    orderBy?: LibraryItemOrderByWithRelationInput | LibraryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LibraryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LibraryItems
    **/
    _count?: true | LibraryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LibraryItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LibraryItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LibraryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LibraryItemMaxAggregateInputType
  }

  export type GetLibraryItemAggregateType<T extends LibraryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateLibraryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLibraryItem[P]>
      : GetScalarType<T[P], AggregateLibraryItem[P]>
  }




  export type LibraryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibraryItemWhereInput
    orderBy?: LibraryItemOrderByWithAggregationInput | LibraryItemOrderByWithAggregationInput[]
    by: LibraryItemScalarFieldEnum[] | LibraryItemScalarFieldEnum
    having?: LibraryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LibraryItemCountAggregateInputType | true
    _avg?: LibraryItemAvgAggregateInputType
    _sum?: LibraryItemSumAggregateInputType
    _min?: LibraryItemMinAggregateInputType
    _max?: LibraryItemMaxAggregateInputType
  }

  export type LibraryItemGroupByOutputType = {
    id: number
    title: string
    author: string
    publisher: string
    isbn: string | null
    itemType: $Enums.ItemType
    categories: string[]
    languages: string[]
    yearPublished: number | null
    edition: string | null
    shelfLocation: string | null
    status: $Enums.ItemStatus
    coverImage: string | null
    description: string | null
    isReference: boolean
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: LibraryItemCountAggregateOutputType | null
    _avg: LibraryItemAvgAggregateOutputType | null
    _sum: LibraryItemSumAggregateOutputType | null
    _min: LibraryItemMinAggregateOutputType | null
    _max: LibraryItemMaxAggregateOutputType | null
  }

  type GetLibraryItemGroupByPayload<T extends LibraryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LibraryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LibraryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LibraryItemGroupByOutputType[P]>
            : GetScalarType<T[P], LibraryItemGroupByOutputType[P]>
        }
      >
    >


  export type LibraryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    publisher?: boolean
    isbn?: boolean
    itemType?: boolean
    categories?: boolean
    languages?: boolean
    yearPublished?: boolean
    edition?: boolean
    shelfLocation?: boolean
    status?: boolean
    coverImage?: boolean
    description?: boolean
    isReference?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    borrowings?: boolean | LibraryItem$borrowingsArgs<ExtArgs>
    reservations?: boolean | LibraryItem$reservationsArgs<ExtArgs>
    _count?: boolean | LibraryItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libraryItem"]>

  export type LibraryItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    publisher?: boolean
    isbn?: boolean
    itemType?: boolean
    categories?: boolean
    languages?: boolean
    yearPublished?: boolean
    edition?: boolean
    shelfLocation?: boolean
    status?: boolean
    coverImage?: boolean
    description?: boolean
    isReference?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["libraryItem"]>

  export type LibraryItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    publisher?: boolean
    isbn?: boolean
    itemType?: boolean
    categories?: boolean
    languages?: boolean
    yearPublished?: boolean
    edition?: boolean
    shelfLocation?: boolean
    status?: boolean
    coverImage?: boolean
    description?: boolean
    isReference?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["libraryItem"]>

  export type LibraryItemSelectScalar = {
    id?: boolean
    title?: boolean
    author?: boolean
    publisher?: boolean
    isbn?: boolean
    itemType?: boolean
    categories?: boolean
    languages?: boolean
    yearPublished?: boolean
    edition?: boolean
    shelfLocation?: boolean
    status?: boolean
    coverImage?: boolean
    description?: boolean
    isReference?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type LibraryItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "author" | "publisher" | "isbn" | "itemType" | "categories" | "languages" | "yearPublished" | "edition" | "shelfLocation" | "status" | "coverImage" | "description" | "isReference" | "isDeleted" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["libraryItem"]>
  export type LibraryItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrowings?: boolean | LibraryItem$borrowingsArgs<ExtArgs>
    reservations?: boolean | LibraryItem$reservationsArgs<ExtArgs>
    _count?: boolean | LibraryItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LibraryItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LibraryItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LibraryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LibraryItem"
    objects: {
      borrowings: Prisma.$BorrowingPayload<ExtArgs>[]
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      author: string
      publisher: string
      isbn: string | null
      itemType: $Enums.ItemType
      categories: string[]
      languages: string[]
      yearPublished: number | null
      edition: string | null
      shelfLocation: string | null
      status: $Enums.ItemStatus
      coverImage: string | null
      description: string | null
      isReference: boolean
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["libraryItem"]>
    composites: {}
  }

  type LibraryItemGetPayload<S extends boolean | null | undefined | LibraryItemDefaultArgs> = $Result.GetResult<Prisma.$LibraryItemPayload, S>

  type LibraryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LibraryItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LibraryItemCountAggregateInputType | true
    }

  export interface LibraryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LibraryItem'], meta: { name: 'LibraryItem' } }
    /**
     * Find zero or one LibraryItem that matches the filter.
     * @param {LibraryItemFindUniqueArgs} args - Arguments to find a LibraryItem
     * @example
     * // Get one LibraryItem
     * const libraryItem = await prisma.libraryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LibraryItemFindUniqueArgs>(args: SelectSubset<T, LibraryItemFindUniqueArgs<ExtArgs>>): Prisma__LibraryItemClient<$Result.GetResult<Prisma.$LibraryItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LibraryItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LibraryItemFindUniqueOrThrowArgs} args - Arguments to find a LibraryItem
     * @example
     * // Get one LibraryItem
     * const libraryItem = await prisma.libraryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LibraryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, LibraryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LibraryItemClient<$Result.GetResult<Prisma.$LibraryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LibraryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryItemFindFirstArgs} args - Arguments to find a LibraryItem
     * @example
     * // Get one LibraryItem
     * const libraryItem = await prisma.libraryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LibraryItemFindFirstArgs>(args?: SelectSubset<T, LibraryItemFindFirstArgs<ExtArgs>>): Prisma__LibraryItemClient<$Result.GetResult<Prisma.$LibraryItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LibraryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryItemFindFirstOrThrowArgs} args - Arguments to find a LibraryItem
     * @example
     * // Get one LibraryItem
     * const libraryItem = await prisma.libraryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LibraryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, LibraryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__LibraryItemClient<$Result.GetResult<Prisma.$LibraryItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LibraryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LibraryItems
     * const libraryItems = await prisma.libraryItem.findMany()
     * 
     * // Get first 10 LibraryItems
     * const libraryItems = await prisma.libraryItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const libraryItemWithIdOnly = await prisma.libraryItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LibraryItemFindManyArgs>(args?: SelectSubset<T, LibraryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LibraryItem.
     * @param {LibraryItemCreateArgs} args - Arguments to create a LibraryItem.
     * @example
     * // Create one LibraryItem
     * const LibraryItem = await prisma.libraryItem.create({
     *   data: {
     *     // ... data to create a LibraryItem
     *   }
     * })
     * 
     */
    create<T extends LibraryItemCreateArgs>(args: SelectSubset<T, LibraryItemCreateArgs<ExtArgs>>): Prisma__LibraryItemClient<$Result.GetResult<Prisma.$LibraryItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LibraryItems.
     * @param {LibraryItemCreateManyArgs} args - Arguments to create many LibraryItems.
     * @example
     * // Create many LibraryItems
     * const libraryItem = await prisma.libraryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LibraryItemCreateManyArgs>(args?: SelectSubset<T, LibraryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LibraryItems and returns the data saved in the database.
     * @param {LibraryItemCreateManyAndReturnArgs} args - Arguments to create many LibraryItems.
     * @example
     * // Create many LibraryItems
     * const libraryItem = await prisma.libraryItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LibraryItems and only return the `id`
     * const libraryItemWithIdOnly = await prisma.libraryItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LibraryItemCreateManyAndReturnArgs>(args?: SelectSubset<T, LibraryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LibraryItem.
     * @param {LibraryItemDeleteArgs} args - Arguments to delete one LibraryItem.
     * @example
     * // Delete one LibraryItem
     * const LibraryItem = await prisma.libraryItem.delete({
     *   where: {
     *     // ... filter to delete one LibraryItem
     *   }
     * })
     * 
     */
    delete<T extends LibraryItemDeleteArgs>(args: SelectSubset<T, LibraryItemDeleteArgs<ExtArgs>>): Prisma__LibraryItemClient<$Result.GetResult<Prisma.$LibraryItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LibraryItem.
     * @param {LibraryItemUpdateArgs} args - Arguments to update one LibraryItem.
     * @example
     * // Update one LibraryItem
     * const libraryItem = await prisma.libraryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LibraryItemUpdateArgs>(args: SelectSubset<T, LibraryItemUpdateArgs<ExtArgs>>): Prisma__LibraryItemClient<$Result.GetResult<Prisma.$LibraryItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LibraryItems.
     * @param {LibraryItemDeleteManyArgs} args - Arguments to filter LibraryItems to delete.
     * @example
     * // Delete a few LibraryItems
     * const { count } = await prisma.libraryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LibraryItemDeleteManyArgs>(args?: SelectSubset<T, LibraryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LibraryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LibraryItems
     * const libraryItem = await prisma.libraryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LibraryItemUpdateManyArgs>(args: SelectSubset<T, LibraryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LibraryItems and returns the data updated in the database.
     * @param {LibraryItemUpdateManyAndReturnArgs} args - Arguments to update many LibraryItems.
     * @example
     * // Update many LibraryItems
     * const libraryItem = await prisma.libraryItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LibraryItems and only return the `id`
     * const libraryItemWithIdOnly = await prisma.libraryItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LibraryItemUpdateManyAndReturnArgs>(args: SelectSubset<T, LibraryItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LibraryItem.
     * @param {LibraryItemUpsertArgs} args - Arguments to update or create a LibraryItem.
     * @example
     * // Update or create a LibraryItem
     * const libraryItem = await prisma.libraryItem.upsert({
     *   create: {
     *     // ... data to create a LibraryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LibraryItem we want to update
     *   }
     * })
     */
    upsert<T extends LibraryItemUpsertArgs>(args: SelectSubset<T, LibraryItemUpsertArgs<ExtArgs>>): Prisma__LibraryItemClient<$Result.GetResult<Prisma.$LibraryItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LibraryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryItemCountArgs} args - Arguments to filter LibraryItems to count.
     * @example
     * // Count the number of LibraryItems
     * const count = await prisma.libraryItem.count({
     *   where: {
     *     // ... the filter for the LibraryItems we want to count
     *   }
     * })
    **/
    count<T extends LibraryItemCountArgs>(
      args?: Subset<T, LibraryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LibraryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LibraryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LibraryItemAggregateArgs>(args: Subset<T, LibraryItemAggregateArgs>): Prisma.PrismaPromise<GetLibraryItemAggregateType<T>>

    /**
     * Group by LibraryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryItemGroupByArgs} args - Group by arguments.
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
      T extends LibraryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LibraryItemGroupByArgs['orderBy'] }
        : { orderBy?: LibraryItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LibraryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLibraryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LibraryItem model
   */
  readonly fields: LibraryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LibraryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LibraryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    borrowings<T extends LibraryItem$borrowingsArgs<ExtArgs> = {}>(args?: Subset<T, LibraryItem$borrowingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservations<T extends LibraryItem$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, LibraryItem$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LibraryItem model
   */
  interface LibraryItemFieldRefs {
    readonly id: FieldRef<"LibraryItem", 'Int'>
    readonly title: FieldRef<"LibraryItem", 'String'>
    readonly author: FieldRef<"LibraryItem", 'String'>
    readonly publisher: FieldRef<"LibraryItem", 'String'>
    readonly isbn: FieldRef<"LibraryItem", 'String'>
    readonly itemType: FieldRef<"LibraryItem", 'ItemType'>
    readonly categories: FieldRef<"LibraryItem", 'String[]'>
    readonly languages: FieldRef<"LibraryItem", 'String[]'>
    readonly yearPublished: FieldRef<"LibraryItem", 'Int'>
    readonly edition: FieldRef<"LibraryItem", 'String'>
    readonly shelfLocation: FieldRef<"LibraryItem", 'String'>
    readonly status: FieldRef<"LibraryItem", 'ItemStatus'>
    readonly coverImage: FieldRef<"LibraryItem", 'String'>
    readonly description: FieldRef<"LibraryItem", 'String'>
    readonly isReference: FieldRef<"LibraryItem", 'Boolean'>
    readonly isDeleted: FieldRef<"LibraryItem", 'Boolean'>
    readonly createdAt: FieldRef<"LibraryItem", 'DateTime'>
    readonly updatedAt: FieldRef<"LibraryItem", 'DateTime'>
    readonly deletedAt: FieldRef<"LibraryItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LibraryItem findUnique
   */
  export type LibraryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryItem
     */
    select?: LibraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryItem
     */
    omit?: LibraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryItemInclude<ExtArgs> | null
    /**
     * Filter, which LibraryItem to fetch.
     */
    where: LibraryItemWhereUniqueInput
  }

  /**
   * LibraryItem findUniqueOrThrow
   */
  export type LibraryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryItem
     */
    select?: LibraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryItem
     */
    omit?: LibraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryItemInclude<ExtArgs> | null
    /**
     * Filter, which LibraryItem to fetch.
     */
    where: LibraryItemWhereUniqueInput
  }

  /**
   * LibraryItem findFirst
   */
  export type LibraryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryItem
     */
    select?: LibraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryItem
     */
    omit?: LibraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryItemInclude<ExtArgs> | null
    /**
     * Filter, which LibraryItem to fetch.
     */
    where?: LibraryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryItems to fetch.
     */
    orderBy?: LibraryItemOrderByWithRelationInput | LibraryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LibraryItems.
     */
    cursor?: LibraryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LibraryItems.
     */
    distinct?: LibraryItemScalarFieldEnum | LibraryItemScalarFieldEnum[]
  }

  /**
   * LibraryItem findFirstOrThrow
   */
  export type LibraryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryItem
     */
    select?: LibraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryItem
     */
    omit?: LibraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryItemInclude<ExtArgs> | null
    /**
     * Filter, which LibraryItem to fetch.
     */
    where?: LibraryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryItems to fetch.
     */
    orderBy?: LibraryItemOrderByWithRelationInput | LibraryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LibraryItems.
     */
    cursor?: LibraryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LibraryItems.
     */
    distinct?: LibraryItemScalarFieldEnum | LibraryItemScalarFieldEnum[]
  }

  /**
   * LibraryItem findMany
   */
  export type LibraryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryItem
     */
    select?: LibraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryItem
     */
    omit?: LibraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryItemInclude<ExtArgs> | null
    /**
     * Filter, which LibraryItems to fetch.
     */
    where?: LibraryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryItems to fetch.
     */
    orderBy?: LibraryItemOrderByWithRelationInput | LibraryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LibraryItems.
     */
    cursor?: LibraryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryItems.
     */
    skip?: number
    distinct?: LibraryItemScalarFieldEnum | LibraryItemScalarFieldEnum[]
  }

  /**
   * LibraryItem create
   */
  export type LibraryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryItem
     */
    select?: LibraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryItem
     */
    omit?: LibraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryItemInclude<ExtArgs> | null
    /**
     * The data needed to create a LibraryItem.
     */
    data: XOR<LibraryItemCreateInput, LibraryItemUncheckedCreateInput>
  }

  /**
   * LibraryItem createMany
   */
  export type LibraryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LibraryItems.
     */
    data: LibraryItemCreateManyInput | LibraryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LibraryItem createManyAndReturn
   */
  export type LibraryItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryItem
     */
    select?: LibraryItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryItem
     */
    omit?: LibraryItemOmit<ExtArgs> | null
    /**
     * The data used to create many LibraryItems.
     */
    data: LibraryItemCreateManyInput | LibraryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LibraryItem update
   */
  export type LibraryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryItem
     */
    select?: LibraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryItem
     */
    omit?: LibraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryItemInclude<ExtArgs> | null
    /**
     * The data needed to update a LibraryItem.
     */
    data: XOR<LibraryItemUpdateInput, LibraryItemUncheckedUpdateInput>
    /**
     * Choose, which LibraryItem to update.
     */
    where: LibraryItemWhereUniqueInput
  }

  /**
   * LibraryItem updateMany
   */
  export type LibraryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LibraryItems.
     */
    data: XOR<LibraryItemUpdateManyMutationInput, LibraryItemUncheckedUpdateManyInput>
    /**
     * Filter which LibraryItems to update
     */
    where?: LibraryItemWhereInput
    /**
     * Limit how many LibraryItems to update.
     */
    limit?: number
  }

  /**
   * LibraryItem updateManyAndReturn
   */
  export type LibraryItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryItem
     */
    select?: LibraryItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryItem
     */
    omit?: LibraryItemOmit<ExtArgs> | null
    /**
     * The data used to update LibraryItems.
     */
    data: XOR<LibraryItemUpdateManyMutationInput, LibraryItemUncheckedUpdateManyInput>
    /**
     * Filter which LibraryItems to update
     */
    where?: LibraryItemWhereInput
    /**
     * Limit how many LibraryItems to update.
     */
    limit?: number
  }

  /**
   * LibraryItem upsert
   */
  export type LibraryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryItem
     */
    select?: LibraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryItem
     */
    omit?: LibraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryItemInclude<ExtArgs> | null
    /**
     * The filter to search for the LibraryItem to update in case it exists.
     */
    where: LibraryItemWhereUniqueInput
    /**
     * In case the LibraryItem found by the `where` argument doesn't exist, create a new LibraryItem with this data.
     */
    create: XOR<LibraryItemCreateInput, LibraryItemUncheckedCreateInput>
    /**
     * In case the LibraryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LibraryItemUpdateInput, LibraryItemUncheckedUpdateInput>
  }

  /**
   * LibraryItem delete
   */
  export type LibraryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryItem
     */
    select?: LibraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryItem
     */
    omit?: LibraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryItemInclude<ExtArgs> | null
    /**
     * Filter which LibraryItem to delete.
     */
    where: LibraryItemWhereUniqueInput
  }

  /**
   * LibraryItem deleteMany
   */
  export type LibraryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LibraryItems to delete
     */
    where?: LibraryItemWhereInput
    /**
     * Limit how many LibraryItems to delete.
     */
    limit?: number
  }

  /**
   * LibraryItem.borrowings
   */
  export type LibraryItem$borrowingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrowing
     */
    select?: BorrowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrowing
     */
    omit?: BorrowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowingInclude<ExtArgs> | null
    where?: BorrowingWhereInput
    orderBy?: BorrowingOrderByWithRelationInput | BorrowingOrderByWithRelationInput[]
    cursor?: BorrowingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BorrowingScalarFieldEnum | BorrowingScalarFieldEnum[]
  }

  /**
   * LibraryItem.reservations
   */
  export type LibraryItem$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * LibraryItem without action
   */
  export type LibraryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryItem
     */
    select?: LibraryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryItem
     */
    omit?: LibraryItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryItemInclude<ExtArgs> | null
  }


  /**
   * Model Borrowing
   */

  export type AggregateBorrowing = {
    _count: BorrowingCountAggregateOutputType | null
    _avg: BorrowingAvgAggregateOutputType | null
    _sum: BorrowingSumAggregateOutputType | null
    _min: BorrowingMinAggregateOutputType | null
    _max: BorrowingMaxAggregateOutputType | null
  }

  export type BorrowingAvgAggregateOutputType = {
    id: number | null
    maxRenewals: number | null
    renewalCount: number | null
    itemId: number | null
    userId: number | null
  }

  export type BorrowingSumAggregateOutputType = {
    id: number | null
    maxRenewals: number | null
    renewalCount: number | null
    itemId: number | null
    userId: number | null
  }

  export type BorrowingMinAggregateOutputType = {
    id: number | null
    borrowDate: Date | null
    dueDate: Date | null
    returnDate: Date | null
    renewed: boolean | null
    maxRenewals: number | null
    renewalCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    itemId: number | null
    userId: number | null
  }

  export type BorrowingMaxAggregateOutputType = {
    id: number | null
    borrowDate: Date | null
    dueDate: Date | null
    returnDate: Date | null
    renewed: boolean | null
    maxRenewals: number | null
    renewalCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    itemId: number | null
    userId: number | null
  }

  export type BorrowingCountAggregateOutputType = {
    id: number
    borrowDate: number
    dueDate: number
    returnDate: number
    renewed: number
    maxRenewals: number
    renewalCount: number
    createdAt: number
    updatedAt: number
    itemId: number
    userId: number
    _all: number
  }


  export type BorrowingAvgAggregateInputType = {
    id?: true
    maxRenewals?: true
    renewalCount?: true
    itemId?: true
    userId?: true
  }

  export type BorrowingSumAggregateInputType = {
    id?: true
    maxRenewals?: true
    renewalCount?: true
    itemId?: true
    userId?: true
  }

  export type BorrowingMinAggregateInputType = {
    id?: true
    borrowDate?: true
    dueDate?: true
    returnDate?: true
    renewed?: true
    maxRenewals?: true
    renewalCount?: true
    createdAt?: true
    updatedAt?: true
    itemId?: true
    userId?: true
  }

  export type BorrowingMaxAggregateInputType = {
    id?: true
    borrowDate?: true
    dueDate?: true
    returnDate?: true
    renewed?: true
    maxRenewals?: true
    renewalCount?: true
    createdAt?: true
    updatedAt?: true
    itemId?: true
    userId?: true
  }

  export type BorrowingCountAggregateInputType = {
    id?: true
    borrowDate?: true
    dueDate?: true
    returnDate?: true
    renewed?: true
    maxRenewals?: true
    renewalCount?: true
    createdAt?: true
    updatedAt?: true
    itemId?: true
    userId?: true
    _all?: true
  }

  export type BorrowingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Borrowing to aggregate.
     */
    where?: BorrowingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Borrowings to fetch.
     */
    orderBy?: BorrowingOrderByWithRelationInput | BorrowingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BorrowingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Borrowings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Borrowings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Borrowings
    **/
    _count?: true | BorrowingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BorrowingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BorrowingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BorrowingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BorrowingMaxAggregateInputType
  }

  export type GetBorrowingAggregateType<T extends BorrowingAggregateArgs> = {
        [P in keyof T & keyof AggregateBorrowing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBorrowing[P]>
      : GetScalarType<T[P], AggregateBorrowing[P]>
  }




  export type BorrowingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BorrowingWhereInput
    orderBy?: BorrowingOrderByWithAggregationInput | BorrowingOrderByWithAggregationInput[]
    by: BorrowingScalarFieldEnum[] | BorrowingScalarFieldEnum
    having?: BorrowingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BorrowingCountAggregateInputType | true
    _avg?: BorrowingAvgAggregateInputType
    _sum?: BorrowingSumAggregateInputType
    _min?: BorrowingMinAggregateInputType
    _max?: BorrowingMaxAggregateInputType
  }

  export type BorrowingGroupByOutputType = {
    id: number
    borrowDate: Date
    dueDate: Date
    returnDate: Date | null
    renewed: boolean
    maxRenewals: number
    renewalCount: number
    createdAt: Date
    updatedAt: Date
    itemId: number
    userId: number
    _count: BorrowingCountAggregateOutputType | null
    _avg: BorrowingAvgAggregateOutputType | null
    _sum: BorrowingSumAggregateOutputType | null
    _min: BorrowingMinAggregateOutputType | null
    _max: BorrowingMaxAggregateOutputType | null
  }

  type GetBorrowingGroupByPayload<T extends BorrowingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BorrowingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BorrowingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BorrowingGroupByOutputType[P]>
            : GetScalarType<T[P], BorrowingGroupByOutputType[P]>
        }
      >
    >


  export type BorrowingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    borrowDate?: boolean
    dueDate?: boolean
    returnDate?: boolean
    renewed?: boolean
    maxRenewals?: boolean
    renewalCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    itemId?: boolean
    userId?: boolean
    item?: boolean | LibraryItemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    fine?: boolean | Borrowing$fineArgs<ExtArgs>
  }, ExtArgs["result"]["borrowing"]>

  export type BorrowingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    borrowDate?: boolean
    dueDate?: boolean
    returnDate?: boolean
    renewed?: boolean
    maxRenewals?: boolean
    renewalCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    itemId?: boolean
    userId?: boolean
    item?: boolean | LibraryItemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["borrowing"]>

  export type BorrowingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    borrowDate?: boolean
    dueDate?: boolean
    returnDate?: boolean
    renewed?: boolean
    maxRenewals?: boolean
    renewalCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    itemId?: boolean
    userId?: boolean
    item?: boolean | LibraryItemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["borrowing"]>

  export type BorrowingSelectScalar = {
    id?: boolean
    borrowDate?: boolean
    dueDate?: boolean
    returnDate?: boolean
    renewed?: boolean
    maxRenewals?: boolean
    renewalCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    itemId?: boolean
    userId?: boolean
  }

  export type BorrowingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "borrowDate" | "dueDate" | "returnDate" | "renewed" | "maxRenewals" | "renewalCount" | "createdAt" | "updatedAt" | "itemId" | "userId", ExtArgs["result"]["borrowing"]>
  export type BorrowingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | LibraryItemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    fine?: boolean | Borrowing$fineArgs<ExtArgs>
  }
  export type BorrowingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | LibraryItemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BorrowingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | LibraryItemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BorrowingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Borrowing"
    objects: {
      item: Prisma.$LibraryItemPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      fine: Prisma.$FinePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      borrowDate: Date
      dueDate: Date
      returnDate: Date | null
      renewed: boolean
      maxRenewals: number
      renewalCount: number
      createdAt: Date
      updatedAt: Date
      itemId: number
      userId: number
    }, ExtArgs["result"]["borrowing"]>
    composites: {}
  }

  type BorrowingGetPayload<S extends boolean | null | undefined | BorrowingDefaultArgs> = $Result.GetResult<Prisma.$BorrowingPayload, S>

  type BorrowingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BorrowingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BorrowingCountAggregateInputType | true
    }

  export interface BorrowingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Borrowing'], meta: { name: 'Borrowing' } }
    /**
     * Find zero or one Borrowing that matches the filter.
     * @param {BorrowingFindUniqueArgs} args - Arguments to find a Borrowing
     * @example
     * // Get one Borrowing
     * const borrowing = await prisma.borrowing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BorrowingFindUniqueArgs>(args: SelectSubset<T, BorrowingFindUniqueArgs<ExtArgs>>): Prisma__BorrowingClient<$Result.GetResult<Prisma.$BorrowingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Borrowing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BorrowingFindUniqueOrThrowArgs} args - Arguments to find a Borrowing
     * @example
     * // Get one Borrowing
     * const borrowing = await prisma.borrowing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BorrowingFindUniqueOrThrowArgs>(args: SelectSubset<T, BorrowingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BorrowingClient<$Result.GetResult<Prisma.$BorrowingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Borrowing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowingFindFirstArgs} args - Arguments to find a Borrowing
     * @example
     * // Get one Borrowing
     * const borrowing = await prisma.borrowing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BorrowingFindFirstArgs>(args?: SelectSubset<T, BorrowingFindFirstArgs<ExtArgs>>): Prisma__BorrowingClient<$Result.GetResult<Prisma.$BorrowingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Borrowing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowingFindFirstOrThrowArgs} args - Arguments to find a Borrowing
     * @example
     * // Get one Borrowing
     * const borrowing = await prisma.borrowing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BorrowingFindFirstOrThrowArgs>(args?: SelectSubset<T, BorrowingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BorrowingClient<$Result.GetResult<Prisma.$BorrowingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Borrowings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Borrowings
     * const borrowings = await prisma.borrowing.findMany()
     * 
     * // Get first 10 Borrowings
     * const borrowings = await prisma.borrowing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const borrowingWithIdOnly = await prisma.borrowing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BorrowingFindManyArgs>(args?: SelectSubset<T, BorrowingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Borrowing.
     * @param {BorrowingCreateArgs} args - Arguments to create a Borrowing.
     * @example
     * // Create one Borrowing
     * const Borrowing = await prisma.borrowing.create({
     *   data: {
     *     // ... data to create a Borrowing
     *   }
     * })
     * 
     */
    create<T extends BorrowingCreateArgs>(args: SelectSubset<T, BorrowingCreateArgs<ExtArgs>>): Prisma__BorrowingClient<$Result.GetResult<Prisma.$BorrowingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Borrowings.
     * @param {BorrowingCreateManyArgs} args - Arguments to create many Borrowings.
     * @example
     * // Create many Borrowings
     * const borrowing = await prisma.borrowing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BorrowingCreateManyArgs>(args?: SelectSubset<T, BorrowingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Borrowings and returns the data saved in the database.
     * @param {BorrowingCreateManyAndReturnArgs} args - Arguments to create many Borrowings.
     * @example
     * // Create many Borrowings
     * const borrowing = await prisma.borrowing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Borrowings and only return the `id`
     * const borrowingWithIdOnly = await prisma.borrowing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BorrowingCreateManyAndReturnArgs>(args?: SelectSubset<T, BorrowingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Borrowing.
     * @param {BorrowingDeleteArgs} args - Arguments to delete one Borrowing.
     * @example
     * // Delete one Borrowing
     * const Borrowing = await prisma.borrowing.delete({
     *   where: {
     *     // ... filter to delete one Borrowing
     *   }
     * })
     * 
     */
    delete<T extends BorrowingDeleteArgs>(args: SelectSubset<T, BorrowingDeleteArgs<ExtArgs>>): Prisma__BorrowingClient<$Result.GetResult<Prisma.$BorrowingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Borrowing.
     * @param {BorrowingUpdateArgs} args - Arguments to update one Borrowing.
     * @example
     * // Update one Borrowing
     * const borrowing = await prisma.borrowing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BorrowingUpdateArgs>(args: SelectSubset<T, BorrowingUpdateArgs<ExtArgs>>): Prisma__BorrowingClient<$Result.GetResult<Prisma.$BorrowingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Borrowings.
     * @param {BorrowingDeleteManyArgs} args - Arguments to filter Borrowings to delete.
     * @example
     * // Delete a few Borrowings
     * const { count } = await prisma.borrowing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BorrowingDeleteManyArgs>(args?: SelectSubset<T, BorrowingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Borrowings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Borrowings
     * const borrowing = await prisma.borrowing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BorrowingUpdateManyArgs>(args: SelectSubset<T, BorrowingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Borrowings and returns the data updated in the database.
     * @param {BorrowingUpdateManyAndReturnArgs} args - Arguments to update many Borrowings.
     * @example
     * // Update many Borrowings
     * const borrowing = await prisma.borrowing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Borrowings and only return the `id`
     * const borrowingWithIdOnly = await prisma.borrowing.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BorrowingUpdateManyAndReturnArgs>(args: SelectSubset<T, BorrowingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Borrowing.
     * @param {BorrowingUpsertArgs} args - Arguments to update or create a Borrowing.
     * @example
     * // Update or create a Borrowing
     * const borrowing = await prisma.borrowing.upsert({
     *   create: {
     *     // ... data to create a Borrowing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Borrowing we want to update
     *   }
     * })
     */
    upsert<T extends BorrowingUpsertArgs>(args: SelectSubset<T, BorrowingUpsertArgs<ExtArgs>>): Prisma__BorrowingClient<$Result.GetResult<Prisma.$BorrowingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Borrowings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowingCountArgs} args - Arguments to filter Borrowings to count.
     * @example
     * // Count the number of Borrowings
     * const count = await prisma.borrowing.count({
     *   where: {
     *     // ... the filter for the Borrowings we want to count
     *   }
     * })
    **/
    count<T extends BorrowingCountArgs>(
      args?: Subset<T, BorrowingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BorrowingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Borrowing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BorrowingAggregateArgs>(args: Subset<T, BorrowingAggregateArgs>): Prisma.PrismaPromise<GetBorrowingAggregateType<T>>

    /**
     * Group by Borrowing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowingGroupByArgs} args - Group by arguments.
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
      T extends BorrowingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BorrowingGroupByArgs['orderBy'] }
        : { orderBy?: BorrowingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BorrowingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBorrowingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Borrowing model
   */
  readonly fields: BorrowingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Borrowing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BorrowingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends LibraryItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LibraryItemDefaultArgs<ExtArgs>>): Prisma__LibraryItemClient<$Result.GetResult<Prisma.$LibraryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fine<T extends Borrowing$fineArgs<ExtArgs> = {}>(args?: Subset<T, Borrowing$fineArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Borrowing model
   */
  interface BorrowingFieldRefs {
    readonly id: FieldRef<"Borrowing", 'Int'>
    readonly borrowDate: FieldRef<"Borrowing", 'DateTime'>
    readonly dueDate: FieldRef<"Borrowing", 'DateTime'>
    readonly returnDate: FieldRef<"Borrowing", 'DateTime'>
    readonly renewed: FieldRef<"Borrowing", 'Boolean'>
    readonly maxRenewals: FieldRef<"Borrowing", 'Int'>
    readonly renewalCount: FieldRef<"Borrowing", 'Int'>
    readonly createdAt: FieldRef<"Borrowing", 'DateTime'>
    readonly updatedAt: FieldRef<"Borrowing", 'DateTime'>
    readonly itemId: FieldRef<"Borrowing", 'Int'>
    readonly userId: FieldRef<"Borrowing", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Borrowing findUnique
   */
  export type BorrowingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrowing
     */
    select?: BorrowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrowing
     */
    omit?: BorrowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowingInclude<ExtArgs> | null
    /**
     * Filter, which Borrowing to fetch.
     */
    where: BorrowingWhereUniqueInput
  }

  /**
   * Borrowing findUniqueOrThrow
   */
  export type BorrowingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrowing
     */
    select?: BorrowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrowing
     */
    omit?: BorrowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowingInclude<ExtArgs> | null
    /**
     * Filter, which Borrowing to fetch.
     */
    where: BorrowingWhereUniqueInput
  }

  /**
   * Borrowing findFirst
   */
  export type BorrowingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrowing
     */
    select?: BorrowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrowing
     */
    omit?: BorrowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowingInclude<ExtArgs> | null
    /**
     * Filter, which Borrowing to fetch.
     */
    where?: BorrowingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Borrowings to fetch.
     */
    orderBy?: BorrowingOrderByWithRelationInput | BorrowingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Borrowings.
     */
    cursor?: BorrowingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Borrowings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Borrowings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Borrowings.
     */
    distinct?: BorrowingScalarFieldEnum | BorrowingScalarFieldEnum[]
  }

  /**
   * Borrowing findFirstOrThrow
   */
  export type BorrowingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrowing
     */
    select?: BorrowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrowing
     */
    omit?: BorrowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowingInclude<ExtArgs> | null
    /**
     * Filter, which Borrowing to fetch.
     */
    where?: BorrowingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Borrowings to fetch.
     */
    orderBy?: BorrowingOrderByWithRelationInput | BorrowingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Borrowings.
     */
    cursor?: BorrowingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Borrowings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Borrowings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Borrowings.
     */
    distinct?: BorrowingScalarFieldEnum | BorrowingScalarFieldEnum[]
  }

  /**
   * Borrowing findMany
   */
  export type BorrowingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrowing
     */
    select?: BorrowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrowing
     */
    omit?: BorrowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowingInclude<ExtArgs> | null
    /**
     * Filter, which Borrowings to fetch.
     */
    where?: BorrowingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Borrowings to fetch.
     */
    orderBy?: BorrowingOrderByWithRelationInput | BorrowingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Borrowings.
     */
    cursor?: BorrowingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Borrowings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Borrowings.
     */
    skip?: number
    distinct?: BorrowingScalarFieldEnum | BorrowingScalarFieldEnum[]
  }

  /**
   * Borrowing create
   */
  export type BorrowingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrowing
     */
    select?: BorrowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrowing
     */
    omit?: BorrowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowingInclude<ExtArgs> | null
    /**
     * The data needed to create a Borrowing.
     */
    data: XOR<BorrowingCreateInput, BorrowingUncheckedCreateInput>
  }

  /**
   * Borrowing createMany
   */
  export type BorrowingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Borrowings.
     */
    data: BorrowingCreateManyInput | BorrowingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Borrowing createManyAndReturn
   */
  export type BorrowingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrowing
     */
    select?: BorrowingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Borrowing
     */
    omit?: BorrowingOmit<ExtArgs> | null
    /**
     * The data used to create many Borrowings.
     */
    data: BorrowingCreateManyInput | BorrowingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Borrowing update
   */
  export type BorrowingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrowing
     */
    select?: BorrowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrowing
     */
    omit?: BorrowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowingInclude<ExtArgs> | null
    /**
     * The data needed to update a Borrowing.
     */
    data: XOR<BorrowingUpdateInput, BorrowingUncheckedUpdateInput>
    /**
     * Choose, which Borrowing to update.
     */
    where: BorrowingWhereUniqueInput
  }

  /**
   * Borrowing updateMany
   */
  export type BorrowingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Borrowings.
     */
    data: XOR<BorrowingUpdateManyMutationInput, BorrowingUncheckedUpdateManyInput>
    /**
     * Filter which Borrowings to update
     */
    where?: BorrowingWhereInput
    /**
     * Limit how many Borrowings to update.
     */
    limit?: number
  }

  /**
   * Borrowing updateManyAndReturn
   */
  export type BorrowingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrowing
     */
    select?: BorrowingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Borrowing
     */
    omit?: BorrowingOmit<ExtArgs> | null
    /**
     * The data used to update Borrowings.
     */
    data: XOR<BorrowingUpdateManyMutationInput, BorrowingUncheckedUpdateManyInput>
    /**
     * Filter which Borrowings to update
     */
    where?: BorrowingWhereInput
    /**
     * Limit how many Borrowings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Borrowing upsert
   */
  export type BorrowingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrowing
     */
    select?: BorrowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrowing
     */
    omit?: BorrowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowingInclude<ExtArgs> | null
    /**
     * The filter to search for the Borrowing to update in case it exists.
     */
    where: BorrowingWhereUniqueInput
    /**
     * In case the Borrowing found by the `where` argument doesn't exist, create a new Borrowing with this data.
     */
    create: XOR<BorrowingCreateInput, BorrowingUncheckedCreateInput>
    /**
     * In case the Borrowing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BorrowingUpdateInput, BorrowingUncheckedUpdateInput>
  }

  /**
   * Borrowing delete
   */
  export type BorrowingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrowing
     */
    select?: BorrowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrowing
     */
    omit?: BorrowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowingInclude<ExtArgs> | null
    /**
     * Filter which Borrowing to delete.
     */
    where: BorrowingWhereUniqueInput
  }

  /**
   * Borrowing deleteMany
   */
  export type BorrowingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Borrowings to delete
     */
    where?: BorrowingWhereInput
    /**
     * Limit how many Borrowings to delete.
     */
    limit?: number
  }

  /**
   * Borrowing.fine
   */
  export type Borrowing$fineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    where?: FineWhereInput
  }

  /**
   * Borrowing without action
   */
  export type BorrowingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Borrowing
     */
    select?: BorrowingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Borrowing
     */
    omit?: BorrowingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BorrowingInclude<ExtArgs> | null
  }


  /**
   * Model BorrowingRule
   */

  export type AggregateBorrowingRule = {
    _count: BorrowingRuleCountAggregateOutputType | null
    _avg: BorrowingRuleAvgAggregateOutputType | null
    _sum: BorrowingRuleSumAggregateOutputType | null
    _min: BorrowingRuleMinAggregateOutputType | null
    _max: BorrowingRuleMaxAggregateOutputType | null
  }

  export type BorrowingRuleAvgAggregateOutputType = {
    id: number | null
    maxLoanDays: number | null
    maxRenewals: number | null
    finePerDay: number | null
  }

  export type BorrowingRuleSumAggregateOutputType = {
    id: number | null
    maxLoanDays: number | null
    maxRenewals: number | null
    finePerDay: number | null
  }

  export type BorrowingRuleMinAggregateOutputType = {
    id: number | null
    itemType: $Enums.ItemType | null
    maxLoanDays: number | null
    maxRenewals: number | null
    finePerDay: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BorrowingRuleMaxAggregateOutputType = {
    id: number | null
    itemType: $Enums.ItemType | null
    maxLoanDays: number | null
    maxRenewals: number | null
    finePerDay: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BorrowingRuleCountAggregateOutputType = {
    id: number
    itemType: number
    maxLoanDays: number
    maxRenewals: number
    finePerDay: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BorrowingRuleAvgAggregateInputType = {
    id?: true
    maxLoanDays?: true
    maxRenewals?: true
    finePerDay?: true
  }

  export type BorrowingRuleSumAggregateInputType = {
    id?: true
    maxLoanDays?: true
    maxRenewals?: true
    finePerDay?: true
  }

  export type BorrowingRuleMinAggregateInputType = {
    id?: true
    itemType?: true
    maxLoanDays?: true
    maxRenewals?: true
    finePerDay?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BorrowingRuleMaxAggregateInputType = {
    id?: true
    itemType?: true
    maxLoanDays?: true
    maxRenewals?: true
    finePerDay?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BorrowingRuleCountAggregateInputType = {
    id?: true
    itemType?: true
    maxLoanDays?: true
    maxRenewals?: true
    finePerDay?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BorrowingRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BorrowingRule to aggregate.
     */
    where?: BorrowingRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BorrowingRules to fetch.
     */
    orderBy?: BorrowingRuleOrderByWithRelationInput | BorrowingRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BorrowingRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BorrowingRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BorrowingRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BorrowingRules
    **/
    _count?: true | BorrowingRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BorrowingRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BorrowingRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BorrowingRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BorrowingRuleMaxAggregateInputType
  }

  export type GetBorrowingRuleAggregateType<T extends BorrowingRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateBorrowingRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBorrowingRule[P]>
      : GetScalarType<T[P], AggregateBorrowingRule[P]>
  }




  export type BorrowingRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BorrowingRuleWhereInput
    orderBy?: BorrowingRuleOrderByWithAggregationInput | BorrowingRuleOrderByWithAggregationInput[]
    by: BorrowingRuleScalarFieldEnum[] | BorrowingRuleScalarFieldEnum
    having?: BorrowingRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BorrowingRuleCountAggregateInputType | true
    _avg?: BorrowingRuleAvgAggregateInputType
    _sum?: BorrowingRuleSumAggregateInputType
    _min?: BorrowingRuleMinAggregateInputType
    _max?: BorrowingRuleMaxAggregateInputType
  }

  export type BorrowingRuleGroupByOutputType = {
    id: number
    itemType: $Enums.ItemType
    maxLoanDays: number
    maxRenewals: number
    finePerDay: number
    createdAt: Date
    updatedAt: Date
    _count: BorrowingRuleCountAggregateOutputType | null
    _avg: BorrowingRuleAvgAggregateOutputType | null
    _sum: BorrowingRuleSumAggregateOutputType | null
    _min: BorrowingRuleMinAggregateOutputType | null
    _max: BorrowingRuleMaxAggregateOutputType | null
  }

  type GetBorrowingRuleGroupByPayload<T extends BorrowingRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BorrowingRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BorrowingRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BorrowingRuleGroupByOutputType[P]>
            : GetScalarType<T[P], BorrowingRuleGroupByOutputType[P]>
        }
      >
    >


  export type BorrowingRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemType?: boolean
    maxLoanDays?: boolean
    maxRenewals?: boolean
    finePerDay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["borrowingRule"]>

  export type BorrowingRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemType?: boolean
    maxLoanDays?: boolean
    maxRenewals?: boolean
    finePerDay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["borrowingRule"]>

  export type BorrowingRuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemType?: boolean
    maxLoanDays?: boolean
    maxRenewals?: boolean
    finePerDay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["borrowingRule"]>

  export type BorrowingRuleSelectScalar = {
    id?: boolean
    itemType?: boolean
    maxLoanDays?: boolean
    maxRenewals?: boolean
    finePerDay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BorrowingRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "itemType" | "maxLoanDays" | "maxRenewals" | "finePerDay" | "createdAt" | "updatedAt", ExtArgs["result"]["borrowingRule"]>

  export type $BorrowingRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BorrowingRule"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      itemType: $Enums.ItemType
      maxLoanDays: number
      maxRenewals: number
      finePerDay: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["borrowingRule"]>
    composites: {}
  }

  type BorrowingRuleGetPayload<S extends boolean | null | undefined | BorrowingRuleDefaultArgs> = $Result.GetResult<Prisma.$BorrowingRulePayload, S>

  type BorrowingRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BorrowingRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BorrowingRuleCountAggregateInputType | true
    }

  export interface BorrowingRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BorrowingRule'], meta: { name: 'BorrowingRule' } }
    /**
     * Find zero or one BorrowingRule that matches the filter.
     * @param {BorrowingRuleFindUniqueArgs} args - Arguments to find a BorrowingRule
     * @example
     * // Get one BorrowingRule
     * const borrowingRule = await prisma.borrowingRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BorrowingRuleFindUniqueArgs>(args: SelectSubset<T, BorrowingRuleFindUniqueArgs<ExtArgs>>): Prisma__BorrowingRuleClient<$Result.GetResult<Prisma.$BorrowingRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BorrowingRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BorrowingRuleFindUniqueOrThrowArgs} args - Arguments to find a BorrowingRule
     * @example
     * // Get one BorrowingRule
     * const borrowingRule = await prisma.borrowingRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BorrowingRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, BorrowingRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BorrowingRuleClient<$Result.GetResult<Prisma.$BorrowingRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BorrowingRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowingRuleFindFirstArgs} args - Arguments to find a BorrowingRule
     * @example
     * // Get one BorrowingRule
     * const borrowingRule = await prisma.borrowingRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BorrowingRuleFindFirstArgs>(args?: SelectSubset<T, BorrowingRuleFindFirstArgs<ExtArgs>>): Prisma__BorrowingRuleClient<$Result.GetResult<Prisma.$BorrowingRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BorrowingRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowingRuleFindFirstOrThrowArgs} args - Arguments to find a BorrowingRule
     * @example
     * // Get one BorrowingRule
     * const borrowingRule = await prisma.borrowingRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BorrowingRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, BorrowingRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__BorrowingRuleClient<$Result.GetResult<Prisma.$BorrowingRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BorrowingRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowingRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BorrowingRules
     * const borrowingRules = await prisma.borrowingRule.findMany()
     * 
     * // Get first 10 BorrowingRules
     * const borrowingRules = await prisma.borrowingRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const borrowingRuleWithIdOnly = await prisma.borrowingRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BorrowingRuleFindManyArgs>(args?: SelectSubset<T, BorrowingRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowingRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BorrowingRule.
     * @param {BorrowingRuleCreateArgs} args - Arguments to create a BorrowingRule.
     * @example
     * // Create one BorrowingRule
     * const BorrowingRule = await prisma.borrowingRule.create({
     *   data: {
     *     // ... data to create a BorrowingRule
     *   }
     * })
     * 
     */
    create<T extends BorrowingRuleCreateArgs>(args: SelectSubset<T, BorrowingRuleCreateArgs<ExtArgs>>): Prisma__BorrowingRuleClient<$Result.GetResult<Prisma.$BorrowingRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BorrowingRules.
     * @param {BorrowingRuleCreateManyArgs} args - Arguments to create many BorrowingRules.
     * @example
     * // Create many BorrowingRules
     * const borrowingRule = await prisma.borrowingRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BorrowingRuleCreateManyArgs>(args?: SelectSubset<T, BorrowingRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BorrowingRules and returns the data saved in the database.
     * @param {BorrowingRuleCreateManyAndReturnArgs} args - Arguments to create many BorrowingRules.
     * @example
     * // Create many BorrowingRules
     * const borrowingRule = await prisma.borrowingRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BorrowingRules and only return the `id`
     * const borrowingRuleWithIdOnly = await prisma.borrowingRule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BorrowingRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, BorrowingRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowingRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BorrowingRule.
     * @param {BorrowingRuleDeleteArgs} args - Arguments to delete one BorrowingRule.
     * @example
     * // Delete one BorrowingRule
     * const BorrowingRule = await prisma.borrowingRule.delete({
     *   where: {
     *     // ... filter to delete one BorrowingRule
     *   }
     * })
     * 
     */
    delete<T extends BorrowingRuleDeleteArgs>(args: SelectSubset<T, BorrowingRuleDeleteArgs<ExtArgs>>): Prisma__BorrowingRuleClient<$Result.GetResult<Prisma.$BorrowingRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BorrowingRule.
     * @param {BorrowingRuleUpdateArgs} args - Arguments to update one BorrowingRule.
     * @example
     * // Update one BorrowingRule
     * const borrowingRule = await prisma.borrowingRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BorrowingRuleUpdateArgs>(args: SelectSubset<T, BorrowingRuleUpdateArgs<ExtArgs>>): Prisma__BorrowingRuleClient<$Result.GetResult<Prisma.$BorrowingRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BorrowingRules.
     * @param {BorrowingRuleDeleteManyArgs} args - Arguments to filter BorrowingRules to delete.
     * @example
     * // Delete a few BorrowingRules
     * const { count } = await prisma.borrowingRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BorrowingRuleDeleteManyArgs>(args?: SelectSubset<T, BorrowingRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BorrowingRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowingRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BorrowingRules
     * const borrowingRule = await prisma.borrowingRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BorrowingRuleUpdateManyArgs>(args: SelectSubset<T, BorrowingRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BorrowingRules and returns the data updated in the database.
     * @param {BorrowingRuleUpdateManyAndReturnArgs} args - Arguments to update many BorrowingRules.
     * @example
     * // Update many BorrowingRules
     * const borrowingRule = await prisma.borrowingRule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BorrowingRules and only return the `id`
     * const borrowingRuleWithIdOnly = await prisma.borrowingRule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BorrowingRuleUpdateManyAndReturnArgs>(args: SelectSubset<T, BorrowingRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BorrowingRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BorrowingRule.
     * @param {BorrowingRuleUpsertArgs} args - Arguments to update or create a BorrowingRule.
     * @example
     * // Update or create a BorrowingRule
     * const borrowingRule = await prisma.borrowingRule.upsert({
     *   create: {
     *     // ... data to create a BorrowingRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BorrowingRule we want to update
     *   }
     * })
     */
    upsert<T extends BorrowingRuleUpsertArgs>(args: SelectSubset<T, BorrowingRuleUpsertArgs<ExtArgs>>): Prisma__BorrowingRuleClient<$Result.GetResult<Prisma.$BorrowingRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BorrowingRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowingRuleCountArgs} args - Arguments to filter BorrowingRules to count.
     * @example
     * // Count the number of BorrowingRules
     * const count = await prisma.borrowingRule.count({
     *   where: {
     *     // ... the filter for the BorrowingRules we want to count
     *   }
     * })
    **/
    count<T extends BorrowingRuleCountArgs>(
      args?: Subset<T, BorrowingRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BorrowingRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BorrowingRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowingRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BorrowingRuleAggregateArgs>(args: Subset<T, BorrowingRuleAggregateArgs>): Prisma.PrismaPromise<GetBorrowingRuleAggregateType<T>>

    /**
     * Group by BorrowingRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowingRuleGroupByArgs} args - Group by arguments.
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
      T extends BorrowingRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BorrowingRuleGroupByArgs['orderBy'] }
        : { orderBy?: BorrowingRuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BorrowingRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBorrowingRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BorrowingRule model
   */
  readonly fields: BorrowingRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BorrowingRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BorrowingRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the BorrowingRule model
   */
  interface BorrowingRuleFieldRefs {
    readonly id: FieldRef<"BorrowingRule", 'Int'>
    readonly itemType: FieldRef<"BorrowingRule", 'ItemType'>
    readonly maxLoanDays: FieldRef<"BorrowingRule", 'Int'>
    readonly maxRenewals: FieldRef<"BorrowingRule", 'Int'>
    readonly finePerDay: FieldRef<"BorrowingRule", 'Float'>
    readonly createdAt: FieldRef<"BorrowingRule", 'DateTime'>
    readonly updatedAt: FieldRef<"BorrowingRule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BorrowingRule findUnique
   */
  export type BorrowingRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowingRule
     */
    select?: BorrowingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowingRule
     */
    omit?: BorrowingRuleOmit<ExtArgs> | null
    /**
     * Filter, which BorrowingRule to fetch.
     */
    where: BorrowingRuleWhereUniqueInput
  }

  /**
   * BorrowingRule findUniqueOrThrow
   */
  export type BorrowingRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowingRule
     */
    select?: BorrowingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowingRule
     */
    omit?: BorrowingRuleOmit<ExtArgs> | null
    /**
     * Filter, which BorrowingRule to fetch.
     */
    where: BorrowingRuleWhereUniqueInput
  }

  /**
   * BorrowingRule findFirst
   */
  export type BorrowingRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowingRule
     */
    select?: BorrowingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowingRule
     */
    omit?: BorrowingRuleOmit<ExtArgs> | null
    /**
     * Filter, which BorrowingRule to fetch.
     */
    where?: BorrowingRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BorrowingRules to fetch.
     */
    orderBy?: BorrowingRuleOrderByWithRelationInput | BorrowingRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BorrowingRules.
     */
    cursor?: BorrowingRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BorrowingRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BorrowingRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BorrowingRules.
     */
    distinct?: BorrowingRuleScalarFieldEnum | BorrowingRuleScalarFieldEnum[]
  }

  /**
   * BorrowingRule findFirstOrThrow
   */
  export type BorrowingRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowingRule
     */
    select?: BorrowingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowingRule
     */
    omit?: BorrowingRuleOmit<ExtArgs> | null
    /**
     * Filter, which BorrowingRule to fetch.
     */
    where?: BorrowingRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BorrowingRules to fetch.
     */
    orderBy?: BorrowingRuleOrderByWithRelationInput | BorrowingRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BorrowingRules.
     */
    cursor?: BorrowingRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BorrowingRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BorrowingRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BorrowingRules.
     */
    distinct?: BorrowingRuleScalarFieldEnum | BorrowingRuleScalarFieldEnum[]
  }

  /**
   * BorrowingRule findMany
   */
  export type BorrowingRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowingRule
     */
    select?: BorrowingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowingRule
     */
    omit?: BorrowingRuleOmit<ExtArgs> | null
    /**
     * Filter, which BorrowingRules to fetch.
     */
    where?: BorrowingRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BorrowingRules to fetch.
     */
    orderBy?: BorrowingRuleOrderByWithRelationInput | BorrowingRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BorrowingRules.
     */
    cursor?: BorrowingRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BorrowingRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BorrowingRules.
     */
    skip?: number
    distinct?: BorrowingRuleScalarFieldEnum | BorrowingRuleScalarFieldEnum[]
  }

  /**
   * BorrowingRule create
   */
  export type BorrowingRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowingRule
     */
    select?: BorrowingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowingRule
     */
    omit?: BorrowingRuleOmit<ExtArgs> | null
    /**
     * The data needed to create a BorrowingRule.
     */
    data: XOR<BorrowingRuleCreateInput, BorrowingRuleUncheckedCreateInput>
  }

  /**
   * BorrowingRule createMany
   */
  export type BorrowingRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BorrowingRules.
     */
    data: BorrowingRuleCreateManyInput | BorrowingRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BorrowingRule createManyAndReturn
   */
  export type BorrowingRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowingRule
     */
    select?: BorrowingRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowingRule
     */
    omit?: BorrowingRuleOmit<ExtArgs> | null
    /**
     * The data used to create many BorrowingRules.
     */
    data: BorrowingRuleCreateManyInput | BorrowingRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BorrowingRule update
   */
  export type BorrowingRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowingRule
     */
    select?: BorrowingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowingRule
     */
    omit?: BorrowingRuleOmit<ExtArgs> | null
    /**
     * The data needed to update a BorrowingRule.
     */
    data: XOR<BorrowingRuleUpdateInput, BorrowingRuleUncheckedUpdateInput>
    /**
     * Choose, which BorrowingRule to update.
     */
    where: BorrowingRuleWhereUniqueInput
  }

  /**
   * BorrowingRule updateMany
   */
  export type BorrowingRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BorrowingRules.
     */
    data: XOR<BorrowingRuleUpdateManyMutationInput, BorrowingRuleUncheckedUpdateManyInput>
    /**
     * Filter which BorrowingRules to update
     */
    where?: BorrowingRuleWhereInput
    /**
     * Limit how many BorrowingRules to update.
     */
    limit?: number
  }

  /**
   * BorrowingRule updateManyAndReturn
   */
  export type BorrowingRuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowingRule
     */
    select?: BorrowingRuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowingRule
     */
    omit?: BorrowingRuleOmit<ExtArgs> | null
    /**
     * The data used to update BorrowingRules.
     */
    data: XOR<BorrowingRuleUpdateManyMutationInput, BorrowingRuleUncheckedUpdateManyInput>
    /**
     * Filter which BorrowingRules to update
     */
    where?: BorrowingRuleWhereInput
    /**
     * Limit how many BorrowingRules to update.
     */
    limit?: number
  }

  /**
   * BorrowingRule upsert
   */
  export type BorrowingRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowingRule
     */
    select?: BorrowingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowingRule
     */
    omit?: BorrowingRuleOmit<ExtArgs> | null
    /**
     * The filter to search for the BorrowingRule to update in case it exists.
     */
    where: BorrowingRuleWhereUniqueInput
    /**
     * In case the BorrowingRule found by the `where` argument doesn't exist, create a new BorrowingRule with this data.
     */
    create: XOR<BorrowingRuleCreateInput, BorrowingRuleUncheckedCreateInput>
    /**
     * In case the BorrowingRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BorrowingRuleUpdateInput, BorrowingRuleUncheckedUpdateInput>
  }

  /**
   * BorrowingRule delete
   */
  export type BorrowingRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowingRule
     */
    select?: BorrowingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowingRule
     */
    omit?: BorrowingRuleOmit<ExtArgs> | null
    /**
     * Filter which BorrowingRule to delete.
     */
    where: BorrowingRuleWhereUniqueInput
  }

  /**
   * BorrowingRule deleteMany
   */
  export type BorrowingRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BorrowingRules to delete
     */
    where?: BorrowingRuleWhereInput
    /**
     * Limit how many BorrowingRules to delete.
     */
    limit?: number
  }

  /**
   * BorrowingRule without action
   */
  export type BorrowingRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BorrowingRule
     */
    select?: BorrowingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BorrowingRule
     */
    omit?: BorrowingRuleOmit<ExtArgs> | null
  }


  /**
   * Model Reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationAvgAggregateOutputType = {
    id: number | null
    itemId: number | null
    userId: number | null
  }

  export type ReservationSumAggregateOutputType = {
    id: number | null
    itemId: number | null
    userId: number | null
  }

  export type ReservationMinAggregateOutputType = {
    id: number | null
    reservationDate: Date | null
    expiryDate: Date | null
    status: $Enums.ReservationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    itemId: number | null
    userId: number | null
  }

  export type ReservationMaxAggregateOutputType = {
    id: number | null
    reservationDate: Date | null
    expiryDate: Date | null
    status: $Enums.ReservationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    itemId: number | null
    userId: number | null
  }

  export type ReservationCountAggregateOutputType = {
    id: number
    reservationDate: number
    expiryDate: number
    status: number
    createdAt: number
    updatedAt: number
    itemId: number
    userId: number
    _all: number
  }


  export type ReservationAvgAggregateInputType = {
    id?: true
    itemId?: true
    userId?: true
  }

  export type ReservationSumAggregateInputType = {
    id?: true
    itemId?: true
    userId?: true
  }

  export type ReservationMinAggregateInputType = {
    id?: true
    reservationDate?: true
    expiryDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    itemId?: true
    userId?: true
  }

  export type ReservationMaxAggregateInputType = {
    id?: true
    reservationDate?: true
    expiryDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    itemId?: true
    userId?: true
  }

  export type ReservationCountAggregateInputType = {
    id?: true
    reservationDate?: true
    expiryDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    itemId?: true
    userId?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservation to aggregate.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithAggregationInput | ReservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _avg?: ReservationAvgAggregateInputType
    _sum?: ReservationSumAggregateInputType
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    id: number
    reservationDate: Date
    expiryDate: Date
    status: $Enums.ReservationStatus
    createdAt: Date
    updatedAt: Date
    itemId: number
    userId: number
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationDate?: boolean
    expiryDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    itemId?: boolean
    userId?: boolean
    item?: boolean | LibraryItemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationDate?: boolean
    expiryDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    itemId?: boolean
    userId?: boolean
    item?: boolean | LibraryItemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationDate?: boolean
    expiryDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    itemId?: boolean
    userId?: boolean
    item?: boolean | LibraryItemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectScalar = {
    id?: boolean
    reservationDate?: boolean
    expiryDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    itemId?: boolean
    userId?: boolean
  }

  export type ReservationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reservationDate" | "expiryDate" | "status" | "createdAt" | "updatedAt" | "itemId" | "userId", ExtArgs["result"]["reservation"]>
  export type ReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | LibraryItemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | LibraryItemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | LibraryItemDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {
      item: Prisma.$LibraryItemPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reservationDate: Date
      expiryDate: Date
      status: $Enums.ReservationStatus
      createdAt: Date
      updatedAt: Date
      itemId: number
      userId: number
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }

  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservation'], meta: { name: 'Reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationFindUniqueArgs>(args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationFindFirstArgs>(args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationWithIdOnly = await prisma.reservation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationFindManyArgs>(args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
     */
    create<T extends ReservationCreateArgs>(args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservations.
     * @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationCreateManyArgs>(args?: SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservations and returns the data saved in the database.
     * @param {ReservationCreateManyAndReturnArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservationCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
     */
    delete<T extends ReservationDeleteArgs>(args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationUpdateArgs>(args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationDeleteManyArgs>(args?: SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationUpdateManyArgs>(args: SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations and returns the data updated in the database.
     * @param {ReservationUpdateManyAndReturnArgs} args - Arguments to update many Reservations.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReservationUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
     */
    upsert<T extends ReservationUpsertArgs>(args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
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
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservation model
   */
  readonly fields: ReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends LibraryItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LibraryItemDefaultArgs<ExtArgs>>): Prisma__LibraryItemClient<$Result.GetResult<Prisma.$LibraryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reservation model
   */
  interface ReservationFieldRefs {
    readonly id: FieldRef<"Reservation", 'Int'>
    readonly reservationDate: FieldRef<"Reservation", 'DateTime'>
    readonly expiryDate: FieldRef<"Reservation", 'DateTime'>
    readonly status: FieldRef<"Reservation", 'ReservationStatus'>
    readonly createdAt: FieldRef<"Reservation", 'DateTime'>
    readonly updatedAt: FieldRef<"Reservation", 'DateTime'>
    readonly itemId: FieldRef<"Reservation", 'Int'>
    readonly userId: FieldRef<"Reservation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Reservation findUnique
   */
  export type ReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findFirst
   */
  export type ReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation create
   */
  export type ReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservation.
     */
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }

  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservation createManyAndReturn
   */
  export type ReservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation update
   */
  export type ReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservation.
     */
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
  }

  /**
   * Reservation updateManyAndReturn
   */
  export type ReservationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     */
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     */
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }

  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter which Reservation to delete.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to delete.
     */
    limit?: number
  }

  /**
   * Reservation without action
   */
  export type ReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
  }


  /**
   * Model Fine
   */

  export type AggregateFine = {
    _count: FineCountAggregateOutputType | null
    _avg: FineAvgAggregateOutputType | null
    _sum: FineSumAggregateOutputType | null
    _min: FineMinAggregateOutputType | null
    _max: FineMaxAggregateOutputType | null
  }

  export type FineAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
    borrowingId: number | null
  }

  export type FineSumAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
    borrowingId: number | null
  }

  export type FineMinAggregateOutputType = {
    id: number | null
    amount: number | null
    reason: string | null
    issueDate: Date | null
    paidDate: Date | null
    status: $Enums.FineStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    borrowingId: number | null
  }

  export type FineMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    reason: string | null
    issueDate: Date | null
    paidDate: Date | null
    status: $Enums.FineStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    borrowingId: number | null
  }

  export type FineCountAggregateOutputType = {
    id: number
    amount: number
    reason: number
    issueDate: number
    paidDate: number
    status: number
    createdAt: number
    updatedAt: number
    userId: number
    borrowingId: number
    _all: number
  }


  export type FineAvgAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
    borrowingId?: true
  }

  export type FineSumAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
    borrowingId?: true
  }

  export type FineMinAggregateInputType = {
    id?: true
    amount?: true
    reason?: true
    issueDate?: true
    paidDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    borrowingId?: true
  }

  export type FineMaxAggregateInputType = {
    id?: true
    amount?: true
    reason?: true
    issueDate?: true
    paidDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    borrowingId?: true
  }

  export type FineCountAggregateInputType = {
    id?: true
    amount?: true
    reason?: true
    issueDate?: true
    paidDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    borrowingId?: true
    _all?: true
  }

  export type FineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fine to aggregate.
     */
    where?: FineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fines to fetch.
     */
    orderBy?: FineOrderByWithRelationInput | FineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fines
    **/
    _count?: true | FineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FineMaxAggregateInputType
  }

  export type GetFineAggregateType<T extends FineAggregateArgs> = {
        [P in keyof T & keyof AggregateFine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFine[P]>
      : GetScalarType<T[P], AggregateFine[P]>
  }




  export type FineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FineWhereInput
    orderBy?: FineOrderByWithAggregationInput | FineOrderByWithAggregationInput[]
    by: FineScalarFieldEnum[] | FineScalarFieldEnum
    having?: FineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FineCountAggregateInputType | true
    _avg?: FineAvgAggregateInputType
    _sum?: FineSumAggregateInputType
    _min?: FineMinAggregateInputType
    _max?: FineMaxAggregateInputType
  }

  export type FineGroupByOutputType = {
    id: number
    amount: number
    reason: string
    issueDate: Date
    paidDate: Date | null
    status: $Enums.FineStatus
    createdAt: Date
    updatedAt: Date
    userId: number
    borrowingId: number
    _count: FineCountAggregateOutputType | null
    _avg: FineAvgAggregateOutputType | null
    _sum: FineSumAggregateOutputType | null
    _min: FineMinAggregateOutputType | null
    _max: FineMaxAggregateOutputType | null
  }

  type GetFineGroupByPayload<T extends FineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FineGroupByOutputType[P]>
            : GetScalarType<T[P], FineGroupByOutputType[P]>
        }
      >
    >


  export type FineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    reason?: boolean
    issueDate?: boolean
    paidDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    borrowingId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    borrowing?: boolean | BorrowingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fine"]>

  export type FineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    reason?: boolean
    issueDate?: boolean
    paidDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    borrowingId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    borrowing?: boolean | BorrowingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fine"]>

  export type FineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    reason?: boolean
    issueDate?: boolean
    paidDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    borrowingId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    borrowing?: boolean | BorrowingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fine"]>

  export type FineSelectScalar = {
    id?: boolean
    amount?: boolean
    reason?: boolean
    issueDate?: boolean
    paidDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    borrowingId?: boolean
  }

  export type FineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "reason" | "issueDate" | "paidDate" | "status" | "createdAt" | "updatedAt" | "userId" | "borrowingId", ExtArgs["result"]["fine"]>
  export type FineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    borrowing?: boolean | BorrowingDefaultArgs<ExtArgs>
  }
  export type FineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    borrowing?: boolean | BorrowingDefaultArgs<ExtArgs>
  }
  export type FineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    borrowing?: boolean | BorrowingDefaultArgs<ExtArgs>
  }

  export type $FinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fine"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      borrowing: Prisma.$BorrowingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number
      reason: string
      issueDate: Date
      paidDate: Date | null
      status: $Enums.FineStatus
      createdAt: Date
      updatedAt: Date
      userId: number
      borrowingId: number
    }, ExtArgs["result"]["fine"]>
    composites: {}
  }

  type FineGetPayload<S extends boolean | null | undefined | FineDefaultArgs> = $Result.GetResult<Prisma.$FinePayload, S>

  type FineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FineCountAggregateInputType | true
    }

  export interface FineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fine'], meta: { name: 'Fine' } }
    /**
     * Find zero or one Fine that matches the filter.
     * @param {FineFindUniqueArgs} args - Arguments to find a Fine
     * @example
     * // Get one Fine
     * const fine = await prisma.fine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FineFindUniqueArgs>(args: SelectSubset<T, FineFindUniqueArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FineFindUniqueOrThrowArgs} args - Arguments to find a Fine
     * @example
     * // Get one Fine
     * const fine = await prisma.fine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FineFindUniqueOrThrowArgs>(args: SelectSubset<T, FineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineFindFirstArgs} args - Arguments to find a Fine
     * @example
     * // Get one Fine
     * const fine = await prisma.fine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FineFindFirstArgs>(args?: SelectSubset<T, FineFindFirstArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineFindFirstOrThrowArgs} args - Arguments to find a Fine
     * @example
     * // Get one Fine
     * const fine = await prisma.fine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FineFindFirstOrThrowArgs>(args?: SelectSubset<T, FineFindFirstOrThrowArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fines
     * const fines = await prisma.fine.findMany()
     * 
     * // Get first 10 Fines
     * const fines = await prisma.fine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fineWithIdOnly = await prisma.fine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FineFindManyArgs>(args?: SelectSubset<T, FineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fine.
     * @param {FineCreateArgs} args - Arguments to create a Fine.
     * @example
     * // Create one Fine
     * const Fine = await prisma.fine.create({
     *   data: {
     *     // ... data to create a Fine
     *   }
     * })
     * 
     */
    create<T extends FineCreateArgs>(args: SelectSubset<T, FineCreateArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fines.
     * @param {FineCreateManyArgs} args - Arguments to create many Fines.
     * @example
     * // Create many Fines
     * const fine = await prisma.fine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FineCreateManyArgs>(args?: SelectSubset<T, FineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fines and returns the data saved in the database.
     * @param {FineCreateManyAndReturnArgs} args - Arguments to create many Fines.
     * @example
     * // Create many Fines
     * const fine = await prisma.fine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fines and only return the `id`
     * const fineWithIdOnly = await prisma.fine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FineCreateManyAndReturnArgs>(args?: SelectSubset<T, FineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fine.
     * @param {FineDeleteArgs} args - Arguments to delete one Fine.
     * @example
     * // Delete one Fine
     * const Fine = await prisma.fine.delete({
     *   where: {
     *     // ... filter to delete one Fine
     *   }
     * })
     * 
     */
    delete<T extends FineDeleteArgs>(args: SelectSubset<T, FineDeleteArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fine.
     * @param {FineUpdateArgs} args - Arguments to update one Fine.
     * @example
     * // Update one Fine
     * const fine = await prisma.fine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FineUpdateArgs>(args: SelectSubset<T, FineUpdateArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fines.
     * @param {FineDeleteManyArgs} args - Arguments to filter Fines to delete.
     * @example
     * // Delete a few Fines
     * const { count } = await prisma.fine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FineDeleteManyArgs>(args?: SelectSubset<T, FineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fines
     * const fine = await prisma.fine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FineUpdateManyArgs>(args: SelectSubset<T, FineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fines and returns the data updated in the database.
     * @param {FineUpdateManyAndReturnArgs} args - Arguments to update many Fines.
     * @example
     * // Update many Fines
     * const fine = await prisma.fine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fines and only return the `id`
     * const fineWithIdOnly = await prisma.fine.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FineUpdateManyAndReturnArgs>(args: SelectSubset<T, FineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fine.
     * @param {FineUpsertArgs} args - Arguments to update or create a Fine.
     * @example
     * // Update or create a Fine
     * const fine = await prisma.fine.upsert({
     *   create: {
     *     // ... data to create a Fine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fine we want to update
     *   }
     * })
     */
    upsert<T extends FineUpsertArgs>(args: SelectSubset<T, FineUpsertArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineCountArgs} args - Arguments to filter Fines to count.
     * @example
     * // Count the number of Fines
     * const count = await prisma.fine.count({
     *   where: {
     *     // ... the filter for the Fines we want to count
     *   }
     * })
    **/
    count<T extends FineCountArgs>(
      args?: Subset<T, FineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FineAggregateArgs>(args: Subset<T, FineAggregateArgs>): Prisma.PrismaPromise<GetFineAggregateType<T>>

    /**
     * Group by Fine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineGroupByArgs} args - Group by arguments.
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
      T extends FineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FineGroupByArgs['orderBy'] }
        : { orderBy?: FineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fine model
   */
  readonly fields: FineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    borrowing<T extends BorrowingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BorrowingDefaultArgs<ExtArgs>>): Prisma__BorrowingClient<$Result.GetResult<Prisma.$BorrowingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Fine model
   */
  interface FineFieldRefs {
    readonly id: FieldRef<"Fine", 'Int'>
    readonly amount: FieldRef<"Fine", 'Float'>
    readonly reason: FieldRef<"Fine", 'String'>
    readonly issueDate: FieldRef<"Fine", 'DateTime'>
    readonly paidDate: FieldRef<"Fine", 'DateTime'>
    readonly status: FieldRef<"Fine", 'FineStatus'>
    readonly createdAt: FieldRef<"Fine", 'DateTime'>
    readonly updatedAt: FieldRef<"Fine", 'DateTime'>
    readonly userId: FieldRef<"Fine", 'Int'>
    readonly borrowingId: FieldRef<"Fine", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Fine findUnique
   */
  export type FineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * Filter, which Fine to fetch.
     */
    where: FineWhereUniqueInput
  }

  /**
   * Fine findUniqueOrThrow
   */
  export type FineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * Filter, which Fine to fetch.
     */
    where: FineWhereUniqueInput
  }

  /**
   * Fine findFirst
   */
  export type FineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * Filter, which Fine to fetch.
     */
    where?: FineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fines to fetch.
     */
    orderBy?: FineOrderByWithRelationInput | FineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fines.
     */
    cursor?: FineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fines.
     */
    distinct?: FineScalarFieldEnum | FineScalarFieldEnum[]
  }

  /**
   * Fine findFirstOrThrow
   */
  export type FineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * Filter, which Fine to fetch.
     */
    where?: FineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fines to fetch.
     */
    orderBy?: FineOrderByWithRelationInput | FineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fines.
     */
    cursor?: FineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fines.
     */
    distinct?: FineScalarFieldEnum | FineScalarFieldEnum[]
  }

  /**
   * Fine findMany
   */
  export type FineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * Filter, which Fines to fetch.
     */
    where?: FineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fines to fetch.
     */
    orderBy?: FineOrderByWithRelationInput | FineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fines.
     */
    cursor?: FineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fines.
     */
    skip?: number
    distinct?: FineScalarFieldEnum | FineScalarFieldEnum[]
  }

  /**
   * Fine create
   */
  export type FineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * The data needed to create a Fine.
     */
    data: XOR<FineCreateInput, FineUncheckedCreateInput>
  }

  /**
   * Fine createMany
   */
  export type FineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fines.
     */
    data: FineCreateManyInput | FineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fine createManyAndReturn
   */
  export type FineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * The data used to create many Fines.
     */
    data: FineCreateManyInput | FineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fine update
   */
  export type FineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * The data needed to update a Fine.
     */
    data: XOR<FineUpdateInput, FineUncheckedUpdateInput>
    /**
     * Choose, which Fine to update.
     */
    where: FineWhereUniqueInput
  }

  /**
   * Fine updateMany
   */
  export type FineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fines.
     */
    data: XOR<FineUpdateManyMutationInput, FineUncheckedUpdateManyInput>
    /**
     * Filter which Fines to update
     */
    where?: FineWhereInput
    /**
     * Limit how many Fines to update.
     */
    limit?: number
  }

  /**
   * Fine updateManyAndReturn
   */
  export type FineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * The data used to update Fines.
     */
    data: XOR<FineUpdateManyMutationInput, FineUncheckedUpdateManyInput>
    /**
     * Filter which Fines to update
     */
    where?: FineWhereInput
    /**
     * Limit how many Fines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fine upsert
   */
  export type FineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * The filter to search for the Fine to update in case it exists.
     */
    where: FineWhereUniqueInput
    /**
     * In case the Fine found by the `where` argument doesn't exist, create a new Fine with this data.
     */
    create: XOR<FineCreateInput, FineUncheckedCreateInput>
    /**
     * In case the Fine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FineUpdateInput, FineUncheckedUpdateInput>
  }

  /**
   * Fine delete
   */
  export type FineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * Filter which Fine to delete.
     */
    where: FineWhereUniqueInput
  }

  /**
   * Fine deleteMany
   */
  export type FineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fines to delete
     */
    where?: FineWhereInput
    /**
     * Limit how many Fines to delete.
     */
    limit?: number
  }

  /**
   * Fine without action
   */
  export type FineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    type: $Enums.NotificationType | null
    message: string | null
    sentAt: Date | null
    read: boolean | null
    readAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    type: $Enums.NotificationType | null
    message: string | null
    sentAt: Date | null
    read: boolean | null
    readAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    type: number
    message: number
    sentAt: number
    read: number
    readAt: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    type?: true
    message?: true
    sentAt?: true
    read?: true
    readAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    type?: true
    message?: true
    sentAt?: true
    read?: true
    readAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    type?: true
    message?: true
    sentAt?: true
    read?: true
    readAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    type: $Enums.NotificationType
    message: string
    sentAt: Date
    read: boolean
    readAt: Date | null
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    message?: boolean
    sentAt?: boolean
    read?: boolean
    readAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    message?: boolean
    sentAt?: boolean
    read?: boolean
    readAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    message?: boolean
    sentAt?: boolean
    read?: boolean
    readAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    type?: boolean
    message?: boolean
    sentAt?: boolean
    read?: boolean
    readAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "message" | "sentAt" | "read" | "readAt" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.NotificationType
      message: string
      sentAt: Date
      read: boolean
      readAt: Date | null
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly sentAt: FieldRef<"Notification", 'DateTime'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly readAt: FieldRef<"Notification", 'DateTime'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly updatedAt: FieldRef<"Notification", 'DateTime'>
    readonly userId: FieldRef<"Notification", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogAvgAggregateOutputType = {
    id: number | null
    readingTime: number | null
    userId: number | null
  }

  export type BlogSumAggregateOutputType = {
    id: number | null
    readingTime: number | null
    userId: number | null
  }

  export type BlogMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    readingTime: number | null
    featuredImage: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: number | null
  }

  export type BlogMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    readingTime: number | null
    featuredImage: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: number | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    title: number
    content: number
    readingTime: number
    categories: number
    featuredImage: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    userId: number
    _all: number
  }


  export type BlogAvgAggregateInputType = {
    id?: true
    readingTime?: true
    userId?: true
  }

  export type BlogSumAggregateInputType = {
    id?: true
    readingTime?: true
    userId?: true
  }

  export type BlogMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    readingTime?: true
    featuredImage?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    readingTime?: true
    featuredImage?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    readingTime?: true
    categories?: true
    featuredImage?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog to aggregate.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithAggregationInput | BlogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _avg?: BlogAvgAggregateInputType
    _sum?: BlogSumAggregateInputType
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: number
    title: string
    content: string
    readingTime: number
    categories: string[]
    featuredImage: string | null
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    userId: number
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    readingTime?: boolean
    categories?: boolean
    featuredImage?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    readingTime?: boolean
    categories?: boolean
    featuredImage?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    readingTime?: boolean
    categories?: boolean
    featuredImage?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    readingTime?: boolean
    categories?: boolean
    featuredImage?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
  }

  export type BlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "readingTime" | "categories" | "featuredImage" | "isDeleted" | "createdAt" | "updatedAt" | "deletedAt" | "userId", ExtArgs["result"]["blog"]>
  export type BlogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BlogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      readingTime: number
      categories: string[]
      featuredImage: string | null
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      userId: number
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }

  type BlogGetPayload<S extends boolean | null | undefined | BlogDefaultArgs> = $Result.GetResult<Prisma.$BlogPayload, S>

  type BlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCountAggregateInputType | true
    }

  export interface BlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog'], meta: { name: 'Blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogFindUniqueArgs>(args: SelectSubset<T, BlogFindUniqueArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogFindFirstArgs>(args?: SelectSubset<T, BlogFindFirstArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogFindManyArgs>(args?: SelectSubset<T, BlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
     */
    create<T extends BlogCreateArgs>(args: SelectSubset<T, BlogCreateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blogs.
     * @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCreateManyArgs>(args?: SelectSubset<T, BlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blogs and returns the data saved in the database.
     * @param {BlogCreateManyAndReturnArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
     */
    delete<T extends BlogDeleteArgs>(args: SelectSubset<T, BlogDeleteArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogUpdateArgs>(args: SelectSubset<T, BlogUpdateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogDeleteManyArgs>(args?: SelectSubset<T, BlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogUpdateManyArgs>(args: SelectSubset<T, BlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs and returns the data updated in the database.
     * @param {BlogUpdateManyAndReturnArgs} args - Arguments to update many Blogs.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
     */
    upsert<T extends BlogUpsertArgs>(args: SelectSubset<T, BlogUpsertArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
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
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog model
   */
  readonly fields: BlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Blog model
   */
  interface BlogFieldRefs {
    readonly id: FieldRef<"Blog", 'Int'>
    readonly title: FieldRef<"Blog", 'String'>
    readonly content: FieldRef<"Blog", 'String'>
    readonly readingTime: FieldRef<"Blog", 'Int'>
    readonly categories: FieldRef<"Blog", 'String[]'>
    readonly featuredImage: FieldRef<"Blog", 'String'>
    readonly isDeleted: FieldRef<"Blog", 'Boolean'>
    readonly createdAt: FieldRef<"Blog", 'DateTime'>
    readonly updatedAt: FieldRef<"Blog", 'DateTime'>
    readonly deletedAt: FieldRef<"Blog", 'DateTime'>
    readonly userId: FieldRef<"Blog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findUniqueOrThrow
   */
  export type BlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findFirstOrThrow
   */
  export type BlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findMany
   */
  export type BlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog create
   */
  export type BlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to create a Blog.
     */
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }

  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog createManyAndReturn
   */
  export type BlogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Blog update
   */
  export type BlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to update a Blog.
     */
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog updateManyAndReturn
   */
  export type BlogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Blog upsert
   */
  export type BlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The filter to search for the Blog to update in case it exists.
     */
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     */
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }

  /**
   * Blog delete
   */
  export type BlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter which Blog to delete.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to delete.
     */
    limit?: number
  }

  /**
   * Blog without action
   */
  export type BlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
  }


  /**
   * Model Announcement
   */

  export type AggregateAnnouncement = {
    _count: AnnouncementCountAggregateOutputType | null
    _avg: AnnouncementAvgAggregateOutputType | null
    _sum: AnnouncementSumAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  export type AnnouncementAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AnnouncementSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AnnouncementMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: number | null
  }

  export type AnnouncementMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: number | null
  }

  export type AnnouncementCountAggregateOutputType = {
    id: number
    title: number
    content: number
    categories: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    userId: number
    _all: number
  }


  export type AnnouncementAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AnnouncementSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AnnouncementMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
  }

  export type AnnouncementMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
  }

  export type AnnouncementCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    categories?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
    _all?: true
  }

  export type AnnouncementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcement to aggregate.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Announcements
    **/
    _count?: true | AnnouncementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnnouncementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnnouncementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementMaxAggregateInputType
  }

  export type GetAnnouncementAggregateType<T extends AnnouncementAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncement[P]>
      : GetScalarType<T[P], AggregateAnnouncement[P]>
  }




  export type AnnouncementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithAggregationInput | AnnouncementOrderByWithAggregationInput[]
    by: AnnouncementScalarFieldEnum[] | AnnouncementScalarFieldEnum
    having?: AnnouncementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementCountAggregateInputType | true
    _avg?: AnnouncementAvgAggregateInputType
    _sum?: AnnouncementSumAggregateInputType
    _min?: AnnouncementMinAggregateInputType
    _max?: AnnouncementMaxAggregateInputType
  }

  export type AnnouncementGroupByOutputType = {
    id: number
    title: string
    content: string
    categories: string[]
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    userId: number
    _count: AnnouncementCountAggregateOutputType | null
    _avg: AnnouncementAvgAggregateOutputType | null
    _sum: AnnouncementSumAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  type GetAnnouncementGroupByPayload<T extends AnnouncementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnouncementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    categories?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    categories?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    categories?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    categories?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
  }

  export type AnnouncementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "categories" | "isDeleted" | "createdAt" | "updatedAt" | "deletedAt" | "userId", ExtArgs["result"]["announcement"]>
  export type AnnouncementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnnouncementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnnouncementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnnouncementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Announcement"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      categories: string[]
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      userId: number
    }, ExtArgs["result"]["announcement"]>
    composites: {}
  }

  type AnnouncementGetPayload<S extends boolean | null | undefined | AnnouncementDefaultArgs> = $Result.GetResult<Prisma.$AnnouncementPayload, S>

  type AnnouncementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnouncementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnouncementCountAggregateInputType | true
    }

  export interface AnnouncementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Announcement'], meta: { name: 'Announcement' } }
    /**
     * Find zero or one Announcement that matches the filter.
     * @param {AnnouncementFindUniqueArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnouncementFindUniqueArgs>(args: SelectSubset<T, AnnouncementFindUniqueArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Announcement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnouncementFindUniqueOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnouncementFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnouncementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnouncementFindFirstArgs>(args?: SelectSubset<T, AnnouncementFindFirstArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnouncementFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnouncementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Announcements
     * const announcements = await prisma.announcement.findMany()
     * 
     * // Get first 10 Announcements
     * const announcements = await prisma.announcement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const announcementWithIdOnly = await prisma.announcement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnouncementFindManyArgs>(args?: SelectSubset<T, AnnouncementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Announcement.
     * @param {AnnouncementCreateArgs} args - Arguments to create a Announcement.
     * @example
     * // Create one Announcement
     * const Announcement = await prisma.announcement.create({
     *   data: {
     *     // ... data to create a Announcement
     *   }
     * })
     * 
     */
    create<T extends AnnouncementCreateArgs>(args: SelectSubset<T, AnnouncementCreateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Announcements.
     * @param {AnnouncementCreateManyArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnouncementCreateManyArgs>(args?: SelectSubset<T, AnnouncementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Announcements and returns the data saved in the database.
     * @param {AnnouncementCreateManyAndReturnArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnouncementCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnouncementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Announcement.
     * @param {AnnouncementDeleteArgs} args - Arguments to delete one Announcement.
     * @example
     * // Delete one Announcement
     * const Announcement = await prisma.announcement.delete({
     *   where: {
     *     // ... filter to delete one Announcement
     *   }
     * })
     * 
     */
    delete<T extends AnnouncementDeleteArgs>(args: SelectSubset<T, AnnouncementDeleteArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Announcement.
     * @param {AnnouncementUpdateArgs} args - Arguments to update one Announcement.
     * @example
     * // Update one Announcement
     * const announcement = await prisma.announcement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnouncementUpdateArgs>(args: SelectSubset<T, AnnouncementUpdateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Announcements.
     * @param {AnnouncementDeleteManyArgs} args - Arguments to filter Announcements to delete.
     * @example
     * // Delete a few Announcements
     * const { count } = await prisma.announcement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnouncementDeleteManyArgs>(args?: SelectSubset<T, AnnouncementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnouncementUpdateManyArgs>(args: SelectSubset<T, AnnouncementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements and returns the data updated in the database.
     * @param {AnnouncementUpdateManyAndReturnArgs} args - Arguments to update many Announcements.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnnouncementUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnouncementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Announcement.
     * @param {AnnouncementUpsertArgs} args - Arguments to update or create a Announcement.
     * @example
     * // Update or create a Announcement
     * const announcement = await prisma.announcement.upsert({
     *   create: {
     *     // ... data to create a Announcement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Announcement we want to update
     *   }
     * })
     */
    upsert<T extends AnnouncementUpsertArgs>(args: SelectSubset<T, AnnouncementUpsertArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementCountArgs} args - Arguments to filter Announcements to count.
     * @example
     * // Count the number of Announcements
     * const count = await prisma.announcement.count({
     *   where: {
     *     // ... the filter for the Announcements we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementCountArgs>(
      args?: Subset<T, AnnouncementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnnouncementAggregateArgs>(args: Subset<T, AnnouncementAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementAggregateType<T>>

    /**
     * Group by Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementGroupByArgs} args - Group by arguments.
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
      T extends AnnouncementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Announcement model
   */
  readonly fields: AnnouncementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Announcement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnouncementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Announcement model
   */
  interface AnnouncementFieldRefs {
    readonly id: FieldRef<"Announcement", 'Int'>
    readonly title: FieldRef<"Announcement", 'String'>
    readonly content: FieldRef<"Announcement", 'String'>
    readonly categories: FieldRef<"Announcement", 'String[]'>
    readonly isDeleted: FieldRef<"Announcement", 'Boolean'>
    readonly createdAt: FieldRef<"Announcement", 'DateTime'>
    readonly updatedAt: FieldRef<"Announcement", 'DateTime'>
    readonly deletedAt: FieldRef<"Announcement", 'DateTime'>
    readonly userId: FieldRef<"Announcement", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Announcement findUnique
   */
  export type AnnouncementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findUniqueOrThrow
   */
  export type AnnouncementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findFirst
   */
  export type AnnouncementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findFirstOrThrow
   */
  export type AnnouncementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findMany
   */
  export type AnnouncementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement create
   */
  export type AnnouncementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to create a Announcement.
     */
    data: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
  }

  /**
   * Announcement createMany
   */
  export type AnnouncementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Announcement createManyAndReturn
   */
  export type AnnouncementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Announcement update
   */
  export type AnnouncementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to update a Announcement.
     */
    data: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
    /**
     * Choose, which Announcement to update.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement updateMany
   */
  export type AnnouncementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
  }

  /**
   * Announcement updateManyAndReturn
   */
  export type AnnouncementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Announcement upsert
   */
  export type AnnouncementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The filter to search for the Announcement to update in case it exists.
     */
    where: AnnouncementWhereUniqueInput
    /**
     * In case the Announcement found by the `where` argument doesn't exist, create a new Announcement with this data.
     */
    create: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
    /**
     * In case the Announcement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
  }

  /**
   * Announcement delete
   */
  export type AnnouncementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter which Announcement to delete.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement deleteMany
   */
  export type AnnouncementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcements to delete
     */
    where?: AnnouncementWhereInput
    /**
     * Limit how many Announcements to delete.
     */
    limit?: number
  }

  /**
   * Announcement without action
   */
  export type AnnouncementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcement
     */
    omit?: AnnouncementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    userImage: 'userImage',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    role: 'role',
    libraryCardId: 'libraryCardId',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LibraryItemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    author: 'author',
    publisher: 'publisher',
    isbn: 'isbn',
    itemType: 'itemType',
    categories: 'categories',
    languages: 'languages',
    yearPublished: 'yearPublished',
    edition: 'edition',
    shelfLocation: 'shelfLocation',
    status: 'status',
    coverImage: 'coverImage',
    description: 'description',
    isReference: 'isReference',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type LibraryItemScalarFieldEnum = (typeof LibraryItemScalarFieldEnum)[keyof typeof LibraryItemScalarFieldEnum]


  export const BorrowingScalarFieldEnum: {
    id: 'id',
    borrowDate: 'borrowDate',
    dueDate: 'dueDate',
    returnDate: 'returnDate',
    renewed: 'renewed',
    maxRenewals: 'maxRenewals',
    renewalCount: 'renewalCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    itemId: 'itemId',
    userId: 'userId'
  };

  export type BorrowingScalarFieldEnum = (typeof BorrowingScalarFieldEnum)[keyof typeof BorrowingScalarFieldEnum]


  export const BorrowingRuleScalarFieldEnum: {
    id: 'id',
    itemType: 'itemType',
    maxLoanDays: 'maxLoanDays',
    maxRenewals: 'maxRenewals',
    finePerDay: 'finePerDay',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BorrowingRuleScalarFieldEnum = (typeof BorrowingRuleScalarFieldEnum)[keyof typeof BorrowingRuleScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    id: 'id',
    reservationDate: 'reservationDate',
    expiryDate: 'expiryDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    itemId: 'itemId',
    userId: 'userId'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const FineScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    reason: 'reason',
    issueDate: 'issueDate',
    paidDate: 'paidDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    borrowingId: 'borrowingId'
  };

  export type FineScalarFieldEnum = (typeof FineScalarFieldEnum)[keyof typeof FineScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    type: 'type',
    message: 'message',
    sentAt: 'sentAt',
    read: 'read',
    readAt: 'readAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    readingTime: 'readingTime',
    categories: 'categories',
    featuredImage: 'featuredImage',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    userId: 'userId'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const AnnouncementScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    categories: 'categories',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    userId: 'userId'
  };

  export type AnnouncementScalarFieldEnum = (typeof AnnouncementScalarFieldEnum)[keyof typeof AnnouncementScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ItemType'
   */
  export type EnumItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemType'>
    


  /**
   * Reference to a field of type 'ItemType[]'
   */
  export type ListEnumItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemType[]'>
    


  /**
   * Reference to a field of type 'ItemStatus'
   */
  export type EnumItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemStatus'>
    


  /**
   * Reference to a field of type 'ItemStatus[]'
   */
  export type ListEnumItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ReservationStatus'
   */
  export type EnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus'>
    


  /**
   * Reference to a field of type 'ReservationStatus[]'
   */
  export type ListEnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus[]'>
    


  /**
   * Reference to a field of type 'FineStatus'
   */
  export type EnumFineStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FineStatus'>
    


  /**
   * Reference to a field of type 'FineStatus[]'
   */
  export type ListEnumFineStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FineStatus[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    userImage?: StringNullableFilter<"User"> | string | null
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    libraryCardId?: StringNullableFilter<"User"> | string | null
    isDeleted?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    borrowedItems?: BorrowingListRelationFilter
    reservations?: ReservationListRelationFilter
    fines?: FineListRelationFilter
    notifications?: NotificationListRelationFilter
    blogs?: BlogListRelationFilter
    announcements?: AnnouncementListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userImage?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    libraryCardId?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    borrowedItems?: BorrowingOrderByRelationAggregateInput
    reservations?: ReservationOrderByRelationAggregateInput
    fines?: FineOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    blogs?: BlogOrderByRelationAggregateInput
    announcements?: AnnouncementOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    libraryCardId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userImage?: StringNullableFilter<"User"> | string | null
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isDeleted?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    borrowedItems?: BorrowingListRelationFilter
    reservations?: ReservationListRelationFilter
    fines?: FineListRelationFilter
    notifications?: NotificationListRelationFilter
    blogs?: BlogListRelationFilter
    announcements?: AnnouncementListRelationFilter
  }, "id" | "email" | "libraryCardId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userImage?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    libraryCardId?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    userImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    libraryCardId?: StringNullableWithAggregatesFilter<"User"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type LibraryItemWhereInput = {
    AND?: LibraryItemWhereInput | LibraryItemWhereInput[]
    OR?: LibraryItemWhereInput[]
    NOT?: LibraryItemWhereInput | LibraryItemWhereInput[]
    id?: IntFilter<"LibraryItem"> | number
    title?: StringFilter<"LibraryItem"> | string
    author?: StringFilter<"LibraryItem"> | string
    publisher?: StringFilter<"LibraryItem"> | string
    isbn?: StringNullableFilter<"LibraryItem"> | string | null
    itemType?: EnumItemTypeFilter<"LibraryItem"> | $Enums.ItemType
    categories?: StringNullableListFilter<"LibraryItem">
    languages?: StringNullableListFilter<"LibraryItem">
    yearPublished?: IntNullableFilter<"LibraryItem"> | number | null
    edition?: StringNullableFilter<"LibraryItem"> | string | null
    shelfLocation?: StringNullableFilter<"LibraryItem"> | string | null
    status?: EnumItemStatusFilter<"LibraryItem"> | $Enums.ItemStatus
    coverImage?: StringNullableFilter<"LibraryItem"> | string | null
    description?: StringNullableFilter<"LibraryItem"> | string | null
    isReference?: BoolFilter<"LibraryItem"> | boolean
    isDeleted?: BoolFilter<"LibraryItem"> | boolean
    createdAt?: DateTimeFilter<"LibraryItem"> | Date | string
    updatedAt?: DateTimeFilter<"LibraryItem"> | Date | string
    deletedAt?: DateTimeNullableFilter<"LibraryItem"> | Date | string | null
    borrowings?: BorrowingListRelationFilter
    reservations?: ReservationListRelationFilter
  }

  export type LibraryItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    publisher?: SortOrder
    isbn?: SortOrderInput | SortOrder
    itemType?: SortOrder
    categories?: SortOrder
    languages?: SortOrder
    yearPublished?: SortOrderInput | SortOrder
    edition?: SortOrderInput | SortOrder
    shelfLocation?: SortOrderInput | SortOrder
    status?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    isReference?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    borrowings?: BorrowingOrderByRelationAggregateInput
    reservations?: ReservationOrderByRelationAggregateInput
  }

  export type LibraryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LibraryItemWhereInput | LibraryItemWhereInput[]
    OR?: LibraryItemWhereInput[]
    NOT?: LibraryItemWhereInput | LibraryItemWhereInput[]
    title?: StringFilter<"LibraryItem"> | string
    author?: StringFilter<"LibraryItem"> | string
    publisher?: StringFilter<"LibraryItem"> | string
    isbn?: StringNullableFilter<"LibraryItem"> | string | null
    itemType?: EnumItemTypeFilter<"LibraryItem"> | $Enums.ItemType
    categories?: StringNullableListFilter<"LibraryItem">
    languages?: StringNullableListFilter<"LibraryItem">
    yearPublished?: IntNullableFilter<"LibraryItem"> | number | null
    edition?: StringNullableFilter<"LibraryItem"> | string | null
    shelfLocation?: StringNullableFilter<"LibraryItem"> | string | null
    status?: EnumItemStatusFilter<"LibraryItem"> | $Enums.ItemStatus
    coverImage?: StringNullableFilter<"LibraryItem"> | string | null
    description?: StringNullableFilter<"LibraryItem"> | string | null
    isReference?: BoolFilter<"LibraryItem"> | boolean
    isDeleted?: BoolFilter<"LibraryItem"> | boolean
    createdAt?: DateTimeFilter<"LibraryItem"> | Date | string
    updatedAt?: DateTimeFilter<"LibraryItem"> | Date | string
    deletedAt?: DateTimeNullableFilter<"LibraryItem"> | Date | string | null
    borrowings?: BorrowingListRelationFilter
    reservations?: ReservationListRelationFilter
  }, "id">

  export type LibraryItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    publisher?: SortOrder
    isbn?: SortOrderInput | SortOrder
    itemType?: SortOrder
    categories?: SortOrder
    languages?: SortOrder
    yearPublished?: SortOrderInput | SortOrder
    edition?: SortOrderInput | SortOrder
    shelfLocation?: SortOrderInput | SortOrder
    status?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    isReference?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: LibraryItemCountOrderByAggregateInput
    _avg?: LibraryItemAvgOrderByAggregateInput
    _max?: LibraryItemMaxOrderByAggregateInput
    _min?: LibraryItemMinOrderByAggregateInput
    _sum?: LibraryItemSumOrderByAggregateInput
  }

  export type LibraryItemScalarWhereWithAggregatesInput = {
    AND?: LibraryItemScalarWhereWithAggregatesInput | LibraryItemScalarWhereWithAggregatesInput[]
    OR?: LibraryItemScalarWhereWithAggregatesInput[]
    NOT?: LibraryItemScalarWhereWithAggregatesInput | LibraryItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LibraryItem"> | number
    title?: StringWithAggregatesFilter<"LibraryItem"> | string
    author?: StringWithAggregatesFilter<"LibraryItem"> | string
    publisher?: StringWithAggregatesFilter<"LibraryItem"> | string
    isbn?: StringNullableWithAggregatesFilter<"LibraryItem"> | string | null
    itemType?: EnumItemTypeWithAggregatesFilter<"LibraryItem"> | $Enums.ItemType
    categories?: StringNullableListFilter<"LibraryItem">
    languages?: StringNullableListFilter<"LibraryItem">
    yearPublished?: IntNullableWithAggregatesFilter<"LibraryItem"> | number | null
    edition?: StringNullableWithAggregatesFilter<"LibraryItem"> | string | null
    shelfLocation?: StringNullableWithAggregatesFilter<"LibraryItem"> | string | null
    status?: EnumItemStatusWithAggregatesFilter<"LibraryItem"> | $Enums.ItemStatus
    coverImage?: StringNullableWithAggregatesFilter<"LibraryItem"> | string | null
    description?: StringNullableWithAggregatesFilter<"LibraryItem"> | string | null
    isReference?: BoolWithAggregatesFilter<"LibraryItem"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"LibraryItem"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"LibraryItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LibraryItem"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"LibraryItem"> | Date | string | null
  }

  export type BorrowingWhereInput = {
    AND?: BorrowingWhereInput | BorrowingWhereInput[]
    OR?: BorrowingWhereInput[]
    NOT?: BorrowingWhereInput | BorrowingWhereInput[]
    id?: IntFilter<"Borrowing"> | number
    borrowDate?: DateTimeFilter<"Borrowing"> | Date | string
    dueDate?: DateTimeFilter<"Borrowing"> | Date | string
    returnDate?: DateTimeNullableFilter<"Borrowing"> | Date | string | null
    renewed?: BoolFilter<"Borrowing"> | boolean
    maxRenewals?: IntFilter<"Borrowing"> | number
    renewalCount?: IntFilter<"Borrowing"> | number
    createdAt?: DateTimeFilter<"Borrowing"> | Date | string
    updatedAt?: DateTimeFilter<"Borrowing"> | Date | string
    itemId?: IntFilter<"Borrowing"> | number
    userId?: IntFilter<"Borrowing"> | number
    item?: XOR<LibraryItemScalarRelationFilter, LibraryItemWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    fine?: XOR<FineNullableScalarRelationFilter, FineWhereInput> | null
  }

  export type BorrowingOrderByWithRelationInput = {
    id?: SortOrder
    borrowDate?: SortOrder
    dueDate?: SortOrder
    returnDate?: SortOrderInput | SortOrder
    renewed?: SortOrder
    maxRenewals?: SortOrder
    renewalCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itemId?: SortOrder
    userId?: SortOrder
    item?: LibraryItemOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    fine?: FineOrderByWithRelationInput
  }

  export type BorrowingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BorrowingWhereInput | BorrowingWhereInput[]
    OR?: BorrowingWhereInput[]
    NOT?: BorrowingWhereInput | BorrowingWhereInput[]
    borrowDate?: DateTimeFilter<"Borrowing"> | Date | string
    dueDate?: DateTimeFilter<"Borrowing"> | Date | string
    returnDate?: DateTimeNullableFilter<"Borrowing"> | Date | string | null
    renewed?: BoolFilter<"Borrowing"> | boolean
    maxRenewals?: IntFilter<"Borrowing"> | number
    renewalCount?: IntFilter<"Borrowing"> | number
    createdAt?: DateTimeFilter<"Borrowing"> | Date | string
    updatedAt?: DateTimeFilter<"Borrowing"> | Date | string
    itemId?: IntFilter<"Borrowing"> | number
    userId?: IntFilter<"Borrowing"> | number
    item?: XOR<LibraryItemScalarRelationFilter, LibraryItemWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    fine?: XOR<FineNullableScalarRelationFilter, FineWhereInput> | null
  }, "id">

  export type BorrowingOrderByWithAggregationInput = {
    id?: SortOrder
    borrowDate?: SortOrder
    dueDate?: SortOrder
    returnDate?: SortOrderInput | SortOrder
    renewed?: SortOrder
    maxRenewals?: SortOrder
    renewalCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itemId?: SortOrder
    userId?: SortOrder
    _count?: BorrowingCountOrderByAggregateInput
    _avg?: BorrowingAvgOrderByAggregateInput
    _max?: BorrowingMaxOrderByAggregateInput
    _min?: BorrowingMinOrderByAggregateInput
    _sum?: BorrowingSumOrderByAggregateInput
  }

  export type BorrowingScalarWhereWithAggregatesInput = {
    AND?: BorrowingScalarWhereWithAggregatesInput | BorrowingScalarWhereWithAggregatesInput[]
    OR?: BorrowingScalarWhereWithAggregatesInput[]
    NOT?: BorrowingScalarWhereWithAggregatesInput | BorrowingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Borrowing"> | number
    borrowDate?: DateTimeWithAggregatesFilter<"Borrowing"> | Date | string
    dueDate?: DateTimeWithAggregatesFilter<"Borrowing"> | Date | string
    returnDate?: DateTimeNullableWithAggregatesFilter<"Borrowing"> | Date | string | null
    renewed?: BoolWithAggregatesFilter<"Borrowing"> | boolean
    maxRenewals?: IntWithAggregatesFilter<"Borrowing"> | number
    renewalCount?: IntWithAggregatesFilter<"Borrowing"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Borrowing"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Borrowing"> | Date | string
    itemId?: IntWithAggregatesFilter<"Borrowing"> | number
    userId?: IntWithAggregatesFilter<"Borrowing"> | number
  }

  export type BorrowingRuleWhereInput = {
    AND?: BorrowingRuleWhereInput | BorrowingRuleWhereInput[]
    OR?: BorrowingRuleWhereInput[]
    NOT?: BorrowingRuleWhereInput | BorrowingRuleWhereInput[]
    id?: IntFilter<"BorrowingRule"> | number
    itemType?: EnumItemTypeFilter<"BorrowingRule"> | $Enums.ItemType
    maxLoanDays?: IntFilter<"BorrowingRule"> | number
    maxRenewals?: IntFilter<"BorrowingRule"> | number
    finePerDay?: FloatFilter<"BorrowingRule"> | number
    createdAt?: DateTimeFilter<"BorrowingRule"> | Date | string
    updatedAt?: DateTimeFilter<"BorrowingRule"> | Date | string
  }

  export type BorrowingRuleOrderByWithRelationInput = {
    id?: SortOrder
    itemType?: SortOrder
    maxLoanDays?: SortOrder
    maxRenewals?: SortOrder
    finePerDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BorrowingRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BorrowingRuleWhereInput | BorrowingRuleWhereInput[]
    OR?: BorrowingRuleWhereInput[]
    NOT?: BorrowingRuleWhereInput | BorrowingRuleWhereInput[]
    itemType?: EnumItemTypeFilter<"BorrowingRule"> | $Enums.ItemType
    maxLoanDays?: IntFilter<"BorrowingRule"> | number
    maxRenewals?: IntFilter<"BorrowingRule"> | number
    finePerDay?: FloatFilter<"BorrowingRule"> | number
    createdAt?: DateTimeFilter<"BorrowingRule"> | Date | string
    updatedAt?: DateTimeFilter<"BorrowingRule"> | Date | string
  }, "id">

  export type BorrowingRuleOrderByWithAggregationInput = {
    id?: SortOrder
    itemType?: SortOrder
    maxLoanDays?: SortOrder
    maxRenewals?: SortOrder
    finePerDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BorrowingRuleCountOrderByAggregateInput
    _avg?: BorrowingRuleAvgOrderByAggregateInput
    _max?: BorrowingRuleMaxOrderByAggregateInput
    _min?: BorrowingRuleMinOrderByAggregateInput
    _sum?: BorrowingRuleSumOrderByAggregateInput
  }

  export type BorrowingRuleScalarWhereWithAggregatesInput = {
    AND?: BorrowingRuleScalarWhereWithAggregatesInput | BorrowingRuleScalarWhereWithAggregatesInput[]
    OR?: BorrowingRuleScalarWhereWithAggregatesInput[]
    NOT?: BorrowingRuleScalarWhereWithAggregatesInput | BorrowingRuleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BorrowingRule"> | number
    itemType?: EnumItemTypeWithAggregatesFilter<"BorrowingRule"> | $Enums.ItemType
    maxLoanDays?: IntWithAggregatesFilter<"BorrowingRule"> | number
    maxRenewals?: IntWithAggregatesFilter<"BorrowingRule"> | number
    finePerDay?: FloatWithAggregatesFilter<"BorrowingRule"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BorrowingRule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BorrowingRule"> | Date | string
  }

  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    id?: IntFilter<"Reservation"> | number
    reservationDate?: DateTimeFilter<"Reservation"> | Date | string
    expiryDate?: DateTimeFilter<"Reservation"> | Date | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    itemId?: IntFilter<"Reservation"> | number
    userId?: IntFilter<"Reservation"> | number
    item?: XOR<LibraryItemScalarRelationFilter, LibraryItemWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReservationOrderByWithRelationInput = {
    id?: SortOrder
    reservationDate?: SortOrder
    expiryDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itemId?: SortOrder
    userId?: SortOrder
    item?: LibraryItemOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    reservationDate?: DateTimeFilter<"Reservation"> | Date | string
    expiryDate?: DateTimeFilter<"Reservation"> | Date | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    itemId?: IntFilter<"Reservation"> | number
    userId?: IntFilter<"Reservation"> | number
    item?: XOR<LibraryItemScalarRelationFilter, LibraryItemWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReservationOrderByWithAggregationInput = {
    id?: SortOrder
    reservationDate?: SortOrder
    expiryDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itemId?: SortOrder
    userId?: SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _avg?: ReservationAvgOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
    _sum?: ReservationSumOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    OR?: ReservationScalarWhereWithAggregatesInput[]
    NOT?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reservation"> | number
    reservationDate?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    expiryDate?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    status?: EnumReservationStatusWithAggregatesFilter<"Reservation"> | $Enums.ReservationStatus
    createdAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    itemId?: IntWithAggregatesFilter<"Reservation"> | number
    userId?: IntWithAggregatesFilter<"Reservation"> | number
  }

  export type FineWhereInput = {
    AND?: FineWhereInput | FineWhereInput[]
    OR?: FineWhereInput[]
    NOT?: FineWhereInput | FineWhereInput[]
    id?: IntFilter<"Fine"> | number
    amount?: FloatFilter<"Fine"> | number
    reason?: StringFilter<"Fine"> | string
    issueDate?: DateTimeFilter<"Fine"> | Date | string
    paidDate?: DateTimeNullableFilter<"Fine"> | Date | string | null
    status?: EnumFineStatusFilter<"Fine"> | $Enums.FineStatus
    createdAt?: DateTimeFilter<"Fine"> | Date | string
    updatedAt?: DateTimeFilter<"Fine"> | Date | string
    userId?: IntFilter<"Fine"> | number
    borrowingId?: IntFilter<"Fine"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    borrowing?: XOR<BorrowingScalarRelationFilter, BorrowingWhereInput>
  }

  export type FineOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    issueDate?: SortOrder
    paidDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    borrowingId?: SortOrder
    user?: UserOrderByWithRelationInput
    borrowing?: BorrowingOrderByWithRelationInput
  }

  export type FineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    borrowingId?: number
    AND?: FineWhereInput | FineWhereInput[]
    OR?: FineWhereInput[]
    NOT?: FineWhereInput | FineWhereInput[]
    amount?: FloatFilter<"Fine"> | number
    reason?: StringFilter<"Fine"> | string
    issueDate?: DateTimeFilter<"Fine"> | Date | string
    paidDate?: DateTimeNullableFilter<"Fine"> | Date | string | null
    status?: EnumFineStatusFilter<"Fine"> | $Enums.FineStatus
    createdAt?: DateTimeFilter<"Fine"> | Date | string
    updatedAt?: DateTimeFilter<"Fine"> | Date | string
    userId?: IntFilter<"Fine"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    borrowing?: XOR<BorrowingScalarRelationFilter, BorrowingWhereInput>
  }, "id" | "borrowingId">

  export type FineOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    issueDate?: SortOrder
    paidDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    borrowingId?: SortOrder
    _count?: FineCountOrderByAggregateInput
    _avg?: FineAvgOrderByAggregateInput
    _max?: FineMaxOrderByAggregateInput
    _min?: FineMinOrderByAggregateInput
    _sum?: FineSumOrderByAggregateInput
  }

  export type FineScalarWhereWithAggregatesInput = {
    AND?: FineScalarWhereWithAggregatesInput | FineScalarWhereWithAggregatesInput[]
    OR?: FineScalarWhereWithAggregatesInput[]
    NOT?: FineScalarWhereWithAggregatesInput | FineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fine"> | number
    amount?: FloatWithAggregatesFilter<"Fine"> | number
    reason?: StringWithAggregatesFilter<"Fine"> | string
    issueDate?: DateTimeWithAggregatesFilter<"Fine"> | Date | string
    paidDate?: DateTimeNullableWithAggregatesFilter<"Fine"> | Date | string | null
    status?: EnumFineStatusWithAggregatesFilter<"Fine"> | $Enums.FineStatus
    createdAt?: DateTimeWithAggregatesFilter<"Fine"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Fine"> | Date | string
    userId?: IntWithAggregatesFilter<"Fine"> | number
    borrowingId?: IntWithAggregatesFilter<"Fine"> | number
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    message?: StringFilter<"Notification"> | string
    sentAt?: DateTimeFilter<"Notification"> | Date | string
    read?: BoolFilter<"Notification"> | boolean
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    userId?: IntFilter<"Notification"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    read?: SortOrder
    readAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    message?: StringFilter<"Notification"> | string
    sentAt?: DateTimeFilter<"Notification"> | Date | string
    read?: BoolFilter<"Notification"> | boolean
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    userId?: IntFilter<"Notification"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    read?: SortOrder
    readAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    message?: StringWithAggregatesFilter<"Notification"> | string
    sentAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    readAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    userId?: IntWithAggregatesFilter<"Notification"> | number
  }

  export type BlogWhereInput = {
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    id?: IntFilter<"Blog"> | number
    title?: StringFilter<"Blog"> | string
    content?: StringFilter<"Blog"> | string
    readingTime?: IntFilter<"Blog"> | number
    categories?: StringNullableListFilter<"Blog">
    featuredImage?: StringNullableFilter<"Blog"> | string | null
    isDeleted?: BoolFilter<"Blog"> | boolean
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Blog"> | Date | string | null
    userId?: IntFilter<"Blog"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    readingTime?: SortOrder
    categories?: SortOrder
    featuredImage?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BlogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    title?: StringFilter<"Blog"> | string
    content?: StringFilter<"Blog"> | string
    readingTime?: IntFilter<"Blog"> | number
    categories?: StringNullableListFilter<"Blog">
    featuredImage?: StringNullableFilter<"Blog"> | string | null
    isDeleted?: BoolFilter<"Blog"> | boolean
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Blog"> | Date | string | null
    userId?: IntFilter<"Blog"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    readingTime?: SortOrder
    categories?: SortOrder
    featuredImage?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: BlogCountOrderByAggregateInput
    _avg?: BlogAvgOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
    _sum?: BlogSumOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    OR?: BlogScalarWhereWithAggregatesInput[]
    NOT?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Blog"> | number
    title?: StringWithAggregatesFilter<"Blog"> | string
    content?: StringWithAggregatesFilter<"Blog"> | string
    readingTime?: IntWithAggregatesFilter<"Blog"> | number
    categories?: StringNullableListFilter<"Blog">
    featuredImage?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"Blog"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Blog"> | Date | string | null
    userId?: IntWithAggregatesFilter<"Blog"> | number
  }

  export type AnnouncementWhereInput = {
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    id?: IntFilter<"Announcement"> | number
    title?: StringFilter<"Announcement"> | string
    content?: StringFilter<"Announcement"> | string
    categories?: StringNullableListFilter<"Announcement">
    isDeleted?: BoolFilter<"Announcement"> | boolean
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    updatedAt?: DateTimeFilter<"Announcement"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Announcement"> | Date | string | null
    userId?: IntFilter<"Announcement"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AnnouncementOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    categories?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AnnouncementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    title?: StringFilter<"Announcement"> | string
    content?: StringFilter<"Announcement"> | string
    categories?: StringNullableListFilter<"Announcement">
    isDeleted?: BoolFilter<"Announcement"> | boolean
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    updatedAt?: DateTimeFilter<"Announcement"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Announcement"> | Date | string | null
    userId?: IntFilter<"Announcement"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AnnouncementOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    categories?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: AnnouncementCountOrderByAggregateInput
    _avg?: AnnouncementAvgOrderByAggregateInput
    _max?: AnnouncementMaxOrderByAggregateInput
    _min?: AnnouncementMinOrderByAggregateInput
    _sum?: AnnouncementSumOrderByAggregateInput
  }

  export type AnnouncementScalarWhereWithAggregatesInput = {
    AND?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    OR?: AnnouncementScalarWhereWithAggregatesInput[]
    NOT?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Announcement"> | number
    title?: StringWithAggregatesFilter<"Announcement"> | string
    content?: StringWithAggregatesFilter<"Announcement"> | string
    categories?: StringNullableListFilter<"Announcement">
    isDeleted?: BoolWithAggregatesFilter<"Announcement"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Announcement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Announcement"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Announcement"> | Date | string | null
    userId?: IntWithAggregatesFilter<"Announcement"> | number
  }

  export type UserCreateInput = {
    userImage?: string | null
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    libraryCardId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    borrowedItems?: BorrowingCreateNestedManyWithoutUserInput
    reservations?: ReservationCreateNestedManyWithoutUserInput
    fines?: FineCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    blogs?: BlogCreateNestedManyWithoutUserInput
    announcements?: AnnouncementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    userImage?: string | null
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    libraryCardId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    borrowedItems?: BorrowingUncheckedCreateNestedManyWithoutUserInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutUserInput
    fines?: FineUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    blogs?: BlogUncheckedCreateNestedManyWithoutUserInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    libraryCardId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowedItems?: BorrowingUpdateManyWithoutUserNestedInput
    reservations?: ReservationUpdateManyWithoutUserNestedInput
    fines?: FineUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    blogs?: BlogUpdateManyWithoutUserNestedInput
    announcements?: AnnouncementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    libraryCardId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowedItems?: BorrowingUncheckedUpdateManyWithoutUserNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutUserNestedInput
    fines?: FineUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    userImage?: string | null
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    libraryCardId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    libraryCardId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    libraryCardId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LibraryItemCreateInput = {
    title: string
    author: string
    publisher: string
    isbn?: string | null
    itemType: $Enums.ItemType
    categories?: LibraryItemCreatecategoriesInput | string[]
    languages?: LibraryItemCreatelanguagesInput | string[]
    yearPublished?: number | null
    edition?: string | null
    shelfLocation?: string | null
    status?: $Enums.ItemStatus
    coverImage?: string | null
    description?: string | null
    isReference?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    borrowings?: BorrowingCreateNestedManyWithoutItemInput
    reservations?: ReservationCreateNestedManyWithoutItemInput
  }

  export type LibraryItemUncheckedCreateInput = {
    id?: number
    title: string
    author: string
    publisher: string
    isbn?: string | null
    itemType: $Enums.ItemType
    categories?: LibraryItemCreatecategoriesInput | string[]
    languages?: LibraryItemCreatelanguagesInput | string[]
    yearPublished?: number | null
    edition?: string | null
    shelfLocation?: string | null
    status?: $Enums.ItemStatus
    coverImage?: string | null
    description?: string | null
    isReference?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    borrowings?: BorrowingUncheckedCreateNestedManyWithoutItemInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutItemInput
  }

  export type LibraryItemUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    itemType?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    categories?: LibraryItemUpdatecategoriesInput | string[]
    languages?: LibraryItemUpdatelanguagesInput | string[]
    yearPublished?: NullableIntFieldUpdateOperationsInput | number | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    shelfLocation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isReference?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowings?: BorrowingUpdateManyWithoutItemNestedInput
    reservations?: ReservationUpdateManyWithoutItemNestedInput
  }

  export type LibraryItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    itemType?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    categories?: LibraryItemUpdatecategoriesInput | string[]
    languages?: LibraryItemUpdatelanguagesInput | string[]
    yearPublished?: NullableIntFieldUpdateOperationsInput | number | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    shelfLocation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isReference?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowings?: BorrowingUncheckedUpdateManyWithoutItemNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutItemNestedInput
  }

  export type LibraryItemCreateManyInput = {
    id?: number
    title: string
    author: string
    publisher: string
    isbn?: string | null
    itemType: $Enums.ItemType
    categories?: LibraryItemCreatecategoriesInput | string[]
    languages?: LibraryItemCreatelanguagesInput | string[]
    yearPublished?: number | null
    edition?: string | null
    shelfLocation?: string | null
    status?: $Enums.ItemStatus
    coverImage?: string | null
    description?: string | null
    isReference?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type LibraryItemUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    itemType?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    categories?: LibraryItemUpdatecategoriesInput | string[]
    languages?: LibraryItemUpdatelanguagesInput | string[]
    yearPublished?: NullableIntFieldUpdateOperationsInput | number | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    shelfLocation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isReference?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LibraryItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    itemType?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    categories?: LibraryItemUpdatecategoriesInput | string[]
    languages?: LibraryItemUpdatelanguagesInput | string[]
    yearPublished?: NullableIntFieldUpdateOperationsInput | number | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    shelfLocation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isReference?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BorrowingCreateInput = {
    borrowDate?: Date | string
    dueDate: Date | string
    returnDate?: Date | string | null
    renewed?: boolean
    maxRenewals?: number
    renewalCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    item: LibraryItemCreateNestedOneWithoutBorrowingsInput
    user: UserCreateNestedOneWithoutBorrowedItemsInput
    fine?: FineCreateNestedOneWithoutBorrowingInput
  }

  export type BorrowingUncheckedCreateInput = {
    id?: number
    borrowDate?: Date | string
    dueDate: Date | string
    returnDate?: Date | string | null
    renewed?: boolean
    maxRenewals?: number
    renewalCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itemId: number
    userId: number
    fine?: FineUncheckedCreateNestedOneWithoutBorrowingInput
  }

  export type BorrowingUpdateInput = {
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewed?: BoolFieldUpdateOperationsInput | boolean
    maxRenewals?: IntFieldUpdateOperationsInput | number
    renewalCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: LibraryItemUpdateOneRequiredWithoutBorrowingsNestedInput
    user?: UserUpdateOneRequiredWithoutBorrowedItemsNestedInput
    fine?: FineUpdateOneWithoutBorrowingNestedInput
  }

  export type BorrowingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewed?: BoolFieldUpdateOperationsInput | boolean
    maxRenewals?: IntFieldUpdateOperationsInput | number
    renewalCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fine?: FineUncheckedUpdateOneWithoutBorrowingNestedInput
  }

  export type BorrowingCreateManyInput = {
    id?: number
    borrowDate?: Date | string
    dueDate: Date | string
    returnDate?: Date | string | null
    renewed?: boolean
    maxRenewals?: number
    renewalCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itemId: number
    userId: number
  }

  export type BorrowingUpdateManyMutationInput = {
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewed?: BoolFieldUpdateOperationsInput | boolean
    maxRenewals?: IntFieldUpdateOperationsInput | number
    renewalCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BorrowingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewed?: BoolFieldUpdateOperationsInput | boolean
    maxRenewals?: IntFieldUpdateOperationsInput | number
    renewalCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type BorrowingRuleCreateInput = {
    itemType: $Enums.ItemType
    maxLoanDays: number
    maxRenewals?: number
    finePerDay: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BorrowingRuleUncheckedCreateInput = {
    id?: number
    itemType: $Enums.ItemType
    maxLoanDays: number
    maxRenewals?: number
    finePerDay: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BorrowingRuleUpdateInput = {
    itemType?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    maxLoanDays?: IntFieldUpdateOperationsInput | number
    maxRenewals?: IntFieldUpdateOperationsInput | number
    finePerDay?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BorrowingRuleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemType?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    maxLoanDays?: IntFieldUpdateOperationsInput | number
    maxRenewals?: IntFieldUpdateOperationsInput | number
    finePerDay?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BorrowingRuleCreateManyInput = {
    id?: number
    itemType: $Enums.ItemType
    maxLoanDays: number
    maxRenewals?: number
    finePerDay: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BorrowingRuleUpdateManyMutationInput = {
    itemType?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    maxLoanDays?: IntFieldUpdateOperationsInput | number
    maxRenewals?: IntFieldUpdateOperationsInput | number
    finePerDay?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BorrowingRuleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemType?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    maxLoanDays?: IntFieldUpdateOperationsInput | number
    maxRenewals?: IntFieldUpdateOperationsInput | number
    finePerDay?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateInput = {
    reservationDate?: Date | string
    expiryDate: Date | string
    status?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    item: LibraryItemCreateNestedOneWithoutReservationsInput
    user: UserCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateInput = {
    id?: number
    reservationDate?: Date | string
    expiryDate: Date | string
    status?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    itemId: number
    userId: number
  }

  export type ReservationUpdateInput = {
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: LibraryItemUpdateOneRequiredWithoutReservationsNestedInput
    user?: UserUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationCreateManyInput = {
    id?: number
    reservationDate?: Date | string
    expiryDate: Date | string
    status?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    itemId: number
    userId: number
  }

  export type ReservationUpdateManyMutationInput = {
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type FineCreateInput = {
    amount: number
    reason: string
    issueDate?: Date | string
    paidDate?: Date | string | null
    status?: $Enums.FineStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFinesInput
    borrowing: BorrowingCreateNestedOneWithoutFineInput
  }

  export type FineUncheckedCreateInput = {
    id?: number
    amount: number
    reason: string
    issueDate?: Date | string
    paidDate?: Date | string | null
    status?: $Enums.FineStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    borrowingId: number
  }

  export type FineUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumFineStatusFieldUpdateOperationsInput | $Enums.FineStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFinesNestedInput
    borrowing?: BorrowingUpdateOneRequiredWithoutFineNestedInput
  }

  export type FineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumFineStatusFieldUpdateOperationsInput | $Enums.FineStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    borrowingId?: IntFieldUpdateOperationsInput | number
  }

  export type FineCreateManyInput = {
    id?: number
    amount: number
    reason: string
    issueDate?: Date | string
    paidDate?: Date | string | null
    status?: $Enums.FineStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    borrowingId: number
  }

  export type FineUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumFineStatusFieldUpdateOperationsInput | $Enums.FineStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumFineStatusFieldUpdateOperationsInput | $Enums.FineStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    borrowingId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationCreateInput = {
    type: $Enums.NotificationType
    message: string
    sentAt?: Date | string
    read?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    type: $Enums.NotificationType
    message: string
    sentAt?: Date | string
    read?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type NotificationUpdateInput = {
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationCreateManyInput = {
    id?: number
    type: $Enums.NotificationType
    message: string
    sentAt?: Date | string
    read?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type NotificationUpdateManyMutationInput = {
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type BlogCreateInput = {
    title: string
    content: string
    readingTime: number
    categories?: BlogCreatecategoriesInput | string[]
    featuredImage?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutBlogsInput
  }

  export type BlogUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    readingTime: number
    categories?: BlogCreatecategoriesInput | string[]
    featuredImage?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: number
  }

  export type BlogUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    readingTime?: IntFieldUpdateOperationsInput | number
    categories?: BlogUpdatecategoriesInput | string[]
    featuredImage?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutBlogsNestedInput
  }

  export type BlogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    readingTime?: IntFieldUpdateOperationsInput | number
    categories?: BlogUpdatecategoriesInput | string[]
    featuredImage?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type BlogCreateManyInput = {
    id?: number
    title: string
    content: string
    readingTime: number
    categories?: BlogCreatecategoriesInput | string[]
    featuredImage?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: number
  }

  export type BlogUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    readingTime?: IntFieldUpdateOperationsInput | number
    categories?: BlogUpdatecategoriesInput | string[]
    featuredImage?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BlogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    readingTime?: IntFieldUpdateOperationsInput | number
    categories?: BlogUpdatecategoriesInput | string[]
    featuredImage?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AnnouncementCreateInput = {
    title: string
    content: string
    categories?: AnnouncementCreatecategoriesInput | string[]
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutAnnouncementsInput
  }

  export type AnnouncementUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    categories?: AnnouncementCreatecategoriesInput | string[]
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: number
  }

  export type AnnouncementUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    categories?: AnnouncementUpdatecategoriesInput | string[]
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutAnnouncementsNestedInput
  }

  export type AnnouncementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    categories?: AnnouncementUpdatecategoriesInput | string[]
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AnnouncementCreateManyInput = {
    id?: number
    title: string
    content: string
    categories?: AnnouncementCreatecategoriesInput | string[]
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: number
  }

  export type AnnouncementUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    categories?: AnnouncementUpdatecategoriesInput | string[]
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnnouncementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    categories?: AnnouncementUpdatecategoriesInput | string[]
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BorrowingListRelationFilter = {
    every?: BorrowingWhereInput
    some?: BorrowingWhereInput
    none?: BorrowingWhereInput
  }

  export type ReservationListRelationFilter = {
    every?: ReservationWhereInput
    some?: ReservationWhereInput
    none?: ReservationWhereInput
  }

  export type FineListRelationFilter = {
    every?: FineWhereInput
    some?: FineWhereInput
    none?: FineWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type BlogListRelationFilter = {
    every?: BlogWhereInput
    some?: BlogWhereInput
    none?: BlogWhereInput
  }

  export type AnnouncementListRelationFilter = {
    every?: AnnouncementWhereInput
    some?: AnnouncementWhereInput
    none?: AnnouncementWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BorrowingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnnouncementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userImage?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    libraryCardId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userImage?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    libraryCardId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userImage?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    libraryCardId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  }

  export type EnumItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeFilter<$PrismaModel> | $Enums.ItemType
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusFilter<$PrismaModel> | $Enums.ItemStatus
  }

  export type LibraryItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    publisher?: SortOrder
    isbn?: SortOrder
    itemType?: SortOrder
    categories?: SortOrder
    languages?: SortOrder
    yearPublished?: SortOrder
    edition?: SortOrder
    shelfLocation?: SortOrder
    status?: SortOrder
    coverImage?: SortOrder
    description?: SortOrder
    isReference?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type LibraryItemAvgOrderByAggregateInput = {
    id?: SortOrder
    yearPublished?: SortOrder
  }

  export type LibraryItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    publisher?: SortOrder
    isbn?: SortOrder
    itemType?: SortOrder
    yearPublished?: SortOrder
    edition?: SortOrder
    shelfLocation?: SortOrder
    status?: SortOrder
    coverImage?: SortOrder
    description?: SortOrder
    isReference?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type LibraryItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    publisher?: SortOrder
    isbn?: SortOrder
    itemType?: SortOrder
    yearPublished?: SortOrder
    edition?: SortOrder
    shelfLocation?: SortOrder
    status?: SortOrder
    coverImage?: SortOrder
    description?: SortOrder
    isReference?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type LibraryItemSumOrderByAggregateInput = {
    id?: SortOrder
    yearPublished?: SortOrder
  }

  export type EnumItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.ItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemTypeFilter<$PrismaModel>
    _max?: NestedEnumItemTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemStatusFilter<$PrismaModel>
    _max?: NestedEnumItemStatusFilter<$PrismaModel>
  }

  export type LibraryItemScalarRelationFilter = {
    is?: LibraryItemWhereInput
    isNot?: LibraryItemWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FineNullableScalarRelationFilter = {
    is?: FineWhereInput | null
    isNot?: FineWhereInput | null
  }

  export type BorrowingCountOrderByAggregateInput = {
    id?: SortOrder
    borrowDate?: SortOrder
    dueDate?: SortOrder
    returnDate?: SortOrder
    renewed?: SortOrder
    maxRenewals?: SortOrder
    renewalCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itemId?: SortOrder
    userId?: SortOrder
  }

  export type BorrowingAvgOrderByAggregateInput = {
    id?: SortOrder
    maxRenewals?: SortOrder
    renewalCount?: SortOrder
    itemId?: SortOrder
    userId?: SortOrder
  }

  export type BorrowingMaxOrderByAggregateInput = {
    id?: SortOrder
    borrowDate?: SortOrder
    dueDate?: SortOrder
    returnDate?: SortOrder
    renewed?: SortOrder
    maxRenewals?: SortOrder
    renewalCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itemId?: SortOrder
    userId?: SortOrder
  }

  export type BorrowingMinOrderByAggregateInput = {
    id?: SortOrder
    borrowDate?: SortOrder
    dueDate?: SortOrder
    returnDate?: SortOrder
    renewed?: SortOrder
    maxRenewals?: SortOrder
    renewalCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itemId?: SortOrder
    userId?: SortOrder
  }

  export type BorrowingSumOrderByAggregateInput = {
    id?: SortOrder
    maxRenewals?: SortOrder
    renewalCount?: SortOrder
    itemId?: SortOrder
    userId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BorrowingRuleCountOrderByAggregateInput = {
    id?: SortOrder
    itemType?: SortOrder
    maxLoanDays?: SortOrder
    maxRenewals?: SortOrder
    finePerDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BorrowingRuleAvgOrderByAggregateInput = {
    id?: SortOrder
    maxLoanDays?: SortOrder
    maxRenewals?: SortOrder
    finePerDay?: SortOrder
  }

  export type BorrowingRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    itemType?: SortOrder
    maxLoanDays?: SortOrder
    maxRenewals?: SortOrder
    finePerDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BorrowingRuleMinOrderByAggregateInput = {
    id?: SortOrder
    itemType?: SortOrder
    maxLoanDays?: SortOrder
    maxRenewals?: SortOrder
    finePerDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BorrowingRuleSumOrderByAggregateInput = {
    id?: SortOrder
    maxLoanDays?: SortOrder
    maxRenewals?: SortOrder
    finePerDay?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type ReservationCountOrderByAggregateInput = {
    id?: SortOrder
    reservationDate?: SortOrder
    expiryDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itemId?: SortOrder
    userId?: SortOrder
  }

  export type ReservationAvgOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    userId?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    reservationDate?: SortOrder
    expiryDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itemId?: SortOrder
    userId?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    id?: SortOrder
    reservationDate?: SortOrder
    expiryDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itemId?: SortOrder
    userId?: SortOrder
  }

  export type ReservationSumOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    userId?: SortOrder
  }

  export type EnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type EnumFineStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FineStatus | EnumFineStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FineStatus[] | ListEnumFineStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FineStatus[] | ListEnumFineStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFineStatusFilter<$PrismaModel> | $Enums.FineStatus
  }

  export type BorrowingScalarRelationFilter = {
    is?: BorrowingWhereInput
    isNot?: BorrowingWhereInput
  }

  export type FineCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    issueDate?: SortOrder
    paidDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    borrowingId?: SortOrder
  }

  export type FineAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    borrowingId?: SortOrder
  }

  export type FineMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    issueDate?: SortOrder
    paidDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    borrowingId?: SortOrder
  }

  export type FineMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    issueDate?: SortOrder
    paidDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    borrowingId?: SortOrder
  }

  export type FineSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    borrowingId?: SortOrder
  }

  export type EnumFineStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FineStatus | EnumFineStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FineStatus[] | ListEnumFineStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FineStatus[] | ListEnumFineStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFineStatusWithAggregatesFilter<$PrismaModel> | $Enums.FineStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFineStatusFilter<$PrismaModel>
    _max?: NestedEnumFineStatusFilter<$PrismaModel>
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    read?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    read?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    read?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    readingTime?: SortOrder
    categories?: SortOrder
    featuredImage?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type BlogAvgOrderByAggregateInput = {
    id?: SortOrder
    readingTime?: SortOrder
    userId?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    readingTime?: SortOrder
    featuredImage?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    readingTime?: SortOrder
    featuredImage?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type BlogSumOrderByAggregateInput = {
    id?: SortOrder
    readingTime?: SortOrder
    userId?: SortOrder
  }

  export type AnnouncementCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    categories?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type AnnouncementAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AnnouncementMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type AnnouncementMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type AnnouncementSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BorrowingCreateNestedManyWithoutUserInput = {
    create?: XOR<BorrowingCreateWithoutUserInput, BorrowingUncheckedCreateWithoutUserInput> | BorrowingCreateWithoutUserInput[] | BorrowingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BorrowingCreateOrConnectWithoutUserInput | BorrowingCreateOrConnectWithoutUserInput[]
    createMany?: BorrowingCreateManyUserInputEnvelope
    connect?: BorrowingWhereUniqueInput | BorrowingWhereUniqueInput[]
  }

  export type ReservationCreateNestedManyWithoutUserInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type FineCreateNestedManyWithoutUserInput = {
    create?: XOR<FineCreateWithoutUserInput, FineUncheckedCreateWithoutUserInput> | FineCreateWithoutUserInput[] | FineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FineCreateOrConnectWithoutUserInput | FineCreateOrConnectWithoutUserInput[]
    createMany?: FineCreateManyUserInputEnvelope
    connect?: FineWhereUniqueInput | FineWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type BlogCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput> | BlogCreateWithoutUserInput[] | BlogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutUserInput | BlogCreateOrConnectWithoutUserInput[]
    createMany?: BlogCreateManyUserInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type AnnouncementCreateNestedManyWithoutUserInput = {
    create?: XOR<AnnouncementCreateWithoutUserInput, AnnouncementUncheckedCreateWithoutUserInput> | AnnouncementCreateWithoutUserInput[] | AnnouncementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutUserInput | AnnouncementCreateOrConnectWithoutUserInput[]
    createMany?: AnnouncementCreateManyUserInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type BorrowingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BorrowingCreateWithoutUserInput, BorrowingUncheckedCreateWithoutUserInput> | BorrowingCreateWithoutUserInput[] | BorrowingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BorrowingCreateOrConnectWithoutUserInput | BorrowingCreateOrConnectWithoutUserInput[]
    createMany?: BorrowingCreateManyUserInputEnvelope
    connect?: BorrowingWhereUniqueInput | BorrowingWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type FineUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FineCreateWithoutUserInput, FineUncheckedCreateWithoutUserInput> | FineCreateWithoutUserInput[] | FineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FineCreateOrConnectWithoutUserInput | FineCreateOrConnectWithoutUserInput[]
    createMany?: FineCreateManyUserInputEnvelope
    connect?: FineWhereUniqueInput | FineWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type BlogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput> | BlogCreateWithoutUserInput[] | BlogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutUserInput | BlogCreateOrConnectWithoutUserInput[]
    createMany?: BlogCreateManyUserInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type AnnouncementUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnnouncementCreateWithoutUserInput, AnnouncementUncheckedCreateWithoutUserInput> | AnnouncementCreateWithoutUserInput[] | AnnouncementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutUserInput | AnnouncementCreateOrConnectWithoutUserInput[]
    createMany?: AnnouncementCreateManyUserInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BorrowingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BorrowingCreateWithoutUserInput, BorrowingUncheckedCreateWithoutUserInput> | BorrowingCreateWithoutUserInput[] | BorrowingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BorrowingCreateOrConnectWithoutUserInput | BorrowingCreateOrConnectWithoutUserInput[]
    upsert?: BorrowingUpsertWithWhereUniqueWithoutUserInput | BorrowingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BorrowingCreateManyUserInputEnvelope
    set?: BorrowingWhereUniqueInput | BorrowingWhereUniqueInput[]
    disconnect?: BorrowingWhereUniqueInput | BorrowingWhereUniqueInput[]
    delete?: BorrowingWhereUniqueInput | BorrowingWhereUniqueInput[]
    connect?: BorrowingWhereUniqueInput | BorrowingWhereUniqueInput[]
    update?: BorrowingUpdateWithWhereUniqueWithoutUserInput | BorrowingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BorrowingUpdateManyWithWhereWithoutUserInput | BorrowingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BorrowingScalarWhereInput | BorrowingScalarWhereInput[]
  }

  export type ReservationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutUserInput | ReservationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutUserInput | ReservationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutUserInput | ReservationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type FineUpdateManyWithoutUserNestedInput = {
    create?: XOR<FineCreateWithoutUserInput, FineUncheckedCreateWithoutUserInput> | FineCreateWithoutUserInput[] | FineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FineCreateOrConnectWithoutUserInput | FineCreateOrConnectWithoutUserInput[]
    upsert?: FineUpsertWithWhereUniqueWithoutUserInput | FineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FineCreateManyUserInputEnvelope
    set?: FineWhereUniqueInput | FineWhereUniqueInput[]
    disconnect?: FineWhereUniqueInput | FineWhereUniqueInput[]
    delete?: FineWhereUniqueInput | FineWhereUniqueInput[]
    connect?: FineWhereUniqueInput | FineWhereUniqueInput[]
    update?: FineUpdateWithWhereUniqueWithoutUserInput | FineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FineUpdateManyWithWhereWithoutUserInput | FineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FineScalarWhereInput | FineScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type BlogUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput> | BlogCreateWithoutUserInput[] | BlogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutUserInput | BlogCreateOrConnectWithoutUserInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutUserInput | BlogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogCreateManyUserInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutUserInput | BlogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutUserInput | BlogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type AnnouncementUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnnouncementCreateWithoutUserInput, AnnouncementUncheckedCreateWithoutUserInput> | AnnouncementCreateWithoutUserInput[] | AnnouncementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutUserInput | AnnouncementCreateOrConnectWithoutUserInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutUserInput | AnnouncementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnnouncementCreateManyUserInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutUserInput | AnnouncementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutUserInput | AnnouncementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BorrowingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BorrowingCreateWithoutUserInput, BorrowingUncheckedCreateWithoutUserInput> | BorrowingCreateWithoutUserInput[] | BorrowingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BorrowingCreateOrConnectWithoutUserInput | BorrowingCreateOrConnectWithoutUserInput[]
    upsert?: BorrowingUpsertWithWhereUniqueWithoutUserInput | BorrowingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BorrowingCreateManyUserInputEnvelope
    set?: BorrowingWhereUniqueInput | BorrowingWhereUniqueInput[]
    disconnect?: BorrowingWhereUniqueInput | BorrowingWhereUniqueInput[]
    delete?: BorrowingWhereUniqueInput | BorrowingWhereUniqueInput[]
    connect?: BorrowingWhereUniqueInput | BorrowingWhereUniqueInput[]
    update?: BorrowingUpdateWithWhereUniqueWithoutUserInput | BorrowingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BorrowingUpdateManyWithWhereWithoutUserInput | BorrowingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BorrowingScalarWhereInput | BorrowingScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutUserInput | ReservationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutUserInput | ReservationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutUserInput | ReservationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type FineUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FineCreateWithoutUserInput, FineUncheckedCreateWithoutUserInput> | FineCreateWithoutUserInput[] | FineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FineCreateOrConnectWithoutUserInput | FineCreateOrConnectWithoutUserInput[]
    upsert?: FineUpsertWithWhereUniqueWithoutUserInput | FineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FineCreateManyUserInputEnvelope
    set?: FineWhereUniqueInput | FineWhereUniqueInput[]
    disconnect?: FineWhereUniqueInput | FineWhereUniqueInput[]
    delete?: FineWhereUniqueInput | FineWhereUniqueInput[]
    connect?: FineWhereUniqueInput | FineWhereUniqueInput[]
    update?: FineUpdateWithWhereUniqueWithoutUserInput | FineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FineUpdateManyWithWhereWithoutUserInput | FineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FineScalarWhereInput | FineScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type BlogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput> | BlogCreateWithoutUserInput[] | BlogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutUserInput | BlogCreateOrConnectWithoutUserInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutUserInput | BlogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlogCreateManyUserInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutUserInput | BlogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutUserInput | BlogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type AnnouncementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnnouncementCreateWithoutUserInput, AnnouncementUncheckedCreateWithoutUserInput> | AnnouncementCreateWithoutUserInput[] | AnnouncementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutUserInput | AnnouncementCreateOrConnectWithoutUserInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutUserInput | AnnouncementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnnouncementCreateManyUserInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutUserInput | AnnouncementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutUserInput | AnnouncementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type LibraryItemCreatecategoriesInput = {
    set: string[]
  }

  export type LibraryItemCreatelanguagesInput = {
    set: string[]
  }

  export type BorrowingCreateNestedManyWithoutItemInput = {
    create?: XOR<BorrowingCreateWithoutItemInput, BorrowingUncheckedCreateWithoutItemInput> | BorrowingCreateWithoutItemInput[] | BorrowingUncheckedCreateWithoutItemInput[]
    connectOrCreate?: BorrowingCreateOrConnectWithoutItemInput | BorrowingCreateOrConnectWithoutItemInput[]
    createMany?: BorrowingCreateManyItemInputEnvelope
    connect?: BorrowingWhereUniqueInput | BorrowingWhereUniqueInput[]
  }

  export type ReservationCreateNestedManyWithoutItemInput = {
    create?: XOR<ReservationCreateWithoutItemInput, ReservationUncheckedCreateWithoutItemInput> | ReservationCreateWithoutItemInput[] | ReservationUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutItemInput | ReservationCreateOrConnectWithoutItemInput[]
    createMany?: ReservationCreateManyItemInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type BorrowingUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<BorrowingCreateWithoutItemInput, BorrowingUncheckedCreateWithoutItemInput> | BorrowingCreateWithoutItemInput[] | BorrowingUncheckedCreateWithoutItemInput[]
    connectOrCreate?: BorrowingCreateOrConnectWithoutItemInput | BorrowingCreateOrConnectWithoutItemInput[]
    createMany?: BorrowingCreateManyItemInputEnvelope
    connect?: BorrowingWhereUniqueInput | BorrowingWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<ReservationCreateWithoutItemInput, ReservationUncheckedCreateWithoutItemInput> | ReservationCreateWithoutItemInput[] | ReservationUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutItemInput | ReservationCreateOrConnectWithoutItemInput[]
    createMany?: ReservationCreateManyItemInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type EnumItemTypeFieldUpdateOperationsInput = {
    set?: $Enums.ItemType
  }

  export type LibraryItemUpdatecategoriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type LibraryItemUpdatelanguagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumItemStatusFieldUpdateOperationsInput = {
    set?: $Enums.ItemStatus
  }

  export type BorrowingUpdateManyWithoutItemNestedInput = {
    create?: XOR<BorrowingCreateWithoutItemInput, BorrowingUncheckedCreateWithoutItemInput> | BorrowingCreateWithoutItemInput[] | BorrowingUncheckedCreateWithoutItemInput[]
    connectOrCreate?: BorrowingCreateOrConnectWithoutItemInput | BorrowingCreateOrConnectWithoutItemInput[]
    upsert?: BorrowingUpsertWithWhereUniqueWithoutItemInput | BorrowingUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: BorrowingCreateManyItemInputEnvelope
    set?: BorrowingWhereUniqueInput | BorrowingWhereUniqueInput[]
    disconnect?: BorrowingWhereUniqueInput | BorrowingWhereUniqueInput[]
    delete?: BorrowingWhereUniqueInput | BorrowingWhereUniqueInput[]
    connect?: BorrowingWhereUniqueInput | BorrowingWhereUniqueInput[]
    update?: BorrowingUpdateWithWhereUniqueWithoutItemInput | BorrowingUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: BorrowingUpdateManyWithWhereWithoutItemInput | BorrowingUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: BorrowingScalarWhereInput | BorrowingScalarWhereInput[]
  }

  export type ReservationUpdateManyWithoutItemNestedInput = {
    create?: XOR<ReservationCreateWithoutItemInput, ReservationUncheckedCreateWithoutItemInput> | ReservationCreateWithoutItemInput[] | ReservationUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutItemInput | ReservationCreateOrConnectWithoutItemInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutItemInput | ReservationUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ReservationCreateManyItemInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutItemInput | ReservationUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutItemInput | ReservationUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type BorrowingUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<BorrowingCreateWithoutItemInput, BorrowingUncheckedCreateWithoutItemInput> | BorrowingCreateWithoutItemInput[] | BorrowingUncheckedCreateWithoutItemInput[]
    connectOrCreate?: BorrowingCreateOrConnectWithoutItemInput | BorrowingCreateOrConnectWithoutItemInput[]
    upsert?: BorrowingUpsertWithWhereUniqueWithoutItemInput | BorrowingUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: BorrowingCreateManyItemInputEnvelope
    set?: BorrowingWhereUniqueInput | BorrowingWhereUniqueInput[]
    disconnect?: BorrowingWhereUniqueInput | BorrowingWhereUniqueInput[]
    delete?: BorrowingWhereUniqueInput | BorrowingWhereUniqueInput[]
    connect?: BorrowingWhereUniqueInput | BorrowingWhereUniqueInput[]
    update?: BorrowingUpdateWithWhereUniqueWithoutItemInput | BorrowingUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: BorrowingUpdateManyWithWhereWithoutItemInput | BorrowingUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: BorrowingScalarWhereInput | BorrowingScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<ReservationCreateWithoutItemInput, ReservationUncheckedCreateWithoutItemInput> | ReservationCreateWithoutItemInput[] | ReservationUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutItemInput | ReservationCreateOrConnectWithoutItemInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutItemInput | ReservationUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ReservationCreateManyItemInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutItemInput | ReservationUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutItemInput | ReservationUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type LibraryItemCreateNestedOneWithoutBorrowingsInput = {
    create?: XOR<LibraryItemCreateWithoutBorrowingsInput, LibraryItemUncheckedCreateWithoutBorrowingsInput>
    connectOrCreate?: LibraryItemCreateOrConnectWithoutBorrowingsInput
    connect?: LibraryItemWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBorrowedItemsInput = {
    create?: XOR<UserCreateWithoutBorrowedItemsInput, UserUncheckedCreateWithoutBorrowedItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBorrowedItemsInput
    connect?: UserWhereUniqueInput
  }

  export type FineCreateNestedOneWithoutBorrowingInput = {
    create?: XOR<FineCreateWithoutBorrowingInput, FineUncheckedCreateWithoutBorrowingInput>
    connectOrCreate?: FineCreateOrConnectWithoutBorrowingInput
    connect?: FineWhereUniqueInput
  }

  export type FineUncheckedCreateNestedOneWithoutBorrowingInput = {
    create?: XOR<FineCreateWithoutBorrowingInput, FineUncheckedCreateWithoutBorrowingInput>
    connectOrCreate?: FineCreateOrConnectWithoutBorrowingInput
    connect?: FineWhereUniqueInput
  }

  export type LibraryItemUpdateOneRequiredWithoutBorrowingsNestedInput = {
    create?: XOR<LibraryItemCreateWithoutBorrowingsInput, LibraryItemUncheckedCreateWithoutBorrowingsInput>
    connectOrCreate?: LibraryItemCreateOrConnectWithoutBorrowingsInput
    upsert?: LibraryItemUpsertWithoutBorrowingsInput
    connect?: LibraryItemWhereUniqueInput
    update?: XOR<XOR<LibraryItemUpdateToOneWithWhereWithoutBorrowingsInput, LibraryItemUpdateWithoutBorrowingsInput>, LibraryItemUncheckedUpdateWithoutBorrowingsInput>
  }

  export type UserUpdateOneRequiredWithoutBorrowedItemsNestedInput = {
    create?: XOR<UserCreateWithoutBorrowedItemsInput, UserUncheckedCreateWithoutBorrowedItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBorrowedItemsInput
    upsert?: UserUpsertWithoutBorrowedItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBorrowedItemsInput, UserUpdateWithoutBorrowedItemsInput>, UserUncheckedUpdateWithoutBorrowedItemsInput>
  }

  export type FineUpdateOneWithoutBorrowingNestedInput = {
    create?: XOR<FineCreateWithoutBorrowingInput, FineUncheckedCreateWithoutBorrowingInput>
    connectOrCreate?: FineCreateOrConnectWithoutBorrowingInput
    upsert?: FineUpsertWithoutBorrowingInput
    disconnect?: FineWhereInput | boolean
    delete?: FineWhereInput | boolean
    connect?: FineWhereUniqueInput
    update?: XOR<XOR<FineUpdateToOneWithWhereWithoutBorrowingInput, FineUpdateWithoutBorrowingInput>, FineUncheckedUpdateWithoutBorrowingInput>
  }

  export type FineUncheckedUpdateOneWithoutBorrowingNestedInput = {
    create?: XOR<FineCreateWithoutBorrowingInput, FineUncheckedCreateWithoutBorrowingInput>
    connectOrCreate?: FineCreateOrConnectWithoutBorrowingInput
    upsert?: FineUpsertWithoutBorrowingInput
    disconnect?: FineWhereInput | boolean
    delete?: FineWhereInput | boolean
    connect?: FineWhereUniqueInput
    update?: XOR<XOR<FineUpdateToOneWithWhereWithoutBorrowingInput, FineUpdateWithoutBorrowingInput>, FineUncheckedUpdateWithoutBorrowingInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LibraryItemCreateNestedOneWithoutReservationsInput = {
    create?: XOR<LibraryItemCreateWithoutReservationsInput, LibraryItemUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: LibraryItemCreateOrConnectWithoutReservationsInput
    connect?: LibraryItemWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReservationsInput = {
    create?: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReservationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumReservationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReservationStatus
  }

  export type LibraryItemUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<LibraryItemCreateWithoutReservationsInput, LibraryItemUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: LibraryItemCreateOrConnectWithoutReservationsInput
    upsert?: LibraryItemUpsertWithoutReservationsInput
    connect?: LibraryItemWhereUniqueInput
    update?: XOR<XOR<LibraryItemUpdateToOneWithWhereWithoutReservationsInput, LibraryItemUpdateWithoutReservationsInput>, LibraryItemUncheckedUpdateWithoutReservationsInput>
  }

  export type UserUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReservationsInput
    upsert?: UserUpsertWithoutReservationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReservationsInput, UserUpdateWithoutReservationsInput>, UserUncheckedUpdateWithoutReservationsInput>
  }

  export type UserCreateNestedOneWithoutFinesInput = {
    create?: XOR<UserCreateWithoutFinesInput, UserUncheckedCreateWithoutFinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinesInput
    connect?: UserWhereUniqueInput
  }

  export type BorrowingCreateNestedOneWithoutFineInput = {
    create?: XOR<BorrowingCreateWithoutFineInput, BorrowingUncheckedCreateWithoutFineInput>
    connectOrCreate?: BorrowingCreateOrConnectWithoutFineInput
    connect?: BorrowingWhereUniqueInput
  }

  export type EnumFineStatusFieldUpdateOperationsInput = {
    set?: $Enums.FineStatus
  }

  export type UserUpdateOneRequiredWithoutFinesNestedInput = {
    create?: XOR<UserCreateWithoutFinesInput, UserUncheckedCreateWithoutFinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinesInput
    upsert?: UserUpsertWithoutFinesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFinesInput, UserUpdateWithoutFinesInput>, UserUncheckedUpdateWithoutFinesInput>
  }

  export type BorrowingUpdateOneRequiredWithoutFineNestedInput = {
    create?: XOR<BorrowingCreateWithoutFineInput, BorrowingUncheckedCreateWithoutFineInput>
    connectOrCreate?: BorrowingCreateOrConnectWithoutFineInput
    upsert?: BorrowingUpsertWithoutFineInput
    connect?: BorrowingWhereUniqueInput
    update?: XOR<XOR<BorrowingUpdateToOneWithWhereWithoutFineInput, BorrowingUpdateWithoutFineInput>, BorrowingUncheckedUpdateWithoutFineInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type BlogCreatecategoriesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutBlogsInput = {
    create?: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogsInput
    connect?: UserWhereUniqueInput
  }

  export type BlogUpdatecategoriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutBlogsNestedInput = {
    create?: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogsInput
    upsert?: UserUpsertWithoutBlogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlogsInput, UserUpdateWithoutBlogsInput>, UserUncheckedUpdateWithoutBlogsInput>
  }

  export type AnnouncementCreatecategoriesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutAnnouncementsInput = {
    create?: XOR<UserCreateWithoutAnnouncementsInput, UserUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnnouncementsInput
    connect?: UserWhereUniqueInput
  }

  export type AnnouncementUpdatecategoriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutAnnouncementsNestedInput = {
    create?: XOR<UserCreateWithoutAnnouncementsInput, UserUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnnouncementsInput
    upsert?: UserUpsertWithoutAnnouncementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnnouncementsInput, UserUpdateWithoutAnnouncementsInput>, UserUncheckedUpdateWithoutAnnouncementsInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  }

  export type NestedEnumItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeFilter<$PrismaModel> | $Enums.ItemType
  }

  export type NestedEnumItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusFilter<$PrismaModel> | $Enums.ItemStatus
  }

  export type NestedEnumItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.ItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemTypeFilter<$PrismaModel>
    _max?: NestedEnumItemTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemStatusFilter<$PrismaModel>
    _max?: NestedEnumItemStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type NestedEnumFineStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FineStatus | EnumFineStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FineStatus[] | ListEnumFineStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FineStatus[] | ListEnumFineStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFineStatusFilter<$PrismaModel> | $Enums.FineStatus
  }

  export type NestedEnumFineStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FineStatus | EnumFineStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FineStatus[] | ListEnumFineStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FineStatus[] | ListEnumFineStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFineStatusWithAggregatesFilter<$PrismaModel> | $Enums.FineStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFineStatusFilter<$PrismaModel>
    _max?: NestedEnumFineStatusFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type BorrowingCreateWithoutUserInput = {
    borrowDate?: Date | string
    dueDate: Date | string
    returnDate?: Date | string | null
    renewed?: boolean
    maxRenewals?: number
    renewalCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    item: LibraryItemCreateNestedOneWithoutBorrowingsInput
    fine?: FineCreateNestedOneWithoutBorrowingInput
  }

  export type BorrowingUncheckedCreateWithoutUserInput = {
    id?: number
    borrowDate?: Date | string
    dueDate: Date | string
    returnDate?: Date | string | null
    renewed?: boolean
    maxRenewals?: number
    renewalCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itemId: number
    fine?: FineUncheckedCreateNestedOneWithoutBorrowingInput
  }

  export type BorrowingCreateOrConnectWithoutUserInput = {
    where: BorrowingWhereUniqueInput
    create: XOR<BorrowingCreateWithoutUserInput, BorrowingUncheckedCreateWithoutUserInput>
  }

  export type BorrowingCreateManyUserInputEnvelope = {
    data: BorrowingCreateManyUserInput | BorrowingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReservationCreateWithoutUserInput = {
    reservationDate?: Date | string
    expiryDate: Date | string
    status?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    item: LibraryItemCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutUserInput = {
    id?: number
    reservationDate?: Date | string
    expiryDate: Date | string
    status?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    itemId: number
  }

  export type ReservationCreateOrConnectWithoutUserInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput>
  }

  export type ReservationCreateManyUserInputEnvelope = {
    data: ReservationCreateManyUserInput | ReservationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FineCreateWithoutUserInput = {
    amount: number
    reason: string
    issueDate?: Date | string
    paidDate?: Date | string | null
    status?: $Enums.FineStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    borrowing: BorrowingCreateNestedOneWithoutFineInput
  }

  export type FineUncheckedCreateWithoutUserInput = {
    id?: number
    amount: number
    reason: string
    issueDate?: Date | string
    paidDate?: Date | string | null
    status?: $Enums.FineStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    borrowingId: number
  }

  export type FineCreateOrConnectWithoutUserInput = {
    where: FineWhereUniqueInput
    create: XOR<FineCreateWithoutUserInput, FineUncheckedCreateWithoutUserInput>
  }

  export type FineCreateManyUserInputEnvelope = {
    data: FineCreateManyUserInput | FineCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    type: $Enums.NotificationType
    message: string
    sentAt?: Date | string
    read?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: number
    type: $Enums.NotificationType
    message: string
    sentAt?: Date | string
    read?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BlogCreateWithoutUserInput = {
    title: string
    content: string
    readingTime: number
    categories?: BlogCreatecategoriesInput | string[]
    featuredImage?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BlogUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    content: string
    readingTime: number
    categories?: BlogCreatecategoriesInput | string[]
    featuredImage?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BlogCreateOrConnectWithoutUserInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput>
  }

  export type BlogCreateManyUserInputEnvelope = {
    data: BlogCreateManyUserInput | BlogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnnouncementCreateWithoutUserInput = {
    title: string
    content: string
    categories?: AnnouncementCreatecategoriesInput | string[]
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AnnouncementUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    content: string
    categories?: AnnouncementCreatecategoriesInput | string[]
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AnnouncementCreateOrConnectWithoutUserInput = {
    where: AnnouncementWhereUniqueInput
    create: XOR<AnnouncementCreateWithoutUserInput, AnnouncementUncheckedCreateWithoutUserInput>
  }

  export type AnnouncementCreateManyUserInputEnvelope = {
    data: AnnouncementCreateManyUserInput | AnnouncementCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BorrowingUpsertWithWhereUniqueWithoutUserInput = {
    where: BorrowingWhereUniqueInput
    update: XOR<BorrowingUpdateWithoutUserInput, BorrowingUncheckedUpdateWithoutUserInput>
    create: XOR<BorrowingCreateWithoutUserInput, BorrowingUncheckedCreateWithoutUserInput>
  }

  export type BorrowingUpdateWithWhereUniqueWithoutUserInput = {
    where: BorrowingWhereUniqueInput
    data: XOR<BorrowingUpdateWithoutUserInput, BorrowingUncheckedUpdateWithoutUserInput>
  }

  export type BorrowingUpdateManyWithWhereWithoutUserInput = {
    where: BorrowingScalarWhereInput
    data: XOR<BorrowingUpdateManyMutationInput, BorrowingUncheckedUpdateManyWithoutUserInput>
  }

  export type BorrowingScalarWhereInput = {
    AND?: BorrowingScalarWhereInput | BorrowingScalarWhereInput[]
    OR?: BorrowingScalarWhereInput[]
    NOT?: BorrowingScalarWhereInput | BorrowingScalarWhereInput[]
    id?: IntFilter<"Borrowing"> | number
    borrowDate?: DateTimeFilter<"Borrowing"> | Date | string
    dueDate?: DateTimeFilter<"Borrowing"> | Date | string
    returnDate?: DateTimeNullableFilter<"Borrowing"> | Date | string | null
    renewed?: BoolFilter<"Borrowing"> | boolean
    maxRenewals?: IntFilter<"Borrowing"> | number
    renewalCount?: IntFilter<"Borrowing"> | number
    createdAt?: DateTimeFilter<"Borrowing"> | Date | string
    updatedAt?: DateTimeFilter<"Borrowing"> | Date | string
    itemId?: IntFilter<"Borrowing"> | number
    userId?: IntFilter<"Borrowing"> | number
  }

  export type ReservationUpsertWithWhereUniqueWithoutUserInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutUserInput, ReservationUncheckedUpdateWithoutUserInput>
    create: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutUserInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutUserInput, ReservationUncheckedUpdateWithoutUserInput>
  }

  export type ReservationUpdateManyWithWhereWithoutUserInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutUserInput>
  }

  export type ReservationScalarWhereInput = {
    AND?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    OR?: ReservationScalarWhereInput[]
    NOT?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    id?: IntFilter<"Reservation"> | number
    reservationDate?: DateTimeFilter<"Reservation"> | Date | string
    expiryDate?: DateTimeFilter<"Reservation"> | Date | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    itemId?: IntFilter<"Reservation"> | number
    userId?: IntFilter<"Reservation"> | number
  }

  export type FineUpsertWithWhereUniqueWithoutUserInput = {
    where: FineWhereUniqueInput
    update: XOR<FineUpdateWithoutUserInput, FineUncheckedUpdateWithoutUserInput>
    create: XOR<FineCreateWithoutUserInput, FineUncheckedCreateWithoutUserInput>
  }

  export type FineUpdateWithWhereUniqueWithoutUserInput = {
    where: FineWhereUniqueInput
    data: XOR<FineUpdateWithoutUserInput, FineUncheckedUpdateWithoutUserInput>
  }

  export type FineUpdateManyWithWhereWithoutUserInput = {
    where: FineScalarWhereInput
    data: XOR<FineUpdateManyMutationInput, FineUncheckedUpdateManyWithoutUserInput>
  }

  export type FineScalarWhereInput = {
    AND?: FineScalarWhereInput | FineScalarWhereInput[]
    OR?: FineScalarWhereInput[]
    NOT?: FineScalarWhereInput | FineScalarWhereInput[]
    id?: IntFilter<"Fine"> | number
    amount?: FloatFilter<"Fine"> | number
    reason?: StringFilter<"Fine"> | string
    issueDate?: DateTimeFilter<"Fine"> | Date | string
    paidDate?: DateTimeNullableFilter<"Fine"> | Date | string | null
    status?: EnumFineStatusFilter<"Fine"> | $Enums.FineStatus
    createdAt?: DateTimeFilter<"Fine"> | Date | string
    updatedAt?: DateTimeFilter<"Fine"> | Date | string
    userId?: IntFilter<"Fine"> | number
    borrowingId?: IntFilter<"Fine"> | number
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    message?: StringFilter<"Notification"> | string
    sentAt?: DateTimeFilter<"Notification"> | Date | string
    read?: BoolFilter<"Notification"> | boolean
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    userId?: IntFilter<"Notification"> | number
  }

  export type BlogUpsertWithWhereUniqueWithoutUserInput = {
    where: BlogWhereUniqueInput
    update: XOR<BlogUpdateWithoutUserInput, BlogUncheckedUpdateWithoutUserInput>
    create: XOR<BlogCreateWithoutUserInput, BlogUncheckedCreateWithoutUserInput>
  }

  export type BlogUpdateWithWhereUniqueWithoutUserInput = {
    where: BlogWhereUniqueInput
    data: XOR<BlogUpdateWithoutUserInput, BlogUncheckedUpdateWithoutUserInput>
  }

  export type BlogUpdateManyWithWhereWithoutUserInput = {
    where: BlogScalarWhereInput
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyWithoutUserInput>
  }

  export type BlogScalarWhereInput = {
    AND?: BlogScalarWhereInput | BlogScalarWhereInput[]
    OR?: BlogScalarWhereInput[]
    NOT?: BlogScalarWhereInput | BlogScalarWhereInput[]
    id?: IntFilter<"Blog"> | number
    title?: StringFilter<"Blog"> | string
    content?: StringFilter<"Blog"> | string
    readingTime?: IntFilter<"Blog"> | number
    categories?: StringNullableListFilter<"Blog">
    featuredImage?: StringNullableFilter<"Blog"> | string | null
    isDeleted?: BoolFilter<"Blog"> | boolean
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Blog"> | Date | string | null
    userId?: IntFilter<"Blog"> | number
  }

  export type AnnouncementUpsertWithWhereUniqueWithoutUserInput = {
    where: AnnouncementWhereUniqueInput
    update: XOR<AnnouncementUpdateWithoutUserInput, AnnouncementUncheckedUpdateWithoutUserInput>
    create: XOR<AnnouncementCreateWithoutUserInput, AnnouncementUncheckedCreateWithoutUserInput>
  }

  export type AnnouncementUpdateWithWhereUniqueWithoutUserInput = {
    where: AnnouncementWhereUniqueInput
    data: XOR<AnnouncementUpdateWithoutUserInput, AnnouncementUncheckedUpdateWithoutUserInput>
  }

  export type AnnouncementUpdateManyWithWhereWithoutUserInput = {
    where: AnnouncementScalarWhereInput
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyWithoutUserInput>
  }

  export type AnnouncementScalarWhereInput = {
    AND?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
    OR?: AnnouncementScalarWhereInput[]
    NOT?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
    id?: IntFilter<"Announcement"> | number
    title?: StringFilter<"Announcement"> | string
    content?: StringFilter<"Announcement"> | string
    categories?: StringNullableListFilter<"Announcement">
    isDeleted?: BoolFilter<"Announcement"> | boolean
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    updatedAt?: DateTimeFilter<"Announcement"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Announcement"> | Date | string | null
    userId?: IntFilter<"Announcement"> | number
  }

  export type BorrowingCreateWithoutItemInput = {
    borrowDate?: Date | string
    dueDate: Date | string
    returnDate?: Date | string | null
    renewed?: boolean
    maxRenewals?: number
    renewalCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBorrowedItemsInput
    fine?: FineCreateNestedOneWithoutBorrowingInput
  }

  export type BorrowingUncheckedCreateWithoutItemInput = {
    id?: number
    borrowDate?: Date | string
    dueDate: Date | string
    returnDate?: Date | string | null
    renewed?: boolean
    maxRenewals?: number
    renewalCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    fine?: FineUncheckedCreateNestedOneWithoutBorrowingInput
  }

  export type BorrowingCreateOrConnectWithoutItemInput = {
    where: BorrowingWhereUniqueInput
    create: XOR<BorrowingCreateWithoutItemInput, BorrowingUncheckedCreateWithoutItemInput>
  }

  export type BorrowingCreateManyItemInputEnvelope = {
    data: BorrowingCreateManyItemInput | BorrowingCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type ReservationCreateWithoutItemInput = {
    reservationDate?: Date | string
    expiryDate: Date | string
    status?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutItemInput = {
    id?: number
    reservationDate?: Date | string
    expiryDate: Date | string
    status?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type ReservationCreateOrConnectWithoutItemInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutItemInput, ReservationUncheckedCreateWithoutItemInput>
  }

  export type ReservationCreateManyItemInputEnvelope = {
    data: ReservationCreateManyItemInput | ReservationCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type BorrowingUpsertWithWhereUniqueWithoutItemInput = {
    where: BorrowingWhereUniqueInput
    update: XOR<BorrowingUpdateWithoutItemInput, BorrowingUncheckedUpdateWithoutItemInput>
    create: XOR<BorrowingCreateWithoutItemInput, BorrowingUncheckedCreateWithoutItemInput>
  }

  export type BorrowingUpdateWithWhereUniqueWithoutItemInput = {
    where: BorrowingWhereUniqueInput
    data: XOR<BorrowingUpdateWithoutItemInput, BorrowingUncheckedUpdateWithoutItemInput>
  }

  export type BorrowingUpdateManyWithWhereWithoutItemInput = {
    where: BorrowingScalarWhereInput
    data: XOR<BorrowingUpdateManyMutationInput, BorrowingUncheckedUpdateManyWithoutItemInput>
  }

  export type ReservationUpsertWithWhereUniqueWithoutItemInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutItemInput, ReservationUncheckedUpdateWithoutItemInput>
    create: XOR<ReservationCreateWithoutItemInput, ReservationUncheckedCreateWithoutItemInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutItemInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutItemInput, ReservationUncheckedUpdateWithoutItemInput>
  }

  export type ReservationUpdateManyWithWhereWithoutItemInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutItemInput>
  }

  export type LibraryItemCreateWithoutBorrowingsInput = {
    title: string
    author: string
    publisher: string
    isbn?: string | null
    itemType: $Enums.ItemType
    categories?: LibraryItemCreatecategoriesInput | string[]
    languages?: LibraryItemCreatelanguagesInput | string[]
    yearPublished?: number | null
    edition?: string | null
    shelfLocation?: string | null
    status?: $Enums.ItemStatus
    coverImage?: string | null
    description?: string | null
    isReference?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reservations?: ReservationCreateNestedManyWithoutItemInput
  }

  export type LibraryItemUncheckedCreateWithoutBorrowingsInput = {
    id?: number
    title: string
    author: string
    publisher: string
    isbn?: string | null
    itemType: $Enums.ItemType
    categories?: LibraryItemCreatecategoriesInput | string[]
    languages?: LibraryItemCreatelanguagesInput | string[]
    yearPublished?: number | null
    edition?: string | null
    shelfLocation?: string | null
    status?: $Enums.ItemStatus
    coverImage?: string | null
    description?: string | null
    isReference?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reservations?: ReservationUncheckedCreateNestedManyWithoutItemInput
  }

  export type LibraryItemCreateOrConnectWithoutBorrowingsInput = {
    where: LibraryItemWhereUniqueInput
    create: XOR<LibraryItemCreateWithoutBorrowingsInput, LibraryItemUncheckedCreateWithoutBorrowingsInput>
  }

  export type UserCreateWithoutBorrowedItemsInput = {
    userImage?: string | null
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    libraryCardId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reservations?: ReservationCreateNestedManyWithoutUserInput
    fines?: FineCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    blogs?: BlogCreateNestedManyWithoutUserInput
    announcements?: AnnouncementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBorrowedItemsInput = {
    id?: number
    userImage?: string | null
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    libraryCardId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reservations?: ReservationUncheckedCreateNestedManyWithoutUserInput
    fines?: FineUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    blogs?: BlogUncheckedCreateNestedManyWithoutUserInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBorrowedItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBorrowedItemsInput, UserUncheckedCreateWithoutBorrowedItemsInput>
  }

  export type FineCreateWithoutBorrowingInput = {
    amount: number
    reason: string
    issueDate?: Date | string
    paidDate?: Date | string | null
    status?: $Enums.FineStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFinesInput
  }

  export type FineUncheckedCreateWithoutBorrowingInput = {
    id?: number
    amount: number
    reason: string
    issueDate?: Date | string
    paidDate?: Date | string | null
    status?: $Enums.FineStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type FineCreateOrConnectWithoutBorrowingInput = {
    where: FineWhereUniqueInput
    create: XOR<FineCreateWithoutBorrowingInput, FineUncheckedCreateWithoutBorrowingInput>
  }

  export type LibraryItemUpsertWithoutBorrowingsInput = {
    update: XOR<LibraryItemUpdateWithoutBorrowingsInput, LibraryItemUncheckedUpdateWithoutBorrowingsInput>
    create: XOR<LibraryItemCreateWithoutBorrowingsInput, LibraryItemUncheckedCreateWithoutBorrowingsInput>
    where?: LibraryItemWhereInput
  }

  export type LibraryItemUpdateToOneWithWhereWithoutBorrowingsInput = {
    where?: LibraryItemWhereInput
    data: XOR<LibraryItemUpdateWithoutBorrowingsInput, LibraryItemUncheckedUpdateWithoutBorrowingsInput>
  }

  export type LibraryItemUpdateWithoutBorrowingsInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    itemType?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    categories?: LibraryItemUpdatecategoriesInput | string[]
    languages?: LibraryItemUpdatelanguagesInput | string[]
    yearPublished?: NullableIntFieldUpdateOperationsInput | number | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    shelfLocation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isReference?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservations?: ReservationUpdateManyWithoutItemNestedInput
  }

  export type LibraryItemUncheckedUpdateWithoutBorrowingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    itemType?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    categories?: LibraryItemUpdatecategoriesInput | string[]
    languages?: LibraryItemUpdatelanguagesInput | string[]
    yearPublished?: NullableIntFieldUpdateOperationsInput | number | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    shelfLocation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isReference?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservations?: ReservationUncheckedUpdateManyWithoutItemNestedInput
  }

  export type UserUpsertWithoutBorrowedItemsInput = {
    update: XOR<UserUpdateWithoutBorrowedItemsInput, UserUncheckedUpdateWithoutBorrowedItemsInput>
    create: XOR<UserCreateWithoutBorrowedItemsInput, UserUncheckedCreateWithoutBorrowedItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBorrowedItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBorrowedItemsInput, UserUncheckedUpdateWithoutBorrowedItemsInput>
  }

  export type UserUpdateWithoutBorrowedItemsInput = {
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    libraryCardId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservations?: ReservationUpdateManyWithoutUserNestedInput
    fines?: FineUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    blogs?: BlogUpdateManyWithoutUserNestedInput
    announcements?: AnnouncementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBorrowedItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    libraryCardId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reservations?: ReservationUncheckedUpdateManyWithoutUserNestedInput
    fines?: FineUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FineUpsertWithoutBorrowingInput = {
    update: XOR<FineUpdateWithoutBorrowingInput, FineUncheckedUpdateWithoutBorrowingInput>
    create: XOR<FineCreateWithoutBorrowingInput, FineUncheckedCreateWithoutBorrowingInput>
    where?: FineWhereInput
  }

  export type FineUpdateToOneWithWhereWithoutBorrowingInput = {
    where?: FineWhereInput
    data: XOR<FineUpdateWithoutBorrowingInput, FineUncheckedUpdateWithoutBorrowingInput>
  }

  export type FineUpdateWithoutBorrowingInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumFineStatusFieldUpdateOperationsInput | $Enums.FineStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFinesNestedInput
  }

  export type FineUncheckedUpdateWithoutBorrowingInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumFineStatusFieldUpdateOperationsInput | $Enums.FineStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type LibraryItemCreateWithoutReservationsInput = {
    title: string
    author: string
    publisher: string
    isbn?: string | null
    itemType: $Enums.ItemType
    categories?: LibraryItemCreatecategoriesInput | string[]
    languages?: LibraryItemCreatelanguagesInput | string[]
    yearPublished?: number | null
    edition?: string | null
    shelfLocation?: string | null
    status?: $Enums.ItemStatus
    coverImage?: string | null
    description?: string | null
    isReference?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    borrowings?: BorrowingCreateNestedManyWithoutItemInput
  }

  export type LibraryItemUncheckedCreateWithoutReservationsInput = {
    id?: number
    title: string
    author: string
    publisher: string
    isbn?: string | null
    itemType: $Enums.ItemType
    categories?: LibraryItemCreatecategoriesInput | string[]
    languages?: LibraryItemCreatelanguagesInput | string[]
    yearPublished?: number | null
    edition?: string | null
    shelfLocation?: string | null
    status?: $Enums.ItemStatus
    coverImage?: string | null
    description?: string | null
    isReference?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    borrowings?: BorrowingUncheckedCreateNestedManyWithoutItemInput
  }

  export type LibraryItemCreateOrConnectWithoutReservationsInput = {
    where: LibraryItemWhereUniqueInput
    create: XOR<LibraryItemCreateWithoutReservationsInput, LibraryItemUncheckedCreateWithoutReservationsInput>
  }

  export type UserCreateWithoutReservationsInput = {
    userImage?: string | null
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    libraryCardId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    borrowedItems?: BorrowingCreateNestedManyWithoutUserInput
    fines?: FineCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    blogs?: BlogCreateNestedManyWithoutUserInput
    announcements?: AnnouncementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReservationsInput = {
    id?: number
    userImage?: string | null
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    libraryCardId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    borrowedItems?: BorrowingUncheckedCreateNestedManyWithoutUserInput
    fines?: FineUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    blogs?: BlogUncheckedCreateNestedManyWithoutUserInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReservationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
  }

  export type LibraryItemUpsertWithoutReservationsInput = {
    update: XOR<LibraryItemUpdateWithoutReservationsInput, LibraryItemUncheckedUpdateWithoutReservationsInput>
    create: XOR<LibraryItemCreateWithoutReservationsInput, LibraryItemUncheckedCreateWithoutReservationsInput>
    where?: LibraryItemWhereInput
  }

  export type LibraryItemUpdateToOneWithWhereWithoutReservationsInput = {
    where?: LibraryItemWhereInput
    data: XOR<LibraryItemUpdateWithoutReservationsInput, LibraryItemUncheckedUpdateWithoutReservationsInput>
  }

  export type LibraryItemUpdateWithoutReservationsInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    itemType?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    categories?: LibraryItemUpdatecategoriesInput | string[]
    languages?: LibraryItemUpdatelanguagesInput | string[]
    yearPublished?: NullableIntFieldUpdateOperationsInput | number | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    shelfLocation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isReference?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowings?: BorrowingUpdateManyWithoutItemNestedInput
  }

  export type LibraryItemUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    itemType?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    categories?: LibraryItemUpdatecategoriesInput | string[]
    languages?: LibraryItemUpdatelanguagesInput | string[]
    yearPublished?: NullableIntFieldUpdateOperationsInput | number | null
    edition?: NullableStringFieldUpdateOperationsInput | string | null
    shelfLocation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isReference?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowings?: BorrowingUncheckedUpdateManyWithoutItemNestedInput
  }

  export type UserUpsertWithoutReservationsInput = {
    update: XOR<UserUpdateWithoutReservationsInput, UserUncheckedUpdateWithoutReservationsInput>
    create: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReservationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReservationsInput, UserUncheckedUpdateWithoutReservationsInput>
  }

  export type UserUpdateWithoutReservationsInput = {
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    libraryCardId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowedItems?: BorrowingUpdateManyWithoutUserNestedInput
    fines?: FineUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    blogs?: BlogUpdateManyWithoutUserNestedInput
    announcements?: AnnouncementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    libraryCardId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowedItems?: BorrowingUncheckedUpdateManyWithoutUserNestedInput
    fines?: FineUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFinesInput = {
    userImage?: string | null
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    libraryCardId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    borrowedItems?: BorrowingCreateNestedManyWithoutUserInput
    reservations?: ReservationCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    blogs?: BlogCreateNestedManyWithoutUserInput
    announcements?: AnnouncementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFinesInput = {
    id?: number
    userImage?: string | null
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    libraryCardId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    borrowedItems?: BorrowingUncheckedCreateNestedManyWithoutUserInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    blogs?: BlogUncheckedCreateNestedManyWithoutUserInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFinesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFinesInput, UserUncheckedCreateWithoutFinesInput>
  }

  export type BorrowingCreateWithoutFineInput = {
    borrowDate?: Date | string
    dueDate: Date | string
    returnDate?: Date | string | null
    renewed?: boolean
    maxRenewals?: number
    renewalCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    item: LibraryItemCreateNestedOneWithoutBorrowingsInput
    user: UserCreateNestedOneWithoutBorrowedItemsInput
  }

  export type BorrowingUncheckedCreateWithoutFineInput = {
    id?: number
    borrowDate?: Date | string
    dueDate: Date | string
    returnDate?: Date | string | null
    renewed?: boolean
    maxRenewals?: number
    renewalCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itemId: number
    userId: number
  }

  export type BorrowingCreateOrConnectWithoutFineInput = {
    where: BorrowingWhereUniqueInput
    create: XOR<BorrowingCreateWithoutFineInput, BorrowingUncheckedCreateWithoutFineInput>
  }

  export type UserUpsertWithoutFinesInput = {
    update: XOR<UserUpdateWithoutFinesInput, UserUncheckedUpdateWithoutFinesInput>
    create: XOR<UserCreateWithoutFinesInput, UserUncheckedCreateWithoutFinesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFinesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFinesInput, UserUncheckedUpdateWithoutFinesInput>
  }

  export type UserUpdateWithoutFinesInput = {
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    libraryCardId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowedItems?: BorrowingUpdateManyWithoutUserNestedInput
    reservations?: ReservationUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    blogs?: BlogUpdateManyWithoutUserNestedInput
    announcements?: AnnouncementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    libraryCardId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowedItems?: BorrowingUncheckedUpdateManyWithoutUserNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BorrowingUpsertWithoutFineInput = {
    update: XOR<BorrowingUpdateWithoutFineInput, BorrowingUncheckedUpdateWithoutFineInput>
    create: XOR<BorrowingCreateWithoutFineInput, BorrowingUncheckedCreateWithoutFineInput>
    where?: BorrowingWhereInput
  }

  export type BorrowingUpdateToOneWithWhereWithoutFineInput = {
    where?: BorrowingWhereInput
    data: XOR<BorrowingUpdateWithoutFineInput, BorrowingUncheckedUpdateWithoutFineInput>
  }

  export type BorrowingUpdateWithoutFineInput = {
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewed?: BoolFieldUpdateOperationsInput | boolean
    maxRenewals?: IntFieldUpdateOperationsInput | number
    renewalCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: LibraryItemUpdateOneRequiredWithoutBorrowingsNestedInput
    user?: UserUpdateOneRequiredWithoutBorrowedItemsNestedInput
  }

  export type BorrowingUncheckedUpdateWithoutFineInput = {
    id?: IntFieldUpdateOperationsInput | number
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewed?: BoolFieldUpdateOperationsInput | boolean
    maxRenewals?: IntFieldUpdateOperationsInput | number
    renewalCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutNotificationsInput = {
    userImage?: string | null
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    libraryCardId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    borrowedItems?: BorrowingCreateNestedManyWithoutUserInput
    reservations?: ReservationCreateNestedManyWithoutUserInput
    fines?: FineCreateNestedManyWithoutUserInput
    blogs?: BlogCreateNestedManyWithoutUserInput
    announcements?: AnnouncementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: number
    userImage?: string | null
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    libraryCardId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    borrowedItems?: BorrowingUncheckedCreateNestedManyWithoutUserInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutUserInput
    fines?: FineUncheckedCreateNestedManyWithoutUserInput
    blogs?: BlogUncheckedCreateNestedManyWithoutUserInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    libraryCardId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowedItems?: BorrowingUpdateManyWithoutUserNestedInput
    reservations?: ReservationUpdateManyWithoutUserNestedInput
    fines?: FineUpdateManyWithoutUserNestedInput
    blogs?: BlogUpdateManyWithoutUserNestedInput
    announcements?: AnnouncementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    libraryCardId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowedItems?: BorrowingUncheckedUpdateManyWithoutUserNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutUserNestedInput
    fines?: FineUncheckedUpdateManyWithoutUserNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBlogsInput = {
    userImage?: string | null
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    libraryCardId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    borrowedItems?: BorrowingCreateNestedManyWithoutUserInput
    reservations?: ReservationCreateNestedManyWithoutUserInput
    fines?: FineCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    announcements?: AnnouncementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlogsInput = {
    id?: number
    userImage?: string | null
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    libraryCardId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    borrowedItems?: BorrowingUncheckedCreateNestedManyWithoutUserInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutUserInput
    fines?: FineUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
  }

  export type UserUpsertWithoutBlogsInput = {
    update: XOR<UserUpdateWithoutBlogsInput, UserUncheckedUpdateWithoutBlogsInput>
    create: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlogsInput, UserUncheckedUpdateWithoutBlogsInput>
  }

  export type UserUpdateWithoutBlogsInput = {
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    libraryCardId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowedItems?: BorrowingUpdateManyWithoutUserNestedInput
    reservations?: ReservationUpdateManyWithoutUserNestedInput
    fines?: FineUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    announcements?: AnnouncementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    libraryCardId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowedItems?: BorrowingUncheckedUpdateManyWithoutUserNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutUserNestedInput
    fines?: FineUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAnnouncementsInput = {
    userImage?: string | null
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    libraryCardId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    borrowedItems?: BorrowingCreateNestedManyWithoutUserInput
    reservations?: ReservationCreateNestedManyWithoutUserInput
    fines?: FineCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    blogs?: BlogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnnouncementsInput = {
    id?: number
    userImage?: string | null
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    libraryCardId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    borrowedItems?: BorrowingUncheckedCreateNestedManyWithoutUserInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutUserInput
    fines?: FineUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    blogs?: BlogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnnouncementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnnouncementsInput, UserUncheckedCreateWithoutAnnouncementsInput>
  }

  export type UserUpsertWithoutAnnouncementsInput = {
    update: XOR<UserUpdateWithoutAnnouncementsInput, UserUncheckedUpdateWithoutAnnouncementsInput>
    create: XOR<UserCreateWithoutAnnouncementsInput, UserUncheckedCreateWithoutAnnouncementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnnouncementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnnouncementsInput, UserUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type UserUpdateWithoutAnnouncementsInput = {
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    libraryCardId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowedItems?: BorrowingUpdateManyWithoutUserNestedInput
    reservations?: ReservationUpdateManyWithoutUserNestedInput
    fines?: FineUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    blogs?: BlogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnnouncementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userImage?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    libraryCardId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    borrowedItems?: BorrowingUncheckedUpdateManyWithoutUserNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutUserNestedInput
    fines?: FineUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BorrowingCreateManyUserInput = {
    id?: number
    borrowDate?: Date | string
    dueDate: Date | string
    returnDate?: Date | string | null
    renewed?: boolean
    maxRenewals?: number
    renewalCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itemId: number
  }

  export type ReservationCreateManyUserInput = {
    id?: number
    reservationDate?: Date | string
    expiryDate: Date | string
    status?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    itemId: number
  }

  export type FineCreateManyUserInput = {
    id?: number
    amount: number
    reason: string
    issueDate?: Date | string
    paidDate?: Date | string | null
    status?: $Enums.FineStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    borrowingId: number
  }

  export type NotificationCreateManyUserInput = {
    id?: number
    type: $Enums.NotificationType
    message: string
    sentAt?: Date | string
    read?: boolean
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogCreateManyUserInput = {
    id?: number
    title: string
    content: string
    readingTime: number
    categories?: BlogCreatecategoriesInput | string[]
    featuredImage?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AnnouncementCreateManyUserInput = {
    id?: number
    title: string
    content: string
    categories?: AnnouncementCreatecategoriesInput | string[]
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BorrowingUpdateWithoutUserInput = {
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewed?: BoolFieldUpdateOperationsInput | boolean
    maxRenewals?: IntFieldUpdateOperationsInput | number
    renewalCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: LibraryItemUpdateOneRequiredWithoutBorrowingsNestedInput
    fine?: FineUpdateOneWithoutBorrowingNestedInput
  }

  export type BorrowingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewed?: BoolFieldUpdateOperationsInput | boolean
    maxRenewals?: IntFieldUpdateOperationsInput | number
    renewalCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: IntFieldUpdateOperationsInput | number
    fine?: FineUncheckedUpdateOneWithoutBorrowingNestedInput
  }

  export type BorrowingUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewed?: BoolFieldUpdateOperationsInput | boolean
    maxRenewals?: IntFieldUpdateOperationsInput | number
    renewalCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationUpdateWithoutUserInput = {
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: LibraryItemUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type FineUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumFineStatusFieldUpdateOperationsInput | $Enums.FineStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    borrowing?: BorrowingUpdateOneRequiredWithoutFineNestedInput
  }

  export type FineUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumFineStatusFieldUpdateOperationsInput | $Enums.FineStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    borrowingId?: IntFieldUpdateOperationsInput | number
  }

  export type FineUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumFineStatusFieldUpdateOperationsInput | $Enums.FineStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    borrowingId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationUpdateWithoutUserInput = {
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    readingTime?: IntFieldUpdateOperationsInput | number
    categories?: BlogUpdatecategoriesInput | string[]
    featuredImage?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BlogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    readingTime?: IntFieldUpdateOperationsInput | number
    categories?: BlogUpdatecategoriesInput | string[]
    featuredImage?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BlogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    readingTime?: IntFieldUpdateOperationsInput | number
    categories?: BlogUpdatecategoriesInput | string[]
    featuredImage?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnnouncementUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    categories?: AnnouncementUpdatecategoriesInput | string[]
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnnouncementUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    categories?: AnnouncementUpdatecategoriesInput | string[]
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnnouncementUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    categories?: AnnouncementUpdatecategoriesInput | string[]
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BorrowingCreateManyItemInput = {
    id?: number
    borrowDate?: Date | string
    dueDate: Date | string
    returnDate?: Date | string | null
    renewed?: boolean
    maxRenewals?: number
    renewalCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type ReservationCreateManyItemInput = {
    id?: number
    reservationDate?: Date | string
    expiryDate: Date | string
    status?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type BorrowingUpdateWithoutItemInput = {
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewed?: BoolFieldUpdateOperationsInput | boolean
    maxRenewals?: IntFieldUpdateOperationsInput | number
    renewalCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBorrowedItemsNestedInput
    fine?: FineUpdateOneWithoutBorrowingNestedInput
  }

  export type BorrowingUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewed?: BoolFieldUpdateOperationsInput | boolean
    maxRenewals?: IntFieldUpdateOperationsInput | number
    renewalCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    fine?: FineUncheckedUpdateOneWithoutBorrowingNestedInput
  }

  export type BorrowingUncheckedUpdateManyWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renewed?: BoolFieldUpdateOperationsInput | boolean
    maxRenewals?: IntFieldUpdateOperationsInput | number
    renewalCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationUpdateWithoutItemInput = {
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationUncheckedUpdateManyWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
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
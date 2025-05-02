
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
 * Model Clases
 * 
 */
export type Clases = $Result.DefaultSelection<Prisma.$ClasesPayload>
/**
 * Model Comentarios
 * 
 */
export type Comentarios = $Result.DefaultSelection<Prisma.$ComentariosPayload>
/**
 * Model Entrenadores
 * 
 */
export type Entrenadores = $Result.DefaultSelection<Prisma.$EntrenadoresPayload>
/**
 * Model Espacios
 * 
 */
export type Espacios = $Result.DefaultSelection<Prisma.$EspaciosPayload>
/**
 * Model Horarios
 * 
 */
export type Horarios = $Result.DefaultSelection<Prisma.$HorariosPayload>
/**
 * Model InscripcionClases
 * 
 */
export type InscripcionClases = $Result.DefaultSelection<Prisma.$InscripcionClasesPayload>
/**
 * Model InscripcionTorneos
 * 
 */
export type InscripcionTorneos = $Result.DefaultSelection<Prisma.$InscripcionTorneosPayload>
/**
 * Model Reservas
 * 
 */
export type Reservas = $Result.DefaultSelection<Prisma.$ReservasPayload>
/**
 * Model Talleres
 * 
 */
export type Talleres = $Result.DefaultSelection<Prisma.$TalleresPayload>
/**
 * Model Torneos
 * 
 */
export type Torneos = $Result.DefaultSelection<Prisma.$TorneosPayload>
/**
 * Model Usuarios
 * 
 */
export type Usuarios = $Result.DefaultSelection<Prisma.$UsuariosPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Espacios_Tipo: {
  deportivo: 'deportivo',
  recreativo: 'recreativo'
};

export type Espacios_Tipo = (typeof Espacios_Tipo)[keyof typeof Espacios_Tipo]


export const Usuarios_Nivel: {
  admin: 'admin',
  entrenador: 'entrenador',
  usuario: 'usuario'
};

export type Usuarios_Nivel = (typeof Usuarios_Nivel)[keyof typeof Usuarios_Nivel]


export const Reservas_Estado: {
  pendiente: 'pendiente',
  confirmada: 'confirmada',
  cancelada: 'cancelada'
};

export type Reservas_Estado = (typeof Reservas_Estado)[keyof typeof Reservas_Estado]

}

export type Espacios_Tipo = $Enums.Espacios_Tipo

export const Espacios_Tipo: typeof $Enums.Espacios_Tipo

export type Usuarios_Nivel = $Enums.Usuarios_Nivel

export const Usuarios_Nivel: typeof $Enums.Usuarios_Nivel

export type Reservas_Estado = $Enums.Reservas_Estado

export const Reservas_Estado: typeof $Enums.Reservas_Estado

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clases
 * const clases = await prisma.clases.findMany()
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
   * // Fetch zero or more Clases
   * const clases = await prisma.clases.findMany()
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
   * `prisma.clases`: Exposes CRUD operations for the **Clases** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clases
    * const clases = await prisma.clases.findMany()
    * ```
    */
  get clases(): Prisma.ClasesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comentarios`: Exposes CRUD operations for the **Comentarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comentarios
    * const comentarios = await prisma.comentarios.findMany()
    * ```
    */
  get comentarios(): Prisma.ComentariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entrenadores`: Exposes CRUD operations for the **Entrenadores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entrenadores
    * const entrenadores = await prisma.entrenadores.findMany()
    * ```
    */
  get entrenadores(): Prisma.EntrenadoresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.espacios`: Exposes CRUD operations for the **Espacios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Espacios
    * const espacios = await prisma.espacios.findMany()
    * ```
    */
  get espacios(): Prisma.EspaciosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.horarios`: Exposes CRUD operations for the **Horarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Horarios
    * const horarios = await prisma.horarios.findMany()
    * ```
    */
  get horarios(): Prisma.HorariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inscripcionClases`: Exposes CRUD operations for the **InscripcionClases** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InscripcionClases
    * const inscripcionClases = await prisma.inscripcionClases.findMany()
    * ```
    */
  get inscripcionClases(): Prisma.InscripcionClasesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inscripcionTorneos`: Exposes CRUD operations for the **InscripcionTorneos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InscripcionTorneos
    * const inscripcionTorneos = await prisma.inscripcionTorneos.findMany()
    * ```
    */
  get inscripcionTorneos(): Prisma.InscripcionTorneosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservas`: Exposes CRUD operations for the **Reservas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservas
    * const reservas = await prisma.reservas.findMany()
    * ```
    */
  get reservas(): Prisma.ReservasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.talleres`: Exposes CRUD operations for the **Talleres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Talleres
    * const talleres = await prisma.talleres.findMany()
    * ```
    */
  get talleres(): Prisma.TalleresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.torneos`: Exposes CRUD operations for the **Torneos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Torneos
    * const torneos = await prisma.torneos.findMany()
    * ```
    */
  get torneos(): Prisma.TorneosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **Usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.UsuariosDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Clases: 'Clases',
    Comentarios: 'Comentarios',
    Entrenadores: 'Entrenadores',
    Espacios: 'Espacios',
    Horarios: 'Horarios',
    InscripcionClases: 'InscripcionClases',
    InscripcionTorneos: 'InscripcionTorneos',
    Reservas: 'Reservas',
    Talleres: 'Talleres',
    Torneos: 'Torneos',
    Usuarios: 'Usuarios'
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
      modelProps: "clases" | "comentarios" | "entrenadores" | "espacios" | "horarios" | "inscripcionClases" | "inscripcionTorneos" | "reservas" | "talleres" | "torneos" | "usuarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Clases: {
        payload: Prisma.$ClasesPayload<ExtArgs>
        fields: Prisma.ClasesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClasesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClasesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasesPayload>
          }
          findFirst: {
            args: Prisma.ClasesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClasesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasesPayload>
          }
          findMany: {
            args: Prisma.ClasesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasesPayload>[]
          }
          create: {
            args: Prisma.ClasesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasesPayload>
          }
          createMany: {
            args: Prisma.ClasesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClasesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasesPayload>
          }
          update: {
            args: Prisma.ClasesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasesPayload>
          }
          deleteMany: {
            args: Prisma.ClasesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClasesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClasesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClasesPayload>
          }
          aggregate: {
            args: Prisma.ClasesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClases>
          }
          groupBy: {
            args: Prisma.ClasesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClasesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClasesCountArgs<ExtArgs>
            result: $Utils.Optional<ClasesCountAggregateOutputType> | number
          }
        }
      }
      Comentarios: {
        payload: Prisma.$ComentariosPayload<ExtArgs>
        fields: Prisma.ComentariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComentariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComentariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentariosPayload>
          }
          findFirst: {
            args: Prisma.ComentariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComentariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentariosPayload>
          }
          findMany: {
            args: Prisma.ComentariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentariosPayload>[]
          }
          create: {
            args: Prisma.ComentariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentariosPayload>
          }
          createMany: {
            args: Prisma.ComentariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ComentariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentariosPayload>
          }
          update: {
            args: Prisma.ComentariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentariosPayload>
          }
          deleteMany: {
            args: Prisma.ComentariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComentariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ComentariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComentariosPayload>
          }
          aggregate: {
            args: Prisma.ComentariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComentarios>
          }
          groupBy: {
            args: Prisma.ComentariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComentariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComentariosCountArgs<ExtArgs>
            result: $Utils.Optional<ComentariosCountAggregateOutputType> | number
          }
        }
      }
      Entrenadores: {
        payload: Prisma.$EntrenadoresPayload<ExtArgs>
        fields: Prisma.EntrenadoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntrenadoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntrenadoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadoresPayload>
          }
          findFirst: {
            args: Prisma.EntrenadoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntrenadoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadoresPayload>
          }
          findMany: {
            args: Prisma.EntrenadoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadoresPayload>[]
          }
          create: {
            args: Prisma.EntrenadoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadoresPayload>
          }
          createMany: {
            args: Prisma.EntrenadoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EntrenadoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadoresPayload>
          }
          update: {
            args: Prisma.EntrenadoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadoresPayload>
          }
          deleteMany: {
            args: Prisma.EntrenadoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntrenadoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EntrenadoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadoresPayload>
          }
          aggregate: {
            args: Prisma.EntrenadoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntrenadores>
          }
          groupBy: {
            args: Prisma.EntrenadoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntrenadoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntrenadoresCountArgs<ExtArgs>
            result: $Utils.Optional<EntrenadoresCountAggregateOutputType> | number
          }
        }
      }
      Espacios: {
        payload: Prisma.$EspaciosPayload<ExtArgs>
        fields: Prisma.EspaciosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EspaciosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspaciosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EspaciosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspaciosPayload>
          }
          findFirst: {
            args: Prisma.EspaciosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspaciosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EspaciosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspaciosPayload>
          }
          findMany: {
            args: Prisma.EspaciosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspaciosPayload>[]
          }
          create: {
            args: Prisma.EspaciosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspaciosPayload>
          }
          createMany: {
            args: Prisma.EspaciosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EspaciosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspaciosPayload>
          }
          update: {
            args: Prisma.EspaciosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspaciosPayload>
          }
          deleteMany: {
            args: Prisma.EspaciosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EspaciosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EspaciosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EspaciosPayload>
          }
          aggregate: {
            args: Prisma.EspaciosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEspacios>
          }
          groupBy: {
            args: Prisma.EspaciosGroupByArgs<ExtArgs>
            result: $Utils.Optional<EspaciosGroupByOutputType>[]
          }
          count: {
            args: Prisma.EspaciosCountArgs<ExtArgs>
            result: $Utils.Optional<EspaciosCountAggregateOutputType> | number
          }
        }
      }
      Horarios: {
        payload: Prisma.$HorariosPayload<ExtArgs>
        fields: Prisma.HorariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HorariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HorariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorariosPayload>
          }
          findFirst: {
            args: Prisma.HorariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HorariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorariosPayload>
          }
          findMany: {
            args: Prisma.HorariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorariosPayload>[]
          }
          create: {
            args: Prisma.HorariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorariosPayload>
          }
          createMany: {
            args: Prisma.HorariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HorariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorariosPayload>
          }
          update: {
            args: Prisma.HorariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorariosPayload>
          }
          deleteMany: {
            args: Prisma.HorariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HorariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HorariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorariosPayload>
          }
          aggregate: {
            args: Prisma.HorariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHorarios>
          }
          groupBy: {
            args: Prisma.HorariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<HorariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.HorariosCountArgs<ExtArgs>
            result: $Utils.Optional<HorariosCountAggregateOutputType> | number
          }
        }
      }
      InscripcionClases: {
        payload: Prisma.$InscripcionClasesPayload<ExtArgs>
        fields: Prisma.InscripcionClasesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InscripcionClasesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionClasesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InscripcionClasesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionClasesPayload>
          }
          findFirst: {
            args: Prisma.InscripcionClasesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionClasesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InscripcionClasesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionClasesPayload>
          }
          findMany: {
            args: Prisma.InscripcionClasesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionClasesPayload>[]
          }
          create: {
            args: Prisma.InscripcionClasesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionClasesPayload>
          }
          createMany: {
            args: Prisma.InscripcionClasesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InscripcionClasesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionClasesPayload>
          }
          update: {
            args: Prisma.InscripcionClasesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionClasesPayload>
          }
          deleteMany: {
            args: Prisma.InscripcionClasesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InscripcionClasesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InscripcionClasesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionClasesPayload>
          }
          aggregate: {
            args: Prisma.InscripcionClasesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInscripcionClases>
          }
          groupBy: {
            args: Prisma.InscripcionClasesGroupByArgs<ExtArgs>
            result: $Utils.Optional<InscripcionClasesGroupByOutputType>[]
          }
          count: {
            args: Prisma.InscripcionClasesCountArgs<ExtArgs>
            result: $Utils.Optional<InscripcionClasesCountAggregateOutputType> | number
          }
        }
      }
      InscripcionTorneos: {
        payload: Prisma.$InscripcionTorneosPayload<ExtArgs>
        fields: Prisma.InscripcionTorneosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InscripcionTorneosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionTorneosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InscripcionTorneosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionTorneosPayload>
          }
          findFirst: {
            args: Prisma.InscripcionTorneosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionTorneosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InscripcionTorneosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionTorneosPayload>
          }
          findMany: {
            args: Prisma.InscripcionTorneosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionTorneosPayload>[]
          }
          create: {
            args: Prisma.InscripcionTorneosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionTorneosPayload>
          }
          createMany: {
            args: Prisma.InscripcionTorneosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InscripcionTorneosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionTorneosPayload>
          }
          update: {
            args: Prisma.InscripcionTorneosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionTorneosPayload>
          }
          deleteMany: {
            args: Prisma.InscripcionTorneosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InscripcionTorneosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InscripcionTorneosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionTorneosPayload>
          }
          aggregate: {
            args: Prisma.InscripcionTorneosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInscripcionTorneos>
          }
          groupBy: {
            args: Prisma.InscripcionTorneosGroupByArgs<ExtArgs>
            result: $Utils.Optional<InscripcionTorneosGroupByOutputType>[]
          }
          count: {
            args: Prisma.InscripcionTorneosCountArgs<ExtArgs>
            result: $Utils.Optional<InscripcionTorneosCountAggregateOutputType> | number
          }
        }
      }
      Reservas: {
        payload: Prisma.$ReservasPayload<ExtArgs>
        fields: Prisma.ReservasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservasPayload>
          }
          findFirst: {
            args: Prisma.ReservasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservasPayload>
          }
          findMany: {
            args: Prisma.ReservasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservasPayload>[]
          }
          create: {
            args: Prisma.ReservasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservasPayload>
          }
          createMany: {
            args: Prisma.ReservasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReservasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservasPayload>
          }
          update: {
            args: Prisma.ReservasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservasPayload>
          }
          deleteMany: {
            args: Prisma.ReservasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReservasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservasPayload>
          }
          aggregate: {
            args: Prisma.ReservasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservas>
          }
          groupBy: {
            args: Prisma.ReservasGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservasGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservasCountArgs<ExtArgs>
            result: $Utils.Optional<ReservasCountAggregateOutputType> | number
          }
        }
      }
      Talleres: {
        payload: Prisma.$TalleresPayload<ExtArgs>
        fields: Prisma.TalleresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TalleresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalleresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TalleresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalleresPayload>
          }
          findFirst: {
            args: Prisma.TalleresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalleresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TalleresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalleresPayload>
          }
          findMany: {
            args: Prisma.TalleresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalleresPayload>[]
          }
          create: {
            args: Prisma.TalleresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalleresPayload>
          }
          createMany: {
            args: Prisma.TalleresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TalleresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalleresPayload>
          }
          update: {
            args: Prisma.TalleresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalleresPayload>
          }
          deleteMany: {
            args: Prisma.TalleresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TalleresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TalleresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalleresPayload>
          }
          aggregate: {
            args: Prisma.TalleresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTalleres>
          }
          groupBy: {
            args: Prisma.TalleresGroupByArgs<ExtArgs>
            result: $Utils.Optional<TalleresGroupByOutputType>[]
          }
          count: {
            args: Prisma.TalleresCountArgs<ExtArgs>
            result: $Utils.Optional<TalleresCountAggregateOutputType> | number
          }
        }
      }
      Torneos: {
        payload: Prisma.$TorneosPayload<ExtArgs>
        fields: Prisma.TorneosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TorneosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TorneosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneosPayload>
          }
          findFirst: {
            args: Prisma.TorneosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TorneosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneosPayload>
          }
          findMany: {
            args: Prisma.TorneosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneosPayload>[]
          }
          create: {
            args: Prisma.TorneosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneosPayload>
          }
          createMany: {
            args: Prisma.TorneosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TorneosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneosPayload>
          }
          update: {
            args: Prisma.TorneosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneosPayload>
          }
          deleteMany: {
            args: Prisma.TorneosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TorneosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TorneosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneosPayload>
          }
          aggregate: {
            args: Prisma.TorneosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTorneos>
          }
          groupBy: {
            args: Prisma.TorneosGroupByArgs<ExtArgs>
            result: $Utils.Optional<TorneosGroupByOutputType>[]
          }
          count: {
            args: Prisma.TorneosCountArgs<ExtArgs>
            result: $Utils.Optional<TorneosCountAggregateOutputType> | number
          }
        }
      }
      Usuarios: {
        payload: Prisma.$UsuariosPayload<ExtArgs>
        fields: Prisma.UsuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findFirst: {
            args: Prisma.UsuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          findMany: {
            args: Prisma.UsuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>[]
          }
          create: {
            args: Prisma.UsuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          createMany: {
            args: Prisma.UsuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          update: {
            args: Prisma.UsuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          deleteMany: {
            args: Prisma.UsuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.UsuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
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
    clases?: ClasesOmit
    comentarios?: ComentariosOmit
    entrenadores?: EntrenadoresOmit
    espacios?: EspaciosOmit
    horarios?: HorariosOmit
    inscripcionClases?: InscripcionClasesOmit
    inscripcionTorneos?: InscripcionTorneosOmit
    reservas?: ReservasOmit
    talleres?: TalleresOmit
    torneos?: TorneosOmit
    usuarios?: UsuariosOmit
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
   * Count Type ClasesCountOutputType
   */

  export type ClasesCountOutputType = {
    InscripcionClases: number
  }

  export type ClasesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    InscripcionClases?: boolean | ClasesCountOutputTypeCountInscripcionClasesArgs
  }

  // Custom InputTypes
  /**
   * ClasesCountOutputType without action
   */
  export type ClasesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClasesCountOutputType
     */
    select?: ClasesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClasesCountOutputType without action
   */
  export type ClasesCountOutputTypeCountInscripcionClasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscripcionClasesWhereInput
  }


  /**
   * Count Type EntrenadoresCountOutputType
   */

  export type EntrenadoresCountOutputType = {
    Clases: number
    Talleres: number
  }

  export type EntrenadoresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Clases?: boolean | EntrenadoresCountOutputTypeCountClasesArgs
    Talleres?: boolean | EntrenadoresCountOutputTypeCountTalleresArgs
  }

  // Custom InputTypes
  /**
   * EntrenadoresCountOutputType without action
   */
  export type EntrenadoresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntrenadoresCountOutputType
     */
    select?: EntrenadoresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EntrenadoresCountOutputType without action
   */
  export type EntrenadoresCountOutputTypeCountClasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClasesWhereInput
  }

  /**
   * EntrenadoresCountOutputType without action
   */
  export type EntrenadoresCountOutputTypeCountTalleresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TalleresWhereInput
  }


  /**
   * Count Type EspaciosCountOutputType
   */

  export type EspaciosCountOutputType = {
    Clases: number
    Horarios: number
    Reservas: number
    Torneos: number
  }

  export type EspaciosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Clases?: boolean | EspaciosCountOutputTypeCountClasesArgs
    Horarios?: boolean | EspaciosCountOutputTypeCountHorariosArgs
    Reservas?: boolean | EspaciosCountOutputTypeCountReservasArgs
    Torneos?: boolean | EspaciosCountOutputTypeCountTorneosArgs
  }

  // Custom InputTypes
  /**
   * EspaciosCountOutputType without action
   */
  export type EspaciosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspaciosCountOutputType
     */
    select?: EspaciosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EspaciosCountOutputType without action
   */
  export type EspaciosCountOutputTypeCountClasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClasesWhereInput
  }

  /**
   * EspaciosCountOutputType without action
   */
  export type EspaciosCountOutputTypeCountHorariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorariosWhereInput
  }

  /**
   * EspaciosCountOutputType without action
   */
  export type EspaciosCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservasWhereInput
  }

  /**
   * EspaciosCountOutputType without action
   */
  export type EspaciosCountOutputTypeCountTorneosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TorneosWhereInput
  }


  /**
   * Count Type HorariosCountOutputType
   */

  export type HorariosCountOutputType = {
    Clases: number
    Talleres: number
    Torneos: number
  }

  export type HorariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Clases?: boolean | HorariosCountOutputTypeCountClasesArgs
    Talleres?: boolean | HorariosCountOutputTypeCountTalleresArgs
    Torneos?: boolean | HorariosCountOutputTypeCountTorneosArgs
  }

  // Custom InputTypes
  /**
   * HorariosCountOutputType without action
   */
  export type HorariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HorariosCountOutputType
     */
    select?: HorariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HorariosCountOutputType without action
   */
  export type HorariosCountOutputTypeCountClasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClasesWhereInput
  }

  /**
   * HorariosCountOutputType without action
   */
  export type HorariosCountOutputTypeCountTalleresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TalleresWhereInput
  }

  /**
   * HorariosCountOutputType without action
   */
  export type HorariosCountOutputTypeCountTorneosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TorneosWhereInput
  }


  /**
   * Count Type TorneosCountOutputType
   */

  export type TorneosCountOutputType = {
    InscripcionTorneos: number
  }

  export type TorneosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    InscripcionTorneos?: boolean | TorneosCountOutputTypeCountInscripcionTorneosArgs
  }

  // Custom InputTypes
  /**
   * TorneosCountOutputType without action
   */
  export type TorneosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TorneosCountOutputType
     */
    select?: TorneosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TorneosCountOutputType without action
   */
  export type TorneosCountOutputTypeCountInscripcionTorneosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscripcionTorneosWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    Comentarios: number
    Entrenadores: number
    InscripcionClases: number
    InscripcionTorneos: number
    Reservas: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comentarios?: boolean | UsuariosCountOutputTypeCountComentariosArgs
    Entrenadores?: boolean | UsuariosCountOutputTypeCountEntrenadoresArgs
    InscripcionClases?: boolean | UsuariosCountOutputTypeCountInscripcionClasesArgs
    InscripcionTorneos?: boolean | UsuariosCountOutputTypeCountInscripcionTorneosArgs
    Reservas?: boolean | UsuariosCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentariosWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountEntrenadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntrenadoresWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountInscripcionClasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscripcionClasesWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountInscripcionTorneosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscripcionTorneosWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Clases
   */

  export type AggregateClases = {
    _count: ClasesCountAggregateOutputType | null
    _avg: ClasesAvgAggregateOutputType | null
    _sum: ClasesSumAggregateOutputType | null
    _min: ClasesMinAggregateOutputType | null
    _max: ClasesMaxAggregateOutputType | null
  }

  export type ClasesAvgAggregateOutputType = {
    IdClase: number | null
    FkIdEntrenador: number | null
    FkIdEspacio: number | null
    FkIdHorario: number | null
  }

  export type ClasesSumAggregateOutputType = {
    IdClase: number | null
    FkIdEntrenador: number | null
    FkIdEspacio: number | null
    FkIdHorario: number | null
  }

  export type ClasesMinAggregateOutputType = {
    IdClase: number | null
    FkIdEntrenador: number | null
    FkIdEspacio: number | null
    FkIdHorario: number | null
    NombreC: string | null
    Descripcion: string | null
  }

  export type ClasesMaxAggregateOutputType = {
    IdClase: number | null
    FkIdEntrenador: number | null
    FkIdEspacio: number | null
    FkIdHorario: number | null
    NombreC: string | null
    Descripcion: string | null
  }

  export type ClasesCountAggregateOutputType = {
    IdClase: number
    FkIdEntrenador: number
    FkIdEspacio: number
    FkIdHorario: number
    NombreC: number
    Descripcion: number
    _all: number
  }


  export type ClasesAvgAggregateInputType = {
    IdClase?: true
    FkIdEntrenador?: true
    FkIdEspacio?: true
    FkIdHorario?: true
  }

  export type ClasesSumAggregateInputType = {
    IdClase?: true
    FkIdEntrenador?: true
    FkIdEspacio?: true
    FkIdHorario?: true
  }

  export type ClasesMinAggregateInputType = {
    IdClase?: true
    FkIdEntrenador?: true
    FkIdEspacio?: true
    FkIdHorario?: true
    NombreC?: true
    Descripcion?: true
  }

  export type ClasesMaxAggregateInputType = {
    IdClase?: true
    FkIdEntrenador?: true
    FkIdEspacio?: true
    FkIdHorario?: true
    NombreC?: true
    Descripcion?: true
  }

  export type ClasesCountAggregateInputType = {
    IdClase?: true
    FkIdEntrenador?: true
    FkIdEspacio?: true
    FkIdHorario?: true
    NombreC?: true
    Descripcion?: true
    _all?: true
  }

  export type ClasesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clases to aggregate.
     */
    where?: ClasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clases to fetch.
     */
    orderBy?: ClasesOrderByWithRelationInput | ClasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clases
    **/
    _count?: true | ClasesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClasesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClasesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClasesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClasesMaxAggregateInputType
  }

  export type GetClasesAggregateType<T extends ClasesAggregateArgs> = {
        [P in keyof T & keyof AggregateClases]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClases[P]>
      : GetScalarType<T[P], AggregateClases[P]>
  }




  export type ClasesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClasesWhereInput
    orderBy?: ClasesOrderByWithAggregationInput | ClasesOrderByWithAggregationInput[]
    by: ClasesScalarFieldEnum[] | ClasesScalarFieldEnum
    having?: ClasesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClasesCountAggregateInputType | true
    _avg?: ClasesAvgAggregateInputType
    _sum?: ClasesSumAggregateInputType
    _min?: ClasesMinAggregateInputType
    _max?: ClasesMaxAggregateInputType
  }

  export type ClasesGroupByOutputType = {
    IdClase: number
    FkIdEntrenador: number
    FkIdEspacio: number
    FkIdHorario: number
    NombreC: string
    Descripcion: string | null
    _count: ClasesCountAggregateOutputType | null
    _avg: ClasesAvgAggregateOutputType | null
    _sum: ClasesSumAggregateOutputType | null
    _min: ClasesMinAggregateOutputType | null
    _max: ClasesMaxAggregateOutputType | null
  }

  type GetClasesGroupByPayload<T extends ClasesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClasesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClasesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClasesGroupByOutputType[P]>
            : GetScalarType<T[P], ClasesGroupByOutputType[P]>
        }
      >
    >


  export type ClasesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdClase?: boolean
    FkIdEntrenador?: boolean
    FkIdEspacio?: boolean
    FkIdHorario?: boolean
    NombreC?: boolean
    Descripcion?: boolean
    Entrenadores?: boolean | EntrenadoresDefaultArgs<ExtArgs>
    Espacios?: boolean | EspaciosDefaultArgs<ExtArgs>
    Horarios?: boolean | HorariosDefaultArgs<ExtArgs>
    InscripcionClases?: boolean | Clases$InscripcionClasesArgs<ExtArgs>
    _count?: boolean | ClasesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clases"]>



  export type ClasesSelectScalar = {
    IdClase?: boolean
    FkIdEntrenador?: boolean
    FkIdEspacio?: boolean
    FkIdHorario?: boolean
    NombreC?: boolean
    Descripcion?: boolean
  }

  export type ClasesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"IdClase" | "FkIdEntrenador" | "FkIdEspacio" | "FkIdHorario" | "NombreC" | "Descripcion", ExtArgs["result"]["clases"]>
  export type ClasesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Entrenadores?: boolean | EntrenadoresDefaultArgs<ExtArgs>
    Espacios?: boolean | EspaciosDefaultArgs<ExtArgs>
    Horarios?: boolean | HorariosDefaultArgs<ExtArgs>
    InscripcionClases?: boolean | Clases$InscripcionClasesArgs<ExtArgs>
    _count?: boolean | ClasesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClasesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clases"
    objects: {
      Entrenadores: Prisma.$EntrenadoresPayload<ExtArgs>
      Espacios: Prisma.$EspaciosPayload<ExtArgs>
      Horarios: Prisma.$HorariosPayload<ExtArgs>
      InscripcionClases: Prisma.$InscripcionClasesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      IdClase: number
      FkIdEntrenador: number
      FkIdEspacio: number
      FkIdHorario: number
      NombreC: string
      Descripcion: string | null
    }, ExtArgs["result"]["clases"]>
    composites: {}
  }

  type ClasesGetPayload<S extends boolean | null | undefined | ClasesDefaultArgs> = $Result.GetResult<Prisma.$ClasesPayload, S>

  type ClasesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClasesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClasesCountAggregateInputType | true
    }

  export interface ClasesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clases'], meta: { name: 'Clases' } }
    /**
     * Find zero or one Clases that matches the filter.
     * @param {ClasesFindUniqueArgs} args - Arguments to find a Clases
     * @example
     * // Get one Clases
     * const clases = await prisma.clases.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClasesFindUniqueArgs>(args: SelectSubset<T, ClasesFindUniqueArgs<ExtArgs>>): Prisma__ClasesClient<$Result.GetResult<Prisma.$ClasesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clases that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClasesFindUniqueOrThrowArgs} args - Arguments to find a Clases
     * @example
     * // Get one Clases
     * const clases = await prisma.clases.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClasesFindUniqueOrThrowArgs>(args: SelectSubset<T, ClasesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClasesClient<$Result.GetResult<Prisma.$ClasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasesFindFirstArgs} args - Arguments to find a Clases
     * @example
     * // Get one Clases
     * const clases = await prisma.clases.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClasesFindFirstArgs>(args?: SelectSubset<T, ClasesFindFirstArgs<ExtArgs>>): Prisma__ClasesClient<$Result.GetResult<Prisma.$ClasesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clases that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasesFindFirstOrThrowArgs} args - Arguments to find a Clases
     * @example
     * // Get one Clases
     * const clases = await prisma.clases.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClasesFindFirstOrThrowArgs>(args?: SelectSubset<T, ClasesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClasesClient<$Result.GetResult<Prisma.$ClasesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clases
     * const clases = await prisma.clases.findMany()
     * 
     * // Get first 10 Clases
     * const clases = await prisma.clases.findMany({ take: 10 })
     * 
     * // Only select the `IdClase`
     * const clasesWithIdClaseOnly = await prisma.clases.findMany({ select: { IdClase: true } })
     * 
     */
    findMany<T extends ClasesFindManyArgs>(args?: SelectSubset<T, ClasesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clases.
     * @param {ClasesCreateArgs} args - Arguments to create a Clases.
     * @example
     * // Create one Clases
     * const Clases = await prisma.clases.create({
     *   data: {
     *     // ... data to create a Clases
     *   }
     * })
     * 
     */
    create<T extends ClasesCreateArgs>(args: SelectSubset<T, ClasesCreateArgs<ExtArgs>>): Prisma__ClasesClient<$Result.GetResult<Prisma.$ClasesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clases.
     * @param {ClasesCreateManyArgs} args - Arguments to create many Clases.
     * @example
     * // Create many Clases
     * const clases = await prisma.clases.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClasesCreateManyArgs>(args?: SelectSubset<T, ClasesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clases.
     * @param {ClasesDeleteArgs} args - Arguments to delete one Clases.
     * @example
     * // Delete one Clases
     * const Clases = await prisma.clases.delete({
     *   where: {
     *     // ... filter to delete one Clases
     *   }
     * })
     * 
     */
    delete<T extends ClasesDeleteArgs>(args: SelectSubset<T, ClasesDeleteArgs<ExtArgs>>): Prisma__ClasesClient<$Result.GetResult<Prisma.$ClasesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clases.
     * @param {ClasesUpdateArgs} args - Arguments to update one Clases.
     * @example
     * // Update one Clases
     * const clases = await prisma.clases.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClasesUpdateArgs>(args: SelectSubset<T, ClasesUpdateArgs<ExtArgs>>): Prisma__ClasesClient<$Result.GetResult<Prisma.$ClasesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clases.
     * @param {ClasesDeleteManyArgs} args - Arguments to filter Clases to delete.
     * @example
     * // Delete a few Clases
     * const { count } = await prisma.clases.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClasesDeleteManyArgs>(args?: SelectSubset<T, ClasesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clases
     * const clases = await prisma.clases.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClasesUpdateManyArgs>(args: SelectSubset<T, ClasesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clases.
     * @param {ClasesUpsertArgs} args - Arguments to update or create a Clases.
     * @example
     * // Update or create a Clases
     * const clases = await prisma.clases.upsert({
     *   create: {
     *     // ... data to create a Clases
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clases we want to update
     *   }
     * })
     */
    upsert<T extends ClasesUpsertArgs>(args: SelectSubset<T, ClasesUpsertArgs<ExtArgs>>): Prisma__ClasesClient<$Result.GetResult<Prisma.$ClasesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasesCountArgs} args - Arguments to filter Clases to count.
     * @example
     * // Count the number of Clases
     * const count = await prisma.clases.count({
     *   where: {
     *     // ... the filter for the Clases we want to count
     *   }
     * })
    **/
    count<T extends ClasesCountArgs>(
      args?: Subset<T, ClasesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClasesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClasesAggregateArgs>(args: Subset<T, ClasesAggregateArgs>): Prisma.PrismaPromise<GetClasesAggregateType<T>>

    /**
     * Group by Clases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasesGroupByArgs} args - Group by arguments.
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
      T extends ClasesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClasesGroupByArgs['orderBy'] }
        : { orderBy?: ClasesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClasesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClasesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clases model
   */
  readonly fields: ClasesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clases.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClasesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Entrenadores<T extends EntrenadoresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntrenadoresDefaultArgs<ExtArgs>>): Prisma__EntrenadoresClient<$Result.GetResult<Prisma.$EntrenadoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Espacios<T extends EspaciosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EspaciosDefaultArgs<ExtArgs>>): Prisma__EspaciosClient<$Result.GetResult<Prisma.$EspaciosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Horarios<T extends HorariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HorariosDefaultArgs<ExtArgs>>): Prisma__HorariosClient<$Result.GetResult<Prisma.$HorariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    InscripcionClases<T extends Clases$InscripcionClasesArgs<ExtArgs> = {}>(args?: Subset<T, Clases$InscripcionClasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionClasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Clases model
   */
  interface ClasesFieldRefs {
    readonly IdClase: FieldRef<"Clases", 'Int'>
    readonly FkIdEntrenador: FieldRef<"Clases", 'Int'>
    readonly FkIdEspacio: FieldRef<"Clases", 'Int'>
    readonly FkIdHorario: FieldRef<"Clases", 'Int'>
    readonly NombreC: FieldRef<"Clases", 'String'>
    readonly Descripcion: FieldRef<"Clases", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Clases findUnique
   */
  export type ClasesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clases
     */
    select?: ClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clases
     */
    omit?: ClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasesInclude<ExtArgs> | null
    /**
     * Filter, which Clases to fetch.
     */
    where: ClasesWhereUniqueInput
  }

  /**
   * Clases findUniqueOrThrow
   */
  export type ClasesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clases
     */
    select?: ClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clases
     */
    omit?: ClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasesInclude<ExtArgs> | null
    /**
     * Filter, which Clases to fetch.
     */
    where: ClasesWhereUniqueInput
  }

  /**
   * Clases findFirst
   */
  export type ClasesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clases
     */
    select?: ClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clases
     */
    omit?: ClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasesInclude<ExtArgs> | null
    /**
     * Filter, which Clases to fetch.
     */
    where?: ClasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clases to fetch.
     */
    orderBy?: ClasesOrderByWithRelationInput | ClasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clases.
     */
    cursor?: ClasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clases.
     */
    distinct?: ClasesScalarFieldEnum | ClasesScalarFieldEnum[]
  }

  /**
   * Clases findFirstOrThrow
   */
  export type ClasesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clases
     */
    select?: ClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clases
     */
    omit?: ClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasesInclude<ExtArgs> | null
    /**
     * Filter, which Clases to fetch.
     */
    where?: ClasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clases to fetch.
     */
    orderBy?: ClasesOrderByWithRelationInput | ClasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clases.
     */
    cursor?: ClasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clases.
     */
    distinct?: ClasesScalarFieldEnum | ClasesScalarFieldEnum[]
  }

  /**
   * Clases findMany
   */
  export type ClasesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clases
     */
    select?: ClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clases
     */
    omit?: ClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasesInclude<ExtArgs> | null
    /**
     * Filter, which Clases to fetch.
     */
    where?: ClasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clases to fetch.
     */
    orderBy?: ClasesOrderByWithRelationInput | ClasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clases.
     */
    cursor?: ClasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clases.
     */
    skip?: number
    distinct?: ClasesScalarFieldEnum | ClasesScalarFieldEnum[]
  }

  /**
   * Clases create
   */
  export type ClasesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clases
     */
    select?: ClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clases
     */
    omit?: ClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasesInclude<ExtArgs> | null
    /**
     * The data needed to create a Clases.
     */
    data: XOR<ClasesCreateInput, ClasesUncheckedCreateInput>
  }

  /**
   * Clases createMany
   */
  export type ClasesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clases.
     */
    data: ClasesCreateManyInput | ClasesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clases update
   */
  export type ClasesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clases
     */
    select?: ClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clases
     */
    omit?: ClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasesInclude<ExtArgs> | null
    /**
     * The data needed to update a Clases.
     */
    data: XOR<ClasesUpdateInput, ClasesUncheckedUpdateInput>
    /**
     * Choose, which Clases to update.
     */
    where: ClasesWhereUniqueInput
  }

  /**
   * Clases updateMany
   */
  export type ClasesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clases.
     */
    data: XOR<ClasesUpdateManyMutationInput, ClasesUncheckedUpdateManyInput>
    /**
     * Filter which Clases to update
     */
    where?: ClasesWhereInput
    /**
     * Limit how many Clases to update.
     */
    limit?: number
  }

  /**
   * Clases upsert
   */
  export type ClasesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clases
     */
    select?: ClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clases
     */
    omit?: ClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasesInclude<ExtArgs> | null
    /**
     * The filter to search for the Clases to update in case it exists.
     */
    where: ClasesWhereUniqueInput
    /**
     * In case the Clases found by the `where` argument doesn't exist, create a new Clases with this data.
     */
    create: XOR<ClasesCreateInput, ClasesUncheckedCreateInput>
    /**
     * In case the Clases was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClasesUpdateInput, ClasesUncheckedUpdateInput>
  }

  /**
   * Clases delete
   */
  export type ClasesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clases
     */
    select?: ClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clases
     */
    omit?: ClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasesInclude<ExtArgs> | null
    /**
     * Filter which Clases to delete.
     */
    where: ClasesWhereUniqueInput
  }

  /**
   * Clases deleteMany
   */
  export type ClasesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clases to delete
     */
    where?: ClasesWhereInput
    /**
     * Limit how many Clases to delete.
     */
    limit?: number
  }

  /**
   * Clases.InscripcionClases
   */
  export type Clases$InscripcionClasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InscripcionClases
     */
    select?: InscripcionClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InscripcionClases
     */
    omit?: InscripcionClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionClasesInclude<ExtArgs> | null
    where?: InscripcionClasesWhereInput
    orderBy?: InscripcionClasesOrderByWithRelationInput | InscripcionClasesOrderByWithRelationInput[]
    cursor?: InscripcionClasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InscripcionClasesScalarFieldEnum | InscripcionClasesScalarFieldEnum[]
  }

  /**
   * Clases without action
   */
  export type ClasesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clases
     */
    select?: ClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clases
     */
    omit?: ClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasesInclude<ExtArgs> | null
  }


  /**
   * Model Comentarios
   */

  export type AggregateComentarios = {
    _count: ComentariosCountAggregateOutputType | null
    _avg: ComentariosAvgAggregateOutputType | null
    _sum: ComentariosSumAggregateOutputType | null
    _min: ComentariosMinAggregateOutputType | null
    _max: ComentariosMaxAggregateOutputType | null
  }

  export type ComentariosAvgAggregateOutputType = {
    IdComentario: number | null
    FkIdUsuario: number | null
  }

  export type ComentariosSumAggregateOutputType = {
    IdComentario: number | null
    FkIdUsuario: number | null
  }

  export type ComentariosMinAggregateOutputType = {
    IdComentario: number | null
    FkIdUsuario: number | null
    Comentario: string | null
    FechaComentario: Date | null
  }

  export type ComentariosMaxAggregateOutputType = {
    IdComentario: number | null
    FkIdUsuario: number | null
    Comentario: string | null
    FechaComentario: Date | null
  }

  export type ComentariosCountAggregateOutputType = {
    IdComentario: number
    FkIdUsuario: number
    Comentario: number
    FechaComentario: number
    _all: number
  }


  export type ComentariosAvgAggregateInputType = {
    IdComentario?: true
    FkIdUsuario?: true
  }

  export type ComentariosSumAggregateInputType = {
    IdComentario?: true
    FkIdUsuario?: true
  }

  export type ComentariosMinAggregateInputType = {
    IdComentario?: true
    FkIdUsuario?: true
    Comentario?: true
    FechaComentario?: true
  }

  export type ComentariosMaxAggregateInputType = {
    IdComentario?: true
    FkIdUsuario?: true
    Comentario?: true
    FechaComentario?: true
  }

  export type ComentariosCountAggregateInputType = {
    IdComentario?: true
    FkIdUsuario?: true
    Comentario?: true
    FechaComentario?: true
    _all?: true
  }

  export type ComentariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentarios to aggregate.
     */
    where?: ComentariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentariosOrderByWithRelationInput | ComentariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComentariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comentarios
    **/
    _count?: true | ComentariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComentariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComentariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComentariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComentariosMaxAggregateInputType
  }

  export type GetComentariosAggregateType<T extends ComentariosAggregateArgs> = {
        [P in keyof T & keyof AggregateComentarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComentarios[P]>
      : GetScalarType<T[P], AggregateComentarios[P]>
  }




  export type ComentariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComentariosWhereInput
    orderBy?: ComentariosOrderByWithAggregationInput | ComentariosOrderByWithAggregationInput[]
    by: ComentariosScalarFieldEnum[] | ComentariosScalarFieldEnum
    having?: ComentariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComentariosCountAggregateInputType | true
    _avg?: ComentariosAvgAggregateInputType
    _sum?: ComentariosSumAggregateInputType
    _min?: ComentariosMinAggregateInputType
    _max?: ComentariosMaxAggregateInputType
  }

  export type ComentariosGroupByOutputType = {
    IdComentario: number
    FkIdUsuario: number
    Comentario: string
    FechaComentario: Date | null
    _count: ComentariosCountAggregateOutputType | null
    _avg: ComentariosAvgAggregateOutputType | null
    _sum: ComentariosSumAggregateOutputType | null
    _min: ComentariosMinAggregateOutputType | null
    _max: ComentariosMaxAggregateOutputType | null
  }

  type GetComentariosGroupByPayload<T extends ComentariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComentariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComentariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComentariosGroupByOutputType[P]>
            : GetScalarType<T[P], ComentariosGroupByOutputType[P]>
        }
      >
    >


  export type ComentariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdComentario?: boolean
    FkIdUsuario?: boolean
    Comentario?: boolean
    FechaComentario?: boolean
    Usuarios?: boolean | UsuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comentarios"]>



  export type ComentariosSelectScalar = {
    IdComentario?: boolean
    FkIdUsuario?: boolean
    Comentario?: boolean
    FechaComentario?: boolean
  }

  export type ComentariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"IdComentario" | "FkIdUsuario" | "Comentario" | "FechaComentario", ExtArgs["result"]["comentarios"]>
  export type ComentariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuarios?: boolean | UsuariosDefaultArgs<ExtArgs>
  }

  export type $ComentariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comentarios"
    objects: {
      Usuarios: Prisma.$UsuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      IdComentario: number
      FkIdUsuario: number
      Comentario: string
      FechaComentario: Date | null
    }, ExtArgs["result"]["comentarios"]>
    composites: {}
  }

  type ComentariosGetPayload<S extends boolean | null | undefined | ComentariosDefaultArgs> = $Result.GetResult<Prisma.$ComentariosPayload, S>

  type ComentariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComentariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComentariosCountAggregateInputType | true
    }

  export interface ComentariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comentarios'], meta: { name: 'Comentarios' } }
    /**
     * Find zero or one Comentarios that matches the filter.
     * @param {ComentariosFindUniqueArgs} args - Arguments to find a Comentarios
     * @example
     * // Get one Comentarios
     * const comentarios = await prisma.comentarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComentariosFindUniqueArgs>(args: SelectSubset<T, ComentariosFindUniqueArgs<ExtArgs>>): Prisma__ComentariosClient<$Result.GetResult<Prisma.$ComentariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comentarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComentariosFindUniqueOrThrowArgs} args - Arguments to find a Comentarios
     * @example
     * // Get one Comentarios
     * const comentarios = await prisma.comentarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComentariosFindUniqueOrThrowArgs>(args: SelectSubset<T, ComentariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComentariosClient<$Result.GetResult<Prisma.$ComentariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentariosFindFirstArgs} args - Arguments to find a Comentarios
     * @example
     * // Get one Comentarios
     * const comentarios = await prisma.comentarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComentariosFindFirstArgs>(args?: SelectSubset<T, ComentariosFindFirstArgs<ExtArgs>>): Prisma__ComentariosClient<$Result.GetResult<Prisma.$ComentariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comentarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentariosFindFirstOrThrowArgs} args - Arguments to find a Comentarios
     * @example
     * // Get one Comentarios
     * const comentarios = await prisma.comentarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComentariosFindFirstOrThrowArgs>(args?: SelectSubset<T, ComentariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComentariosClient<$Result.GetResult<Prisma.$ComentariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comentarios
     * const comentarios = await prisma.comentarios.findMany()
     * 
     * // Get first 10 Comentarios
     * const comentarios = await prisma.comentarios.findMany({ take: 10 })
     * 
     * // Only select the `IdComentario`
     * const comentariosWithIdComentarioOnly = await prisma.comentarios.findMany({ select: { IdComentario: true } })
     * 
     */
    findMany<T extends ComentariosFindManyArgs>(args?: SelectSubset<T, ComentariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comentarios.
     * @param {ComentariosCreateArgs} args - Arguments to create a Comentarios.
     * @example
     * // Create one Comentarios
     * const Comentarios = await prisma.comentarios.create({
     *   data: {
     *     // ... data to create a Comentarios
     *   }
     * })
     * 
     */
    create<T extends ComentariosCreateArgs>(args: SelectSubset<T, ComentariosCreateArgs<ExtArgs>>): Prisma__ComentariosClient<$Result.GetResult<Prisma.$ComentariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comentarios.
     * @param {ComentariosCreateManyArgs} args - Arguments to create many Comentarios.
     * @example
     * // Create many Comentarios
     * const comentarios = await prisma.comentarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComentariosCreateManyArgs>(args?: SelectSubset<T, ComentariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comentarios.
     * @param {ComentariosDeleteArgs} args - Arguments to delete one Comentarios.
     * @example
     * // Delete one Comentarios
     * const Comentarios = await prisma.comentarios.delete({
     *   where: {
     *     // ... filter to delete one Comentarios
     *   }
     * })
     * 
     */
    delete<T extends ComentariosDeleteArgs>(args: SelectSubset<T, ComentariosDeleteArgs<ExtArgs>>): Prisma__ComentariosClient<$Result.GetResult<Prisma.$ComentariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comentarios.
     * @param {ComentariosUpdateArgs} args - Arguments to update one Comentarios.
     * @example
     * // Update one Comentarios
     * const comentarios = await prisma.comentarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComentariosUpdateArgs>(args: SelectSubset<T, ComentariosUpdateArgs<ExtArgs>>): Prisma__ComentariosClient<$Result.GetResult<Prisma.$ComentariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comentarios.
     * @param {ComentariosDeleteManyArgs} args - Arguments to filter Comentarios to delete.
     * @example
     * // Delete a few Comentarios
     * const { count } = await prisma.comentarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComentariosDeleteManyArgs>(args?: SelectSubset<T, ComentariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comentarios
     * const comentarios = await prisma.comentarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComentariosUpdateManyArgs>(args: SelectSubset<T, ComentariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comentarios.
     * @param {ComentariosUpsertArgs} args - Arguments to update or create a Comentarios.
     * @example
     * // Update or create a Comentarios
     * const comentarios = await prisma.comentarios.upsert({
     *   create: {
     *     // ... data to create a Comentarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comentarios we want to update
     *   }
     * })
     */
    upsert<T extends ComentariosUpsertArgs>(args: SelectSubset<T, ComentariosUpsertArgs<ExtArgs>>): Prisma__ComentariosClient<$Result.GetResult<Prisma.$ComentariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentariosCountArgs} args - Arguments to filter Comentarios to count.
     * @example
     * // Count the number of Comentarios
     * const count = await prisma.comentarios.count({
     *   where: {
     *     // ... the filter for the Comentarios we want to count
     *   }
     * })
    **/
    count<T extends ComentariosCountArgs>(
      args?: Subset<T, ComentariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComentariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComentariosAggregateArgs>(args: Subset<T, ComentariosAggregateArgs>): Prisma.PrismaPromise<GetComentariosAggregateType<T>>

    /**
     * Group by Comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComentariosGroupByArgs} args - Group by arguments.
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
      T extends ComentariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComentariosGroupByArgs['orderBy'] }
        : { orderBy?: ComentariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ComentariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComentariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comentarios model
   */
  readonly fields: ComentariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comentarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComentariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Usuarios<T extends UsuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuariosDefaultArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comentarios model
   */
  interface ComentariosFieldRefs {
    readonly IdComentario: FieldRef<"Comentarios", 'Int'>
    readonly FkIdUsuario: FieldRef<"Comentarios", 'Int'>
    readonly Comentario: FieldRef<"Comentarios", 'String'>
    readonly FechaComentario: FieldRef<"Comentarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comentarios findUnique
   */
  export type ComentariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentarios
     */
    select?: ComentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentarios
     */
    omit?: ComentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentariosInclude<ExtArgs> | null
    /**
     * Filter, which Comentarios to fetch.
     */
    where: ComentariosWhereUniqueInput
  }

  /**
   * Comentarios findUniqueOrThrow
   */
  export type ComentariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentarios
     */
    select?: ComentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentarios
     */
    omit?: ComentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentariosInclude<ExtArgs> | null
    /**
     * Filter, which Comentarios to fetch.
     */
    where: ComentariosWhereUniqueInput
  }

  /**
   * Comentarios findFirst
   */
  export type ComentariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentarios
     */
    select?: ComentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentarios
     */
    omit?: ComentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentariosInclude<ExtArgs> | null
    /**
     * Filter, which Comentarios to fetch.
     */
    where?: ComentariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentariosOrderByWithRelationInput | ComentariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentariosScalarFieldEnum | ComentariosScalarFieldEnum[]
  }

  /**
   * Comentarios findFirstOrThrow
   */
  export type ComentariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentarios
     */
    select?: ComentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentarios
     */
    omit?: ComentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentariosInclude<ExtArgs> | null
    /**
     * Filter, which Comentarios to fetch.
     */
    where?: ComentariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentariosOrderByWithRelationInput | ComentariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comentarios.
     */
    cursor?: ComentariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comentarios.
     */
    distinct?: ComentariosScalarFieldEnum | ComentariosScalarFieldEnum[]
  }

  /**
   * Comentarios findMany
   */
  export type ComentariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentarios
     */
    select?: ComentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentarios
     */
    omit?: ComentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentariosInclude<ExtArgs> | null
    /**
     * Filter, which Comentarios to fetch.
     */
    where?: ComentariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comentarios to fetch.
     */
    orderBy?: ComentariosOrderByWithRelationInput | ComentariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comentarios.
     */
    cursor?: ComentariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comentarios.
     */
    skip?: number
    distinct?: ComentariosScalarFieldEnum | ComentariosScalarFieldEnum[]
  }

  /**
   * Comentarios create
   */
  export type ComentariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentarios
     */
    select?: ComentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentarios
     */
    omit?: ComentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentariosInclude<ExtArgs> | null
    /**
     * The data needed to create a Comentarios.
     */
    data: XOR<ComentariosCreateInput, ComentariosUncheckedCreateInput>
  }

  /**
   * Comentarios createMany
   */
  export type ComentariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comentarios.
     */
    data: ComentariosCreateManyInput | ComentariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comentarios update
   */
  export type ComentariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentarios
     */
    select?: ComentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentarios
     */
    omit?: ComentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentariosInclude<ExtArgs> | null
    /**
     * The data needed to update a Comentarios.
     */
    data: XOR<ComentariosUpdateInput, ComentariosUncheckedUpdateInput>
    /**
     * Choose, which Comentarios to update.
     */
    where: ComentariosWhereUniqueInput
  }

  /**
   * Comentarios updateMany
   */
  export type ComentariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comentarios.
     */
    data: XOR<ComentariosUpdateManyMutationInput, ComentariosUncheckedUpdateManyInput>
    /**
     * Filter which Comentarios to update
     */
    where?: ComentariosWhereInput
    /**
     * Limit how many Comentarios to update.
     */
    limit?: number
  }

  /**
   * Comentarios upsert
   */
  export type ComentariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentarios
     */
    select?: ComentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentarios
     */
    omit?: ComentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentariosInclude<ExtArgs> | null
    /**
     * The filter to search for the Comentarios to update in case it exists.
     */
    where: ComentariosWhereUniqueInput
    /**
     * In case the Comentarios found by the `where` argument doesn't exist, create a new Comentarios with this data.
     */
    create: XOR<ComentariosCreateInput, ComentariosUncheckedCreateInput>
    /**
     * In case the Comentarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComentariosUpdateInput, ComentariosUncheckedUpdateInput>
  }

  /**
   * Comentarios delete
   */
  export type ComentariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentarios
     */
    select?: ComentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentarios
     */
    omit?: ComentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentariosInclude<ExtArgs> | null
    /**
     * Filter which Comentarios to delete.
     */
    where: ComentariosWhereUniqueInput
  }

  /**
   * Comentarios deleteMany
   */
  export type ComentariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comentarios to delete
     */
    where?: ComentariosWhereInput
    /**
     * Limit how many Comentarios to delete.
     */
    limit?: number
  }

  /**
   * Comentarios without action
   */
  export type ComentariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentarios
     */
    select?: ComentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentarios
     */
    omit?: ComentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentariosInclude<ExtArgs> | null
  }


  /**
   * Model Entrenadores
   */

  export type AggregateEntrenadores = {
    _count: EntrenadoresCountAggregateOutputType | null
    _avg: EntrenadoresAvgAggregateOutputType | null
    _sum: EntrenadoresSumAggregateOutputType | null
    _min: EntrenadoresMinAggregateOutputType | null
    _max: EntrenadoresMaxAggregateOutputType | null
  }

  export type EntrenadoresAvgAggregateOutputType = {
    IdEntrenador: number | null
    FkIdUsuario: number | null
  }

  export type EntrenadoresSumAggregateOutputType = {
    IdEntrenador: number | null
    FkIdUsuario: number | null
  }

  export type EntrenadoresMinAggregateOutputType = {
    IdEntrenador: number | null
    FkIdUsuario: number | null
    Especialidad: string | null
    Experiencia: string | null
    Telefono: string | null
  }

  export type EntrenadoresMaxAggregateOutputType = {
    IdEntrenador: number | null
    FkIdUsuario: number | null
    Especialidad: string | null
    Experiencia: string | null
    Telefono: string | null
  }

  export type EntrenadoresCountAggregateOutputType = {
    IdEntrenador: number
    FkIdUsuario: number
    Especialidad: number
    Experiencia: number
    Telefono: number
    _all: number
  }


  export type EntrenadoresAvgAggregateInputType = {
    IdEntrenador?: true
    FkIdUsuario?: true
  }

  export type EntrenadoresSumAggregateInputType = {
    IdEntrenador?: true
    FkIdUsuario?: true
  }

  export type EntrenadoresMinAggregateInputType = {
    IdEntrenador?: true
    FkIdUsuario?: true
    Especialidad?: true
    Experiencia?: true
    Telefono?: true
  }

  export type EntrenadoresMaxAggregateInputType = {
    IdEntrenador?: true
    FkIdUsuario?: true
    Especialidad?: true
    Experiencia?: true
    Telefono?: true
  }

  export type EntrenadoresCountAggregateInputType = {
    IdEntrenador?: true
    FkIdUsuario?: true
    Especialidad?: true
    Experiencia?: true
    Telefono?: true
    _all?: true
  }

  export type EntrenadoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entrenadores to aggregate.
     */
    where?: EntrenadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entrenadores to fetch.
     */
    orderBy?: EntrenadoresOrderByWithRelationInput | EntrenadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntrenadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entrenadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entrenadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entrenadores
    **/
    _count?: true | EntrenadoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntrenadoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntrenadoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntrenadoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntrenadoresMaxAggregateInputType
  }

  export type GetEntrenadoresAggregateType<T extends EntrenadoresAggregateArgs> = {
        [P in keyof T & keyof AggregateEntrenadores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntrenadores[P]>
      : GetScalarType<T[P], AggregateEntrenadores[P]>
  }




  export type EntrenadoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntrenadoresWhereInput
    orderBy?: EntrenadoresOrderByWithAggregationInput | EntrenadoresOrderByWithAggregationInput[]
    by: EntrenadoresScalarFieldEnum[] | EntrenadoresScalarFieldEnum
    having?: EntrenadoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntrenadoresCountAggregateInputType | true
    _avg?: EntrenadoresAvgAggregateInputType
    _sum?: EntrenadoresSumAggregateInputType
    _min?: EntrenadoresMinAggregateInputType
    _max?: EntrenadoresMaxAggregateInputType
  }

  export type EntrenadoresGroupByOutputType = {
    IdEntrenador: number
    FkIdUsuario: number | null
    Especialidad: string
    Experiencia: string | null
    Telefono: string | null
    _count: EntrenadoresCountAggregateOutputType | null
    _avg: EntrenadoresAvgAggregateOutputType | null
    _sum: EntrenadoresSumAggregateOutputType | null
    _min: EntrenadoresMinAggregateOutputType | null
    _max: EntrenadoresMaxAggregateOutputType | null
  }

  type GetEntrenadoresGroupByPayload<T extends EntrenadoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntrenadoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntrenadoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntrenadoresGroupByOutputType[P]>
            : GetScalarType<T[P], EntrenadoresGroupByOutputType[P]>
        }
      >
    >


  export type EntrenadoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdEntrenador?: boolean
    FkIdUsuario?: boolean
    Especialidad?: boolean
    Experiencia?: boolean
    Telefono?: boolean
    Clases?: boolean | Entrenadores$ClasesArgs<ExtArgs>
    Usuarios?: boolean | Entrenadores$UsuariosArgs<ExtArgs>
    Talleres?: boolean | Entrenadores$TalleresArgs<ExtArgs>
    _count?: boolean | EntrenadoresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entrenadores"]>



  export type EntrenadoresSelectScalar = {
    IdEntrenador?: boolean
    FkIdUsuario?: boolean
    Especialidad?: boolean
    Experiencia?: boolean
    Telefono?: boolean
  }

  export type EntrenadoresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"IdEntrenador" | "FkIdUsuario" | "Especialidad" | "Experiencia" | "Telefono", ExtArgs["result"]["entrenadores"]>
  export type EntrenadoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Clases?: boolean | Entrenadores$ClasesArgs<ExtArgs>
    Usuarios?: boolean | Entrenadores$UsuariosArgs<ExtArgs>
    Talleres?: boolean | Entrenadores$TalleresArgs<ExtArgs>
    _count?: boolean | EntrenadoresCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EntrenadoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entrenadores"
    objects: {
      Clases: Prisma.$ClasesPayload<ExtArgs>[]
      Usuarios: Prisma.$UsuariosPayload<ExtArgs> | null
      Talleres: Prisma.$TalleresPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      IdEntrenador: number
      FkIdUsuario: number | null
      Especialidad: string
      Experiencia: string | null
      Telefono: string | null
    }, ExtArgs["result"]["entrenadores"]>
    composites: {}
  }

  type EntrenadoresGetPayload<S extends boolean | null | undefined | EntrenadoresDefaultArgs> = $Result.GetResult<Prisma.$EntrenadoresPayload, S>

  type EntrenadoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntrenadoresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntrenadoresCountAggregateInputType | true
    }

  export interface EntrenadoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entrenadores'], meta: { name: 'Entrenadores' } }
    /**
     * Find zero or one Entrenadores that matches the filter.
     * @param {EntrenadoresFindUniqueArgs} args - Arguments to find a Entrenadores
     * @example
     * // Get one Entrenadores
     * const entrenadores = await prisma.entrenadores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntrenadoresFindUniqueArgs>(args: SelectSubset<T, EntrenadoresFindUniqueArgs<ExtArgs>>): Prisma__EntrenadoresClient<$Result.GetResult<Prisma.$EntrenadoresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entrenadores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntrenadoresFindUniqueOrThrowArgs} args - Arguments to find a Entrenadores
     * @example
     * // Get one Entrenadores
     * const entrenadores = await prisma.entrenadores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntrenadoresFindUniqueOrThrowArgs>(args: SelectSubset<T, EntrenadoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntrenadoresClient<$Result.GetResult<Prisma.$EntrenadoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entrenadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadoresFindFirstArgs} args - Arguments to find a Entrenadores
     * @example
     * // Get one Entrenadores
     * const entrenadores = await prisma.entrenadores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntrenadoresFindFirstArgs>(args?: SelectSubset<T, EntrenadoresFindFirstArgs<ExtArgs>>): Prisma__EntrenadoresClient<$Result.GetResult<Prisma.$EntrenadoresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entrenadores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadoresFindFirstOrThrowArgs} args - Arguments to find a Entrenadores
     * @example
     * // Get one Entrenadores
     * const entrenadores = await prisma.entrenadores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntrenadoresFindFirstOrThrowArgs>(args?: SelectSubset<T, EntrenadoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntrenadoresClient<$Result.GetResult<Prisma.$EntrenadoresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entrenadores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entrenadores
     * const entrenadores = await prisma.entrenadores.findMany()
     * 
     * // Get first 10 Entrenadores
     * const entrenadores = await prisma.entrenadores.findMany({ take: 10 })
     * 
     * // Only select the `IdEntrenador`
     * const entrenadoresWithIdEntrenadorOnly = await prisma.entrenadores.findMany({ select: { IdEntrenador: true } })
     * 
     */
    findMany<T extends EntrenadoresFindManyArgs>(args?: SelectSubset<T, EntrenadoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntrenadoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entrenadores.
     * @param {EntrenadoresCreateArgs} args - Arguments to create a Entrenadores.
     * @example
     * // Create one Entrenadores
     * const Entrenadores = await prisma.entrenadores.create({
     *   data: {
     *     // ... data to create a Entrenadores
     *   }
     * })
     * 
     */
    create<T extends EntrenadoresCreateArgs>(args: SelectSubset<T, EntrenadoresCreateArgs<ExtArgs>>): Prisma__EntrenadoresClient<$Result.GetResult<Prisma.$EntrenadoresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entrenadores.
     * @param {EntrenadoresCreateManyArgs} args - Arguments to create many Entrenadores.
     * @example
     * // Create many Entrenadores
     * const entrenadores = await prisma.entrenadores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntrenadoresCreateManyArgs>(args?: SelectSubset<T, EntrenadoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Entrenadores.
     * @param {EntrenadoresDeleteArgs} args - Arguments to delete one Entrenadores.
     * @example
     * // Delete one Entrenadores
     * const Entrenadores = await prisma.entrenadores.delete({
     *   where: {
     *     // ... filter to delete one Entrenadores
     *   }
     * })
     * 
     */
    delete<T extends EntrenadoresDeleteArgs>(args: SelectSubset<T, EntrenadoresDeleteArgs<ExtArgs>>): Prisma__EntrenadoresClient<$Result.GetResult<Prisma.$EntrenadoresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entrenadores.
     * @param {EntrenadoresUpdateArgs} args - Arguments to update one Entrenadores.
     * @example
     * // Update one Entrenadores
     * const entrenadores = await prisma.entrenadores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntrenadoresUpdateArgs>(args: SelectSubset<T, EntrenadoresUpdateArgs<ExtArgs>>): Prisma__EntrenadoresClient<$Result.GetResult<Prisma.$EntrenadoresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entrenadores.
     * @param {EntrenadoresDeleteManyArgs} args - Arguments to filter Entrenadores to delete.
     * @example
     * // Delete a few Entrenadores
     * const { count } = await prisma.entrenadores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntrenadoresDeleteManyArgs>(args?: SelectSubset<T, EntrenadoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entrenadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entrenadores
     * const entrenadores = await prisma.entrenadores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntrenadoresUpdateManyArgs>(args: SelectSubset<T, EntrenadoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Entrenadores.
     * @param {EntrenadoresUpsertArgs} args - Arguments to update or create a Entrenadores.
     * @example
     * // Update or create a Entrenadores
     * const entrenadores = await prisma.entrenadores.upsert({
     *   create: {
     *     // ... data to create a Entrenadores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entrenadores we want to update
     *   }
     * })
     */
    upsert<T extends EntrenadoresUpsertArgs>(args: SelectSubset<T, EntrenadoresUpsertArgs<ExtArgs>>): Prisma__EntrenadoresClient<$Result.GetResult<Prisma.$EntrenadoresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entrenadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadoresCountArgs} args - Arguments to filter Entrenadores to count.
     * @example
     * // Count the number of Entrenadores
     * const count = await prisma.entrenadores.count({
     *   where: {
     *     // ... the filter for the Entrenadores we want to count
     *   }
     * })
    **/
    count<T extends EntrenadoresCountArgs>(
      args?: Subset<T, EntrenadoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntrenadoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entrenadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EntrenadoresAggregateArgs>(args: Subset<T, EntrenadoresAggregateArgs>): Prisma.PrismaPromise<GetEntrenadoresAggregateType<T>>

    /**
     * Group by Entrenadores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadoresGroupByArgs} args - Group by arguments.
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
      T extends EntrenadoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntrenadoresGroupByArgs['orderBy'] }
        : { orderBy?: EntrenadoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EntrenadoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntrenadoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entrenadores model
   */
  readonly fields: EntrenadoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entrenadores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntrenadoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Clases<T extends Entrenadores$ClasesArgs<ExtArgs> = {}>(args?: Subset<T, Entrenadores$ClasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Usuarios<T extends Entrenadores$UsuariosArgs<ExtArgs> = {}>(args?: Subset<T, Entrenadores$UsuariosArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Talleres<T extends Entrenadores$TalleresArgs<ExtArgs> = {}>(args?: Subset<T, Entrenadores$TalleresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TalleresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Entrenadores model
   */
  interface EntrenadoresFieldRefs {
    readonly IdEntrenador: FieldRef<"Entrenadores", 'Int'>
    readonly FkIdUsuario: FieldRef<"Entrenadores", 'Int'>
    readonly Especialidad: FieldRef<"Entrenadores", 'String'>
    readonly Experiencia: FieldRef<"Entrenadores", 'String'>
    readonly Telefono: FieldRef<"Entrenadores", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Entrenadores findUnique
   */
  export type EntrenadoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenadores
     */
    select?: EntrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenadores
     */
    omit?: EntrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadoresInclude<ExtArgs> | null
    /**
     * Filter, which Entrenadores to fetch.
     */
    where: EntrenadoresWhereUniqueInput
  }

  /**
   * Entrenadores findUniqueOrThrow
   */
  export type EntrenadoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenadores
     */
    select?: EntrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenadores
     */
    omit?: EntrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadoresInclude<ExtArgs> | null
    /**
     * Filter, which Entrenadores to fetch.
     */
    where: EntrenadoresWhereUniqueInput
  }

  /**
   * Entrenadores findFirst
   */
  export type EntrenadoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenadores
     */
    select?: EntrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenadores
     */
    omit?: EntrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadoresInclude<ExtArgs> | null
    /**
     * Filter, which Entrenadores to fetch.
     */
    where?: EntrenadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entrenadores to fetch.
     */
    orderBy?: EntrenadoresOrderByWithRelationInput | EntrenadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entrenadores.
     */
    cursor?: EntrenadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entrenadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entrenadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entrenadores.
     */
    distinct?: EntrenadoresScalarFieldEnum | EntrenadoresScalarFieldEnum[]
  }

  /**
   * Entrenadores findFirstOrThrow
   */
  export type EntrenadoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenadores
     */
    select?: EntrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenadores
     */
    omit?: EntrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadoresInclude<ExtArgs> | null
    /**
     * Filter, which Entrenadores to fetch.
     */
    where?: EntrenadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entrenadores to fetch.
     */
    orderBy?: EntrenadoresOrderByWithRelationInput | EntrenadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entrenadores.
     */
    cursor?: EntrenadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entrenadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entrenadores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entrenadores.
     */
    distinct?: EntrenadoresScalarFieldEnum | EntrenadoresScalarFieldEnum[]
  }

  /**
   * Entrenadores findMany
   */
  export type EntrenadoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenadores
     */
    select?: EntrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenadores
     */
    omit?: EntrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadoresInclude<ExtArgs> | null
    /**
     * Filter, which Entrenadores to fetch.
     */
    where?: EntrenadoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entrenadores to fetch.
     */
    orderBy?: EntrenadoresOrderByWithRelationInput | EntrenadoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entrenadores.
     */
    cursor?: EntrenadoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entrenadores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entrenadores.
     */
    skip?: number
    distinct?: EntrenadoresScalarFieldEnum | EntrenadoresScalarFieldEnum[]
  }

  /**
   * Entrenadores create
   */
  export type EntrenadoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenadores
     */
    select?: EntrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenadores
     */
    omit?: EntrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadoresInclude<ExtArgs> | null
    /**
     * The data needed to create a Entrenadores.
     */
    data: XOR<EntrenadoresCreateInput, EntrenadoresUncheckedCreateInput>
  }

  /**
   * Entrenadores createMany
   */
  export type EntrenadoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entrenadores.
     */
    data: EntrenadoresCreateManyInput | EntrenadoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entrenadores update
   */
  export type EntrenadoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenadores
     */
    select?: EntrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenadores
     */
    omit?: EntrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadoresInclude<ExtArgs> | null
    /**
     * The data needed to update a Entrenadores.
     */
    data: XOR<EntrenadoresUpdateInput, EntrenadoresUncheckedUpdateInput>
    /**
     * Choose, which Entrenadores to update.
     */
    where: EntrenadoresWhereUniqueInput
  }

  /**
   * Entrenadores updateMany
   */
  export type EntrenadoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entrenadores.
     */
    data: XOR<EntrenadoresUpdateManyMutationInput, EntrenadoresUncheckedUpdateManyInput>
    /**
     * Filter which Entrenadores to update
     */
    where?: EntrenadoresWhereInput
    /**
     * Limit how many Entrenadores to update.
     */
    limit?: number
  }

  /**
   * Entrenadores upsert
   */
  export type EntrenadoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenadores
     */
    select?: EntrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenadores
     */
    omit?: EntrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadoresInclude<ExtArgs> | null
    /**
     * The filter to search for the Entrenadores to update in case it exists.
     */
    where: EntrenadoresWhereUniqueInput
    /**
     * In case the Entrenadores found by the `where` argument doesn't exist, create a new Entrenadores with this data.
     */
    create: XOR<EntrenadoresCreateInput, EntrenadoresUncheckedCreateInput>
    /**
     * In case the Entrenadores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntrenadoresUpdateInput, EntrenadoresUncheckedUpdateInput>
  }

  /**
   * Entrenadores delete
   */
  export type EntrenadoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenadores
     */
    select?: EntrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenadores
     */
    omit?: EntrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadoresInclude<ExtArgs> | null
    /**
     * Filter which Entrenadores to delete.
     */
    where: EntrenadoresWhereUniqueInput
  }

  /**
   * Entrenadores deleteMany
   */
  export type EntrenadoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entrenadores to delete
     */
    where?: EntrenadoresWhereInput
    /**
     * Limit how many Entrenadores to delete.
     */
    limit?: number
  }

  /**
   * Entrenadores.Clases
   */
  export type Entrenadores$ClasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clases
     */
    select?: ClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clases
     */
    omit?: ClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasesInclude<ExtArgs> | null
    where?: ClasesWhereInput
    orderBy?: ClasesOrderByWithRelationInput | ClasesOrderByWithRelationInput[]
    cursor?: ClasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClasesScalarFieldEnum | ClasesScalarFieldEnum[]
  }

  /**
   * Entrenadores.Usuarios
   */
  export type Entrenadores$UsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    where?: UsuariosWhereInput
  }

  /**
   * Entrenadores.Talleres
   */
  export type Entrenadores$TalleresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talleres
     */
    select?: TalleresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talleres
     */
    omit?: TalleresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalleresInclude<ExtArgs> | null
    where?: TalleresWhereInput
    orderBy?: TalleresOrderByWithRelationInput | TalleresOrderByWithRelationInput[]
    cursor?: TalleresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TalleresScalarFieldEnum | TalleresScalarFieldEnum[]
  }

  /**
   * Entrenadores without action
   */
  export type EntrenadoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenadores
     */
    select?: EntrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenadores
     */
    omit?: EntrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadoresInclude<ExtArgs> | null
  }


  /**
   * Model Espacios
   */

  export type AggregateEspacios = {
    _count: EspaciosCountAggregateOutputType | null
    _avg: EspaciosAvgAggregateOutputType | null
    _sum: EspaciosSumAggregateOutputType | null
    _min: EspaciosMinAggregateOutputType | null
    _max: EspaciosMaxAggregateOutputType | null
  }

  export type EspaciosAvgAggregateOutputType = {
    IdEspacio: number | null
    Capacidad: number | null
  }

  export type EspaciosSumAggregateOutputType = {
    IdEspacio: number | null
    Capacidad: number | null
  }

  export type EspaciosMinAggregateOutputType = {
    IdEspacio: number | null
    NombreE: string | null
    Tipo: $Enums.Espacios_Tipo | null
    Capacidad: number | null
    Descripcion: string | null
    Ubicacion: string | null
  }

  export type EspaciosMaxAggregateOutputType = {
    IdEspacio: number | null
    NombreE: string | null
    Tipo: $Enums.Espacios_Tipo | null
    Capacidad: number | null
    Descripcion: string | null
    Ubicacion: string | null
  }

  export type EspaciosCountAggregateOutputType = {
    IdEspacio: number
    NombreE: number
    Tipo: number
    Capacidad: number
    Descripcion: number
    Ubicacion: number
    _all: number
  }


  export type EspaciosAvgAggregateInputType = {
    IdEspacio?: true
    Capacidad?: true
  }

  export type EspaciosSumAggregateInputType = {
    IdEspacio?: true
    Capacidad?: true
  }

  export type EspaciosMinAggregateInputType = {
    IdEspacio?: true
    NombreE?: true
    Tipo?: true
    Capacidad?: true
    Descripcion?: true
    Ubicacion?: true
  }

  export type EspaciosMaxAggregateInputType = {
    IdEspacio?: true
    NombreE?: true
    Tipo?: true
    Capacidad?: true
    Descripcion?: true
    Ubicacion?: true
  }

  export type EspaciosCountAggregateInputType = {
    IdEspacio?: true
    NombreE?: true
    Tipo?: true
    Capacidad?: true
    Descripcion?: true
    Ubicacion?: true
    _all?: true
  }

  export type EspaciosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Espacios to aggregate.
     */
    where?: EspaciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Espacios to fetch.
     */
    orderBy?: EspaciosOrderByWithRelationInput | EspaciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EspaciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Espacios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Espacios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Espacios
    **/
    _count?: true | EspaciosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EspaciosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EspaciosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EspaciosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EspaciosMaxAggregateInputType
  }

  export type GetEspaciosAggregateType<T extends EspaciosAggregateArgs> = {
        [P in keyof T & keyof AggregateEspacios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEspacios[P]>
      : GetScalarType<T[P], AggregateEspacios[P]>
  }




  export type EspaciosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EspaciosWhereInput
    orderBy?: EspaciosOrderByWithAggregationInput | EspaciosOrderByWithAggregationInput[]
    by: EspaciosScalarFieldEnum[] | EspaciosScalarFieldEnum
    having?: EspaciosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EspaciosCountAggregateInputType | true
    _avg?: EspaciosAvgAggregateInputType
    _sum?: EspaciosSumAggregateInputType
    _min?: EspaciosMinAggregateInputType
    _max?: EspaciosMaxAggregateInputType
  }

  export type EspaciosGroupByOutputType = {
    IdEspacio: number
    NombreE: string
    Tipo: $Enums.Espacios_Tipo
    Capacidad: number
    Descripcion: string | null
    Ubicacion: string
    _count: EspaciosCountAggregateOutputType | null
    _avg: EspaciosAvgAggregateOutputType | null
    _sum: EspaciosSumAggregateOutputType | null
    _min: EspaciosMinAggregateOutputType | null
    _max: EspaciosMaxAggregateOutputType | null
  }

  type GetEspaciosGroupByPayload<T extends EspaciosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EspaciosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EspaciosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EspaciosGroupByOutputType[P]>
            : GetScalarType<T[P], EspaciosGroupByOutputType[P]>
        }
      >
    >


  export type EspaciosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdEspacio?: boolean
    NombreE?: boolean
    Tipo?: boolean
    Capacidad?: boolean
    Descripcion?: boolean
    Ubicacion?: boolean
    Clases?: boolean | Espacios$ClasesArgs<ExtArgs>
    Horarios?: boolean | Espacios$HorariosArgs<ExtArgs>
    Reservas?: boolean | Espacios$ReservasArgs<ExtArgs>
    Torneos?: boolean | Espacios$TorneosArgs<ExtArgs>
    _count?: boolean | EspaciosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["espacios"]>



  export type EspaciosSelectScalar = {
    IdEspacio?: boolean
    NombreE?: boolean
    Tipo?: boolean
    Capacidad?: boolean
    Descripcion?: boolean
    Ubicacion?: boolean
  }

  export type EspaciosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"IdEspacio" | "NombreE" | "Tipo" | "Capacidad" | "Descripcion" | "Ubicacion", ExtArgs["result"]["espacios"]>
  export type EspaciosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Clases?: boolean | Espacios$ClasesArgs<ExtArgs>
    Horarios?: boolean | Espacios$HorariosArgs<ExtArgs>
    Reservas?: boolean | Espacios$ReservasArgs<ExtArgs>
    Torneos?: boolean | Espacios$TorneosArgs<ExtArgs>
    _count?: boolean | EspaciosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EspaciosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Espacios"
    objects: {
      Clases: Prisma.$ClasesPayload<ExtArgs>[]
      Horarios: Prisma.$HorariosPayload<ExtArgs>[]
      Reservas: Prisma.$ReservasPayload<ExtArgs>[]
      Torneos: Prisma.$TorneosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      IdEspacio: number
      NombreE: string
      Tipo: $Enums.Espacios_Tipo
      Capacidad: number
      Descripcion: string | null
      Ubicacion: string
    }, ExtArgs["result"]["espacios"]>
    composites: {}
  }

  type EspaciosGetPayload<S extends boolean | null | undefined | EspaciosDefaultArgs> = $Result.GetResult<Prisma.$EspaciosPayload, S>

  type EspaciosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EspaciosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EspaciosCountAggregateInputType | true
    }

  export interface EspaciosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Espacios'], meta: { name: 'Espacios' } }
    /**
     * Find zero or one Espacios that matches the filter.
     * @param {EspaciosFindUniqueArgs} args - Arguments to find a Espacios
     * @example
     * // Get one Espacios
     * const espacios = await prisma.espacios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EspaciosFindUniqueArgs>(args: SelectSubset<T, EspaciosFindUniqueArgs<ExtArgs>>): Prisma__EspaciosClient<$Result.GetResult<Prisma.$EspaciosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Espacios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EspaciosFindUniqueOrThrowArgs} args - Arguments to find a Espacios
     * @example
     * // Get one Espacios
     * const espacios = await prisma.espacios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EspaciosFindUniqueOrThrowArgs>(args: SelectSubset<T, EspaciosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EspaciosClient<$Result.GetResult<Prisma.$EspaciosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Espacios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspaciosFindFirstArgs} args - Arguments to find a Espacios
     * @example
     * // Get one Espacios
     * const espacios = await prisma.espacios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EspaciosFindFirstArgs>(args?: SelectSubset<T, EspaciosFindFirstArgs<ExtArgs>>): Prisma__EspaciosClient<$Result.GetResult<Prisma.$EspaciosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Espacios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspaciosFindFirstOrThrowArgs} args - Arguments to find a Espacios
     * @example
     * // Get one Espacios
     * const espacios = await prisma.espacios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EspaciosFindFirstOrThrowArgs>(args?: SelectSubset<T, EspaciosFindFirstOrThrowArgs<ExtArgs>>): Prisma__EspaciosClient<$Result.GetResult<Prisma.$EspaciosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Espacios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspaciosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Espacios
     * const espacios = await prisma.espacios.findMany()
     * 
     * // Get first 10 Espacios
     * const espacios = await prisma.espacios.findMany({ take: 10 })
     * 
     * // Only select the `IdEspacio`
     * const espaciosWithIdEspacioOnly = await prisma.espacios.findMany({ select: { IdEspacio: true } })
     * 
     */
    findMany<T extends EspaciosFindManyArgs>(args?: SelectSubset<T, EspaciosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EspaciosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Espacios.
     * @param {EspaciosCreateArgs} args - Arguments to create a Espacios.
     * @example
     * // Create one Espacios
     * const Espacios = await prisma.espacios.create({
     *   data: {
     *     // ... data to create a Espacios
     *   }
     * })
     * 
     */
    create<T extends EspaciosCreateArgs>(args: SelectSubset<T, EspaciosCreateArgs<ExtArgs>>): Prisma__EspaciosClient<$Result.GetResult<Prisma.$EspaciosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Espacios.
     * @param {EspaciosCreateManyArgs} args - Arguments to create many Espacios.
     * @example
     * // Create many Espacios
     * const espacios = await prisma.espacios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EspaciosCreateManyArgs>(args?: SelectSubset<T, EspaciosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Espacios.
     * @param {EspaciosDeleteArgs} args - Arguments to delete one Espacios.
     * @example
     * // Delete one Espacios
     * const Espacios = await prisma.espacios.delete({
     *   where: {
     *     // ... filter to delete one Espacios
     *   }
     * })
     * 
     */
    delete<T extends EspaciosDeleteArgs>(args: SelectSubset<T, EspaciosDeleteArgs<ExtArgs>>): Prisma__EspaciosClient<$Result.GetResult<Prisma.$EspaciosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Espacios.
     * @param {EspaciosUpdateArgs} args - Arguments to update one Espacios.
     * @example
     * // Update one Espacios
     * const espacios = await prisma.espacios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EspaciosUpdateArgs>(args: SelectSubset<T, EspaciosUpdateArgs<ExtArgs>>): Prisma__EspaciosClient<$Result.GetResult<Prisma.$EspaciosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Espacios.
     * @param {EspaciosDeleteManyArgs} args - Arguments to filter Espacios to delete.
     * @example
     * // Delete a few Espacios
     * const { count } = await prisma.espacios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EspaciosDeleteManyArgs>(args?: SelectSubset<T, EspaciosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Espacios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspaciosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Espacios
     * const espacios = await prisma.espacios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EspaciosUpdateManyArgs>(args: SelectSubset<T, EspaciosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Espacios.
     * @param {EspaciosUpsertArgs} args - Arguments to update or create a Espacios.
     * @example
     * // Update or create a Espacios
     * const espacios = await prisma.espacios.upsert({
     *   create: {
     *     // ... data to create a Espacios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Espacios we want to update
     *   }
     * })
     */
    upsert<T extends EspaciosUpsertArgs>(args: SelectSubset<T, EspaciosUpsertArgs<ExtArgs>>): Prisma__EspaciosClient<$Result.GetResult<Prisma.$EspaciosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Espacios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspaciosCountArgs} args - Arguments to filter Espacios to count.
     * @example
     * // Count the number of Espacios
     * const count = await prisma.espacios.count({
     *   where: {
     *     // ... the filter for the Espacios we want to count
     *   }
     * })
    **/
    count<T extends EspaciosCountArgs>(
      args?: Subset<T, EspaciosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EspaciosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Espacios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspaciosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EspaciosAggregateArgs>(args: Subset<T, EspaciosAggregateArgs>): Prisma.PrismaPromise<GetEspaciosAggregateType<T>>

    /**
     * Group by Espacios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspaciosGroupByArgs} args - Group by arguments.
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
      T extends EspaciosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EspaciosGroupByArgs['orderBy'] }
        : { orderBy?: EspaciosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EspaciosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEspaciosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Espacios model
   */
  readonly fields: EspaciosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Espacios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EspaciosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Clases<T extends Espacios$ClasesArgs<ExtArgs> = {}>(args?: Subset<T, Espacios$ClasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Horarios<T extends Espacios$HorariosArgs<ExtArgs> = {}>(args?: Subset<T, Espacios$HorariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Reservas<T extends Espacios$ReservasArgs<ExtArgs> = {}>(args?: Subset<T, Espacios$ReservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Torneos<T extends Espacios$TorneosArgs<ExtArgs> = {}>(args?: Subset<T, Espacios$TorneosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TorneosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Espacios model
   */
  interface EspaciosFieldRefs {
    readonly IdEspacio: FieldRef<"Espacios", 'Int'>
    readonly NombreE: FieldRef<"Espacios", 'String'>
    readonly Tipo: FieldRef<"Espacios", 'Espacios_Tipo'>
    readonly Capacidad: FieldRef<"Espacios", 'Int'>
    readonly Descripcion: FieldRef<"Espacios", 'String'>
    readonly Ubicacion: FieldRef<"Espacios", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Espacios findUnique
   */
  export type EspaciosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Espacios
     */
    select?: EspaciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Espacios
     */
    omit?: EspaciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspaciosInclude<ExtArgs> | null
    /**
     * Filter, which Espacios to fetch.
     */
    where: EspaciosWhereUniqueInput
  }

  /**
   * Espacios findUniqueOrThrow
   */
  export type EspaciosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Espacios
     */
    select?: EspaciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Espacios
     */
    omit?: EspaciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspaciosInclude<ExtArgs> | null
    /**
     * Filter, which Espacios to fetch.
     */
    where: EspaciosWhereUniqueInput
  }

  /**
   * Espacios findFirst
   */
  export type EspaciosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Espacios
     */
    select?: EspaciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Espacios
     */
    omit?: EspaciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspaciosInclude<ExtArgs> | null
    /**
     * Filter, which Espacios to fetch.
     */
    where?: EspaciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Espacios to fetch.
     */
    orderBy?: EspaciosOrderByWithRelationInput | EspaciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Espacios.
     */
    cursor?: EspaciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Espacios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Espacios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Espacios.
     */
    distinct?: EspaciosScalarFieldEnum | EspaciosScalarFieldEnum[]
  }

  /**
   * Espacios findFirstOrThrow
   */
  export type EspaciosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Espacios
     */
    select?: EspaciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Espacios
     */
    omit?: EspaciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspaciosInclude<ExtArgs> | null
    /**
     * Filter, which Espacios to fetch.
     */
    where?: EspaciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Espacios to fetch.
     */
    orderBy?: EspaciosOrderByWithRelationInput | EspaciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Espacios.
     */
    cursor?: EspaciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Espacios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Espacios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Espacios.
     */
    distinct?: EspaciosScalarFieldEnum | EspaciosScalarFieldEnum[]
  }

  /**
   * Espacios findMany
   */
  export type EspaciosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Espacios
     */
    select?: EspaciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Espacios
     */
    omit?: EspaciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspaciosInclude<ExtArgs> | null
    /**
     * Filter, which Espacios to fetch.
     */
    where?: EspaciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Espacios to fetch.
     */
    orderBy?: EspaciosOrderByWithRelationInput | EspaciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Espacios.
     */
    cursor?: EspaciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Espacios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Espacios.
     */
    skip?: number
    distinct?: EspaciosScalarFieldEnum | EspaciosScalarFieldEnum[]
  }

  /**
   * Espacios create
   */
  export type EspaciosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Espacios
     */
    select?: EspaciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Espacios
     */
    omit?: EspaciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspaciosInclude<ExtArgs> | null
    /**
     * The data needed to create a Espacios.
     */
    data: XOR<EspaciosCreateInput, EspaciosUncheckedCreateInput>
  }

  /**
   * Espacios createMany
   */
  export type EspaciosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Espacios.
     */
    data: EspaciosCreateManyInput | EspaciosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Espacios update
   */
  export type EspaciosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Espacios
     */
    select?: EspaciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Espacios
     */
    omit?: EspaciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspaciosInclude<ExtArgs> | null
    /**
     * The data needed to update a Espacios.
     */
    data: XOR<EspaciosUpdateInput, EspaciosUncheckedUpdateInput>
    /**
     * Choose, which Espacios to update.
     */
    where: EspaciosWhereUniqueInput
  }

  /**
   * Espacios updateMany
   */
  export type EspaciosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Espacios.
     */
    data: XOR<EspaciosUpdateManyMutationInput, EspaciosUncheckedUpdateManyInput>
    /**
     * Filter which Espacios to update
     */
    where?: EspaciosWhereInput
    /**
     * Limit how many Espacios to update.
     */
    limit?: number
  }

  /**
   * Espacios upsert
   */
  export type EspaciosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Espacios
     */
    select?: EspaciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Espacios
     */
    omit?: EspaciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspaciosInclude<ExtArgs> | null
    /**
     * The filter to search for the Espacios to update in case it exists.
     */
    where: EspaciosWhereUniqueInput
    /**
     * In case the Espacios found by the `where` argument doesn't exist, create a new Espacios with this data.
     */
    create: XOR<EspaciosCreateInput, EspaciosUncheckedCreateInput>
    /**
     * In case the Espacios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EspaciosUpdateInput, EspaciosUncheckedUpdateInput>
  }

  /**
   * Espacios delete
   */
  export type EspaciosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Espacios
     */
    select?: EspaciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Espacios
     */
    omit?: EspaciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspaciosInclude<ExtArgs> | null
    /**
     * Filter which Espacios to delete.
     */
    where: EspaciosWhereUniqueInput
  }

  /**
   * Espacios deleteMany
   */
  export type EspaciosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Espacios to delete
     */
    where?: EspaciosWhereInput
    /**
     * Limit how many Espacios to delete.
     */
    limit?: number
  }

  /**
   * Espacios.Clases
   */
  export type Espacios$ClasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clases
     */
    select?: ClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clases
     */
    omit?: ClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasesInclude<ExtArgs> | null
    where?: ClasesWhereInput
    orderBy?: ClasesOrderByWithRelationInput | ClasesOrderByWithRelationInput[]
    cursor?: ClasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClasesScalarFieldEnum | ClasesScalarFieldEnum[]
  }

  /**
   * Espacios.Horarios
   */
  export type Espacios$HorariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horarios
     */
    select?: HorariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horarios
     */
    omit?: HorariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorariosInclude<ExtArgs> | null
    where?: HorariosWhereInput
    orderBy?: HorariosOrderByWithRelationInput | HorariosOrderByWithRelationInput[]
    cursor?: HorariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HorariosScalarFieldEnum | HorariosScalarFieldEnum[]
  }

  /**
   * Espacios.Reservas
   */
  export type Espacios$ReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
    where?: ReservasWhereInput
    orderBy?: ReservasOrderByWithRelationInput | ReservasOrderByWithRelationInput[]
    cursor?: ReservasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * Espacios.Torneos
   */
  export type Espacios$TorneosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneos
     */
    select?: TorneosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneos
     */
    omit?: TorneosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TorneosInclude<ExtArgs> | null
    where?: TorneosWhereInput
    orderBy?: TorneosOrderByWithRelationInput | TorneosOrderByWithRelationInput[]
    cursor?: TorneosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TorneosScalarFieldEnum | TorneosScalarFieldEnum[]
  }

  /**
   * Espacios without action
   */
  export type EspaciosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Espacios
     */
    select?: EspaciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Espacios
     */
    omit?: EspaciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspaciosInclude<ExtArgs> | null
  }


  /**
   * Model Horarios
   */

  export type AggregateHorarios = {
    _count: HorariosCountAggregateOutputType | null
    _avg: HorariosAvgAggregateOutputType | null
    _sum: HorariosSumAggregateOutputType | null
    _min: HorariosMinAggregateOutputType | null
    _max: HorariosMaxAggregateOutputType | null
  }

  export type HorariosAvgAggregateOutputType = {
    IdHorario: number | null
    FkIdEspacio: number | null
  }

  export type HorariosSumAggregateOutputType = {
    IdHorario: number | null
    FkIdEspacio: number | null
  }

  export type HorariosMinAggregateOutputType = {
    IdHorario: number | null
    FkIdEspacio: number | null
    DiaSemana: string | null
    HoraInicio: Date | null
    HoraFin: Date | null
  }

  export type HorariosMaxAggregateOutputType = {
    IdHorario: number | null
    FkIdEspacio: number | null
    DiaSemana: string | null
    HoraInicio: Date | null
    HoraFin: Date | null
  }

  export type HorariosCountAggregateOutputType = {
    IdHorario: number
    FkIdEspacio: number
    DiaSemana: number
    HoraInicio: number
    HoraFin: number
    _all: number
  }


  export type HorariosAvgAggregateInputType = {
    IdHorario?: true
    FkIdEspacio?: true
  }

  export type HorariosSumAggregateInputType = {
    IdHorario?: true
    FkIdEspacio?: true
  }

  export type HorariosMinAggregateInputType = {
    IdHorario?: true
    FkIdEspacio?: true
    DiaSemana?: true
    HoraInicio?: true
    HoraFin?: true
  }

  export type HorariosMaxAggregateInputType = {
    IdHorario?: true
    FkIdEspacio?: true
    DiaSemana?: true
    HoraInicio?: true
    HoraFin?: true
  }

  export type HorariosCountAggregateInputType = {
    IdHorario?: true
    FkIdEspacio?: true
    DiaSemana?: true
    HoraInicio?: true
    HoraFin?: true
    _all?: true
  }

  export type HorariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Horarios to aggregate.
     */
    where?: HorariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Horarios to fetch.
     */
    orderBy?: HorariosOrderByWithRelationInput | HorariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HorariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Horarios
    **/
    _count?: true | HorariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HorariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HorariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HorariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HorariosMaxAggregateInputType
  }

  export type GetHorariosAggregateType<T extends HorariosAggregateArgs> = {
        [P in keyof T & keyof AggregateHorarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHorarios[P]>
      : GetScalarType<T[P], AggregateHorarios[P]>
  }




  export type HorariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HorariosWhereInput
    orderBy?: HorariosOrderByWithAggregationInput | HorariosOrderByWithAggregationInput[]
    by: HorariosScalarFieldEnum[] | HorariosScalarFieldEnum
    having?: HorariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HorariosCountAggregateInputType | true
    _avg?: HorariosAvgAggregateInputType
    _sum?: HorariosSumAggregateInputType
    _min?: HorariosMinAggregateInputType
    _max?: HorariosMaxAggregateInputType
  }

  export type HorariosGroupByOutputType = {
    IdHorario: number
    FkIdEspacio: number
    DiaSemana: string
    HoraInicio: Date
    HoraFin: Date
    _count: HorariosCountAggregateOutputType | null
    _avg: HorariosAvgAggregateOutputType | null
    _sum: HorariosSumAggregateOutputType | null
    _min: HorariosMinAggregateOutputType | null
    _max: HorariosMaxAggregateOutputType | null
  }

  type GetHorariosGroupByPayload<T extends HorariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HorariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HorariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HorariosGroupByOutputType[P]>
            : GetScalarType<T[P], HorariosGroupByOutputType[P]>
        }
      >
    >


  export type HorariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdHorario?: boolean
    FkIdEspacio?: boolean
    DiaSemana?: boolean
    HoraInicio?: boolean
    HoraFin?: boolean
    Clases?: boolean | Horarios$ClasesArgs<ExtArgs>
    Espacios?: boolean | EspaciosDefaultArgs<ExtArgs>
    Talleres?: boolean | Horarios$TalleresArgs<ExtArgs>
    Torneos?: boolean | Horarios$TorneosArgs<ExtArgs>
    _count?: boolean | HorariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horarios"]>



  export type HorariosSelectScalar = {
    IdHorario?: boolean
    FkIdEspacio?: boolean
    DiaSemana?: boolean
    HoraInicio?: boolean
    HoraFin?: boolean
  }

  export type HorariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"IdHorario" | "FkIdEspacio" | "DiaSemana" | "HoraInicio" | "HoraFin", ExtArgs["result"]["horarios"]>
  export type HorariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Clases?: boolean | Horarios$ClasesArgs<ExtArgs>
    Espacios?: boolean | EspaciosDefaultArgs<ExtArgs>
    Talleres?: boolean | Horarios$TalleresArgs<ExtArgs>
    Torneos?: boolean | Horarios$TorneosArgs<ExtArgs>
    _count?: boolean | HorariosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $HorariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Horarios"
    objects: {
      Clases: Prisma.$ClasesPayload<ExtArgs>[]
      Espacios: Prisma.$EspaciosPayload<ExtArgs>
      Talleres: Prisma.$TalleresPayload<ExtArgs>[]
      Torneos: Prisma.$TorneosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      IdHorario: number
      FkIdEspacio: number
      DiaSemana: string
      HoraInicio: Date
      HoraFin: Date
    }, ExtArgs["result"]["horarios"]>
    composites: {}
  }

  type HorariosGetPayload<S extends boolean | null | undefined | HorariosDefaultArgs> = $Result.GetResult<Prisma.$HorariosPayload, S>

  type HorariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HorariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HorariosCountAggregateInputType | true
    }

  export interface HorariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Horarios'], meta: { name: 'Horarios' } }
    /**
     * Find zero or one Horarios that matches the filter.
     * @param {HorariosFindUniqueArgs} args - Arguments to find a Horarios
     * @example
     * // Get one Horarios
     * const horarios = await prisma.horarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HorariosFindUniqueArgs>(args: SelectSubset<T, HorariosFindUniqueArgs<ExtArgs>>): Prisma__HorariosClient<$Result.GetResult<Prisma.$HorariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Horarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HorariosFindUniqueOrThrowArgs} args - Arguments to find a Horarios
     * @example
     * // Get one Horarios
     * const horarios = await prisma.horarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HorariosFindUniqueOrThrowArgs>(args: SelectSubset<T, HorariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HorariosClient<$Result.GetResult<Prisma.$HorariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Horarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorariosFindFirstArgs} args - Arguments to find a Horarios
     * @example
     * // Get one Horarios
     * const horarios = await prisma.horarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HorariosFindFirstArgs>(args?: SelectSubset<T, HorariosFindFirstArgs<ExtArgs>>): Prisma__HorariosClient<$Result.GetResult<Prisma.$HorariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Horarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorariosFindFirstOrThrowArgs} args - Arguments to find a Horarios
     * @example
     * // Get one Horarios
     * const horarios = await prisma.horarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HorariosFindFirstOrThrowArgs>(args?: SelectSubset<T, HorariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__HorariosClient<$Result.GetResult<Prisma.$HorariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Horarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Horarios
     * const horarios = await prisma.horarios.findMany()
     * 
     * // Get first 10 Horarios
     * const horarios = await prisma.horarios.findMany({ take: 10 })
     * 
     * // Only select the `IdHorario`
     * const horariosWithIdHorarioOnly = await prisma.horarios.findMany({ select: { IdHorario: true } })
     * 
     */
    findMany<T extends HorariosFindManyArgs>(args?: SelectSubset<T, HorariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Horarios.
     * @param {HorariosCreateArgs} args - Arguments to create a Horarios.
     * @example
     * // Create one Horarios
     * const Horarios = await prisma.horarios.create({
     *   data: {
     *     // ... data to create a Horarios
     *   }
     * })
     * 
     */
    create<T extends HorariosCreateArgs>(args: SelectSubset<T, HorariosCreateArgs<ExtArgs>>): Prisma__HorariosClient<$Result.GetResult<Prisma.$HorariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Horarios.
     * @param {HorariosCreateManyArgs} args - Arguments to create many Horarios.
     * @example
     * // Create many Horarios
     * const horarios = await prisma.horarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HorariosCreateManyArgs>(args?: SelectSubset<T, HorariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Horarios.
     * @param {HorariosDeleteArgs} args - Arguments to delete one Horarios.
     * @example
     * // Delete one Horarios
     * const Horarios = await prisma.horarios.delete({
     *   where: {
     *     // ... filter to delete one Horarios
     *   }
     * })
     * 
     */
    delete<T extends HorariosDeleteArgs>(args: SelectSubset<T, HorariosDeleteArgs<ExtArgs>>): Prisma__HorariosClient<$Result.GetResult<Prisma.$HorariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Horarios.
     * @param {HorariosUpdateArgs} args - Arguments to update one Horarios.
     * @example
     * // Update one Horarios
     * const horarios = await prisma.horarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HorariosUpdateArgs>(args: SelectSubset<T, HorariosUpdateArgs<ExtArgs>>): Prisma__HorariosClient<$Result.GetResult<Prisma.$HorariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Horarios.
     * @param {HorariosDeleteManyArgs} args - Arguments to filter Horarios to delete.
     * @example
     * // Delete a few Horarios
     * const { count } = await prisma.horarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HorariosDeleteManyArgs>(args?: SelectSubset<T, HorariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Horarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Horarios
     * const horarios = await prisma.horarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HorariosUpdateManyArgs>(args: SelectSubset<T, HorariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Horarios.
     * @param {HorariosUpsertArgs} args - Arguments to update or create a Horarios.
     * @example
     * // Update or create a Horarios
     * const horarios = await prisma.horarios.upsert({
     *   create: {
     *     // ... data to create a Horarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Horarios we want to update
     *   }
     * })
     */
    upsert<T extends HorariosUpsertArgs>(args: SelectSubset<T, HorariosUpsertArgs<ExtArgs>>): Prisma__HorariosClient<$Result.GetResult<Prisma.$HorariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Horarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorariosCountArgs} args - Arguments to filter Horarios to count.
     * @example
     * // Count the number of Horarios
     * const count = await prisma.horarios.count({
     *   where: {
     *     // ... the filter for the Horarios we want to count
     *   }
     * })
    **/
    count<T extends HorariosCountArgs>(
      args?: Subset<T, HorariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HorariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Horarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HorariosAggregateArgs>(args: Subset<T, HorariosAggregateArgs>): Prisma.PrismaPromise<GetHorariosAggregateType<T>>

    /**
     * Group by Horarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorariosGroupByArgs} args - Group by arguments.
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
      T extends HorariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HorariosGroupByArgs['orderBy'] }
        : { orderBy?: HorariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HorariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHorariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Horarios model
   */
  readonly fields: HorariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Horarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HorariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Clases<T extends Horarios$ClasesArgs<ExtArgs> = {}>(args?: Subset<T, Horarios$ClasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Espacios<T extends EspaciosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EspaciosDefaultArgs<ExtArgs>>): Prisma__EspaciosClient<$Result.GetResult<Prisma.$EspaciosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Talleres<T extends Horarios$TalleresArgs<ExtArgs> = {}>(args?: Subset<T, Horarios$TalleresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TalleresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Torneos<T extends Horarios$TorneosArgs<ExtArgs> = {}>(args?: Subset<T, Horarios$TorneosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TorneosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Horarios model
   */
  interface HorariosFieldRefs {
    readonly IdHorario: FieldRef<"Horarios", 'Int'>
    readonly FkIdEspacio: FieldRef<"Horarios", 'Int'>
    readonly DiaSemana: FieldRef<"Horarios", 'String'>
    readonly HoraInicio: FieldRef<"Horarios", 'DateTime'>
    readonly HoraFin: FieldRef<"Horarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Horarios findUnique
   */
  export type HorariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horarios
     */
    select?: HorariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horarios
     */
    omit?: HorariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorariosInclude<ExtArgs> | null
    /**
     * Filter, which Horarios to fetch.
     */
    where: HorariosWhereUniqueInput
  }

  /**
   * Horarios findUniqueOrThrow
   */
  export type HorariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horarios
     */
    select?: HorariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horarios
     */
    omit?: HorariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorariosInclude<ExtArgs> | null
    /**
     * Filter, which Horarios to fetch.
     */
    where: HorariosWhereUniqueInput
  }

  /**
   * Horarios findFirst
   */
  export type HorariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horarios
     */
    select?: HorariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horarios
     */
    omit?: HorariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorariosInclude<ExtArgs> | null
    /**
     * Filter, which Horarios to fetch.
     */
    where?: HorariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Horarios to fetch.
     */
    orderBy?: HorariosOrderByWithRelationInput | HorariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Horarios.
     */
    cursor?: HorariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Horarios.
     */
    distinct?: HorariosScalarFieldEnum | HorariosScalarFieldEnum[]
  }

  /**
   * Horarios findFirstOrThrow
   */
  export type HorariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horarios
     */
    select?: HorariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horarios
     */
    omit?: HorariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorariosInclude<ExtArgs> | null
    /**
     * Filter, which Horarios to fetch.
     */
    where?: HorariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Horarios to fetch.
     */
    orderBy?: HorariosOrderByWithRelationInput | HorariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Horarios.
     */
    cursor?: HorariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Horarios.
     */
    distinct?: HorariosScalarFieldEnum | HorariosScalarFieldEnum[]
  }

  /**
   * Horarios findMany
   */
  export type HorariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horarios
     */
    select?: HorariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horarios
     */
    omit?: HorariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorariosInclude<ExtArgs> | null
    /**
     * Filter, which Horarios to fetch.
     */
    where?: HorariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Horarios to fetch.
     */
    orderBy?: HorariosOrderByWithRelationInput | HorariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Horarios.
     */
    cursor?: HorariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Horarios.
     */
    skip?: number
    distinct?: HorariosScalarFieldEnum | HorariosScalarFieldEnum[]
  }

  /**
   * Horarios create
   */
  export type HorariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horarios
     */
    select?: HorariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horarios
     */
    omit?: HorariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorariosInclude<ExtArgs> | null
    /**
     * The data needed to create a Horarios.
     */
    data: XOR<HorariosCreateInput, HorariosUncheckedCreateInput>
  }

  /**
   * Horarios createMany
   */
  export type HorariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Horarios.
     */
    data: HorariosCreateManyInput | HorariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Horarios update
   */
  export type HorariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horarios
     */
    select?: HorariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horarios
     */
    omit?: HorariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorariosInclude<ExtArgs> | null
    /**
     * The data needed to update a Horarios.
     */
    data: XOR<HorariosUpdateInput, HorariosUncheckedUpdateInput>
    /**
     * Choose, which Horarios to update.
     */
    where: HorariosWhereUniqueInput
  }

  /**
   * Horarios updateMany
   */
  export type HorariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Horarios.
     */
    data: XOR<HorariosUpdateManyMutationInput, HorariosUncheckedUpdateManyInput>
    /**
     * Filter which Horarios to update
     */
    where?: HorariosWhereInput
    /**
     * Limit how many Horarios to update.
     */
    limit?: number
  }

  /**
   * Horarios upsert
   */
  export type HorariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horarios
     */
    select?: HorariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horarios
     */
    omit?: HorariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorariosInclude<ExtArgs> | null
    /**
     * The filter to search for the Horarios to update in case it exists.
     */
    where: HorariosWhereUniqueInput
    /**
     * In case the Horarios found by the `where` argument doesn't exist, create a new Horarios with this data.
     */
    create: XOR<HorariosCreateInput, HorariosUncheckedCreateInput>
    /**
     * In case the Horarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HorariosUpdateInput, HorariosUncheckedUpdateInput>
  }

  /**
   * Horarios delete
   */
  export type HorariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horarios
     */
    select?: HorariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horarios
     */
    omit?: HorariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorariosInclude<ExtArgs> | null
    /**
     * Filter which Horarios to delete.
     */
    where: HorariosWhereUniqueInput
  }

  /**
   * Horarios deleteMany
   */
  export type HorariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Horarios to delete
     */
    where?: HorariosWhereInput
    /**
     * Limit how many Horarios to delete.
     */
    limit?: number
  }

  /**
   * Horarios.Clases
   */
  export type Horarios$ClasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clases
     */
    select?: ClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clases
     */
    omit?: ClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClasesInclude<ExtArgs> | null
    where?: ClasesWhereInput
    orderBy?: ClasesOrderByWithRelationInput | ClasesOrderByWithRelationInput[]
    cursor?: ClasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClasesScalarFieldEnum | ClasesScalarFieldEnum[]
  }

  /**
   * Horarios.Talleres
   */
  export type Horarios$TalleresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talleres
     */
    select?: TalleresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talleres
     */
    omit?: TalleresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalleresInclude<ExtArgs> | null
    where?: TalleresWhereInput
    orderBy?: TalleresOrderByWithRelationInput | TalleresOrderByWithRelationInput[]
    cursor?: TalleresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TalleresScalarFieldEnum | TalleresScalarFieldEnum[]
  }

  /**
   * Horarios.Torneos
   */
  export type Horarios$TorneosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneos
     */
    select?: TorneosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneos
     */
    omit?: TorneosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TorneosInclude<ExtArgs> | null
    where?: TorneosWhereInput
    orderBy?: TorneosOrderByWithRelationInput | TorneosOrderByWithRelationInput[]
    cursor?: TorneosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TorneosScalarFieldEnum | TorneosScalarFieldEnum[]
  }

  /**
   * Horarios without action
   */
  export type HorariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horarios
     */
    select?: HorariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horarios
     */
    omit?: HorariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorariosInclude<ExtArgs> | null
  }


  /**
   * Model InscripcionClases
   */

  export type AggregateInscripcionClases = {
    _count: InscripcionClasesCountAggregateOutputType | null
    _avg: InscripcionClasesAvgAggregateOutputType | null
    _sum: InscripcionClasesSumAggregateOutputType | null
    _min: InscripcionClasesMinAggregateOutputType | null
    _max: InscripcionClasesMaxAggregateOutputType | null
  }

  export type InscripcionClasesAvgAggregateOutputType = {
    IdInscripcionClase: number | null
    FkIdUsuario: number | null
    FkIdClase: number | null
  }

  export type InscripcionClasesSumAggregateOutputType = {
    IdInscripcionClase: number | null
    FkIdUsuario: number | null
    FkIdClase: number | null
  }

  export type InscripcionClasesMinAggregateOutputType = {
    IdInscripcionClase: number | null
    FkIdUsuario: number | null
    FkIdClase: number | null
    FechaI: Date | null
  }

  export type InscripcionClasesMaxAggregateOutputType = {
    IdInscripcionClase: number | null
    FkIdUsuario: number | null
    FkIdClase: number | null
    FechaI: Date | null
  }

  export type InscripcionClasesCountAggregateOutputType = {
    IdInscripcionClase: number
    FkIdUsuario: number
    FkIdClase: number
    FechaI: number
    _all: number
  }


  export type InscripcionClasesAvgAggregateInputType = {
    IdInscripcionClase?: true
    FkIdUsuario?: true
    FkIdClase?: true
  }

  export type InscripcionClasesSumAggregateInputType = {
    IdInscripcionClase?: true
    FkIdUsuario?: true
    FkIdClase?: true
  }

  export type InscripcionClasesMinAggregateInputType = {
    IdInscripcionClase?: true
    FkIdUsuario?: true
    FkIdClase?: true
    FechaI?: true
  }

  export type InscripcionClasesMaxAggregateInputType = {
    IdInscripcionClase?: true
    FkIdUsuario?: true
    FkIdClase?: true
    FechaI?: true
  }

  export type InscripcionClasesCountAggregateInputType = {
    IdInscripcionClase?: true
    FkIdUsuario?: true
    FkIdClase?: true
    FechaI?: true
    _all?: true
  }

  export type InscripcionClasesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InscripcionClases to aggregate.
     */
    where?: InscripcionClasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InscripcionClases to fetch.
     */
    orderBy?: InscripcionClasesOrderByWithRelationInput | InscripcionClasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InscripcionClasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InscripcionClases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InscripcionClases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InscripcionClases
    **/
    _count?: true | InscripcionClasesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InscripcionClasesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InscripcionClasesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InscripcionClasesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InscripcionClasesMaxAggregateInputType
  }

  export type GetInscripcionClasesAggregateType<T extends InscripcionClasesAggregateArgs> = {
        [P in keyof T & keyof AggregateInscripcionClases]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInscripcionClases[P]>
      : GetScalarType<T[P], AggregateInscripcionClases[P]>
  }




  export type InscripcionClasesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscripcionClasesWhereInput
    orderBy?: InscripcionClasesOrderByWithAggregationInput | InscripcionClasesOrderByWithAggregationInput[]
    by: InscripcionClasesScalarFieldEnum[] | InscripcionClasesScalarFieldEnum
    having?: InscripcionClasesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InscripcionClasesCountAggregateInputType | true
    _avg?: InscripcionClasesAvgAggregateInputType
    _sum?: InscripcionClasesSumAggregateInputType
    _min?: InscripcionClasesMinAggregateInputType
    _max?: InscripcionClasesMaxAggregateInputType
  }

  export type InscripcionClasesGroupByOutputType = {
    IdInscripcionClase: number
    FkIdUsuario: number
    FkIdClase: number
    FechaI: Date | null
    _count: InscripcionClasesCountAggregateOutputType | null
    _avg: InscripcionClasesAvgAggregateOutputType | null
    _sum: InscripcionClasesSumAggregateOutputType | null
    _min: InscripcionClasesMinAggregateOutputType | null
    _max: InscripcionClasesMaxAggregateOutputType | null
  }

  type GetInscripcionClasesGroupByPayload<T extends InscripcionClasesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InscripcionClasesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InscripcionClasesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InscripcionClasesGroupByOutputType[P]>
            : GetScalarType<T[P], InscripcionClasesGroupByOutputType[P]>
        }
      >
    >


  export type InscripcionClasesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdInscripcionClase?: boolean
    FkIdUsuario?: boolean
    FkIdClase?: boolean
    FechaI?: boolean
    Usuarios?: boolean | UsuariosDefaultArgs<ExtArgs>
    Clases?: boolean | ClasesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscripcionClases"]>



  export type InscripcionClasesSelectScalar = {
    IdInscripcionClase?: boolean
    FkIdUsuario?: boolean
    FkIdClase?: boolean
    FechaI?: boolean
  }

  export type InscripcionClasesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"IdInscripcionClase" | "FkIdUsuario" | "FkIdClase" | "FechaI", ExtArgs["result"]["inscripcionClases"]>
  export type InscripcionClasesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuarios?: boolean | UsuariosDefaultArgs<ExtArgs>
    Clases?: boolean | ClasesDefaultArgs<ExtArgs>
  }

  export type $InscripcionClasesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InscripcionClases"
    objects: {
      Usuarios: Prisma.$UsuariosPayload<ExtArgs>
      Clases: Prisma.$ClasesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      IdInscripcionClase: number
      FkIdUsuario: number
      FkIdClase: number
      FechaI: Date | null
    }, ExtArgs["result"]["inscripcionClases"]>
    composites: {}
  }

  type InscripcionClasesGetPayload<S extends boolean | null | undefined | InscripcionClasesDefaultArgs> = $Result.GetResult<Prisma.$InscripcionClasesPayload, S>

  type InscripcionClasesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InscripcionClasesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InscripcionClasesCountAggregateInputType | true
    }

  export interface InscripcionClasesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InscripcionClases'], meta: { name: 'InscripcionClases' } }
    /**
     * Find zero or one InscripcionClases that matches the filter.
     * @param {InscripcionClasesFindUniqueArgs} args - Arguments to find a InscripcionClases
     * @example
     * // Get one InscripcionClases
     * const inscripcionClases = await prisma.inscripcionClases.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InscripcionClasesFindUniqueArgs>(args: SelectSubset<T, InscripcionClasesFindUniqueArgs<ExtArgs>>): Prisma__InscripcionClasesClient<$Result.GetResult<Prisma.$InscripcionClasesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InscripcionClases that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InscripcionClasesFindUniqueOrThrowArgs} args - Arguments to find a InscripcionClases
     * @example
     * // Get one InscripcionClases
     * const inscripcionClases = await prisma.inscripcionClases.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InscripcionClasesFindUniqueOrThrowArgs>(args: SelectSubset<T, InscripcionClasesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InscripcionClasesClient<$Result.GetResult<Prisma.$InscripcionClasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InscripcionClases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionClasesFindFirstArgs} args - Arguments to find a InscripcionClases
     * @example
     * // Get one InscripcionClases
     * const inscripcionClases = await prisma.inscripcionClases.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InscripcionClasesFindFirstArgs>(args?: SelectSubset<T, InscripcionClasesFindFirstArgs<ExtArgs>>): Prisma__InscripcionClasesClient<$Result.GetResult<Prisma.$InscripcionClasesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InscripcionClases that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionClasesFindFirstOrThrowArgs} args - Arguments to find a InscripcionClases
     * @example
     * // Get one InscripcionClases
     * const inscripcionClases = await prisma.inscripcionClases.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InscripcionClasesFindFirstOrThrowArgs>(args?: SelectSubset<T, InscripcionClasesFindFirstOrThrowArgs<ExtArgs>>): Prisma__InscripcionClasesClient<$Result.GetResult<Prisma.$InscripcionClasesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InscripcionClases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionClasesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InscripcionClases
     * const inscripcionClases = await prisma.inscripcionClases.findMany()
     * 
     * // Get first 10 InscripcionClases
     * const inscripcionClases = await prisma.inscripcionClases.findMany({ take: 10 })
     * 
     * // Only select the `IdInscripcionClase`
     * const inscripcionClasesWithIdInscripcionClaseOnly = await prisma.inscripcionClases.findMany({ select: { IdInscripcionClase: true } })
     * 
     */
    findMany<T extends InscripcionClasesFindManyArgs>(args?: SelectSubset<T, InscripcionClasesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionClasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InscripcionClases.
     * @param {InscripcionClasesCreateArgs} args - Arguments to create a InscripcionClases.
     * @example
     * // Create one InscripcionClases
     * const InscripcionClases = await prisma.inscripcionClases.create({
     *   data: {
     *     // ... data to create a InscripcionClases
     *   }
     * })
     * 
     */
    create<T extends InscripcionClasesCreateArgs>(args: SelectSubset<T, InscripcionClasesCreateArgs<ExtArgs>>): Prisma__InscripcionClasesClient<$Result.GetResult<Prisma.$InscripcionClasesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InscripcionClases.
     * @param {InscripcionClasesCreateManyArgs} args - Arguments to create many InscripcionClases.
     * @example
     * // Create many InscripcionClases
     * const inscripcionClases = await prisma.inscripcionClases.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InscripcionClasesCreateManyArgs>(args?: SelectSubset<T, InscripcionClasesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InscripcionClases.
     * @param {InscripcionClasesDeleteArgs} args - Arguments to delete one InscripcionClases.
     * @example
     * // Delete one InscripcionClases
     * const InscripcionClases = await prisma.inscripcionClases.delete({
     *   where: {
     *     // ... filter to delete one InscripcionClases
     *   }
     * })
     * 
     */
    delete<T extends InscripcionClasesDeleteArgs>(args: SelectSubset<T, InscripcionClasesDeleteArgs<ExtArgs>>): Prisma__InscripcionClasesClient<$Result.GetResult<Prisma.$InscripcionClasesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InscripcionClases.
     * @param {InscripcionClasesUpdateArgs} args - Arguments to update one InscripcionClases.
     * @example
     * // Update one InscripcionClases
     * const inscripcionClases = await prisma.inscripcionClases.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InscripcionClasesUpdateArgs>(args: SelectSubset<T, InscripcionClasesUpdateArgs<ExtArgs>>): Prisma__InscripcionClasesClient<$Result.GetResult<Prisma.$InscripcionClasesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InscripcionClases.
     * @param {InscripcionClasesDeleteManyArgs} args - Arguments to filter InscripcionClases to delete.
     * @example
     * // Delete a few InscripcionClases
     * const { count } = await prisma.inscripcionClases.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InscripcionClasesDeleteManyArgs>(args?: SelectSubset<T, InscripcionClasesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InscripcionClases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionClasesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InscripcionClases
     * const inscripcionClases = await prisma.inscripcionClases.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InscripcionClasesUpdateManyArgs>(args: SelectSubset<T, InscripcionClasesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InscripcionClases.
     * @param {InscripcionClasesUpsertArgs} args - Arguments to update or create a InscripcionClases.
     * @example
     * // Update or create a InscripcionClases
     * const inscripcionClases = await prisma.inscripcionClases.upsert({
     *   create: {
     *     // ... data to create a InscripcionClases
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InscripcionClases we want to update
     *   }
     * })
     */
    upsert<T extends InscripcionClasesUpsertArgs>(args: SelectSubset<T, InscripcionClasesUpsertArgs<ExtArgs>>): Prisma__InscripcionClasesClient<$Result.GetResult<Prisma.$InscripcionClasesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InscripcionClases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionClasesCountArgs} args - Arguments to filter InscripcionClases to count.
     * @example
     * // Count the number of InscripcionClases
     * const count = await prisma.inscripcionClases.count({
     *   where: {
     *     // ... the filter for the InscripcionClases we want to count
     *   }
     * })
    **/
    count<T extends InscripcionClasesCountArgs>(
      args?: Subset<T, InscripcionClasesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InscripcionClasesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InscripcionClases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionClasesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InscripcionClasesAggregateArgs>(args: Subset<T, InscripcionClasesAggregateArgs>): Prisma.PrismaPromise<GetInscripcionClasesAggregateType<T>>

    /**
     * Group by InscripcionClases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionClasesGroupByArgs} args - Group by arguments.
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
      T extends InscripcionClasesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InscripcionClasesGroupByArgs['orderBy'] }
        : { orderBy?: InscripcionClasesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InscripcionClasesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInscripcionClasesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InscripcionClases model
   */
  readonly fields: InscripcionClasesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InscripcionClases.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InscripcionClasesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Usuarios<T extends UsuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuariosDefaultArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Clases<T extends ClasesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClasesDefaultArgs<ExtArgs>>): Prisma__ClasesClient<$Result.GetResult<Prisma.$ClasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InscripcionClases model
   */
  interface InscripcionClasesFieldRefs {
    readonly IdInscripcionClase: FieldRef<"InscripcionClases", 'Int'>
    readonly FkIdUsuario: FieldRef<"InscripcionClases", 'Int'>
    readonly FkIdClase: FieldRef<"InscripcionClases", 'Int'>
    readonly FechaI: FieldRef<"InscripcionClases", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InscripcionClases findUnique
   */
  export type InscripcionClasesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InscripcionClases
     */
    select?: InscripcionClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InscripcionClases
     */
    omit?: InscripcionClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionClasesInclude<ExtArgs> | null
    /**
     * Filter, which InscripcionClases to fetch.
     */
    where: InscripcionClasesWhereUniqueInput
  }

  /**
   * InscripcionClases findUniqueOrThrow
   */
  export type InscripcionClasesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InscripcionClases
     */
    select?: InscripcionClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InscripcionClases
     */
    omit?: InscripcionClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionClasesInclude<ExtArgs> | null
    /**
     * Filter, which InscripcionClases to fetch.
     */
    where: InscripcionClasesWhereUniqueInput
  }

  /**
   * InscripcionClases findFirst
   */
  export type InscripcionClasesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InscripcionClases
     */
    select?: InscripcionClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InscripcionClases
     */
    omit?: InscripcionClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionClasesInclude<ExtArgs> | null
    /**
     * Filter, which InscripcionClases to fetch.
     */
    where?: InscripcionClasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InscripcionClases to fetch.
     */
    orderBy?: InscripcionClasesOrderByWithRelationInput | InscripcionClasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InscripcionClases.
     */
    cursor?: InscripcionClasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InscripcionClases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InscripcionClases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InscripcionClases.
     */
    distinct?: InscripcionClasesScalarFieldEnum | InscripcionClasesScalarFieldEnum[]
  }

  /**
   * InscripcionClases findFirstOrThrow
   */
  export type InscripcionClasesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InscripcionClases
     */
    select?: InscripcionClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InscripcionClases
     */
    omit?: InscripcionClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionClasesInclude<ExtArgs> | null
    /**
     * Filter, which InscripcionClases to fetch.
     */
    where?: InscripcionClasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InscripcionClases to fetch.
     */
    orderBy?: InscripcionClasesOrderByWithRelationInput | InscripcionClasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InscripcionClases.
     */
    cursor?: InscripcionClasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InscripcionClases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InscripcionClases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InscripcionClases.
     */
    distinct?: InscripcionClasesScalarFieldEnum | InscripcionClasesScalarFieldEnum[]
  }

  /**
   * InscripcionClases findMany
   */
  export type InscripcionClasesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InscripcionClases
     */
    select?: InscripcionClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InscripcionClases
     */
    omit?: InscripcionClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionClasesInclude<ExtArgs> | null
    /**
     * Filter, which InscripcionClases to fetch.
     */
    where?: InscripcionClasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InscripcionClases to fetch.
     */
    orderBy?: InscripcionClasesOrderByWithRelationInput | InscripcionClasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InscripcionClases.
     */
    cursor?: InscripcionClasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InscripcionClases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InscripcionClases.
     */
    skip?: number
    distinct?: InscripcionClasesScalarFieldEnum | InscripcionClasesScalarFieldEnum[]
  }

  /**
   * InscripcionClases create
   */
  export type InscripcionClasesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InscripcionClases
     */
    select?: InscripcionClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InscripcionClases
     */
    omit?: InscripcionClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionClasesInclude<ExtArgs> | null
    /**
     * The data needed to create a InscripcionClases.
     */
    data: XOR<InscripcionClasesCreateInput, InscripcionClasesUncheckedCreateInput>
  }

  /**
   * InscripcionClases createMany
   */
  export type InscripcionClasesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InscripcionClases.
     */
    data: InscripcionClasesCreateManyInput | InscripcionClasesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InscripcionClases update
   */
  export type InscripcionClasesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InscripcionClases
     */
    select?: InscripcionClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InscripcionClases
     */
    omit?: InscripcionClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionClasesInclude<ExtArgs> | null
    /**
     * The data needed to update a InscripcionClases.
     */
    data: XOR<InscripcionClasesUpdateInput, InscripcionClasesUncheckedUpdateInput>
    /**
     * Choose, which InscripcionClases to update.
     */
    where: InscripcionClasesWhereUniqueInput
  }

  /**
   * InscripcionClases updateMany
   */
  export type InscripcionClasesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InscripcionClases.
     */
    data: XOR<InscripcionClasesUpdateManyMutationInput, InscripcionClasesUncheckedUpdateManyInput>
    /**
     * Filter which InscripcionClases to update
     */
    where?: InscripcionClasesWhereInput
    /**
     * Limit how many InscripcionClases to update.
     */
    limit?: number
  }

  /**
   * InscripcionClases upsert
   */
  export type InscripcionClasesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InscripcionClases
     */
    select?: InscripcionClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InscripcionClases
     */
    omit?: InscripcionClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionClasesInclude<ExtArgs> | null
    /**
     * The filter to search for the InscripcionClases to update in case it exists.
     */
    where: InscripcionClasesWhereUniqueInput
    /**
     * In case the InscripcionClases found by the `where` argument doesn't exist, create a new InscripcionClases with this data.
     */
    create: XOR<InscripcionClasesCreateInput, InscripcionClasesUncheckedCreateInput>
    /**
     * In case the InscripcionClases was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InscripcionClasesUpdateInput, InscripcionClasesUncheckedUpdateInput>
  }

  /**
   * InscripcionClases delete
   */
  export type InscripcionClasesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InscripcionClases
     */
    select?: InscripcionClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InscripcionClases
     */
    omit?: InscripcionClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionClasesInclude<ExtArgs> | null
    /**
     * Filter which InscripcionClases to delete.
     */
    where: InscripcionClasesWhereUniqueInput
  }

  /**
   * InscripcionClases deleteMany
   */
  export type InscripcionClasesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InscripcionClases to delete
     */
    where?: InscripcionClasesWhereInput
    /**
     * Limit how many InscripcionClases to delete.
     */
    limit?: number
  }

  /**
   * InscripcionClases without action
   */
  export type InscripcionClasesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InscripcionClases
     */
    select?: InscripcionClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InscripcionClases
     */
    omit?: InscripcionClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionClasesInclude<ExtArgs> | null
  }


  /**
   * Model InscripcionTorneos
   */

  export type AggregateInscripcionTorneos = {
    _count: InscripcionTorneosCountAggregateOutputType | null
    _avg: InscripcionTorneosAvgAggregateOutputType | null
    _sum: InscripcionTorneosSumAggregateOutputType | null
    _min: InscripcionTorneosMinAggregateOutputType | null
    _max: InscripcionTorneosMaxAggregateOutputType | null
  }

  export type InscripcionTorneosAvgAggregateOutputType = {
    IdInscripcionTorneo: number | null
    FkIdUsuario: number | null
    FkIdTorneo: number | null
  }

  export type InscripcionTorneosSumAggregateOutputType = {
    IdInscripcionTorneo: number | null
    FkIdUsuario: number | null
    FkIdTorneo: number | null
  }

  export type InscripcionTorneosMinAggregateOutputType = {
    IdInscripcionTorneo: number | null
    FkIdUsuario: number | null
    FkIdTorneo: number | null
    FechaI: Date | null
  }

  export type InscripcionTorneosMaxAggregateOutputType = {
    IdInscripcionTorneo: number | null
    FkIdUsuario: number | null
    FkIdTorneo: number | null
    FechaI: Date | null
  }

  export type InscripcionTorneosCountAggregateOutputType = {
    IdInscripcionTorneo: number
    FkIdUsuario: number
    FkIdTorneo: number
    FechaI: number
    _all: number
  }


  export type InscripcionTorneosAvgAggregateInputType = {
    IdInscripcionTorneo?: true
    FkIdUsuario?: true
    FkIdTorneo?: true
  }

  export type InscripcionTorneosSumAggregateInputType = {
    IdInscripcionTorneo?: true
    FkIdUsuario?: true
    FkIdTorneo?: true
  }

  export type InscripcionTorneosMinAggregateInputType = {
    IdInscripcionTorneo?: true
    FkIdUsuario?: true
    FkIdTorneo?: true
    FechaI?: true
  }

  export type InscripcionTorneosMaxAggregateInputType = {
    IdInscripcionTorneo?: true
    FkIdUsuario?: true
    FkIdTorneo?: true
    FechaI?: true
  }

  export type InscripcionTorneosCountAggregateInputType = {
    IdInscripcionTorneo?: true
    FkIdUsuario?: true
    FkIdTorneo?: true
    FechaI?: true
    _all?: true
  }

  export type InscripcionTorneosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InscripcionTorneos to aggregate.
     */
    where?: InscripcionTorneosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InscripcionTorneos to fetch.
     */
    orderBy?: InscripcionTorneosOrderByWithRelationInput | InscripcionTorneosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InscripcionTorneosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InscripcionTorneos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InscripcionTorneos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InscripcionTorneos
    **/
    _count?: true | InscripcionTorneosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InscripcionTorneosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InscripcionTorneosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InscripcionTorneosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InscripcionTorneosMaxAggregateInputType
  }

  export type GetInscripcionTorneosAggregateType<T extends InscripcionTorneosAggregateArgs> = {
        [P in keyof T & keyof AggregateInscripcionTorneos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInscripcionTorneos[P]>
      : GetScalarType<T[P], AggregateInscripcionTorneos[P]>
  }




  export type InscripcionTorneosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscripcionTorneosWhereInput
    orderBy?: InscripcionTorneosOrderByWithAggregationInput | InscripcionTorneosOrderByWithAggregationInput[]
    by: InscripcionTorneosScalarFieldEnum[] | InscripcionTorneosScalarFieldEnum
    having?: InscripcionTorneosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InscripcionTorneosCountAggregateInputType | true
    _avg?: InscripcionTorneosAvgAggregateInputType
    _sum?: InscripcionTorneosSumAggregateInputType
    _min?: InscripcionTorneosMinAggregateInputType
    _max?: InscripcionTorneosMaxAggregateInputType
  }

  export type InscripcionTorneosGroupByOutputType = {
    IdInscripcionTorneo: number
    FkIdUsuario: number
    FkIdTorneo: number
    FechaI: Date | null
    _count: InscripcionTorneosCountAggregateOutputType | null
    _avg: InscripcionTorneosAvgAggregateOutputType | null
    _sum: InscripcionTorneosSumAggregateOutputType | null
    _min: InscripcionTorneosMinAggregateOutputType | null
    _max: InscripcionTorneosMaxAggregateOutputType | null
  }

  type GetInscripcionTorneosGroupByPayload<T extends InscripcionTorneosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InscripcionTorneosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InscripcionTorneosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InscripcionTorneosGroupByOutputType[P]>
            : GetScalarType<T[P], InscripcionTorneosGroupByOutputType[P]>
        }
      >
    >


  export type InscripcionTorneosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdInscripcionTorneo?: boolean
    FkIdUsuario?: boolean
    FkIdTorneo?: boolean
    FechaI?: boolean
    Usuarios?: boolean | UsuariosDefaultArgs<ExtArgs>
    Torneos?: boolean | TorneosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscripcionTorneos"]>



  export type InscripcionTorneosSelectScalar = {
    IdInscripcionTorneo?: boolean
    FkIdUsuario?: boolean
    FkIdTorneo?: boolean
    FechaI?: boolean
  }

  export type InscripcionTorneosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"IdInscripcionTorneo" | "FkIdUsuario" | "FkIdTorneo" | "FechaI", ExtArgs["result"]["inscripcionTorneos"]>
  export type InscripcionTorneosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuarios?: boolean | UsuariosDefaultArgs<ExtArgs>
    Torneos?: boolean | TorneosDefaultArgs<ExtArgs>
  }

  export type $InscripcionTorneosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InscripcionTorneos"
    objects: {
      Usuarios: Prisma.$UsuariosPayload<ExtArgs>
      Torneos: Prisma.$TorneosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      IdInscripcionTorneo: number
      FkIdUsuario: number
      FkIdTorneo: number
      FechaI: Date | null
    }, ExtArgs["result"]["inscripcionTorneos"]>
    composites: {}
  }

  type InscripcionTorneosGetPayload<S extends boolean | null | undefined | InscripcionTorneosDefaultArgs> = $Result.GetResult<Prisma.$InscripcionTorneosPayload, S>

  type InscripcionTorneosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InscripcionTorneosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InscripcionTorneosCountAggregateInputType | true
    }

  export interface InscripcionTorneosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InscripcionTorneos'], meta: { name: 'InscripcionTorneos' } }
    /**
     * Find zero or one InscripcionTorneos that matches the filter.
     * @param {InscripcionTorneosFindUniqueArgs} args - Arguments to find a InscripcionTorneos
     * @example
     * // Get one InscripcionTorneos
     * const inscripcionTorneos = await prisma.inscripcionTorneos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InscripcionTorneosFindUniqueArgs>(args: SelectSubset<T, InscripcionTorneosFindUniqueArgs<ExtArgs>>): Prisma__InscripcionTorneosClient<$Result.GetResult<Prisma.$InscripcionTorneosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InscripcionTorneos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InscripcionTorneosFindUniqueOrThrowArgs} args - Arguments to find a InscripcionTorneos
     * @example
     * // Get one InscripcionTorneos
     * const inscripcionTorneos = await prisma.inscripcionTorneos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InscripcionTorneosFindUniqueOrThrowArgs>(args: SelectSubset<T, InscripcionTorneosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InscripcionTorneosClient<$Result.GetResult<Prisma.$InscripcionTorneosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InscripcionTorneos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionTorneosFindFirstArgs} args - Arguments to find a InscripcionTorneos
     * @example
     * // Get one InscripcionTorneos
     * const inscripcionTorneos = await prisma.inscripcionTorneos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InscripcionTorneosFindFirstArgs>(args?: SelectSubset<T, InscripcionTorneosFindFirstArgs<ExtArgs>>): Prisma__InscripcionTorneosClient<$Result.GetResult<Prisma.$InscripcionTorneosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InscripcionTorneos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionTorneosFindFirstOrThrowArgs} args - Arguments to find a InscripcionTorneos
     * @example
     * // Get one InscripcionTorneos
     * const inscripcionTorneos = await prisma.inscripcionTorneos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InscripcionTorneosFindFirstOrThrowArgs>(args?: SelectSubset<T, InscripcionTorneosFindFirstOrThrowArgs<ExtArgs>>): Prisma__InscripcionTorneosClient<$Result.GetResult<Prisma.$InscripcionTorneosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InscripcionTorneos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionTorneosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InscripcionTorneos
     * const inscripcionTorneos = await prisma.inscripcionTorneos.findMany()
     * 
     * // Get first 10 InscripcionTorneos
     * const inscripcionTorneos = await prisma.inscripcionTorneos.findMany({ take: 10 })
     * 
     * // Only select the `IdInscripcionTorneo`
     * const inscripcionTorneosWithIdInscripcionTorneoOnly = await prisma.inscripcionTorneos.findMany({ select: { IdInscripcionTorneo: true } })
     * 
     */
    findMany<T extends InscripcionTorneosFindManyArgs>(args?: SelectSubset<T, InscripcionTorneosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionTorneosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InscripcionTorneos.
     * @param {InscripcionTorneosCreateArgs} args - Arguments to create a InscripcionTorneos.
     * @example
     * // Create one InscripcionTorneos
     * const InscripcionTorneos = await prisma.inscripcionTorneos.create({
     *   data: {
     *     // ... data to create a InscripcionTorneos
     *   }
     * })
     * 
     */
    create<T extends InscripcionTorneosCreateArgs>(args: SelectSubset<T, InscripcionTorneosCreateArgs<ExtArgs>>): Prisma__InscripcionTorneosClient<$Result.GetResult<Prisma.$InscripcionTorneosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InscripcionTorneos.
     * @param {InscripcionTorneosCreateManyArgs} args - Arguments to create many InscripcionTorneos.
     * @example
     * // Create many InscripcionTorneos
     * const inscripcionTorneos = await prisma.inscripcionTorneos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InscripcionTorneosCreateManyArgs>(args?: SelectSubset<T, InscripcionTorneosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InscripcionTorneos.
     * @param {InscripcionTorneosDeleteArgs} args - Arguments to delete one InscripcionTorneos.
     * @example
     * // Delete one InscripcionTorneos
     * const InscripcionTorneos = await prisma.inscripcionTorneos.delete({
     *   where: {
     *     // ... filter to delete one InscripcionTorneos
     *   }
     * })
     * 
     */
    delete<T extends InscripcionTorneosDeleteArgs>(args: SelectSubset<T, InscripcionTorneosDeleteArgs<ExtArgs>>): Prisma__InscripcionTorneosClient<$Result.GetResult<Prisma.$InscripcionTorneosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InscripcionTorneos.
     * @param {InscripcionTorneosUpdateArgs} args - Arguments to update one InscripcionTorneos.
     * @example
     * // Update one InscripcionTorneos
     * const inscripcionTorneos = await prisma.inscripcionTorneos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InscripcionTorneosUpdateArgs>(args: SelectSubset<T, InscripcionTorneosUpdateArgs<ExtArgs>>): Prisma__InscripcionTorneosClient<$Result.GetResult<Prisma.$InscripcionTorneosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InscripcionTorneos.
     * @param {InscripcionTorneosDeleteManyArgs} args - Arguments to filter InscripcionTorneos to delete.
     * @example
     * // Delete a few InscripcionTorneos
     * const { count } = await prisma.inscripcionTorneos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InscripcionTorneosDeleteManyArgs>(args?: SelectSubset<T, InscripcionTorneosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InscripcionTorneos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionTorneosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InscripcionTorneos
     * const inscripcionTorneos = await prisma.inscripcionTorneos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InscripcionTorneosUpdateManyArgs>(args: SelectSubset<T, InscripcionTorneosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InscripcionTorneos.
     * @param {InscripcionTorneosUpsertArgs} args - Arguments to update or create a InscripcionTorneos.
     * @example
     * // Update or create a InscripcionTorneos
     * const inscripcionTorneos = await prisma.inscripcionTorneos.upsert({
     *   create: {
     *     // ... data to create a InscripcionTorneos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InscripcionTorneos we want to update
     *   }
     * })
     */
    upsert<T extends InscripcionTorneosUpsertArgs>(args: SelectSubset<T, InscripcionTorneosUpsertArgs<ExtArgs>>): Prisma__InscripcionTorneosClient<$Result.GetResult<Prisma.$InscripcionTorneosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InscripcionTorneos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionTorneosCountArgs} args - Arguments to filter InscripcionTorneos to count.
     * @example
     * // Count the number of InscripcionTorneos
     * const count = await prisma.inscripcionTorneos.count({
     *   where: {
     *     // ... the filter for the InscripcionTorneos we want to count
     *   }
     * })
    **/
    count<T extends InscripcionTorneosCountArgs>(
      args?: Subset<T, InscripcionTorneosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InscripcionTorneosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InscripcionTorneos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionTorneosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InscripcionTorneosAggregateArgs>(args: Subset<T, InscripcionTorneosAggregateArgs>): Prisma.PrismaPromise<GetInscripcionTorneosAggregateType<T>>

    /**
     * Group by InscripcionTorneos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionTorneosGroupByArgs} args - Group by arguments.
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
      T extends InscripcionTorneosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InscripcionTorneosGroupByArgs['orderBy'] }
        : { orderBy?: InscripcionTorneosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InscripcionTorneosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInscripcionTorneosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InscripcionTorneos model
   */
  readonly fields: InscripcionTorneosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InscripcionTorneos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InscripcionTorneosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Usuarios<T extends UsuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuariosDefaultArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Torneos<T extends TorneosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TorneosDefaultArgs<ExtArgs>>): Prisma__TorneosClient<$Result.GetResult<Prisma.$TorneosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InscripcionTorneos model
   */
  interface InscripcionTorneosFieldRefs {
    readonly IdInscripcionTorneo: FieldRef<"InscripcionTorneos", 'Int'>
    readonly FkIdUsuario: FieldRef<"InscripcionTorneos", 'Int'>
    readonly FkIdTorneo: FieldRef<"InscripcionTorneos", 'Int'>
    readonly FechaI: FieldRef<"InscripcionTorneos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InscripcionTorneos findUnique
   */
  export type InscripcionTorneosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InscripcionTorneos
     */
    select?: InscripcionTorneosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InscripcionTorneos
     */
    omit?: InscripcionTorneosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionTorneosInclude<ExtArgs> | null
    /**
     * Filter, which InscripcionTorneos to fetch.
     */
    where: InscripcionTorneosWhereUniqueInput
  }

  /**
   * InscripcionTorneos findUniqueOrThrow
   */
  export type InscripcionTorneosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InscripcionTorneos
     */
    select?: InscripcionTorneosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InscripcionTorneos
     */
    omit?: InscripcionTorneosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionTorneosInclude<ExtArgs> | null
    /**
     * Filter, which InscripcionTorneos to fetch.
     */
    where: InscripcionTorneosWhereUniqueInput
  }

  /**
   * InscripcionTorneos findFirst
   */
  export type InscripcionTorneosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InscripcionTorneos
     */
    select?: InscripcionTorneosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InscripcionTorneos
     */
    omit?: InscripcionTorneosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionTorneosInclude<ExtArgs> | null
    /**
     * Filter, which InscripcionTorneos to fetch.
     */
    where?: InscripcionTorneosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InscripcionTorneos to fetch.
     */
    orderBy?: InscripcionTorneosOrderByWithRelationInput | InscripcionTorneosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InscripcionTorneos.
     */
    cursor?: InscripcionTorneosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InscripcionTorneos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InscripcionTorneos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InscripcionTorneos.
     */
    distinct?: InscripcionTorneosScalarFieldEnum | InscripcionTorneosScalarFieldEnum[]
  }

  /**
   * InscripcionTorneos findFirstOrThrow
   */
  export type InscripcionTorneosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InscripcionTorneos
     */
    select?: InscripcionTorneosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InscripcionTorneos
     */
    omit?: InscripcionTorneosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionTorneosInclude<ExtArgs> | null
    /**
     * Filter, which InscripcionTorneos to fetch.
     */
    where?: InscripcionTorneosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InscripcionTorneos to fetch.
     */
    orderBy?: InscripcionTorneosOrderByWithRelationInput | InscripcionTorneosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InscripcionTorneos.
     */
    cursor?: InscripcionTorneosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InscripcionTorneos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InscripcionTorneos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InscripcionTorneos.
     */
    distinct?: InscripcionTorneosScalarFieldEnum | InscripcionTorneosScalarFieldEnum[]
  }

  /**
   * InscripcionTorneos findMany
   */
  export type InscripcionTorneosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InscripcionTorneos
     */
    select?: InscripcionTorneosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InscripcionTorneos
     */
    omit?: InscripcionTorneosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionTorneosInclude<ExtArgs> | null
    /**
     * Filter, which InscripcionTorneos to fetch.
     */
    where?: InscripcionTorneosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InscripcionTorneos to fetch.
     */
    orderBy?: InscripcionTorneosOrderByWithRelationInput | InscripcionTorneosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InscripcionTorneos.
     */
    cursor?: InscripcionTorneosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InscripcionTorneos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InscripcionTorneos.
     */
    skip?: number
    distinct?: InscripcionTorneosScalarFieldEnum | InscripcionTorneosScalarFieldEnum[]
  }

  /**
   * InscripcionTorneos create
   */
  export type InscripcionTorneosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InscripcionTorneos
     */
    select?: InscripcionTorneosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InscripcionTorneos
     */
    omit?: InscripcionTorneosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionTorneosInclude<ExtArgs> | null
    /**
     * The data needed to create a InscripcionTorneos.
     */
    data: XOR<InscripcionTorneosCreateInput, InscripcionTorneosUncheckedCreateInput>
  }

  /**
   * InscripcionTorneos createMany
   */
  export type InscripcionTorneosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InscripcionTorneos.
     */
    data: InscripcionTorneosCreateManyInput | InscripcionTorneosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InscripcionTorneos update
   */
  export type InscripcionTorneosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InscripcionTorneos
     */
    select?: InscripcionTorneosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InscripcionTorneos
     */
    omit?: InscripcionTorneosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionTorneosInclude<ExtArgs> | null
    /**
     * The data needed to update a InscripcionTorneos.
     */
    data: XOR<InscripcionTorneosUpdateInput, InscripcionTorneosUncheckedUpdateInput>
    /**
     * Choose, which InscripcionTorneos to update.
     */
    where: InscripcionTorneosWhereUniqueInput
  }

  /**
   * InscripcionTorneos updateMany
   */
  export type InscripcionTorneosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InscripcionTorneos.
     */
    data: XOR<InscripcionTorneosUpdateManyMutationInput, InscripcionTorneosUncheckedUpdateManyInput>
    /**
     * Filter which InscripcionTorneos to update
     */
    where?: InscripcionTorneosWhereInput
    /**
     * Limit how many InscripcionTorneos to update.
     */
    limit?: number
  }

  /**
   * InscripcionTorneos upsert
   */
  export type InscripcionTorneosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InscripcionTorneos
     */
    select?: InscripcionTorneosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InscripcionTorneos
     */
    omit?: InscripcionTorneosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionTorneosInclude<ExtArgs> | null
    /**
     * The filter to search for the InscripcionTorneos to update in case it exists.
     */
    where: InscripcionTorneosWhereUniqueInput
    /**
     * In case the InscripcionTorneos found by the `where` argument doesn't exist, create a new InscripcionTorneos with this data.
     */
    create: XOR<InscripcionTorneosCreateInput, InscripcionTorneosUncheckedCreateInput>
    /**
     * In case the InscripcionTorneos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InscripcionTorneosUpdateInput, InscripcionTorneosUncheckedUpdateInput>
  }

  /**
   * InscripcionTorneos delete
   */
  export type InscripcionTorneosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InscripcionTorneos
     */
    select?: InscripcionTorneosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InscripcionTorneos
     */
    omit?: InscripcionTorneosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionTorneosInclude<ExtArgs> | null
    /**
     * Filter which InscripcionTorneos to delete.
     */
    where: InscripcionTorneosWhereUniqueInput
  }

  /**
   * InscripcionTorneos deleteMany
   */
  export type InscripcionTorneosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InscripcionTorneos to delete
     */
    where?: InscripcionTorneosWhereInput
    /**
     * Limit how many InscripcionTorneos to delete.
     */
    limit?: number
  }

  /**
   * InscripcionTorneos without action
   */
  export type InscripcionTorneosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InscripcionTorneos
     */
    select?: InscripcionTorneosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InscripcionTorneos
     */
    omit?: InscripcionTorneosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionTorneosInclude<ExtArgs> | null
  }


  /**
   * Model Reservas
   */

  export type AggregateReservas = {
    _count: ReservasCountAggregateOutputType | null
    _avg: ReservasAvgAggregateOutputType | null
    _sum: ReservasSumAggregateOutputType | null
    _min: ReservasMinAggregateOutputType | null
    _max: ReservasMaxAggregateOutputType | null
  }

  export type ReservasAvgAggregateOutputType = {
    IdReserva: number | null
    FkIdUsuario: number | null
    FkIdEspacio: number | null
  }

  export type ReservasSumAggregateOutputType = {
    IdReserva: number | null
    FkIdUsuario: number | null
    FkIdEspacio: number | null
  }

  export type ReservasMinAggregateOutputType = {
    IdReserva: number | null
    FkIdUsuario: number | null
    FkIdEspacio: number | null
    FechaReserva: Date | null
    HoraInicioR: Date | null
    HoraFinR: Date | null
    Estado: $Enums.Reservas_Estado | null
  }

  export type ReservasMaxAggregateOutputType = {
    IdReserva: number | null
    FkIdUsuario: number | null
    FkIdEspacio: number | null
    FechaReserva: Date | null
    HoraInicioR: Date | null
    HoraFinR: Date | null
    Estado: $Enums.Reservas_Estado | null
  }

  export type ReservasCountAggregateOutputType = {
    IdReserva: number
    FkIdUsuario: number
    FkIdEspacio: number
    FechaReserva: number
    HoraInicioR: number
    HoraFinR: number
    Estado: number
    _all: number
  }


  export type ReservasAvgAggregateInputType = {
    IdReserva?: true
    FkIdUsuario?: true
    FkIdEspacio?: true
  }

  export type ReservasSumAggregateInputType = {
    IdReserva?: true
    FkIdUsuario?: true
    FkIdEspacio?: true
  }

  export type ReservasMinAggregateInputType = {
    IdReserva?: true
    FkIdUsuario?: true
    FkIdEspacio?: true
    FechaReserva?: true
    HoraInicioR?: true
    HoraFinR?: true
    Estado?: true
  }

  export type ReservasMaxAggregateInputType = {
    IdReserva?: true
    FkIdUsuario?: true
    FkIdEspacio?: true
    FechaReserva?: true
    HoraInicioR?: true
    HoraFinR?: true
    Estado?: true
  }

  export type ReservasCountAggregateInputType = {
    IdReserva?: true
    FkIdUsuario?: true
    FkIdEspacio?: true
    FechaReserva?: true
    HoraInicioR?: true
    HoraFinR?: true
    Estado?: true
    _all?: true
  }

  export type ReservasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservas to aggregate.
     */
    where?: ReservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservasOrderByWithRelationInput | ReservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservas
    **/
    _count?: true | ReservasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservasMaxAggregateInputType
  }

  export type GetReservasAggregateType<T extends ReservasAggregateArgs> = {
        [P in keyof T & keyof AggregateReservas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservas[P]>
      : GetScalarType<T[P], AggregateReservas[P]>
  }




  export type ReservasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservasWhereInput
    orderBy?: ReservasOrderByWithAggregationInput | ReservasOrderByWithAggregationInput[]
    by: ReservasScalarFieldEnum[] | ReservasScalarFieldEnum
    having?: ReservasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservasCountAggregateInputType | true
    _avg?: ReservasAvgAggregateInputType
    _sum?: ReservasSumAggregateInputType
    _min?: ReservasMinAggregateInputType
    _max?: ReservasMaxAggregateInputType
  }

  export type ReservasGroupByOutputType = {
    IdReserva: number
    FkIdUsuario: number
    FkIdEspacio: number
    FechaReserva: Date
    HoraInicioR: Date
    HoraFinR: Date
    Estado: $Enums.Reservas_Estado | null
    _count: ReservasCountAggregateOutputType | null
    _avg: ReservasAvgAggregateOutputType | null
    _sum: ReservasSumAggregateOutputType | null
    _min: ReservasMinAggregateOutputType | null
    _max: ReservasMaxAggregateOutputType | null
  }

  type GetReservasGroupByPayload<T extends ReservasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservasGroupByOutputType[P]>
            : GetScalarType<T[P], ReservasGroupByOutputType[P]>
        }
      >
    >


  export type ReservasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdReserva?: boolean
    FkIdUsuario?: boolean
    FkIdEspacio?: boolean
    FechaReserva?: boolean
    HoraInicioR?: boolean
    HoraFinR?: boolean
    Estado?: boolean
    Usuarios?: boolean | UsuariosDefaultArgs<ExtArgs>
    Espacios?: boolean | EspaciosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservas"]>



  export type ReservasSelectScalar = {
    IdReserva?: boolean
    FkIdUsuario?: boolean
    FkIdEspacio?: boolean
    FechaReserva?: boolean
    HoraInicioR?: boolean
    HoraFinR?: boolean
    Estado?: boolean
  }

  export type ReservasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"IdReserva" | "FkIdUsuario" | "FkIdEspacio" | "FechaReserva" | "HoraInicioR" | "HoraFinR" | "Estado", ExtArgs["result"]["reservas"]>
  export type ReservasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuarios?: boolean | UsuariosDefaultArgs<ExtArgs>
    Espacios?: boolean | EspaciosDefaultArgs<ExtArgs>
  }

  export type $ReservasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservas"
    objects: {
      Usuarios: Prisma.$UsuariosPayload<ExtArgs>
      Espacios: Prisma.$EspaciosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      IdReserva: number
      FkIdUsuario: number
      FkIdEspacio: number
      FechaReserva: Date
      HoraInicioR: Date
      HoraFinR: Date
      Estado: $Enums.Reservas_Estado | null
    }, ExtArgs["result"]["reservas"]>
    composites: {}
  }

  type ReservasGetPayload<S extends boolean | null | undefined | ReservasDefaultArgs> = $Result.GetResult<Prisma.$ReservasPayload, S>

  type ReservasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservasCountAggregateInputType | true
    }

  export interface ReservasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservas'], meta: { name: 'Reservas' } }
    /**
     * Find zero or one Reservas that matches the filter.
     * @param {ReservasFindUniqueArgs} args - Arguments to find a Reservas
     * @example
     * // Get one Reservas
     * const reservas = await prisma.reservas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservasFindUniqueArgs>(args: SelectSubset<T, ReservasFindUniqueArgs<ExtArgs>>): Prisma__ReservasClient<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservasFindUniqueOrThrowArgs} args - Arguments to find a Reservas
     * @example
     * // Get one Reservas
     * const reservas = await prisma.reservas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservasFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservasClient<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasFindFirstArgs} args - Arguments to find a Reservas
     * @example
     * // Get one Reservas
     * const reservas = await prisma.reservas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservasFindFirstArgs>(args?: SelectSubset<T, ReservasFindFirstArgs<ExtArgs>>): Prisma__ReservasClient<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasFindFirstOrThrowArgs} args - Arguments to find a Reservas
     * @example
     * // Get one Reservas
     * const reservas = await prisma.reservas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservasFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservasFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservasClient<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservas
     * const reservas = await prisma.reservas.findMany()
     * 
     * // Get first 10 Reservas
     * const reservas = await prisma.reservas.findMany({ take: 10 })
     * 
     * // Only select the `IdReserva`
     * const reservasWithIdReservaOnly = await prisma.reservas.findMany({ select: { IdReserva: true } })
     * 
     */
    findMany<T extends ReservasFindManyArgs>(args?: SelectSubset<T, ReservasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservas.
     * @param {ReservasCreateArgs} args - Arguments to create a Reservas.
     * @example
     * // Create one Reservas
     * const Reservas = await prisma.reservas.create({
     *   data: {
     *     // ... data to create a Reservas
     *   }
     * })
     * 
     */
    create<T extends ReservasCreateArgs>(args: SelectSubset<T, ReservasCreateArgs<ExtArgs>>): Prisma__ReservasClient<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservas.
     * @param {ReservasCreateManyArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reservas = await prisma.reservas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservasCreateManyArgs>(args?: SelectSubset<T, ReservasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reservas.
     * @param {ReservasDeleteArgs} args - Arguments to delete one Reservas.
     * @example
     * // Delete one Reservas
     * const Reservas = await prisma.reservas.delete({
     *   where: {
     *     // ... filter to delete one Reservas
     *   }
     * })
     * 
     */
    delete<T extends ReservasDeleteArgs>(args: SelectSubset<T, ReservasDeleteArgs<ExtArgs>>): Prisma__ReservasClient<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservas.
     * @param {ReservasUpdateArgs} args - Arguments to update one Reservas.
     * @example
     * // Update one Reservas
     * const reservas = await prisma.reservas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservasUpdateArgs>(args: SelectSubset<T, ReservasUpdateArgs<ExtArgs>>): Prisma__ReservasClient<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservas.
     * @param {ReservasDeleteManyArgs} args - Arguments to filter Reservas to delete.
     * @example
     * // Delete a few Reservas
     * const { count } = await prisma.reservas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservasDeleteManyArgs>(args?: SelectSubset<T, ReservasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservas
     * const reservas = await prisma.reservas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservasUpdateManyArgs>(args: SelectSubset<T, ReservasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reservas.
     * @param {ReservasUpsertArgs} args - Arguments to update or create a Reservas.
     * @example
     * // Update or create a Reservas
     * const reservas = await prisma.reservas.upsert({
     *   create: {
     *     // ... data to create a Reservas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservas we want to update
     *   }
     * })
     */
    upsert<T extends ReservasUpsertArgs>(args: SelectSubset<T, ReservasUpsertArgs<ExtArgs>>): Prisma__ReservasClient<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasCountArgs} args - Arguments to filter Reservas to count.
     * @example
     * // Count the number of Reservas
     * const count = await prisma.reservas.count({
     *   where: {
     *     // ... the filter for the Reservas we want to count
     *   }
     * })
    **/
    count<T extends ReservasCountArgs>(
      args?: Subset<T, ReservasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservasAggregateArgs>(args: Subset<T, ReservasAggregateArgs>): Prisma.PrismaPromise<GetReservasAggregateType<T>>

    /**
     * Group by Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasGroupByArgs} args - Group by arguments.
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
      T extends ReservasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservasGroupByArgs['orderBy'] }
        : { orderBy?: ReservasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservas model
   */
  readonly fields: ReservasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Usuarios<T extends UsuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuariosDefaultArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Espacios<T extends EspaciosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EspaciosDefaultArgs<ExtArgs>>): Prisma__EspaciosClient<$Result.GetResult<Prisma.$EspaciosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reservas model
   */
  interface ReservasFieldRefs {
    readonly IdReserva: FieldRef<"Reservas", 'Int'>
    readonly FkIdUsuario: FieldRef<"Reservas", 'Int'>
    readonly FkIdEspacio: FieldRef<"Reservas", 'Int'>
    readonly FechaReserva: FieldRef<"Reservas", 'DateTime'>
    readonly HoraInicioR: FieldRef<"Reservas", 'DateTime'>
    readonly HoraFinR: FieldRef<"Reservas", 'DateTime'>
    readonly Estado: FieldRef<"Reservas", 'Reservas_Estado'>
  }
    

  // Custom InputTypes
  /**
   * Reservas findUnique
   */
  export type ReservasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
    /**
     * Filter, which Reservas to fetch.
     */
    where: ReservasWhereUniqueInput
  }

  /**
   * Reservas findUniqueOrThrow
   */
  export type ReservasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
    /**
     * Filter, which Reservas to fetch.
     */
    where: ReservasWhereUniqueInput
  }

  /**
   * Reservas findFirst
   */
  export type ReservasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
    /**
     * Filter, which Reservas to fetch.
     */
    where?: ReservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservasOrderByWithRelationInput | ReservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservas.
     */
    cursor?: ReservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservas.
     */
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * Reservas findFirstOrThrow
   */
  export type ReservasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
    /**
     * Filter, which Reservas to fetch.
     */
    where?: ReservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservasOrderByWithRelationInput | ReservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservas.
     */
    cursor?: ReservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservas.
     */
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * Reservas findMany
   */
  export type ReservasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
    /**
     * Filter, which Reservas to fetch.
     */
    where?: ReservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservasOrderByWithRelationInput | ReservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservas.
     */
    cursor?: ReservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * Reservas create
   */
  export type ReservasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservas.
     */
    data: XOR<ReservasCreateInput, ReservasUncheckedCreateInput>
  }

  /**
   * Reservas createMany
   */
  export type ReservasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservas.
     */
    data: ReservasCreateManyInput | ReservasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservas update
   */
  export type ReservasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservas.
     */
    data: XOR<ReservasUpdateInput, ReservasUncheckedUpdateInput>
    /**
     * Choose, which Reservas to update.
     */
    where: ReservasWhereUniqueInput
  }

  /**
   * Reservas updateMany
   */
  export type ReservasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservas.
     */
    data: XOR<ReservasUpdateManyMutationInput, ReservasUncheckedUpdateManyInput>
    /**
     * Filter which Reservas to update
     */
    where?: ReservasWhereInput
    /**
     * Limit how many Reservas to update.
     */
    limit?: number
  }

  /**
   * Reservas upsert
   */
  export type ReservasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservas to update in case it exists.
     */
    where: ReservasWhereUniqueInput
    /**
     * In case the Reservas found by the `where` argument doesn't exist, create a new Reservas with this data.
     */
    create: XOR<ReservasCreateInput, ReservasUncheckedCreateInput>
    /**
     * In case the Reservas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservasUpdateInput, ReservasUncheckedUpdateInput>
  }

  /**
   * Reservas delete
   */
  export type ReservasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
    /**
     * Filter which Reservas to delete.
     */
    where: ReservasWhereUniqueInput
  }

  /**
   * Reservas deleteMany
   */
  export type ReservasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservas to delete
     */
    where?: ReservasWhereInput
    /**
     * Limit how many Reservas to delete.
     */
    limit?: number
  }

  /**
   * Reservas without action
   */
  export type ReservasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
  }


  /**
   * Model Talleres
   */

  export type AggregateTalleres = {
    _count: TalleresCountAggregateOutputType | null
    _avg: TalleresAvgAggregateOutputType | null
    _sum: TalleresSumAggregateOutputType | null
    _min: TalleresMinAggregateOutputType | null
    _max: TalleresMaxAggregateOutputType | null
  }

  export type TalleresAvgAggregateOutputType = {
    IdTaller: number | null
    FkIdEntrenador: number | null
    FkIdHorario: number | null
  }

  export type TalleresSumAggregateOutputType = {
    IdTaller: number | null
    FkIdEntrenador: number | null
    FkIdHorario: number | null
  }

  export type TalleresMinAggregateOutputType = {
    IdTaller: number | null
    NombreTa: string | null
    Descripcion: string | null
    FkIdEntrenador: number | null
    FkIdHorario: number | null
  }

  export type TalleresMaxAggregateOutputType = {
    IdTaller: number | null
    NombreTa: string | null
    Descripcion: string | null
    FkIdEntrenador: number | null
    FkIdHorario: number | null
  }

  export type TalleresCountAggregateOutputType = {
    IdTaller: number
    NombreTa: number
    Descripcion: number
    FkIdEntrenador: number
    FkIdHorario: number
    _all: number
  }


  export type TalleresAvgAggregateInputType = {
    IdTaller?: true
    FkIdEntrenador?: true
    FkIdHorario?: true
  }

  export type TalleresSumAggregateInputType = {
    IdTaller?: true
    FkIdEntrenador?: true
    FkIdHorario?: true
  }

  export type TalleresMinAggregateInputType = {
    IdTaller?: true
    NombreTa?: true
    Descripcion?: true
    FkIdEntrenador?: true
    FkIdHorario?: true
  }

  export type TalleresMaxAggregateInputType = {
    IdTaller?: true
    NombreTa?: true
    Descripcion?: true
    FkIdEntrenador?: true
    FkIdHorario?: true
  }

  export type TalleresCountAggregateInputType = {
    IdTaller?: true
    NombreTa?: true
    Descripcion?: true
    FkIdEntrenador?: true
    FkIdHorario?: true
    _all?: true
  }

  export type TalleresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Talleres to aggregate.
     */
    where?: TalleresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Talleres to fetch.
     */
    orderBy?: TalleresOrderByWithRelationInput | TalleresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TalleresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Talleres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Talleres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Talleres
    **/
    _count?: true | TalleresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TalleresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TalleresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TalleresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TalleresMaxAggregateInputType
  }

  export type GetTalleresAggregateType<T extends TalleresAggregateArgs> = {
        [P in keyof T & keyof AggregateTalleres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTalleres[P]>
      : GetScalarType<T[P], AggregateTalleres[P]>
  }




  export type TalleresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TalleresWhereInput
    orderBy?: TalleresOrderByWithAggregationInput | TalleresOrderByWithAggregationInput[]
    by: TalleresScalarFieldEnum[] | TalleresScalarFieldEnum
    having?: TalleresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TalleresCountAggregateInputType | true
    _avg?: TalleresAvgAggregateInputType
    _sum?: TalleresSumAggregateInputType
    _min?: TalleresMinAggregateInputType
    _max?: TalleresMaxAggregateInputType
  }

  export type TalleresGroupByOutputType = {
    IdTaller: number
    NombreTa: string
    Descripcion: string | null
    FkIdEntrenador: number
    FkIdHorario: number
    _count: TalleresCountAggregateOutputType | null
    _avg: TalleresAvgAggregateOutputType | null
    _sum: TalleresSumAggregateOutputType | null
    _min: TalleresMinAggregateOutputType | null
    _max: TalleresMaxAggregateOutputType | null
  }

  type GetTalleresGroupByPayload<T extends TalleresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TalleresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TalleresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TalleresGroupByOutputType[P]>
            : GetScalarType<T[P], TalleresGroupByOutputType[P]>
        }
      >
    >


  export type TalleresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdTaller?: boolean
    NombreTa?: boolean
    Descripcion?: boolean
    FkIdEntrenador?: boolean
    FkIdHorario?: boolean
    Entrenadores?: boolean | EntrenadoresDefaultArgs<ExtArgs>
    Horarios?: boolean | HorariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["talleres"]>



  export type TalleresSelectScalar = {
    IdTaller?: boolean
    NombreTa?: boolean
    Descripcion?: boolean
    FkIdEntrenador?: boolean
    FkIdHorario?: boolean
  }

  export type TalleresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"IdTaller" | "NombreTa" | "Descripcion" | "FkIdEntrenador" | "FkIdHorario", ExtArgs["result"]["talleres"]>
  export type TalleresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Entrenadores?: boolean | EntrenadoresDefaultArgs<ExtArgs>
    Horarios?: boolean | HorariosDefaultArgs<ExtArgs>
  }

  export type $TalleresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Talleres"
    objects: {
      Entrenadores: Prisma.$EntrenadoresPayload<ExtArgs>
      Horarios: Prisma.$HorariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      IdTaller: number
      NombreTa: string
      Descripcion: string | null
      FkIdEntrenador: number
      FkIdHorario: number
    }, ExtArgs["result"]["talleres"]>
    composites: {}
  }

  type TalleresGetPayload<S extends boolean | null | undefined | TalleresDefaultArgs> = $Result.GetResult<Prisma.$TalleresPayload, S>

  type TalleresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TalleresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TalleresCountAggregateInputType | true
    }

  export interface TalleresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Talleres'], meta: { name: 'Talleres' } }
    /**
     * Find zero or one Talleres that matches the filter.
     * @param {TalleresFindUniqueArgs} args - Arguments to find a Talleres
     * @example
     * // Get one Talleres
     * const talleres = await prisma.talleres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TalleresFindUniqueArgs>(args: SelectSubset<T, TalleresFindUniqueArgs<ExtArgs>>): Prisma__TalleresClient<$Result.GetResult<Prisma.$TalleresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Talleres that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TalleresFindUniqueOrThrowArgs} args - Arguments to find a Talleres
     * @example
     * // Get one Talleres
     * const talleres = await prisma.talleres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TalleresFindUniqueOrThrowArgs>(args: SelectSubset<T, TalleresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TalleresClient<$Result.GetResult<Prisma.$TalleresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Talleres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalleresFindFirstArgs} args - Arguments to find a Talleres
     * @example
     * // Get one Talleres
     * const talleres = await prisma.talleres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TalleresFindFirstArgs>(args?: SelectSubset<T, TalleresFindFirstArgs<ExtArgs>>): Prisma__TalleresClient<$Result.GetResult<Prisma.$TalleresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Talleres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalleresFindFirstOrThrowArgs} args - Arguments to find a Talleres
     * @example
     * // Get one Talleres
     * const talleres = await prisma.talleres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TalleresFindFirstOrThrowArgs>(args?: SelectSubset<T, TalleresFindFirstOrThrowArgs<ExtArgs>>): Prisma__TalleresClient<$Result.GetResult<Prisma.$TalleresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Talleres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalleresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Talleres
     * const talleres = await prisma.talleres.findMany()
     * 
     * // Get first 10 Talleres
     * const talleres = await prisma.talleres.findMany({ take: 10 })
     * 
     * // Only select the `IdTaller`
     * const talleresWithIdTallerOnly = await prisma.talleres.findMany({ select: { IdTaller: true } })
     * 
     */
    findMany<T extends TalleresFindManyArgs>(args?: SelectSubset<T, TalleresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TalleresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Talleres.
     * @param {TalleresCreateArgs} args - Arguments to create a Talleres.
     * @example
     * // Create one Talleres
     * const Talleres = await prisma.talleres.create({
     *   data: {
     *     // ... data to create a Talleres
     *   }
     * })
     * 
     */
    create<T extends TalleresCreateArgs>(args: SelectSubset<T, TalleresCreateArgs<ExtArgs>>): Prisma__TalleresClient<$Result.GetResult<Prisma.$TalleresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Talleres.
     * @param {TalleresCreateManyArgs} args - Arguments to create many Talleres.
     * @example
     * // Create many Talleres
     * const talleres = await prisma.talleres.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TalleresCreateManyArgs>(args?: SelectSubset<T, TalleresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Talleres.
     * @param {TalleresDeleteArgs} args - Arguments to delete one Talleres.
     * @example
     * // Delete one Talleres
     * const Talleres = await prisma.talleres.delete({
     *   where: {
     *     // ... filter to delete one Talleres
     *   }
     * })
     * 
     */
    delete<T extends TalleresDeleteArgs>(args: SelectSubset<T, TalleresDeleteArgs<ExtArgs>>): Prisma__TalleresClient<$Result.GetResult<Prisma.$TalleresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Talleres.
     * @param {TalleresUpdateArgs} args - Arguments to update one Talleres.
     * @example
     * // Update one Talleres
     * const talleres = await prisma.talleres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TalleresUpdateArgs>(args: SelectSubset<T, TalleresUpdateArgs<ExtArgs>>): Prisma__TalleresClient<$Result.GetResult<Prisma.$TalleresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Talleres.
     * @param {TalleresDeleteManyArgs} args - Arguments to filter Talleres to delete.
     * @example
     * // Delete a few Talleres
     * const { count } = await prisma.talleres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TalleresDeleteManyArgs>(args?: SelectSubset<T, TalleresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Talleres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalleresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Talleres
     * const talleres = await prisma.talleres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TalleresUpdateManyArgs>(args: SelectSubset<T, TalleresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Talleres.
     * @param {TalleresUpsertArgs} args - Arguments to update or create a Talleres.
     * @example
     * // Update or create a Talleres
     * const talleres = await prisma.talleres.upsert({
     *   create: {
     *     // ... data to create a Talleres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Talleres we want to update
     *   }
     * })
     */
    upsert<T extends TalleresUpsertArgs>(args: SelectSubset<T, TalleresUpsertArgs<ExtArgs>>): Prisma__TalleresClient<$Result.GetResult<Prisma.$TalleresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Talleres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalleresCountArgs} args - Arguments to filter Talleres to count.
     * @example
     * // Count the number of Talleres
     * const count = await prisma.talleres.count({
     *   where: {
     *     // ... the filter for the Talleres we want to count
     *   }
     * })
    **/
    count<T extends TalleresCountArgs>(
      args?: Subset<T, TalleresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TalleresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Talleres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalleresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TalleresAggregateArgs>(args: Subset<T, TalleresAggregateArgs>): Prisma.PrismaPromise<GetTalleresAggregateType<T>>

    /**
     * Group by Talleres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalleresGroupByArgs} args - Group by arguments.
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
      T extends TalleresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TalleresGroupByArgs['orderBy'] }
        : { orderBy?: TalleresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TalleresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTalleresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Talleres model
   */
  readonly fields: TalleresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Talleres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TalleresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Entrenadores<T extends EntrenadoresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntrenadoresDefaultArgs<ExtArgs>>): Prisma__EntrenadoresClient<$Result.GetResult<Prisma.$EntrenadoresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Horarios<T extends HorariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HorariosDefaultArgs<ExtArgs>>): Prisma__HorariosClient<$Result.GetResult<Prisma.$HorariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Talleres model
   */
  interface TalleresFieldRefs {
    readonly IdTaller: FieldRef<"Talleres", 'Int'>
    readonly NombreTa: FieldRef<"Talleres", 'String'>
    readonly Descripcion: FieldRef<"Talleres", 'String'>
    readonly FkIdEntrenador: FieldRef<"Talleres", 'Int'>
    readonly FkIdHorario: FieldRef<"Talleres", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Talleres findUnique
   */
  export type TalleresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talleres
     */
    select?: TalleresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talleres
     */
    omit?: TalleresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalleresInclude<ExtArgs> | null
    /**
     * Filter, which Talleres to fetch.
     */
    where: TalleresWhereUniqueInput
  }

  /**
   * Talleres findUniqueOrThrow
   */
  export type TalleresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talleres
     */
    select?: TalleresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talleres
     */
    omit?: TalleresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalleresInclude<ExtArgs> | null
    /**
     * Filter, which Talleres to fetch.
     */
    where: TalleresWhereUniqueInput
  }

  /**
   * Talleres findFirst
   */
  export type TalleresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talleres
     */
    select?: TalleresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talleres
     */
    omit?: TalleresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalleresInclude<ExtArgs> | null
    /**
     * Filter, which Talleres to fetch.
     */
    where?: TalleresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Talleres to fetch.
     */
    orderBy?: TalleresOrderByWithRelationInput | TalleresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Talleres.
     */
    cursor?: TalleresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Talleres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Talleres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Talleres.
     */
    distinct?: TalleresScalarFieldEnum | TalleresScalarFieldEnum[]
  }

  /**
   * Talleres findFirstOrThrow
   */
  export type TalleresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talleres
     */
    select?: TalleresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talleres
     */
    omit?: TalleresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalleresInclude<ExtArgs> | null
    /**
     * Filter, which Talleres to fetch.
     */
    where?: TalleresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Talleres to fetch.
     */
    orderBy?: TalleresOrderByWithRelationInput | TalleresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Talleres.
     */
    cursor?: TalleresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Talleres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Talleres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Talleres.
     */
    distinct?: TalleresScalarFieldEnum | TalleresScalarFieldEnum[]
  }

  /**
   * Talleres findMany
   */
  export type TalleresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talleres
     */
    select?: TalleresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talleres
     */
    omit?: TalleresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalleresInclude<ExtArgs> | null
    /**
     * Filter, which Talleres to fetch.
     */
    where?: TalleresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Talleres to fetch.
     */
    orderBy?: TalleresOrderByWithRelationInput | TalleresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Talleres.
     */
    cursor?: TalleresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Talleres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Talleres.
     */
    skip?: number
    distinct?: TalleresScalarFieldEnum | TalleresScalarFieldEnum[]
  }

  /**
   * Talleres create
   */
  export type TalleresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talleres
     */
    select?: TalleresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talleres
     */
    omit?: TalleresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalleresInclude<ExtArgs> | null
    /**
     * The data needed to create a Talleres.
     */
    data: XOR<TalleresCreateInput, TalleresUncheckedCreateInput>
  }

  /**
   * Talleres createMany
   */
  export type TalleresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Talleres.
     */
    data: TalleresCreateManyInput | TalleresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Talleres update
   */
  export type TalleresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talleres
     */
    select?: TalleresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talleres
     */
    omit?: TalleresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalleresInclude<ExtArgs> | null
    /**
     * The data needed to update a Talleres.
     */
    data: XOR<TalleresUpdateInput, TalleresUncheckedUpdateInput>
    /**
     * Choose, which Talleres to update.
     */
    where: TalleresWhereUniqueInput
  }

  /**
   * Talleres updateMany
   */
  export type TalleresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Talleres.
     */
    data: XOR<TalleresUpdateManyMutationInput, TalleresUncheckedUpdateManyInput>
    /**
     * Filter which Talleres to update
     */
    where?: TalleresWhereInput
    /**
     * Limit how many Talleres to update.
     */
    limit?: number
  }

  /**
   * Talleres upsert
   */
  export type TalleresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talleres
     */
    select?: TalleresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talleres
     */
    omit?: TalleresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalleresInclude<ExtArgs> | null
    /**
     * The filter to search for the Talleres to update in case it exists.
     */
    where: TalleresWhereUniqueInput
    /**
     * In case the Talleres found by the `where` argument doesn't exist, create a new Talleres with this data.
     */
    create: XOR<TalleresCreateInput, TalleresUncheckedCreateInput>
    /**
     * In case the Talleres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TalleresUpdateInput, TalleresUncheckedUpdateInput>
  }

  /**
   * Talleres delete
   */
  export type TalleresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talleres
     */
    select?: TalleresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talleres
     */
    omit?: TalleresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalleresInclude<ExtArgs> | null
    /**
     * Filter which Talleres to delete.
     */
    where: TalleresWhereUniqueInput
  }

  /**
   * Talleres deleteMany
   */
  export type TalleresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Talleres to delete
     */
    where?: TalleresWhereInput
    /**
     * Limit how many Talleres to delete.
     */
    limit?: number
  }

  /**
   * Talleres without action
   */
  export type TalleresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talleres
     */
    select?: TalleresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talleres
     */
    omit?: TalleresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalleresInclude<ExtArgs> | null
  }


  /**
   * Model Torneos
   */

  export type AggregateTorneos = {
    _count: TorneosCountAggregateOutputType | null
    _avg: TorneosAvgAggregateOutputType | null
    _sum: TorneosSumAggregateOutputType | null
    _min: TorneosMinAggregateOutputType | null
    _max: TorneosMaxAggregateOutputType | null
  }

  export type TorneosAvgAggregateOutputType = {
    IdTorneo: number | null
    FkIdEspacio: number | null
    FkIdHorario: number | null
  }

  export type TorneosSumAggregateOutputType = {
    IdTorneo: number | null
    FkIdEspacio: number | null
    FkIdHorario: number | null
  }

  export type TorneosMinAggregateOutputType = {
    IdTorneo: number | null
    NombreT: string | null
    FechaInicioT: Date | null
    FechaFinT: Date | null
    FkIdEspacio: number | null
    FkIdHorario: number | null
  }

  export type TorneosMaxAggregateOutputType = {
    IdTorneo: number | null
    NombreT: string | null
    FechaInicioT: Date | null
    FechaFinT: Date | null
    FkIdEspacio: number | null
    FkIdHorario: number | null
  }

  export type TorneosCountAggregateOutputType = {
    IdTorneo: number
    NombreT: number
    FechaInicioT: number
    FechaFinT: number
    FkIdEspacio: number
    FkIdHorario: number
    _all: number
  }


  export type TorneosAvgAggregateInputType = {
    IdTorneo?: true
    FkIdEspacio?: true
    FkIdHorario?: true
  }

  export type TorneosSumAggregateInputType = {
    IdTorneo?: true
    FkIdEspacio?: true
    FkIdHorario?: true
  }

  export type TorneosMinAggregateInputType = {
    IdTorneo?: true
    NombreT?: true
    FechaInicioT?: true
    FechaFinT?: true
    FkIdEspacio?: true
    FkIdHorario?: true
  }

  export type TorneosMaxAggregateInputType = {
    IdTorneo?: true
    NombreT?: true
    FechaInicioT?: true
    FechaFinT?: true
    FkIdEspacio?: true
    FkIdHorario?: true
  }

  export type TorneosCountAggregateInputType = {
    IdTorneo?: true
    NombreT?: true
    FechaInicioT?: true
    FechaFinT?: true
    FkIdEspacio?: true
    FkIdHorario?: true
    _all?: true
  }

  export type TorneosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Torneos to aggregate.
     */
    where?: TorneosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Torneos to fetch.
     */
    orderBy?: TorneosOrderByWithRelationInput | TorneosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TorneosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Torneos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Torneos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Torneos
    **/
    _count?: true | TorneosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TorneosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TorneosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TorneosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TorneosMaxAggregateInputType
  }

  export type GetTorneosAggregateType<T extends TorneosAggregateArgs> = {
        [P in keyof T & keyof AggregateTorneos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTorneos[P]>
      : GetScalarType<T[P], AggregateTorneos[P]>
  }




  export type TorneosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TorneosWhereInput
    orderBy?: TorneosOrderByWithAggregationInput | TorneosOrderByWithAggregationInput[]
    by: TorneosScalarFieldEnum[] | TorneosScalarFieldEnum
    having?: TorneosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TorneosCountAggregateInputType | true
    _avg?: TorneosAvgAggregateInputType
    _sum?: TorneosSumAggregateInputType
    _min?: TorneosMinAggregateInputType
    _max?: TorneosMaxAggregateInputType
  }

  export type TorneosGroupByOutputType = {
    IdTorneo: number
    NombreT: string
    FechaInicioT: Date
    FechaFinT: Date
    FkIdEspacio: number | null
    FkIdHorario: number | null
    _count: TorneosCountAggregateOutputType | null
    _avg: TorneosAvgAggregateOutputType | null
    _sum: TorneosSumAggregateOutputType | null
    _min: TorneosMinAggregateOutputType | null
    _max: TorneosMaxAggregateOutputType | null
  }

  type GetTorneosGroupByPayload<T extends TorneosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TorneosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TorneosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TorneosGroupByOutputType[P]>
            : GetScalarType<T[P], TorneosGroupByOutputType[P]>
        }
      >
    >


  export type TorneosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdTorneo?: boolean
    NombreT?: boolean
    FechaInicioT?: boolean
    FechaFinT?: boolean
    FkIdEspacio?: boolean
    FkIdHorario?: boolean
    InscripcionTorneos?: boolean | Torneos$InscripcionTorneosArgs<ExtArgs>
    Espacios?: boolean | Torneos$EspaciosArgs<ExtArgs>
    Horarios?: boolean | Torneos$HorariosArgs<ExtArgs>
    _count?: boolean | TorneosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["torneos"]>



  export type TorneosSelectScalar = {
    IdTorneo?: boolean
    NombreT?: boolean
    FechaInicioT?: boolean
    FechaFinT?: boolean
    FkIdEspacio?: boolean
    FkIdHorario?: boolean
  }

  export type TorneosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"IdTorneo" | "NombreT" | "FechaInicioT" | "FechaFinT" | "FkIdEspacio" | "FkIdHorario", ExtArgs["result"]["torneos"]>
  export type TorneosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    InscripcionTorneos?: boolean | Torneos$InscripcionTorneosArgs<ExtArgs>
    Espacios?: boolean | Torneos$EspaciosArgs<ExtArgs>
    Horarios?: boolean | Torneos$HorariosArgs<ExtArgs>
    _count?: boolean | TorneosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TorneosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Torneos"
    objects: {
      InscripcionTorneos: Prisma.$InscripcionTorneosPayload<ExtArgs>[]
      Espacios: Prisma.$EspaciosPayload<ExtArgs> | null
      Horarios: Prisma.$HorariosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      IdTorneo: number
      NombreT: string
      FechaInicioT: Date
      FechaFinT: Date
      FkIdEspacio: number | null
      FkIdHorario: number | null
    }, ExtArgs["result"]["torneos"]>
    composites: {}
  }

  type TorneosGetPayload<S extends boolean | null | undefined | TorneosDefaultArgs> = $Result.GetResult<Prisma.$TorneosPayload, S>

  type TorneosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TorneosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TorneosCountAggregateInputType | true
    }

  export interface TorneosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Torneos'], meta: { name: 'Torneos' } }
    /**
     * Find zero or one Torneos that matches the filter.
     * @param {TorneosFindUniqueArgs} args - Arguments to find a Torneos
     * @example
     * // Get one Torneos
     * const torneos = await prisma.torneos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TorneosFindUniqueArgs>(args: SelectSubset<T, TorneosFindUniqueArgs<ExtArgs>>): Prisma__TorneosClient<$Result.GetResult<Prisma.$TorneosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Torneos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TorneosFindUniqueOrThrowArgs} args - Arguments to find a Torneos
     * @example
     * // Get one Torneos
     * const torneos = await prisma.torneos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TorneosFindUniqueOrThrowArgs>(args: SelectSubset<T, TorneosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TorneosClient<$Result.GetResult<Prisma.$TorneosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Torneos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorneosFindFirstArgs} args - Arguments to find a Torneos
     * @example
     * // Get one Torneos
     * const torneos = await prisma.torneos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TorneosFindFirstArgs>(args?: SelectSubset<T, TorneosFindFirstArgs<ExtArgs>>): Prisma__TorneosClient<$Result.GetResult<Prisma.$TorneosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Torneos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorneosFindFirstOrThrowArgs} args - Arguments to find a Torneos
     * @example
     * // Get one Torneos
     * const torneos = await prisma.torneos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TorneosFindFirstOrThrowArgs>(args?: SelectSubset<T, TorneosFindFirstOrThrowArgs<ExtArgs>>): Prisma__TorneosClient<$Result.GetResult<Prisma.$TorneosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Torneos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorneosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Torneos
     * const torneos = await prisma.torneos.findMany()
     * 
     * // Get first 10 Torneos
     * const torneos = await prisma.torneos.findMany({ take: 10 })
     * 
     * // Only select the `IdTorneo`
     * const torneosWithIdTorneoOnly = await prisma.torneos.findMany({ select: { IdTorneo: true } })
     * 
     */
    findMany<T extends TorneosFindManyArgs>(args?: SelectSubset<T, TorneosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TorneosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Torneos.
     * @param {TorneosCreateArgs} args - Arguments to create a Torneos.
     * @example
     * // Create one Torneos
     * const Torneos = await prisma.torneos.create({
     *   data: {
     *     // ... data to create a Torneos
     *   }
     * })
     * 
     */
    create<T extends TorneosCreateArgs>(args: SelectSubset<T, TorneosCreateArgs<ExtArgs>>): Prisma__TorneosClient<$Result.GetResult<Prisma.$TorneosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Torneos.
     * @param {TorneosCreateManyArgs} args - Arguments to create many Torneos.
     * @example
     * // Create many Torneos
     * const torneos = await prisma.torneos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TorneosCreateManyArgs>(args?: SelectSubset<T, TorneosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Torneos.
     * @param {TorneosDeleteArgs} args - Arguments to delete one Torneos.
     * @example
     * // Delete one Torneos
     * const Torneos = await prisma.torneos.delete({
     *   where: {
     *     // ... filter to delete one Torneos
     *   }
     * })
     * 
     */
    delete<T extends TorneosDeleteArgs>(args: SelectSubset<T, TorneosDeleteArgs<ExtArgs>>): Prisma__TorneosClient<$Result.GetResult<Prisma.$TorneosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Torneos.
     * @param {TorneosUpdateArgs} args - Arguments to update one Torneos.
     * @example
     * // Update one Torneos
     * const torneos = await prisma.torneos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TorneosUpdateArgs>(args: SelectSubset<T, TorneosUpdateArgs<ExtArgs>>): Prisma__TorneosClient<$Result.GetResult<Prisma.$TorneosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Torneos.
     * @param {TorneosDeleteManyArgs} args - Arguments to filter Torneos to delete.
     * @example
     * // Delete a few Torneos
     * const { count } = await prisma.torneos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TorneosDeleteManyArgs>(args?: SelectSubset<T, TorneosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Torneos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorneosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Torneos
     * const torneos = await prisma.torneos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TorneosUpdateManyArgs>(args: SelectSubset<T, TorneosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Torneos.
     * @param {TorneosUpsertArgs} args - Arguments to update or create a Torneos.
     * @example
     * // Update or create a Torneos
     * const torneos = await prisma.torneos.upsert({
     *   create: {
     *     // ... data to create a Torneos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Torneos we want to update
     *   }
     * })
     */
    upsert<T extends TorneosUpsertArgs>(args: SelectSubset<T, TorneosUpsertArgs<ExtArgs>>): Prisma__TorneosClient<$Result.GetResult<Prisma.$TorneosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Torneos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorneosCountArgs} args - Arguments to filter Torneos to count.
     * @example
     * // Count the number of Torneos
     * const count = await prisma.torneos.count({
     *   where: {
     *     // ... the filter for the Torneos we want to count
     *   }
     * })
    **/
    count<T extends TorneosCountArgs>(
      args?: Subset<T, TorneosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TorneosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Torneos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorneosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TorneosAggregateArgs>(args: Subset<T, TorneosAggregateArgs>): Prisma.PrismaPromise<GetTorneosAggregateType<T>>

    /**
     * Group by Torneos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorneosGroupByArgs} args - Group by arguments.
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
      T extends TorneosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TorneosGroupByArgs['orderBy'] }
        : { orderBy?: TorneosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TorneosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTorneosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Torneos model
   */
  readonly fields: TorneosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Torneos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TorneosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    InscripcionTorneos<T extends Torneos$InscripcionTorneosArgs<ExtArgs> = {}>(args?: Subset<T, Torneos$InscripcionTorneosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionTorneosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Espacios<T extends Torneos$EspaciosArgs<ExtArgs> = {}>(args?: Subset<T, Torneos$EspaciosArgs<ExtArgs>>): Prisma__EspaciosClient<$Result.GetResult<Prisma.$EspaciosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Horarios<T extends Torneos$HorariosArgs<ExtArgs> = {}>(args?: Subset<T, Torneos$HorariosArgs<ExtArgs>>): Prisma__HorariosClient<$Result.GetResult<Prisma.$HorariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Torneos model
   */
  interface TorneosFieldRefs {
    readonly IdTorneo: FieldRef<"Torneos", 'Int'>
    readonly NombreT: FieldRef<"Torneos", 'String'>
    readonly FechaInicioT: FieldRef<"Torneos", 'DateTime'>
    readonly FechaFinT: FieldRef<"Torneos", 'DateTime'>
    readonly FkIdEspacio: FieldRef<"Torneos", 'Int'>
    readonly FkIdHorario: FieldRef<"Torneos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Torneos findUnique
   */
  export type TorneosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneos
     */
    select?: TorneosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneos
     */
    omit?: TorneosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TorneosInclude<ExtArgs> | null
    /**
     * Filter, which Torneos to fetch.
     */
    where: TorneosWhereUniqueInput
  }

  /**
   * Torneos findUniqueOrThrow
   */
  export type TorneosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneos
     */
    select?: TorneosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneos
     */
    omit?: TorneosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TorneosInclude<ExtArgs> | null
    /**
     * Filter, which Torneos to fetch.
     */
    where: TorneosWhereUniqueInput
  }

  /**
   * Torneos findFirst
   */
  export type TorneosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneos
     */
    select?: TorneosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneos
     */
    omit?: TorneosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TorneosInclude<ExtArgs> | null
    /**
     * Filter, which Torneos to fetch.
     */
    where?: TorneosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Torneos to fetch.
     */
    orderBy?: TorneosOrderByWithRelationInput | TorneosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Torneos.
     */
    cursor?: TorneosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Torneos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Torneos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Torneos.
     */
    distinct?: TorneosScalarFieldEnum | TorneosScalarFieldEnum[]
  }

  /**
   * Torneos findFirstOrThrow
   */
  export type TorneosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneos
     */
    select?: TorneosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneos
     */
    omit?: TorneosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TorneosInclude<ExtArgs> | null
    /**
     * Filter, which Torneos to fetch.
     */
    where?: TorneosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Torneos to fetch.
     */
    orderBy?: TorneosOrderByWithRelationInput | TorneosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Torneos.
     */
    cursor?: TorneosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Torneos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Torneos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Torneos.
     */
    distinct?: TorneosScalarFieldEnum | TorneosScalarFieldEnum[]
  }

  /**
   * Torneos findMany
   */
  export type TorneosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneos
     */
    select?: TorneosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneos
     */
    omit?: TorneosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TorneosInclude<ExtArgs> | null
    /**
     * Filter, which Torneos to fetch.
     */
    where?: TorneosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Torneos to fetch.
     */
    orderBy?: TorneosOrderByWithRelationInput | TorneosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Torneos.
     */
    cursor?: TorneosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Torneos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Torneos.
     */
    skip?: number
    distinct?: TorneosScalarFieldEnum | TorneosScalarFieldEnum[]
  }

  /**
   * Torneos create
   */
  export type TorneosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneos
     */
    select?: TorneosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneos
     */
    omit?: TorneosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TorneosInclude<ExtArgs> | null
    /**
     * The data needed to create a Torneos.
     */
    data: XOR<TorneosCreateInput, TorneosUncheckedCreateInput>
  }

  /**
   * Torneos createMany
   */
  export type TorneosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Torneos.
     */
    data: TorneosCreateManyInput | TorneosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Torneos update
   */
  export type TorneosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneos
     */
    select?: TorneosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneos
     */
    omit?: TorneosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TorneosInclude<ExtArgs> | null
    /**
     * The data needed to update a Torneos.
     */
    data: XOR<TorneosUpdateInput, TorneosUncheckedUpdateInput>
    /**
     * Choose, which Torneos to update.
     */
    where: TorneosWhereUniqueInput
  }

  /**
   * Torneos updateMany
   */
  export type TorneosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Torneos.
     */
    data: XOR<TorneosUpdateManyMutationInput, TorneosUncheckedUpdateManyInput>
    /**
     * Filter which Torneos to update
     */
    where?: TorneosWhereInput
    /**
     * Limit how many Torneos to update.
     */
    limit?: number
  }

  /**
   * Torneos upsert
   */
  export type TorneosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneos
     */
    select?: TorneosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneos
     */
    omit?: TorneosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TorneosInclude<ExtArgs> | null
    /**
     * The filter to search for the Torneos to update in case it exists.
     */
    where: TorneosWhereUniqueInput
    /**
     * In case the Torneos found by the `where` argument doesn't exist, create a new Torneos with this data.
     */
    create: XOR<TorneosCreateInput, TorneosUncheckedCreateInput>
    /**
     * In case the Torneos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TorneosUpdateInput, TorneosUncheckedUpdateInput>
  }

  /**
   * Torneos delete
   */
  export type TorneosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneos
     */
    select?: TorneosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneos
     */
    omit?: TorneosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TorneosInclude<ExtArgs> | null
    /**
     * Filter which Torneos to delete.
     */
    where: TorneosWhereUniqueInput
  }

  /**
   * Torneos deleteMany
   */
  export type TorneosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Torneos to delete
     */
    where?: TorneosWhereInput
    /**
     * Limit how many Torneos to delete.
     */
    limit?: number
  }

  /**
   * Torneos.InscripcionTorneos
   */
  export type Torneos$InscripcionTorneosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InscripcionTorneos
     */
    select?: InscripcionTorneosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InscripcionTorneos
     */
    omit?: InscripcionTorneosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionTorneosInclude<ExtArgs> | null
    where?: InscripcionTorneosWhereInput
    orderBy?: InscripcionTorneosOrderByWithRelationInput | InscripcionTorneosOrderByWithRelationInput[]
    cursor?: InscripcionTorneosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InscripcionTorneosScalarFieldEnum | InscripcionTorneosScalarFieldEnum[]
  }

  /**
   * Torneos.Espacios
   */
  export type Torneos$EspaciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Espacios
     */
    select?: EspaciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Espacios
     */
    omit?: EspaciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EspaciosInclude<ExtArgs> | null
    where?: EspaciosWhereInput
  }

  /**
   * Torneos.Horarios
   */
  export type Torneos$HorariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horarios
     */
    select?: HorariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horarios
     */
    omit?: HorariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HorariosInclude<ExtArgs> | null
    where?: HorariosWhereInput
  }

  /**
   * Torneos without action
   */
  export type TorneosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneos
     */
    select?: TorneosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneos
     */
    omit?: TorneosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TorneosInclude<ExtArgs> | null
  }


  /**
   * Model Usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    IdUsuario: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    IdUsuario: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    IdUsuario: number | null
    Usuario: string | null
    NombreU: string | null
    CorreoU: string | null
    Contrase_a: string | null
    Nivel: $Enums.Usuarios_Nivel | null
    FechaRegistro: Date | null
    Telefono: string | null
  }

  export type UsuariosMaxAggregateOutputType = {
    IdUsuario: number | null
    Usuario: string | null
    NombreU: string | null
    CorreoU: string | null
    Contrase_a: string | null
    Nivel: $Enums.Usuarios_Nivel | null
    FechaRegistro: Date | null
    Telefono: string | null
  }

  export type UsuariosCountAggregateOutputType = {
    IdUsuario: number
    Usuario: number
    NombreU: number
    CorreoU: number
    Contrase_a: number
    Nivel: number
    FechaRegistro: number
    Telefono: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    IdUsuario?: true
  }

  export type UsuariosSumAggregateInputType = {
    IdUsuario?: true
  }

  export type UsuariosMinAggregateInputType = {
    IdUsuario?: true
    Usuario?: true
    NombreU?: true
    CorreoU?: true
    Contrase_a?: true
    Nivel?: true
    FechaRegistro?: true
    Telefono?: true
  }

  export type UsuariosMaxAggregateInputType = {
    IdUsuario?: true
    Usuario?: true
    NombreU?: true
    CorreoU?: true
    Contrase_a?: true
    Nivel?: true
    FechaRegistro?: true
    Telefono?: true
  }

  export type UsuariosCountAggregateInputType = {
    IdUsuario?: true
    Usuario?: true
    NombreU?: true
    CorreoU?: true
    Contrase_a?: true
    Nivel?: true
    FechaRegistro?: true
    Telefono?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to aggregate.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type UsuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosWhereInput
    orderBy?: UsuariosOrderByWithAggregationInput | UsuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: UsuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    IdUsuario: number
    Usuario: string
    NombreU: string
    CorreoU: string
    Contrase_a: string
    Nivel: $Enums.Usuarios_Nivel
    FechaRegistro: Date | null
    Telefono: string | null
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends UsuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type UsuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IdUsuario?: boolean
    Usuario?: boolean
    NombreU?: boolean
    CorreoU?: boolean
    Contrase_a?: boolean
    Nivel?: boolean
    FechaRegistro?: boolean
    Telefono?: boolean
    Comentarios?: boolean | Usuarios$ComentariosArgs<ExtArgs>
    Entrenadores?: boolean | Usuarios$EntrenadoresArgs<ExtArgs>
    InscripcionClases?: boolean | Usuarios$InscripcionClasesArgs<ExtArgs>
    InscripcionTorneos?: boolean | Usuarios$InscripcionTorneosArgs<ExtArgs>
    Reservas?: boolean | Usuarios$ReservasArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>



  export type UsuariosSelectScalar = {
    IdUsuario?: boolean
    Usuario?: boolean
    NombreU?: boolean
    CorreoU?: boolean
    Contrase_a?: boolean
    Nivel?: boolean
    FechaRegistro?: boolean
    Telefono?: boolean
  }

  export type UsuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"IdUsuario" | "Usuario" | "NombreU" | "CorreoU" | "Contrase_a" | "Nivel" | "FechaRegistro" | "Telefono", ExtArgs["result"]["usuarios"]>
  export type UsuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comentarios?: boolean | Usuarios$ComentariosArgs<ExtArgs>
    Entrenadores?: boolean | Usuarios$EntrenadoresArgs<ExtArgs>
    InscripcionClases?: boolean | Usuarios$InscripcionClasesArgs<ExtArgs>
    InscripcionTorneos?: boolean | Usuarios$InscripcionTorneosArgs<ExtArgs>
    Reservas?: boolean | Usuarios$ReservasArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuarios"
    objects: {
      Comentarios: Prisma.$ComentariosPayload<ExtArgs>[]
      Entrenadores: Prisma.$EntrenadoresPayload<ExtArgs>[]
      InscripcionClases: Prisma.$InscripcionClasesPayload<ExtArgs>[]
      InscripcionTorneos: Prisma.$InscripcionTorneosPayload<ExtArgs>[]
      Reservas: Prisma.$ReservasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      IdUsuario: number
      Usuario: string
      NombreU: string
      CorreoU: string
      Contrase_a: string
      Nivel: $Enums.Usuarios_Nivel
      FechaRegistro: Date | null
      Telefono: string | null
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type UsuariosGetPayload<S extends boolean | null | undefined | UsuariosDefaultArgs> = $Result.GetResult<Prisma.$UsuariosPayload, S>

  type UsuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface UsuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuarios'], meta: { name: 'Usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {UsuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuariosFindUniqueArgs>(args: SelectSubset<T, UsuariosFindUniqueArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuariosFindFirstArgs>(args?: SelectSubset<T, UsuariosFindFirstArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `IdUsuario`
     * const usuariosWithIdUsuarioOnly = await prisma.usuarios.findMany({ select: { IdUsuario: true } })
     * 
     */
    findMany<T extends UsuariosFindManyArgs>(args?: SelectSubset<T, UsuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {UsuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends UsuariosCreateArgs>(args: SelectSubset<T, UsuariosCreateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuariosCreateManyArgs>(args?: SelectSubset<T, UsuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuarios.
     * @param {UsuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends UsuariosDeleteArgs>(args: SelectSubset<T, UsuariosDeleteArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {UsuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuariosUpdateArgs>(args: SelectSubset<T, UsuariosUpdateArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuariosDeleteManyArgs>(args?: SelectSubset<T, UsuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuariosUpdateManyArgs>(args: SelectSubset<T, UsuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuarios.
     * @param {UsuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends UsuariosUpsertArgs>(args: SelectSubset<T, UsuariosUpsertArgs<ExtArgs>>): Prisma__UsuariosClient<$Result.GetResult<Prisma.$UsuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuariosCountArgs>(
      args?: Subset<T, UsuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosGroupByArgs} args - Group by arguments.
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
      T extends UsuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuariosGroupByArgs['orderBy'] }
        : { orderBy?: UsuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuarios model
   */
  readonly fields: UsuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Comentarios<T extends Usuarios$ComentariosArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$ComentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComentariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Entrenadores<T extends Usuarios$EntrenadoresArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$EntrenadoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntrenadoresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    InscripcionClases<T extends Usuarios$InscripcionClasesArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$InscripcionClasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionClasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    InscripcionTorneos<T extends Usuarios$InscripcionTorneosArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$InscripcionTorneosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionTorneosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Reservas<T extends Usuarios$ReservasArgs<ExtArgs> = {}>(args?: Subset<T, Usuarios$ReservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuarios model
   */
  interface UsuariosFieldRefs {
    readonly IdUsuario: FieldRef<"Usuarios", 'Int'>
    readonly Usuario: FieldRef<"Usuarios", 'String'>
    readonly NombreU: FieldRef<"Usuarios", 'String'>
    readonly CorreoU: FieldRef<"Usuarios", 'String'>
    readonly Contrase_a: FieldRef<"Usuarios", 'String'>
    readonly Nivel: FieldRef<"Usuarios", 'Usuarios_Nivel'>
    readonly FechaRegistro: FieldRef<"Usuarios", 'DateTime'>
    readonly Telefono: FieldRef<"Usuarios", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuarios findUnique
   */
  export type UsuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findUniqueOrThrow
   */
  export type UsuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios findFirst
   */
  export type UsuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findFirstOrThrow
   */
  export type UsuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios findMany
   */
  export type UsuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuariosOrderByWithRelationInput | UsuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * Usuarios create
   */
  export type UsuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuarios.
     */
    data: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
  }

  /**
   * Usuarios createMany
   */
  export type UsuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuariosCreateManyInput | UsuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuarios update
   */
  export type UsuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuarios.
     */
    data: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
    /**
     * Choose, which Usuarios to update.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios updateMany
   */
  export type UsuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuariosUpdateManyMutationInput, UsuariosUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuarios upsert
   */
  export type UsuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuarios to update in case it exists.
     */
    where: UsuariosWhereUniqueInput
    /**
     * In case the Usuarios found by the `where` argument doesn't exist, create a new Usuarios with this data.
     */
    create: XOR<UsuariosCreateInput, UsuariosUncheckedCreateInput>
    /**
     * In case the Usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuariosUpdateInput, UsuariosUncheckedUpdateInput>
  }

  /**
   * Usuarios delete
   */
  export type UsuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
    /**
     * Filter which Usuarios to delete.
     */
    where: UsuariosWhereUniqueInput
  }

  /**
   * Usuarios deleteMany
   */
  export type UsuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuariosWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuarios.Comentarios
   */
  export type Usuarios$ComentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comentarios
     */
    select?: ComentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comentarios
     */
    omit?: ComentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComentariosInclude<ExtArgs> | null
    where?: ComentariosWhereInput
    orderBy?: ComentariosOrderByWithRelationInput | ComentariosOrderByWithRelationInput[]
    cursor?: ComentariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComentariosScalarFieldEnum | ComentariosScalarFieldEnum[]
  }

  /**
   * Usuarios.Entrenadores
   */
  export type Usuarios$EntrenadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenadores
     */
    select?: EntrenadoresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenadores
     */
    omit?: EntrenadoresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadoresInclude<ExtArgs> | null
    where?: EntrenadoresWhereInput
    orderBy?: EntrenadoresOrderByWithRelationInput | EntrenadoresOrderByWithRelationInput[]
    cursor?: EntrenadoresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntrenadoresScalarFieldEnum | EntrenadoresScalarFieldEnum[]
  }

  /**
   * Usuarios.InscripcionClases
   */
  export type Usuarios$InscripcionClasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InscripcionClases
     */
    select?: InscripcionClasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InscripcionClases
     */
    omit?: InscripcionClasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionClasesInclude<ExtArgs> | null
    where?: InscripcionClasesWhereInput
    orderBy?: InscripcionClasesOrderByWithRelationInput | InscripcionClasesOrderByWithRelationInput[]
    cursor?: InscripcionClasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InscripcionClasesScalarFieldEnum | InscripcionClasesScalarFieldEnum[]
  }

  /**
   * Usuarios.InscripcionTorneos
   */
  export type Usuarios$InscripcionTorneosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InscripcionTorneos
     */
    select?: InscripcionTorneosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InscripcionTorneos
     */
    omit?: InscripcionTorneosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionTorneosInclude<ExtArgs> | null
    where?: InscripcionTorneosWhereInput
    orderBy?: InscripcionTorneosOrderByWithRelationInput | InscripcionTorneosOrderByWithRelationInput[]
    cursor?: InscripcionTorneosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InscripcionTorneosScalarFieldEnum | InscripcionTorneosScalarFieldEnum[]
  }

  /**
   * Usuarios.Reservas
   */
  export type Usuarios$ReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservas
     */
    select?: ReservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservas
     */
    omit?: ReservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservasInclude<ExtArgs> | null
    where?: ReservasWhereInput
    orderBy?: ReservasOrderByWithRelationInput | ReservasOrderByWithRelationInput[]
    cursor?: ReservasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * Usuarios without action
   */
  export type UsuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuarios
     */
    select?: UsuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuarios
     */
    omit?: UsuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosInclude<ExtArgs> | null
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


  export const ClasesScalarFieldEnum: {
    IdClase: 'IdClase',
    FkIdEntrenador: 'FkIdEntrenador',
    FkIdEspacio: 'FkIdEspacio',
    FkIdHorario: 'FkIdHorario',
    NombreC: 'NombreC',
    Descripcion: 'Descripcion'
  };

  export type ClasesScalarFieldEnum = (typeof ClasesScalarFieldEnum)[keyof typeof ClasesScalarFieldEnum]


  export const ComentariosScalarFieldEnum: {
    IdComentario: 'IdComentario',
    FkIdUsuario: 'FkIdUsuario',
    Comentario: 'Comentario',
    FechaComentario: 'FechaComentario'
  };

  export type ComentariosScalarFieldEnum = (typeof ComentariosScalarFieldEnum)[keyof typeof ComentariosScalarFieldEnum]


  export const EntrenadoresScalarFieldEnum: {
    IdEntrenador: 'IdEntrenador',
    FkIdUsuario: 'FkIdUsuario',
    Especialidad: 'Especialidad',
    Experiencia: 'Experiencia',
    Telefono: 'Telefono'
  };

  export type EntrenadoresScalarFieldEnum = (typeof EntrenadoresScalarFieldEnum)[keyof typeof EntrenadoresScalarFieldEnum]


  export const EspaciosScalarFieldEnum: {
    IdEspacio: 'IdEspacio',
    NombreE: 'NombreE',
    Tipo: 'Tipo',
    Capacidad: 'Capacidad',
    Descripcion: 'Descripcion',
    Ubicacion: 'Ubicacion'
  };

  export type EspaciosScalarFieldEnum = (typeof EspaciosScalarFieldEnum)[keyof typeof EspaciosScalarFieldEnum]


  export const HorariosScalarFieldEnum: {
    IdHorario: 'IdHorario',
    FkIdEspacio: 'FkIdEspacio',
    DiaSemana: 'DiaSemana',
    HoraInicio: 'HoraInicio',
    HoraFin: 'HoraFin'
  };

  export type HorariosScalarFieldEnum = (typeof HorariosScalarFieldEnum)[keyof typeof HorariosScalarFieldEnum]


  export const InscripcionClasesScalarFieldEnum: {
    IdInscripcionClase: 'IdInscripcionClase',
    FkIdUsuario: 'FkIdUsuario',
    FkIdClase: 'FkIdClase',
    FechaI: 'FechaI'
  };

  export type InscripcionClasesScalarFieldEnum = (typeof InscripcionClasesScalarFieldEnum)[keyof typeof InscripcionClasesScalarFieldEnum]


  export const InscripcionTorneosScalarFieldEnum: {
    IdInscripcionTorneo: 'IdInscripcionTorneo',
    FkIdUsuario: 'FkIdUsuario',
    FkIdTorneo: 'FkIdTorneo',
    FechaI: 'FechaI'
  };

  export type InscripcionTorneosScalarFieldEnum = (typeof InscripcionTorneosScalarFieldEnum)[keyof typeof InscripcionTorneosScalarFieldEnum]


  export const ReservasScalarFieldEnum: {
    IdReserva: 'IdReserva',
    FkIdUsuario: 'FkIdUsuario',
    FkIdEspacio: 'FkIdEspacio',
    FechaReserva: 'FechaReserva',
    HoraInicioR: 'HoraInicioR',
    HoraFinR: 'HoraFinR',
    Estado: 'Estado'
  };

  export type ReservasScalarFieldEnum = (typeof ReservasScalarFieldEnum)[keyof typeof ReservasScalarFieldEnum]


  export const TalleresScalarFieldEnum: {
    IdTaller: 'IdTaller',
    NombreTa: 'NombreTa',
    Descripcion: 'Descripcion',
    FkIdEntrenador: 'FkIdEntrenador',
    FkIdHorario: 'FkIdHorario'
  };

  export type TalleresScalarFieldEnum = (typeof TalleresScalarFieldEnum)[keyof typeof TalleresScalarFieldEnum]


  export const TorneosScalarFieldEnum: {
    IdTorneo: 'IdTorneo',
    NombreT: 'NombreT',
    FechaInicioT: 'FechaInicioT',
    FechaFinT: 'FechaFinT',
    FkIdEspacio: 'FkIdEspacio',
    FkIdHorario: 'FkIdHorario'
  };

  export type TorneosScalarFieldEnum = (typeof TorneosScalarFieldEnum)[keyof typeof TorneosScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    IdUsuario: 'IdUsuario',
    Usuario: 'Usuario',
    NombreU: 'NombreU',
    CorreoU: 'CorreoU',
    Contrase_a: 'Contrase_a',
    Nivel: 'Nivel',
    FechaRegistro: 'FechaRegistro',
    Telefono: 'Telefono'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ClasesOrderByRelevanceFieldEnum: {
    NombreC: 'NombreC',
    Descripcion: 'Descripcion'
  };

  export type ClasesOrderByRelevanceFieldEnum = (typeof ClasesOrderByRelevanceFieldEnum)[keyof typeof ClasesOrderByRelevanceFieldEnum]


  export const ComentariosOrderByRelevanceFieldEnum: {
    Comentario: 'Comentario'
  };

  export type ComentariosOrderByRelevanceFieldEnum = (typeof ComentariosOrderByRelevanceFieldEnum)[keyof typeof ComentariosOrderByRelevanceFieldEnum]


  export const EntrenadoresOrderByRelevanceFieldEnum: {
    Especialidad: 'Especialidad',
    Experiencia: 'Experiencia',
    Telefono: 'Telefono'
  };

  export type EntrenadoresOrderByRelevanceFieldEnum = (typeof EntrenadoresOrderByRelevanceFieldEnum)[keyof typeof EntrenadoresOrderByRelevanceFieldEnum]


  export const EspaciosOrderByRelevanceFieldEnum: {
    NombreE: 'NombreE',
    Descripcion: 'Descripcion',
    Ubicacion: 'Ubicacion'
  };

  export type EspaciosOrderByRelevanceFieldEnum = (typeof EspaciosOrderByRelevanceFieldEnum)[keyof typeof EspaciosOrderByRelevanceFieldEnum]


  export const HorariosOrderByRelevanceFieldEnum: {
    DiaSemana: 'DiaSemana'
  };

  export type HorariosOrderByRelevanceFieldEnum = (typeof HorariosOrderByRelevanceFieldEnum)[keyof typeof HorariosOrderByRelevanceFieldEnum]


  export const TalleresOrderByRelevanceFieldEnum: {
    NombreTa: 'NombreTa',
    Descripcion: 'Descripcion'
  };

  export type TalleresOrderByRelevanceFieldEnum = (typeof TalleresOrderByRelevanceFieldEnum)[keyof typeof TalleresOrderByRelevanceFieldEnum]


  export const TorneosOrderByRelevanceFieldEnum: {
    NombreT: 'NombreT'
  };

  export type TorneosOrderByRelevanceFieldEnum = (typeof TorneosOrderByRelevanceFieldEnum)[keyof typeof TorneosOrderByRelevanceFieldEnum]


  export const UsuariosOrderByRelevanceFieldEnum: {
    Usuario: 'Usuario',
    NombreU: 'NombreU',
    CorreoU: 'CorreoU',
    Contrase_a: 'Contrase_a',
    Telefono: 'Telefono'
  };

  export type UsuariosOrderByRelevanceFieldEnum = (typeof UsuariosOrderByRelevanceFieldEnum)[keyof typeof UsuariosOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Espacios_Tipo'
   */
  export type EnumEspacios_TipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Espacios_Tipo'>
    


  /**
   * Reference to a field of type 'Reservas_Estado'
   */
  export type EnumReservas_EstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Reservas_Estado'>
    


  /**
   * Reference to a field of type 'Usuarios_Nivel'
   */
  export type EnumUsuarios_NivelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Usuarios_Nivel'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ClasesWhereInput = {
    AND?: ClasesWhereInput | ClasesWhereInput[]
    OR?: ClasesWhereInput[]
    NOT?: ClasesWhereInput | ClasesWhereInput[]
    IdClase?: IntFilter<"Clases"> | number
    FkIdEntrenador?: IntFilter<"Clases"> | number
    FkIdEspacio?: IntFilter<"Clases"> | number
    FkIdHorario?: IntFilter<"Clases"> | number
    NombreC?: StringFilter<"Clases"> | string
    Descripcion?: StringNullableFilter<"Clases"> | string | null
    Entrenadores?: XOR<EntrenadoresScalarRelationFilter, EntrenadoresWhereInput>
    Espacios?: XOR<EspaciosScalarRelationFilter, EspaciosWhereInput>
    Horarios?: XOR<HorariosScalarRelationFilter, HorariosWhereInput>
    InscripcionClases?: InscripcionClasesListRelationFilter
  }

  export type ClasesOrderByWithRelationInput = {
    IdClase?: SortOrder
    FkIdEntrenador?: SortOrder
    FkIdEspacio?: SortOrder
    FkIdHorario?: SortOrder
    NombreC?: SortOrder
    Descripcion?: SortOrderInput | SortOrder
    Entrenadores?: EntrenadoresOrderByWithRelationInput
    Espacios?: EspaciosOrderByWithRelationInput
    Horarios?: HorariosOrderByWithRelationInput
    InscripcionClases?: InscripcionClasesOrderByRelationAggregateInput
    _relevance?: ClasesOrderByRelevanceInput
  }

  export type ClasesWhereUniqueInput = Prisma.AtLeast<{
    IdClase?: number
    AND?: ClasesWhereInput | ClasesWhereInput[]
    OR?: ClasesWhereInput[]
    NOT?: ClasesWhereInput | ClasesWhereInput[]
    FkIdEntrenador?: IntFilter<"Clases"> | number
    FkIdEspacio?: IntFilter<"Clases"> | number
    FkIdHorario?: IntFilter<"Clases"> | number
    NombreC?: StringFilter<"Clases"> | string
    Descripcion?: StringNullableFilter<"Clases"> | string | null
    Entrenadores?: XOR<EntrenadoresScalarRelationFilter, EntrenadoresWhereInput>
    Espacios?: XOR<EspaciosScalarRelationFilter, EspaciosWhereInput>
    Horarios?: XOR<HorariosScalarRelationFilter, HorariosWhereInput>
    InscripcionClases?: InscripcionClasesListRelationFilter
  }, "IdClase">

  export type ClasesOrderByWithAggregationInput = {
    IdClase?: SortOrder
    FkIdEntrenador?: SortOrder
    FkIdEspacio?: SortOrder
    FkIdHorario?: SortOrder
    NombreC?: SortOrder
    Descripcion?: SortOrderInput | SortOrder
    _count?: ClasesCountOrderByAggregateInput
    _avg?: ClasesAvgOrderByAggregateInput
    _max?: ClasesMaxOrderByAggregateInput
    _min?: ClasesMinOrderByAggregateInput
    _sum?: ClasesSumOrderByAggregateInput
  }

  export type ClasesScalarWhereWithAggregatesInput = {
    AND?: ClasesScalarWhereWithAggregatesInput | ClasesScalarWhereWithAggregatesInput[]
    OR?: ClasesScalarWhereWithAggregatesInput[]
    NOT?: ClasesScalarWhereWithAggregatesInput | ClasesScalarWhereWithAggregatesInput[]
    IdClase?: IntWithAggregatesFilter<"Clases"> | number
    FkIdEntrenador?: IntWithAggregatesFilter<"Clases"> | number
    FkIdEspacio?: IntWithAggregatesFilter<"Clases"> | number
    FkIdHorario?: IntWithAggregatesFilter<"Clases"> | number
    NombreC?: StringWithAggregatesFilter<"Clases"> | string
    Descripcion?: StringNullableWithAggregatesFilter<"Clases"> | string | null
  }

  export type ComentariosWhereInput = {
    AND?: ComentariosWhereInput | ComentariosWhereInput[]
    OR?: ComentariosWhereInput[]
    NOT?: ComentariosWhereInput | ComentariosWhereInput[]
    IdComentario?: IntFilter<"Comentarios"> | number
    FkIdUsuario?: IntFilter<"Comentarios"> | number
    Comentario?: StringFilter<"Comentarios"> | string
    FechaComentario?: DateTimeNullableFilter<"Comentarios"> | Date | string | null
    Usuarios?: XOR<UsuariosScalarRelationFilter, UsuariosWhereInput>
  }

  export type ComentariosOrderByWithRelationInput = {
    IdComentario?: SortOrder
    FkIdUsuario?: SortOrder
    Comentario?: SortOrder
    FechaComentario?: SortOrderInput | SortOrder
    Usuarios?: UsuariosOrderByWithRelationInput
    _relevance?: ComentariosOrderByRelevanceInput
  }

  export type ComentariosWhereUniqueInput = Prisma.AtLeast<{
    IdComentario?: number
    AND?: ComentariosWhereInput | ComentariosWhereInput[]
    OR?: ComentariosWhereInput[]
    NOT?: ComentariosWhereInput | ComentariosWhereInput[]
    FkIdUsuario?: IntFilter<"Comentarios"> | number
    Comentario?: StringFilter<"Comentarios"> | string
    FechaComentario?: DateTimeNullableFilter<"Comentarios"> | Date | string | null
    Usuarios?: XOR<UsuariosScalarRelationFilter, UsuariosWhereInput>
  }, "IdComentario">

  export type ComentariosOrderByWithAggregationInput = {
    IdComentario?: SortOrder
    FkIdUsuario?: SortOrder
    Comentario?: SortOrder
    FechaComentario?: SortOrderInput | SortOrder
    _count?: ComentariosCountOrderByAggregateInput
    _avg?: ComentariosAvgOrderByAggregateInput
    _max?: ComentariosMaxOrderByAggregateInput
    _min?: ComentariosMinOrderByAggregateInput
    _sum?: ComentariosSumOrderByAggregateInput
  }

  export type ComentariosScalarWhereWithAggregatesInput = {
    AND?: ComentariosScalarWhereWithAggregatesInput | ComentariosScalarWhereWithAggregatesInput[]
    OR?: ComentariosScalarWhereWithAggregatesInput[]
    NOT?: ComentariosScalarWhereWithAggregatesInput | ComentariosScalarWhereWithAggregatesInput[]
    IdComentario?: IntWithAggregatesFilter<"Comentarios"> | number
    FkIdUsuario?: IntWithAggregatesFilter<"Comentarios"> | number
    Comentario?: StringWithAggregatesFilter<"Comentarios"> | string
    FechaComentario?: DateTimeNullableWithAggregatesFilter<"Comentarios"> | Date | string | null
  }

  export type EntrenadoresWhereInput = {
    AND?: EntrenadoresWhereInput | EntrenadoresWhereInput[]
    OR?: EntrenadoresWhereInput[]
    NOT?: EntrenadoresWhereInput | EntrenadoresWhereInput[]
    IdEntrenador?: IntFilter<"Entrenadores"> | number
    FkIdUsuario?: IntNullableFilter<"Entrenadores"> | number | null
    Especialidad?: StringFilter<"Entrenadores"> | string
    Experiencia?: StringNullableFilter<"Entrenadores"> | string | null
    Telefono?: StringNullableFilter<"Entrenadores"> | string | null
    Clases?: ClasesListRelationFilter
    Usuarios?: XOR<UsuariosNullableScalarRelationFilter, UsuariosWhereInput> | null
    Talleres?: TalleresListRelationFilter
  }

  export type EntrenadoresOrderByWithRelationInput = {
    IdEntrenador?: SortOrder
    FkIdUsuario?: SortOrderInput | SortOrder
    Especialidad?: SortOrder
    Experiencia?: SortOrderInput | SortOrder
    Telefono?: SortOrderInput | SortOrder
    Clases?: ClasesOrderByRelationAggregateInput
    Usuarios?: UsuariosOrderByWithRelationInput
    Talleres?: TalleresOrderByRelationAggregateInput
    _relevance?: EntrenadoresOrderByRelevanceInput
  }

  export type EntrenadoresWhereUniqueInput = Prisma.AtLeast<{
    IdEntrenador?: number
    AND?: EntrenadoresWhereInput | EntrenadoresWhereInput[]
    OR?: EntrenadoresWhereInput[]
    NOT?: EntrenadoresWhereInput | EntrenadoresWhereInput[]
    FkIdUsuario?: IntNullableFilter<"Entrenadores"> | number | null
    Especialidad?: StringFilter<"Entrenadores"> | string
    Experiencia?: StringNullableFilter<"Entrenadores"> | string | null
    Telefono?: StringNullableFilter<"Entrenadores"> | string | null
    Clases?: ClasesListRelationFilter
    Usuarios?: XOR<UsuariosNullableScalarRelationFilter, UsuariosWhereInput> | null
    Talleres?: TalleresListRelationFilter
  }, "IdEntrenador">

  export type EntrenadoresOrderByWithAggregationInput = {
    IdEntrenador?: SortOrder
    FkIdUsuario?: SortOrderInput | SortOrder
    Especialidad?: SortOrder
    Experiencia?: SortOrderInput | SortOrder
    Telefono?: SortOrderInput | SortOrder
    _count?: EntrenadoresCountOrderByAggregateInput
    _avg?: EntrenadoresAvgOrderByAggregateInput
    _max?: EntrenadoresMaxOrderByAggregateInput
    _min?: EntrenadoresMinOrderByAggregateInput
    _sum?: EntrenadoresSumOrderByAggregateInput
  }

  export type EntrenadoresScalarWhereWithAggregatesInput = {
    AND?: EntrenadoresScalarWhereWithAggregatesInput | EntrenadoresScalarWhereWithAggregatesInput[]
    OR?: EntrenadoresScalarWhereWithAggregatesInput[]
    NOT?: EntrenadoresScalarWhereWithAggregatesInput | EntrenadoresScalarWhereWithAggregatesInput[]
    IdEntrenador?: IntWithAggregatesFilter<"Entrenadores"> | number
    FkIdUsuario?: IntNullableWithAggregatesFilter<"Entrenadores"> | number | null
    Especialidad?: StringWithAggregatesFilter<"Entrenadores"> | string
    Experiencia?: StringNullableWithAggregatesFilter<"Entrenadores"> | string | null
    Telefono?: StringNullableWithAggregatesFilter<"Entrenadores"> | string | null
  }

  export type EspaciosWhereInput = {
    AND?: EspaciosWhereInput | EspaciosWhereInput[]
    OR?: EspaciosWhereInput[]
    NOT?: EspaciosWhereInput | EspaciosWhereInput[]
    IdEspacio?: IntFilter<"Espacios"> | number
    NombreE?: StringFilter<"Espacios"> | string
    Tipo?: EnumEspacios_TipoFilter<"Espacios"> | $Enums.Espacios_Tipo
    Capacidad?: IntFilter<"Espacios"> | number
    Descripcion?: StringNullableFilter<"Espacios"> | string | null
    Ubicacion?: StringFilter<"Espacios"> | string
    Clases?: ClasesListRelationFilter
    Horarios?: HorariosListRelationFilter
    Reservas?: ReservasListRelationFilter
    Torneos?: TorneosListRelationFilter
  }

  export type EspaciosOrderByWithRelationInput = {
    IdEspacio?: SortOrder
    NombreE?: SortOrder
    Tipo?: SortOrder
    Capacidad?: SortOrder
    Descripcion?: SortOrderInput | SortOrder
    Ubicacion?: SortOrder
    Clases?: ClasesOrderByRelationAggregateInput
    Horarios?: HorariosOrderByRelationAggregateInput
    Reservas?: ReservasOrderByRelationAggregateInput
    Torneos?: TorneosOrderByRelationAggregateInput
    _relevance?: EspaciosOrderByRelevanceInput
  }

  export type EspaciosWhereUniqueInput = Prisma.AtLeast<{
    IdEspacio?: number
    AND?: EspaciosWhereInput | EspaciosWhereInput[]
    OR?: EspaciosWhereInput[]
    NOT?: EspaciosWhereInput | EspaciosWhereInput[]
    NombreE?: StringFilter<"Espacios"> | string
    Tipo?: EnumEspacios_TipoFilter<"Espacios"> | $Enums.Espacios_Tipo
    Capacidad?: IntFilter<"Espacios"> | number
    Descripcion?: StringNullableFilter<"Espacios"> | string | null
    Ubicacion?: StringFilter<"Espacios"> | string
    Clases?: ClasesListRelationFilter
    Horarios?: HorariosListRelationFilter
    Reservas?: ReservasListRelationFilter
    Torneos?: TorneosListRelationFilter
  }, "IdEspacio">

  export type EspaciosOrderByWithAggregationInput = {
    IdEspacio?: SortOrder
    NombreE?: SortOrder
    Tipo?: SortOrder
    Capacidad?: SortOrder
    Descripcion?: SortOrderInput | SortOrder
    Ubicacion?: SortOrder
    _count?: EspaciosCountOrderByAggregateInput
    _avg?: EspaciosAvgOrderByAggregateInput
    _max?: EspaciosMaxOrderByAggregateInput
    _min?: EspaciosMinOrderByAggregateInput
    _sum?: EspaciosSumOrderByAggregateInput
  }

  export type EspaciosScalarWhereWithAggregatesInput = {
    AND?: EspaciosScalarWhereWithAggregatesInput | EspaciosScalarWhereWithAggregatesInput[]
    OR?: EspaciosScalarWhereWithAggregatesInput[]
    NOT?: EspaciosScalarWhereWithAggregatesInput | EspaciosScalarWhereWithAggregatesInput[]
    IdEspacio?: IntWithAggregatesFilter<"Espacios"> | number
    NombreE?: StringWithAggregatesFilter<"Espacios"> | string
    Tipo?: EnumEspacios_TipoWithAggregatesFilter<"Espacios"> | $Enums.Espacios_Tipo
    Capacidad?: IntWithAggregatesFilter<"Espacios"> | number
    Descripcion?: StringNullableWithAggregatesFilter<"Espacios"> | string | null
    Ubicacion?: StringWithAggregatesFilter<"Espacios"> | string
  }

  export type HorariosWhereInput = {
    AND?: HorariosWhereInput | HorariosWhereInput[]
    OR?: HorariosWhereInput[]
    NOT?: HorariosWhereInput | HorariosWhereInput[]
    IdHorario?: IntFilter<"Horarios"> | number
    FkIdEspacio?: IntFilter<"Horarios"> | number
    DiaSemana?: StringFilter<"Horarios"> | string
    HoraInicio?: DateTimeFilter<"Horarios"> | Date | string
    HoraFin?: DateTimeFilter<"Horarios"> | Date | string
    Clases?: ClasesListRelationFilter
    Espacios?: XOR<EspaciosScalarRelationFilter, EspaciosWhereInput>
    Talleres?: TalleresListRelationFilter
    Torneos?: TorneosListRelationFilter
  }

  export type HorariosOrderByWithRelationInput = {
    IdHorario?: SortOrder
    FkIdEspacio?: SortOrder
    DiaSemana?: SortOrder
    HoraInicio?: SortOrder
    HoraFin?: SortOrder
    Clases?: ClasesOrderByRelationAggregateInput
    Espacios?: EspaciosOrderByWithRelationInput
    Talleres?: TalleresOrderByRelationAggregateInput
    Torneos?: TorneosOrderByRelationAggregateInput
    _relevance?: HorariosOrderByRelevanceInput
  }

  export type HorariosWhereUniqueInput = Prisma.AtLeast<{
    IdHorario?: number
    AND?: HorariosWhereInput | HorariosWhereInput[]
    OR?: HorariosWhereInput[]
    NOT?: HorariosWhereInput | HorariosWhereInput[]
    FkIdEspacio?: IntFilter<"Horarios"> | number
    DiaSemana?: StringFilter<"Horarios"> | string
    HoraInicio?: DateTimeFilter<"Horarios"> | Date | string
    HoraFin?: DateTimeFilter<"Horarios"> | Date | string
    Clases?: ClasesListRelationFilter
    Espacios?: XOR<EspaciosScalarRelationFilter, EspaciosWhereInput>
    Talleres?: TalleresListRelationFilter
    Torneos?: TorneosListRelationFilter
  }, "IdHorario">

  export type HorariosOrderByWithAggregationInput = {
    IdHorario?: SortOrder
    FkIdEspacio?: SortOrder
    DiaSemana?: SortOrder
    HoraInicio?: SortOrder
    HoraFin?: SortOrder
    _count?: HorariosCountOrderByAggregateInput
    _avg?: HorariosAvgOrderByAggregateInput
    _max?: HorariosMaxOrderByAggregateInput
    _min?: HorariosMinOrderByAggregateInput
    _sum?: HorariosSumOrderByAggregateInput
  }

  export type HorariosScalarWhereWithAggregatesInput = {
    AND?: HorariosScalarWhereWithAggregatesInput | HorariosScalarWhereWithAggregatesInput[]
    OR?: HorariosScalarWhereWithAggregatesInput[]
    NOT?: HorariosScalarWhereWithAggregatesInput | HorariosScalarWhereWithAggregatesInput[]
    IdHorario?: IntWithAggregatesFilter<"Horarios"> | number
    FkIdEspacio?: IntWithAggregatesFilter<"Horarios"> | number
    DiaSemana?: StringWithAggregatesFilter<"Horarios"> | string
    HoraInicio?: DateTimeWithAggregatesFilter<"Horarios"> | Date | string
    HoraFin?: DateTimeWithAggregatesFilter<"Horarios"> | Date | string
  }

  export type InscripcionClasesWhereInput = {
    AND?: InscripcionClasesWhereInput | InscripcionClasesWhereInput[]
    OR?: InscripcionClasesWhereInput[]
    NOT?: InscripcionClasesWhereInput | InscripcionClasesWhereInput[]
    IdInscripcionClase?: IntFilter<"InscripcionClases"> | number
    FkIdUsuario?: IntFilter<"InscripcionClases"> | number
    FkIdClase?: IntFilter<"InscripcionClases"> | number
    FechaI?: DateTimeNullableFilter<"InscripcionClases"> | Date | string | null
    Usuarios?: XOR<UsuariosScalarRelationFilter, UsuariosWhereInput>
    Clases?: XOR<ClasesScalarRelationFilter, ClasesWhereInput>
  }

  export type InscripcionClasesOrderByWithRelationInput = {
    IdInscripcionClase?: SortOrder
    FkIdUsuario?: SortOrder
    FkIdClase?: SortOrder
    FechaI?: SortOrderInput | SortOrder
    Usuarios?: UsuariosOrderByWithRelationInput
    Clases?: ClasesOrderByWithRelationInput
  }

  export type InscripcionClasesWhereUniqueInput = Prisma.AtLeast<{
    IdInscripcionClase?: number
    AND?: InscripcionClasesWhereInput | InscripcionClasesWhereInput[]
    OR?: InscripcionClasesWhereInput[]
    NOT?: InscripcionClasesWhereInput | InscripcionClasesWhereInput[]
    FkIdUsuario?: IntFilter<"InscripcionClases"> | number
    FkIdClase?: IntFilter<"InscripcionClases"> | number
    FechaI?: DateTimeNullableFilter<"InscripcionClases"> | Date | string | null
    Usuarios?: XOR<UsuariosScalarRelationFilter, UsuariosWhereInput>
    Clases?: XOR<ClasesScalarRelationFilter, ClasesWhereInput>
  }, "IdInscripcionClase">

  export type InscripcionClasesOrderByWithAggregationInput = {
    IdInscripcionClase?: SortOrder
    FkIdUsuario?: SortOrder
    FkIdClase?: SortOrder
    FechaI?: SortOrderInput | SortOrder
    _count?: InscripcionClasesCountOrderByAggregateInput
    _avg?: InscripcionClasesAvgOrderByAggregateInput
    _max?: InscripcionClasesMaxOrderByAggregateInput
    _min?: InscripcionClasesMinOrderByAggregateInput
    _sum?: InscripcionClasesSumOrderByAggregateInput
  }

  export type InscripcionClasesScalarWhereWithAggregatesInput = {
    AND?: InscripcionClasesScalarWhereWithAggregatesInput | InscripcionClasesScalarWhereWithAggregatesInput[]
    OR?: InscripcionClasesScalarWhereWithAggregatesInput[]
    NOT?: InscripcionClasesScalarWhereWithAggregatesInput | InscripcionClasesScalarWhereWithAggregatesInput[]
    IdInscripcionClase?: IntWithAggregatesFilter<"InscripcionClases"> | number
    FkIdUsuario?: IntWithAggregatesFilter<"InscripcionClases"> | number
    FkIdClase?: IntWithAggregatesFilter<"InscripcionClases"> | number
    FechaI?: DateTimeNullableWithAggregatesFilter<"InscripcionClases"> | Date | string | null
  }

  export type InscripcionTorneosWhereInput = {
    AND?: InscripcionTorneosWhereInput | InscripcionTorneosWhereInput[]
    OR?: InscripcionTorneosWhereInput[]
    NOT?: InscripcionTorneosWhereInput | InscripcionTorneosWhereInput[]
    IdInscripcionTorneo?: IntFilter<"InscripcionTorneos"> | number
    FkIdUsuario?: IntFilter<"InscripcionTorneos"> | number
    FkIdTorneo?: IntFilter<"InscripcionTorneos"> | number
    FechaI?: DateTimeNullableFilter<"InscripcionTorneos"> | Date | string | null
    Usuarios?: XOR<UsuariosScalarRelationFilter, UsuariosWhereInput>
    Torneos?: XOR<TorneosScalarRelationFilter, TorneosWhereInput>
  }

  export type InscripcionTorneosOrderByWithRelationInput = {
    IdInscripcionTorneo?: SortOrder
    FkIdUsuario?: SortOrder
    FkIdTorneo?: SortOrder
    FechaI?: SortOrderInput | SortOrder
    Usuarios?: UsuariosOrderByWithRelationInput
    Torneos?: TorneosOrderByWithRelationInput
  }

  export type InscripcionTorneosWhereUniqueInput = Prisma.AtLeast<{
    IdInscripcionTorneo?: number
    AND?: InscripcionTorneosWhereInput | InscripcionTorneosWhereInput[]
    OR?: InscripcionTorneosWhereInput[]
    NOT?: InscripcionTorneosWhereInput | InscripcionTorneosWhereInput[]
    FkIdUsuario?: IntFilter<"InscripcionTorneos"> | number
    FkIdTorneo?: IntFilter<"InscripcionTorneos"> | number
    FechaI?: DateTimeNullableFilter<"InscripcionTorneos"> | Date | string | null
    Usuarios?: XOR<UsuariosScalarRelationFilter, UsuariosWhereInput>
    Torneos?: XOR<TorneosScalarRelationFilter, TorneosWhereInput>
  }, "IdInscripcionTorneo">

  export type InscripcionTorneosOrderByWithAggregationInput = {
    IdInscripcionTorneo?: SortOrder
    FkIdUsuario?: SortOrder
    FkIdTorneo?: SortOrder
    FechaI?: SortOrderInput | SortOrder
    _count?: InscripcionTorneosCountOrderByAggregateInput
    _avg?: InscripcionTorneosAvgOrderByAggregateInput
    _max?: InscripcionTorneosMaxOrderByAggregateInput
    _min?: InscripcionTorneosMinOrderByAggregateInput
    _sum?: InscripcionTorneosSumOrderByAggregateInput
  }

  export type InscripcionTorneosScalarWhereWithAggregatesInput = {
    AND?: InscripcionTorneosScalarWhereWithAggregatesInput | InscripcionTorneosScalarWhereWithAggregatesInput[]
    OR?: InscripcionTorneosScalarWhereWithAggregatesInput[]
    NOT?: InscripcionTorneosScalarWhereWithAggregatesInput | InscripcionTorneosScalarWhereWithAggregatesInput[]
    IdInscripcionTorneo?: IntWithAggregatesFilter<"InscripcionTorneos"> | number
    FkIdUsuario?: IntWithAggregatesFilter<"InscripcionTorneos"> | number
    FkIdTorneo?: IntWithAggregatesFilter<"InscripcionTorneos"> | number
    FechaI?: DateTimeNullableWithAggregatesFilter<"InscripcionTorneos"> | Date | string | null
  }

  export type ReservasWhereInput = {
    AND?: ReservasWhereInput | ReservasWhereInput[]
    OR?: ReservasWhereInput[]
    NOT?: ReservasWhereInput | ReservasWhereInput[]
    IdReserva?: IntFilter<"Reservas"> | number
    FkIdUsuario?: IntFilter<"Reservas"> | number
    FkIdEspacio?: IntFilter<"Reservas"> | number
    FechaReserva?: DateTimeFilter<"Reservas"> | Date | string
    HoraInicioR?: DateTimeFilter<"Reservas"> | Date | string
    HoraFinR?: DateTimeFilter<"Reservas"> | Date | string
    Estado?: EnumReservas_EstadoNullableFilter<"Reservas"> | $Enums.Reservas_Estado | null
    Usuarios?: XOR<UsuariosScalarRelationFilter, UsuariosWhereInput>
    Espacios?: XOR<EspaciosScalarRelationFilter, EspaciosWhereInput>
  }

  export type ReservasOrderByWithRelationInput = {
    IdReserva?: SortOrder
    FkIdUsuario?: SortOrder
    FkIdEspacio?: SortOrder
    FechaReserva?: SortOrder
    HoraInicioR?: SortOrder
    HoraFinR?: SortOrder
    Estado?: SortOrderInput | SortOrder
    Usuarios?: UsuariosOrderByWithRelationInput
    Espacios?: EspaciosOrderByWithRelationInput
  }

  export type ReservasWhereUniqueInput = Prisma.AtLeast<{
    IdReserva?: number
    AND?: ReservasWhereInput | ReservasWhereInput[]
    OR?: ReservasWhereInput[]
    NOT?: ReservasWhereInput | ReservasWhereInput[]
    FkIdUsuario?: IntFilter<"Reservas"> | number
    FkIdEspacio?: IntFilter<"Reservas"> | number
    FechaReserva?: DateTimeFilter<"Reservas"> | Date | string
    HoraInicioR?: DateTimeFilter<"Reservas"> | Date | string
    HoraFinR?: DateTimeFilter<"Reservas"> | Date | string
    Estado?: EnumReservas_EstadoNullableFilter<"Reservas"> | $Enums.Reservas_Estado | null
    Usuarios?: XOR<UsuariosScalarRelationFilter, UsuariosWhereInput>
    Espacios?: XOR<EspaciosScalarRelationFilter, EspaciosWhereInput>
  }, "IdReserva">

  export type ReservasOrderByWithAggregationInput = {
    IdReserva?: SortOrder
    FkIdUsuario?: SortOrder
    FkIdEspacio?: SortOrder
    FechaReserva?: SortOrder
    HoraInicioR?: SortOrder
    HoraFinR?: SortOrder
    Estado?: SortOrderInput | SortOrder
    _count?: ReservasCountOrderByAggregateInput
    _avg?: ReservasAvgOrderByAggregateInput
    _max?: ReservasMaxOrderByAggregateInput
    _min?: ReservasMinOrderByAggregateInput
    _sum?: ReservasSumOrderByAggregateInput
  }

  export type ReservasScalarWhereWithAggregatesInput = {
    AND?: ReservasScalarWhereWithAggregatesInput | ReservasScalarWhereWithAggregatesInput[]
    OR?: ReservasScalarWhereWithAggregatesInput[]
    NOT?: ReservasScalarWhereWithAggregatesInput | ReservasScalarWhereWithAggregatesInput[]
    IdReserva?: IntWithAggregatesFilter<"Reservas"> | number
    FkIdUsuario?: IntWithAggregatesFilter<"Reservas"> | number
    FkIdEspacio?: IntWithAggregatesFilter<"Reservas"> | number
    FechaReserva?: DateTimeWithAggregatesFilter<"Reservas"> | Date | string
    HoraInicioR?: DateTimeWithAggregatesFilter<"Reservas"> | Date | string
    HoraFinR?: DateTimeWithAggregatesFilter<"Reservas"> | Date | string
    Estado?: EnumReservas_EstadoNullableWithAggregatesFilter<"Reservas"> | $Enums.Reservas_Estado | null
  }

  export type TalleresWhereInput = {
    AND?: TalleresWhereInput | TalleresWhereInput[]
    OR?: TalleresWhereInput[]
    NOT?: TalleresWhereInput | TalleresWhereInput[]
    IdTaller?: IntFilter<"Talleres"> | number
    NombreTa?: StringFilter<"Talleres"> | string
    Descripcion?: StringNullableFilter<"Talleres"> | string | null
    FkIdEntrenador?: IntFilter<"Talleres"> | number
    FkIdHorario?: IntFilter<"Talleres"> | number
    Entrenadores?: XOR<EntrenadoresScalarRelationFilter, EntrenadoresWhereInput>
    Horarios?: XOR<HorariosScalarRelationFilter, HorariosWhereInput>
  }

  export type TalleresOrderByWithRelationInput = {
    IdTaller?: SortOrder
    NombreTa?: SortOrder
    Descripcion?: SortOrderInput | SortOrder
    FkIdEntrenador?: SortOrder
    FkIdHorario?: SortOrder
    Entrenadores?: EntrenadoresOrderByWithRelationInput
    Horarios?: HorariosOrderByWithRelationInput
    _relevance?: TalleresOrderByRelevanceInput
  }

  export type TalleresWhereUniqueInput = Prisma.AtLeast<{
    IdTaller?: number
    AND?: TalleresWhereInput | TalleresWhereInput[]
    OR?: TalleresWhereInput[]
    NOT?: TalleresWhereInput | TalleresWhereInput[]
    NombreTa?: StringFilter<"Talleres"> | string
    Descripcion?: StringNullableFilter<"Talleres"> | string | null
    FkIdEntrenador?: IntFilter<"Talleres"> | number
    FkIdHorario?: IntFilter<"Talleres"> | number
    Entrenadores?: XOR<EntrenadoresScalarRelationFilter, EntrenadoresWhereInput>
    Horarios?: XOR<HorariosScalarRelationFilter, HorariosWhereInput>
  }, "IdTaller">

  export type TalleresOrderByWithAggregationInput = {
    IdTaller?: SortOrder
    NombreTa?: SortOrder
    Descripcion?: SortOrderInput | SortOrder
    FkIdEntrenador?: SortOrder
    FkIdHorario?: SortOrder
    _count?: TalleresCountOrderByAggregateInput
    _avg?: TalleresAvgOrderByAggregateInput
    _max?: TalleresMaxOrderByAggregateInput
    _min?: TalleresMinOrderByAggregateInput
    _sum?: TalleresSumOrderByAggregateInput
  }

  export type TalleresScalarWhereWithAggregatesInput = {
    AND?: TalleresScalarWhereWithAggregatesInput | TalleresScalarWhereWithAggregatesInput[]
    OR?: TalleresScalarWhereWithAggregatesInput[]
    NOT?: TalleresScalarWhereWithAggregatesInput | TalleresScalarWhereWithAggregatesInput[]
    IdTaller?: IntWithAggregatesFilter<"Talleres"> | number
    NombreTa?: StringWithAggregatesFilter<"Talleres"> | string
    Descripcion?: StringNullableWithAggregatesFilter<"Talleres"> | string | null
    FkIdEntrenador?: IntWithAggregatesFilter<"Talleres"> | number
    FkIdHorario?: IntWithAggregatesFilter<"Talleres"> | number
  }

  export type TorneosWhereInput = {
    AND?: TorneosWhereInput | TorneosWhereInput[]
    OR?: TorneosWhereInput[]
    NOT?: TorneosWhereInput | TorneosWhereInput[]
    IdTorneo?: IntFilter<"Torneos"> | number
    NombreT?: StringFilter<"Torneos"> | string
    FechaInicioT?: DateTimeFilter<"Torneos"> | Date | string
    FechaFinT?: DateTimeFilter<"Torneos"> | Date | string
    FkIdEspacio?: IntNullableFilter<"Torneos"> | number | null
    FkIdHorario?: IntNullableFilter<"Torneos"> | number | null
    InscripcionTorneos?: InscripcionTorneosListRelationFilter
    Espacios?: XOR<EspaciosNullableScalarRelationFilter, EspaciosWhereInput> | null
    Horarios?: XOR<HorariosNullableScalarRelationFilter, HorariosWhereInput> | null
  }

  export type TorneosOrderByWithRelationInput = {
    IdTorneo?: SortOrder
    NombreT?: SortOrder
    FechaInicioT?: SortOrder
    FechaFinT?: SortOrder
    FkIdEspacio?: SortOrderInput | SortOrder
    FkIdHorario?: SortOrderInput | SortOrder
    InscripcionTorneos?: InscripcionTorneosOrderByRelationAggregateInput
    Espacios?: EspaciosOrderByWithRelationInput
    Horarios?: HorariosOrderByWithRelationInput
    _relevance?: TorneosOrderByRelevanceInput
  }

  export type TorneosWhereUniqueInput = Prisma.AtLeast<{
    IdTorneo?: number
    AND?: TorneosWhereInput | TorneosWhereInput[]
    OR?: TorneosWhereInput[]
    NOT?: TorneosWhereInput | TorneosWhereInput[]
    NombreT?: StringFilter<"Torneos"> | string
    FechaInicioT?: DateTimeFilter<"Torneos"> | Date | string
    FechaFinT?: DateTimeFilter<"Torneos"> | Date | string
    FkIdEspacio?: IntNullableFilter<"Torneos"> | number | null
    FkIdHorario?: IntNullableFilter<"Torneos"> | number | null
    InscripcionTorneos?: InscripcionTorneosListRelationFilter
    Espacios?: XOR<EspaciosNullableScalarRelationFilter, EspaciosWhereInput> | null
    Horarios?: XOR<HorariosNullableScalarRelationFilter, HorariosWhereInput> | null
  }, "IdTorneo">

  export type TorneosOrderByWithAggregationInput = {
    IdTorneo?: SortOrder
    NombreT?: SortOrder
    FechaInicioT?: SortOrder
    FechaFinT?: SortOrder
    FkIdEspacio?: SortOrderInput | SortOrder
    FkIdHorario?: SortOrderInput | SortOrder
    _count?: TorneosCountOrderByAggregateInput
    _avg?: TorneosAvgOrderByAggregateInput
    _max?: TorneosMaxOrderByAggregateInput
    _min?: TorneosMinOrderByAggregateInput
    _sum?: TorneosSumOrderByAggregateInput
  }

  export type TorneosScalarWhereWithAggregatesInput = {
    AND?: TorneosScalarWhereWithAggregatesInput | TorneosScalarWhereWithAggregatesInput[]
    OR?: TorneosScalarWhereWithAggregatesInput[]
    NOT?: TorneosScalarWhereWithAggregatesInput | TorneosScalarWhereWithAggregatesInput[]
    IdTorneo?: IntWithAggregatesFilter<"Torneos"> | number
    NombreT?: StringWithAggregatesFilter<"Torneos"> | string
    FechaInicioT?: DateTimeWithAggregatesFilter<"Torneos"> | Date | string
    FechaFinT?: DateTimeWithAggregatesFilter<"Torneos"> | Date | string
    FkIdEspacio?: IntNullableWithAggregatesFilter<"Torneos"> | number | null
    FkIdHorario?: IntNullableWithAggregatesFilter<"Torneos"> | number | null
  }

  export type UsuariosWhereInput = {
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    IdUsuario?: IntFilter<"Usuarios"> | number
    Usuario?: StringFilter<"Usuarios"> | string
    NombreU?: StringFilter<"Usuarios"> | string
    CorreoU?: StringFilter<"Usuarios"> | string
    Contrase_a?: StringFilter<"Usuarios"> | string
    Nivel?: EnumUsuarios_NivelFilter<"Usuarios"> | $Enums.Usuarios_Nivel
    FechaRegistro?: DateTimeNullableFilter<"Usuarios"> | Date | string | null
    Telefono?: StringNullableFilter<"Usuarios"> | string | null
    Comentarios?: ComentariosListRelationFilter
    Entrenadores?: EntrenadoresListRelationFilter
    InscripcionClases?: InscripcionClasesListRelationFilter
    InscripcionTorneos?: InscripcionTorneosListRelationFilter
    Reservas?: ReservasListRelationFilter
  }

  export type UsuariosOrderByWithRelationInput = {
    IdUsuario?: SortOrder
    Usuario?: SortOrder
    NombreU?: SortOrder
    CorreoU?: SortOrder
    Contrase_a?: SortOrder
    Nivel?: SortOrder
    FechaRegistro?: SortOrderInput | SortOrder
    Telefono?: SortOrderInput | SortOrder
    Comentarios?: ComentariosOrderByRelationAggregateInput
    Entrenadores?: EntrenadoresOrderByRelationAggregateInput
    InscripcionClases?: InscripcionClasesOrderByRelationAggregateInput
    InscripcionTorneos?: InscripcionTorneosOrderByRelationAggregateInput
    Reservas?: ReservasOrderByRelationAggregateInput
    _relevance?: UsuariosOrderByRelevanceInput
  }

  export type UsuariosWhereUniqueInput = Prisma.AtLeast<{
    IdUsuario?: number
    CorreoU?: string
    AND?: UsuariosWhereInput | UsuariosWhereInput[]
    OR?: UsuariosWhereInput[]
    NOT?: UsuariosWhereInput | UsuariosWhereInput[]
    Usuario?: StringFilter<"Usuarios"> | string
    NombreU?: StringFilter<"Usuarios"> | string
    Contrase_a?: StringFilter<"Usuarios"> | string
    Nivel?: EnumUsuarios_NivelFilter<"Usuarios"> | $Enums.Usuarios_Nivel
    FechaRegistro?: DateTimeNullableFilter<"Usuarios"> | Date | string | null
    Telefono?: StringNullableFilter<"Usuarios"> | string | null
    Comentarios?: ComentariosListRelationFilter
    Entrenadores?: EntrenadoresListRelationFilter
    InscripcionClases?: InscripcionClasesListRelationFilter
    InscripcionTorneos?: InscripcionTorneosListRelationFilter
    Reservas?: ReservasListRelationFilter
  }, "IdUsuario" | "CorreoU">

  export type UsuariosOrderByWithAggregationInput = {
    IdUsuario?: SortOrder
    Usuario?: SortOrder
    NombreU?: SortOrder
    CorreoU?: SortOrder
    Contrase_a?: SortOrder
    Nivel?: SortOrder
    FechaRegistro?: SortOrderInput | SortOrder
    Telefono?: SortOrderInput | SortOrder
    _count?: UsuariosCountOrderByAggregateInput
    _avg?: UsuariosAvgOrderByAggregateInput
    _max?: UsuariosMaxOrderByAggregateInput
    _min?: UsuariosMinOrderByAggregateInput
    _sum?: UsuariosSumOrderByAggregateInput
  }

  export type UsuariosScalarWhereWithAggregatesInput = {
    AND?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    OR?: UsuariosScalarWhereWithAggregatesInput[]
    NOT?: UsuariosScalarWhereWithAggregatesInput | UsuariosScalarWhereWithAggregatesInput[]
    IdUsuario?: IntWithAggregatesFilter<"Usuarios"> | number
    Usuario?: StringWithAggregatesFilter<"Usuarios"> | string
    NombreU?: StringWithAggregatesFilter<"Usuarios"> | string
    CorreoU?: StringWithAggregatesFilter<"Usuarios"> | string
    Contrase_a?: StringWithAggregatesFilter<"Usuarios"> | string
    Nivel?: EnumUsuarios_NivelWithAggregatesFilter<"Usuarios"> | $Enums.Usuarios_Nivel
    FechaRegistro?: DateTimeNullableWithAggregatesFilter<"Usuarios"> | Date | string | null
    Telefono?: StringNullableWithAggregatesFilter<"Usuarios"> | string | null
  }

  export type ClasesCreateInput = {
    NombreC: string
    Descripcion?: string | null
    Entrenadores: EntrenadoresCreateNestedOneWithoutClasesInput
    Espacios: EspaciosCreateNestedOneWithoutClasesInput
    Horarios: HorariosCreateNestedOneWithoutClasesInput
    InscripcionClases?: InscripcionClasesCreateNestedManyWithoutClasesInput
  }

  export type ClasesUncheckedCreateInput = {
    IdClase?: number
    FkIdEntrenador: number
    FkIdEspacio: number
    FkIdHorario: number
    NombreC: string
    Descripcion?: string | null
    InscripcionClases?: InscripcionClasesUncheckedCreateNestedManyWithoutClasesInput
  }

  export type ClasesUpdateInput = {
    NombreC?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Entrenadores?: EntrenadoresUpdateOneRequiredWithoutClasesNestedInput
    Espacios?: EspaciosUpdateOneRequiredWithoutClasesNestedInput
    Horarios?: HorariosUpdateOneRequiredWithoutClasesNestedInput
    InscripcionClases?: InscripcionClasesUpdateManyWithoutClasesNestedInput
  }

  export type ClasesUncheckedUpdateInput = {
    IdClase?: IntFieldUpdateOperationsInput | number
    FkIdEntrenador?: IntFieldUpdateOperationsInput | number
    FkIdEspacio?: IntFieldUpdateOperationsInput | number
    FkIdHorario?: IntFieldUpdateOperationsInput | number
    NombreC?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    InscripcionClases?: InscripcionClasesUncheckedUpdateManyWithoutClasesNestedInput
  }

  export type ClasesCreateManyInput = {
    IdClase?: number
    FkIdEntrenador: number
    FkIdEspacio: number
    FkIdHorario: number
    NombreC: string
    Descripcion?: string | null
  }

  export type ClasesUpdateManyMutationInput = {
    NombreC?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClasesUncheckedUpdateManyInput = {
    IdClase?: IntFieldUpdateOperationsInput | number
    FkIdEntrenador?: IntFieldUpdateOperationsInput | number
    FkIdEspacio?: IntFieldUpdateOperationsInput | number
    FkIdHorario?: IntFieldUpdateOperationsInput | number
    NombreC?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComentariosCreateInput = {
    Comentario: string
    FechaComentario?: Date | string | null
    Usuarios: UsuariosCreateNestedOneWithoutComentariosInput
  }

  export type ComentariosUncheckedCreateInput = {
    IdComentario?: number
    FkIdUsuario: number
    Comentario: string
    FechaComentario?: Date | string | null
  }

  export type ComentariosUpdateInput = {
    Comentario?: StringFieldUpdateOperationsInput | string
    FechaComentario?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Usuarios?: UsuariosUpdateOneRequiredWithoutComentariosNestedInput
  }

  export type ComentariosUncheckedUpdateInput = {
    IdComentario?: IntFieldUpdateOperationsInput | number
    FkIdUsuario?: IntFieldUpdateOperationsInput | number
    Comentario?: StringFieldUpdateOperationsInput | string
    FechaComentario?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ComentariosCreateManyInput = {
    IdComentario?: number
    FkIdUsuario: number
    Comentario: string
    FechaComentario?: Date | string | null
  }

  export type ComentariosUpdateManyMutationInput = {
    Comentario?: StringFieldUpdateOperationsInput | string
    FechaComentario?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ComentariosUncheckedUpdateManyInput = {
    IdComentario?: IntFieldUpdateOperationsInput | number
    FkIdUsuario?: IntFieldUpdateOperationsInput | number
    Comentario?: StringFieldUpdateOperationsInput | string
    FechaComentario?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EntrenadoresCreateInput = {
    Especialidad: string
    Experiencia?: string | null
    Telefono?: string | null
    Clases?: ClasesCreateNestedManyWithoutEntrenadoresInput
    Usuarios?: UsuariosCreateNestedOneWithoutEntrenadoresInput
    Talleres?: TalleresCreateNestedManyWithoutEntrenadoresInput
  }

  export type EntrenadoresUncheckedCreateInput = {
    IdEntrenador?: number
    FkIdUsuario?: number | null
    Especialidad: string
    Experiencia?: string | null
    Telefono?: string | null
    Clases?: ClasesUncheckedCreateNestedManyWithoutEntrenadoresInput
    Talleres?: TalleresUncheckedCreateNestedManyWithoutEntrenadoresInput
  }

  export type EntrenadoresUpdateInput = {
    Especialidad?: StringFieldUpdateOperationsInput | string
    Experiencia?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Clases?: ClasesUpdateManyWithoutEntrenadoresNestedInput
    Usuarios?: UsuariosUpdateOneWithoutEntrenadoresNestedInput
    Talleres?: TalleresUpdateManyWithoutEntrenadoresNestedInput
  }

  export type EntrenadoresUncheckedUpdateInput = {
    IdEntrenador?: IntFieldUpdateOperationsInput | number
    FkIdUsuario?: NullableIntFieldUpdateOperationsInput | number | null
    Especialidad?: StringFieldUpdateOperationsInput | string
    Experiencia?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Clases?: ClasesUncheckedUpdateManyWithoutEntrenadoresNestedInput
    Talleres?: TalleresUncheckedUpdateManyWithoutEntrenadoresNestedInput
  }

  export type EntrenadoresCreateManyInput = {
    IdEntrenador?: number
    FkIdUsuario?: number | null
    Especialidad: string
    Experiencia?: string | null
    Telefono?: string | null
  }

  export type EntrenadoresUpdateManyMutationInput = {
    Especialidad?: StringFieldUpdateOperationsInput | string
    Experiencia?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EntrenadoresUncheckedUpdateManyInput = {
    IdEntrenador?: IntFieldUpdateOperationsInput | number
    FkIdUsuario?: NullableIntFieldUpdateOperationsInput | number | null
    Especialidad?: StringFieldUpdateOperationsInput | string
    Experiencia?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EspaciosCreateInput = {
    NombreE: string
    Tipo: $Enums.Espacios_Tipo
    Capacidad: number
    Descripcion?: string | null
    Ubicacion: string
    Clases?: ClasesCreateNestedManyWithoutEspaciosInput
    Horarios?: HorariosCreateNestedManyWithoutEspaciosInput
    Reservas?: ReservasCreateNestedManyWithoutEspaciosInput
    Torneos?: TorneosCreateNestedManyWithoutEspaciosInput
  }

  export type EspaciosUncheckedCreateInput = {
    IdEspacio?: number
    NombreE: string
    Tipo: $Enums.Espacios_Tipo
    Capacidad: number
    Descripcion?: string | null
    Ubicacion: string
    Clases?: ClasesUncheckedCreateNestedManyWithoutEspaciosInput
    Horarios?: HorariosUncheckedCreateNestedManyWithoutEspaciosInput
    Reservas?: ReservasUncheckedCreateNestedManyWithoutEspaciosInput
    Torneos?: TorneosUncheckedCreateNestedManyWithoutEspaciosInput
  }

  export type EspaciosUpdateInput = {
    NombreE?: StringFieldUpdateOperationsInput | string
    Tipo?: EnumEspacios_TipoFieldUpdateOperationsInput | $Enums.Espacios_Tipo
    Capacidad?: IntFieldUpdateOperationsInput | number
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Ubicacion?: StringFieldUpdateOperationsInput | string
    Clases?: ClasesUpdateManyWithoutEspaciosNestedInput
    Horarios?: HorariosUpdateManyWithoutEspaciosNestedInput
    Reservas?: ReservasUpdateManyWithoutEspaciosNestedInput
    Torneos?: TorneosUpdateManyWithoutEspaciosNestedInput
  }

  export type EspaciosUncheckedUpdateInput = {
    IdEspacio?: IntFieldUpdateOperationsInput | number
    NombreE?: StringFieldUpdateOperationsInput | string
    Tipo?: EnumEspacios_TipoFieldUpdateOperationsInput | $Enums.Espacios_Tipo
    Capacidad?: IntFieldUpdateOperationsInput | number
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Ubicacion?: StringFieldUpdateOperationsInput | string
    Clases?: ClasesUncheckedUpdateManyWithoutEspaciosNestedInput
    Horarios?: HorariosUncheckedUpdateManyWithoutEspaciosNestedInput
    Reservas?: ReservasUncheckedUpdateManyWithoutEspaciosNestedInput
    Torneos?: TorneosUncheckedUpdateManyWithoutEspaciosNestedInput
  }

  export type EspaciosCreateManyInput = {
    IdEspacio?: number
    NombreE: string
    Tipo: $Enums.Espacios_Tipo
    Capacidad: number
    Descripcion?: string | null
    Ubicacion: string
  }

  export type EspaciosUpdateManyMutationInput = {
    NombreE?: StringFieldUpdateOperationsInput | string
    Tipo?: EnumEspacios_TipoFieldUpdateOperationsInput | $Enums.Espacios_Tipo
    Capacidad?: IntFieldUpdateOperationsInput | number
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Ubicacion?: StringFieldUpdateOperationsInput | string
  }

  export type EspaciosUncheckedUpdateManyInput = {
    IdEspacio?: IntFieldUpdateOperationsInput | number
    NombreE?: StringFieldUpdateOperationsInput | string
    Tipo?: EnumEspacios_TipoFieldUpdateOperationsInput | $Enums.Espacios_Tipo
    Capacidad?: IntFieldUpdateOperationsInput | number
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Ubicacion?: StringFieldUpdateOperationsInput | string
  }

  export type HorariosCreateInput = {
    DiaSemana: string
    HoraInicio: Date | string
    HoraFin: Date | string
    Clases?: ClasesCreateNestedManyWithoutHorariosInput
    Espacios: EspaciosCreateNestedOneWithoutHorariosInput
    Talleres?: TalleresCreateNestedManyWithoutHorariosInput
    Torneos?: TorneosCreateNestedManyWithoutHorariosInput
  }

  export type HorariosUncheckedCreateInput = {
    IdHorario?: number
    FkIdEspacio: number
    DiaSemana: string
    HoraInicio: Date | string
    HoraFin: Date | string
    Clases?: ClasesUncheckedCreateNestedManyWithoutHorariosInput
    Talleres?: TalleresUncheckedCreateNestedManyWithoutHorariosInput
    Torneos?: TorneosUncheckedCreateNestedManyWithoutHorariosInput
  }

  export type HorariosUpdateInput = {
    DiaSemana?: StringFieldUpdateOperationsInput | string
    HoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraFin?: DateTimeFieldUpdateOperationsInput | Date | string
    Clases?: ClasesUpdateManyWithoutHorariosNestedInput
    Espacios?: EspaciosUpdateOneRequiredWithoutHorariosNestedInput
    Talleres?: TalleresUpdateManyWithoutHorariosNestedInput
    Torneos?: TorneosUpdateManyWithoutHorariosNestedInput
  }

  export type HorariosUncheckedUpdateInput = {
    IdHorario?: IntFieldUpdateOperationsInput | number
    FkIdEspacio?: IntFieldUpdateOperationsInput | number
    DiaSemana?: StringFieldUpdateOperationsInput | string
    HoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraFin?: DateTimeFieldUpdateOperationsInput | Date | string
    Clases?: ClasesUncheckedUpdateManyWithoutHorariosNestedInput
    Talleres?: TalleresUncheckedUpdateManyWithoutHorariosNestedInput
    Torneos?: TorneosUncheckedUpdateManyWithoutHorariosNestedInput
  }

  export type HorariosCreateManyInput = {
    IdHorario?: number
    FkIdEspacio: number
    DiaSemana: string
    HoraInicio: Date | string
    HoraFin: Date | string
  }

  export type HorariosUpdateManyMutationInput = {
    DiaSemana?: StringFieldUpdateOperationsInput | string
    HoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraFin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HorariosUncheckedUpdateManyInput = {
    IdHorario?: IntFieldUpdateOperationsInput | number
    FkIdEspacio?: IntFieldUpdateOperationsInput | number
    DiaSemana?: StringFieldUpdateOperationsInput | string
    HoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraFin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InscripcionClasesCreateInput = {
    FechaI?: Date | string | null
    Usuarios: UsuariosCreateNestedOneWithoutInscripcionClasesInput
    Clases: ClasesCreateNestedOneWithoutInscripcionClasesInput
  }

  export type InscripcionClasesUncheckedCreateInput = {
    IdInscripcionClase?: number
    FkIdUsuario: number
    FkIdClase: number
    FechaI?: Date | string | null
  }

  export type InscripcionClasesUpdateInput = {
    FechaI?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Usuarios?: UsuariosUpdateOneRequiredWithoutInscripcionClasesNestedInput
    Clases?: ClasesUpdateOneRequiredWithoutInscripcionClasesNestedInput
  }

  export type InscripcionClasesUncheckedUpdateInput = {
    IdInscripcionClase?: IntFieldUpdateOperationsInput | number
    FkIdUsuario?: IntFieldUpdateOperationsInput | number
    FkIdClase?: IntFieldUpdateOperationsInput | number
    FechaI?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InscripcionClasesCreateManyInput = {
    IdInscripcionClase?: number
    FkIdUsuario: number
    FkIdClase: number
    FechaI?: Date | string | null
  }

  export type InscripcionClasesUpdateManyMutationInput = {
    FechaI?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InscripcionClasesUncheckedUpdateManyInput = {
    IdInscripcionClase?: IntFieldUpdateOperationsInput | number
    FkIdUsuario?: IntFieldUpdateOperationsInput | number
    FkIdClase?: IntFieldUpdateOperationsInput | number
    FechaI?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InscripcionTorneosCreateInput = {
    FechaI?: Date | string | null
    Usuarios: UsuariosCreateNestedOneWithoutInscripcionTorneosInput
    Torneos: TorneosCreateNestedOneWithoutInscripcionTorneosInput
  }

  export type InscripcionTorneosUncheckedCreateInput = {
    IdInscripcionTorneo?: number
    FkIdUsuario: number
    FkIdTorneo: number
    FechaI?: Date | string | null
  }

  export type InscripcionTorneosUpdateInput = {
    FechaI?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Usuarios?: UsuariosUpdateOneRequiredWithoutInscripcionTorneosNestedInput
    Torneos?: TorneosUpdateOneRequiredWithoutInscripcionTorneosNestedInput
  }

  export type InscripcionTorneosUncheckedUpdateInput = {
    IdInscripcionTorneo?: IntFieldUpdateOperationsInput | number
    FkIdUsuario?: IntFieldUpdateOperationsInput | number
    FkIdTorneo?: IntFieldUpdateOperationsInput | number
    FechaI?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InscripcionTorneosCreateManyInput = {
    IdInscripcionTorneo?: number
    FkIdUsuario: number
    FkIdTorneo: number
    FechaI?: Date | string | null
  }

  export type InscripcionTorneosUpdateManyMutationInput = {
    FechaI?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InscripcionTorneosUncheckedUpdateManyInput = {
    IdInscripcionTorneo?: IntFieldUpdateOperationsInput | number
    FkIdUsuario?: IntFieldUpdateOperationsInput | number
    FkIdTorneo?: IntFieldUpdateOperationsInput | number
    FechaI?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReservasCreateInput = {
    FechaReserva: Date | string
    HoraInicioR: Date | string
    HoraFinR: Date | string
    Estado?: $Enums.Reservas_Estado | null
    Usuarios: UsuariosCreateNestedOneWithoutReservasInput
    Espacios: EspaciosCreateNestedOneWithoutReservasInput
  }

  export type ReservasUncheckedCreateInput = {
    IdReserva?: number
    FkIdUsuario: number
    FkIdEspacio: number
    FechaReserva: Date | string
    HoraInicioR: Date | string
    HoraFinR: Date | string
    Estado?: $Enums.Reservas_Estado | null
  }

  export type ReservasUpdateInput = {
    FechaReserva?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraInicioR?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraFinR?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado?: NullableEnumReservas_EstadoFieldUpdateOperationsInput | $Enums.Reservas_Estado | null
    Usuarios?: UsuariosUpdateOneRequiredWithoutReservasNestedInput
    Espacios?: EspaciosUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservasUncheckedUpdateInput = {
    IdReserva?: IntFieldUpdateOperationsInput | number
    FkIdUsuario?: IntFieldUpdateOperationsInput | number
    FkIdEspacio?: IntFieldUpdateOperationsInput | number
    FechaReserva?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraInicioR?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraFinR?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado?: NullableEnumReservas_EstadoFieldUpdateOperationsInput | $Enums.Reservas_Estado | null
  }

  export type ReservasCreateManyInput = {
    IdReserva?: number
    FkIdUsuario: number
    FkIdEspacio: number
    FechaReserva: Date | string
    HoraInicioR: Date | string
    HoraFinR: Date | string
    Estado?: $Enums.Reservas_Estado | null
  }

  export type ReservasUpdateManyMutationInput = {
    FechaReserva?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraInicioR?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraFinR?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado?: NullableEnumReservas_EstadoFieldUpdateOperationsInput | $Enums.Reservas_Estado | null
  }

  export type ReservasUncheckedUpdateManyInput = {
    IdReserva?: IntFieldUpdateOperationsInput | number
    FkIdUsuario?: IntFieldUpdateOperationsInput | number
    FkIdEspacio?: IntFieldUpdateOperationsInput | number
    FechaReserva?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraInicioR?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraFinR?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado?: NullableEnumReservas_EstadoFieldUpdateOperationsInput | $Enums.Reservas_Estado | null
  }

  export type TalleresCreateInput = {
    NombreTa: string
    Descripcion?: string | null
    Entrenadores: EntrenadoresCreateNestedOneWithoutTalleresInput
    Horarios: HorariosCreateNestedOneWithoutTalleresInput
  }

  export type TalleresUncheckedCreateInput = {
    IdTaller?: number
    NombreTa: string
    Descripcion?: string | null
    FkIdEntrenador: number
    FkIdHorario: number
  }

  export type TalleresUpdateInput = {
    NombreTa?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Entrenadores?: EntrenadoresUpdateOneRequiredWithoutTalleresNestedInput
    Horarios?: HorariosUpdateOneRequiredWithoutTalleresNestedInput
  }

  export type TalleresUncheckedUpdateInput = {
    IdTaller?: IntFieldUpdateOperationsInput | number
    NombreTa?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    FkIdEntrenador?: IntFieldUpdateOperationsInput | number
    FkIdHorario?: IntFieldUpdateOperationsInput | number
  }

  export type TalleresCreateManyInput = {
    IdTaller?: number
    NombreTa: string
    Descripcion?: string | null
    FkIdEntrenador: number
    FkIdHorario: number
  }

  export type TalleresUpdateManyMutationInput = {
    NombreTa?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TalleresUncheckedUpdateManyInput = {
    IdTaller?: IntFieldUpdateOperationsInput | number
    NombreTa?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    FkIdEntrenador?: IntFieldUpdateOperationsInput | number
    FkIdHorario?: IntFieldUpdateOperationsInput | number
  }

  export type TorneosCreateInput = {
    NombreT: string
    FechaInicioT: Date | string
    FechaFinT: Date | string
    InscripcionTorneos?: InscripcionTorneosCreateNestedManyWithoutTorneosInput
    Espacios?: EspaciosCreateNestedOneWithoutTorneosInput
    Horarios?: HorariosCreateNestedOneWithoutTorneosInput
  }

  export type TorneosUncheckedCreateInput = {
    IdTorneo?: number
    NombreT: string
    FechaInicioT: Date | string
    FechaFinT: Date | string
    FkIdEspacio?: number | null
    FkIdHorario?: number | null
    InscripcionTorneos?: InscripcionTorneosUncheckedCreateNestedManyWithoutTorneosInput
  }

  export type TorneosUpdateInput = {
    NombreT?: StringFieldUpdateOperationsInput | string
    FechaInicioT?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaFinT?: DateTimeFieldUpdateOperationsInput | Date | string
    InscripcionTorneos?: InscripcionTorneosUpdateManyWithoutTorneosNestedInput
    Espacios?: EspaciosUpdateOneWithoutTorneosNestedInput
    Horarios?: HorariosUpdateOneWithoutTorneosNestedInput
  }

  export type TorneosUncheckedUpdateInput = {
    IdTorneo?: IntFieldUpdateOperationsInput | number
    NombreT?: StringFieldUpdateOperationsInput | string
    FechaInicioT?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaFinT?: DateTimeFieldUpdateOperationsInput | Date | string
    FkIdEspacio?: NullableIntFieldUpdateOperationsInput | number | null
    FkIdHorario?: NullableIntFieldUpdateOperationsInput | number | null
    InscripcionTorneos?: InscripcionTorneosUncheckedUpdateManyWithoutTorneosNestedInput
  }

  export type TorneosCreateManyInput = {
    IdTorneo?: number
    NombreT: string
    FechaInicioT: Date | string
    FechaFinT: Date | string
    FkIdEspacio?: number | null
    FkIdHorario?: number | null
  }

  export type TorneosUpdateManyMutationInput = {
    NombreT?: StringFieldUpdateOperationsInput | string
    FechaInicioT?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaFinT?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TorneosUncheckedUpdateManyInput = {
    IdTorneo?: IntFieldUpdateOperationsInput | number
    NombreT?: StringFieldUpdateOperationsInput | string
    FechaInicioT?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaFinT?: DateTimeFieldUpdateOperationsInput | Date | string
    FkIdEspacio?: NullableIntFieldUpdateOperationsInput | number | null
    FkIdHorario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsuariosCreateInput = {
    Usuario?: string
    NombreU: string
    CorreoU: string
    Contrase_a: string
    Nivel: $Enums.Usuarios_Nivel
    FechaRegistro?: Date | string | null
    Telefono?: string | null
    Comentarios?: ComentariosCreateNestedManyWithoutUsuariosInput
    Entrenadores?: EntrenadoresCreateNestedManyWithoutUsuariosInput
    InscripcionClases?: InscripcionClasesCreateNestedManyWithoutUsuariosInput
    InscripcionTorneos?: InscripcionTorneosCreateNestedManyWithoutUsuariosInput
    Reservas?: ReservasCreateNestedManyWithoutUsuariosInput
  }

  export type UsuariosUncheckedCreateInput = {
    IdUsuario?: number
    Usuario?: string
    NombreU: string
    CorreoU: string
    Contrase_a: string
    Nivel: $Enums.Usuarios_Nivel
    FechaRegistro?: Date | string | null
    Telefono?: string | null
    Comentarios?: ComentariosUncheckedCreateNestedManyWithoutUsuariosInput
    Entrenadores?: EntrenadoresUncheckedCreateNestedManyWithoutUsuariosInput
    InscripcionClases?: InscripcionClasesUncheckedCreateNestedManyWithoutUsuariosInput
    InscripcionTorneos?: InscripcionTorneosUncheckedCreateNestedManyWithoutUsuariosInput
    Reservas?: ReservasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsuariosUpdateInput = {
    Usuario?: StringFieldUpdateOperationsInput | string
    NombreU?: StringFieldUpdateOperationsInput | string
    CorreoU?: StringFieldUpdateOperationsInput | string
    Contrase_a?: StringFieldUpdateOperationsInput | string
    Nivel?: EnumUsuarios_NivelFieldUpdateOperationsInput | $Enums.Usuarios_Nivel
    FechaRegistro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Comentarios?: ComentariosUpdateManyWithoutUsuariosNestedInput
    Entrenadores?: EntrenadoresUpdateManyWithoutUsuariosNestedInput
    InscripcionClases?: InscripcionClasesUpdateManyWithoutUsuariosNestedInput
    InscripcionTorneos?: InscripcionTorneosUpdateManyWithoutUsuariosNestedInput
    Reservas?: ReservasUpdateManyWithoutUsuariosNestedInput
  }

  export type UsuariosUncheckedUpdateInput = {
    IdUsuario?: IntFieldUpdateOperationsInput | number
    Usuario?: StringFieldUpdateOperationsInput | string
    NombreU?: StringFieldUpdateOperationsInput | string
    CorreoU?: StringFieldUpdateOperationsInput | string
    Contrase_a?: StringFieldUpdateOperationsInput | string
    Nivel?: EnumUsuarios_NivelFieldUpdateOperationsInput | $Enums.Usuarios_Nivel
    FechaRegistro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Comentarios?: ComentariosUncheckedUpdateManyWithoutUsuariosNestedInput
    Entrenadores?: EntrenadoresUncheckedUpdateManyWithoutUsuariosNestedInput
    InscripcionClases?: InscripcionClasesUncheckedUpdateManyWithoutUsuariosNestedInput
    InscripcionTorneos?: InscripcionTorneosUncheckedUpdateManyWithoutUsuariosNestedInput
    Reservas?: ReservasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type UsuariosCreateManyInput = {
    IdUsuario?: number
    Usuario?: string
    NombreU: string
    CorreoU: string
    Contrase_a: string
    Nivel: $Enums.Usuarios_Nivel
    FechaRegistro?: Date | string | null
    Telefono?: string | null
  }

  export type UsuariosUpdateManyMutationInput = {
    Usuario?: StringFieldUpdateOperationsInput | string
    NombreU?: StringFieldUpdateOperationsInput | string
    CorreoU?: StringFieldUpdateOperationsInput | string
    Contrase_a?: StringFieldUpdateOperationsInput | string
    Nivel?: EnumUsuarios_NivelFieldUpdateOperationsInput | $Enums.Usuarios_Nivel
    FechaRegistro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuariosUncheckedUpdateManyInput = {
    IdUsuario?: IntFieldUpdateOperationsInput | number
    Usuario?: StringFieldUpdateOperationsInput | string
    NombreU?: StringFieldUpdateOperationsInput | string
    CorreoU?: StringFieldUpdateOperationsInput | string
    Contrase_a?: StringFieldUpdateOperationsInput | string
    Nivel?: EnumUsuarios_NivelFieldUpdateOperationsInput | $Enums.Usuarios_Nivel
    FechaRegistro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EntrenadoresScalarRelationFilter = {
    is?: EntrenadoresWhereInput
    isNot?: EntrenadoresWhereInput
  }

  export type EspaciosScalarRelationFilter = {
    is?: EspaciosWhereInput
    isNot?: EspaciosWhereInput
  }

  export type HorariosScalarRelationFilter = {
    is?: HorariosWhereInput
    isNot?: HorariosWhereInput
  }

  export type InscripcionClasesListRelationFilter = {
    every?: InscripcionClasesWhereInput
    some?: InscripcionClasesWhereInput
    none?: InscripcionClasesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InscripcionClasesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClasesOrderByRelevanceInput = {
    fields: ClasesOrderByRelevanceFieldEnum | ClasesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClasesCountOrderByAggregateInput = {
    IdClase?: SortOrder
    FkIdEntrenador?: SortOrder
    FkIdEspacio?: SortOrder
    FkIdHorario?: SortOrder
    NombreC?: SortOrder
    Descripcion?: SortOrder
  }

  export type ClasesAvgOrderByAggregateInput = {
    IdClase?: SortOrder
    FkIdEntrenador?: SortOrder
    FkIdEspacio?: SortOrder
    FkIdHorario?: SortOrder
  }

  export type ClasesMaxOrderByAggregateInput = {
    IdClase?: SortOrder
    FkIdEntrenador?: SortOrder
    FkIdEspacio?: SortOrder
    FkIdHorario?: SortOrder
    NombreC?: SortOrder
    Descripcion?: SortOrder
  }

  export type ClasesMinOrderByAggregateInput = {
    IdClase?: SortOrder
    FkIdEntrenador?: SortOrder
    FkIdEspacio?: SortOrder
    FkIdHorario?: SortOrder
    NombreC?: SortOrder
    Descripcion?: SortOrder
  }

  export type ClasesSumOrderByAggregateInput = {
    IdClase?: SortOrder
    FkIdEntrenador?: SortOrder
    FkIdEspacio?: SortOrder
    FkIdHorario?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsuariosScalarRelationFilter = {
    is?: UsuariosWhereInput
    isNot?: UsuariosWhereInput
  }

  export type ComentariosOrderByRelevanceInput = {
    fields: ComentariosOrderByRelevanceFieldEnum | ComentariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ComentariosCountOrderByAggregateInput = {
    IdComentario?: SortOrder
    FkIdUsuario?: SortOrder
    Comentario?: SortOrder
    FechaComentario?: SortOrder
  }

  export type ComentariosAvgOrderByAggregateInput = {
    IdComentario?: SortOrder
    FkIdUsuario?: SortOrder
  }

  export type ComentariosMaxOrderByAggregateInput = {
    IdComentario?: SortOrder
    FkIdUsuario?: SortOrder
    Comentario?: SortOrder
    FechaComentario?: SortOrder
  }

  export type ComentariosMinOrderByAggregateInput = {
    IdComentario?: SortOrder
    FkIdUsuario?: SortOrder
    Comentario?: SortOrder
    FechaComentario?: SortOrder
  }

  export type ComentariosSumOrderByAggregateInput = {
    IdComentario?: SortOrder
    FkIdUsuario?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ClasesListRelationFilter = {
    every?: ClasesWhereInput
    some?: ClasesWhereInput
    none?: ClasesWhereInput
  }

  export type UsuariosNullableScalarRelationFilter = {
    is?: UsuariosWhereInput | null
    isNot?: UsuariosWhereInput | null
  }

  export type TalleresListRelationFilter = {
    every?: TalleresWhereInput
    some?: TalleresWhereInput
    none?: TalleresWhereInput
  }

  export type ClasesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TalleresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EntrenadoresOrderByRelevanceInput = {
    fields: EntrenadoresOrderByRelevanceFieldEnum | EntrenadoresOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EntrenadoresCountOrderByAggregateInput = {
    IdEntrenador?: SortOrder
    FkIdUsuario?: SortOrder
    Especialidad?: SortOrder
    Experiencia?: SortOrder
    Telefono?: SortOrder
  }

  export type EntrenadoresAvgOrderByAggregateInput = {
    IdEntrenador?: SortOrder
    FkIdUsuario?: SortOrder
  }

  export type EntrenadoresMaxOrderByAggregateInput = {
    IdEntrenador?: SortOrder
    FkIdUsuario?: SortOrder
    Especialidad?: SortOrder
    Experiencia?: SortOrder
    Telefono?: SortOrder
  }

  export type EntrenadoresMinOrderByAggregateInput = {
    IdEntrenador?: SortOrder
    FkIdUsuario?: SortOrder
    Especialidad?: SortOrder
    Experiencia?: SortOrder
    Telefono?: SortOrder
  }

  export type EntrenadoresSumOrderByAggregateInput = {
    IdEntrenador?: SortOrder
    FkIdUsuario?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type EnumEspacios_TipoFilter<$PrismaModel = never> = {
    equals?: $Enums.Espacios_Tipo | EnumEspacios_TipoFieldRefInput<$PrismaModel>
    in?: $Enums.Espacios_Tipo[]
    notIn?: $Enums.Espacios_Tipo[]
    not?: NestedEnumEspacios_TipoFilter<$PrismaModel> | $Enums.Espacios_Tipo
  }

  export type HorariosListRelationFilter = {
    every?: HorariosWhereInput
    some?: HorariosWhereInput
    none?: HorariosWhereInput
  }

  export type ReservasListRelationFilter = {
    every?: ReservasWhereInput
    some?: ReservasWhereInput
    none?: ReservasWhereInput
  }

  export type TorneosListRelationFilter = {
    every?: TorneosWhereInput
    some?: TorneosWhereInput
    none?: TorneosWhereInput
  }

  export type HorariosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TorneosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EspaciosOrderByRelevanceInput = {
    fields: EspaciosOrderByRelevanceFieldEnum | EspaciosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EspaciosCountOrderByAggregateInput = {
    IdEspacio?: SortOrder
    NombreE?: SortOrder
    Tipo?: SortOrder
    Capacidad?: SortOrder
    Descripcion?: SortOrder
    Ubicacion?: SortOrder
  }

  export type EspaciosAvgOrderByAggregateInput = {
    IdEspacio?: SortOrder
    Capacidad?: SortOrder
  }

  export type EspaciosMaxOrderByAggregateInput = {
    IdEspacio?: SortOrder
    NombreE?: SortOrder
    Tipo?: SortOrder
    Capacidad?: SortOrder
    Descripcion?: SortOrder
    Ubicacion?: SortOrder
  }

  export type EspaciosMinOrderByAggregateInput = {
    IdEspacio?: SortOrder
    NombreE?: SortOrder
    Tipo?: SortOrder
    Capacidad?: SortOrder
    Descripcion?: SortOrder
    Ubicacion?: SortOrder
  }

  export type EspaciosSumOrderByAggregateInput = {
    IdEspacio?: SortOrder
    Capacidad?: SortOrder
  }

  export type EnumEspacios_TipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Espacios_Tipo | EnumEspacios_TipoFieldRefInput<$PrismaModel>
    in?: $Enums.Espacios_Tipo[]
    notIn?: $Enums.Espacios_Tipo[]
    not?: NestedEnumEspacios_TipoWithAggregatesFilter<$PrismaModel> | $Enums.Espacios_Tipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEspacios_TipoFilter<$PrismaModel>
    _max?: NestedEnumEspacios_TipoFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type HorariosOrderByRelevanceInput = {
    fields: HorariosOrderByRelevanceFieldEnum | HorariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HorariosCountOrderByAggregateInput = {
    IdHorario?: SortOrder
    FkIdEspacio?: SortOrder
    DiaSemana?: SortOrder
    HoraInicio?: SortOrder
    HoraFin?: SortOrder
  }

  export type HorariosAvgOrderByAggregateInput = {
    IdHorario?: SortOrder
    FkIdEspacio?: SortOrder
  }

  export type HorariosMaxOrderByAggregateInput = {
    IdHorario?: SortOrder
    FkIdEspacio?: SortOrder
    DiaSemana?: SortOrder
    HoraInicio?: SortOrder
    HoraFin?: SortOrder
  }

  export type HorariosMinOrderByAggregateInput = {
    IdHorario?: SortOrder
    FkIdEspacio?: SortOrder
    DiaSemana?: SortOrder
    HoraInicio?: SortOrder
    HoraFin?: SortOrder
  }

  export type HorariosSumOrderByAggregateInput = {
    IdHorario?: SortOrder
    FkIdEspacio?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ClasesScalarRelationFilter = {
    is?: ClasesWhereInput
    isNot?: ClasesWhereInput
  }

  export type InscripcionClasesCountOrderByAggregateInput = {
    IdInscripcionClase?: SortOrder
    FkIdUsuario?: SortOrder
    FkIdClase?: SortOrder
    FechaI?: SortOrder
  }

  export type InscripcionClasesAvgOrderByAggregateInput = {
    IdInscripcionClase?: SortOrder
    FkIdUsuario?: SortOrder
    FkIdClase?: SortOrder
  }

  export type InscripcionClasesMaxOrderByAggregateInput = {
    IdInscripcionClase?: SortOrder
    FkIdUsuario?: SortOrder
    FkIdClase?: SortOrder
    FechaI?: SortOrder
  }

  export type InscripcionClasesMinOrderByAggregateInput = {
    IdInscripcionClase?: SortOrder
    FkIdUsuario?: SortOrder
    FkIdClase?: SortOrder
    FechaI?: SortOrder
  }

  export type InscripcionClasesSumOrderByAggregateInput = {
    IdInscripcionClase?: SortOrder
    FkIdUsuario?: SortOrder
    FkIdClase?: SortOrder
  }

  export type TorneosScalarRelationFilter = {
    is?: TorneosWhereInput
    isNot?: TorneosWhereInput
  }

  export type InscripcionTorneosCountOrderByAggregateInput = {
    IdInscripcionTorneo?: SortOrder
    FkIdUsuario?: SortOrder
    FkIdTorneo?: SortOrder
    FechaI?: SortOrder
  }

  export type InscripcionTorneosAvgOrderByAggregateInput = {
    IdInscripcionTorneo?: SortOrder
    FkIdUsuario?: SortOrder
    FkIdTorneo?: SortOrder
  }

  export type InscripcionTorneosMaxOrderByAggregateInput = {
    IdInscripcionTorneo?: SortOrder
    FkIdUsuario?: SortOrder
    FkIdTorneo?: SortOrder
    FechaI?: SortOrder
  }

  export type InscripcionTorneosMinOrderByAggregateInput = {
    IdInscripcionTorneo?: SortOrder
    FkIdUsuario?: SortOrder
    FkIdTorneo?: SortOrder
    FechaI?: SortOrder
  }

  export type InscripcionTorneosSumOrderByAggregateInput = {
    IdInscripcionTorneo?: SortOrder
    FkIdUsuario?: SortOrder
    FkIdTorneo?: SortOrder
  }

  export type EnumReservas_EstadoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Reservas_Estado | EnumReservas_EstadoFieldRefInput<$PrismaModel> | null
    in?: $Enums.Reservas_Estado[] | null
    notIn?: $Enums.Reservas_Estado[] | null
    not?: NestedEnumReservas_EstadoNullableFilter<$PrismaModel> | $Enums.Reservas_Estado | null
  }

  export type ReservasCountOrderByAggregateInput = {
    IdReserva?: SortOrder
    FkIdUsuario?: SortOrder
    FkIdEspacio?: SortOrder
    FechaReserva?: SortOrder
    HoraInicioR?: SortOrder
    HoraFinR?: SortOrder
    Estado?: SortOrder
  }

  export type ReservasAvgOrderByAggregateInput = {
    IdReserva?: SortOrder
    FkIdUsuario?: SortOrder
    FkIdEspacio?: SortOrder
  }

  export type ReservasMaxOrderByAggregateInput = {
    IdReserva?: SortOrder
    FkIdUsuario?: SortOrder
    FkIdEspacio?: SortOrder
    FechaReserva?: SortOrder
    HoraInicioR?: SortOrder
    HoraFinR?: SortOrder
    Estado?: SortOrder
  }

  export type ReservasMinOrderByAggregateInput = {
    IdReserva?: SortOrder
    FkIdUsuario?: SortOrder
    FkIdEspacio?: SortOrder
    FechaReserva?: SortOrder
    HoraInicioR?: SortOrder
    HoraFinR?: SortOrder
    Estado?: SortOrder
  }

  export type ReservasSumOrderByAggregateInput = {
    IdReserva?: SortOrder
    FkIdUsuario?: SortOrder
    FkIdEspacio?: SortOrder
  }

  export type EnumReservas_EstadoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Reservas_Estado | EnumReservas_EstadoFieldRefInput<$PrismaModel> | null
    in?: $Enums.Reservas_Estado[] | null
    notIn?: $Enums.Reservas_Estado[] | null
    not?: NestedEnumReservas_EstadoNullableWithAggregatesFilter<$PrismaModel> | $Enums.Reservas_Estado | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumReservas_EstadoNullableFilter<$PrismaModel>
    _max?: NestedEnumReservas_EstadoNullableFilter<$PrismaModel>
  }

  export type TalleresOrderByRelevanceInput = {
    fields: TalleresOrderByRelevanceFieldEnum | TalleresOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TalleresCountOrderByAggregateInput = {
    IdTaller?: SortOrder
    NombreTa?: SortOrder
    Descripcion?: SortOrder
    FkIdEntrenador?: SortOrder
    FkIdHorario?: SortOrder
  }

  export type TalleresAvgOrderByAggregateInput = {
    IdTaller?: SortOrder
    FkIdEntrenador?: SortOrder
    FkIdHorario?: SortOrder
  }

  export type TalleresMaxOrderByAggregateInput = {
    IdTaller?: SortOrder
    NombreTa?: SortOrder
    Descripcion?: SortOrder
    FkIdEntrenador?: SortOrder
    FkIdHorario?: SortOrder
  }

  export type TalleresMinOrderByAggregateInput = {
    IdTaller?: SortOrder
    NombreTa?: SortOrder
    Descripcion?: SortOrder
    FkIdEntrenador?: SortOrder
    FkIdHorario?: SortOrder
  }

  export type TalleresSumOrderByAggregateInput = {
    IdTaller?: SortOrder
    FkIdEntrenador?: SortOrder
    FkIdHorario?: SortOrder
  }

  export type InscripcionTorneosListRelationFilter = {
    every?: InscripcionTorneosWhereInput
    some?: InscripcionTorneosWhereInput
    none?: InscripcionTorneosWhereInput
  }

  export type EspaciosNullableScalarRelationFilter = {
    is?: EspaciosWhereInput | null
    isNot?: EspaciosWhereInput | null
  }

  export type HorariosNullableScalarRelationFilter = {
    is?: HorariosWhereInput | null
    isNot?: HorariosWhereInput | null
  }

  export type InscripcionTorneosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TorneosOrderByRelevanceInput = {
    fields: TorneosOrderByRelevanceFieldEnum | TorneosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TorneosCountOrderByAggregateInput = {
    IdTorneo?: SortOrder
    NombreT?: SortOrder
    FechaInicioT?: SortOrder
    FechaFinT?: SortOrder
    FkIdEspacio?: SortOrder
    FkIdHorario?: SortOrder
  }

  export type TorneosAvgOrderByAggregateInput = {
    IdTorneo?: SortOrder
    FkIdEspacio?: SortOrder
    FkIdHorario?: SortOrder
  }

  export type TorneosMaxOrderByAggregateInput = {
    IdTorneo?: SortOrder
    NombreT?: SortOrder
    FechaInicioT?: SortOrder
    FechaFinT?: SortOrder
    FkIdEspacio?: SortOrder
    FkIdHorario?: SortOrder
  }

  export type TorneosMinOrderByAggregateInput = {
    IdTorneo?: SortOrder
    NombreT?: SortOrder
    FechaInicioT?: SortOrder
    FechaFinT?: SortOrder
    FkIdEspacio?: SortOrder
    FkIdHorario?: SortOrder
  }

  export type TorneosSumOrderByAggregateInput = {
    IdTorneo?: SortOrder
    FkIdEspacio?: SortOrder
    FkIdHorario?: SortOrder
  }

  export type EnumUsuarios_NivelFilter<$PrismaModel = never> = {
    equals?: $Enums.Usuarios_Nivel | EnumUsuarios_NivelFieldRefInput<$PrismaModel>
    in?: $Enums.Usuarios_Nivel[]
    notIn?: $Enums.Usuarios_Nivel[]
    not?: NestedEnumUsuarios_NivelFilter<$PrismaModel> | $Enums.Usuarios_Nivel
  }

  export type ComentariosListRelationFilter = {
    every?: ComentariosWhereInput
    some?: ComentariosWhereInput
    none?: ComentariosWhereInput
  }

  export type EntrenadoresListRelationFilter = {
    every?: EntrenadoresWhereInput
    some?: EntrenadoresWhereInput
    none?: EntrenadoresWhereInput
  }

  export type ComentariosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EntrenadoresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuariosOrderByRelevanceInput = {
    fields: UsuariosOrderByRelevanceFieldEnum | UsuariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuariosCountOrderByAggregateInput = {
    IdUsuario?: SortOrder
    Usuario?: SortOrder
    NombreU?: SortOrder
    CorreoU?: SortOrder
    Contrase_a?: SortOrder
    Nivel?: SortOrder
    FechaRegistro?: SortOrder
    Telefono?: SortOrder
  }

  export type UsuariosAvgOrderByAggregateInput = {
    IdUsuario?: SortOrder
  }

  export type UsuariosMaxOrderByAggregateInput = {
    IdUsuario?: SortOrder
    Usuario?: SortOrder
    NombreU?: SortOrder
    CorreoU?: SortOrder
    Contrase_a?: SortOrder
    Nivel?: SortOrder
    FechaRegistro?: SortOrder
    Telefono?: SortOrder
  }

  export type UsuariosMinOrderByAggregateInput = {
    IdUsuario?: SortOrder
    Usuario?: SortOrder
    NombreU?: SortOrder
    CorreoU?: SortOrder
    Contrase_a?: SortOrder
    Nivel?: SortOrder
    FechaRegistro?: SortOrder
    Telefono?: SortOrder
  }

  export type UsuariosSumOrderByAggregateInput = {
    IdUsuario?: SortOrder
  }

  export type EnumUsuarios_NivelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Usuarios_Nivel | EnumUsuarios_NivelFieldRefInput<$PrismaModel>
    in?: $Enums.Usuarios_Nivel[]
    notIn?: $Enums.Usuarios_Nivel[]
    not?: NestedEnumUsuarios_NivelWithAggregatesFilter<$PrismaModel> | $Enums.Usuarios_Nivel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUsuarios_NivelFilter<$PrismaModel>
    _max?: NestedEnumUsuarios_NivelFilter<$PrismaModel>
  }

  export type EntrenadoresCreateNestedOneWithoutClasesInput = {
    create?: XOR<EntrenadoresCreateWithoutClasesInput, EntrenadoresUncheckedCreateWithoutClasesInput>
    connectOrCreate?: EntrenadoresCreateOrConnectWithoutClasesInput
    connect?: EntrenadoresWhereUniqueInput
  }

  export type EspaciosCreateNestedOneWithoutClasesInput = {
    create?: XOR<EspaciosCreateWithoutClasesInput, EspaciosUncheckedCreateWithoutClasesInput>
    connectOrCreate?: EspaciosCreateOrConnectWithoutClasesInput
    connect?: EspaciosWhereUniqueInput
  }

  export type HorariosCreateNestedOneWithoutClasesInput = {
    create?: XOR<HorariosCreateWithoutClasesInput, HorariosUncheckedCreateWithoutClasesInput>
    connectOrCreate?: HorariosCreateOrConnectWithoutClasesInput
    connect?: HorariosWhereUniqueInput
  }

  export type InscripcionClasesCreateNestedManyWithoutClasesInput = {
    create?: XOR<InscripcionClasesCreateWithoutClasesInput, InscripcionClasesUncheckedCreateWithoutClasesInput> | InscripcionClasesCreateWithoutClasesInput[] | InscripcionClasesUncheckedCreateWithoutClasesInput[]
    connectOrCreate?: InscripcionClasesCreateOrConnectWithoutClasesInput | InscripcionClasesCreateOrConnectWithoutClasesInput[]
    createMany?: InscripcionClasesCreateManyClasesInputEnvelope
    connect?: InscripcionClasesWhereUniqueInput | InscripcionClasesWhereUniqueInput[]
  }

  export type InscripcionClasesUncheckedCreateNestedManyWithoutClasesInput = {
    create?: XOR<InscripcionClasesCreateWithoutClasesInput, InscripcionClasesUncheckedCreateWithoutClasesInput> | InscripcionClasesCreateWithoutClasesInput[] | InscripcionClasesUncheckedCreateWithoutClasesInput[]
    connectOrCreate?: InscripcionClasesCreateOrConnectWithoutClasesInput | InscripcionClasesCreateOrConnectWithoutClasesInput[]
    createMany?: InscripcionClasesCreateManyClasesInputEnvelope
    connect?: InscripcionClasesWhereUniqueInput | InscripcionClasesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EntrenadoresUpdateOneRequiredWithoutClasesNestedInput = {
    create?: XOR<EntrenadoresCreateWithoutClasesInput, EntrenadoresUncheckedCreateWithoutClasesInput>
    connectOrCreate?: EntrenadoresCreateOrConnectWithoutClasesInput
    upsert?: EntrenadoresUpsertWithoutClasesInput
    connect?: EntrenadoresWhereUniqueInput
    update?: XOR<XOR<EntrenadoresUpdateToOneWithWhereWithoutClasesInput, EntrenadoresUpdateWithoutClasesInput>, EntrenadoresUncheckedUpdateWithoutClasesInput>
  }

  export type EspaciosUpdateOneRequiredWithoutClasesNestedInput = {
    create?: XOR<EspaciosCreateWithoutClasesInput, EspaciosUncheckedCreateWithoutClasesInput>
    connectOrCreate?: EspaciosCreateOrConnectWithoutClasesInput
    upsert?: EspaciosUpsertWithoutClasesInput
    connect?: EspaciosWhereUniqueInput
    update?: XOR<XOR<EspaciosUpdateToOneWithWhereWithoutClasesInput, EspaciosUpdateWithoutClasesInput>, EspaciosUncheckedUpdateWithoutClasesInput>
  }

  export type HorariosUpdateOneRequiredWithoutClasesNestedInput = {
    create?: XOR<HorariosCreateWithoutClasesInput, HorariosUncheckedCreateWithoutClasesInput>
    connectOrCreate?: HorariosCreateOrConnectWithoutClasesInput
    upsert?: HorariosUpsertWithoutClasesInput
    connect?: HorariosWhereUniqueInput
    update?: XOR<XOR<HorariosUpdateToOneWithWhereWithoutClasesInput, HorariosUpdateWithoutClasesInput>, HorariosUncheckedUpdateWithoutClasesInput>
  }

  export type InscripcionClasesUpdateManyWithoutClasesNestedInput = {
    create?: XOR<InscripcionClasesCreateWithoutClasesInput, InscripcionClasesUncheckedCreateWithoutClasesInput> | InscripcionClasesCreateWithoutClasesInput[] | InscripcionClasesUncheckedCreateWithoutClasesInput[]
    connectOrCreate?: InscripcionClasesCreateOrConnectWithoutClasesInput | InscripcionClasesCreateOrConnectWithoutClasesInput[]
    upsert?: InscripcionClasesUpsertWithWhereUniqueWithoutClasesInput | InscripcionClasesUpsertWithWhereUniqueWithoutClasesInput[]
    createMany?: InscripcionClasesCreateManyClasesInputEnvelope
    set?: InscripcionClasesWhereUniqueInput | InscripcionClasesWhereUniqueInput[]
    disconnect?: InscripcionClasesWhereUniqueInput | InscripcionClasesWhereUniqueInput[]
    delete?: InscripcionClasesWhereUniqueInput | InscripcionClasesWhereUniqueInput[]
    connect?: InscripcionClasesWhereUniqueInput | InscripcionClasesWhereUniqueInput[]
    update?: InscripcionClasesUpdateWithWhereUniqueWithoutClasesInput | InscripcionClasesUpdateWithWhereUniqueWithoutClasesInput[]
    updateMany?: InscripcionClasesUpdateManyWithWhereWithoutClasesInput | InscripcionClasesUpdateManyWithWhereWithoutClasesInput[]
    deleteMany?: InscripcionClasesScalarWhereInput | InscripcionClasesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InscripcionClasesUncheckedUpdateManyWithoutClasesNestedInput = {
    create?: XOR<InscripcionClasesCreateWithoutClasesInput, InscripcionClasesUncheckedCreateWithoutClasesInput> | InscripcionClasesCreateWithoutClasesInput[] | InscripcionClasesUncheckedCreateWithoutClasesInput[]
    connectOrCreate?: InscripcionClasesCreateOrConnectWithoutClasesInput | InscripcionClasesCreateOrConnectWithoutClasesInput[]
    upsert?: InscripcionClasesUpsertWithWhereUniqueWithoutClasesInput | InscripcionClasesUpsertWithWhereUniqueWithoutClasesInput[]
    createMany?: InscripcionClasesCreateManyClasesInputEnvelope
    set?: InscripcionClasesWhereUniqueInput | InscripcionClasesWhereUniqueInput[]
    disconnect?: InscripcionClasesWhereUniqueInput | InscripcionClasesWhereUniqueInput[]
    delete?: InscripcionClasesWhereUniqueInput | InscripcionClasesWhereUniqueInput[]
    connect?: InscripcionClasesWhereUniqueInput | InscripcionClasesWhereUniqueInput[]
    update?: InscripcionClasesUpdateWithWhereUniqueWithoutClasesInput | InscripcionClasesUpdateWithWhereUniqueWithoutClasesInput[]
    updateMany?: InscripcionClasesUpdateManyWithWhereWithoutClasesInput | InscripcionClasesUpdateManyWithWhereWithoutClasesInput[]
    deleteMany?: InscripcionClasesScalarWhereInput | InscripcionClasesScalarWhereInput[]
  }

  export type UsuariosCreateNestedOneWithoutComentariosInput = {
    create?: XOR<UsuariosCreateWithoutComentariosInput, UsuariosUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutComentariosInput
    connect?: UsuariosWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsuariosUpdateOneRequiredWithoutComentariosNestedInput = {
    create?: XOR<UsuariosCreateWithoutComentariosInput, UsuariosUncheckedCreateWithoutComentariosInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutComentariosInput
    upsert?: UsuariosUpsertWithoutComentariosInput
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutComentariosInput, UsuariosUpdateWithoutComentariosInput>, UsuariosUncheckedUpdateWithoutComentariosInput>
  }

  export type ClasesCreateNestedManyWithoutEntrenadoresInput = {
    create?: XOR<ClasesCreateWithoutEntrenadoresInput, ClasesUncheckedCreateWithoutEntrenadoresInput> | ClasesCreateWithoutEntrenadoresInput[] | ClasesUncheckedCreateWithoutEntrenadoresInput[]
    connectOrCreate?: ClasesCreateOrConnectWithoutEntrenadoresInput | ClasesCreateOrConnectWithoutEntrenadoresInput[]
    createMany?: ClasesCreateManyEntrenadoresInputEnvelope
    connect?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
  }

  export type UsuariosCreateNestedOneWithoutEntrenadoresInput = {
    create?: XOR<UsuariosCreateWithoutEntrenadoresInput, UsuariosUncheckedCreateWithoutEntrenadoresInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutEntrenadoresInput
    connect?: UsuariosWhereUniqueInput
  }

  export type TalleresCreateNestedManyWithoutEntrenadoresInput = {
    create?: XOR<TalleresCreateWithoutEntrenadoresInput, TalleresUncheckedCreateWithoutEntrenadoresInput> | TalleresCreateWithoutEntrenadoresInput[] | TalleresUncheckedCreateWithoutEntrenadoresInput[]
    connectOrCreate?: TalleresCreateOrConnectWithoutEntrenadoresInput | TalleresCreateOrConnectWithoutEntrenadoresInput[]
    createMany?: TalleresCreateManyEntrenadoresInputEnvelope
    connect?: TalleresWhereUniqueInput | TalleresWhereUniqueInput[]
  }

  export type ClasesUncheckedCreateNestedManyWithoutEntrenadoresInput = {
    create?: XOR<ClasesCreateWithoutEntrenadoresInput, ClasesUncheckedCreateWithoutEntrenadoresInput> | ClasesCreateWithoutEntrenadoresInput[] | ClasesUncheckedCreateWithoutEntrenadoresInput[]
    connectOrCreate?: ClasesCreateOrConnectWithoutEntrenadoresInput | ClasesCreateOrConnectWithoutEntrenadoresInput[]
    createMany?: ClasesCreateManyEntrenadoresInputEnvelope
    connect?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
  }

  export type TalleresUncheckedCreateNestedManyWithoutEntrenadoresInput = {
    create?: XOR<TalleresCreateWithoutEntrenadoresInput, TalleresUncheckedCreateWithoutEntrenadoresInput> | TalleresCreateWithoutEntrenadoresInput[] | TalleresUncheckedCreateWithoutEntrenadoresInput[]
    connectOrCreate?: TalleresCreateOrConnectWithoutEntrenadoresInput | TalleresCreateOrConnectWithoutEntrenadoresInput[]
    createMany?: TalleresCreateManyEntrenadoresInputEnvelope
    connect?: TalleresWhereUniqueInput | TalleresWhereUniqueInput[]
  }

  export type ClasesUpdateManyWithoutEntrenadoresNestedInput = {
    create?: XOR<ClasesCreateWithoutEntrenadoresInput, ClasesUncheckedCreateWithoutEntrenadoresInput> | ClasesCreateWithoutEntrenadoresInput[] | ClasesUncheckedCreateWithoutEntrenadoresInput[]
    connectOrCreate?: ClasesCreateOrConnectWithoutEntrenadoresInput | ClasesCreateOrConnectWithoutEntrenadoresInput[]
    upsert?: ClasesUpsertWithWhereUniqueWithoutEntrenadoresInput | ClasesUpsertWithWhereUniqueWithoutEntrenadoresInput[]
    createMany?: ClasesCreateManyEntrenadoresInputEnvelope
    set?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    disconnect?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    delete?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    connect?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    update?: ClasesUpdateWithWhereUniqueWithoutEntrenadoresInput | ClasesUpdateWithWhereUniqueWithoutEntrenadoresInput[]
    updateMany?: ClasesUpdateManyWithWhereWithoutEntrenadoresInput | ClasesUpdateManyWithWhereWithoutEntrenadoresInput[]
    deleteMany?: ClasesScalarWhereInput | ClasesScalarWhereInput[]
  }

  export type UsuariosUpdateOneWithoutEntrenadoresNestedInput = {
    create?: XOR<UsuariosCreateWithoutEntrenadoresInput, UsuariosUncheckedCreateWithoutEntrenadoresInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutEntrenadoresInput
    upsert?: UsuariosUpsertWithoutEntrenadoresInput
    disconnect?: UsuariosWhereInput | boolean
    delete?: UsuariosWhereInput | boolean
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutEntrenadoresInput, UsuariosUpdateWithoutEntrenadoresInput>, UsuariosUncheckedUpdateWithoutEntrenadoresInput>
  }

  export type TalleresUpdateManyWithoutEntrenadoresNestedInput = {
    create?: XOR<TalleresCreateWithoutEntrenadoresInput, TalleresUncheckedCreateWithoutEntrenadoresInput> | TalleresCreateWithoutEntrenadoresInput[] | TalleresUncheckedCreateWithoutEntrenadoresInput[]
    connectOrCreate?: TalleresCreateOrConnectWithoutEntrenadoresInput | TalleresCreateOrConnectWithoutEntrenadoresInput[]
    upsert?: TalleresUpsertWithWhereUniqueWithoutEntrenadoresInput | TalleresUpsertWithWhereUniqueWithoutEntrenadoresInput[]
    createMany?: TalleresCreateManyEntrenadoresInputEnvelope
    set?: TalleresWhereUniqueInput | TalleresWhereUniqueInput[]
    disconnect?: TalleresWhereUniqueInput | TalleresWhereUniqueInput[]
    delete?: TalleresWhereUniqueInput | TalleresWhereUniqueInput[]
    connect?: TalleresWhereUniqueInput | TalleresWhereUniqueInput[]
    update?: TalleresUpdateWithWhereUniqueWithoutEntrenadoresInput | TalleresUpdateWithWhereUniqueWithoutEntrenadoresInput[]
    updateMany?: TalleresUpdateManyWithWhereWithoutEntrenadoresInput | TalleresUpdateManyWithWhereWithoutEntrenadoresInput[]
    deleteMany?: TalleresScalarWhereInput | TalleresScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClasesUncheckedUpdateManyWithoutEntrenadoresNestedInput = {
    create?: XOR<ClasesCreateWithoutEntrenadoresInput, ClasesUncheckedCreateWithoutEntrenadoresInput> | ClasesCreateWithoutEntrenadoresInput[] | ClasesUncheckedCreateWithoutEntrenadoresInput[]
    connectOrCreate?: ClasesCreateOrConnectWithoutEntrenadoresInput | ClasesCreateOrConnectWithoutEntrenadoresInput[]
    upsert?: ClasesUpsertWithWhereUniqueWithoutEntrenadoresInput | ClasesUpsertWithWhereUniqueWithoutEntrenadoresInput[]
    createMany?: ClasesCreateManyEntrenadoresInputEnvelope
    set?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    disconnect?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    delete?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    connect?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    update?: ClasesUpdateWithWhereUniqueWithoutEntrenadoresInput | ClasesUpdateWithWhereUniqueWithoutEntrenadoresInput[]
    updateMany?: ClasesUpdateManyWithWhereWithoutEntrenadoresInput | ClasesUpdateManyWithWhereWithoutEntrenadoresInput[]
    deleteMany?: ClasesScalarWhereInput | ClasesScalarWhereInput[]
  }

  export type TalleresUncheckedUpdateManyWithoutEntrenadoresNestedInput = {
    create?: XOR<TalleresCreateWithoutEntrenadoresInput, TalleresUncheckedCreateWithoutEntrenadoresInput> | TalleresCreateWithoutEntrenadoresInput[] | TalleresUncheckedCreateWithoutEntrenadoresInput[]
    connectOrCreate?: TalleresCreateOrConnectWithoutEntrenadoresInput | TalleresCreateOrConnectWithoutEntrenadoresInput[]
    upsert?: TalleresUpsertWithWhereUniqueWithoutEntrenadoresInput | TalleresUpsertWithWhereUniqueWithoutEntrenadoresInput[]
    createMany?: TalleresCreateManyEntrenadoresInputEnvelope
    set?: TalleresWhereUniqueInput | TalleresWhereUniqueInput[]
    disconnect?: TalleresWhereUniqueInput | TalleresWhereUniqueInput[]
    delete?: TalleresWhereUniqueInput | TalleresWhereUniqueInput[]
    connect?: TalleresWhereUniqueInput | TalleresWhereUniqueInput[]
    update?: TalleresUpdateWithWhereUniqueWithoutEntrenadoresInput | TalleresUpdateWithWhereUniqueWithoutEntrenadoresInput[]
    updateMany?: TalleresUpdateManyWithWhereWithoutEntrenadoresInput | TalleresUpdateManyWithWhereWithoutEntrenadoresInput[]
    deleteMany?: TalleresScalarWhereInput | TalleresScalarWhereInput[]
  }

  export type ClasesCreateNestedManyWithoutEspaciosInput = {
    create?: XOR<ClasesCreateWithoutEspaciosInput, ClasesUncheckedCreateWithoutEspaciosInput> | ClasesCreateWithoutEspaciosInput[] | ClasesUncheckedCreateWithoutEspaciosInput[]
    connectOrCreate?: ClasesCreateOrConnectWithoutEspaciosInput | ClasesCreateOrConnectWithoutEspaciosInput[]
    createMany?: ClasesCreateManyEspaciosInputEnvelope
    connect?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
  }

  export type HorariosCreateNestedManyWithoutEspaciosInput = {
    create?: XOR<HorariosCreateWithoutEspaciosInput, HorariosUncheckedCreateWithoutEspaciosInput> | HorariosCreateWithoutEspaciosInput[] | HorariosUncheckedCreateWithoutEspaciosInput[]
    connectOrCreate?: HorariosCreateOrConnectWithoutEspaciosInput | HorariosCreateOrConnectWithoutEspaciosInput[]
    createMany?: HorariosCreateManyEspaciosInputEnvelope
    connect?: HorariosWhereUniqueInput | HorariosWhereUniqueInput[]
  }

  export type ReservasCreateNestedManyWithoutEspaciosInput = {
    create?: XOR<ReservasCreateWithoutEspaciosInput, ReservasUncheckedCreateWithoutEspaciosInput> | ReservasCreateWithoutEspaciosInput[] | ReservasUncheckedCreateWithoutEspaciosInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutEspaciosInput | ReservasCreateOrConnectWithoutEspaciosInput[]
    createMany?: ReservasCreateManyEspaciosInputEnvelope
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
  }

  export type TorneosCreateNestedManyWithoutEspaciosInput = {
    create?: XOR<TorneosCreateWithoutEspaciosInput, TorneosUncheckedCreateWithoutEspaciosInput> | TorneosCreateWithoutEspaciosInput[] | TorneosUncheckedCreateWithoutEspaciosInput[]
    connectOrCreate?: TorneosCreateOrConnectWithoutEspaciosInput | TorneosCreateOrConnectWithoutEspaciosInput[]
    createMany?: TorneosCreateManyEspaciosInputEnvelope
    connect?: TorneosWhereUniqueInput | TorneosWhereUniqueInput[]
  }

  export type ClasesUncheckedCreateNestedManyWithoutEspaciosInput = {
    create?: XOR<ClasesCreateWithoutEspaciosInput, ClasesUncheckedCreateWithoutEspaciosInput> | ClasesCreateWithoutEspaciosInput[] | ClasesUncheckedCreateWithoutEspaciosInput[]
    connectOrCreate?: ClasesCreateOrConnectWithoutEspaciosInput | ClasesCreateOrConnectWithoutEspaciosInput[]
    createMany?: ClasesCreateManyEspaciosInputEnvelope
    connect?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
  }

  export type HorariosUncheckedCreateNestedManyWithoutEspaciosInput = {
    create?: XOR<HorariosCreateWithoutEspaciosInput, HorariosUncheckedCreateWithoutEspaciosInput> | HorariosCreateWithoutEspaciosInput[] | HorariosUncheckedCreateWithoutEspaciosInput[]
    connectOrCreate?: HorariosCreateOrConnectWithoutEspaciosInput | HorariosCreateOrConnectWithoutEspaciosInput[]
    createMany?: HorariosCreateManyEspaciosInputEnvelope
    connect?: HorariosWhereUniqueInput | HorariosWhereUniqueInput[]
  }

  export type ReservasUncheckedCreateNestedManyWithoutEspaciosInput = {
    create?: XOR<ReservasCreateWithoutEspaciosInput, ReservasUncheckedCreateWithoutEspaciosInput> | ReservasCreateWithoutEspaciosInput[] | ReservasUncheckedCreateWithoutEspaciosInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutEspaciosInput | ReservasCreateOrConnectWithoutEspaciosInput[]
    createMany?: ReservasCreateManyEspaciosInputEnvelope
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
  }

  export type TorneosUncheckedCreateNestedManyWithoutEspaciosInput = {
    create?: XOR<TorneosCreateWithoutEspaciosInput, TorneosUncheckedCreateWithoutEspaciosInput> | TorneosCreateWithoutEspaciosInput[] | TorneosUncheckedCreateWithoutEspaciosInput[]
    connectOrCreate?: TorneosCreateOrConnectWithoutEspaciosInput | TorneosCreateOrConnectWithoutEspaciosInput[]
    createMany?: TorneosCreateManyEspaciosInputEnvelope
    connect?: TorneosWhereUniqueInput | TorneosWhereUniqueInput[]
  }

  export type EnumEspacios_TipoFieldUpdateOperationsInput = {
    set?: $Enums.Espacios_Tipo
  }

  export type ClasesUpdateManyWithoutEspaciosNestedInput = {
    create?: XOR<ClasesCreateWithoutEspaciosInput, ClasesUncheckedCreateWithoutEspaciosInput> | ClasesCreateWithoutEspaciosInput[] | ClasesUncheckedCreateWithoutEspaciosInput[]
    connectOrCreate?: ClasesCreateOrConnectWithoutEspaciosInput | ClasesCreateOrConnectWithoutEspaciosInput[]
    upsert?: ClasesUpsertWithWhereUniqueWithoutEspaciosInput | ClasesUpsertWithWhereUniqueWithoutEspaciosInput[]
    createMany?: ClasesCreateManyEspaciosInputEnvelope
    set?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    disconnect?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    delete?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    connect?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    update?: ClasesUpdateWithWhereUniqueWithoutEspaciosInput | ClasesUpdateWithWhereUniqueWithoutEspaciosInput[]
    updateMany?: ClasesUpdateManyWithWhereWithoutEspaciosInput | ClasesUpdateManyWithWhereWithoutEspaciosInput[]
    deleteMany?: ClasesScalarWhereInput | ClasesScalarWhereInput[]
  }

  export type HorariosUpdateManyWithoutEspaciosNestedInput = {
    create?: XOR<HorariosCreateWithoutEspaciosInput, HorariosUncheckedCreateWithoutEspaciosInput> | HorariosCreateWithoutEspaciosInput[] | HorariosUncheckedCreateWithoutEspaciosInput[]
    connectOrCreate?: HorariosCreateOrConnectWithoutEspaciosInput | HorariosCreateOrConnectWithoutEspaciosInput[]
    upsert?: HorariosUpsertWithWhereUniqueWithoutEspaciosInput | HorariosUpsertWithWhereUniqueWithoutEspaciosInput[]
    createMany?: HorariosCreateManyEspaciosInputEnvelope
    set?: HorariosWhereUniqueInput | HorariosWhereUniqueInput[]
    disconnect?: HorariosWhereUniqueInput | HorariosWhereUniqueInput[]
    delete?: HorariosWhereUniqueInput | HorariosWhereUniqueInput[]
    connect?: HorariosWhereUniqueInput | HorariosWhereUniqueInput[]
    update?: HorariosUpdateWithWhereUniqueWithoutEspaciosInput | HorariosUpdateWithWhereUniqueWithoutEspaciosInput[]
    updateMany?: HorariosUpdateManyWithWhereWithoutEspaciosInput | HorariosUpdateManyWithWhereWithoutEspaciosInput[]
    deleteMany?: HorariosScalarWhereInput | HorariosScalarWhereInput[]
  }

  export type ReservasUpdateManyWithoutEspaciosNestedInput = {
    create?: XOR<ReservasCreateWithoutEspaciosInput, ReservasUncheckedCreateWithoutEspaciosInput> | ReservasCreateWithoutEspaciosInput[] | ReservasUncheckedCreateWithoutEspaciosInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutEspaciosInput | ReservasCreateOrConnectWithoutEspaciosInput[]
    upsert?: ReservasUpsertWithWhereUniqueWithoutEspaciosInput | ReservasUpsertWithWhereUniqueWithoutEspaciosInput[]
    createMany?: ReservasCreateManyEspaciosInputEnvelope
    set?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    disconnect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    delete?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    update?: ReservasUpdateWithWhereUniqueWithoutEspaciosInput | ReservasUpdateWithWhereUniqueWithoutEspaciosInput[]
    updateMany?: ReservasUpdateManyWithWhereWithoutEspaciosInput | ReservasUpdateManyWithWhereWithoutEspaciosInput[]
    deleteMany?: ReservasScalarWhereInput | ReservasScalarWhereInput[]
  }

  export type TorneosUpdateManyWithoutEspaciosNestedInput = {
    create?: XOR<TorneosCreateWithoutEspaciosInput, TorneosUncheckedCreateWithoutEspaciosInput> | TorneosCreateWithoutEspaciosInput[] | TorneosUncheckedCreateWithoutEspaciosInput[]
    connectOrCreate?: TorneosCreateOrConnectWithoutEspaciosInput | TorneosCreateOrConnectWithoutEspaciosInput[]
    upsert?: TorneosUpsertWithWhereUniqueWithoutEspaciosInput | TorneosUpsertWithWhereUniqueWithoutEspaciosInput[]
    createMany?: TorneosCreateManyEspaciosInputEnvelope
    set?: TorneosWhereUniqueInput | TorneosWhereUniqueInput[]
    disconnect?: TorneosWhereUniqueInput | TorneosWhereUniqueInput[]
    delete?: TorneosWhereUniqueInput | TorneosWhereUniqueInput[]
    connect?: TorneosWhereUniqueInput | TorneosWhereUniqueInput[]
    update?: TorneosUpdateWithWhereUniqueWithoutEspaciosInput | TorneosUpdateWithWhereUniqueWithoutEspaciosInput[]
    updateMany?: TorneosUpdateManyWithWhereWithoutEspaciosInput | TorneosUpdateManyWithWhereWithoutEspaciosInput[]
    deleteMany?: TorneosScalarWhereInput | TorneosScalarWhereInput[]
  }

  export type ClasesUncheckedUpdateManyWithoutEspaciosNestedInput = {
    create?: XOR<ClasesCreateWithoutEspaciosInput, ClasesUncheckedCreateWithoutEspaciosInput> | ClasesCreateWithoutEspaciosInput[] | ClasesUncheckedCreateWithoutEspaciosInput[]
    connectOrCreate?: ClasesCreateOrConnectWithoutEspaciosInput | ClasesCreateOrConnectWithoutEspaciosInput[]
    upsert?: ClasesUpsertWithWhereUniqueWithoutEspaciosInput | ClasesUpsertWithWhereUniqueWithoutEspaciosInput[]
    createMany?: ClasesCreateManyEspaciosInputEnvelope
    set?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    disconnect?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    delete?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    connect?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    update?: ClasesUpdateWithWhereUniqueWithoutEspaciosInput | ClasesUpdateWithWhereUniqueWithoutEspaciosInput[]
    updateMany?: ClasesUpdateManyWithWhereWithoutEspaciosInput | ClasesUpdateManyWithWhereWithoutEspaciosInput[]
    deleteMany?: ClasesScalarWhereInput | ClasesScalarWhereInput[]
  }

  export type HorariosUncheckedUpdateManyWithoutEspaciosNestedInput = {
    create?: XOR<HorariosCreateWithoutEspaciosInput, HorariosUncheckedCreateWithoutEspaciosInput> | HorariosCreateWithoutEspaciosInput[] | HorariosUncheckedCreateWithoutEspaciosInput[]
    connectOrCreate?: HorariosCreateOrConnectWithoutEspaciosInput | HorariosCreateOrConnectWithoutEspaciosInput[]
    upsert?: HorariosUpsertWithWhereUniqueWithoutEspaciosInput | HorariosUpsertWithWhereUniqueWithoutEspaciosInput[]
    createMany?: HorariosCreateManyEspaciosInputEnvelope
    set?: HorariosWhereUniqueInput | HorariosWhereUniqueInput[]
    disconnect?: HorariosWhereUniqueInput | HorariosWhereUniqueInput[]
    delete?: HorariosWhereUniqueInput | HorariosWhereUniqueInput[]
    connect?: HorariosWhereUniqueInput | HorariosWhereUniqueInput[]
    update?: HorariosUpdateWithWhereUniqueWithoutEspaciosInput | HorariosUpdateWithWhereUniqueWithoutEspaciosInput[]
    updateMany?: HorariosUpdateManyWithWhereWithoutEspaciosInput | HorariosUpdateManyWithWhereWithoutEspaciosInput[]
    deleteMany?: HorariosScalarWhereInput | HorariosScalarWhereInput[]
  }

  export type ReservasUncheckedUpdateManyWithoutEspaciosNestedInput = {
    create?: XOR<ReservasCreateWithoutEspaciosInput, ReservasUncheckedCreateWithoutEspaciosInput> | ReservasCreateWithoutEspaciosInput[] | ReservasUncheckedCreateWithoutEspaciosInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutEspaciosInput | ReservasCreateOrConnectWithoutEspaciosInput[]
    upsert?: ReservasUpsertWithWhereUniqueWithoutEspaciosInput | ReservasUpsertWithWhereUniqueWithoutEspaciosInput[]
    createMany?: ReservasCreateManyEspaciosInputEnvelope
    set?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    disconnect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    delete?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    update?: ReservasUpdateWithWhereUniqueWithoutEspaciosInput | ReservasUpdateWithWhereUniqueWithoutEspaciosInput[]
    updateMany?: ReservasUpdateManyWithWhereWithoutEspaciosInput | ReservasUpdateManyWithWhereWithoutEspaciosInput[]
    deleteMany?: ReservasScalarWhereInput | ReservasScalarWhereInput[]
  }

  export type TorneosUncheckedUpdateManyWithoutEspaciosNestedInput = {
    create?: XOR<TorneosCreateWithoutEspaciosInput, TorneosUncheckedCreateWithoutEspaciosInput> | TorneosCreateWithoutEspaciosInput[] | TorneosUncheckedCreateWithoutEspaciosInput[]
    connectOrCreate?: TorneosCreateOrConnectWithoutEspaciosInput | TorneosCreateOrConnectWithoutEspaciosInput[]
    upsert?: TorneosUpsertWithWhereUniqueWithoutEspaciosInput | TorneosUpsertWithWhereUniqueWithoutEspaciosInput[]
    createMany?: TorneosCreateManyEspaciosInputEnvelope
    set?: TorneosWhereUniqueInput | TorneosWhereUniqueInput[]
    disconnect?: TorneosWhereUniqueInput | TorneosWhereUniqueInput[]
    delete?: TorneosWhereUniqueInput | TorneosWhereUniqueInput[]
    connect?: TorneosWhereUniqueInput | TorneosWhereUniqueInput[]
    update?: TorneosUpdateWithWhereUniqueWithoutEspaciosInput | TorneosUpdateWithWhereUniqueWithoutEspaciosInput[]
    updateMany?: TorneosUpdateManyWithWhereWithoutEspaciosInput | TorneosUpdateManyWithWhereWithoutEspaciosInput[]
    deleteMany?: TorneosScalarWhereInput | TorneosScalarWhereInput[]
  }

  export type ClasesCreateNestedManyWithoutHorariosInput = {
    create?: XOR<ClasesCreateWithoutHorariosInput, ClasesUncheckedCreateWithoutHorariosInput> | ClasesCreateWithoutHorariosInput[] | ClasesUncheckedCreateWithoutHorariosInput[]
    connectOrCreate?: ClasesCreateOrConnectWithoutHorariosInput | ClasesCreateOrConnectWithoutHorariosInput[]
    createMany?: ClasesCreateManyHorariosInputEnvelope
    connect?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
  }

  export type EspaciosCreateNestedOneWithoutHorariosInput = {
    create?: XOR<EspaciosCreateWithoutHorariosInput, EspaciosUncheckedCreateWithoutHorariosInput>
    connectOrCreate?: EspaciosCreateOrConnectWithoutHorariosInput
    connect?: EspaciosWhereUniqueInput
  }

  export type TalleresCreateNestedManyWithoutHorariosInput = {
    create?: XOR<TalleresCreateWithoutHorariosInput, TalleresUncheckedCreateWithoutHorariosInput> | TalleresCreateWithoutHorariosInput[] | TalleresUncheckedCreateWithoutHorariosInput[]
    connectOrCreate?: TalleresCreateOrConnectWithoutHorariosInput | TalleresCreateOrConnectWithoutHorariosInput[]
    createMany?: TalleresCreateManyHorariosInputEnvelope
    connect?: TalleresWhereUniqueInput | TalleresWhereUniqueInput[]
  }

  export type TorneosCreateNestedManyWithoutHorariosInput = {
    create?: XOR<TorneosCreateWithoutHorariosInput, TorneosUncheckedCreateWithoutHorariosInput> | TorneosCreateWithoutHorariosInput[] | TorneosUncheckedCreateWithoutHorariosInput[]
    connectOrCreate?: TorneosCreateOrConnectWithoutHorariosInput | TorneosCreateOrConnectWithoutHorariosInput[]
    createMany?: TorneosCreateManyHorariosInputEnvelope
    connect?: TorneosWhereUniqueInput | TorneosWhereUniqueInput[]
  }

  export type ClasesUncheckedCreateNestedManyWithoutHorariosInput = {
    create?: XOR<ClasesCreateWithoutHorariosInput, ClasesUncheckedCreateWithoutHorariosInput> | ClasesCreateWithoutHorariosInput[] | ClasesUncheckedCreateWithoutHorariosInput[]
    connectOrCreate?: ClasesCreateOrConnectWithoutHorariosInput | ClasesCreateOrConnectWithoutHorariosInput[]
    createMany?: ClasesCreateManyHorariosInputEnvelope
    connect?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
  }

  export type TalleresUncheckedCreateNestedManyWithoutHorariosInput = {
    create?: XOR<TalleresCreateWithoutHorariosInput, TalleresUncheckedCreateWithoutHorariosInput> | TalleresCreateWithoutHorariosInput[] | TalleresUncheckedCreateWithoutHorariosInput[]
    connectOrCreate?: TalleresCreateOrConnectWithoutHorariosInput | TalleresCreateOrConnectWithoutHorariosInput[]
    createMany?: TalleresCreateManyHorariosInputEnvelope
    connect?: TalleresWhereUniqueInput | TalleresWhereUniqueInput[]
  }

  export type TorneosUncheckedCreateNestedManyWithoutHorariosInput = {
    create?: XOR<TorneosCreateWithoutHorariosInput, TorneosUncheckedCreateWithoutHorariosInput> | TorneosCreateWithoutHorariosInput[] | TorneosUncheckedCreateWithoutHorariosInput[]
    connectOrCreate?: TorneosCreateOrConnectWithoutHorariosInput | TorneosCreateOrConnectWithoutHorariosInput[]
    createMany?: TorneosCreateManyHorariosInputEnvelope
    connect?: TorneosWhereUniqueInput | TorneosWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClasesUpdateManyWithoutHorariosNestedInput = {
    create?: XOR<ClasesCreateWithoutHorariosInput, ClasesUncheckedCreateWithoutHorariosInput> | ClasesCreateWithoutHorariosInput[] | ClasesUncheckedCreateWithoutHorariosInput[]
    connectOrCreate?: ClasesCreateOrConnectWithoutHorariosInput | ClasesCreateOrConnectWithoutHorariosInput[]
    upsert?: ClasesUpsertWithWhereUniqueWithoutHorariosInput | ClasesUpsertWithWhereUniqueWithoutHorariosInput[]
    createMany?: ClasesCreateManyHorariosInputEnvelope
    set?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    disconnect?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    delete?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    connect?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    update?: ClasesUpdateWithWhereUniqueWithoutHorariosInput | ClasesUpdateWithWhereUniqueWithoutHorariosInput[]
    updateMany?: ClasesUpdateManyWithWhereWithoutHorariosInput | ClasesUpdateManyWithWhereWithoutHorariosInput[]
    deleteMany?: ClasesScalarWhereInput | ClasesScalarWhereInput[]
  }

  export type EspaciosUpdateOneRequiredWithoutHorariosNestedInput = {
    create?: XOR<EspaciosCreateWithoutHorariosInput, EspaciosUncheckedCreateWithoutHorariosInput>
    connectOrCreate?: EspaciosCreateOrConnectWithoutHorariosInput
    upsert?: EspaciosUpsertWithoutHorariosInput
    connect?: EspaciosWhereUniqueInput
    update?: XOR<XOR<EspaciosUpdateToOneWithWhereWithoutHorariosInput, EspaciosUpdateWithoutHorariosInput>, EspaciosUncheckedUpdateWithoutHorariosInput>
  }

  export type TalleresUpdateManyWithoutHorariosNestedInput = {
    create?: XOR<TalleresCreateWithoutHorariosInput, TalleresUncheckedCreateWithoutHorariosInput> | TalleresCreateWithoutHorariosInput[] | TalleresUncheckedCreateWithoutHorariosInput[]
    connectOrCreate?: TalleresCreateOrConnectWithoutHorariosInput | TalleresCreateOrConnectWithoutHorariosInput[]
    upsert?: TalleresUpsertWithWhereUniqueWithoutHorariosInput | TalleresUpsertWithWhereUniqueWithoutHorariosInput[]
    createMany?: TalleresCreateManyHorariosInputEnvelope
    set?: TalleresWhereUniqueInput | TalleresWhereUniqueInput[]
    disconnect?: TalleresWhereUniqueInput | TalleresWhereUniqueInput[]
    delete?: TalleresWhereUniqueInput | TalleresWhereUniqueInput[]
    connect?: TalleresWhereUniqueInput | TalleresWhereUniqueInput[]
    update?: TalleresUpdateWithWhereUniqueWithoutHorariosInput | TalleresUpdateWithWhereUniqueWithoutHorariosInput[]
    updateMany?: TalleresUpdateManyWithWhereWithoutHorariosInput | TalleresUpdateManyWithWhereWithoutHorariosInput[]
    deleteMany?: TalleresScalarWhereInput | TalleresScalarWhereInput[]
  }

  export type TorneosUpdateManyWithoutHorariosNestedInput = {
    create?: XOR<TorneosCreateWithoutHorariosInput, TorneosUncheckedCreateWithoutHorariosInput> | TorneosCreateWithoutHorariosInput[] | TorneosUncheckedCreateWithoutHorariosInput[]
    connectOrCreate?: TorneosCreateOrConnectWithoutHorariosInput | TorneosCreateOrConnectWithoutHorariosInput[]
    upsert?: TorneosUpsertWithWhereUniqueWithoutHorariosInput | TorneosUpsertWithWhereUniqueWithoutHorariosInput[]
    createMany?: TorneosCreateManyHorariosInputEnvelope
    set?: TorneosWhereUniqueInput | TorneosWhereUniqueInput[]
    disconnect?: TorneosWhereUniqueInput | TorneosWhereUniqueInput[]
    delete?: TorneosWhereUniqueInput | TorneosWhereUniqueInput[]
    connect?: TorneosWhereUniqueInput | TorneosWhereUniqueInput[]
    update?: TorneosUpdateWithWhereUniqueWithoutHorariosInput | TorneosUpdateWithWhereUniqueWithoutHorariosInput[]
    updateMany?: TorneosUpdateManyWithWhereWithoutHorariosInput | TorneosUpdateManyWithWhereWithoutHorariosInput[]
    deleteMany?: TorneosScalarWhereInput | TorneosScalarWhereInput[]
  }

  export type ClasesUncheckedUpdateManyWithoutHorariosNestedInput = {
    create?: XOR<ClasesCreateWithoutHorariosInput, ClasesUncheckedCreateWithoutHorariosInput> | ClasesCreateWithoutHorariosInput[] | ClasesUncheckedCreateWithoutHorariosInput[]
    connectOrCreate?: ClasesCreateOrConnectWithoutHorariosInput | ClasesCreateOrConnectWithoutHorariosInput[]
    upsert?: ClasesUpsertWithWhereUniqueWithoutHorariosInput | ClasesUpsertWithWhereUniqueWithoutHorariosInput[]
    createMany?: ClasesCreateManyHorariosInputEnvelope
    set?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    disconnect?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    delete?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    connect?: ClasesWhereUniqueInput | ClasesWhereUniqueInput[]
    update?: ClasesUpdateWithWhereUniqueWithoutHorariosInput | ClasesUpdateWithWhereUniqueWithoutHorariosInput[]
    updateMany?: ClasesUpdateManyWithWhereWithoutHorariosInput | ClasesUpdateManyWithWhereWithoutHorariosInput[]
    deleteMany?: ClasesScalarWhereInput | ClasesScalarWhereInput[]
  }

  export type TalleresUncheckedUpdateManyWithoutHorariosNestedInput = {
    create?: XOR<TalleresCreateWithoutHorariosInput, TalleresUncheckedCreateWithoutHorariosInput> | TalleresCreateWithoutHorariosInput[] | TalleresUncheckedCreateWithoutHorariosInput[]
    connectOrCreate?: TalleresCreateOrConnectWithoutHorariosInput | TalleresCreateOrConnectWithoutHorariosInput[]
    upsert?: TalleresUpsertWithWhereUniqueWithoutHorariosInput | TalleresUpsertWithWhereUniqueWithoutHorariosInput[]
    createMany?: TalleresCreateManyHorariosInputEnvelope
    set?: TalleresWhereUniqueInput | TalleresWhereUniqueInput[]
    disconnect?: TalleresWhereUniqueInput | TalleresWhereUniqueInput[]
    delete?: TalleresWhereUniqueInput | TalleresWhereUniqueInput[]
    connect?: TalleresWhereUniqueInput | TalleresWhereUniqueInput[]
    update?: TalleresUpdateWithWhereUniqueWithoutHorariosInput | TalleresUpdateWithWhereUniqueWithoutHorariosInput[]
    updateMany?: TalleresUpdateManyWithWhereWithoutHorariosInput | TalleresUpdateManyWithWhereWithoutHorariosInput[]
    deleteMany?: TalleresScalarWhereInput | TalleresScalarWhereInput[]
  }

  export type TorneosUncheckedUpdateManyWithoutHorariosNestedInput = {
    create?: XOR<TorneosCreateWithoutHorariosInput, TorneosUncheckedCreateWithoutHorariosInput> | TorneosCreateWithoutHorariosInput[] | TorneosUncheckedCreateWithoutHorariosInput[]
    connectOrCreate?: TorneosCreateOrConnectWithoutHorariosInput | TorneosCreateOrConnectWithoutHorariosInput[]
    upsert?: TorneosUpsertWithWhereUniqueWithoutHorariosInput | TorneosUpsertWithWhereUniqueWithoutHorariosInput[]
    createMany?: TorneosCreateManyHorariosInputEnvelope
    set?: TorneosWhereUniqueInput | TorneosWhereUniqueInput[]
    disconnect?: TorneosWhereUniqueInput | TorneosWhereUniqueInput[]
    delete?: TorneosWhereUniqueInput | TorneosWhereUniqueInput[]
    connect?: TorneosWhereUniqueInput | TorneosWhereUniqueInput[]
    update?: TorneosUpdateWithWhereUniqueWithoutHorariosInput | TorneosUpdateWithWhereUniqueWithoutHorariosInput[]
    updateMany?: TorneosUpdateManyWithWhereWithoutHorariosInput | TorneosUpdateManyWithWhereWithoutHorariosInput[]
    deleteMany?: TorneosScalarWhereInput | TorneosScalarWhereInput[]
  }

  export type UsuariosCreateNestedOneWithoutInscripcionClasesInput = {
    create?: XOR<UsuariosCreateWithoutInscripcionClasesInput, UsuariosUncheckedCreateWithoutInscripcionClasesInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutInscripcionClasesInput
    connect?: UsuariosWhereUniqueInput
  }

  export type ClasesCreateNestedOneWithoutInscripcionClasesInput = {
    create?: XOR<ClasesCreateWithoutInscripcionClasesInput, ClasesUncheckedCreateWithoutInscripcionClasesInput>
    connectOrCreate?: ClasesCreateOrConnectWithoutInscripcionClasesInput
    connect?: ClasesWhereUniqueInput
  }

  export type UsuariosUpdateOneRequiredWithoutInscripcionClasesNestedInput = {
    create?: XOR<UsuariosCreateWithoutInscripcionClasesInput, UsuariosUncheckedCreateWithoutInscripcionClasesInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutInscripcionClasesInput
    upsert?: UsuariosUpsertWithoutInscripcionClasesInput
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutInscripcionClasesInput, UsuariosUpdateWithoutInscripcionClasesInput>, UsuariosUncheckedUpdateWithoutInscripcionClasesInput>
  }

  export type ClasesUpdateOneRequiredWithoutInscripcionClasesNestedInput = {
    create?: XOR<ClasesCreateWithoutInscripcionClasesInput, ClasesUncheckedCreateWithoutInscripcionClasesInput>
    connectOrCreate?: ClasesCreateOrConnectWithoutInscripcionClasesInput
    upsert?: ClasesUpsertWithoutInscripcionClasesInput
    connect?: ClasesWhereUniqueInput
    update?: XOR<XOR<ClasesUpdateToOneWithWhereWithoutInscripcionClasesInput, ClasesUpdateWithoutInscripcionClasesInput>, ClasesUncheckedUpdateWithoutInscripcionClasesInput>
  }

  export type UsuariosCreateNestedOneWithoutInscripcionTorneosInput = {
    create?: XOR<UsuariosCreateWithoutInscripcionTorneosInput, UsuariosUncheckedCreateWithoutInscripcionTorneosInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutInscripcionTorneosInput
    connect?: UsuariosWhereUniqueInput
  }

  export type TorneosCreateNestedOneWithoutInscripcionTorneosInput = {
    create?: XOR<TorneosCreateWithoutInscripcionTorneosInput, TorneosUncheckedCreateWithoutInscripcionTorneosInput>
    connectOrCreate?: TorneosCreateOrConnectWithoutInscripcionTorneosInput
    connect?: TorneosWhereUniqueInput
  }

  export type UsuariosUpdateOneRequiredWithoutInscripcionTorneosNestedInput = {
    create?: XOR<UsuariosCreateWithoutInscripcionTorneosInput, UsuariosUncheckedCreateWithoutInscripcionTorneosInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutInscripcionTorneosInput
    upsert?: UsuariosUpsertWithoutInscripcionTorneosInput
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutInscripcionTorneosInput, UsuariosUpdateWithoutInscripcionTorneosInput>, UsuariosUncheckedUpdateWithoutInscripcionTorneosInput>
  }

  export type TorneosUpdateOneRequiredWithoutInscripcionTorneosNestedInput = {
    create?: XOR<TorneosCreateWithoutInscripcionTorneosInput, TorneosUncheckedCreateWithoutInscripcionTorneosInput>
    connectOrCreate?: TorneosCreateOrConnectWithoutInscripcionTorneosInput
    upsert?: TorneosUpsertWithoutInscripcionTorneosInput
    connect?: TorneosWhereUniqueInput
    update?: XOR<XOR<TorneosUpdateToOneWithWhereWithoutInscripcionTorneosInput, TorneosUpdateWithoutInscripcionTorneosInput>, TorneosUncheckedUpdateWithoutInscripcionTorneosInput>
  }

  export type UsuariosCreateNestedOneWithoutReservasInput = {
    create?: XOR<UsuariosCreateWithoutReservasInput, UsuariosUncheckedCreateWithoutReservasInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutReservasInput
    connect?: UsuariosWhereUniqueInput
  }

  export type EspaciosCreateNestedOneWithoutReservasInput = {
    create?: XOR<EspaciosCreateWithoutReservasInput, EspaciosUncheckedCreateWithoutReservasInput>
    connectOrCreate?: EspaciosCreateOrConnectWithoutReservasInput
    connect?: EspaciosWhereUniqueInput
  }

  export type NullableEnumReservas_EstadoFieldUpdateOperationsInput = {
    set?: $Enums.Reservas_Estado | null
  }

  export type UsuariosUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<UsuariosCreateWithoutReservasInput, UsuariosUncheckedCreateWithoutReservasInput>
    connectOrCreate?: UsuariosCreateOrConnectWithoutReservasInput
    upsert?: UsuariosUpsertWithoutReservasInput
    connect?: UsuariosWhereUniqueInput
    update?: XOR<XOR<UsuariosUpdateToOneWithWhereWithoutReservasInput, UsuariosUpdateWithoutReservasInput>, UsuariosUncheckedUpdateWithoutReservasInput>
  }

  export type EspaciosUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<EspaciosCreateWithoutReservasInput, EspaciosUncheckedCreateWithoutReservasInput>
    connectOrCreate?: EspaciosCreateOrConnectWithoutReservasInput
    upsert?: EspaciosUpsertWithoutReservasInput
    connect?: EspaciosWhereUniqueInput
    update?: XOR<XOR<EspaciosUpdateToOneWithWhereWithoutReservasInput, EspaciosUpdateWithoutReservasInput>, EspaciosUncheckedUpdateWithoutReservasInput>
  }

  export type EntrenadoresCreateNestedOneWithoutTalleresInput = {
    create?: XOR<EntrenadoresCreateWithoutTalleresInput, EntrenadoresUncheckedCreateWithoutTalleresInput>
    connectOrCreate?: EntrenadoresCreateOrConnectWithoutTalleresInput
    connect?: EntrenadoresWhereUniqueInput
  }

  export type HorariosCreateNestedOneWithoutTalleresInput = {
    create?: XOR<HorariosCreateWithoutTalleresInput, HorariosUncheckedCreateWithoutTalleresInput>
    connectOrCreate?: HorariosCreateOrConnectWithoutTalleresInput
    connect?: HorariosWhereUniqueInput
  }

  export type EntrenadoresUpdateOneRequiredWithoutTalleresNestedInput = {
    create?: XOR<EntrenadoresCreateWithoutTalleresInput, EntrenadoresUncheckedCreateWithoutTalleresInput>
    connectOrCreate?: EntrenadoresCreateOrConnectWithoutTalleresInput
    upsert?: EntrenadoresUpsertWithoutTalleresInput
    connect?: EntrenadoresWhereUniqueInput
    update?: XOR<XOR<EntrenadoresUpdateToOneWithWhereWithoutTalleresInput, EntrenadoresUpdateWithoutTalleresInput>, EntrenadoresUncheckedUpdateWithoutTalleresInput>
  }

  export type HorariosUpdateOneRequiredWithoutTalleresNestedInput = {
    create?: XOR<HorariosCreateWithoutTalleresInput, HorariosUncheckedCreateWithoutTalleresInput>
    connectOrCreate?: HorariosCreateOrConnectWithoutTalleresInput
    upsert?: HorariosUpsertWithoutTalleresInput
    connect?: HorariosWhereUniqueInput
    update?: XOR<XOR<HorariosUpdateToOneWithWhereWithoutTalleresInput, HorariosUpdateWithoutTalleresInput>, HorariosUncheckedUpdateWithoutTalleresInput>
  }

  export type InscripcionTorneosCreateNestedManyWithoutTorneosInput = {
    create?: XOR<InscripcionTorneosCreateWithoutTorneosInput, InscripcionTorneosUncheckedCreateWithoutTorneosInput> | InscripcionTorneosCreateWithoutTorneosInput[] | InscripcionTorneosUncheckedCreateWithoutTorneosInput[]
    connectOrCreate?: InscripcionTorneosCreateOrConnectWithoutTorneosInput | InscripcionTorneosCreateOrConnectWithoutTorneosInput[]
    createMany?: InscripcionTorneosCreateManyTorneosInputEnvelope
    connect?: InscripcionTorneosWhereUniqueInput | InscripcionTorneosWhereUniqueInput[]
  }

  export type EspaciosCreateNestedOneWithoutTorneosInput = {
    create?: XOR<EspaciosCreateWithoutTorneosInput, EspaciosUncheckedCreateWithoutTorneosInput>
    connectOrCreate?: EspaciosCreateOrConnectWithoutTorneosInput
    connect?: EspaciosWhereUniqueInput
  }

  export type HorariosCreateNestedOneWithoutTorneosInput = {
    create?: XOR<HorariosCreateWithoutTorneosInput, HorariosUncheckedCreateWithoutTorneosInput>
    connectOrCreate?: HorariosCreateOrConnectWithoutTorneosInput
    connect?: HorariosWhereUniqueInput
  }

  export type InscripcionTorneosUncheckedCreateNestedManyWithoutTorneosInput = {
    create?: XOR<InscripcionTorneosCreateWithoutTorneosInput, InscripcionTorneosUncheckedCreateWithoutTorneosInput> | InscripcionTorneosCreateWithoutTorneosInput[] | InscripcionTorneosUncheckedCreateWithoutTorneosInput[]
    connectOrCreate?: InscripcionTorneosCreateOrConnectWithoutTorneosInput | InscripcionTorneosCreateOrConnectWithoutTorneosInput[]
    createMany?: InscripcionTorneosCreateManyTorneosInputEnvelope
    connect?: InscripcionTorneosWhereUniqueInput | InscripcionTorneosWhereUniqueInput[]
  }

  export type InscripcionTorneosUpdateManyWithoutTorneosNestedInput = {
    create?: XOR<InscripcionTorneosCreateWithoutTorneosInput, InscripcionTorneosUncheckedCreateWithoutTorneosInput> | InscripcionTorneosCreateWithoutTorneosInput[] | InscripcionTorneosUncheckedCreateWithoutTorneosInput[]
    connectOrCreate?: InscripcionTorneosCreateOrConnectWithoutTorneosInput | InscripcionTorneosCreateOrConnectWithoutTorneosInput[]
    upsert?: InscripcionTorneosUpsertWithWhereUniqueWithoutTorneosInput | InscripcionTorneosUpsertWithWhereUniqueWithoutTorneosInput[]
    createMany?: InscripcionTorneosCreateManyTorneosInputEnvelope
    set?: InscripcionTorneosWhereUniqueInput | InscripcionTorneosWhereUniqueInput[]
    disconnect?: InscripcionTorneosWhereUniqueInput | InscripcionTorneosWhereUniqueInput[]
    delete?: InscripcionTorneosWhereUniqueInput | InscripcionTorneosWhereUniqueInput[]
    connect?: InscripcionTorneosWhereUniqueInput | InscripcionTorneosWhereUniqueInput[]
    update?: InscripcionTorneosUpdateWithWhereUniqueWithoutTorneosInput | InscripcionTorneosUpdateWithWhereUniqueWithoutTorneosInput[]
    updateMany?: InscripcionTorneosUpdateManyWithWhereWithoutTorneosInput | InscripcionTorneosUpdateManyWithWhereWithoutTorneosInput[]
    deleteMany?: InscripcionTorneosScalarWhereInput | InscripcionTorneosScalarWhereInput[]
  }

  export type EspaciosUpdateOneWithoutTorneosNestedInput = {
    create?: XOR<EspaciosCreateWithoutTorneosInput, EspaciosUncheckedCreateWithoutTorneosInput>
    connectOrCreate?: EspaciosCreateOrConnectWithoutTorneosInput
    upsert?: EspaciosUpsertWithoutTorneosInput
    disconnect?: EspaciosWhereInput | boolean
    delete?: EspaciosWhereInput | boolean
    connect?: EspaciosWhereUniqueInput
    update?: XOR<XOR<EspaciosUpdateToOneWithWhereWithoutTorneosInput, EspaciosUpdateWithoutTorneosInput>, EspaciosUncheckedUpdateWithoutTorneosInput>
  }

  export type HorariosUpdateOneWithoutTorneosNestedInput = {
    create?: XOR<HorariosCreateWithoutTorneosInput, HorariosUncheckedCreateWithoutTorneosInput>
    connectOrCreate?: HorariosCreateOrConnectWithoutTorneosInput
    upsert?: HorariosUpsertWithoutTorneosInput
    disconnect?: HorariosWhereInput | boolean
    delete?: HorariosWhereInput | boolean
    connect?: HorariosWhereUniqueInput
    update?: XOR<XOR<HorariosUpdateToOneWithWhereWithoutTorneosInput, HorariosUpdateWithoutTorneosInput>, HorariosUncheckedUpdateWithoutTorneosInput>
  }

  export type InscripcionTorneosUncheckedUpdateManyWithoutTorneosNestedInput = {
    create?: XOR<InscripcionTorneosCreateWithoutTorneosInput, InscripcionTorneosUncheckedCreateWithoutTorneosInput> | InscripcionTorneosCreateWithoutTorneosInput[] | InscripcionTorneosUncheckedCreateWithoutTorneosInput[]
    connectOrCreate?: InscripcionTorneosCreateOrConnectWithoutTorneosInput | InscripcionTorneosCreateOrConnectWithoutTorneosInput[]
    upsert?: InscripcionTorneosUpsertWithWhereUniqueWithoutTorneosInput | InscripcionTorneosUpsertWithWhereUniqueWithoutTorneosInput[]
    createMany?: InscripcionTorneosCreateManyTorneosInputEnvelope
    set?: InscripcionTorneosWhereUniqueInput | InscripcionTorneosWhereUniqueInput[]
    disconnect?: InscripcionTorneosWhereUniqueInput | InscripcionTorneosWhereUniqueInput[]
    delete?: InscripcionTorneosWhereUniqueInput | InscripcionTorneosWhereUniqueInput[]
    connect?: InscripcionTorneosWhereUniqueInput | InscripcionTorneosWhereUniqueInput[]
    update?: InscripcionTorneosUpdateWithWhereUniqueWithoutTorneosInput | InscripcionTorneosUpdateWithWhereUniqueWithoutTorneosInput[]
    updateMany?: InscripcionTorneosUpdateManyWithWhereWithoutTorneosInput | InscripcionTorneosUpdateManyWithWhereWithoutTorneosInput[]
    deleteMany?: InscripcionTorneosScalarWhereInput | InscripcionTorneosScalarWhereInput[]
  }

  export type ComentariosCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<ComentariosCreateWithoutUsuariosInput, ComentariosUncheckedCreateWithoutUsuariosInput> | ComentariosCreateWithoutUsuariosInput[] | ComentariosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ComentariosCreateOrConnectWithoutUsuariosInput | ComentariosCreateOrConnectWithoutUsuariosInput[]
    createMany?: ComentariosCreateManyUsuariosInputEnvelope
    connect?: ComentariosWhereUniqueInput | ComentariosWhereUniqueInput[]
  }

  export type EntrenadoresCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<EntrenadoresCreateWithoutUsuariosInput, EntrenadoresUncheckedCreateWithoutUsuariosInput> | EntrenadoresCreateWithoutUsuariosInput[] | EntrenadoresUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: EntrenadoresCreateOrConnectWithoutUsuariosInput | EntrenadoresCreateOrConnectWithoutUsuariosInput[]
    createMany?: EntrenadoresCreateManyUsuariosInputEnvelope
    connect?: EntrenadoresWhereUniqueInput | EntrenadoresWhereUniqueInput[]
  }

  export type InscripcionClasesCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<InscripcionClasesCreateWithoutUsuariosInput, InscripcionClasesUncheckedCreateWithoutUsuariosInput> | InscripcionClasesCreateWithoutUsuariosInput[] | InscripcionClasesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: InscripcionClasesCreateOrConnectWithoutUsuariosInput | InscripcionClasesCreateOrConnectWithoutUsuariosInput[]
    createMany?: InscripcionClasesCreateManyUsuariosInputEnvelope
    connect?: InscripcionClasesWhereUniqueInput | InscripcionClasesWhereUniqueInput[]
  }

  export type InscripcionTorneosCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<InscripcionTorneosCreateWithoutUsuariosInput, InscripcionTorneosUncheckedCreateWithoutUsuariosInput> | InscripcionTorneosCreateWithoutUsuariosInput[] | InscripcionTorneosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: InscripcionTorneosCreateOrConnectWithoutUsuariosInput | InscripcionTorneosCreateOrConnectWithoutUsuariosInput[]
    createMany?: InscripcionTorneosCreateManyUsuariosInputEnvelope
    connect?: InscripcionTorneosWhereUniqueInput | InscripcionTorneosWhereUniqueInput[]
  }

  export type ReservasCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<ReservasCreateWithoutUsuariosInput, ReservasUncheckedCreateWithoutUsuariosInput> | ReservasCreateWithoutUsuariosInput[] | ReservasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutUsuariosInput | ReservasCreateOrConnectWithoutUsuariosInput[]
    createMany?: ReservasCreateManyUsuariosInputEnvelope
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
  }

  export type ComentariosUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<ComentariosCreateWithoutUsuariosInput, ComentariosUncheckedCreateWithoutUsuariosInput> | ComentariosCreateWithoutUsuariosInput[] | ComentariosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ComentariosCreateOrConnectWithoutUsuariosInput | ComentariosCreateOrConnectWithoutUsuariosInput[]
    createMany?: ComentariosCreateManyUsuariosInputEnvelope
    connect?: ComentariosWhereUniqueInput | ComentariosWhereUniqueInput[]
  }

  export type EntrenadoresUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<EntrenadoresCreateWithoutUsuariosInput, EntrenadoresUncheckedCreateWithoutUsuariosInput> | EntrenadoresCreateWithoutUsuariosInput[] | EntrenadoresUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: EntrenadoresCreateOrConnectWithoutUsuariosInput | EntrenadoresCreateOrConnectWithoutUsuariosInput[]
    createMany?: EntrenadoresCreateManyUsuariosInputEnvelope
    connect?: EntrenadoresWhereUniqueInput | EntrenadoresWhereUniqueInput[]
  }

  export type InscripcionClasesUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<InscripcionClasesCreateWithoutUsuariosInput, InscripcionClasesUncheckedCreateWithoutUsuariosInput> | InscripcionClasesCreateWithoutUsuariosInput[] | InscripcionClasesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: InscripcionClasesCreateOrConnectWithoutUsuariosInput | InscripcionClasesCreateOrConnectWithoutUsuariosInput[]
    createMany?: InscripcionClasesCreateManyUsuariosInputEnvelope
    connect?: InscripcionClasesWhereUniqueInput | InscripcionClasesWhereUniqueInput[]
  }

  export type InscripcionTorneosUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<InscripcionTorneosCreateWithoutUsuariosInput, InscripcionTorneosUncheckedCreateWithoutUsuariosInput> | InscripcionTorneosCreateWithoutUsuariosInput[] | InscripcionTorneosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: InscripcionTorneosCreateOrConnectWithoutUsuariosInput | InscripcionTorneosCreateOrConnectWithoutUsuariosInput[]
    createMany?: InscripcionTorneosCreateManyUsuariosInputEnvelope
    connect?: InscripcionTorneosWhereUniqueInput | InscripcionTorneosWhereUniqueInput[]
  }

  export type ReservasUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<ReservasCreateWithoutUsuariosInput, ReservasUncheckedCreateWithoutUsuariosInput> | ReservasCreateWithoutUsuariosInput[] | ReservasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutUsuariosInput | ReservasCreateOrConnectWithoutUsuariosInput[]
    createMany?: ReservasCreateManyUsuariosInputEnvelope
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
  }

  export type EnumUsuarios_NivelFieldUpdateOperationsInput = {
    set?: $Enums.Usuarios_Nivel
  }

  export type ComentariosUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<ComentariosCreateWithoutUsuariosInput, ComentariosUncheckedCreateWithoutUsuariosInput> | ComentariosCreateWithoutUsuariosInput[] | ComentariosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ComentariosCreateOrConnectWithoutUsuariosInput | ComentariosCreateOrConnectWithoutUsuariosInput[]
    upsert?: ComentariosUpsertWithWhereUniqueWithoutUsuariosInput | ComentariosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: ComentariosCreateManyUsuariosInputEnvelope
    set?: ComentariosWhereUniqueInput | ComentariosWhereUniqueInput[]
    disconnect?: ComentariosWhereUniqueInput | ComentariosWhereUniqueInput[]
    delete?: ComentariosWhereUniqueInput | ComentariosWhereUniqueInput[]
    connect?: ComentariosWhereUniqueInput | ComentariosWhereUniqueInput[]
    update?: ComentariosUpdateWithWhereUniqueWithoutUsuariosInput | ComentariosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: ComentariosUpdateManyWithWhereWithoutUsuariosInput | ComentariosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: ComentariosScalarWhereInput | ComentariosScalarWhereInput[]
  }

  export type EntrenadoresUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<EntrenadoresCreateWithoutUsuariosInput, EntrenadoresUncheckedCreateWithoutUsuariosInput> | EntrenadoresCreateWithoutUsuariosInput[] | EntrenadoresUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: EntrenadoresCreateOrConnectWithoutUsuariosInput | EntrenadoresCreateOrConnectWithoutUsuariosInput[]
    upsert?: EntrenadoresUpsertWithWhereUniqueWithoutUsuariosInput | EntrenadoresUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: EntrenadoresCreateManyUsuariosInputEnvelope
    set?: EntrenadoresWhereUniqueInput | EntrenadoresWhereUniqueInput[]
    disconnect?: EntrenadoresWhereUniqueInput | EntrenadoresWhereUniqueInput[]
    delete?: EntrenadoresWhereUniqueInput | EntrenadoresWhereUniqueInput[]
    connect?: EntrenadoresWhereUniqueInput | EntrenadoresWhereUniqueInput[]
    update?: EntrenadoresUpdateWithWhereUniqueWithoutUsuariosInput | EntrenadoresUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: EntrenadoresUpdateManyWithWhereWithoutUsuariosInput | EntrenadoresUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: EntrenadoresScalarWhereInput | EntrenadoresScalarWhereInput[]
  }

  export type InscripcionClasesUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<InscripcionClasesCreateWithoutUsuariosInput, InscripcionClasesUncheckedCreateWithoutUsuariosInput> | InscripcionClasesCreateWithoutUsuariosInput[] | InscripcionClasesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: InscripcionClasesCreateOrConnectWithoutUsuariosInput | InscripcionClasesCreateOrConnectWithoutUsuariosInput[]
    upsert?: InscripcionClasesUpsertWithWhereUniqueWithoutUsuariosInput | InscripcionClasesUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: InscripcionClasesCreateManyUsuariosInputEnvelope
    set?: InscripcionClasesWhereUniqueInput | InscripcionClasesWhereUniqueInput[]
    disconnect?: InscripcionClasesWhereUniqueInput | InscripcionClasesWhereUniqueInput[]
    delete?: InscripcionClasesWhereUniqueInput | InscripcionClasesWhereUniqueInput[]
    connect?: InscripcionClasesWhereUniqueInput | InscripcionClasesWhereUniqueInput[]
    update?: InscripcionClasesUpdateWithWhereUniqueWithoutUsuariosInput | InscripcionClasesUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: InscripcionClasesUpdateManyWithWhereWithoutUsuariosInput | InscripcionClasesUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: InscripcionClasesScalarWhereInput | InscripcionClasesScalarWhereInput[]
  }

  export type InscripcionTorneosUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<InscripcionTorneosCreateWithoutUsuariosInput, InscripcionTorneosUncheckedCreateWithoutUsuariosInput> | InscripcionTorneosCreateWithoutUsuariosInput[] | InscripcionTorneosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: InscripcionTorneosCreateOrConnectWithoutUsuariosInput | InscripcionTorneosCreateOrConnectWithoutUsuariosInput[]
    upsert?: InscripcionTorneosUpsertWithWhereUniqueWithoutUsuariosInput | InscripcionTorneosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: InscripcionTorneosCreateManyUsuariosInputEnvelope
    set?: InscripcionTorneosWhereUniqueInput | InscripcionTorneosWhereUniqueInput[]
    disconnect?: InscripcionTorneosWhereUniqueInput | InscripcionTorneosWhereUniqueInput[]
    delete?: InscripcionTorneosWhereUniqueInput | InscripcionTorneosWhereUniqueInput[]
    connect?: InscripcionTorneosWhereUniqueInput | InscripcionTorneosWhereUniqueInput[]
    update?: InscripcionTorneosUpdateWithWhereUniqueWithoutUsuariosInput | InscripcionTorneosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: InscripcionTorneosUpdateManyWithWhereWithoutUsuariosInput | InscripcionTorneosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: InscripcionTorneosScalarWhereInput | InscripcionTorneosScalarWhereInput[]
  }

  export type ReservasUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<ReservasCreateWithoutUsuariosInput, ReservasUncheckedCreateWithoutUsuariosInput> | ReservasCreateWithoutUsuariosInput[] | ReservasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutUsuariosInput | ReservasCreateOrConnectWithoutUsuariosInput[]
    upsert?: ReservasUpsertWithWhereUniqueWithoutUsuariosInput | ReservasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: ReservasCreateManyUsuariosInputEnvelope
    set?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    disconnect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    delete?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    update?: ReservasUpdateWithWhereUniqueWithoutUsuariosInput | ReservasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: ReservasUpdateManyWithWhereWithoutUsuariosInput | ReservasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: ReservasScalarWhereInput | ReservasScalarWhereInput[]
  }

  export type ComentariosUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<ComentariosCreateWithoutUsuariosInput, ComentariosUncheckedCreateWithoutUsuariosInput> | ComentariosCreateWithoutUsuariosInput[] | ComentariosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ComentariosCreateOrConnectWithoutUsuariosInput | ComentariosCreateOrConnectWithoutUsuariosInput[]
    upsert?: ComentariosUpsertWithWhereUniqueWithoutUsuariosInput | ComentariosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: ComentariosCreateManyUsuariosInputEnvelope
    set?: ComentariosWhereUniqueInput | ComentariosWhereUniqueInput[]
    disconnect?: ComentariosWhereUniqueInput | ComentariosWhereUniqueInput[]
    delete?: ComentariosWhereUniqueInput | ComentariosWhereUniqueInput[]
    connect?: ComentariosWhereUniqueInput | ComentariosWhereUniqueInput[]
    update?: ComentariosUpdateWithWhereUniqueWithoutUsuariosInput | ComentariosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: ComentariosUpdateManyWithWhereWithoutUsuariosInput | ComentariosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: ComentariosScalarWhereInput | ComentariosScalarWhereInput[]
  }

  export type EntrenadoresUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<EntrenadoresCreateWithoutUsuariosInput, EntrenadoresUncheckedCreateWithoutUsuariosInput> | EntrenadoresCreateWithoutUsuariosInput[] | EntrenadoresUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: EntrenadoresCreateOrConnectWithoutUsuariosInput | EntrenadoresCreateOrConnectWithoutUsuariosInput[]
    upsert?: EntrenadoresUpsertWithWhereUniqueWithoutUsuariosInput | EntrenadoresUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: EntrenadoresCreateManyUsuariosInputEnvelope
    set?: EntrenadoresWhereUniqueInput | EntrenadoresWhereUniqueInput[]
    disconnect?: EntrenadoresWhereUniqueInput | EntrenadoresWhereUniqueInput[]
    delete?: EntrenadoresWhereUniqueInput | EntrenadoresWhereUniqueInput[]
    connect?: EntrenadoresWhereUniqueInput | EntrenadoresWhereUniqueInput[]
    update?: EntrenadoresUpdateWithWhereUniqueWithoutUsuariosInput | EntrenadoresUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: EntrenadoresUpdateManyWithWhereWithoutUsuariosInput | EntrenadoresUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: EntrenadoresScalarWhereInput | EntrenadoresScalarWhereInput[]
  }

  export type InscripcionClasesUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<InscripcionClasesCreateWithoutUsuariosInput, InscripcionClasesUncheckedCreateWithoutUsuariosInput> | InscripcionClasesCreateWithoutUsuariosInput[] | InscripcionClasesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: InscripcionClasesCreateOrConnectWithoutUsuariosInput | InscripcionClasesCreateOrConnectWithoutUsuariosInput[]
    upsert?: InscripcionClasesUpsertWithWhereUniqueWithoutUsuariosInput | InscripcionClasesUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: InscripcionClasesCreateManyUsuariosInputEnvelope
    set?: InscripcionClasesWhereUniqueInput | InscripcionClasesWhereUniqueInput[]
    disconnect?: InscripcionClasesWhereUniqueInput | InscripcionClasesWhereUniqueInput[]
    delete?: InscripcionClasesWhereUniqueInput | InscripcionClasesWhereUniqueInput[]
    connect?: InscripcionClasesWhereUniqueInput | InscripcionClasesWhereUniqueInput[]
    update?: InscripcionClasesUpdateWithWhereUniqueWithoutUsuariosInput | InscripcionClasesUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: InscripcionClasesUpdateManyWithWhereWithoutUsuariosInput | InscripcionClasesUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: InscripcionClasesScalarWhereInput | InscripcionClasesScalarWhereInput[]
  }

  export type InscripcionTorneosUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<InscripcionTorneosCreateWithoutUsuariosInput, InscripcionTorneosUncheckedCreateWithoutUsuariosInput> | InscripcionTorneosCreateWithoutUsuariosInput[] | InscripcionTorneosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: InscripcionTorneosCreateOrConnectWithoutUsuariosInput | InscripcionTorneosCreateOrConnectWithoutUsuariosInput[]
    upsert?: InscripcionTorneosUpsertWithWhereUniqueWithoutUsuariosInput | InscripcionTorneosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: InscripcionTorneosCreateManyUsuariosInputEnvelope
    set?: InscripcionTorneosWhereUniqueInput | InscripcionTorneosWhereUniqueInput[]
    disconnect?: InscripcionTorneosWhereUniqueInput | InscripcionTorneosWhereUniqueInput[]
    delete?: InscripcionTorneosWhereUniqueInput | InscripcionTorneosWhereUniqueInput[]
    connect?: InscripcionTorneosWhereUniqueInput | InscripcionTorneosWhereUniqueInput[]
    update?: InscripcionTorneosUpdateWithWhereUniqueWithoutUsuariosInput | InscripcionTorneosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: InscripcionTorneosUpdateManyWithWhereWithoutUsuariosInput | InscripcionTorneosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: InscripcionTorneosScalarWhereInput | InscripcionTorneosScalarWhereInput[]
  }

  export type ReservasUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<ReservasCreateWithoutUsuariosInput, ReservasUncheckedCreateWithoutUsuariosInput> | ReservasCreateWithoutUsuariosInput[] | ReservasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: ReservasCreateOrConnectWithoutUsuariosInput | ReservasCreateOrConnectWithoutUsuariosInput[]
    upsert?: ReservasUpsertWithWhereUniqueWithoutUsuariosInput | ReservasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: ReservasCreateManyUsuariosInputEnvelope
    set?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    disconnect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    delete?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    connect?: ReservasWhereUniqueInput | ReservasWhereUniqueInput[]
    update?: ReservasUpdateWithWhereUniqueWithoutUsuariosInput | ReservasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: ReservasUpdateManyWithWhereWithoutUsuariosInput | ReservasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: ReservasScalarWhereInput | ReservasScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumEspacios_TipoFilter<$PrismaModel = never> = {
    equals?: $Enums.Espacios_Tipo | EnumEspacios_TipoFieldRefInput<$PrismaModel>
    in?: $Enums.Espacios_Tipo[]
    notIn?: $Enums.Espacios_Tipo[]
    not?: NestedEnumEspacios_TipoFilter<$PrismaModel> | $Enums.Espacios_Tipo
  }

  export type NestedEnumEspacios_TipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Espacios_Tipo | EnumEspacios_TipoFieldRefInput<$PrismaModel>
    in?: $Enums.Espacios_Tipo[]
    notIn?: $Enums.Espacios_Tipo[]
    not?: NestedEnumEspacios_TipoWithAggregatesFilter<$PrismaModel> | $Enums.Espacios_Tipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEspacios_TipoFilter<$PrismaModel>
    _max?: NestedEnumEspacios_TipoFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumReservas_EstadoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Reservas_Estado | EnumReservas_EstadoFieldRefInput<$PrismaModel> | null
    in?: $Enums.Reservas_Estado[] | null
    notIn?: $Enums.Reservas_Estado[] | null
    not?: NestedEnumReservas_EstadoNullableFilter<$PrismaModel> | $Enums.Reservas_Estado | null
  }

  export type NestedEnumReservas_EstadoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Reservas_Estado | EnumReservas_EstadoFieldRefInput<$PrismaModel> | null
    in?: $Enums.Reservas_Estado[] | null
    notIn?: $Enums.Reservas_Estado[] | null
    not?: NestedEnumReservas_EstadoNullableWithAggregatesFilter<$PrismaModel> | $Enums.Reservas_Estado | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumReservas_EstadoNullableFilter<$PrismaModel>
    _max?: NestedEnumReservas_EstadoNullableFilter<$PrismaModel>
  }

  export type NestedEnumUsuarios_NivelFilter<$PrismaModel = never> = {
    equals?: $Enums.Usuarios_Nivel | EnumUsuarios_NivelFieldRefInput<$PrismaModel>
    in?: $Enums.Usuarios_Nivel[]
    notIn?: $Enums.Usuarios_Nivel[]
    not?: NestedEnumUsuarios_NivelFilter<$PrismaModel> | $Enums.Usuarios_Nivel
  }

  export type NestedEnumUsuarios_NivelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Usuarios_Nivel | EnumUsuarios_NivelFieldRefInput<$PrismaModel>
    in?: $Enums.Usuarios_Nivel[]
    notIn?: $Enums.Usuarios_Nivel[]
    not?: NestedEnumUsuarios_NivelWithAggregatesFilter<$PrismaModel> | $Enums.Usuarios_Nivel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUsuarios_NivelFilter<$PrismaModel>
    _max?: NestedEnumUsuarios_NivelFilter<$PrismaModel>
  }

  export type EntrenadoresCreateWithoutClasesInput = {
    Especialidad: string
    Experiencia?: string | null
    Telefono?: string | null
    Usuarios?: UsuariosCreateNestedOneWithoutEntrenadoresInput
    Talleres?: TalleresCreateNestedManyWithoutEntrenadoresInput
  }

  export type EntrenadoresUncheckedCreateWithoutClasesInput = {
    IdEntrenador?: number
    FkIdUsuario?: number | null
    Especialidad: string
    Experiencia?: string | null
    Telefono?: string | null
    Talleres?: TalleresUncheckedCreateNestedManyWithoutEntrenadoresInput
  }

  export type EntrenadoresCreateOrConnectWithoutClasesInput = {
    where: EntrenadoresWhereUniqueInput
    create: XOR<EntrenadoresCreateWithoutClasesInput, EntrenadoresUncheckedCreateWithoutClasesInput>
  }

  export type EspaciosCreateWithoutClasesInput = {
    NombreE: string
    Tipo: $Enums.Espacios_Tipo
    Capacidad: number
    Descripcion?: string | null
    Ubicacion: string
    Horarios?: HorariosCreateNestedManyWithoutEspaciosInput
    Reservas?: ReservasCreateNestedManyWithoutEspaciosInput
    Torneos?: TorneosCreateNestedManyWithoutEspaciosInput
  }

  export type EspaciosUncheckedCreateWithoutClasesInput = {
    IdEspacio?: number
    NombreE: string
    Tipo: $Enums.Espacios_Tipo
    Capacidad: number
    Descripcion?: string | null
    Ubicacion: string
    Horarios?: HorariosUncheckedCreateNestedManyWithoutEspaciosInput
    Reservas?: ReservasUncheckedCreateNestedManyWithoutEspaciosInput
    Torneos?: TorneosUncheckedCreateNestedManyWithoutEspaciosInput
  }

  export type EspaciosCreateOrConnectWithoutClasesInput = {
    where: EspaciosWhereUniqueInput
    create: XOR<EspaciosCreateWithoutClasesInput, EspaciosUncheckedCreateWithoutClasesInput>
  }

  export type HorariosCreateWithoutClasesInput = {
    DiaSemana: string
    HoraInicio: Date | string
    HoraFin: Date | string
    Espacios: EspaciosCreateNestedOneWithoutHorariosInput
    Talleres?: TalleresCreateNestedManyWithoutHorariosInput
    Torneos?: TorneosCreateNestedManyWithoutHorariosInput
  }

  export type HorariosUncheckedCreateWithoutClasesInput = {
    IdHorario?: number
    FkIdEspacio: number
    DiaSemana: string
    HoraInicio: Date | string
    HoraFin: Date | string
    Talleres?: TalleresUncheckedCreateNestedManyWithoutHorariosInput
    Torneos?: TorneosUncheckedCreateNestedManyWithoutHorariosInput
  }

  export type HorariosCreateOrConnectWithoutClasesInput = {
    where: HorariosWhereUniqueInput
    create: XOR<HorariosCreateWithoutClasesInput, HorariosUncheckedCreateWithoutClasesInput>
  }

  export type InscripcionClasesCreateWithoutClasesInput = {
    FechaI?: Date | string | null
    Usuarios: UsuariosCreateNestedOneWithoutInscripcionClasesInput
  }

  export type InscripcionClasesUncheckedCreateWithoutClasesInput = {
    IdInscripcionClase?: number
    FkIdUsuario: number
    FechaI?: Date | string | null
  }

  export type InscripcionClasesCreateOrConnectWithoutClasesInput = {
    where: InscripcionClasesWhereUniqueInput
    create: XOR<InscripcionClasesCreateWithoutClasesInput, InscripcionClasesUncheckedCreateWithoutClasesInput>
  }

  export type InscripcionClasesCreateManyClasesInputEnvelope = {
    data: InscripcionClasesCreateManyClasesInput | InscripcionClasesCreateManyClasesInput[]
    skipDuplicates?: boolean
  }

  export type EntrenadoresUpsertWithoutClasesInput = {
    update: XOR<EntrenadoresUpdateWithoutClasesInput, EntrenadoresUncheckedUpdateWithoutClasesInput>
    create: XOR<EntrenadoresCreateWithoutClasesInput, EntrenadoresUncheckedCreateWithoutClasesInput>
    where?: EntrenadoresWhereInput
  }

  export type EntrenadoresUpdateToOneWithWhereWithoutClasesInput = {
    where?: EntrenadoresWhereInput
    data: XOR<EntrenadoresUpdateWithoutClasesInput, EntrenadoresUncheckedUpdateWithoutClasesInput>
  }

  export type EntrenadoresUpdateWithoutClasesInput = {
    Especialidad?: StringFieldUpdateOperationsInput | string
    Experiencia?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Usuarios?: UsuariosUpdateOneWithoutEntrenadoresNestedInput
    Talleres?: TalleresUpdateManyWithoutEntrenadoresNestedInput
  }

  export type EntrenadoresUncheckedUpdateWithoutClasesInput = {
    IdEntrenador?: IntFieldUpdateOperationsInput | number
    FkIdUsuario?: NullableIntFieldUpdateOperationsInput | number | null
    Especialidad?: StringFieldUpdateOperationsInput | string
    Experiencia?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Talleres?: TalleresUncheckedUpdateManyWithoutEntrenadoresNestedInput
  }

  export type EspaciosUpsertWithoutClasesInput = {
    update: XOR<EspaciosUpdateWithoutClasesInput, EspaciosUncheckedUpdateWithoutClasesInput>
    create: XOR<EspaciosCreateWithoutClasesInput, EspaciosUncheckedCreateWithoutClasesInput>
    where?: EspaciosWhereInput
  }

  export type EspaciosUpdateToOneWithWhereWithoutClasesInput = {
    where?: EspaciosWhereInput
    data: XOR<EspaciosUpdateWithoutClasesInput, EspaciosUncheckedUpdateWithoutClasesInput>
  }

  export type EspaciosUpdateWithoutClasesInput = {
    NombreE?: StringFieldUpdateOperationsInput | string
    Tipo?: EnumEspacios_TipoFieldUpdateOperationsInput | $Enums.Espacios_Tipo
    Capacidad?: IntFieldUpdateOperationsInput | number
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Ubicacion?: StringFieldUpdateOperationsInput | string
    Horarios?: HorariosUpdateManyWithoutEspaciosNestedInput
    Reservas?: ReservasUpdateManyWithoutEspaciosNestedInput
    Torneos?: TorneosUpdateManyWithoutEspaciosNestedInput
  }

  export type EspaciosUncheckedUpdateWithoutClasesInput = {
    IdEspacio?: IntFieldUpdateOperationsInput | number
    NombreE?: StringFieldUpdateOperationsInput | string
    Tipo?: EnumEspacios_TipoFieldUpdateOperationsInput | $Enums.Espacios_Tipo
    Capacidad?: IntFieldUpdateOperationsInput | number
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Ubicacion?: StringFieldUpdateOperationsInput | string
    Horarios?: HorariosUncheckedUpdateManyWithoutEspaciosNestedInput
    Reservas?: ReservasUncheckedUpdateManyWithoutEspaciosNestedInput
    Torneos?: TorneosUncheckedUpdateManyWithoutEspaciosNestedInput
  }

  export type HorariosUpsertWithoutClasesInput = {
    update: XOR<HorariosUpdateWithoutClasesInput, HorariosUncheckedUpdateWithoutClasesInput>
    create: XOR<HorariosCreateWithoutClasesInput, HorariosUncheckedCreateWithoutClasesInput>
    where?: HorariosWhereInput
  }

  export type HorariosUpdateToOneWithWhereWithoutClasesInput = {
    where?: HorariosWhereInput
    data: XOR<HorariosUpdateWithoutClasesInput, HorariosUncheckedUpdateWithoutClasesInput>
  }

  export type HorariosUpdateWithoutClasesInput = {
    DiaSemana?: StringFieldUpdateOperationsInput | string
    HoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraFin?: DateTimeFieldUpdateOperationsInput | Date | string
    Espacios?: EspaciosUpdateOneRequiredWithoutHorariosNestedInput
    Talleres?: TalleresUpdateManyWithoutHorariosNestedInput
    Torneos?: TorneosUpdateManyWithoutHorariosNestedInput
  }

  export type HorariosUncheckedUpdateWithoutClasesInput = {
    IdHorario?: IntFieldUpdateOperationsInput | number
    FkIdEspacio?: IntFieldUpdateOperationsInput | number
    DiaSemana?: StringFieldUpdateOperationsInput | string
    HoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraFin?: DateTimeFieldUpdateOperationsInput | Date | string
    Talleres?: TalleresUncheckedUpdateManyWithoutHorariosNestedInput
    Torneos?: TorneosUncheckedUpdateManyWithoutHorariosNestedInput
  }

  export type InscripcionClasesUpsertWithWhereUniqueWithoutClasesInput = {
    where: InscripcionClasesWhereUniqueInput
    update: XOR<InscripcionClasesUpdateWithoutClasesInput, InscripcionClasesUncheckedUpdateWithoutClasesInput>
    create: XOR<InscripcionClasesCreateWithoutClasesInput, InscripcionClasesUncheckedCreateWithoutClasesInput>
  }

  export type InscripcionClasesUpdateWithWhereUniqueWithoutClasesInput = {
    where: InscripcionClasesWhereUniqueInput
    data: XOR<InscripcionClasesUpdateWithoutClasesInput, InscripcionClasesUncheckedUpdateWithoutClasesInput>
  }

  export type InscripcionClasesUpdateManyWithWhereWithoutClasesInput = {
    where: InscripcionClasesScalarWhereInput
    data: XOR<InscripcionClasesUpdateManyMutationInput, InscripcionClasesUncheckedUpdateManyWithoutClasesInput>
  }

  export type InscripcionClasesScalarWhereInput = {
    AND?: InscripcionClasesScalarWhereInput | InscripcionClasesScalarWhereInput[]
    OR?: InscripcionClasesScalarWhereInput[]
    NOT?: InscripcionClasesScalarWhereInput | InscripcionClasesScalarWhereInput[]
    IdInscripcionClase?: IntFilter<"InscripcionClases"> | number
    FkIdUsuario?: IntFilter<"InscripcionClases"> | number
    FkIdClase?: IntFilter<"InscripcionClases"> | number
    FechaI?: DateTimeNullableFilter<"InscripcionClases"> | Date | string | null
  }

  export type UsuariosCreateWithoutComentariosInput = {
    Usuario?: string
    NombreU: string
    CorreoU: string
    Contrase_a: string
    Nivel: $Enums.Usuarios_Nivel
    FechaRegistro?: Date | string | null
    Telefono?: string | null
    Entrenadores?: EntrenadoresCreateNestedManyWithoutUsuariosInput
    InscripcionClases?: InscripcionClasesCreateNestedManyWithoutUsuariosInput
    InscripcionTorneos?: InscripcionTorneosCreateNestedManyWithoutUsuariosInput
    Reservas?: ReservasCreateNestedManyWithoutUsuariosInput
  }

  export type UsuariosUncheckedCreateWithoutComentariosInput = {
    IdUsuario?: number
    Usuario?: string
    NombreU: string
    CorreoU: string
    Contrase_a: string
    Nivel: $Enums.Usuarios_Nivel
    FechaRegistro?: Date | string | null
    Telefono?: string | null
    Entrenadores?: EntrenadoresUncheckedCreateNestedManyWithoutUsuariosInput
    InscripcionClases?: InscripcionClasesUncheckedCreateNestedManyWithoutUsuariosInput
    InscripcionTorneos?: InscripcionTorneosUncheckedCreateNestedManyWithoutUsuariosInput
    Reservas?: ReservasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsuariosCreateOrConnectWithoutComentariosInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutComentariosInput, UsuariosUncheckedCreateWithoutComentariosInput>
  }

  export type UsuariosUpsertWithoutComentariosInput = {
    update: XOR<UsuariosUpdateWithoutComentariosInput, UsuariosUncheckedUpdateWithoutComentariosInput>
    create: XOR<UsuariosCreateWithoutComentariosInput, UsuariosUncheckedCreateWithoutComentariosInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutComentariosInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutComentariosInput, UsuariosUncheckedUpdateWithoutComentariosInput>
  }

  export type UsuariosUpdateWithoutComentariosInput = {
    Usuario?: StringFieldUpdateOperationsInput | string
    NombreU?: StringFieldUpdateOperationsInput | string
    CorreoU?: StringFieldUpdateOperationsInput | string
    Contrase_a?: StringFieldUpdateOperationsInput | string
    Nivel?: EnumUsuarios_NivelFieldUpdateOperationsInput | $Enums.Usuarios_Nivel
    FechaRegistro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Entrenadores?: EntrenadoresUpdateManyWithoutUsuariosNestedInput
    InscripcionClases?: InscripcionClasesUpdateManyWithoutUsuariosNestedInput
    InscripcionTorneos?: InscripcionTorneosUpdateManyWithoutUsuariosNestedInput
    Reservas?: ReservasUpdateManyWithoutUsuariosNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutComentariosInput = {
    IdUsuario?: IntFieldUpdateOperationsInput | number
    Usuario?: StringFieldUpdateOperationsInput | string
    NombreU?: StringFieldUpdateOperationsInput | string
    CorreoU?: StringFieldUpdateOperationsInput | string
    Contrase_a?: StringFieldUpdateOperationsInput | string
    Nivel?: EnumUsuarios_NivelFieldUpdateOperationsInput | $Enums.Usuarios_Nivel
    FechaRegistro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Entrenadores?: EntrenadoresUncheckedUpdateManyWithoutUsuariosNestedInput
    InscripcionClases?: InscripcionClasesUncheckedUpdateManyWithoutUsuariosNestedInput
    InscripcionTorneos?: InscripcionTorneosUncheckedUpdateManyWithoutUsuariosNestedInput
    Reservas?: ReservasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type ClasesCreateWithoutEntrenadoresInput = {
    NombreC: string
    Descripcion?: string | null
    Espacios: EspaciosCreateNestedOneWithoutClasesInput
    Horarios: HorariosCreateNestedOneWithoutClasesInput
    InscripcionClases?: InscripcionClasesCreateNestedManyWithoutClasesInput
  }

  export type ClasesUncheckedCreateWithoutEntrenadoresInput = {
    IdClase?: number
    FkIdEspacio: number
    FkIdHorario: number
    NombreC: string
    Descripcion?: string | null
    InscripcionClases?: InscripcionClasesUncheckedCreateNestedManyWithoutClasesInput
  }

  export type ClasesCreateOrConnectWithoutEntrenadoresInput = {
    where: ClasesWhereUniqueInput
    create: XOR<ClasesCreateWithoutEntrenadoresInput, ClasesUncheckedCreateWithoutEntrenadoresInput>
  }

  export type ClasesCreateManyEntrenadoresInputEnvelope = {
    data: ClasesCreateManyEntrenadoresInput | ClasesCreateManyEntrenadoresInput[]
    skipDuplicates?: boolean
  }

  export type UsuariosCreateWithoutEntrenadoresInput = {
    Usuario?: string
    NombreU: string
    CorreoU: string
    Contrase_a: string
    Nivel: $Enums.Usuarios_Nivel
    FechaRegistro?: Date | string | null
    Telefono?: string | null
    Comentarios?: ComentariosCreateNestedManyWithoutUsuariosInput
    InscripcionClases?: InscripcionClasesCreateNestedManyWithoutUsuariosInput
    InscripcionTorneos?: InscripcionTorneosCreateNestedManyWithoutUsuariosInput
    Reservas?: ReservasCreateNestedManyWithoutUsuariosInput
  }

  export type UsuariosUncheckedCreateWithoutEntrenadoresInput = {
    IdUsuario?: number
    Usuario?: string
    NombreU: string
    CorreoU: string
    Contrase_a: string
    Nivel: $Enums.Usuarios_Nivel
    FechaRegistro?: Date | string | null
    Telefono?: string | null
    Comentarios?: ComentariosUncheckedCreateNestedManyWithoutUsuariosInput
    InscripcionClases?: InscripcionClasesUncheckedCreateNestedManyWithoutUsuariosInput
    InscripcionTorneos?: InscripcionTorneosUncheckedCreateNestedManyWithoutUsuariosInput
    Reservas?: ReservasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsuariosCreateOrConnectWithoutEntrenadoresInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutEntrenadoresInput, UsuariosUncheckedCreateWithoutEntrenadoresInput>
  }

  export type TalleresCreateWithoutEntrenadoresInput = {
    NombreTa: string
    Descripcion?: string | null
    Horarios: HorariosCreateNestedOneWithoutTalleresInput
  }

  export type TalleresUncheckedCreateWithoutEntrenadoresInput = {
    IdTaller?: number
    NombreTa: string
    Descripcion?: string | null
    FkIdHorario: number
  }

  export type TalleresCreateOrConnectWithoutEntrenadoresInput = {
    where: TalleresWhereUniqueInput
    create: XOR<TalleresCreateWithoutEntrenadoresInput, TalleresUncheckedCreateWithoutEntrenadoresInput>
  }

  export type TalleresCreateManyEntrenadoresInputEnvelope = {
    data: TalleresCreateManyEntrenadoresInput | TalleresCreateManyEntrenadoresInput[]
    skipDuplicates?: boolean
  }

  export type ClasesUpsertWithWhereUniqueWithoutEntrenadoresInput = {
    where: ClasesWhereUniqueInput
    update: XOR<ClasesUpdateWithoutEntrenadoresInput, ClasesUncheckedUpdateWithoutEntrenadoresInput>
    create: XOR<ClasesCreateWithoutEntrenadoresInput, ClasesUncheckedCreateWithoutEntrenadoresInput>
  }

  export type ClasesUpdateWithWhereUniqueWithoutEntrenadoresInput = {
    where: ClasesWhereUniqueInput
    data: XOR<ClasesUpdateWithoutEntrenadoresInput, ClasesUncheckedUpdateWithoutEntrenadoresInput>
  }

  export type ClasesUpdateManyWithWhereWithoutEntrenadoresInput = {
    where: ClasesScalarWhereInput
    data: XOR<ClasesUpdateManyMutationInput, ClasesUncheckedUpdateManyWithoutEntrenadoresInput>
  }

  export type ClasesScalarWhereInput = {
    AND?: ClasesScalarWhereInput | ClasesScalarWhereInput[]
    OR?: ClasesScalarWhereInput[]
    NOT?: ClasesScalarWhereInput | ClasesScalarWhereInput[]
    IdClase?: IntFilter<"Clases"> | number
    FkIdEntrenador?: IntFilter<"Clases"> | number
    FkIdEspacio?: IntFilter<"Clases"> | number
    FkIdHorario?: IntFilter<"Clases"> | number
    NombreC?: StringFilter<"Clases"> | string
    Descripcion?: StringNullableFilter<"Clases"> | string | null
  }

  export type UsuariosUpsertWithoutEntrenadoresInput = {
    update: XOR<UsuariosUpdateWithoutEntrenadoresInput, UsuariosUncheckedUpdateWithoutEntrenadoresInput>
    create: XOR<UsuariosCreateWithoutEntrenadoresInput, UsuariosUncheckedCreateWithoutEntrenadoresInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutEntrenadoresInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutEntrenadoresInput, UsuariosUncheckedUpdateWithoutEntrenadoresInput>
  }

  export type UsuariosUpdateWithoutEntrenadoresInput = {
    Usuario?: StringFieldUpdateOperationsInput | string
    NombreU?: StringFieldUpdateOperationsInput | string
    CorreoU?: StringFieldUpdateOperationsInput | string
    Contrase_a?: StringFieldUpdateOperationsInput | string
    Nivel?: EnumUsuarios_NivelFieldUpdateOperationsInput | $Enums.Usuarios_Nivel
    FechaRegistro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Comentarios?: ComentariosUpdateManyWithoutUsuariosNestedInput
    InscripcionClases?: InscripcionClasesUpdateManyWithoutUsuariosNestedInput
    InscripcionTorneos?: InscripcionTorneosUpdateManyWithoutUsuariosNestedInput
    Reservas?: ReservasUpdateManyWithoutUsuariosNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutEntrenadoresInput = {
    IdUsuario?: IntFieldUpdateOperationsInput | number
    Usuario?: StringFieldUpdateOperationsInput | string
    NombreU?: StringFieldUpdateOperationsInput | string
    CorreoU?: StringFieldUpdateOperationsInput | string
    Contrase_a?: StringFieldUpdateOperationsInput | string
    Nivel?: EnumUsuarios_NivelFieldUpdateOperationsInput | $Enums.Usuarios_Nivel
    FechaRegistro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Comentarios?: ComentariosUncheckedUpdateManyWithoutUsuariosNestedInput
    InscripcionClases?: InscripcionClasesUncheckedUpdateManyWithoutUsuariosNestedInput
    InscripcionTorneos?: InscripcionTorneosUncheckedUpdateManyWithoutUsuariosNestedInput
    Reservas?: ReservasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type TalleresUpsertWithWhereUniqueWithoutEntrenadoresInput = {
    where: TalleresWhereUniqueInput
    update: XOR<TalleresUpdateWithoutEntrenadoresInput, TalleresUncheckedUpdateWithoutEntrenadoresInput>
    create: XOR<TalleresCreateWithoutEntrenadoresInput, TalleresUncheckedCreateWithoutEntrenadoresInput>
  }

  export type TalleresUpdateWithWhereUniqueWithoutEntrenadoresInput = {
    where: TalleresWhereUniqueInput
    data: XOR<TalleresUpdateWithoutEntrenadoresInput, TalleresUncheckedUpdateWithoutEntrenadoresInput>
  }

  export type TalleresUpdateManyWithWhereWithoutEntrenadoresInput = {
    where: TalleresScalarWhereInput
    data: XOR<TalleresUpdateManyMutationInput, TalleresUncheckedUpdateManyWithoutEntrenadoresInput>
  }

  export type TalleresScalarWhereInput = {
    AND?: TalleresScalarWhereInput | TalleresScalarWhereInput[]
    OR?: TalleresScalarWhereInput[]
    NOT?: TalleresScalarWhereInput | TalleresScalarWhereInput[]
    IdTaller?: IntFilter<"Talleres"> | number
    NombreTa?: StringFilter<"Talleres"> | string
    Descripcion?: StringNullableFilter<"Talleres"> | string | null
    FkIdEntrenador?: IntFilter<"Talleres"> | number
    FkIdHorario?: IntFilter<"Talleres"> | number
  }

  export type ClasesCreateWithoutEspaciosInput = {
    NombreC: string
    Descripcion?: string | null
    Entrenadores: EntrenadoresCreateNestedOneWithoutClasesInput
    Horarios: HorariosCreateNestedOneWithoutClasesInput
    InscripcionClases?: InscripcionClasesCreateNestedManyWithoutClasesInput
  }

  export type ClasesUncheckedCreateWithoutEspaciosInput = {
    IdClase?: number
    FkIdEntrenador: number
    FkIdHorario: number
    NombreC: string
    Descripcion?: string | null
    InscripcionClases?: InscripcionClasesUncheckedCreateNestedManyWithoutClasesInput
  }

  export type ClasesCreateOrConnectWithoutEspaciosInput = {
    where: ClasesWhereUniqueInput
    create: XOR<ClasesCreateWithoutEspaciosInput, ClasesUncheckedCreateWithoutEspaciosInput>
  }

  export type ClasesCreateManyEspaciosInputEnvelope = {
    data: ClasesCreateManyEspaciosInput | ClasesCreateManyEspaciosInput[]
    skipDuplicates?: boolean
  }

  export type HorariosCreateWithoutEspaciosInput = {
    DiaSemana: string
    HoraInicio: Date | string
    HoraFin: Date | string
    Clases?: ClasesCreateNestedManyWithoutHorariosInput
    Talleres?: TalleresCreateNestedManyWithoutHorariosInput
    Torneos?: TorneosCreateNestedManyWithoutHorariosInput
  }

  export type HorariosUncheckedCreateWithoutEspaciosInput = {
    IdHorario?: number
    DiaSemana: string
    HoraInicio: Date | string
    HoraFin: Date | string
    Clases?: ClasesUncheckedCreateNestedManyWithoutHorariosInput
    Talleres?: TalleresUncheckedCreateNestedManyWithoutHorariosInput
    Torneos?: TorneosUncheckedCreateNestedManyWithoutHorariosInput
  }

  export type HorariosCreateOrConnectWithoutEspaciosInput = {
    where: HorariosWhereUniqueInput
    create: XOR<HorariosCreateWithoutEspaciosInput, HorariosUncheckedCreateWithoutEspaciosInput>
  }

  export type HorariosCreateManyEspaciosInputEnvelope = {
    data: HorariosCreateManyEspaciosInput | HorariosCreateManyEspaciosInput[]
    skipDuplicates?: boolean
  }

  export type ReservasCreateWithoutEspaciosInput = {
    FechaReserva: Date | string
    HoraInicioR: Date | string
    HoraFinR: Date | string
    Estado?: $Enums.Reservas_Estado | null
    Usuarios: UsuariosCreateNestedOneWithoutReservasInput
  }

  export type ReservasUncheckedCreateWithoutEspaciosInput = {
    IdReserva?: number
    FkIdUsuario: number
    FechaReserva: Date | string
    HoraInicioR: Date | string
    HoraFinR: Date | string
    Estado?: $Enums.Reservas_Estado | null
  }

  export type ReservasCreateOrConnectWithoutEspaciosInput = {
    where: ReservasWhereUniqueInput
    create: XOR<ReservasCreateWithoutEspaciosInput, ReservasUncheckedCreateWithoutEspaciosInput>
  }

  export type ReservasCreateManyEspaciosInputEnvelope = {
    data: ReservasCreateManyEspaciosInput | ReservasCreateManyEspaciosInput[]
    skipDuplicates?: boolean
  }

  export type TorneosCreateWithoutEspaciosInput = {
    NombreT: string
    FechaInicioT: Date | string
    FechaFinT: Date | string
    InscripcionTorneos?: InscripcionTorneosCreateNestedManyWithoutTorneosInput
    Horarios?: HorariosCreateNestedOneWithoutTorneosInput
  }

  export type TorneosUncheckedCreateWithoutEspaciosInput = {
    IdTorneo?: number
    NombreT: string
    FechaInicioT: Date | string
    FechaFinT: Date | string
    FkIdHorario?: number | null
    InscripcionTorneos?: InscripcionTorneosUncheckedCreateNestedManyWithoutTorneosInput
  }

  export type TorneosCreateOrConnectWithoutEspaciosInput = {
    where: TorneosWhereUniqueInput
    create: XOR<TorneosCreateWithoutEspaciosInput, TorneosUncheckedCreateWithoutEspaciosInput>
  }

  export type TorneosCreateManyEspaciosInputEnvelope = {
    data: TorneosCreateManyEspaciosInput | TorneosCreateManyEspaciosInput[]
    skipDuplicates?: boolean
  }

  export type ClasesUpsertWithWhereUniqueWithoutEspaciosInput = {
    where: ClasesWhereUniqueInput
    update: XOR<ClasesUpdateWithoutEspaciosInput, ClasesUncheckedUpdateWithoutEspaciosInput>
    create: XOR<ClasesCreateWithoutEspaciosInput, ClasesUncheckedCreateWithoutEspaciosInput>
  }

  export type ClasesUpdateWithWhereUniqueWithoutEspaciosInput = {
    where: ClasesWhereUniqueInput
    data: XOR<ClasesUpdateWithoutEspaciosInput, ClasesUncheckedUpdateWithoutEspaciosInput>
  }

  export type ClasesUpdateManyWithWhereWithoutEspaciosInput = {
    where: ClasesScalarWhereInput
    data: XOR<ClasesUpdateManyMutationInput, ClasesUncheckedUpdateManyWithoutEspaciosInput>
  }

  export type HorariosUpsertWithWhereUniqueWithoutEspaciosInput = {
    where: HorariosWhereUniqueInput
    update: XOR<HorariosUpdateWithoutEspaciosInput, HorariosUncheckedUpdateWithoutEspaciosInput>
    create: XOR<HorariosCreateWithoutEspaciosInput, HorariosUncheckedCreateWithoutEspaciosInput>
  }

  export type HorariosUpdateWithWhereUniqueWithoutEspaciosInput = {
    where: HorariosWhereUniqueInput
    data: XOR<HorariosUpdateWithoutEspaciosInput, HorariosUncheckedUpdateWithoutEspaciosInput>
  }

  export type HorariosUpdateManyWithWhereWithoutEspaciosInput = {
    where: HorariosScalarWhereInput
    data: XOR<HorariosUpdateManyMutationInput, HorariosUncheckedUpdateManyWithoutEspaciosInput>
  }

  export type HorariosScalarWhereInput = {
    AND?: HorariosScalarWhereInput | HorariosScalarWhereInput[]
    OR?: HorariosScalarWhereInput[]
    NOT?: HorariosScalarWhereInput | HorariosScalarWhereInput[]
    IdHorario?: IntFilter<"Horarios"> | number
    FkIdEspacio?: IntFilter<"Horarios"> | number
    DiaSemana?: StringFilter<"Horarios"> | string
    HoraInicio?: DateTimeFilter<"Horarios"> | Date | string
    HoraFin?: DateTimeFilter<"Horarios"> | Date | string
  }

  export type ReservasUpsertWithWhereUniqueWithoutEspaciosInput = {
    where: ReservasWhereUniqueInput
    update: XOR<ReservasUpdateWithoutEspaciosInput, ReservasUncheckedUpdateWithoutEspaciosInput>
    create: XOR<ReservasCreateWithoutEspaciosInput, ReservasUncheckedCreateWithoutEspaciosInput>
  }

  export type ReservasUpdateWithWhereUniqueWithoutEspaciosInput = {
    where: ReservasWhereUniqueInput
    data: XOR<ReservasUpdateWithoutEspaciosInput, ReservasUncheckedUpdateWithoutEspaciosInput>
  }

  export type ReservasUpdateManyWithWhereWithoutEspaciosInput = {
    where: ReservasScalarWhereInput
    data: XOR<ReservasUpdateManyMutationInput, ReservasUncheckedUpdateManyWithoutEspaciosInput>
  }

  export type ReservasScalarWhereInput = {
    AND?: ReservasScalarWhereInput | ReservasScalarWhereInput[]
    OR?: ReservasScalarWhereInput[]
    NOT?: ReservasScalarWhereInput | ReservasScalarWhereInput[]
    IdReserva?: IntFilter<"Reservas"> | number
    FkIdUsuario?: IntFilter<"Reservas"> | number
    FkIdEspacio?: IntFilter<"Reservas"> | number
    FechaReserva?: DateTimeFilter<"Reservas"> | Date | string
    HoraInicioR?: DateTimeFilter<"Reservas"> | Date | string
    HoraFinR?: DateTimeFilter<"Reservas"> | Date | string
    Estado?: EnumReservas_EstadoNullableFilter<"Reservas"> | $Enums.Reservas_Estado | null
  }

  export type TorneosUpsertWithWhereUniqueWithoutEspaciosInput = {
    where: TorneosWhereUniqueInput
    update: XOR<TorneosUpdateWithoutEspaciosInput, TorneosUncheckedUpdateWithoutEspaciosInput>
    create: XOR<TorneosCreateWithoutEspaciosInput, TorneosUncheckedCreateWithoutEspaciosInput>
  }

  export type TorneosUpdateWithWhereUniqueWithoutEspaciosInput = {
    where: TorneosWhereUniqueInput
    data: XOR<TorneosUpdateWithoutEspaciosInput, TorneosUncheckedUpdateWithoutEspaciosInput>
  }

  export type TorneosUpdateManyWithWhereWithoutEspaciosInput = {
    where: TorneosScalarWhereInput
    data: XOR<TorneosUpdateManyMutationInput, TorneosUncheckedUpdateManyWithoutEspaciosInput>
  }

  export type TorneosScalarWhereInput = {
    AND?: TorneosScalarWhereInput | TorneosScalarWhereInput[]
    OR?: TorneosScalarWhereInput[]
    NOT?: TorneosScalarWhereInput | TorneosScalarWhereInput[]
    IdTorneo?: IntFilter<"Torneos"> | number
    NombreT?: StringFilter<"Torneos"> | string
    FechaInicioT?: DateTimeFilter<"Torneos"> | Date | string
    FechaFinT?: DateTimeFilter<"Torneos"> | Date | string
    FkIdEspacio?: IntNullableFilter<"Torneos"> | number | null
    FkIdHorario?: IntNullableFilter<"Torneos"> | number | null
  }

  export type ClasesCreateWithoutHorariosInput = {
    NombreC: string
    Descripcion?: string | null
    Entrenadores: EntrenadoresCreateNestedOneWithoutClasesInput
    Espacios: EspaciosCreateNestedOneWithoutClasesInput
    InscripcionClases?: InscripcionClasesCreateNestedManyWithoutClasesInput
  }

  export type ClasesUncheckedCreateWithoutHorariosInput = {
    IdClase?: number
    FkIdEntrenador: number
    FkIdEspacio: number
    NombreC: string
    Descripcion?: string | null
    InscripcionClases?: InscripcionClasesUncheckedCreateNestedManyWithoutClasesInput
  }

  export type ClasesCreateOrConnectWithoutHorariosInput = {
    where: ClasesWhereUniqueInput
    create: XOR<ClasesCreateWithoutHorariosInput, ClasesUncheckedCreateWithoutHorariosInput>
  }

  export type ClasesCreateManyHorariosInputEnvelope = {
    data: ClasesCreateManyHorariosInput | ClasesCreateManyHorariosInput[]
    skipDuplicates?: boolean
  }

  export type EspaciosCreateWithoutHorariosInput = {
    NombreE: string
    Tipo: $Enums.Espacios_Tipo
    Capacidad: number
    Descripcion?: string | null
    Ubicacion: string
    Clases?: ClasesCreateNestedManyWithoutEspaciosInput
    Reservas?: ReservasCreateNestedManyWithoutEspaciosInput
    Torneos?: TorneosCreateNestedManyWithoutEspaciosInput
  }

  export type EspaciosUncheckedCreateWithoutHorariosInput = {
    IdEspacio?: number
    NombreE: string
    Tipo: $Enums.Espacios_Tipo
    Capacidad: number
    Descripcion?: string | null
    Ubicacion: string
    Clases?: ClasesUncheckedCreateNestedManyWithoutEspaciosInput
    Reservas?: ReservasUncheckedCreateNestedManyWithoutEspaciosInput
    Torneos?: TorneosUncheckedCreateNestedManyWithoutEspaciosInput
  }

  export type EspaciosCreateOrConnectWithoutHorariosInput = {
    where: EspaciosWhereUniqueInput
    create: XOR<EspaciosCreateWithoutHorariosInput, EspaciosUncheckedCreateWithoutHorariosInput>
  }

  export type TalleresCreateWithoutHorariosInput = {
    NombreTa: string
    Descripcion?: string | null
    Entrenadores: EntrenadoresCreateNestedOneWithoutTalleresInput
  }

  export type TalleresUncheckedCreateWithoutHorariosInput = {
    IdTaller?: number
    NombreTa: string
    Descripcion?: string | null
    FkIdEntrenador: number
  }

  export type TalleresCreateOrConnectWithoutHorariosInput = {
    where: TalleresWhereUniqueInput
    create: XOR<TalleresCreateWithoutHorariosInput, TalleresUncheckedCreateWithoutHorariosInput>
  }

  export type TalleresCreateManyHorariosInputEnvelope = {
    data: TalleresCreateManyHorariosInput | TalleresCreateManyHorariosInput[]
    skipDuplicates?: boolean
  }

  export type TorneosCreateWithoutHorariosInput = {
    NombreT: string
    FechaInicioT: Date | string
    FechaFinT: Date | string
    InscripcionTorneos?: InscripcionTorneosCreateNestedManyWithoutTorneosInput
    Espacios?: EspaciosCreateNestedOneWithoutTorneosInput
  }

  export type TorneosUncheckedCreateWithoutHorariosInput = {
    IdTorneo?: number
    NombreT: string
    FechaInicioT: Date | string
    FechaFinT: Date | string
    FkIdEspacio?: number | null
    InscripcionTorneos?: InscripcionTorneosUncheckedCreateNestedManyWithoutTorneosInput
  }

  export type TorneosCreateOrConnectWithoutHorariosInput = {
    where: TorneosWhereUniqueInput
    create: XOR<TorneosCreateWithoutHorariosInput, TorneosUncheckedCreateWithoutHorariosInput>
  }

  export type TorneosCreateManyHorariosInputEnvelope = {
    data: TorneosCreateManyHorariosInput | TorneosCreateManyHorariosInput[]
    skipDuplicates?: boolean
  }

  export type ClasesUpsertWithWhereUniqueWithoutHorariosInput = {
    where: ClasesWhereUniqueInput
    update: XOR<ClasesUpdateWithoutHorariosInput, ClasesUncheckedUpdateWithoutHorariosInput>
    create: XOR<ClasesCreateWithoutHorariosInput, ClasesUncheckedCreateWithoutHorariosInput>
  }

  export type ClasesUpdateWithWhereUniqueWithoutHorariosInput = {
    where: ClasesWhereUniqueInput
    data: XOR<ClasesUpdateWithoutHorariosInput, ClasesUncheckedUpdateWithoutHorariosInput>
  }

  export type ClasesUpdateManyWithWhereWithoutHorariosInput = {
    where: ClasesScalarWhereInput
    data: XOR<ClasesUpdateManyMutationInput, ClasesUncheckedUpdateManyWithoutHorariosInput>
  }

  export type EspaciosUpsertWithoutHorariosInput = {
    update: XOR<EspaciosUpdateWithoutHorariosInput, EspaciosUncheckedUpdateWithoutHorariosInput>
    create: XOR<EspaciosCreateWithoutHorariosInput, EspaciosUncheckedCreateWithoutHorariosInput>
    where?: EspaciosWhereInput
  }

  export type EspaciosUpdateToOneWithWhereWithoutHorariosInput = {
    where?: EspaciosWhereInput
    data: XOR<EspaciosUpdateWithoutHorariosInput, EspaciosUncheckedUpdateWithoutHorariosInput>
  }

  export type EspaciosUpdateWithoutHorariosInput = {
    NombreE?: StringFieldUpdateOperationsInput | string
    Tipo?: EnumEspacios_TipoFieldUpdateOperationsInput | $Enums.Espacios_Tipo
    Capacidad?: IntFieldUpdateOperationsInput | number
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Ubicacion?: StringFieldUpdateOperationsInput | string
    Clases?: ClasesUpdateManyWithoutEspaciosNestedInput
    Reservas?: ReservasUpdateManyWithoutEspaciosNestedInput
    Torneos?: TorneosUpdateManyWithoutEspaciosNestedInput
  }

  export type EspaciosUncheckedUpdateWithoutHorariosInput = {
    IdEspacio?: IntFieldUpdateOperationsInput | number
    NombreE?: StringFieldUpdateOperationsInput | string
    Tipo?: EnumEspacios_TipoFieldUpdateOperationsInput | $Enums.Espacios_Tipo
    Capacidad?: IntFieldUpdateOperationsInput | number
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Ubicacion?: StringFieldUpdateOperationsInput | string
    Clases?: ClasesUncheckedUpdateManyWithoutEspaciosNestedInput
    Reservas?: ReservasUncheckedUpdateManyWithoutEspaciosNestedInput
    Torneos?: TorneosUncheckedUpdateManyWithoutEspaciosNestedInput
  }

  export type TalleresUpsertWithWhereUniqueWithoutHorariosInput = {
    where: TalleresWhereUniqueInput
    update: XOR<TalleresUpdateWithoutHorariosInput, TalleresUncheckedUpdateWithoutHorariosInput>
    create: XOR<TalleresCreateWithoutHorariosInput, TalleresUncheckedCreateWithoutHorariosInput>
  }

  export type TalleresUpdateWithWhereUniqueWithoutHorariosInput = {
    where: TalleresWhereUniqueInput
    data: XOR<TalleresUpdateWithoutHorariosInput, TalleresUncheckedUpdateWithoutHorariosInput>
  }

  export type TalleresUpdateManyWithWhereWithoutHorariosInput = {
    where: TalleresScalarWhereInput
    data: XOR<TalleresUpdateManyMutationInput, TalleresUncheckedUpdateManyWithoutHorariosInput>
  }

  export type TorneosUpsertWithWhereUniqueWithoutHorariosInput = {
    where: TorneosWhereUniqueInput
    update: XOR<TorneosUpdateWithoutHorariosInput, TorneosUncheckedUpdateWithoutHorariosInput>
    create: XOR<TorneosCreateWithoutHorariosInput, TorneosUncheckedCreateWithoutHorariosInput>
  }

  export type TorneosUpdateWithWhereUniqueWithoutHorariosInput = {
    where: TorneosWhereUniqueInput
    data: XOR<TorneosUpdateWithoutHorariosInput, TorneosUncheckedUpdateWithoutHorariosInput>
  }

  export type TorneosUpdateManyWithWhereWithoutHorariosInput = {
    where: TorneosScalarWhereInput
    data: XOR<TorneosUpdateManyMutationInput, TorneosUncheckedUpdateManyWithoutHorariosInput>
  }

  export type UsuariosCreateWithoutInscripcionClasesInput = {
    Usuario?: string
    NombreU: string
    CorreoU: string
    Contrase_a: string
    Nivel: $Enums.Usuarios_Nivel
    FechaRegistro?: Date | string | null
    Telefono?: string | null
    Comentarios?: ComentariosCreateNestedManyWithoutUsuariosInput
    Entrenadores?: EntrenadoresCreateNestedManyWithoutUsuariosInput
    InscripcionTorneos?: InscripcionTorneosCreateNestedManyWithoutUsuariosInput
    Reservas?: ReservasCreateNestedManyWithoutUsuariosInput
  }

  export type UsuariosUncheckedCreateWithoutInscripcionClasesInput = {
    IdUsuario?: number
    Usuario?: string
    NombreU: string
    CorreoU: string
    Contrase_a: string
    Nivel: $Enums.Usuarios_Nivel
    FechaRegistro?: Date | string | null
    Telefono?: string | null
    Comentarios?: ComentariosUncheckedCreateNestedManyWithoutUsuariosInput
    Entrenadores?: EntrenadoresUncheckedCreateNestedManyWithoutUsuariosInput
    InscripcionTorneos?: InscripcionTorneosUncheckedCreateNestedManyWithoutUsuariosInput
    Reservas?: ReservasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsuariosCreateOrConnectWithoutInscripcionClasesInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutInscripcionClasesInput, UsuariosUncheckedCreateWithoutInscripcionClasesInput>
  }

  export type ClasesCreateWithoutInscripcionClasesInput = {
    NombreC: string
    Descripcion?: string | null
    Entrenadores: EntrenadoresCreateNestedOneWithoutClasesInput
    Espacios: EspaciosCreateNestedOneWithoutClasesInput
    Horarios: HorariosCreateNestedOneWithoutClasesInput
  }

  export type ClasesUncheckedCreateWithoutInscripcionClasesInput = {
    IdClase?: number
    FkIdEntrenador: number
    FkIdEspacio: number
    FkIdHorario: number
    NombreC: string
    Descripcion?: string | null
  }

  export type ClasesCreateOrConnectWithoutInscripcionClasesInput = {
    where: ClasesWhereUniqueInput
    create: XOR<ClasesCreateWithoutInscripcionClasesInput, ClasesUncheckedCreateWithoutInscripcionClasesInput>
  }

  export type UsuariosUpsertWithoutInscripcionClasesInput = {
    update: XOR<UsuariosUpdateWithoutInscripcionClasesInput, UsuariosUncheckedUpdateWithoutInscripcionClasesInput>
    create: XOR<UsuariosCreateWithoutInscripcionClasesInput, UsuariosUncheckedCreateWithoutInscripcionClasesInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutInscripcionClasesInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutInscripcionClasesInput, UsuariosUncheckedUpdateWithoutInscripcionClasesInput>
  }

  export type UsuariosUpdateWithoutInscripcionClasesInput = {
    Usuario?: StringFieldUpdateOperationsInput | string
    NombreU?: StringFieldUpdateOperationsInput | string
    CorreoU?: StringFieldUpdateOperationsInput | string
    Contrase_a?: StringFieldUpdateOperationsInput | string
    Nivel?: EnumUsuarios_NivelFieldUpdateOperationsInput | $Enums.Usuarios_Nivel
    FechaRegistro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Comentarios?: ComentariosUpdateManyWithoutUsuariosNestedInput
    Entrenadores?: EntrenadoresUpdateManyWithoutUsuariosNestedInput
    InscripcionTorneos?: InscripcionTorneosUpdateManyWithoutUsuariosNestedInput
    Reservas?: ReservasUpdateManyWithoutUsuariosNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutInscripcionClasesInput = {
    IdUsuario?: IntFieldUpdateOperationsInput | number
    Usuario?: StringFieldUpdateOperationsInput | string
    NombreU?: StringFieldUpdateOperationsInput | string
    CorreoU?: StringFieldUpdateOperationsInput | string
    Contrase_a?: StringFieldUpdateOperationsInput | string
    Nivel?: EnumUsuarios_NivelFieldUpdateOperationsInput | $Enums.Usuarios_Nivel
    FechaRegistro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Comentarios?: ComentariosUncheckedUpdateManyWithoutUsuariosNestedInput
    Entrenadores?: EntrenadoresUncheckedUpdateManyWithoutUsuariosNestedInput
    InscripcionTorneos?: InscripcionTorneosUncheckedUpdateManyWithoutUsuariosNestedInput
    Reservas?: ReservasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type ClasesUpsertWithoutInscripcionClasesInput = {
    update: XOR<ClasesUpdateWithoutInscripcionClasesInput, ClasesUncheckedUpdateWithoutInscripcionClasesInput>
    create: XOR<ClasesCreateWithoutInscripcionClasesInput, ClasesUncheckedCreateWithoutInscripcionClasesInput>
    where?: ClasesWhereInput
  }

  export type ClasesUpdateToOneWithWhereWithoutInscripcionClasesInput = {
    where?: ClasesWhereInput
    data: XOR<ClasesUpdateWithoutInscripcionClasesInput, ClasesUncheckedUpdateWithoutInscripcionClasesInput>
  }

  export type ClasesUpdateWithoutInscripcionClasesInput = {
    NombreC?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Entrenadores?: EntrenadoresUpdateOneRequiredWithoutClasesNestedInput
    Espacios?: EspaciosUpdateOneRequiredWithoutClasesNestedInput
    Horarios?: HorariosUpdateOneRequiredWithoutClasesNestedInput
  }

  export type ClasesUncheckedUpdateWithoutInscripcionClasesInput = {
    IdClase?: IntFieldUpdateOperationsInput | number
    FkIdEntrenador?: IntFieldUpdateOperationsInput | number
    FkIdEspacio?: IntFieldUpdateOperationsInput | number
    FkIdHorario?: IntFieldUpdateOperationsInput | number
    NombreC?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuariosCreateWithoutInscripcionTorneosInput = {
    Usuario?: string
    NombreU: string
    CorreoU: string
    Contrase_a: string
    Nivel: $Enums.Usuarios_Nivel
    FechaRegistro?: Date | string | null
    Telefono?: string | null
    Comentarios?: ComentariosCreateNestedManyWithoutUsuariosInput
    Entrenadores?: EntrenadoresCreateNestedManyWithoutUsuariosInput
    InscripcionClases?: InscripcionClasesCreateNestedManyWithoutUsuariosInput
    Reservas?: ReservasCreateNestedManyWithoutUsuariosInput
  }

  export type UsuariosUncheckedCreateWithoutInscripcionTorneosInput = {
    IdUsuario?: number
    Usuario?: string
    NombreU: string
    CorreoU: string
    Contrase_a: string
    Nivel: $Enums.Usuarios_Nivel
    FechaRegistro?: Date | string | null
    Telefono?: string | null
    Comentarios?: ComentariosUncheckedCreateNestedManyWithoutUsuariosInput
    Entrenadores?: EntrenadoresUncheckedCreateNestedManyWithoutUsuariosInput
    InscripcionClases?: InscripcionClasesUncheckedCreateNestedManyWithoutUsuariosInput
    Reservas?: ReservasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsuariosCreateOrConnectWithoutInscripcionTorneosInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutInscripcionTorneosInput, UsuariosUncheckedCreateWithoutInscripcionTorneosInput>
  }

  export type TorneosCreateWithoutInscripcionTorneosInput = {
    NombreT: string
    FechaInicioT: Date | string
    FechaFinT: Date | string
    Espacios?: EspaciosCreateNestedOneWithoutTorneosInput
    Horarios?: HorariosCreateNestedOneWithoutTorneosInput
  }

  export type TorneosUncheckedCreateWithoutInscripcionTorneosInput = {
    IdTorneo?: number
    NombreT: string
    FechaInicioT: Date | string
    FechaFinT: Date | string
    FkIdEspacio?: number | null
    FkIdHorario?: number | null
  }

  export type TorneosCreateOrConnectWithoutInscripcionTorneosInput = {
    where: TorneosWhereUniqueInput
    create: XOR<TorneosCreateWithoutInscripcionTorneosInput, TorneosUncheckedCreateWithoutInscripcionTorneosInput>
  }

  export type UsuariosUpsertWithoutInscripcionTorneosInput = {
    update: XOR<UsuariosUpdateWithoutInscripcionTorneosInput, UsuariosUncheckedUpdateWithoutInscripcionTorneosInput>
    create: XOR<UsuariosCreateWithoutInscripcionTorneosInput, UsuariosUncheckedCreateWithoutInscripcionTorneosInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutInscripcionTorneosInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutInscripcionTorneosInput, UsuariosUncheckedUpdateWithoutInscripcionTorneosInput>
  }

  export type UsuariosUpdateWithoutInscripcionTorneosInput = {
    Usuario?: StringFieldUpdateOperationsInput | string
    NombreU?: StringFieldUpdateOperationsInput | string
    CorreoU?: StringFieldUpdateOperationsInput | string
    Contrase_a?: StringFieldUpdateOperationsInput | string
    Nivel?: EnumUsuarios_NivelFieldUpdateOperationsInput | $Enums.Usuarios_Nivel
    FechaRegistro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Comentarios?: ComentariosUpdateManyWithoutUsuariosNestedInput
    Entrenadores?: EntrenadoresUpdateManyWithoutUsuariosNestedInput
    InscripcionClases?: InscripcionClasesUpdateManyWithoutUsuariosNestedInput
    Reservas?: ReservasUpdateManyWithoutUsuariosNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutInscripcionTorneosInput = {
    IdUsuario?: IntFieldUpdateOperationsInput | number
    Usuario?: StringFieldUpdateOperationsInput | string
    NombreU?: StringFieldUpdateOperationsInput | string
    CorreoU?: StringFieldUpdateOperationsInput | string
    Contrase_a?: StringFieldUpdateOperationsInput | string
    Nivel?: EnumUsuarios_NivelFieldUpdateOperationsInput | $Enums.Usuarios_Nivel
    FechaRegistro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Comentarios?: ComentariosUncheckedUpdateManyWithoutUsuariosNestedInput
    Entrenadores?: EntrenadoresUncheckedUpdateManyWithoutUsuariosNestedInput
    InscripcionClases?: InscripcionClasesUncheckedUpdateManyWithoutUsuariosNestedInput
    Reservas?: ReservasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type TorneosUpsertWithoutInscripcionTorneosInput = {
    update: XOR<TorneosUpdateWithoutInscripcionTorneosInput, TorneosUncheckedUpdateWithoutInscripcionTorneosInput>
    create: XOR<TorneosCreateWithoutInscripcionTorneosInput, TorneosUncheckedCreateWithoutInscripcionTorneosInput>
    where?: TorneosWhereInput
  }

  export type TorneosUpdateToOneWithWhereWithoutInscripcionTorneosInput = {
    where?: TorneosWhereInput
    data: XOR<TorneosUpdateWithoutInscripcionTorneosInput, TorneosUncheckedUpdateWithoutInscripcionTorneosInput>
  }

  export type TorneosUpdateWithoutInscripcionTorneosInput = {
    NombreT?: StringFieldUpdateOperationsInput | string
    FechaInicioT?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaFinT?: DateTimeFieldUpdateOperationsInput | Date | string
    Espacios?: EspaciosUpdateOneWithoutTorneosNestedInput
    Horarios?: HorariosUpdateOneWithoutTorneosNestedInput
  }

  export type TorneosUncheckedUpdateWithoutInscripcionTorneosInput = {
    IdTorneo?: IntFieldUpdateOperationsInput | number
    NombreT?: StringFieldUpdateOperationsInput | string
    FechaInicioT?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaFinT?: DateTimeFieldUpdateOperationsInput | Date | string
    FkIdEspacio?: NullableIntFieldUpdateOperationsInput | number | null
    FkIdHorario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsuariosCreateWithoutReservasInput = {
    Usuario?: string
    NombreU: string
    CorreoU: string
    Contrase_a: string
    Nivel: $Enums.Usuarios_Nivel
    FechaRegistro?: Date | string | null
    Telefono?: string | null
    Comentarios?: ComentariosCreateNestedManyWithoutUsuariosInput
    Entrenadores?: EntrenadoresCreateNestedManyWithoutUsuariosInput
    InscripcionClases?: InscripcionClasesCreateNestedManyWithoutUsuariosInput
    InscripcionTorneos?: InscripcionTorneosCreateNestedManyWithoutUsuariosInput
  }

  export type UsuariosUncheckedCreateWithoutReservasInput = {
    IdUsuario?: number
    Usuario?: string
    NombreU: string
    CorreoU: string
    Contrase_a: string
    Nivel: $Enums.Usuarios_Nivel
    FechaRegistro?: Date | string | null
    Telefono?: string | null
    Comentarios?: ComentariosUncheckedCreateNestedManyWithoutUsuariosInput
    Entrenadores?: EntrenadoresUncheckedCreateNestedManyWithoutUsuariosInput
    InscripcionClases?: InscripcionClasesUncheckedCreateNestedManyWithoutUsuariosInput
    InscripcionTorneos?: InscripcionTorneosUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsuariosCreateOrConnectWithoutReservasInput = {
    where: UsuariosWhereUniqueInput
    create: XOR<UsuariosCreateWithoutReservasInput, UsuariosUncheckedCreateWithoutReservasInput>
  }

  export type EspaciosCreateWithoutReservasInput = {
    NombreE: string
    Tipo: $Enums.Espacios_Tipo
    Capacidad: number
    Descripcion?: string | null
    Ubicacion: string
    Clases?: ClasesCreateNestedManyWithoutEspaciosInput
    Horarios?: HorariosCreateNestedManyWithoutEspaciosInput
    Torneos?: TorneosCreateNestedManyWithoutEspaciosInput
  }

  export type EspaciosUncheckedCreateWithoutReservasInput = {
    IdEspacio?: number
    NombreE: string
    Tipo: $Enums.Espacios_Tipo
    Capacidad: number
    Descripcion?: string | null
    Ubicacion: string
    Clases?: ClasesUncheckedCreateNestedManyWithoutEspaciosInput
    Horarios?: HorariosUncheckedCreateNestedManyWithoutEspaciosInput
    Torneos?: TorneosUncheckedCreateNestedManyWithoutEspaciosInput
  }

  export type EspaciosCreateOrConnectWithoutReservasInput = {
    where: EspaciosWhereUniqueInput
    create: XOR<EspaciosCreateWithoutReservasInput, EspaciosUncheckedCreateWithoutReservasInput>
  }

  export type UsuariosUpsertWithoutReservasInput = {
    update: XOR<UsuariosUpdateWithoutReservasInput, UsuariosUncheckedUpdateWithoutReservasInput>
    create: XOR<UsuariosCreateWithoutReservasInput, UsuariosUncheckedCreateWithoutReservasInput>
    where?: UsuariosWhereInput
  }

  export type UsuariosUpdateToOneWithWhereWithoutReservasInput = {
    where?: UsuariosWhereInput
    data: XOR<UsuariosUpdateWithoutReservasInput, UsuariosUncheckedUpdateWithoutReservasInput>
  }

  export type UsuariosUpdateWithoutReservasInput = {
    Usuario?: StringFieldUpdateOperationsInput | string
    NombreU?: StringFieldUpdateOperationsInput | string
    CorreoU?: StringFieldUpdateOperationsInput | string
    Contrase_a?: StringFieldUpdateOperationsInput | string
    Nivel?: EnumUsuarios_NivelFieldUpdateOperationsInput | $Enums.Usuarios_Nivel
    FechaRegistro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Comentarios?: ComentariosUpdateManyWithoutUsuariosNestedInput
    Entrenadores?: EntrenadoresUpdateManyWithoutUsuariosNestedInput
    InscripcionClases?: InscripcionClasesUpdateManyWithoutUsuariosNestedInput
    InscripcionTorneos?: InscripcionTorneosUpdateManyWithoutUsuariosNestedInput
  }

  export type UsuariosUncheckedUpdateWithoutReservasInput = {
    IdUsuario?: IntFieldUpdateOperationsInput | number
    Usuario?: StringFieldUpdateOperationsInput | string
    NombreU?: StringFieldUpdateOperationsInput | string
    CorreoU?: StringFieldUpdateOperationsInput | string
    Contrase_a?: StringFieldUpdateOperationsInput | string
    Nivel?: EnumUsuarios_NivelFieldUpdateOperationsInput | $Enums.Usuarios_Nivel
    FechaRegistro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Comentarios?: ComentariosUncheckedUpdateManyWithoutUsuariosNestedInput
    Entrenadores?: EntrenadoresUncheckedUpdateManyWithoutUsuariosNestedInput
    InscripcionClases?: InscripcionClasesUncheckedUpdateManyWithoutUsuariosNestedInput
    InscripcionTorneos?: InscripcionTorneosUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type EspaciosUpsertWithoutReservasInput = {
    update: XOR<EspaciosUpdateWithoutReservasInput, EspaciosUncheckedUpdateWithoutReservasInput>
    create: XOR<EspaciosCreateWithoutReservasInput, EspaciosUncheckedCreateWithoutReservasInput>
    where?: EspaciosWhereInput
  }

  export type EspaciosUpdateToOneWithWhereWithoutReservasInput = {
    where?: EspaciosWhereInput
    data: XOR<EspaciosUpdateWithoutReservasInput, EspaciosUncheckedUpdateWithoutReservasInput>
  }

  export type EspaciosUpdateWithoutReservasInput = {
    NombreE?: StringFieldUpdateOperationsInput | string
    Tipo?: EnumEspacios_TipoFieldUpdateOperationsInput | $Enums.Espacios_Tipo
    Capacidad?: IntFieldUpdateOperationsInput | number
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Ubicacion?: StringFieldUpdateOperationsInput | string
    Clases?: ClasesUpdateManyWithoutEspaciosNestedInput
    Horarios?: HorariosUpdateManyWithoutEspaciosNestedInput
    Torneos?: TorneosUpdateManyWithoutEspaciosNestedInput
  }

  export type EspaciosUncheckedUpdateWithoutReservasInput = {
    IdEspacio?: IntFieldUpdateOperationsInput | number
    NombreE?: StringFieldUpdateOperationsInput | string
    Tipo?: EnumEspacios_TipoFieldUpdateOperationsInput | $Enums.Espacios_Tipo
    Capacidad?: IntFieldUpdateOperationsInput | number
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Ubicacion?: StringFieldUpdateOperationsInput | string
    Clases?: ClasesUncheckedUpdateManyWithoutEspaciosNestedInput
    Horarios?: HorariosUncheckedUpdateManyWithoutEspaciosNestedInput
    Torneos?: TorneosUncheckedUpdateManyWithoutEspaciosNestedInput
  }

  export type EntrenadoresCreateWithoutTalleresInput = {
    Especialidad: string
    Experiencia?: string | null
    Telefono?: string | null
    Clases?: ClasesCreateNestedManyWithoutEntrenadoresInput
    Usuarios?: UsuariosCreateNestedOneWithoutEntrenadoresInput
  }

  export type EntrenadoresUncheckedCreateWithoutTalleresInput = {
    IdEntrenador?: number
    FkIdUsuario?: number | null
    Especialidad: string
    Experiencia?: string | null
    Telefono?: string | null
    Clases?: ClasesUncheckedCreateNestedManyWithoutEntrenadoresInput
  }

  export type EntrenadoresCreateOrConnectWithoutTalleresInput = {
    where: EntrenadoresWhereUniqueInput
    create: XOR<EntrenadoresCreateWithoutTalleresInput, EntrenadoresUncheckedCreateWithoutTalleresInput>
  }

  export type HorariosCreateWithoutTalleresInput = {
    DiaSemana: string
    HoraInicio: Date | string
    HoraFin: Date | string
    Clases?: ClasesCreateNestedManyWithoutHorariosInput
    Espacios: EspaciosCreateNestedOneWithoutHorariosInput
    Torneos?: TorneosCreateNestedManyWithoutHorariosInput
  }

  export type HorariosUncheckedCreateWithoutTalleresInput = {
    IdHorario?: number
    FkIdEspacio: number
    DiaSemana: string
    HoraInicio: Date | string
    HoraFin: Date | string
    Clases?: ClasesUncheckedCreateNestedManyWithoutHorariosInput
    Torneos?: TorneosUncheckedCreateNestedManyWithoutHorariosInput
  }

  export type HorariosCreateOrConnectWithoutTalleresInput = {
    where: HorariosWhereUniqueInput
    create: XOR<HorariosCreateWithoutTalleresInput, HorariosUncheckedCreateWithoutTalleresInput>
  }

  export type EntrenadoresUpsertWithoutTalleresInput = {
    update: XOR<EntrenadoresUpdateWithoutTalleresInput, EntrenadoresUncheckedUpdateWithoutTalleresInput>
    create: XOR<EntrenadoresCreateWithoutTalleresInput, EntrenadoresUncheckedCreateWithoutTalleresInput>
    where?: EntrenadoresWhereInput
  }

  export type EntrenadoresUpdateToOneWithWhereWithoutTalleresInput = {
    where?: EntrenadoresWhereInput
    data: XOR<EntrenadoresUpdateWithoutTalleresInput, EntrenadoresUncheckedUpdateWithoutTalleresInput>
  }

  export type EntrenadoresUpdateWithoutTalleresInput = {
    Especialidad?: StringFieldUpdateOperationsInput | string
    Experiencia?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Clases?: ClasesUpdateManyWithoutEntrenadoresNestedInput
    Usuarios?: UsuariosUpdateOneWithoutEntrenadoresNestedInput
  }

  export type EntrenadoresUncheckedUpdateWithoutTalleresInput = {
    IdEntrenador?: IntFieldUpdateOperationsInput | number
    FkIdUsuario?: NullableIntFieldUpdateOperationsInput | number | null
    Especialidad?: StringFieldUpdateOperationsInput | string
    Experiencia?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Clases?: ClasesUncheckedUpdateManyWithoutEntrenadoresNestedInput
  }

  export type HorariosUpsertWithoutTalleresInput = {
    update: XOR<HorariosUpdateWithoutTalleresInput, HorariosUncheckedUpdateWithoutTalleresInput>
    create: XOR<HorariosCreateWithoutTalleresInput, HorariosUncheckedCreateWithoutTalleresInput>
    where?: HorariosWhereInput
  }

  export type HorariosUpdateToOneWithWhereWithoutTalleresInput = {
    where?: HorariosWhereInput
    data: XOR<HorariosUpdateWithoutTalleresInput, HorariosUncheckedUpdateWithoutTalleresInput>
  }

  export type HorariosUpdateWithoutTalleresInput = {
    DiaSemana?: StringFieldUpdateOperationsInput | string
    HoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraFin?: DateTimeFieldUpdateOperationsInput | Date | string
    Clases?: ClasesUpdateManyWithoutHorariosNestedInput
    Espacios?: EspaciosUpdateOneRequiredWithoutHorariosNestedInput
    Torneos?: TorneosUpdateManyWithoutHorariosNestedInput
  }

  export type HorariosUncheckedUpdateWithoutTalleresInput = {
    IdHorario?: IntFieldUpdateOperationsInput | number
    FkIdEspacio?: IntFieldUpdateOperationsInput | number
    DiaSemana?: StringFieldUpdateOperationsInput | string
    HoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraFin?: DateTimeFieldUpdateOperationsInput | Date | string
    Clases?: ClasesUncheckedUpdateManyWithoutHorariosNestedInput
    Torneos?: TorneosUncheckedUpdateManyWithoutHorariosNestedInput
  }

  export type InscripcionTorneosCreateWithoutTorneosInput = {
    FechaI?: Date | string | null
    Usuarios: UsuariosCreateNestedOneWithoutInscripcionTorneosInput
  }

  export type InscripcionTorneosUncheckedCreateWithoutTorneosInput = {
    IdInscripcionTorneo?: number
    FkIdUsuario: number
    FechaI?: Date | string | null
  }

  export type InscripcionTorneosCreateOrConnectWithoutTorneosInput = {
    where: InscripcionTorneosWhereUniqueInput
    create: XOR<InscripcionTorneosCreateWithoutTorneosInput, InscripcionTorneosUncheckedCreateWithoutTorneosInput>
  }

  export type InscripcionTorneosCreateManyTorneosInputEnvelope = {
    data: InscripcionTorneosCreateManyTorneosInput | InscripcionTorneosCreateManyTorneosInput[]
    skipDuplicates?: boolean
  }

  export type EspaciosCreateWithoutTorneosInput = {
    NombreE: string
    Tipo: $Enums.Espacios_Tipo
    Capacidad: number
    Descripcion?: string | null
    Ubicacion: string
    Clases?: ClasesCreateNestedManyWithoutEspaciosInput
    Horarios?: HorariosCreateNestedManyWithoutEspaciosInput
    Reservas?: ReservasCreateNestedManyWithoutEspaciosInput
  }

  export type EspaciosUncheckedCreateWithoutTorneosInput = {
    IdEspacio?: number
    NombreE: string
    Tipo: $Enums.Espacios_Tipo
    Capacidad: number
    Descripcion?: string | null
    Ubicacion: string
    Clases?: ClasesUncheckedCreateNestedManyWithoutEspaciosInput
    Horarios?: HorariosUncheckedCreateNestedManyWithoutEspaciosInput
    Reservas?: ReservasUncheckedCreateNestedManyWithoutEspaciosInput
  }

  export type EspaciosCreateOrConnectWithoutTorneosInput = {
    where: EspaciosWhereUniqueInput
    create: XOR<EspaciosCreateWithoutTorneosInput, EspaciosUncheckedCreateWithoutTorneosInput>
  }

  export type HorariosCreateWithoutTorneosInput = {
    DiaSemana: string
    HoraInicio: Date | string
    HoraFin: Date | string
    Clases?: ClasesCreateNestedManyWithoutHorariosInput
    Espacios: EspaciosCreateNestedOneWithoutHorariosInput
    Talleres?: TalleresCreateNestedManyWithoutHorariosInput
  }

  export type HorariosUncheckedCreateWithoutTorneosInput = {
    IdHorario?: number
    FkIdEspacio: number
    DiaSemana: string
    HoraInicio: Date | string
    HoraFin: Date | string
    Clases?: ClasesUncheckedCreateNestedManyWithoutHorariosInput
    Talleres?: TalleresUncheckedCreateNestedManyWithoutHorariosInput
  }

  export type HorariosCreateOrConnectWithoutTorneosInput = {
    where: HorariosWhereUniqueInput
    create: XOR<HorariosCreateWithoutTorneosInput, HorariosUncheckedCreateWithoutTorneosInput>
  }

  export type InscripcionTorneosUpsertWithWhereUniqueWithoutTorneosInput = {
    where: InscripcionTorneosWhereUniqueInput
    update: XOR<InscripcionTorneosUpdateWithoutTorneosInput, InscripcionTorneosUncheckedUpdateWithoutTorneosInput>
    create: XOR<InscripcionTorneosCreateWithoutTorneosInput, InscripcionTorneosUncheckedCreateWithoutTorneosInput>
  }

  export type InscripcionTorneosUpdateWithWhereUniqueWithoutTorneosInput = {
    where: InscripcionTorneosWhereUniqueInput
    data: XOR<InscripcionTorneosUpdateWithoutTorneosInput, InscripcionTorneosUncheckedUpdateWithoutTorneosInput>
  }

  export type InscripcionTorneosUpdateManyWithWhereWithoutTorneosInput = {
    where: InscripcionTorneosScalarWhereInput
    data: XOR<InscripcionTorneosUpdateManyMutationInput, InscripcionTorneosUncheckedUpdateManyWithoutTorneosInput>
  }

  export type InscripcionTorneosScalarWhereInput = {
    AND?: InscripcionTorneosScalarWhereInput | InscripcionTorneosScalarWhereInput[]
    OR?: InscripcionTorneosScalarWhereInput[]
    NOT?: InscripcionTorneosScalarWhereInput | InscripcionTorneosScalarWhereInput[]
    IdInscripcionTorneo?: IntFilter<"InscripcionTorneos"> | number
    FkIdUsuario?: IntFilter<"InscripcionTorneos"> | number
    FkIdTorneo?: IntFilter<"InscripcionTorneos"> | number
    FechaI?: DateTimeNullableFilter<"InscripcionTorneos"> | Date | string | null
  }

  export type EspaciosUpsertWithoutTorneosInput = {
    update: XOR<EspaciosUpdateWithoutTorneosInput, EspaciosUncheckedUpdateWithoutTorneosInput>
    create: XOR<EspaciosCreateWithoutTorneosInput, EspaciosUncheckedCreateWithoutTorneosInput>
    where?: EspaciosWhereInput
  }

  export type EspaciosUpdateToOneWithWhereWithoutTorneosInput = {
    where?: EspaciosWhereInput
    data: XOR<EspaciosUpdateWithoutTorneosInput, EspaciosUncheckedUpdateWithoutTorneosInput>
  }

  export type EspaciosUpdateWithoutTorneosInput = {
    NombreE?: StringFieldUpdateOperationsInput | string
    Tipo?: EnumEspacios_TipoFieldUpdateOperationsInput | $Enums.Espacios_Tipo
    Capacidad?: IntFieldUpdateOperationsInput | number
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Ubicacion?: StringFieldUpdateOperationsInput | string
    Clases?: ClasesUpdateManyWithoutEspaciosNestedInput
    Horarios?: HorariosUpdateManyWithoutEspaciosNestedInput
    Reservas?: ReservasUpdateManyWithoutEspaciosNestedInput
  }

  export type EspaciosUncheckedUpdateWithoutTorneosInput = {
    IdEspacio?: IntFieldUpdateOperationsInput | number
    NombreE?: StringFieldUpdateOperationsInput | string
    Tipo?: EnumEspacios_TipoFieldUpdateOperationsInput | $Enums.Espacios_Tipo
    Capacidad?: IntFieldUpdateOperationsInput | number
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Ubicacion?: StringFieldUpdateOperationsInput | string
    Clases?: ClasesUncheckedUpdateManyWithoutEspaciosNestedInput
    Horarios?: HorariosUncheckedUpdateManyWithoutEspaciosNestedInput
    Reservas?: ReservasUncheckedUpdateManyWithoutEspaciosNestedInput
  }

  export type HorariosUpsertWithoutTorneosInput = {
    update: XOR<HorariosUpdateWithoutTorneosInput, HorariosUncheckedUpdateWithoutTorneosInput>
    create: XOR<HorariosCreateWithoutTorneosInput, HorariosUncheckedCreateWithoutTorneosInput>
    where?: HorariosWhereInput
  }

  export type HorariosUpdateToOneWithWhereWithoutTorneosInput = {
    where?: HorariosWhereInput
    data: XOR<HorariosUpdateWithoutTorneosInput, HorariosUncheckedUpdateWithoutTorneosInput>
  }

  export type HorariosUpdateWithoutTorneosInput = {
    DiaSemana?: StringFieldUpdateOperationsInput | string
    HoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraFin?: DateTimeFieldUpdateOperationsInput | Date | string
    Clases?: ClasesUpdateManyWithoutHorariosNestedInput
    Espacios?: EspaciosUpdateOneRequiredWithoutHorariosNestedInput
    Talleres?: TalleresUpdateManyWithoutHorariosNestedInput
  }

  export type HorariosUncheckedUpdateWithoutTorneosInput = {
    IdHorario?: IntFieldUpdateOperationsInput | number
    FkIdEspacio?: IntFieldUpdateOperationsInput | number
    DiaSemana?: StringFieldUpdateOperationsInput | string
    HoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraFin?: DateTimeFieldUpdateOperationsInput | Date | string
    Clases?: ClasesUncheckedUpdateManyWithoutHorariosNestedInput
    Talleres?: TalleresUncheckedUpdateManyWithoutHorariosNestedInput
  }

  export type ComentariosCreateWithoutUsuariosInput = {
    Comentario: string
    FechaComentario?: Date | string | null
  }

  export type ComentariosUncheckedCreateWithoutUsuariosInput = {
    IdComentario?: number
    Comentario: string
    FechaComentario?: Date | string | null
  }

  export type ComentariosCreateOrConnectWithoutUsuariosInput = {
    where: ComentariosWhereUniqueInput
    create: XOR<ComentariosCreateWithoutUsuariosInput, ComentariosUncheckedCreateWithoutUsuariosInput>
  }

  export type ComentariosCreateManyUsuariosInputEnvelope = {
    data: ComentariosCreateManyUsuariosInput | ComentariosCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type EntrenadoresCreateWithoutUsuariosInput = {
    Especialidad: string
    Experiencia?: string | null
    Telefono?: string | null
    Clases?: ClasesCreateNestedManyWithoutEntrenadoresInput
    Talleres?: TalleresCreateNestedManyWithoutEntrenadoresInput
  }

  export type EntrenadoresUncheckedCreateWithoutUsuariosInput = {
    IdEntrenador?: number
    Especialidad: string
    Experiencia?: string | null
    Telefono?: string | null
    Clases?: ClasesUncheckedCreateNestedManyWithoutEntrenadoresInput
    Talleres?: TalleresUncheckedCreateNestedManyWithoutEntrenadoresInput
  }

  export type EntrenadoresCreateOrConnectWithoutUsuariosInput = {
    where: EntrenadoresWhereUniqueInput
    create: XOR<EntrenadoresCreateWithoutUsuariosInput, EntrenadoresUncheckedCreateWithoutUsuariosInput>
  }

  export type EntrenadoresCreateManyUsuariosInputEnvelope = {
    data: EntrenadoresCreateManyUsuariosInput | EntrenadoresCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type InscripcionClasesCreateWithoutUsuariosInput = {
    FechaI?: Date | string | null
    Clases: ClasesCreateNestedOneWithoutInscripcionClasesInput
  }

  export type InscripcionClasesUncheckedCreateWithoutUsuariosInput = {
    IdInscripcionClase?: number
    FkIdClase: number
    FechaI?: Date | string | null
  }

  export type InscripcionClasesCreateOrConnectWithoutUsuariosInput = {
    where: InscripcionClasesWhereUniqueInput
    create: XOR<InscripcionClasesCreateWithoutUsuariosInput, InscripcionClasesUncheckedCreateWithoutUsuariosInput>
  }

  export type InscripcionClasesCreateManyUsuariosInputEnvelope = {
    data: InscripcionClasesCreateManyUsuariosInput | InscripcionClasesCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type InscripcionTorneosCreateWithoutUsuariosInput = {
    FechaI?: Date | string | null
    Torneos: TorneosCreateNestedOneWithoutInscripcionTorneosInput
  }

  export type InscripcionTorneosUncheckedCreateWithoutUsuariosInput = {
    IdInscripcionTorneo?: number
    FkIdTorneo: number
    FechaI?: Date | string | null
  }

  export type InscripcionTorneosCreateOrConnectWithoutUsuariosInput = {
    where: InscripcionTorneosWhereUniqueInput
    create: XOR<InscripcionTorneosCreateWithoutUsuariosInput, InscripcionTorneosUncheckedCreateWithoutUsuariosInput>
  }

  export type InscripcionTorneosCreateManyUsuariosInputEnvelope = {
    data: InscripcionTorneosCreateManyUsuariosInput | InscripcionTorneosCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type ReservasCreateWithoutUsuariosInput = {
    FechaReserva: Date | string
    HoraInicioR: Date | string
    HoraFinR: Date | string
    Estado?: $Enums.Reservas_Estado | null
    Espacios: EspaciosCreateNestedOneWithoutReservasInput
  }

  export type ReservasUncheckedCreateWithoutUsuariosInput = {
    IdReserva?: number
    FkIdEspacio: number
    FechaReserva: Date | string
    HoraInicioR: Date | string
    HoraFinR: Date | string
    Estado?: $Enums.Reservas_Estado | null
  }

  export type ReservasCreateOrConnectWithoutUsuariosInput = {
    where: ReservasWhereUniqueInput
    create: XOR<ReservasCreateWithoutUsuariosInput, ReservasUncheckedCreateWithoutUsuariosInput>
  }

  export type ReservasCreateManyUsuariosInputEnvelope = {
    data: ReservasCreateManyUsuariosInput | ReservasCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type ComentariosUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: ComentariosWhereUniqueInput
    update: XOR<ComentariosUpdateWithoutUsuariosInput, ComentariosUncheckedUpdateWithoutUsuariosInput>
    create: XOR<ComentariosCreateWithoutUsuariosInput, ComentariosUncheckedCreateWithoutUsuariosInput>
  }

  export type ComentariosUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: ComentariosWhereUniqueInput
    data: XOR<ComentariosUpdateWithoutUsuariosInput, ComentariosUncheckedUpdateWithoutUsuariosInput>
  }

  export type ComentariosUpdateManyWithWhereWithoutUsuariosInput = {
    where: ComentariosScalarWhereInput
    data: XOR<ComentariosUpdateManyMutationInput, ComentariosUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type ComentariosScalarWhereInput = {
    AND?: ComentariosScalarWhereInput | ComentariosScalarWhereInput[]
    OR?: ComentariosScalarWhereInput[]
    NOT?: ComentariosScalarWhereInput | ComentariosScalarWhereInput[]
    IdComentario?: IntFilter<"Comentarios"> | number
    FkIdUsuario?: IntFilter<"Comentarios"> | number
    Comentario?: StringFilter<"Comentarios"> | string
    FechaComentario?: DateTimeNullableFilter<"Comentarios"> | Date | string | null
  }

  export type EntrenadoresUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: EntrenadoresWhereUniqueInput
    update: XOR<EntrenadoresUpdateWithoutUsuariosInput, EntrenadoresUncheckedUpdateWithoutUsuariosInput>
    create: XOR<EntrenadoresCreateWithoutUsuariosInput, EntrenadoresUncheckedCreateWithoutUsuariosInput>
  }

  export type EntrenadoresUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: EntrenadoresWhereUniqueInput
    data: XOR<EntrenadoresUpdateWithoutUsuariosInput, EntrenadoresUncheckedUpdateWithoutUsuariosInput>
  }

  export type EntrenadoresUpdateManyWithWhereWithoutUsuariosInput = {
    where: EntrenadoresScalarWhereInput
    data: XOR<EntrenadoresUpdateManyMutationInput, EntrenadoresUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type EntrenadoresScalarWhereInput = {
    AND?: EntrenadoresScalarWhereInput | EntrenadoresScalarWhereInput[]
    OR?: EntrenadoresScalarWhereInput[]
    NOT?: EntrenadoresScalarWhereInput | EntrenadoresScalarWhereInput[]
    IdEntrenador?: IntFilter<"Entrenadores"> | number
    FkIdUsuario?: IntNullableFilter<"Entrenadores"> | number | null
    Especialidad?: StringFilter<"Entrenadores"> | string
    Experiencia?: StringNullableFilter<"Entrenadores"> | string | null
    Telefono?: StringNullableFilter<"Entrenadores"> | string | null
  }

  export type InscripcionClasesUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: InscripcionClasesWhereUniqueInput
    update: XOR<InscripcionClasesUpdateWithoutUsuariosInput, InscripcionClasesUncheckedUpdateWithoutUsuariosInput>
    create: XOR<InscripcionClasesCreateWithoutUsuariosInput, InscripcionClasesUncheckedCreateWithoutUsuariosInput>
  }

  export type InscripcionClasesUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: InscripcionClasesWhereUniqueInput
    data: XOR<InscripcionClasesUpdateWithoutUsuariosInput, InscripcionClasesUncheckedUpdateWithoutUsuariosInput>
  }

  export type InscripcionClasesUpdateManyWithWhereWithoutUsuariosInput = {
    where: InscripcionClasesScalarWhereInput
    data: XOR<InscripcionClasesUpdateManyMutationInput, InscripcionClasesUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type InscripcionTorneosUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: InscripcionTorneosWhereUniqueInput
    update: XOR<InscripcionTorneosUpdateWithoutUsuariosInput, InscripcionTorneosUncheckedUpdateWithoutUsuariosInput>
    create: XOR<InscripcionTorneosCreateWithoutUsuariosInput, InscripcionTorneosUncheckedCreateWithoutUsuariosInput>
  }

  export type InscripcionTorneosUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: InscripcionTorneosWhereUniqueInput
    data: XOR<InscripcionTorneosUpdateWithoutUsuariosInput, InscripcionTorneosUncheckedUpdateWithoutUsuariosInput>
  }

  export type InscripcionTorneosUpdateManyWithWhereWithoutUsuariosInput = {
    where: InscripcionTorneosScalarWhereInput
    data: XOR<InscripcionTorneosUpdateManyMutationInput, InscripcionTorneosUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type ReservasUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: ReservasWhereUniqueInput
    update: XOR<ReservasUpdateWithoutUsuariosInput, ReservasUncheckedUpdateWithoutUsuariosInput>
    create: XOR<ReservasCreateWithoutUsuariosInput, ReservasUncheckedCreateWithoutUsuariosInput>
  }

  export type ReservasUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: ReservasWhereUniqueInput
    data: XOR<ReservasUpdateWithoutUsuariosInput, ReservasUncheckedUpdateWithoutUsuariosInput>
  }

  export type ReservasUpdateManyWithWhereWithoutUsuariosInput = {
    where: ReservasScalarWhereInput
    data: XOR<ReservasUpdateManyMutationInput, ReservasUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type InscripcionClasesCreateManyClasesInput = {
    IdInscripcionClase?: number
    FkIdUsuario: number
    FechaI?: Date | string | null
  }

  export type InscripcionClasesUpdateWithoutClasesInput = {
    FechaI?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Usuarios?: UsuariosUpdateOneRequiredWithoutInscripcionClasesNestedInput
  }

  export type InscripcionClasesUncheckedUpdateWithoutClasesInput = {
    IdInscripcionClase?: IntFieldUpdateOperationsInput | number
    FkIdUsuario?: IntFieldUpdateOperationsInput | number
    FechaI?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InscripcionClasesUncheckedUpdateManyWithoutClasesInput = {
    IdInscripcionClase?: IntFieldUpdateOperationsInput | number
    FkIdUsuario?: IntFieldUpdateOperationsInput | number
    FechaI?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClasesCreateManyEntrenadoresInput = {
    IdClase?: number
    FkIdEspacio: number
    FkIdHorario: number
    NombreC: string
    Descripcion?: string | null
  }

  export type TalleresCreateManyEntrenadoresInput = {
    IdTaller?: number
    NombreTa: string
    Descripcion?: string | null
    FkIdHorario: number
  }

  export type ClasesUpdateWithoutEntrenadoresInput = {
    NombreC?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Espacios?: EspaciosUpdateOneRequiredWithoutClasesNestedInput
    Horarios?: HorariosUpdateOneRequiredWithoutClasesNestedInput
    InscripcionClases?: InscripcionClasesUpdateManyWithoutClasesNestedInput
  }

  export type ClasesUncheckedUpdateWithoutEntrenadoresInput = {
    IdClase?: IntFieldUpdateOperationsInput | number
    FkIdEspacio?: IntFieldUpdateOperationsInput | number
    FkIdHorario?: IntFieldUpdateOperationsInput | number
    NombreC?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    InscripcionClases?: InscripcionClasesUncheckedUpdateManyWithoutClasesNestedInput
  }

  export type ClasesUncheckedUpdateManyWithoutEntrenadoresInput = {
    IdClase?: IntFieldUpdateOperationsInput | number
    FkIdEspacio?: IntFieldUpdateOperationsInput | number
    FkIdHorario?: IntFieldUpdateOperationsInput | number
    NombreC?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TalleresUpdateWithoutEntrenadoresInput = {
    NombreTa?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Horarios?: HorariosUpdateOneRequiredWithoutTalleresNestedInput
  }

  export type TalleresUncheckedUpdateWithoutEntrenadoresInput = {
    IdTaller?: IntFieldUpdateOperationsInput | number
    NombreTa?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    FkIdHorario?: IntFieldUpdateOperationsInput | number
  }

  export type TalleresUncheckedUpdateManyWithoutEntrenadoresInput = {
    IdTaller?: IntFieldUpdateOperationsInput | number
    NombreTa?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    FkIdHorario?: IntFieldUpdateOperationsInput | number
  }

  export type ClasesCreateManyEspaciosInput = {
    IdClase?: number
    FkIdEntrenador: number
    FkIdHorario: number
    NombreC: string
    Descripcion?: string | null
  }

  export type HorariosCreateManyEspaciosInput = {
    IdHorario?: number
    DiaSemana: string
    HoraInicio: Date | string
    HoraFin: Date | string
  }

  export type ReservasCreateManyEspaciosInput = {
    IdReserva?: number
    FkIdUsuario: number
    FechaReserva: Date | string
    HoraInicioR: Date | string
    HoraFinR: Date | string
    Estado?: $Enums.Reservas_Estado | null
  }

  export type TorneosCreateManyEspaciosInput = {
    IdTorneo?: number
    NombreT: string
    FechaInicioT: Date | string
    FechaFinT: Date | string
    FkIdHorario?: number | null
  }

  export type ClasesUpdateWithoutEspaciosInput = {
    NombreC?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Entrenadores?: EntrenadoresUpdateOneRequiredWithoutClasesNestedInput
    Horarios?: HorariosUpdateOneRequiredWithoutClasesNestedInput
    InscripcionClases?: InscripcionClasesUpdateManyWithoutClasesNestedInput
  }

  export type ClasesUncheckedUpdateWithoutEspaciosInput = {
    IdClase?: IntFieldUpdateOperationsInput | number
    FkIdEntrenador?: IntFieldUpdateOperationsInput | number
    FkIdHorario?: IntFieldUpdateOperationsInput | number
    NombreC?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    InscripcionClases?: InscripcionClasesUncheckedUpdateManyWithoutClasesNestedInput
  }

  export type ClasesUncheckedUpdateManyWithoutEspaciosInput = {
    IdClase?: IntFieldUpdateOperationsInput | number
    FkIdEntrenador?: IntFieldUpdateOperationsInput | number
    FkIdHorario?: IntFieldUpdateOperationsInput | number
    NombreC?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HorariosUpdateWithoutEspaciosInput = {
    DiaSemana?: StringFieldUpdateOperationsInput | string
    HoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraFin?: DateTimeFieldUpdateOperationsInput | Date | string
    Clases?: ClasesUpdateManyWithoutHorariosNestedInput
    Talleres?: TalleresUpdateManyWithoutHorariosNestedInput
    Torneos?: TorneosUpdateManyWithoutHorariosNestedInput
  }

  export type HorariosUncheckedUpdateWithoutEspaciosInput = {
    IdHorario?: IntFieldUpdateOperationsInput | number
    DiaSemana?: StringFieldUpdateOperationsInput | string
    HoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraFin?: DateTimeFieldUpdateOperationsInput | Date | string
    Clases?: ClasesUncheckedUpdateManyWithoutHorariosNestedInput
    Talleres?: TalleresUncheckedUpdateManyWithoutHorariosNestedInput
    Torneos?: TorneosUncheckedUpdateManyWithoutHorariosNestedInput
  }

  export type HorariosUncheckedUpdateManyWithoutEspaciosInput = {
    IdHorario?: IntFieldUpdateOperationsInput | number
    DiaSemana?: StringFieldUpdateOperationsInput | string
    HoraInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraFin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservasUpdateWithoutEspaciosInput = {
    FechaReserva?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraInicioR?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraFinR?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado?: NullableEnumReservas_EstadoFieldUpdateOperationsInput | $Enums.Reservas_Estado | null
    Usuarios?: UsuariosUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservasUncheckedUpdateWithoutEspaciosInput = {
    IdReserva?: IntFieldUpdateOperationsInput | number
    FkIdUsuario?: IntFieldUpdateOperationsInput | number
    FechaReserva?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraInicioR?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraFinR?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado?: NullableEnumReservas_EstadoFieldUpdateOperationsInput | $Enums.Reservas_Estado | null
  }

  export type ReservasUncheckedUpdateManyWithoutEspaciosInput = {
    IdReserva?: IntFieldUpdateOperationsInput | number
    FkIdUsuario?: IntFieldUpdateOperationsInput | number
    FechaReserva?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraInicioR?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraFinR?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado?: NullableEnumReservas_EstadoFieldUpdateOperationsInput | $Enums.Reservas_Estado | null
  }

  export type TorneosUpdateWithoutEspaciosInput = {
    NombreT?: StringFieldUpdateOperationsInput | string
    FechaInicioT?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaFinT?: DateTimeFieldUpdateOperationsInput | Date | string
    InscripcionTorneos?: InscripcionTorneosUpdateManyWithoutTorneosNestedInput
    Horarios?: HorariosUpdateOneWithoutTorneosNestedInput
  }

  export type TorneosUncheckedUpdateWithoutEspaciosInput = {
    IdTorneo?: IntFieldUpdateOperationsInput | number
    NombreT?: StringFieldUpdateOperationsInput | string
    FechaInicioT?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaFinT?: DateTimeFieldUpdateOperationsInput | Date | string
    FkIdHorario?: NullableIntFieldUpdateOperationsInput | number | null
    InscripcionTorneos?: InscripcionTorneosUncheckedUpdateManyWithoutTorneosNestedInput
  }

  export type TorneosUncheckedUpdateManyWithoutEspaciosInput = {
    IdTorneo?: IntFieldUpdateOperationsInput | number
    NombreT?: StringFieldUpdateOperationsInput | string
    FechaInicioT?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaFinT?: DateTimeFieldUpdateOperationsInput | Date | string
    FkIdHorario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClasesCreateManyHorariosInput = {
    IdClase?: number
    FkIdEntrenador: number
    FkIdEspacio: number
    NombreC: string
    Descripcion?: string | null
  }

  export type TalleresCreateManyHorariosInput = {
    IdTaller?: number
    NombreTa: string
    Descripcion?: string | null
    FkIdEntrenador: number
  }

  export type TorneosCreateManyHorariosInput = {
    IdTorneo?: number
    NombreT: string
    FechaInicioT: Date | string
    FechaFinT: Date | string
    FkIdEspacio?: number | null
  }

  export type ClasesUpdateWithoutHorariosInput = {
    NombreC?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Entrenadores?: EntrenadoresUpdateOneRequiredWithoutClasesNestedInput
    Espacios?: EspaciosUpdateOneRequiredWithoutClasesNestedInput
    InscripcionClases?: InscripcionClasesUpdateManyWithoutClasesNestedInput
  }

  export type ClasesUncheckedUpdateWithoutHorariosInput = {
    IdClase?: IntFieldUpdateOperationsInput | number
    FkIdEntrenador?: IntFieldUpdateOperationsInput | number
    FkIdEspacio?: IntFieldUpdateOperationsInput | number
    NombreC?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    InscripcionClases?: InscripcionClasesUncheckedUpdateManyWithoutClasesNestedInput
  }

  export type ClasesUncheckedUpdateManyWithoutHorariosInput = {
    IdClase?: IntFieldUpdateOperationsInput | number
    FkIdEntrenador?: IntFieldUpdateOperationsInput | number
    FkIdEspacio?: IntFieldUpdateOperationsInput | number
    NombreC?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TalleresUpdateWithoutHorariosInput = {
    NombreTa?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Entrenadores?: EntrenadoresUpdateOneRequiredWithoutTalleresNestedInput
  }

  export type TalleresUncheckedUpdateWithoutHorariosInput = {
    IdTaller?: IntFieldUpdateOperationsInput | number
    NombreTa?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    FkIdEntrenador?: IntFieldUpdateOperationsInput | number
  }

  export type TalleresUncheckedUpdateManyWithoutHorariosInput = {
    IdTaller?: IntFieldUpdateOperationsInput | number
    NombreTa?: StringFieldUpdateOperationsInput | string
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    FkIdEntrenador?: IntFieldUpdateOperationsInput | number
  }

  export type TorneosUpdateWithoutHorariosInput = {
    NombreT?: StringFieldUpdateOperationsInput | string
    FechaInicioT?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaFinT?: DateTimeFieldUpdateOperationsInput | Date | string
    InscripcionTorneos?: InscripcionTorneosUpdateManyWithoutTorneosNestedInput
    Espacios?: EspaciosUpdateOneWithoutTorneosNestedInput
  }

  export type TorneosUncheckedUpdateWithoutHorariosInput = {
    IdTorneo?: IntFieldUpdateOperationsInput | number
    NombreT?: StringFieldUpdateOperationsInput | string
    FechaInicioT?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaFinT?: DateTimeFieldUpdateOperationsInput | Date | string
    FkIdEspacio?: NullableIntFieldUpdateOperationsInput | number | null
    InscripcionTorneos?: InscripcionTorneosUncheckedUpdateManyWithoutTorneosNestedInput
  }

  export type TorneosUncheckedUpdateManyWithoutHorariosInput = {
    IdTorneo?: IntFieldUpdateOperationsInput | number
    NombreT?: StringFieldUpdateOperationsInput | string
    FechaInicioT?: DateTimeFieldUpdateOperationsInput | Date | string
    FechaFinT?: DateTimeFieldUpdateOperationsInput | Date | string
    FkIdEspacio?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InscripcionTorneosCreateManyTorneosInput = {
    IdInscripcionTorneo?: number
    FkIdUsuario: number
    FechaI?: Date | string | null
  }

  export type InscripcionTorneosUpdateWithoutTorneosInput = {
    FechaI?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Usuarios?: UsuariosUpdateOneRequiredWithoutInscripcionTorneosNestedInput
  }

  export type InscripcionTorneosUncheckedUpdateWithoutTorneosInput = {
    IdInscripcionTorneo?: IntFieldUpdateOperationsInput | number
    FkIdUsuario?: IntFieldUpdateOperationsInput | number
    FechaI?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InscripcionTorneosUncheckedUpdateManyWithoutTorneosInput = {
    IdInscripcionTorneo?: IntFieldUpdateOperationsInput | number
    FkIdUsuario?: IntFieldUpdateOperationsInput | number
    FechaI?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ComentariosCreateManyUsuariosInput = {
    IdComentario?: number
    Comentario: string
    FechaComentario?: Date | string | null
  }

  export type EntrenadoresCreateManyUsuariosInput = {
    IdEntrenador?: number
    Especialidad: string
    Experiencia?: string | null
    Telefono?: string | null
  }

  export type InscripcionClasesCreateManyUsuariosInput = {
    IdInscripcionClase?: number
    FkIdClase: number
    FechaI?: Date | string | null
  }

  export type InscripcionTorneosCreateManyUsuariosInput = {
    IdInscripcionTorneo?: number
    FkIdTorneo: number
    FechaI?: Date | string | null
  }

  export type ReservasCreateManyUsuariosInput = {
    IdReserva?: number
    FkIdEspacio: number
    FechaReserva: Date | string
    HoraInicioR: Date | string
    HoraFinR: Date | string
    Estado?: $Enums.Reservas_Estado | null
  }

  export type ComentariosUpdateWithoutUsuariosInput = {
    Comentario?: StringFieldUpdateOperationsInput | string
    FechaComentario?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ComentariosUncheckedUpdateWithoutUsuariosInput = {
    IdComentario?: IntFieldUpdateOperationsInput | number
    Comentario?: StringFieldUpdateOperationsInput | string
    FechaComentario?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ComentariosUncheckedUpdateManyWithoutUsuariosInput = {
    IdComentario?: IntFieldUpdateOperationsInput | number
    Comentario?: StringFieldUpdateOperationsInput | string
    FechaComentario?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EntrenadoresUpdateWithoutUsuariosInput = {
    Especialidad?: StringFieldUpdateOperationsInput | string
    Experiencia?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Clases?: ClasesUpdateManyWithoutEntrenadoresNestedInput
    Talleres?: TalleresUpdateManyWithoutEntrenadoresNestedInput
  }

  export type EntrenadoresUncheckedUpdateWithoutUsuariosInput = {
    IdEntrenador?: IntFieldUpdateOperationsInput | number
    Especialidad?: StringFieldUpdateOperationsInput | string
    Experiencia?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Clases?: ClasesUncheckedUpdateManyWithoutEntrenadoresNestedInput
    Talleres?: TalleresUncheckedUpdateManyWithoutEntrenadoresNestedInput
  }

  export type EntrenadoresUncheckedUpdateManyWithoutUsuariosInput = {
    IdEntrenador?: IntFieldUpdateOperationsInput | number
    Especialidad?: StringFieldUpdateOperationsInput | string
    Experiencia?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InscripcionClasesUpdateWithoutUsuariosInput = {
    FechaI?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Clases?: ClasesUpdateOneRequiredWithoutInscripcionClasesNestedInput
  }

  export type InscripcionClasesUncheckedUpdateWithoutUsuariosInput = {
    IdInscripcionClase?: IntFieldUpdateOperationsInput | number
    FkIdClase?: IntFieldUpdateOperationsInput | number
    FechaI?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InscripcionClasesUncheckedUpdateManyWithoutUsuariosInput = {
    IdInscripcionClase?: IntFieldUpdateOperationsInput | number
    FkIdClase?: IntFieldUpdateOperationsInput | number
    FechaI?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InscripcionTorneosUpdateWithoutUsuariosInput = {
    FechaI?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Torneos?: TorneosUpdateOneRequiredWithoutInscripcionTorneosNestedInput
  }

  export type InscripcionTorneosUncheckedUpdateWithoutUsuariosInput = {
    IdInscripcionTorneo?: IntFieldUpdateOperationsInput | number
    FkIdTorneo?: IntFieldUpdateOperationsInput | number
    FechaI?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InscripcionTorneosUncheckedUpdateManyWithoutUsuariosInput = {
    IdInscripcionTorneo?: IntFieldUpdateOperationsInput | number
    FkIdTorneo?: IntFieldUpdateOperationsInput | number
    FechaI?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReservasUpdateWithoutUsuariosInput = {
    FechaReserva?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraInicioR?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraFinR?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado?: NullableEnumReservas_EstadoFieldUpdateOperationsInput | $Enums.Reservas_Estado | null
    Espacios?: EspaciosUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservasUncheckedUpdateWithoutUsuariosInput = {
    IdReserva?: IntFieldUpdateOperationsInput | number
    FkIdEspacio?: IntFieldUpdateOperationsInput | number
    FechaReserva?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraInicioR?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraFinR?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado?: NullableEnumReservas_EstadoFieldUpdateOperationsInput | $Enums.Reservas_Estado | null
  }

  export type ReservasUncheckedUpdateManyWithoutUsuariosInput = {
    IdReserva?: IntFieldUpdateOperationsInput | number
    FkIdEspacio?: IntFieldUpdateOperationsInput | number
    FechaReserva?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraInicioR?: DateTimeFieldUpdateOperationsInput | Date | string
    HoraFinR?: DateTimeFieldUpdateOperationsInput | Date | string
    Estado?: NullableEnumReservas_EstadoFieldUpdateOperationsInput | $Enums.Reservas_Estado | null
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
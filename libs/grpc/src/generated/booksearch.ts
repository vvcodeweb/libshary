// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               v3.21.12
// source: booksearch.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import {
  type CallOptions,
  ChannelCredentials,
  Client,
  type ClientOptions,
  type ClientUnaryCall,
  type handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  type ServiceError,
  type UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "booksearch";

export enum SearchApi {
  GOOGLE_BOOKS = 0,
  OPENLIB = 1,
  UNRECOGNIZED = -1,
}

export interface BookSearchRequest {
  q: string;
  apiProvider: SearchApi;
  limit: number;
  offset: number;
  tags: string[];
}

export interface BookSearchByIdRequest {
  id: string;
  apiProvider: SearchApi;
}

export interface TransientBook {
  title: string;
  authors: string[];
  description: string;
  publishedAt: string;
  pageCount: number;
  imageLinks: string;
  isbn10: string;
  isbn13: string;
  categories: string[];
  publisher: string;
  googleBookId: string;
}

export interface BookSearchResponse {
  apiProvider: SearchApi;
  totalNumber: number;
  limit: number;
  offset: number;
  result: TransientBook[];
}

export interface BookSearchByIdResponse {
  book: TransientBook | undefined;
}

export const BOOKSEARCH_PACKAGE_NAME = "booksearch";

function createBaseBookSearchRequest(): BookSearchRequest {
  return { q: "", apiProvider: 0, limit: 0, offset: 0, tags: [] };
}

export const BookSearchRequest: MessageFns<BookSearchRequest> = {
  encode(message: BookSearchRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.q !== "") {
      writer.uint32(10).string(message.q);
    }
    if (message.apiProvider !== 0) {
      writer.uint32(16).int32(message.apiProvider);
    }
    if (message.limit !== 0) {
      writer.uint32(24).int32(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(32).int32(message.offset);
    }
    for (const v of message.tags) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BookSearchRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBookSearchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.q = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.apiProvider = reader.int32() as any;
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.limit = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.offset = reader.int32();
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.tags.push(reader.string());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseBookSearchByIdRequest(): BookSearchByIdRequest {
  return { id: "", apiProvider: 0 };
}

export const BookSearchByIdRequest: MessageFns<BookSearchByIdRequest> = {
  encode(message: BookSearchByIdRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.apiProvider !== 0) {
      writer.uint32(16).int32(message.apiProvider);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BookSearchByIdRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBookSearchByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.apiProvider = reader.int32() as any;
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseTransientBook(): TransientBook {
  return {
    title: "",
    authors: [],
    description: "",
    publishedAt: "",
    pageCount: 0,
    imageLinks: "",
    isbn10: "",
    isbn13: "",
    categories: [],
    publisher: "",
    googleBookId: "",
  };
}

export const TransientBook: MessageFns<TransientBook> = {
  encode(message: TransientBook, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    for (const v of message.authors) {
      writer.uint32(18).string(v!);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.publishedAt !== "") {
      writer.uint32(34).string(message.publishedAt);
    }
    if (message.pageCount !== 0) {
      writer.uint32(40).int32(message.pageCount);
    }
    if (message.imageLinks !== "") {
      writer.uint32(50).string(message.imageLinks);
    }
    if (message.isbn10 !== "") {
      writer.uint32(58).string(message.isbn10);
    }
    if (message.isbn13 !== "") {
      writer.uint32(66).string(message.isbn13);
    }
    for (const v of message.categories) {
      writer.uint32(74).string(v!);
    }
    if (message.publisher !== "") {
      writer.uint32(82).string(message.publisher);
    }
    if (message.googleBookId !== "") {
      writer.uint32(90).string(message.googleBookId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TransientBook {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransientBook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.authors.push(reader.string());
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.publishedAt = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.pageCount = reader.int32();
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.imageLinks = reader.string();
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.isbn10 = reader.string();
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          message.isbn13 = reader.string();
          continue;
        }
        case 9: {
          if (tag !== 74) {
            break;
          }

          message.categories.push(reader.string());
          continue;
        }
        case 10: {
          if (tag !== 82) {
            break;
          }

          message.publisher = reader.string();
          continue;
        }
        case 11: {
          if (tag !== 90) {
            break;
          }

          message.googleBookId = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseBookSearchResponse(): BookSearchResponse {
  return { apiProvider: 0, totalNumber: 0, limit: 0, offset: 0, result: [] };
}

export const BookSearchResponse: MessageFns<BookSearchResponse> = {
  encode(message: BookSearchResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.apiProvider !== 0) {
      writer.uint32(8).int32(message.apiProvider);
    }
    if (message.totalNumber !== 0) {
      writer.uint32(16).int32(message.totalNumber);
    }
    if (message.limit !== 0) {
      writer.uint32(24).int32(message.limit);
    }
    if (message.offset !== 0) {
      writer.uint32(32).int32(message.offset);
    }
    for (const v of message.result) {
      TransientBook.encode(v!, writer.uint32(42).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BookSearchResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBookSearchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.apiProvider = reader.int32() as any;
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.totalNumber = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.limit = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.offset = reader.int32();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.result.push(TransientBook.decode(reader, reader.uint32()));
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseBookSearchByIdResponse(): BookSearchByIdResponse {
  return { book: undefined };
}

export const BookSearchByIdResponse: MessageFns<BookSearchByIdResponse> = {
  encode(message: BookSearchByIdResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.book !== undefined) {
      TransientBook.encode(message.book, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BookSearchByIdResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBookSearchByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.book = TransientBook.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

export interface BookSearchClient {
  search(request: BookSearchRequest, metadata?: Metadata): Observable<BookSearchResponse>;

  searchById(request: BookSearchByIdRequest, metadata?: Metadata): Observable<BookSearchByIdResponse>;
}

export interface BookSearchController {
  search(
    request: BookSearchRequest,
    metadata?: Metadata,
  ): Promise<BookSearchResponse> | Observable<BookSearchResponse> | BookSearchResponse;

  searchById(
    request: BookSearchByIdRequest,
    metadata?: Metadata,
  ): Promise<BookSearchByIdResponse> | Observable<BookSearchByIdResponse> | BookSearchByIdResponse;
}

export function BookSearchControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["search", "searchById"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("BookSearch", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("BookSearch", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const BOOK_SEARCH_SERVICE_NAME = "BookSearch";

export type BookSearchService = typeof BookSearchService;
export const BookSearchService = {
  search: {
    path: "/booksearch.BookSearch/Search",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: BookSearchRequest) => Buffer.from(BookSearchRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => BookSearchRequest.decode(value),
    responseSerialize: (value: BookSearchResponse) => Buffer.from(BookSearchResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => BookSearchResponse.decode(value),
  },
  searchById: {
    path: "/booksearch.BookSearch/SearchById",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: BookSearchByIdRequest) => Buffer.from(BookSearchByIdRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => BookSearchByIdRequest.decode(value),
    responseSerialize: (value: BookSearchByIdResponse) => Buffer.from(BookSearchByIdResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => BookSearchByIdResponse.decode(value),
  },
} as const;

export interface BookSearchServer extends UntypedServiceImplementation {
  search: handleUnaryCall<BookSearchRequest, BookSearchResponse>;
  searchById: handleUnaryCall<BookSearchByIdRequest, BookSearchByIdResponse>;
}

export interface BookSearchClient extends Client {
  search(
    request: BookSearchRequest,
    callback: (error: ServiceError | null, response: BookSearchResponse) => void,
  ): ClientUnaryCall;
  search(
    request: BookSearchRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: BookSearchResponse) => void,
  ): ClientUnaryCall;
  search(
    request: BookSearchRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: BookSearchResponse) => void,
  ): ClientUnaryCall;
  searchById(
    request: BookSearchByIdRequest,
    callback: (error: ServiceError | null, response: BookSearchByIdResponse) => void,
  ): ClientUnaryCall;
  searchById(
    request: BookSearchByIdRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: BookSearchByIdResponse) => void,
  ): ClientUnaryCall;
  searchById(
    request: BookSearchByIdRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: BookSearchByIdResponse) => void,
  ): ClientUnaryCall;
}

export const BookSearchClient = makeGenericClientConstructor(BookSearchService, "booksearch.BookSearch") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): BookSearchClient;
  service: typeof BookSearchService;
  serviceName: string;
};

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}

export interface SuccessResponse<T> {
  success: true;
  message: string;
  result: T;
  errors: string[];
}

export interface ErrorResponse {
  success: false;
  message: string;
  result: null;
  errors: string[];
}

export type ResponseData<T> = SuccessResponse<T> | ErrorResponse;

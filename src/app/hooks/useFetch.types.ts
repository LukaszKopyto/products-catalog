export interface StateTypes {
  status: string;
  error: Error | string | null;
  data: any;
}

export type ActionType =
  | { type: 'FETCHING' }
  | { type: 'FETCHED'; payload: any }
  | { type: 'ERROR'; payload: Error | string };

declare namespace redux {
  type action<T> = {
    type: string;
    payload: T;
  };
}

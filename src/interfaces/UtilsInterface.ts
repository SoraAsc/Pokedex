export interface IStateAsProps<T> {
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
}

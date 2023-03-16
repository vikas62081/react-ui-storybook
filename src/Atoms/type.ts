import { ReactElement } from "react";

export interface IItemProps {
  title: string;
  icon?: string | ReactElement;
  to?: string;
}

export interface IMenuProps {
  list: IItemProps[];
  userName?: string;
  onItemClick?: (item: IItemProps) => void;
}

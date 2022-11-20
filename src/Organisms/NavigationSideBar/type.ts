
export type ItemProps = {
    title: string;
    icon: string;
    to: string;
  };
  export type SideBarProps = {
    checked?: boolean;
    SideBarItems?: ItemProps[];
    company?: string;
    address?: string;
    phone?: string;
    email?: string;
    image?: string;
    isEnterpriseChild: boolean;
      activeIndex?: number;
      initialState?: boolean;
  };
  
  export type SidebarItemProps = {
    SideBarItems: ItemProps[] | undefined;
    activeIndex: number | undefined;
  };


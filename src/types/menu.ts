export type DrawerMenuItem = {
  name: string;
  id: string;
  level?: number;
  childOf?: DrawerMenuItem['id'];
};

export type DrawerMenuItem = {
  name: string;
  id: string;
  level?: number;
  childOf?: DrawerMenuItem['id'];
};

export type DrawerMenuTopicExplorerItem = {
  name: string;
  id: string;
  img?: string;
};

export interface SubItem {
  title: string
  to: string
}

export interface MegaColumn {
  title: string
  links: SubItem[]
}

export interface NavItem {
  title: string
  to?: string
  submenu?: SubItem[]
  columns?: MegaColumn[] // Совпадает с вашим конфигом
}
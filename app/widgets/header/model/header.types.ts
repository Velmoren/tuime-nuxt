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

export interface Action {
  name: string
  icon: string
  to?: string
  count?: number
  offcanvas?: string
}
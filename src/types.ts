import { StyleSheet } from 'react-native'

export interface AppDeclaration {
  name: string,
  slug: string,
  version: string,
  description: string,
  author: string,
  screens: Screen[]
}

export interface Screen {
  name: string,
  children: Element[]
}

export interface Element {
  name: ComponentName,
  children: Element[] | string | null,
  props: ElementProps,
  navigateTo: string,
  style: StyleSheet.NamedStyles<any>
}

export interface ElementProps {
  [key: string]: any
}

export enum ComponentName {
  uiText = '@UI/TEXT',
  uiButton = '@UI/BUTTON',
  uiTextInput = '@UI/TEXT_INPUT',
  uiImage = '@UI/IMAGE',
  uiTextArea = '@UI/TEXT_AREA',
  layoutBox = '@LAYOUT/BOX',
  navigationLink = '@NAVIGATION/LINK'
}

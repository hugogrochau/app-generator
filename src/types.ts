import { StyleSheet } from 'react-native'

export interface AppDeclaration {
  name: string,
  slug: string,
  version: string,
  description: string,
  screens: Screen[]
}

export interface Screen {
  name: string,
  children: Component[]
}

export interface Component {
  name: ComponentName,
  children: Component[] | string | null,
  props: ComponentProps,
  style: StyleSheet.NamedStyles<any>[]
}

export interface ComponentProps {
  [key: string]: any
}

enum ComponentName {
  uiText = '@UI/TEXT',
  uiButton = '@UI/BUTTON',
  uiTextInput = '@UI/TEXT_INPUT',
  uiImage = '@UI/IMAGE',
  uiTextArea = '@UI/TEXT_AREA',
  layoutBox = '@LAYOUT/BOX',
  navigationLink = '@NAVIGATION/LINK',
  navigationButton = '@NAVIGATION/BUTTON'
}

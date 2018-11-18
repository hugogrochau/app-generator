import handlebars from 'handlebars'
import path from 'path'
import { read } from './fileUtils'

const templates: { [key: string]: handlebars.TemplateDelegate } = {}

export const compileTemplates = () => {
  const templatesPath = path.join('assets', 'templates')
  compileTemplate(templatesPath, 'app.json')
}

const compileTemplate = (templatesPath: string, name: string) => {
  const template = read(path.join(templatesPath, `${name}.hbs`))
  templates[name] = handlebars.compile(template)
}

export const getTemplate = (name: string): handlebars.TemplateDelegate => {
  return templates[name]
}

export const executeTemplate = (templateName: string, data: {}) => {
  const template = getTemplate(templateName)
  return template(data)
}

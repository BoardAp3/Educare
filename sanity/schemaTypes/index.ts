import { type SchemaTypeDefinition } from 'sanity'
import { metaData } from './metaData'
import { page } from './page'
import { programPage } from './programPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [metaData, page, programPage],
}

import type { TypedFlatConfigItem } from '@antfu/eslint-config'
import {
  rootOder,
} from './order'

export const pagesRules: TypedFlatConfigItem['rules'] = {
  'jsonc/sort-array-values': [
    'error',
    {
      order: { type: 'asc' },
      pathPattern: '^files$',
    },
  ],
  'jsonc/sort-keys': [
    'error',
    rootOder,
  ],
}

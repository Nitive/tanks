import { svg } from '@cycle/dom'
import { toHTML } from '../../__tests__/test-helpers'

import field from '.'

test('test', async () => {
  const content = svg.g('.test-content')
  const contentHTML = await toHTML(content)
  const html = await toHTML(field([content]))
  expect(html).toContain(contentHTML)
})

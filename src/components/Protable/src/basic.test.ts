import { mount } from '@vue/test-utils';
import {test,  expect} from 'vitest';
import Protable from './index.vue';

test('mount component', async () => {
  expect(Protable).toBeTruthy()

  const table = mount(Protable)

  expect(table.text()).toContain('权限申请')

//   await table.get('button').trigger('click')

//   expect(table.text()).toContain('4 x 3 = 12')

//   await table.get('button').trigger('click')

//   expect(table.text()).toContain('4 x 4 = 16')
})
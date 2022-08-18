/**
 * @vitest-environment node
 */

import { readFileSync } from "fs";
import {test,  expect} from 'vitest';
const j = readFileSync('user_info.jdon',{encoding:'utf8'})
export const users_info = JSON.parse(j)


test('demo111',()=>{
    expect(1+1).toBe(2)
})
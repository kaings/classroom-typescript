/* method 1
import { PI, calcCircumference } from './math/circle';
*/
/* method 2 */
import * as Circle from './math/circle';

import { calcRectangle } from './math/rectangle';  // alternatively, import *whatevername* from './math/rectangle'; is also OK if the export function is only 1 (you need to put default in front of the function - see rectangle.ts

/* method 1
console.log('PI value is ', PI);
console.log('calcCircumference: ', calcCircumference(20));
*/
/* method 2 */
console.log('PI value is ', Circle.PI);
console.log('calcCircumference: ', Circle.calcCircumference(20));

console.log('calcRectangle: ', calcRectangle(50, 20));

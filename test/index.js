
/* IMPORT */

import {describe} from 'fava';
import buffer2uint8 from '../dist/index.js';

/* MAIN */

describe ( 'Buffer2Uint8', it => {

  it ( 'works', t => {

    const buffer = new Buffer ( 'hello' );
    const uint8 = buffer2uint8 ( buffer ); // => Uint8Array (5) [ 104, 101, 108, 108, 111 ]

    t.true ( buffer.equals ( uint8 ) );

  });

});

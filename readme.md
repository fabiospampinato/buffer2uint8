# Buffer2Uint8

A tiny function for casting a Buffer to a Uint8Array.

## Details

- The underlying ArrayBuffer is not copied, a new view into it is created.
- While Buffer extends Uint8Array the two don't work identically, and some times you actually just want to work with the real Uint8Array.

## Install

```sh
npm install buffer2uint8
```

## Usage

```ts
import buffer2uint8 from 'buffer2uint8';

// Let's convert a Buffer to a Uint8Array

const buffer = new Buffer ( 'hello' );
const uint8 = buffer2uint8 ( buffer ); // => Uint8Array (5) [ 104, 101, 108, 108, 111 ]
```

## License

MIT © Fabio Spampinato

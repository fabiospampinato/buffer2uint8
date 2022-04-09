
/* MAIN */

const buffer2uint8 = ( buffer: Uint8Array ): Uint8Array => {

  return new Uint8Array ( buffer.buffer, buffer.byteOffset, buffer.byteLength );

};

/* EXPORT */

export default buffer2uint8;

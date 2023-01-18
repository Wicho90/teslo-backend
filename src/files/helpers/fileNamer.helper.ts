
import { v4 as uuid } from 'uuid';

export const fileNamer = ( req: Express.Request, file: Express.Multer.File, callback: Function ) => {
    // console.log({ file });
    
    // Aqui ya deberiamos tener un arcivo, pero la validamos por si las moscas
    if ( !file ) return callback( new Error('File is empty'), false);

    const fileExtension = file.mimetype.split('/')[1];

    const fileName = `${ uuid() }.${ fileExtension }`;

    callback(null, fileName);

}
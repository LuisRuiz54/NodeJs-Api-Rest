const fs = require('fs')

fs.createReadStream('./assets/boxer.jpg')
   .pipe( fs.createWriteStream('./assets/boxer-stream.jpg'))
   .on('finish', () => console.log('Imagem foi escrita com sucesso'))
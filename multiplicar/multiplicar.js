const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('=================================='.green);
    console.log(`=== Taula de multiplicar del ${base} ===`.green);
    console.log('=================================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`);
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(console.log(`${base} o ${limite}no es un número`))
            return
        }
        let data = ``;

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }
        fs.writeFile(`taules/tabla-${base}-limite-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-limite-${limite}.txt`)
                // console.log(`El archivo` + ` tabla-${base}-limite-${limite}.txt `.red + ` ha sido creado`);
        });

    });

}
module.exports = {
    crearArchivo,
    listarTabla
}
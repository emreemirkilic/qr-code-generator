const fs = require('fs');
const path = require('path');
const axios = require('axios').default;

const downloadFile = async (fileUrl, downloadFolder) => {
    const fileName = path.basename(fileUrl);
    const localFilePath = path.resolve(__dirname, downloadFolder, fileName);

    try{
        const response = await axios({
            method: 'GET',
            url: fileUrl,
            responseType: 'stream'
        });

        const w = response.data.pipe(fs.createWriteStream(localFilePath));
        w.on('finish', () => {
            console.log(`yeah boi`);
        });
    } catch (err) {
        throw new Error(err);
    }
};

downloadFile('https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=100x100', 'download');


export class Compressor
{
    constructor()
    {
        this.maxURILength = 8192;
        this.defaultCompression = "LZMA2";
        this.defaultEncoding = "URI-B64";
    }

    push(string) //turn data into URL
    {
        const encoder = new TextEncoder();
        var data = encoder.encode(string);

        data = this.compress(data, this.defaultCompression);

        data = this.encode(data, this.defaultEncoding);

        return this.setURL(data, this.defaultCompression, this.defaultEncoding);

    }

    setURL(encodedData, compressionType, encoding) //set the url given the 3 URI params
    {
        var URL = "?enc=" + encoding + "&cmpr=" + compressionType + "&data=" + encodedData;
        return URL;
    }

    encode(compressedData, encodingType) //encode the given uint8 array as a string with the given compresison type
    {
        switch (encodingType)
        {
            case "URI-B64":
                return URIB64(compressedData);
            default:
                console.warn("unrecognized encoding argument: " + encodingType);
                return null;
        }

        function URIB64(data)
        {
            var utf8str = "";
            for(var item of data)
            {
                utf8str += String.fromCodePoint(item);
            }
            var payload = btoa(utf8str);
            payload = payload.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=/g, "");
            return payload;
        }
    }

    compress(uint8_raw, compressionType)
    {
        switch(compressionType)
        {
            case "ZLIB":
                return zlib(uint8_raw);
            case "LZMA2":
                return lzma2(uint8_raw);
            default:
                console.warn("unrecognized compression argument: " + compressionType);
                return null;
        }

        function zlib(data)
        {
            data = pako.deflate(data, { level: 9});
            return data;
        }

        function lzma2(data)
        {
            var s8 = new Array();
            for(var val of data)
            {
                s8.push(val-128);
            }
            data = LZMA.compress(s8, 9);
            var u8 = new Array();
            for(var val of data)
            {
                u8.push(val+128);
            }
            u8 = new Uint8Array(u8);
            return u8;
        }
    }
}
/** 
(async () => {

    // Check if a URL parameter was provided
    if (process.argv.length < 3) {
        console.error('Please provide a URL as a command-line argument.');
        process.exit(1);
    }

    // Extract the URL from the command-line arguments
    const url = process.argv[2];


    var c = new Compressor();
    console.log(c.push("hello world"));
})();


*/
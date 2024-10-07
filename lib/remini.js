const FormData = require("form-data");

async function remini(path, type) {
  return new Promise(async (pepenk, pepeng) => {
    let selecte = ['enhance', "recolor", "dehaze"];
    if (selecte.includes(type)) {
      type = type;
    } else {
      type = selecte[0];
    }

    let daata = new FormData();
    let url = "https://inferenceengine.vyro.ai/" + type;

    daata.append("model_version", 1, {
      'Content-Transfer-Encoding': "binary",
      'contentType': "multipart/form-data; charset=utf-8"
    });
    daata.append('image', Buffer.from(path), {
      'filename': "enhance_image_body.jpg",
      'contentType': "image/jpeg"
    });

    daata.submit({
      'url': url,
      'host': "inferenceengine.vyro.ai",
      'path': '/' + type,
      'protocol': "https:",
      'headers': {
        'User-Agent': 'okhttp/4.9.3',
        'Connection': "Keep-Alive",
        'Accept-Encoding': "gzip"
      }
    }, function (err, res) {
      if (err) {
        pepeng();
      }
      let chunks = [];
      res.on('data', function (chunk) {
        chunks.push(chunk);
      }).on("end", () => {
        pepenk(Buffer.concat(chunks));
      });
      res.on("error", err => {
        pepeng();
      });
    });
  });
}

module.exports.remini = remini;
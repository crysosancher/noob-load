//apna
const fs = require('fs');
const ytdl = require('ytdl-core');
const youtubfun=async()=>{
let info=await ytdl.getInfo('https://youtu.be/w4ClQO0FFQg')
// ytdl('https://youtu.be/w4ClQO0FFQg',{filter: info => info.qualityLabel=='1080p'})
//   .pipe(fs.createWriteStream('video12.mp4'));
ytdl('https://youtu.be/FbGcW0gChGw',{filter: info => info.itag == 38 || info.itag == 37 || info.itag== 22 ||info.itag== 83 ||info.itag== 18},console.log(info))
 .pipe(fs.createWriteStream('video20.mp4'));
 //console.log(info.itag)
}
youtubfun();
//ban ka
// const fs = require('fs');
// const ytdl = require('ytdl-core');
// const youtubfun=async()=>{
// let info=await ytdl.getInfo('https://youtu.be/w4ClQO0FFQg')
// // ytdl('https://youtu.be/w4ClQO0FFQg',{filter: info => info.qualityLabel=='1080p'})
// //   .pipe(fs.createWriteStream('video12.mp4'));
// ytdl('https://youtu.be/FbGcW0gChGw',{filter: info => {
// console.log(info.itag)
// return info.itag == 38 || info.itag == 37 || info.itag== 22 ||info.itage== 83 ||info.itag== 18
// }
// })
//  .pipe(fs.createWriteStream('video20.mp4'));
//  console.log(info.itag)
// }
// youtubfun();

// let info = await ytdl.getInfo(videoID);
// let format = ytdl.chooseFormat(info.formats, { quality: '134' });
// console.log('Format found!', format);
//audioBitrate: 160,
// let info = ytdl.getInfo(url)
// let rany=getRandom('.mp4')
// const stream = ytdl(url, { filter: info => info.itag == 22 || info.itag == 18 })
//     .pipe(fs.createWriteStream(rany));
// console.log("Video downloaded")
// await new Promise((resolve, reject) => {
//     stream.on('error', reject)
//     stream.on('finish', resolve)
// }).then(async (res) => {
//     await conn.sendMessage(
// 	from,
// 	fs.readFileSync(rany),
// 	MessageType.video,
// 	{ mimetype: Mimetype.mp4 ,caption:"Blender 👽",quoted:mek }
//     )
//     console.log("Sent ")
//     fs.unlinkSync(rany)

// }).catch((err) => {
//     reply('Unable to download,contact dev.');
// });
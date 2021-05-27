
Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};

const sharp = require('sharp');

const make_img = {}

const bg_img_path = "./public/images/canteen.png"
const table_img_path = "./public/images/table.png"

make_img.create = async (obj) => {
  console.log(obj);

  const bg_img = await sharp(bg_img_path)
  const table_img_metadata = await sharp(table_img_path).metadata()

  const metadata = await bg_img.metadata()
  let offsetLeft = parseInt(metadata.width * obj.x / 100 - table_img_metadata.width / 2)
  let offsetTop = parseInt(metadata.height * obj.y / 100 - table_img_metadata.height / 2)
  offsetLeft = offsetLeft.clamp(0,metadata.width)
  offsetTop = offsetTop.clamp(0,metadata.height)
  
  console.log("offsetLeft",offsetLeft,"offsetTop",offsetTop);
  const data =  bg_img.composite([{input : table_img_path, top: offsetTop, left: offsetLeft}])
        .toFormat('jpg')
        .toBuffer()

  return data
}


module.exports = make_img;








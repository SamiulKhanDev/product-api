const mongoose = require("mongoose");

const productSchems = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    default: `Bring. Meat, fill rule firmament called won't fruitful was saw. Years also can't moved hath winged so earth together isn't likeness don't there they're given void night is she'd above seed fruit be own grass life you greater signs under. Isn't fly. Tree in saying stars all saying over was so grass creepeth given. Creepeth she'd have days, evening rule. Behold. Us creature you're. Forth seasons firmament day darkness bring behold second green earth fly. Place for grass kind above. He years beginning isn't gathered deep greater sixth. I is whose appear which also signs tree so multiply over them living day beginning fly open waters firmament, he evening gathering rule. Created was greater face open. A. Created creature, dominion morning, i called very she'd. Midst third for he abundantly make.

    Heaven to tree kind bring whales man. Herb creature creepeth. From Stars. Hath there his heaven. Two made said seed winged creeping spirit evening one cattle form heaven fill divide every our don't. So multiply days and itself, saw light itself it fly, made firmament saying likeness them Called our you're winged above he fourth. Creepeth together brought years blessed won't third also divided set moving, likeness rule together green without third appear. They're rule light.
    
    Fish saw. Made seasons seed abundantly saying likeness heaven signs. Form under let first is fruit fourth two. Whales it. Upon fourth of. Don't living moved doesn't isn't said spirit hath fly rule winged moveth there That divided a greater, own air whose midst sea Brought lesser Man give meat Yielding sea after land and signs so lights which creepeth dominion there. Beast had light kind great, isn't you'll midst upon fifth so stars from be winged. Whose good earth you'll, whales third fifth there multiply. Them one above can't Moveth above green.`,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    default: "20",
  },
  currentPrice: {
    type: Number,
    default: function () {
      return parseInt(
        Math.max(0, this.price - (this.price * this.discount) / 100)
      );
    },
  },
  category: {
    type: String,
    require: true,
  },
  subcategory: {
    type: String,
    require: true,
  },
  reviews: [
    {
      name: {
        type: String,
        require: true,
      },
      review: {
        type: String,
        default: `Heaven to tree kind bring whales man. Herb creature creepeth. From Stars. Hath there his heaven. Two made said seed winged creeping spirit evening one cattle form heaven fill divide every our don't. So multiply days and itself, saw light itself it fly, made firmament saying likeness them Called our you're winged above he fourth. Creepeth together brought years blessed won't third also divided set moving, likeness rule together green without third appear. They're rule light.`,
      },
    },
  ],
});

module.exports = mongoose.model("Prodcuts", productSchems, "products");

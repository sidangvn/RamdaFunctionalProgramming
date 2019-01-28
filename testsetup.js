/* ********************************************************************************************** */
/* ********************************************************************************************** */
/* ******************************          Testing Setup.           ***************************** */
/* ****************************             DO NOT ALTER              *************************** */
/* ********************************************************************************************** */
/* ********************************************************************************************** */
require('colors');
require('chai').should();

const makePromiseTest = (msg, statement, value) => ({
  promise: new Promise((resolve, reject) => {
    try {
      statement.should.deep.equal(value);
      resolve(true);
    } catch (error) {
      reject(error);
    }
  }),
  testMessage: msg,
});

const runAllPromiseTest = (testObjects) => {
  testObjects.forEach((obj) => {
    obj.promise.then(
      () => console.log(`Testing: ${obj.testMessage.bold}`, '\n--- Success\n'.green.bold),
      err => console.log(`Testing: ${obj.testMessage.bold}`, `\n--- Failure: ${err.message}\n`.red.bold),
    );
  });
};

const alphaNumericTagsUniqTest1 = ['leonberger', 'autumn', 'dogs', 'screamingabdabsgallery',
  'screamingabdabs', 'gallery', 'limitededition', 'dogshow', 'gsp', 'germanshorharedpointer',
  'gspofinstagram', 'germanpointer', 'pointer', 'dogsofinstragram', 'germanshorthairedpointer',
  'ufc', 'dogsofinstagram', 'gspoftheda', 'ydogs', 'dog', 'birddog', 'mma', 'gsppuppy', 'like',
  'pointersofinstagram', 'boxing', 'puppy', 'khabibnurmagomedov', 'conormcgregor',
  'germanshorthair', 'mcgregor', 'mayweather', 'instadog', 'gspsofinstagram', 'gsplove',
  'dogstagram', 'gspcommunity', 'sport', 'bjj', 'natediaz', 'bhfyp', 'chagford', 'dartmoor',
  'devon', 'drewsteignton', 'unitedkingdom', 'american', 'eskimo', 'puppies', 'cutestdog', 'cute',
  'cutepuppy', 'sweet', 'animal', 'asbestos', 'is', 'bad', 'for', 'plants', 'skin', 'environment',
  'your', 'eyes', 'house', 'breathe', 'really', 'that', 'you', 'desktop', 'wallpaper', 'free',
  'pictures', 'mac', 'windows', '10', '7', 'fall', 'flowers', 'ireland', 'nature', 'summer',
  'download', 'pet', 'pets', 'portrait', 'portraitphotography', 'afghan', 'hound', 'colombia',
  'cartagena', 'america', 'animals', 'art', 'attire', 'beach', 'beaches', 'california', 'clothes',
  'clothing', 'corgi', 'corgicon', 'costume', 'festival', 'getup', 'leash', 'masquerade',
  'northamerica', 'oceanbeach', 'outfit', 'photography', 'richmond', 'richmonddistrict',
  'sanfrancisco', 'sand', 'sculpture', 'sculptures', 'street', 'streetphoto', 'streetphotography',
  'therichmond', 'usa', 'unitedstates', 'unitedstatesofamerica', 'urban', 'streetphotographer',
  'sharpei', 'love', 'sisters', 'posing', 'cane', 'cani', 'cavalier', 'sign', 'hug', 'canine',
  'airedale', 'terrier', 'lovedogs', '2018', 'photocontest', 'recreation', 'kids', 'field', 'home',
  'farm', 'paddleboarding', 'chesterriver', 'bulldog', 'pies', 'psy', 'hunde'];

const alphaNumericTagsUniqTest2 = ['acrylic', 'amazing', 'animal', 'animales', 'animals',
  'architecture', 'arizona', 'art', 'artlandscapes', 'autumn', 'basin', 'bhutan', 'bianco',
  'bianconero', 'black', 'blackwhite', 'boat', 'boats', 'bridge', 'bt', 'building', 'bursa',
  'cloud', 'clouds', 'cloudscape', 'cloudscapes', 'cloudy', 'color', 'colorful', 'colors',
  'construction', 'countryside', 'creative', 'duck', 'effect', 'effettidiluce', 'effettoseta',
  'electricity', 'elemental', 'england', 'europe', 'euskadi', 'farm', 'farmlife', 'fauna', 'flora',
  'gangteng', 'gangtengmonastery', 'gangtey', 'gangteyvalley', 'gb', 'goemba', 'golyazi', 'gompa',
  'gonpa', 'grass', 'gx8', 'harbor', 'heaven', 'horizontal', 'horses', 'iainmerchant', 'idyllic',
  'ireland', 'italia', 'italiachepassione', 'italian', 'italianphotography', 'italy', 'kerry',
  'lake', 'landforms', 'landscape', 'landscapephotography', 'landscapes', 'landscaping', 'lazio',
  'lazionelcuore', 'lee', 'leefilters', 'life', 'light', 'lightphotography', 'longexposure',
  'longexposurelit', 'lowland', 'lumix', 'lungheesposizioni', 'magical', 'mammals', 'mirrorless',
  'monastery', 'monocrom', 'monocromatico', 'monument', 'mountain', 'mountains', 'natura',
  'natural', 'naturaleza', 'nature', 'naturelover', 'naturelovers', 'naturephotographer',
  'naturephotography', 'ndfilters', 'nero', 'nitideces', 'nitidecesdemiguelemele', 'northeast',
  'nuvole', 'nyingmapa', 'nyingmapagonpa', 'paddocks', 'paesaggio', 'paesaggioitaliano', 'paint',
  'painting', 'paisajes', 'paisatges', 'panasonic', 'paseito', 'phobjikha', 'phobjikhavalley',
  'photo', 'photographer', 'photographie', 'photography', 'photographycolor', 'photographyoutside',
  'photooftheday', 'picoftheday', 'pier', 'places', 'pontile', 'power', 'powerful', 'prairie',
  'professions', 'pylons', 'river', 'roles', 'scenary', 'scenery', 'scenic', 'sea', 'seascape',
  'seashore', 'seaside', 'selby', 'serenity', 'shepherd', 'skies', 'sky', 'skylovers', 'skyvision',
  'softlight', 'sony', 'sonya7r', 'southafrica', 'stunning', 'sun', 'sunset', 'sunshine', 'taiwan',
  'torcwaterfall', 'town', 'tranquility', 'travel', 'trees', 'turkey', 'turkish', 'turkiye',
  'unitedkingdom', 'valley', 'viaggiare', 'vida', 'view', 'village', 'vionart', 'vision', 'viterbo',
  'walkabout', 'wander', 'wangduephodrang', 'was', 'water', 'waterfront', 'weather', 'wew',
  'whitby', 'white', 'wideangle', 'wildlife', 'yak', 'yorkshire'];

module.exports = {
  makePromiseTest,
  runAllPromiseTest,
  alphaNumericTagsUniqTest1,
  alphaNumericTagsUniqTest2,
};

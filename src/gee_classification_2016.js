var geometry = ee.FeatureCollection("projects/ee-efha94/assets/aoi_sragen"),
    Badan_air = 
    /* color: #1911e8 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([110.77382436704418, -7.293586554755488]),
            {
              "ClassID": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([110.7733952136018, -7.29520413969254]),
            {
              "ClassID": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([110.77657094907543, -7.293246009813375]),
            {
              "ClassID": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([110.77124944638989, -7.295629818967498]),
            {
              "ClassID": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79751363706372, -7.306356802972347]),
            {
              "ClassID": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([110.80558172178051, -7.304483856055218]),
            {
              "ClassID": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([110.81751218747875, -7.291798690919541]),
            {
              "ClassID": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([110.81828466367504, -7.293416282316822]),
            {
              "ClassID": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82085958432934, -7.294863595981073]),
            {
              "ClassID": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([110.81776967954418, -7.295970362095958]),
            {
              "ClassID": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83012929868481, -7.292309509886896]),
            {
              "ClassID": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83373418760083, -7.2939270994385526]),
            {
              "ClassID": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8265244097688, -7.303632513952931]),
            {
              "ClassID": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8210312457063, -7.302696035767822]),
            {
              "ClassID": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8173405261018, -7.3043135877644785]),
            {
              "ClassID": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([110.81656804990551, -7.299546049296692]),
            {
              "ClassID": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([110.81287733030102, -7.300312264264187]),
            {
              "ClassID": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([110.80987325620434, -7.301589286292886]),
            {
              "ClassID": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82008710813305, -7.298098750777098]),
            {
              "ClassID": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82600942563793, -7.306441936736623]),
            {
              "ClassID": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82729688596508, -7.3083148754469285]),
            {
              "ClassID": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82918516111157, -7.311124268789218]),
            {
              "ClassID": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83184591245434, -7.310187806305208]),
            {
              "ClassID": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82987180661938, -7.30567573227427]),
            {
              "ClassID": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82403531980297, -7.296821718783302]),
            {
              "ClassID": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83793989133618, -7.327895127807891]),
            {
              "ClassID": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83854070615551, -7.320659047705344]),
            {
              "ClassID": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83296171140454, -7.32338323282418]),
            {
              "ClassID": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([110.77219358396313, -7.301929824884641]),
            {
              "ClassID": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([110.77056280088208, -7.303973050988415]),
            {
              "ClassID": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82291952085278, -7.298694697793436]),
            {
              "ClassID": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82111707639477, -7.289414861367415]),
            {
              "ClassID": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83167425107739, -7.293416282316822]),
            {
              "ClassID": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83854070615551, -7.292139236962535]),
            {
              "ClassID": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([110.81725469541333, -7.2844768883700475]),
            {
              "ClassID": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82051626157543, -7.283455231991188]),
            {
              "ClassID": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8187996478059, -7.286520194141373]),
            {
              "ClassID": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82034460019848, -7.274260219843469]),
            {
              "ClassID": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8257519335725, -7.27775094109313]),
            {
              "ClassID": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82463613462231, -7.274004800149442]),
            {
              "ClassID": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([110.81785551023266, -7.274600779209411]),
            {
              "ClassID": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8147656054475, -7.27264255932682]),
            {
              "ClassID": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82729688596508, -7.270599190343166]),
            {
              "ClassID": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8147656054475, -7.289414861367415]),
            {
              "ClassID": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83433500242016, -7.342622315952766]),
            {
              "ClassID": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83536497068188, -7.3380254424929445]),
            {
              "ClassID": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83725324582836, -7.336408012756374]),
            {
              "ClassID": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83450666379711, -7.310187806305208]),
            {
              "ClassID": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83888402890942, -7.330108493549579]),
            {
              "ClassID": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([110.78069082212231, -7.27383452027268]),
            {
              "ClassID": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([110.78266492795727, -7.270003205971492]),
            {
              "ClassID": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([110.78009000730297, -7.26634214176883]),
            {
              "ClassID": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([110.78626981687329, -7.267278695916325]),
            {
              "ClassID": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79176298093579, -7.267789542810297]),
            {
              "ClassID": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79631200742504, -7.2693220800069005]),
            {
              "ClassID": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8023201556184, -7.266171858986835]),
            {
              "ClassID": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([110.80274930906079, -7.260893060747195]),
            {
              "ClassID": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([110.80867162656567, -7.262510763569065]),
            {
              "ClassID": 2,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([110.81210485410473, -7.26523530253251]),
            {
              "ClassID": 2,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8162247271516, -7.2654907272136215]),
            {
              "ClassID": 2,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82146039914868, -7.2669381309976435]),
            {
              "ClassID": 2,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82566610288403, -7.266597565820841]),
            {
              "ClassID": 2,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82875600766918, -7.267789542810297]),
            {
              "ClassID": 2,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82360616636059, -7.2686409530094425]),
            {
              "ClassID": 2,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([110.81897130918286, -7.269236939188702]),
            {
              "ClassID": 2,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([110.77365270566723, -7.28115649662618]),
            {
              "ClassID": 2,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([110.77948919248364, -7.275792734955255]),
            {
              "ClassID": 2,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([110.78644147825024, -7.270258627941906]),
            {
              "ClassID": 2,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79073301267407, -7.269747783855816]),
            {
              "ClassID": 2,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79957357358715, -7.269151798354371]),
            {
              "ClassID": 2,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([110.80910078000805, -7.265150160939885]),
            {
              "ClassID": 2,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([110.81493726682446, -7.26685298972764]),
            {
              "ClassID": 2,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82695356321118, -7.271961437365465]),
            {
              "ClassID": 2,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83098760556958, -7.256465633796382]),
            {
              "ClassID": 2,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83510747861645, -7.261957339574449]),
            {
              "ClassID": 2,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83871236753247, -7.263489896659951]),
            {
              "ClassID": 2,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8407723040559, -7.2652778733227805]),
            {
              "ClassID": 2,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82437864255688, -7.2834126629248805]),
            {
              "ClassID": 2,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82180372190258, -7.2703011982561865]),
            {
              "ClassID": 2,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([110.78386655759594, -7.272089147811924]),
            {
              "ClassID": 2,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([110.84881707304046, -7.3111325161731875]),
            {
              "ClassID": 2,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([110.84744378202484, -7.31126021544833]),
            {
              "ClassID": 2,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([110.85023327940033, -7.311515613889051]),
            {
              "ClassID": 2,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([110.84171458356903, -7.314857063362652]),
            {
              "ClassID": 2,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83216591947601, -7.312494639891921]),
            {
              "ClassID": 2,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83452626340912, -7.311494330691234]),
            {
              "ClassID": 2,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83624287717865, -7.310728134894353]),
            {
              "ClassID": 2,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83931132429169, -7.310940967192028]),
            {
              "ClassID": 2,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83377524488495, -7.314644232931771]),
            {
              "ClassID": 2,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83111449354217, -7.312835170172339]),
            {
              "ClassID": 2,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([110.85053368681, -7.316453288359212]),
            {
              "ClassID": 2,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([110.85439606779144, -7.3166022690676]),
            {
              "ClassID": 2,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([110.85724993818329, -7.3161766097688545]),
            {
              "ClassID": 2,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([110.84139271848724, -7.318751842323205]),
            {
              "ClassID": 2,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8383242713742, -7.316751249726243]),
            {
              "ClassID": 2,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([110.84531947248504, -7.310749418128696]),
            {
              "ClassID": 2,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([110.85282965772674, -7.311558180281631]),
            {
              "ClassID": 2,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([110.85606976621673, -7.316304307601106]),
            {
              "ClassID": 2,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8453838455014, -7.311813578551939]),
            {
              "ClassID": 2,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([110.84875270002411, -7.30951498886103]),
            {
              "ClassID": 2,
              "system:index": "99"
            })]),
    Sawah = 
    /* color: #fffd21 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([110.88845688418095, -7.313797240143053]),
            {
              "ClassID": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([110.88921863154118, -7.313759994736536]),
            {
              "ClassID": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([110.88652569369023, -7.312839500131188]),
            {
              "ClassID": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([110.88157970026677, -7.3130150859538325]),
            {
              "ClassID": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([110.88550645426457, -7.313759994736536]),
            {
              "ClassID": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8998770769743, -7.301931937877976]),
            {
              "ClassID": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([110.9025056418089, -7.3023256852995235]),
            {
              "ClassID": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([110.90215159021893, -7.301644608459642]),
            {
              "ClassID": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([110.89370799624005, -7.303038686504758]),
            {
              "ClassID": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([110.89169097506085, -7.301016739828901]),
            {
              "ClassID": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([110.87804389559308, -7.301101874610153]),
            {
              "ClassID": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8790738638548, -7.299633297362096]),
            {
              "ClassID": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([110.87800098024884, -7.3038687461768745]),
            {
              "ClassID": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([110.86531949602643, -7.302996119300538]),
            {
              "ClassID": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([110.87064099871198, -7.301293427808716]),
            {
              "ClassID": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([110.87147784792462, -7.305741695671639]),
            {
              "ClassID": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([110.86903167330304, -7.303655910510445]),
            {
              "ClassID": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8699972685484, -7.307274103056384]),
            {
              "ClassID": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([110.88943791948834, -7.305656561773971]),
            {
              "ClassID": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([110.88724923693219, -7.300442079631531]),
            {
              "ClassID": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([110.90299922979086, -7.310997437555818]),
            {
              "ClassID": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([110.91162521398276, -7.312785224625311]),
            {
              "ClassID": 3,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([110.90926487004965, -7.311337968978042]),
            {
              "ClassID": 3,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([110.90956527745932, -7.312976772815339]),
            {
              "ClassID": 3,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([110.90765554464072, -7.317063114621814]),
            {
              "ClassID": 3,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([110.90855676686972, -7.315807419819466]),
            {
              "ClassID": 3,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([110.91181833303183, -7.3173397926625094]),
            {
              "ClassID": 3,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([110.91080982244223, -7.314424023150332]),
            {
              "ClassID": 3,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([110.89613277471274, -7.316807719355032]),
            {
              "ClassID": 3,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8908112720272, -7.314424023150332]),
            {
              "ClassID": 3,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([110.87077570088364, -7.277902493913609]),
            {
              "ClassID": 3,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([110.86498212941147, -7.2778599243202065]),
            {
              "ClassID": 3,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([110.86672020085312, -7.279796836730097]),
            {
              "ClassID": 3,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8732004178331, -7.279137010364896]),
            {
              "ClassID": 3,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([110.87545347340561, -7.277476797797893]),
            {
              "ClassID": 3,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8781356824205, -7.276987246765485]),
            {
              "ClassID": 3,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([110.882727624254, -7.279775552023781]),
            {
              "ClassID": 3,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([110.87360811360337, -7.282244571217479]),
            {
              "ClassID": 3,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([110.87811422474839, -7.27524188656433]),
            {
              "ClassID": 3,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0376688128312, -7.376108980663787]),
            {
              "ClassID": 3,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0321220045884, -7.377417705197497]),
            {
              "ClassID": 3,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([111.03237949665383, -7.376183461025671]),
            {
              "ClassID": 3,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([111.02865659054116, -7.379694663860001]),
            {
              "ClassID": 3,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([111.01992331798867, -7.378354026066024]),
            {
              "ClassID": 3,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([111.02537356670693, -7.37594937984615]),
            {
              "ClassID": 3,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([111.02449380215005, -7.380545860350707]),
            {
              "ClassID": 3,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([111.02314196880654, -7.3816736931778335]),
            {
              "ClassID": 3,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([111.02318488415078, -7.3827164039875806]),
            {
              "ClassID": 3,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([111.02616750057534, -7.382163129170215]),
            {
              "ClassID": 3,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([111.03200398739175, -7.380375621183593]),
            {
              "ClassID": 3,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([111.03736840542153, -7.379588264183498]),
            {
              "ClassID": 3,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04479275997475, -7.3793754647537275]),
            {
              "ClassID": 3,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04706727321938, -7.373672401914281]),
            {
              "ClassID": 3,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([111.02518044765786, -7.384567741611757]),
            {
              "ClassID": 3,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04668103512124, -7.383290957872926]),
            {
              "ClassID": 3,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04466401394204, -7.384142147441829]),
            {
              "ClassID": 3,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0477539187272, -7.384482622810542]),
            {
              "ClassID": 3,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0700578114432, -7.35261014106567]),
            {
              "ClassID": 3,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06495088547885, -7.349886134859445]),
            {
              "ClassID": 3,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06334156006992, -7.34958819566705]),
            {
              "ClassID": 3,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07331937760532, -7.352461172408162]),
            {
              "ClassID": 3,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0741991421622, -7.352567578597194]),
            {
              "ClassID": 3,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07630199402988, -7.353099609159872]),
            {
              "ClassID": 3,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0726327320975, -7.354695697022595]),
            {
              "ClassID": 3,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07181734055698, -7.354674415888843]),
            {
              "ClassID": 3,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07220357865512, -7.352759109673191]),
            {
              "ClassID": 3,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07471412629306, -7.351014045705986]),
            {
              "ClassID": 3,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07842630356967, -7.35148223427272]),
            {
              "ClassID": 3,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07870525330722, -7.353120890369104]),
            {
              "ClassID": 3,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([111.09561657508253, -7.351543082555744]),
            {
              "ClassID": 3,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([111.09733318885206, -7.351096175359434]),
            {
              "ClassID": 3,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([111.09986519416212, -7.351819739166181]),
            {
              "ClassID": 3,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([111.09850263198256, -7.350915284223545]),
            {
              "ClassID": 3,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([111.10059475501417, -7.3534477534206495]),
            {
              "ClassID": 3,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([111.09987592299818, -7.352915723275144]),
            {
              "ClassID": 3,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([111.10163545211195, -7.354245797443483]),
            {
              "ClassID": 3,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([111.09191512664198, -7.3519687080388705]),
            {
              "ClassID": 3,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([111.09033798774122, -7.352543301793972]),
            {
              "ClassID": 3,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([111.12733728387515, -7.369355177095734]),
            {
              "ClassID": 3,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([111.14774353006045, -7.368780605119685]),
            {
              "ClassID": 3,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([111.11276752450625, -7.362247456556683]),
            {
              "ClassID": 3,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([111.13843090036075, -7.366226942878222]),
            {
              "ClassID": 3,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([111.1241400907294, -7.364907544954803]),
            {
              "ClassID": 3,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([111.12422592141787, -7.366163101133642]),
            {
              "ClassID": 3,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([111.12853891351382, -7.358736115438285]),
            {
              "ClassID": 3,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([111.15201868421713, -7.369122930720082]),
            {
              "ClassID": 3,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([111.15489401228109, -7.368229151300175]),
            {
              "ClassID": 3,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([111.1536709249703, -7.362334418074287]),
            {
              "ClassID": 3,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([111.13038778884109, -7.369123631607684]),
            {
              "ClassID": 3,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0577427260092, -7.422344536829684]),
            {
              "ClassID": 3,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([111.056626927059, -7.422865844464317]),
            {
              "ClassID": 3,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05661619822294, -7.424163791400495]),
            {
              "ClassID": 3,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06115449587614, -7.423185012098902]),
            {
              "ClassID": 3,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06349338213712, -7.420961472764001]),
            {
              "ClassID": 3,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06364358584196, -7.421557254740874]),
            {
              "ClassID": 3,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([110.96821633316186, -7.397203596405725]),
            {
              "ClassID": 3,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([110.96890297866968, -7.405034231848829]),
            {
              "ClassID": 3,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([110.95620003677514, -7.402991470789004]),
            {
              "ClassID": 3,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([110.9592899415603, -7.410481548392411]),
            {
              "ClassID": 3,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([110.9486469361892, -7.416609698987116]),
            {
              "ClassID": 3,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([110.93457070327905, -7.411843367005434]),
            {
              "ClassID": 3,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([110.90710488296655, -7.401289162677096]),
            {
              "ClassID": 3,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([110.91053811050561, -7.39243705462014]),
            {
              "ClassID": 3,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([110.9208377931228, -7.384606195725425]),
            {
              "ClassID": 3,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([110.93354073501733, -7.3808609532968825]),
            {
              "ClassID": 3,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([110.95688668228296, -7.379158559890243]),
            {
              "ClassID": 3,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([110.98023262954858, -7.402651009692291]),
            {
              "ClassID": 3,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([110.91225472427514, -7.427844420100735]),
            {
              "ClassID": 3,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([110.90882149673608, -7.454057651770963]),
            {
              "ClassID": 3,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([110.92495766616968, -7.44861087545019]),
            {
              "ClassID": 3,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([110.9647831056228, -7.40162962482512]),
            {
              "ClassID": 3,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([111.03550759292749, -7.38290381673572]),
            {
              "ClassID": 3,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([110.80891457534936, -7.3989059202831475]),
            {
              "ClassID": 3,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79209176040796, -7.468014706756326]),
            {
              "ClassID": 3,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([110.90607491470483, -7.473120835079595]),
            {
              "ClassID": 3,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([111.03756752945093, -7.388691878551376]),
            {
              "ClassID": 3,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06469002700952, -7.385627619972697]),
            {
              "ClassID": 3,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([111.11035195327905, -7.389713293355517]),
            {
              "ClassID": 3,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([111.13314000106958, -7.3726468446732305]),
            {
              "ClassID": 3,
              "system:index": "118"
            })]),
    Hutan_kota = 
    /* color: #0c842e */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([111.03010433401387, -7.417556794243384]),
            {
              "ClassID": 4,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([111.02714317526143, -7.418131302752087]),
            {
              "ClassID": 4,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([111.02712171758931, -7.41885475684429]),
            {
              "ClassID": 4,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([111.02600591863911, -7.420131437634712]),
            {
              "ClassID": 4,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04619758810323, -7.41538642199823]),
            {
              "ClassID": 4,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0458328076772, -7.416322662318448]),
            {
              "ClassID": 4,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04602592672627, -7.419493097702571]),
            {
              "ClassID": 4,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04563968862813, -7.417471681807934]),
            {
              "ClassID": 4,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04619758810323, -7.413747996646851]),
            {
              "ClassID": 4,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([111.01727264608662, -7.406087745311994]),
            {
              "ClassID": 4,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([111.02201479162495, -7.414173562259344]),
            {
              "ClassID": 4,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([111.02237957205098, -7.414194840529158]),
            {
              "ClassID": 4,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([111.02611320699971, -7.421706005507142]),
            {
              "ClassID": 4,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04568260397237, -7.421110223731764]),
            {
              "ClassID": 4,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07351499948713, -7.404945997700332]),
            {
              "ClassID": 4,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07772070322248, -7.405956735551804]),
            {
              "ClassID": 4,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07854682359907, -7.405914178215319]),
            {
              "ClassID": 4,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07704478655073, -7.405126866749253]),
            {
              "ClassID": 4,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07643324289533, -7.40655253783115]),
            {
              "ClassID": 4,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0743196621916, -7.404456586960587]),
            {
              "ClassID": 4,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07414800081465, -7.40472257112567]),
            {
              "ClassID": 4,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07416945848676, -7.405243899623725]),
            {
              "ClassID": 4,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07228118334028, -7.405594998060711]),
            {
              "ClassID": 4,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0727532521269, -7.405946096218061]),
            {
              "ClassID": 4,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07458788309309, -7.405467325934173]),
            {
              "ClassID": 4,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07481318865034, -7.404531062542988]),
            {
              "ClassID": 4,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07657271776411, -7.4056056374029255]),
            {
              "ClassID": 4,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07759195718977, -7.407765418554052]),
            {
              "ClassID": 4,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07796746645185, -7.4066802096433735]),
            {
              "ClassID": 4,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0789116040251, -7.4066589310105675]),
            {
              "ClassID": 4,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07805329714033, -7.4082548256198235]),
            {
              "ClassID": 4,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07345062647077, -7.4064248659819425]),
            {
              "ClassID": 4,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07162672434065, -7.407276010944749]),
            {
              "ClassID": 4,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07141214761945, -7.408488889676534]),
            {
              "ClassID": 4,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07252794656965, -7.404871522188019]),
            {
              "ClassID": 4,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07479173097822, -7.404850243467913]),
            {
              "ClassID": 4,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0726459637663, -7.40402037258248]),
            {
              "ClassID": 4,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07983339945585, -7.4086466914641]),
            {
              "ClassID": 4,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07826698939115, -7.408657330732643]),
            {
              "ClassID": 4,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([111.08078826586515, -7.409380800390735]),
            {
              "ClassID": 4,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([111.08712900797636, -7.407380616673683]),
            {
              "ClassID": 4,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0740612856558, -7.407167830637583]),
            {
              "ClassID": 4,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07333172480375, -7.407401895271642]),
            {
              "ClassID": 4,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05834354082853, -7.419855018380498]),
            {
              "ClassID": 4,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06041420618803, -7.421950895961424]),
            {
              "ClassID": 4,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05406273524076, -7.423302040173548]),
            {
              "ClassID": 4,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0542665831259, -7.42369567983242]),
            {
              "ClassID": 4,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05449188868315, -7.424504235864281]),
            {
              "ClassID": 4,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05453480402738, -7.421110418333862]),
            {
              "ClassID": 4,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05625141779691, -7.419163482977732]),
            {
              "ClassID": 4,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05531371691609, -7.428182892090979]),
            {
              "ClassID": 4,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04497111895466, -7.432863937544526]),
            {
              "ClassID": 4,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04952014544392, -7.435970421987168]),
            {
              "ClassID": 4,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04462779620076, -7.433927804554157]),
            {
              "ClassID": 4,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([111.03037990191365, -7.431289409640879]),
            {
              "ClassID": 4,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([111.03171027758503, -7.434012913803582]),
            {
              "ClassID": 4,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([111.03132403948689, -7.437502378824995]),
            {
              "ClassID": 4,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([111.03441394427205, -7.444949315037106]),
            {
              "ClassID": 4,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([111.02879203417683, -7.429331880593607]),
            {
              "ClassID": 4,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0074631080904, -7.4255444626792695]),
            {
              "ClassID": 4,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([111.00673354723835, -7.423033684502546]),
            {
              "ClassID": 4,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([110.99651969530964, -7.423033684502546]),
            {
              "ClassID": 4,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([111.00166953661824, -7.429927651226955]),
            {
              "ClassID": 4,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([111.00561774828816, -7.433076711152634]),
            {
              "ClassID": 4,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([111.00716270068074, -7.435246996066474]),
            {
              "ClassID": 4,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([111.01055301287556, -7.43639596608953]),
            {
              "ClassID": 4,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([110.98986781695271, -7.445970599286705]),
            {
              "ClassID": 4,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([110.99102653124714, -7.445885492356781]),
            {
              "ClassID": 4,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([110.99102653124714, -7.437757704444791]),
            {
              "ClassID": 4,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([110.99634803393269, -7.4438003674128765]),
            {
              "ClassID": 4,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([110.97313083269978, -7.431544738873545]),
            {
              "ClassID": 4,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([110.97373164751912, -7.426650902747859]),
            {
              "ClassID": 4,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([111.00231326678181, -7.450225924714131]),
            {
              "ClassID": 4,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0140720711031, -7.446821667677325]),
            {
              "ClassID": 4,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([111.00660480120564, -7.456736492622185]),
            {
              "ClassID": 4,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([111.03531516650105, -7.446396133688553]),
            {
              "ClassID": 4,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([111.00081018409153, -7.456140618272705]),
            {
              "ClassID": 4,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([111.00364259681126, -7.4550342525766276]),
            {
              "ClassID": 4,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([110.98643354377171, -7.454225752800051]),
            {
              "ClassID": 4,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([110.9883218189182, -7.4463959935525255]),
            {
              "ClassID": 4,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([110.99145463904759, -7.440864014115723]),
            {
              "ClassID": 4,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([110.97639135321995, -7.4594171464313295]),
            {
              "ClassID": 4,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([110.96750787696263, -7.457757609260571]),
            {
              "ClassID": 4,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([110.96596292457005, -7.462480890826425]),
            {
              "ClassID": 4,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([110.98420194587132, -7.448778978569372]),
            {
              "ClassID": 4,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([110.9938149829807, -7.441076783845844]),
            {
              "ClassID": 4,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([110.99488786658665, -7.441161891708981]),
            {
              "ClassID": 4,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([110.99703363379857, -7.456523590362257]),
            {
              "ClassID": 4,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([111.00574544867894, -7.458778863648833]),
            {
              "ClassID": 4,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([110.9868626972141, -7.458438445784204]),
            {
              "ClassID": 4,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([111.00261262854954, -7.393754260513962]),
            {
              "ClassID": 4,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([110.99205545386693, -7.385285035515669]),
            {
              "ClassID": 4,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([110.97699216803929, -7.38230587255648]),
            {
              "ClassID": 4,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([110.97411683997532, -7.383923134939449]),
            {
              "ClassID": 4,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8399661207772, -7.383684613340173]),
            {
              "ClassID": 4,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8406313086129, -7.383514375381329]),
            {
              "ClassID": 4,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([110.84397870546348, -7.389983371725631]),
            {
              "ClassID": 4,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([110.85833388811119, -7.396069248911406]),
            {
              "ClassID": 4,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([110.85893470293053, -7.390174886621422]),
            {
              "ClassID": 4,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([110.86045819765098, -7.393834933115781]),
            {
              "ClassID": 4,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([110.84854918962486, -7.392260265667398]),
            {
              "ClassID": 4,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([110.84507304674156, -7.3919836343195735]),
            {
              "ClassID": 4,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([110.84000903612144, -7.387195756621848]),
            {
              "ClassID": 4,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83979445940025, -7.388770442124322]),
            {
              "ClassID": 4,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8461244726754, -7.3863871321562575]),
            {
              "ClassID": 4,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([110.84352809434898, -7.385621065508382]),
            {
              "ClassID": 4,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([110.84550220018394, -7.384344284811624]),
            {
              "ClassID": 4,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([110.84363538270958, -7.386365852545076]),
            {
              "ClassID": 4,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([110.85024434572227, -7.385046514651192]),
            {
              "ClassID": 4,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([110.853977980671, -7.383705893080422]),
            {
              "ClassID": 4,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([110.85494357591637, -7.382939821786291]),
            {
              "ClassID": 4,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([110.85382777696617, -7.384769878786942]),
            {
              "ClassID": 4,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([110.85181075578697, -7.386557369008805]),
            {
              "ClassID": 4,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([110.84148961549766, -7.388834280607407]),
            {
              "ClassID": 4,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83717662340172, -7.384684760024657]),
            {
              "ClassID": 4,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([110.84590989595421, -7.395175523950179]),
            {
              "ClassID": 4,
              "system:index": "115"
            })]),
    Kebun_campuran = 
    /* color: #c29114 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([110.79054071537965, -7.3903637624731235]),
            {
              "ClassID": 5,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79118444554322, -7.39087446823759]),
            {
              "ClassID": 5,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79234315983766, -7.389640261629413]),
            {
              "ClassID": 5,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79322292439454, -7.389874335561454]),
            {
              "ClassID": 5,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79360916249269, -7.39021480651393]),
            {
              "ClassID": 5,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79281522862428, -7.391321335297109]),
            {
              "ClassID": 5,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79285814396852, -7.392129950731731]),
            {
              "ClassID": 5,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79433872334474, -7.392257626717655]),
            {
              "ClassID": 5,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79545452229493, -7.3918320399543855]),
            {
              "ClassID": 5,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79607679478639, -7.391938436683646]),
            {
              "ClassID": 5,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79090549580567, -7.3920661127249385]),
            {
              "ClassID": 5,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([110.788802643938, -7.393023681857991]),
            {
              "ClassID": 5,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([110.78910305134767, -7.393725897902501]),
            {
              "ClassID": 5,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79101278416627, -7.392789609594991]),
            {
              "ClassID": 5,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79590513340943, -7.392874726795892]),
            {
              "ClassID": 5,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79618408314698, -7.390299924211048]),
            {
              "ClassID": 5,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([110.77910273547009, -7.398577341716092]),
            {
              "ClassID": 5,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([110.77983229632214, -7.398939084963354]),
            {
              "ClassID": 5,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([110.77857702250317, -7.398832689921415]),
            {
              "ClassID": 5,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([110.77814786906079, -7.398822050415808]),
            {
              "ClassID": 5,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([110.77426403040722, -7.39765170323308]),
            {
              "ClassID": 5,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([110.77820151324109, -7.400205183993072]),
            {
              "ClassID": 5,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([110.77783673281506, -7.398194319131036]),
            {
              "ClassID": 5,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([110.78100173945263, -7.4010988987674535]),
            {
              "ClassID": 5,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([110.78529327387646, -7.399641291596665]),
            {
              "ClassID": 5,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([110.7748004722102, -7.399620012624203]),
            {
              "ClassID": 5,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([110.77639906878308, -7.3984922256148105]),
            {
              "ClassID": 5,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([110.77286928171948, -7.396140886825845]),
            {
              "ClassID": 5,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([110.76971500391797, -7.394608786033124]),
            {
              "ClassID": 5,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([110.76977937693432, -7.396077049398984]),
            {
              "ClassID": 5,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([110.77308385844067, -7.39301284205348]),
            {
              "ClassID": 5,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([110.77913492197827, -7.393034121344481]),
            {
              "ClassID": 5,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([110.7779332923396, -7.394204480770552]),
            {
              "ClassID": 5,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([110.78012197489575, -7.39626856165186]),
            {
              "ClassID": 5,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([110.77651954080679, -7.405316865344148]),
            {
              "ClassID": 5,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([110.7775495090685, -7.40550837358548]),
            {
              "ClassID": 5,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([110.77834344293692, -7.406699978550926]),
            {
              "ClassID": 5,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([110.77918029214956, -7.406997879288927]),
            {
              "ClassID": 5,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([110.77727055933096, -7.406380798965332]),
            {
              "ClassID": 5,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([110.7778713741503, -7.4074447300183826]),
            {
              "ClassID": 5,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([110.77561831857778, -7.40867888682209]),
            {
              "ClassID": 5,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([110.77823615457632, -7.408785279488166]),
            {
              "ClassID": 5,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([110.77993131067373, -7.406104176470874]),
            {
              "ClassID": 5,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([110.77289319421865, -7.404103977883851]),
            {
              "ClassID": 5,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([110.77420211221792, -7.409487470439931]),
            {
              "ClassID": 5,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([110.77587581064321, -7.411232303716811]),
            {
              "ClassID": 5,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([110.77510333444692, -7.412892016761175]),
            {
              "ClassID": 5,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79451052992415, -7.35417152005273]),
            {
              "ClassID": 5,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([110.7959052786119, -7.353447960078335]),
            {
              "ClassID": 5,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79536883680892, -7.352469024118394]),
            {
              "ClassID": 5,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79292266218734, -7.352596711539914]),
            {
              "ClassID": 5,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79852311461043, -7.35404383308412]),
            {
              "ClassID": 5,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79667775480819, -7.355341982220296]),
            {
              "ClassID": 5,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79996077864241, -7.35474611095701]),
            {
              "ClassID": 5,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([110.792321847368, -7.353064898438002]),
            {
              "ClassID": 5,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([110.80335109083724, -7.354618424153663]),
            {
              "ClassID": 5,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79702107756209, -7.35110702267097]),
            {
              "ClassID": 5,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([110.78586308806014, -7.352894648714005]),
            {
              "ClassID": 5,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79571215956283, -7.3477658451805565]),
            {
              "ClassID": 5,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([110.78706471769881, -7.348255318613219]),
            {
              "ClassID": 5,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([110.7862707838304, -7.348468132980963]),
            {
              "ClassID": 5,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([110.78961818068099, -7.348553258699529]),
            {
              "ClassID": 5,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79021899550033, -7.348510695842287]),
            {
              "ClassID": 5,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79427449553084, -7.348319162934252]),
            {
              "ClassID": 5,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([110.797364400316, -7.3477658451805565]),
            {
              "ClassID": 5,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79732148497176, -7.342402883563645]),
            {
              "ClassID": 5,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79616277067733, -7.341636740908426]),
            {
              "ClassID": 5,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79448907225203, -7.343041334767937]),
            {
              "ClassID": 5,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79794375746322, -7.343701066715905]),
            {
              "ClassID": 5,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79897372572493, -7.343786193347557]),
            {
              "ClassID": 5,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([110.7960125669725, -7.344552332298881]),
            {
              "ClassID": 5,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79103438704085, -7.346191013956494]),
            {
              "ClassID": 5,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([110.78875987379622, -7.345552567275815]),
            {
              "ClassID": 5,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79133479445052, -7.346935867258073]),
            {
              "ClassID": 5,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([110.80054013578963, -7.344977964479073]),
            {
              "ClassID": 5,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([110.79878060667586, -7.346595363046536]),
            {
              "ClassID": 5,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([110.80141990034652, -7.346042043146361]),
            {
              "ClassID": 5,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8034154638536, -7.346552800001757]),
            {
              "ClassID": 5,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([110.80508916227889, -7.3469784302661605]),
            {
              "ClassID": 5,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([110.80590455381942, -7.3469784302661605]),
            {
              "ClassID": 5,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([110.80656974165511, -7.350532427057522]),
            {
              "ClassID": 5,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([110.80772845594954, -7.3514900860002665]),
            {
              "ClassID": 5,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([110.78757970182967, -7.344211826261312]),
            {
              "ClassID": 5,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([110.80551831572127, -7.344531050679179]),
            {
              "ClassID": 5,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8072349294908, -7.344509769058459]),
            {
              "ClassID": 5,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([110.80146281569075, -7.340040606137498]),
            {
              "ClassID": 5,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([110.81131188719344, -7.341700586180114]),
            {
              "ClassID": 5,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([110.81433741896224, -7.341743149689483]),
            {
              "ClassID": 5,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([110.81556050627303, -7.34227519321277]),
            {
              "ClassID": 5,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([110.81710545866561, -7.339125486285453]),
            {
              "ClassID": 5,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([110.81824271528792, -7.337827289777496]),
            {
              "ClassID": 5,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([110.81871478407454, -7.341977248918155]),
            {
              "ClassID": 5,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82019536345076, -7.342934926297557]),
            {
              "ClassID": 5,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([110.80030410139632, -7.342381601841046]),
            {
              "ClassID": 5,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([110.80093025579868, -7.335932441749833]),
            {
              "ClassID": 5,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([110.80350517645297, -7.33633680016726]),
            {
              "ClassID": 5,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([110.80479263678012, -7.336060133921346]),
            {
              "ClassID": 5,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([110.81393360510287, -7.333314744160869]),
            {
              "ClassID": 5,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([110.81522106543002, -7.332761407740397]),
            {
              "ClassID": 5,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([110.81050037756381, -7.33146319267005]),
            {
              "ClassID": 5,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8192336501163, -7.333272179845242]),
            {
              "ClassID": 5,
              "system:index": "100"
            })]),
    Lahan_terbuka = 
    /* color: #f0f0f0 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([110.86887344101034, -7.377362316821973]),
            {
              "ClassID": 7,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([110.86433514335714, -7.506257944475076]),
            {
              "ClassID": 7,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8643995163735, -7.507172716600042]),
            {
              "ClassID": 7,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([111.12244948127828, -7.329458348626575]),
            {
              "ClassID": 7,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([111.11740692833028, -7.331267343945718]),
            {
              "ClassID": 7,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([111.13231890489072, -7.489802112608821]),
            {
              "ClassID": 7,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([111.10646240998716, -7.488078866851108]),
            {
              "ClassID": 7,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8778858496027, -7.400916686004114]),
            {
              "ClassID": 7,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([110.86507561934758, -7.4071300840764716]),
            {
              "ClassID": 7,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([110.86372378600407, -7.4096409529704]),
            {
              "ClassID": 7,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([110.87760689986516, -7.400086807716576]),
            {
              "ClassID": 7,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([110.86582663787175, -7.4074067059270705]),
            {
              "ClassID": 7,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([110.92587203319309, -7.335485410377974]),
            {
              "ClassID": 7,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([110.92527121837375, -7.333527457194384]),
            {
              "ClassID": 7,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([110.92533559139011, -7.333740278609753]),
            {
              "ClassID": 7,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([110.92494935329196, -7.3357195128995505]),
            {
              "ClassID": 7,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([110.91917805359365, -7.479541484827443]),
            {
              "ClassID": 7,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([110.95823101685049, -7.490391649592836]),
            {
              "ClassID": 7,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([110.96050553009512, -7.49379556719951]),
            {
              "ClassID": 7,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([110.95896057770254, -7.492434003348295]),
            {
              "ClassID": 7,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([110.94546563055783, -7.5104641839202495]),
            {
              "ClassID": 7,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([110.94426400091916, -7.508400641093836]),
            {
              "ClassID": 7,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([110.94593769934446, -7.51057055184165]),
            {
              "ClassID": 7,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83819872763425, -7.510039660814818]),
            {
              "ClassID": 7,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([110.86195413535154, -7.513468481727628]),
            {
              "ClassID": 7,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([110.85980836813962, -7.509894529143404]),
            {
              "ClassID": 7,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([110.86062375968015, -7.509426509366517]),
            {
              "ClassID": 7,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([110.99537087425395, -7.355056184233623]),
            {
              "ClassID": 7,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([110.99578929886027, -7.3556307739927504]),
            {
              "ClassID": 7,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([110.99627209648295, -7.355503087443886]),
            {
              "ClassID": 7,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([110.99629355415507, -7.355971271276784]),
            {
              "ClassID": 7,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([111.09700795664973, -7.340954438614197]),
            {
              "ClassID": 7,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([111.09597798838801, -7.340741620649196]),
            {
              "ClassID": 7,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([111.10138532176204, -7.340145729805487]),
            {
              "ClassID": 7,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([111.10155698313899, -7.3404011116934065]),
            {
              "ClassID": 7,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([111.10344525828548, -7.340826747847421]),
            {
              "ClassID": 7,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([111.10387441172786, -7.34055008439364]),
            {
              "ClassID": 7,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([110.85450537202783, -7.325295923524304]),
            {
              "ClassID": 7,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([110.85394747255273, -7.325679009077954]),
            {
              "ClassID": 7,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([111.10627440548495, -7.48693414392237]),
            {
              "ClassID": 7,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([111.11063031292514, -7.488231900941902]),
            {
              "ClassID": 7,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([111.13876132107333, -7.503740861878663]),
            {
              "ClassID": 7,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([111.13824633694247, -7.503634492286416]),
            {
              "ClassID": 7,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([111.13873986340121, -7.503825957533736]),
            {
              "ClassID": 7,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([111.09784228549543, -7.527928297929887]),
            {
              "ClassID": 7,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([111.09833581195417, -7.527970843389825]),
            {
              "ClassID": 7,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([111.09649045215193, -7.527098660626617]),
            {
              "ClassID": 7,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([110.87757150847938, -7.402028344305007]),
            {
              "ClassID": 7,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82065167027991, -7.40800375338837]),
            {
              "ClassID": 7,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([110.89177858117574, -7.373954627606348]),
            {
              "ClassID": 7,
              "system:index": "49"
            })]),
    Perkebunan = 
    /* color: #00e200 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([111.04641030305207, -7.488507295426042]),
            {
              "ClassID": 6,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0475690173465, -7.487826505770263]),
            {
              "ClassID": 6,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04683945649445, -7.489273182517789]),
            {
              "ClassID": 6,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04658196442902, -7.490379461496451]),
            {
              "ClassID": 6,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04658196442902, -7.49118789435866]),
            {
              "ClassID": 6,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04765484803498, -7.491230443415119]),
            {
              "ClassID": 6,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0475690173465, -7.489826322358152]),
            {
              "ClassID": 6,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0477835940677, -7.488209450082466]),
            {
              "ClassID": 6,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04919980042756, -7.4861245269794985]),
            {
              "ClassID": 6,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04482243531525, -7.492592011027937]),
            {
              "ClassID": 6,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04413578980744, -7.493442988625007]),
            {
              "ClassID": 6,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04417870515168, -7.499314688723903]),
            {
              "ClassID": 6,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04417870515168, -7.500250749536641]),
            {
              "ClassID": 6,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0443074511844, -7.5013570006286185]),
            {
              "ClassID": 6,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04379246705354, -7.502122865121698]),
            {
              "ClassID": 6,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04220459931672, -7.502420700949387]),
            {
              "ClassID": 6,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0415179538089, -7.502888728266641]),
            {
              "ClassID": 6,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04289124482453, -7.503016371993041]),
            {
              "ClassID": 6,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04301999085725, -7.5034418508106]),
            {
              "ClassID": 6,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04469368928254, -7.5020803171296695]),
            {
              "ClassID": 6,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04306290620148, -7.500718779188004]),
            {
              "ClassID": 6,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05173180573762, -7.484720389475667]),
            {
              "ClassID": 6,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05276177399934, -7.4849756875399285]),
            {
              "ClassID": 6,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05374882691682, -7.485401183981578]),
            {
              "ClassID": 6,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05211804383576, -7.486379824221674]),
            {
              "ClassID": 6,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05130265229523, -7.4902943632131835]),
            {
              "ClassID": 6,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05147431367219, -7.491996325720919]),
            {
              "ClassID": 6,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0527188586551, -7.491655933751222]),
            {
              "ClassID": 6,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05233262055695, -7.493315342091424]),
            {
              "ClassID": 6,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06846878999055, -7.487401011695493]),
            {
              "ClassID": 6,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06937001221955, -7.486039427865547]),
            {
              "ClassID": 6,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07134411805451, -7.486464923269178]),
            {
              "ClassID": 6,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0712153720218, -7.488166900731056]),
            {
              "ClassID": 6,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07091496461213, -7.489485928693321]),
            {
              "ClassID": 6,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0706574725467, -7.4902943632131835]),
            {
              "ClassID": 6,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06868336671174, -7.490124166596779]),
            {
              "ClassID": 6,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06761048310578, -7.49020926491329]),
            {
              "ClassID": 6,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06945584290803, -7.488124351375497]),
            {
              "ClassID": 6,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07482026093781, -7.498208432440674]),
            {
              "ClassID": 6,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07554982178986, -7.49859136762611]),
            {
              "ClassID": 6,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07627938264191, -7.499612526473613]),
            {
              "ClassID": 6,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07567856782258, -7.500718779188004]),
            {
              "ClassID": 6,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07482026093781, -7.501569740900811]),
            {
              "ClassID": 6,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07396195405305, -7.501569740900811]),
            {
              "ClassID": 6,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07409070008576, -7.4994848817486846]),
            {
              "ClassID": 6,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06151650422395, -7.494549257015767]),
            {
              "ClassID": 6,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0616881656009, -7.495527876711389]),
            {
              "ClassID": 6,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06233189576447, -7.496463945666716]),
            {
              "ClassID": 6,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06473515504182, -7.4877414069885395]),
            {
              "ClassID": 6,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04332039826691, -7.508547564153796]),
            {
              "ClassID": 6,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04495118134797, -7.507526426281263]),
            {
              "ClassID": 6,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04559491151154, -7.5054841433414]),
            {
              "ClassID": 6,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05168889039338, -7.508973037559426]),
            {
              "ClassID": 6,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05331967347443, -7.509228321402905]),
            {
              "ClassID": 6,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04735444062531, -7.505611786306158]),
            {
              "ClassID": 6,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04932854646027, -7.503782233564997]),
            {
              "ClassID": 6,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04653904908479, -7.5002932977075565]),
            {
              "ClassID": 6,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04628155701936, -7.497910593730207]),
            {
              "ClassID": 6,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05971405976594, -7.497527657945911]),
            {
              "ClassID": 6,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05688164704621, -7.505739429233436]),
            {
              "ClassID": 6,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05640957825959, -7.507228593949996]),
            {
              "ClassID": 6,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05156014436066, -7.509909077585827]),
            {
              "ClassID": 6,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04859898560822, -7.505441595678165]),
            {
              "ClassID": 6,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05027268403352, -7.510760021315015]),
            {
              "ClassID": 6,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05177472108186, -7.510887662730677]),
            {
              "ClassID": 6,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06074402802766, -7.495357682139686]),
            {
              "ClassID": 6,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06889794343293, -7.511270586752748]),
            {
              "ClassID": 6,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06851170533479, -7.512632091653807]),
            {
              "ClassID": 6,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06726716035188, -7.513397936285734]),
            {
              "ClassID": 6,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05379174226105, -7.506718023764574]),
            {
              "ClassID": 6,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05623791688264, -7.522587966521323]),
            {
              "ClassID": 6,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05400631898225, -7.521311585067673]),
            {
              "ClassID": 6,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05194638245881, -7.521183946715814]),
            {
              "ClassID": 6,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05460713380158, -7.523821798357389]),
            {
              "ClassID": 6,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0567529010135, -7.52463016903693]),
            {
              "ClassID": 6,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05353425019563, -7.532586157953494]),
            {
              "ClassID": 6,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05267594331086, -7.533649781768525]),
            {
              "ClassID": 6,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05241845124543, -7.53165016683653]),
            {
              "ClassID": 6,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05752537720979, -7.525353446789042]),
            {
              "ClassID": 6,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07117245667756, -7.52773600026468]),
            {
              "ClassID": 6,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07018540376008, -7.523991981783539]),
            {
              "ClassID": 6,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07130120271027, -7.525353446789042]),
            {
              "ClassID": 6,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06932709687531, -7.526119268976596]),
            {
              "ClassID": 6,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07224534028352, -7.526629816350343]),
            {
              "ClassID": 6,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0717732714969, -7.528331636588114]),
            {
              "ClassID": 6,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07027123444855, -7.529565452083381]),
            {
              "ClassID": 6,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0710007953006, -7.5315225315275836]),
            {
              "ClassID": 6,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07233117097199, -7.529267634871555]),
            {
              "ClassID": 6,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07276032441438, -7.530799264066806]),
            {
              "ClassID": 6,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0682971286136, -7.532203252740918]),
            {
              "ClassID": 6,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06941292756379, -7.528501818244501]),
            {
              "ClassID": 6,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07014248841584, -7.5330116077928295]),
            {
              "ClassID": 6,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06894085877717, -7.53416032027224]),
            {
              "ClassID": 6,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06692383759797, -7.532203252740918]),
            {
              "ClassID": 6,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0660655307132, -7.531777802107895]),
            {
              "ClassID": 6,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07228825562775, -7.533990140837853]),
            {
              "ClassID": 6,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07529232972443, -7.5330116077928295]),
            {
              "ClassID": 6,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([111.08228753083527, -7.531990527476618]),
            {
              "ClassID": 6,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([111.08233044617951, -7.53381996133661]),
            {
              "ClassID": 6,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([111.08005593293488, -7.532160707696424]),
            {
              "ClassID": 6,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05040143006623, -7.519099181655119]),
            {
              "ClassID": 6,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0525042819339, -7.5224603285449225]),
            {
              "ClassID": 6,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05357716553986, -7.533947595968811]),
            {
              "ClassID": 6,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06634858382512, -7.514829186042375]),
            {
              "ClassID": 6,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0696959806757, -7.5135527817778245]),
            {
              "ClassID": 6,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07055428756047, -7.514744092541428]),
            {
              "ClassID": 6,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06351617110539, -7.518318005225072]),
            {
              "ClassID": 6,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06488946212102, -7.491683139970174]),
            {
              "ClassID": 6,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06652024520207, -7.492619217188443]),
            {
              "ClassID": 6,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05055573714543, -7.487087822642479]),
            {
              "ClassID": 6,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04712250960637, -7.501384206241421]),
            {
              "ClassID": 6,
              "system:index": "110"
            })]),
    Lahan_terbangun = 
    /* color: #ff0006 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([111.08060587565214, -7.408284956180884]),
            {
              "ClassID": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([111.08088482538969, -7.407923220600693]),
            {
              "ClassID": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0799514166525, -7.407667877659442]),
            {
              "ClassID": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07867468516142, -7.4104553634254975]),
            {
              "ClassID": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0789429060629, -7.4102106611827026]),
            {
              "ClassID": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([111.079500805538, -7.410827736142851]),
            {
              "ClassID": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07947934786588, -7.411019241989214]),
            {
              "ClassID": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07888926188261, -7.411040520411453]),
            {
              "ClassID": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07495177904875, -7.40707207688782]),
            {
              "ClassID": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07549894968778, -7.410625590992503]),
            {
              "ClassID": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07161511103422, -7.410423445749372]),
            {
              "ClassID": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07158292452604, -7.410806457710345]),
            {
              "ClassID": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06847156206877, -7.409971278422369]),
            {
              "ClassID": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06880415598661, -7.411652274611066]),
            {
              "ClassID": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06790293375761, -7.413386460158378]),
            {
              "ClassID": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06792439142973, -7.413801386976245]),
            {
              "ClassID": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06986631075651, -7.415109999763696]),
            {
              "ClassID": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0734497420004, -7.413769469542605]),
            {
              "ClassID": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06433023134977, -7.413982252389881]),
            {
              "ClassID": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06299985567838, -7.412545966175362]),
            {
              "ClassID": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06657255808622, -7.415865376106107]),
            {
              "ClassID": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06769908587248, -7.4164398868226495]),
            {
              "ClassID": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06522072474272, -7.418706005113957]),
            {
              "ClassID": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0645340792349, -7.418876229490931]),
            {
              "ClassID": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06392253557951, -7.41901453674872]),
            {
              "ClassID": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0715400091818, -7.4170675921186895]),
            {
              "ClassID": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07269872347624, -7.4185145026111465]),
            {
              "ClassID": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07502688090116, -7.416844171692206]),
            {
              "ClassID": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07572425524504, -7.417195260882898]),
            {
              "ClassID": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06260288874418, -7.419067731836304]),
            {
              "ClassID": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06633652369291, -7.418408112295806]),
            {
              "ClassID": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06711972872526, -7.418227248700683]),
            {
              "ClassID": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06853593508512, -7.418961341654711]),
            {
              "ClassID": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([111.07044566790373, -7.420057159292933]),
            {
              "ClassID": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06935132662565, -7.4184613074566945]),
            {
              "ClassID": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05249632517607, -7.4225360376652345]),
            {
              "ClassID": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05338681856901, -7.422365814704422]),
            {
              "ClassID": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05386961619169, -7.420599747598651]),
            {
              "ClassID": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05408419291288, -7.424142513612764]),
            {
              "ClassID": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06236685435087, -7.424610624705142]),
            {
              "ClassID": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06250632921964, -7.42584473337782]),
            {
              "ClassID": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06358994166166, -7.423344595829339]),
            {
              "ClassID": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([111.06391180674345, -7.423078622913114]),
            {
              "ClassID": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([111.054105650585, -7.425578761973988]),
            {
              "ClassID": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0529898516348, -7.419886935372841]),
            {
              "ClassID": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05558622996122, -7.420769971242927]),
            {
              "ClassID": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0561226717642, -7.4204082459201]),
            {
              "ClassID": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05082262675077, -7.418940063615308]),
            {
              "ClassID": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0517453066519, -7.418886868512304]),
            {
              "ClassID": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0525928847006, -7.418812395357278]),
            {
              "ClassID": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05262507120878, -7.418131497355521]),
            {
              "ClassID": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0527001730612, -7.417322929610084]),
            {
              "ClassID": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05271090189726, -7.4167590591189345]),
            {
              "ClassID": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05473865191252, -7.417046313987713]),
            {
              "ClassID": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05478156725675, -7.417705935569415]),
            {
              "ClassID": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05464209238798, -7.419663516377784]),
            {
              "ClassID": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05589736620695, -7.418184692549858]),
            {
              "ClassID": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([111.01780570605183, -7.430651085909925]),
            {
              "ClassID": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([111.02029479601765, -7.429757431128426]),
            {
              "ClassID": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([111.01935065844441, -7.42835311279945]),
            {
              "ClassID": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([111.03205360033894, -7.423544352411796]),
            {
              "ClassID": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([111.03724635699177, -7.42235279303445]),
            {
              "ClassID": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([111.0426536903658, -7.432608609078731]),
            {
              "ClassID": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([111.04325450518513, -7.4341405776468]),
            {
              "ClassID": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05055011370564, -7.431672403434218]),
            {
              "ClassID": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([111.05175174334431, -7.431204299863674]),
            {
              "ClassID": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83260813497988, -7.391966262967242]),
            {
              "ClassID": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83299437307802, -7.398562809691667]),
            {
              "ClassID": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82840243124453, -7.398945831956847]),
            {
              "ClassID": 1,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82694330954043, -7.39630722738643]),
            {
              "ClassID": 1,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82642832540957, -7.39817978709399]),
            {
              "ClassID": 1,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82406798147646, -7.403159054924968]),
            {
              "ClassID": 1,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82387486242739, -7.403563351982257]),
            {
              "ClassID": 1,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8235529973456, -7.404063403092949]),
            {
              "ClassID": 1,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82324186109987, -7.403765500371884]),
            {
              "ClassID": 1,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8227054192969, -7.403744221598398]),
            {
              "ClassID": 1,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82276979231325, -7.402871791001114]),
            {
              "ClassID": 1,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8230487420508, -7.402552608644022]),
            {
              "ClassID": 1,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82374611639467, -7.401126924628731]),
            {
              "ClassID": 1,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82426110052553, -7.4004353598271315]),
            {
              "ClassID": 1,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82589188360659, -7.399435248811819]),
            {
              "ClassID": 1,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82625666403261, -7.398658565289128]),
            {
              "ClassID": 1,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8276943280646, -7.398658565289128]),
            {
              "ClassID": 1,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82883158468691, -7.3995097252421544]),
            {
              "ClassID": 1,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82961478971926, -7.398498972615135]),
            {
              "ClassID": 1,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83006540083376, -7.398881994935735]),
            {
              "ClassID": 1,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82937875532595, -7.399658678065106]),
            {
              "ClassID": 1,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82887450003115, -7.400148094129301]),
            {
              "ClassID": 1,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82558074736086, -7.401243958564809]),
            {
              "ClassID": 1,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82505503439394, -7.401541862989224]),
            {
              "ClassID": 1,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82423964285341, -7.403893172991269]),
            {
              "ClassID": 1,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82128921293703, -7.4048187983761595]),
            {
              "ClassID": 1,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82313457273928, -7.405212454560063]),
            {
              "ClassID": 1,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83456078314272, -7.3996693175505355]),
            {
              "ClassID": 1,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8281449391791, -7.404520896165511]),
            {
              "ClassID": 1,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82097599976838, -7.407805066240097]),
            {
              "ClassID": 1,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([110.81994603150666, -7.396059134743308]),
            {
              "ClassID": 1,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([110.82067559235871, -7.397165648880122]),
            {
              "ClassID": 1,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83024571412385, -7.385547112152324]),
            {
              "ClassID": 1,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([110.83294938081086, -7.394952617832593]),
            {
              "ClassID": 1,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8313185977298, -7.395590993311899]),
            {
              "ClassID": 1,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([110.8245808886844, -7.396569833920402]),
            {
              "ClassID": 1,
              "system:index": "101"
            })]);
			



//////////////////////////////////////////////////////////////////////////////////
// CODE: Sentinel-1 Data Processing and Model Input Variable Derivation
//
//
//
// AUTHOR: Evan R. DeLancey, GIS Land-use Analyst, Alberta Biodiversity
//
//
//Monitoring Institute (Edmonton, AB, Canada)
//
//
//email: edelance@ualberta.ca
//
//
//
// INPUTS/ARGUMENTS: - Geometry of area of interest
//
//
//
// NOTES/COMMENTS: The angle-based masking, wind filtering, angle correction
//
//
//and speckle filtering included here are all later additions //
//
//to the original S-1 data processing codes
//
//
//
// LAST UPDATED: 2017-08-24
//
//////////////////////////////////////////////////////////////////////////////////

// Display map
Map.centerObject(geometry, 9);


/// Sentinel-1
/// 


var collection_VV = ee.ImageCollection('COPERNICUS/S1_GRD').
filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VV')).
filter(ee.Filter.eq('orbitProperties_pass', 'DESCENDING')).
select('VV').
filterBounds(geometry);

var collection_VH = ee.ImageCollection('COPERNICUS/S1_GRD').
filter(ee.Filter.eq('instrumentMode', 'IW')).
filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VH')).
filter(ee.Filter.eq('orbitProperties_pass', 'DESCENDING')).
select('VH').
filterBounds(geometry);
//print(collection_VH)

var basah_VV = collection_VV.filterDate('2016-03-15', '2016-10-10').median();
var basah_VH = collection_VH.filterDate('2016-03-15', '2016-10-10').median();

///////////////////////////////////////////////////////////////
// Sentinel-2 functions
///////////////////////////////////////////////////////////////

//mask clouds
function maskCloud(image) {
  var QA60 = image.select(['QA60']);
  var B1 = image.select(['B1']).gt(2000);
  var mask1 = image.updateMask(QA60.lt(1));
  return mask1.updateMask(B1.lt(1));
}

//add indices
function addIndices(image) {
 var a = image.addBands(image.normalizedDifference(['B8', 'B4']).rename('NDVI'));
 var b = a.addBands(a.normalizedDifference(['B3', 'B8']).rename('NDWI'));
 var c = b.addBands(b.expression(
      '(B8 / B2) - (B8 / B3)', {
        'B8': image.select(['B8']),
        'B2': image.select(['B2']),
        'B3': image.select(['B3'])
      }
    ).rename('ARI'));
  var d = c.addBands(c.expression(
      '(B4 - B2) / B5', {
        'B4': image.select(['B4']),
        'B2': image.select(['B2']),
        'B5': image.select(['B5'])
      }
    ).rename('PSRI'));
  return d.addBands(d.expression(
      '705 + 35*((((RED + RE3)/2) - RE1) / (RE2 - RE1))', {
        'RE1': image.select(['B5']),
        'RE2': image.select(['B6']),
        'RE3': image.select(['B7']),
        'RED' : image.select(['B4'])
      }
    ).rename('REIP'));
}

///////////////////////////////////////////////////////////////
//END
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
//Get Sentinel-2 image stack
///////////////////////////////////////////////////////////////
var S2 = ee.ImageCollection('COPERNICUS/S2')
  .filterDate('2016-03-15', '2016-10-10')
  .filterBounds(geometry);

//print(S2);
///////////////////////////////////////////////////////////////
//Map functions over image stack
///////////////////////////////////////////////////////////////
var S2 = S2.map(maskCloud);
var S2 = S2.map(addIndices);
///////////////////////////////////////////////////////////////
//END
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
//Get median value of each index and band and add to map
///////////////////////////////////////////////////////////////
var B2 = S2.select(['B2']).median();
var B3 = S2.select(['B3']).median();
var B4 = S2.select(['B4']).median();
var B5 = S2.select(['B5']).median();
var B8 = S2.select(['B8']).median();
var NDVI = S2.select(['NDVI']).median();
var NDWI = S2.select(['NDWI']).median();
var ARI = S2.select(['ARI']).median();
var PSRI = S2.select(['PSRI']).median();
var REIP = S2.select(['REIP']).median();
var VV = basah_VV.select(['VV']);
var VH = basah_VH.select(['VH']);


///////////////////////////////////////////////////////////////
//Clip to Sragen
///////////////////////////////////////////////////////////////
var B2 = B2.clip(geometry);
var B3 = B3.clip(geometry);
var B4 = B4.clip(geometry);
var B5 = B5.clip(geometry);
var B8 = B8.clip(geometry);
var NDVI = NDVI.clip(geometry);
var NDWI = NDWI.clip(geometry);
var ARI = ARI.clip(geometry);
var PSRI = PSRI.clip(geometry);
var REIP = REIP.clip(geometry);
var VV = VV.clip(geometry);
var VH = VH.clip(geometry);

///////////////////////////////////////////////////////////////


/* 
COMPOSITE

*/

var Composite = B4.addBands(B5).addBands(B8).addBands(NDVI).addBands(NDWI).addBands(ARI).addBands(PSRI)
              .addBands(REIP).addBands(VV).addBands(VH);

var CompositeRGB = B2.addBands(B3).addBands(B4).addBands(B5);


//var bandsComposite = ['B4', 'B5', 'B8', 'NDVI', 'NDWI', 'ARI', 'PSRI', 'REIP', 'NPOL','vis-red','vis-green','vis-blue'];
var bandsComposite = ['B4', 'B5', 'B8', 'NDVI', 'NDWI', 'ARI', 'PSRI','REIP','VV','VH'];
                  
/*******************************
  DEFINE REGIONS OF INTEREST
********************************/
var seed = 2020;

// Merge regions of interest

var sragen = Lahan_terbangun.merge(Badan_air).merge(Sawah).merge(Hutan_kota)
              .merge(Kebun_campuran).merge(Perkebunan).merge(Lahan_terbuka);                       


/*****************************
TRAINING
*/

// Initialise random column and values for ROI feature collection 
sragen = sragen.randomColumn('random1', seed);


var train = sragen.filter(ee.Filter.lte('random1', 0.7));
var test  = sragen.filter(ee.Filter.gt('random1', 0.7));

// Initialise random column and values for ROI feature collection 
train = train.randomColumn('random', seed);
test  = test.randomColumn('random', seed);

// Create training ROIs from the image dataset
var roiTrainCombined = Composite.select(bandsComposite).sampleRegions({
	collection: train,
	properties: ['ClassID', 'random'],
	scale: 100
});


// Create testing ROIs from the image dataset
var roiTestCombined = Composite.select(bandsComposite).sampleRegions({
	collection: test,
	properties: ['ClassID', 'random'],
	scale: 100
});

// Partition the regions of interest into training and testing areas
var trainingCombined = roiTrainCombined.filter(ee.Filter.lte('random', 0.7));
var testingCombined = roiTestCombined.filter(ee.Filter.lte('random', 0.7));



/*******************************
  EXECUTE CLASSIFICATION
********************************/
var classifierCombined = ee.Classifier.smileRandomForest(100).train({
  features: trainingCombined.select(
                    ['B2','B3','B4', 'B5', 'B8', 'NDVI', 'NDWI', 'ARI','PSRI','REIP'
                    ,'VV','VH','ClassID']),
  classProperty: 'ClassID', 
  inputProperties: bandsComposite
});

// Classify the validation data
var validationCombined = testingCombined.classify(classifierCombined);

// Calculate accuracy metrics
var emC = validationCombined.errorMatrix('ClassID', 'classification'); // Error matrix
var oaC = emC.accuracy(); // Overall accuracy
var ksC = emC.kappa(); // Kappa statistic
var uaC = emC.consumersAccuracy().project([1]); // Consumer's accuracy
var paC = emC.producersAccuracy().project([0]); // Producer's accuracy
var f1C = (uaC.multiply(paC).multiply(2.0)).divide(uaC.add(paC)); // F1-statistic

print('Error Matrix, Combined: ', emC);
print('Overall Accuracy, Combined: ', oaC);
print('Kappa Statistic, Combined: ', ksC);
print('User\'s Accuracy (rows), Combined:', uaC);
print('Producer\'s Accuracy (cols), Combined:', paC);
print('F1 Score, Combined: ', f1C);

// Classify the image Random Forest algorithm
var classifiedCombined = Composite.select(bandsComposite).classify(classifierCombined);

/*******************************
  FILTER CLASSIFICATION
********************************/


// Perform a mode filter on the classified image
var filteredCombined = classifiedCombined.reduceNeighborhood({
  reducer: ee.Reducer.mode(),
  kernel: ee.Kernel.square(1),
});


/*******************************
  DISPLAY CLASSIFICATION 
********************************/

// Create a palette for displaying the classified images
var palette = ['000000','ff0006', '1911e8','fffd21','0c842e','c29114','00e200','f0f0f0'];

// Display classified image

//Map.addLayer(filteredCombined,  {min: 0, max: 1, palette: palette}, '2010 Mode, Combined', false);



// Define classification legend


var colors = ['000000','ff0006', '1911e8','fffd21','0c842e','c29114','00e200','f0f0f0'];
var names = ["Tidak ada data","Lahan terbangun","Badan air","Sawah"
              ,"Hutan kota","Kebun campuran","Perkebunan",
             "Lahan terbuka"
             ];
             
var legend = ui.Panel({style: {position: 'bottom-right'}});
legend.add(ui.Label({
  value: "Penutupan Lahan",
  style: {
    fontWeight: 'bold',
    fontSize: '16px',
    margin: '0 0 4px 0',
    padding: '0px'
  }
}));

// Iterate classification legend entries
var entry;
for (var x = 0; x<8; x++){
  entry = [
    ui.Label({style:{color:colors[x],margin: '0 0 4px 0'}, value:  '██'}),
    ui.Label({
      value: names[x],
      style: {
        margin: '0 0 4px 4px'
      }
    })
  ];
  legend.add(ui.Panel(entry, ui.Panel.Layout.Flow('horizontal')));
}

// Display classification legend
Map.add(legend);



/*******************************
  EXPORT CLASSIFIED IMAGES
********************************/
/*
// Classified images for Combined Sentinel-2+SAR
*/

Export.image.toDrive({
  image: classifiedCombined, 
  description: 'Classification_Sentinel_2021', 
  folder: 'GEE_SRAGEN',
  region: geometry,
  scale: 10,
  maxPixels: 10E10,
});



var colorbrewer = require('users/gena/packages:colorbrewer');


Map.addLayer(CompositeRGB, {bands: ['B4', 'B3', 'B2'], min:0, max:3000}, 'Sentinel-2 False Color', true);


Map.addLayer(NDVI, {min:-0.5, max:0.9, palette: colorbrewer.Palettes.RdYlGn[11]}, 'NDVI', false);
Map.addLayer(ARI, {min:-1, max:0.3, palette: colorbrewer.Palettes.PRGn[11]}, 'ARI', false);
Map.addLayer(PSRI, {min:-1, max:1, palette: colorbrewer.Palettes.PRGn[11]}, 'PSRI',false);
Map.addLayer(REIP, {min:715, max:730, palette: colorbrewer.Palettes.PRGn[11]}, 'REIP',false);
Map.addLayer(VV, {min:-30,max:0}, 'Musim hujan (median VH)');

Map.addLayer(classifiedCombined, {min: 0, max: 7, palette: palette}, '2021 Classification, Combined', false);
Map.addLayer(geometry, {}, "Area of Interest", false);


///////////////////////////////////////////////////////////////
//Export Sentinel-2 indices to drive
///////////////////////////////////////////////////////////////

/*
Export.image.toDrive({
  image: filteredCombined, 
  description: 'Classification_Sentinel_2020_Filtered', 
  folder: 'GEE_SRAGEN',
  region: geometry,
  scale: 10,
  maxPixels: 10E10,
});
*/

//var imageRGB = S2.visualize({bands: ['B4', 'B3', 'B2'], max: 0.5});

Export.image.toDrive({
  image: CompositeRGB,
  description: 'RGB432_Sragen',
  folder: 'GEE_SRAGEN',
  scale: 10,
  region: geometry,
  maxPixels: 10E10
});

/*
Export.image.toDrive({
  image: B2,
  description: 'B2',
  scale: 30,
  region: geometry,
  maxPixels: 10E10
});


Export.image.toDrive({
  image: B3,
  description: 'B3',
  scale: 30,
  region: geometry,
  maxPixels: 10E10
});
Export.image.toDrive({
  image: B4,
  description: 'B4',
  scale: 30,
  region: geometry,
  maxPixels: 10E10
});
Export.image.toDrive({
  image: B8,
  description: 'B8',
  scale: 30,
  region: geometry,
  maxPixels: 10E10
});
Export.image.toDrive({
  image: NDWI,
  description: 'NDWI',
  scale: 30,
  region: geometry,
  maxPixels: 10E10
});
Export.image.toDrive({
  image: NDVI,
  description: 'NDVI',
  scale: 30,
  region: geometry,
  maxPixels: 10E10
});
Export.image.toDrive({
  image: ARI,
  description: 'ARI',
  scale: 30,
  region: geometry,
  maxPixels: 10E10
});
Export.image.toDrive({
  image: PSRI,
  description: 'PSRI',
  scale: 30,
  region: geometry,
  maxPixels: 10E10
});
Export.image.toDrive({
  image: REIP,
  description: 'REIP',
  scale: 30,
  region: geometry,
  maxPixels: 10E10
});
*/
///////////////////////////////////////////////////////////////
//END
///////////////////////////////////////////////////////////////


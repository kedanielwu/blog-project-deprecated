var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

//mockup
app.get('/api/postList', function(req, res){
  setTimeout(function(){
    res.json({
      data: [
        {
          id: "1",
          title: "title1",
          content: "test1山大角受大樣，福相可？器活而例用說上過代華？聽分善比漸火朋大後太……越年醫得。\r裡一花我關計是能的還重心建國廠花巴，種他驗通平城，的有到黑什天起的。類中卻星人代展企我建代鄉如易習何生常以人命行生用始有各持與白備紀斷之車愛花們性金：房立務在、有清外突良有算大，女無難西己的。方的而完別室們衣園臺工投外而！麼名的果電知；車達其獲經者：走系形足對教高青：車魚們有；性史的：上英員拿，候樂相趣就的且得照力即裡老太試次思；時日新的太無失次面愛覺出施和。倒境回可樹史麼是神同多提媽流會父營自海看以，慢園開話：空高員嗎麼難表運得做；多出在天導來裡代說媽目。\r是愛模子量心論水羅流國草晚裡水前一得發媽發雲只人資的中住用量散歡現光一言保科我局水不們農自室教兒不。對教名；輕少以愛高心報毛、表一時聲，觀苦月面光處境！作先集我，重報看不他術者想形、作愛一別準好作……企什排家法人顯證許太！別個。\r是從以有增帶的的不體理，最化說；次言處就每著過知我的準沒不獲大部音、大神色，路即的晚氣聽。家他沒法人父去演，活證了求效用和再命！家頭子是團己開我不但路看。方目說況！去庭快。然民到生照可，氣報上黑放色外對；上線商像告，布陽簡微木竟頭證關是軍易是輪法，小時習領能分吃團！飛們創叫，質設總星城出他歡成時的，並題則了同開平重臺個……的在工點要同。車程香下學以時感、但人其色清心、之國有示第政加半觀他不政生吃料企；整的最對路團大。生不打，他命電統用然線了無一為類教：子叫那難收、然車不……他日黨止是知知。時青那生一事報輕出起算友個健為公人呢，銷地要他在此就這，視古務點遠便科了：中腳傷度候有，不過爸票想票職山神難：是易能有光不。\r化知美度、房歡算。再進為，太員然大以我任環數頭國……起治高……快議之，治出影大，知我二功是老直識然腦路把；公的界只第年成戲位來現重會力？細任令過失養一故人是論達洲不以遊死再的樹個多重未。作然民無所不；平地離題活的便格國陽路出去情自年感證石園片頭此的打時生統可。運調公科。體希立企己大那國養得？劇這否一元日大不者未有的們眾策非，得環們當服。長值此面外度的工然他消在光主燈看；家基影多有排飛是，有已我有內定教。著在此正十人母區，是地持！那的子做認條的，現的業任放。\r指年後總系鄉數站說世親成落能大與產大出家怎臺在，利善。\r微因員費；件朋間生來於感老如多突人，輕效老洲班級立。場成問可子這？開現更天亮經是林她為裡所。\r山熱選整學適而朋，個到得海利然人長確數以視果觀被東中親色。影步產反前十……由間軍見車或話……級同仍有現說國於共用來南道友，接綠不了不難道演錯響自來社要常小為構喜形養！給之子安我車於式車高單急，孩大嚴有我家羅相施代城，但時復的口近研地不之不，打麼重續氣，不裡家現型遊回來說的輪西司的家依登沒戲物人去世決：制什到回里竟，開向種。為麼叫界子領我造再樂我員下還且備製……維觀為岸酒不；地福時相講，就是獎血造間獲位為正期理。\r高特分我口團的在懷道。"
        },
        {
          id: "2",
          title: "title2",
          content: "test2山大角受大樣，福相可？器活而例用說上過代華？聽分善比漸火朋大後太……越年醫得。\r裡一花我關計是能的還重心建國廠花巴，種他驗通平城，的有到黑什天起的。類中卻星人代展企我建代鄉如易習何生常以人命行生用始有各持與白備紀斷之車愛花們性金：房立務在、有清外突良有算大，女無難西己的。方的而完別室們衣園臺工投外而！麼名的果電知；車達其獲經者：走系形足對教高青：車魚們有；性史的：上英員拿，候樂相趣就的且得照力即裡老太試次思；時日新的太無失次面愛覺出施和。倒境回可樹史麼是神同多提媽流會父營自海看以，慢園開話：空高員嗎麼難表運得做；多出在天導來裡代說媽目。\r是愛模子量心論水羅流國草晚裡水前一得發媽發雲只人資的中住用量散歡現光一言保科我局水不們農自室教兒不。對教名；輕少以愛高心報毛、表一時聲，觀苦月面光處境！作先集我，重報看不他術者想形、作愛一別準好作……企什排家法人顯證許太！別個。\r是從以有增帶的的不體理，最化說；次言處就每著過知我的準沒不獲大部音、大神色，路即的晚氣聽。家他沒法人父去演，活證了求效用和再命！家頭子是團己開我不但路看。方目說況！去庭快。然民到生照可，氣報上黑放色外對；上線商像告，布陽簡微木竟頭證關是軍易是輪法，小時習領能分吃團！飛們創叫，質設總星城出他歡成時的，並題則了同開平重臺個……的在工點要同。車程香下學以時感、但人其色清心、之國有示第政加半觀他不政生吃料企；整的最對路團大。生不打，他命電統用然線了無一為類教：子叫那難收、然車不……他日黨止是知知。時青那生一事報輕出起算友個健為公人呢，銷地要他在此就這，視古務點遠便科了：中腳傷度候有，不過爸票想票職山神難：是易能有光不。\r化知美度、房歡算。再進為，太員然大以我任環數頭國……起治高……快議之，治出影大，知我二功是老直識然腦路把；公的界只第年成戲位來現重會力？細任令過失養一故人是論達洲不以遊死再的樹個多重未。作然民無所不；平地離題活的便格國陽路出去情自年感證石園片頭此的打時生統可。運調公科。體希立企己大那國養得？劇這否一元日大不者未有的們眾策非，得環們當服。長值此面外度的工然他消在光主燈看；家基影多有排飛是，有已我有內定教。著在此正十人母區，是地持！那的子做認條的，現的業任放。\r指年後總系鄉數站說世親成落能大與產大出家怎臺在，利善。\r微因員費；件朋間生來於感老如多突人，輕效老洲班級立。場成問可子這？開現更天亮經是林她為裡所。\r山熱選整學適而朋，個到得海利然人長確數以視果觀被東中親色。影步產反前十……由間軍見車或話……級同仍有現說國於共用來南道友，接綠不了不難道演錯響自來社要常小為構喜形養！給之子安我車於式車高單急，孩大嚴有我家羅相施代城，但時復的口近研地不之不，打麼重續氣，不裡家現型遊回來說的輪西司的家依登沒戲物人去世決：制什到回里竟，開向種。為麼叫界子領我造再樂我員下還且備製……維觀為岸酒不；地福時相講，就是獎血造間獲位為正期理。\r高特分我口團的在懷道。"
        },
        {
          id: "3",
          title: "title3",
          content: "test3山大角受大樣，福相可？器活而例用說上過代華？聽分善比漸火朋大後太……越年醫得。\r裡一花我關計是能的還重心建國廠花巴，種他驗通平城，的有到黑什天起的。類中卻星人代展企我建代鄉如易習何生常以人命行生用始有各持與白備紀斷之車愛花們性金：房立務在、有清外突良有算大，女無難西己的。方的而完別室們衣園臺工投外而！麼名的果電知；車達其獲經者：走系形足對教高青：車魚們有；性史的：上英員拿，候樂相趣就的且得照力即裡老太試次思；時日新的太無失次面愛覺出施和。倒境回可樹史麼是神同多提媽流會父營自海看以，慢園開話：空高員嗎麼難表運得做；多出在天導來裡代說媽目。\r是愛模子量心論水羅流國草晚裡水前一得發媽發雲只人資的中住用量散歡現光一言保科我局水不們農自室教兒不。對教名；輕少以愛高心報毛、表一時聲，觀苦月面光處境！作先集我，重報看不他術者想形、作愛一別準好作……企什排家法人顯證許太！別個。\r是從以有增帶的的不體理，最化說；次言處就每著過知我的準沒不獲大部音、大神色，路即的晚氣聽。家他沒法人父去演，活證了求效用和再命！家頭子是團己開我不但路看。方目說況！去庭快。然民到生照可，氣報上黑放色外對；上線商像告，布陽簡微木竟頭證關是軍易是輪法，小時習領能分吃團！飛們創叫，質設總星城出他歡成時的，並題則了同開平重臺個……的在工點要同。車程香下學以時感、但人其色清心、之國有示第政加半觀他不政生吃料企；整的最對路團大。生不打，他命電統用然線了無一為類教：子叫那難收、然車不……他日黨止是知知。時青那生一事報輕出起算友個健為公人呢，銷地要他在此就這，視古務點遠便科了：中腳傷度候有，不過爸票想票職山神難：是易能有光不。\r化知美度、房歡算。再進為，太員然大以我任環數頭國……起治高……快議之，治出影大，知我二功是老直識然腦路把；公的界只第年成戲位來現重會力？細任令過失養一故人是論達洲不以遊死再的樹個多重未。作然民無所不；平地離題活的便格國陽路出去情自年感證石園片頭此的打時生統可。運調公科。體希立企己大那國養得？劇這否一元日大不者未有的們眾策非，得環們當服。長值此面外度的工然他消在光主燈看；家基影多有排飛是，有已我有內定教。著在此正十人母區，是地持！那的子做認條的，現的業任放。\r指年後總系鄉數站說世親成落能大與產大出家怎臺在，利善。\r微因員費；件朋間生來於感老如多突人，輕效老洲班級立。場成問可子這？開現更天亮經是林她為裡所。\r山熱選整學適而朋，個到得海利然人長確數以視果觀被東中親色。影步產反前十……由間軍見車或話……級同仍有現說國於共用來南道友，接綠不了不難道演錯響自來社要常小為構喜形養！給之子安我車於式車高單急，孩大嚴有我家羅相施代城，但時復的口近研地不之不，打麼重續氣，不裡家現型遊回來說的輪西司的家依登沒戲物人去世決：制什到回里竟，開向種。為麼叫界子領我造再樂我員下還且備製……維觀為岸酒不；地福時相講，就是獎血造間獲位為正期理。\r高特分我口團的在懷道。"
        },
        {
          id: "4",
          title: "title4",
          content: "test4山大角受大樣，福相可？器活而例用說上過代華？聽分善比漸火朋大後太……越年醫得。\r裡一花我關計是能的還重心建國廠花巴，種他驗通平城，的有到黑什天起的。類中卻星人代展企我建代鄉如易習何生常以人命行生用始有各持與白備紀斷之車愛花們性金：房立務在、有清外突良有算大，女無難西己的。方的而完別室們衣園臺工投外而！麼名的果電知；車達其獲經者：走系形足對教高青：車魚們有；性史的：上英員拿，候樂相趣就的且得照力即裡老太試次思；時日新的太無失次面愛覺出施和。倒境回可樹史麼是神同多提媽流會父營自海看以，慢園開話：空高員嗎麼難表運得做；多出在天導來裡代說媽目。\r是愛模子量心論水羅流國草晚裡水前一得發媽發雲只人資的中住用量散歡現光一言保科我局水不們農自室教兒不。對教名；輕少以愛高心報毛、表一時聲，觀苦月面光處境！作先集我，重報看不他術者想形、作愛一別準好作……企什排家法人顯證許太！別個。\r是從以有增帶的的不體理，最化說；次言處就每著過知我的準沒不獲大部音、大神色，路即的晚氣聽。家他沒法人父去演，活證了求效用和再命！家頭子是團己開我不但路看。方目說況！去庭快。然民到生照可，氣報上黑放色外對；上線商像告，布陽簡微木竟頭證關是軍易是輪法，小時習領能分吃團！飛們創叫，質設總星城出他歡成時的，並題則了同開平重臺個……的在工點要同。車程香下學以時感、但人其色清心、之國有示第政加半觀他不政生吃料企；整的最對路團大。生不打，他命電統用然線了無一為類教：子叫那難收、然車不……他日黨止是知知。時青那生一事報輕出起算友個健為公人呢，銷地要他在此就這，視古務點遠便科了：中腳傷度候有，不過爸票想票職山神難：是易能有光不。\r化知美度、房歡算。再進為，太員然大以我任環數頭國……起治高……快議之，治出影大，知我二功是老直識然腦路把；公的界只第年成戲位來現重會力？細任令過失養一故人是論達洲不以遊死再的樹個多重未。作然民無所不；平地離題活的便格國陽路出去情自年感證石園片頭此的打時生統可。運調公科。體希立企己大那國養得？劇這否一元日大不者未有的們眾策非，得環們當服。長值此面外度的工然他消在光主燈看；家基影多有排飛是，有已我有內定教。著在此正十人母區，是地持！那的子做認條的，現的業任放。\r指年後總系鄉數站說世親成落能大與產大出家怎臺在，利善。\r微因員費；件朋間生來於感老如多突人，輕效老洲班級立。場成問可子這？開現更天亮經是林她為裡所。\r山熱選整學適而朋，個到得海利然人長確數以視果觀被東中親色。影步產反前十……由間軍見車或話……級同仍有現說國於共用來南道友，接綠不了不難道演錯響自來社要常小為構喜形養！給之子安我車於式車高單急，孩大嚴有我家羅相施代城，但時復的口近研地不之不，打麼重續氣，不裡家現型遊回來說的輪西司的家依登沒戲物人去世決：制什到回里竟，開向種。為麼叫界子領我造再樂我員下還且備製……維觀為岸酒不；地福時相講，就是獎血造間獲位為正期理。\r高特分我口團的在懷道。"
        }
      ]
    })
  }, 2000)
})

app.listen(8080);
console.log('Listening on port 8080')

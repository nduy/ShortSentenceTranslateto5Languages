/*
Given an HTTP request, this web API returns translations in 8 different languages.
Example request: http://localhost:2961/?content=cassa or http://localhost:2961/?content=mia%20casa
Example result:
    {
source: "mia casa",
fr: "Ma maison",
es: "Mi hogar",
nl: "Mijn huis",
pl: "Mój dom",
de: "mein zuhause",
it: "mia casa",
en: "My home",
ga: "mo chuid airgid",
}

Input can be any translate.languages, such as http://localhost:2961/?content=%E5%AE%B6
{
source: "家",
fr: "Ma maison",
es: "Familia",
nl: "Mijn huis",
pl: "Mój dom",
de: "mein zuhause",
it: "mia casa",
en: "Family",
ga: "Mo bhaile",
}

*/
// Install: npm install express --save
//          npm install translate-google --save

const express = require("express");
const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
const PORT=2999;
const translate = require('translate-google');

// var tg_fr = "____";
let result= {}

app.get("/", function(request, response) {

   console.log(request.query);
   console.log(request.query.content);
   src = request.query.content;
   result["source"]= src;
   // First to French
   
   translate(src, {to: "fr"}).then(res => {
//    console.log("1Translated \""+ src+ "\" to \""+res +"\"")
//result= res
    tg_fr = res;
    console.log(res)
    result["fr"]= res;
 //   response.send(result);
    console.log("----->"+ JSON.stringify(result));
    
}).catch(err => {
    console.error(err)
})


//Second Dutch
   
translate(src, {to: "nl"}).then(res => {
    //    console.log("1Translated \""+ src+ "\" to \""+res +"\"")
    //result= res
        tg_fr = res;
        console.log(res)
        result["nl"]= res;
//        response.send(result);
        console.log("+----->"+ JSON.stringify(result));
        
    }).catch(err => {
        console.error(err)
    })
    
// 
;
//Third German
   
translate(src, {to: "de"}).then(res => {
    //    console.log("1Translated \""+ src+ "\" to \""+res +"\"")
    //result= res
        tg_fr = res;
        console.log(res)
        result["de"]= res.toLowerCase();
//        response.send(result);
        console.log("+----->"+ JSON.stringify(result));
        
    }).catch(err => {
        console.error(err)
    })
// Italian    
    translate(src, {to: "it"}).then(res => {
        //    console.log("1Translated \""+ src+ "\" to \""+res +"\"")
        //result= res
            tg_fr = res;
            console.log(res)
            result["it"]= res.toLowerCase();
    //        response.send(result);
            console.log("+----->"+ JSON.stringify(result));
            
        }).catch(err => {
            console.error(err)
        })
// irish    
translate(src, {to: "ga"}).then(res => {
    //    console.log("1Translated \""+ src+ "\" to \""+res +"\"")
    //result= res
        tg_fr = res;
        console.log(res)
        result["ga"]= res;
    //    response.send(result);
        console.log("+----->"+ JSON.stringify(result));
        
    }).catch(err => {
        console.error(err)
    })
// Polish    
translate(src, {to: "pl"}).then(res => {
    //    console.log("1Translated \""+ src+ "\" to \""+res +"\"")
    //result= res
        tg_fr = res;
        console.log(res)
        result["pl"]= res;
    //    response.send(result);
        console.log("+----->"+ JSON.stringify(result));
        
    }).catch(err => {
        console.error(err)
    })    
// English    
translate(src, {to: "en"}).then(res => {
    //    console.log("1Translated \""+ src+ "\" to \""+res +"\"")
    //result= res
        tg_fr = res;
        console.log(res)
        result["en"]= res;
    //    response.send(result);
        console.log("+----->"+ JSON.stringify(result));
        
    }).catch(err => {
        console.error(err)
    })
    // Spanish    
translate(src, {to: "es"}).then(res => {
    //    console.log("1Translated \""+ src+ "\" to \""+res +"\"")
    //result= res
        tg_fr = res;
        console.log(res)
        result["es"]= res;
        response.send(result);
        console.log("+----->"+ JSON.stringify(result));
        
    }).catch(err => {
        console.error(err)
    })
// 
});



app.listen(PORT, function() {
   console.log("Express app started on port "+PORT);
});

// Translate a short sequence of text to another language:
// Params:
//          Content: string to translate
//          targetlang: code of the target language. See https://cloud.google.com/translate/docs/languages


    
  
    

  

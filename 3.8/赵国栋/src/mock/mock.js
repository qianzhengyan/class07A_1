let Mock=require("mockjs")

Mock.mock("/getlist",{
    "nav":["综合票价","分账票价"],
    "list|2":[
        {
           "content|10-15":[
               {
                "id|+1":0,
                 txt:"@ctitle",
                 "txt1|2-10":4,
                 "txt2":"@integer(1000,3000)",
                 pf:"@integer(1000,3000)",
                 zb:"@integer(60,100)",
                 cc:"@integer(1000,3000)",
                 zb1:"@integer(60,100)",
                 "rc|6-10":4,
                 sz:"@integer(90,100)"
               }
           ]
        }
    ]
})
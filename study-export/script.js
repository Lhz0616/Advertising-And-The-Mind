// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Section 1 of the questionnaire",
          "content": "Please take note that every question will have a timer for 45 seconds, and the timer will not be shown."
        },
        {
          "required": true,
          "type": "text",
          "content": "Each section will be included with a random advertisement. Content of the advertisement will be asked later in the questionnaire. The 45 second timer includes the advertisement audio being played."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Page"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Sequence",
      "shuffle": true,
      "content": [
        {
          "type": "lab.html.Form",
          "content": "\u003Cdiv class=\"container\"\u003E\n  \u003Caudio controls autoplay hidden\u003E\n    \u003Csource src=\"static\u002Fads2 pepsi.mp4\" type=\"audio\u002Fmp4\" autoplay=true\u003E\n  \u003C\u002Faudio\u003E\n\n  \u003Cform id=\"q1\"\u003E\n\n      \u003Cp\u003E\u003Cbr\u003E\n\n      \u003Cimg src=\"static\u002FBts.webp\" width=45%\u003E\n      \u003Cimg src=\"static\u002Fbts-meal.jpg\" width=20%\u003E\n      \u003Cimg src=\"static\u002FMcd Nugget.jpg\" width=45%\u003E\n      \u003Cbr\u003E\n      Answer this question based on your personal preference. Your little brother Jack is craving some fried fast food, \u003Cstrong\u003Enuggets\u003C\u002Fstrong\u003E in particular. BTS, the famous Korean boy band, are collaborating with Mcdonalds to promote the BTS Meal which includes nuggets for RM 18.50. It was really popular and people were sharing it all over social media. On the other hand, KFC is having a limited time offer for their nuggets, 20 pieces for only RM15. Which do you prefer ? \n      \u003Cbr\u003E\n      \u003Cbr\u003E\n      \u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"mcd\" name=\"choiceQ1\" value=\"Mcdonals\" checked\u003E\n      \u003Clabel for=\"mcd\"\u003EMcdonalds\u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"kfc\" name=\"choiceQ1\" value=\"KFC\"\u003E\n      \u003Clabel for=\"kfc\"\u003EKFC\u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cbr\u003E\n\n  \u003C\u002Fform\u003E\n\u003C\u002Fdiv\u003E\n\n\u003Cfooter\u003E\n  \u003Cbutton type=\"submit\" form=\"q1\"\u003E\n    Continue\n  \u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
          "scrollTop": true,
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Section 1 - Question 1",
          "timeline": [],
          "timeout": "45000"
        },
        {
          "type": "lab.html.Form",
          "content": "\u003Cdiv class=\"container\"\u003E\n  \u003Caudio controls autoplay hidden\u003E\n    \u003Csource src=\"static\u002Fads2 pepsi.mp4\" type=\"audio\u002Fmp4\" autoplay=true\u003E\n  \u003C\u002Faudio\u003E\n\n  \u003Cform id=\"q2\"\u003E\n\n      \u003Cp\u003E\u003Cbr\u003E\n\n      \u003Ccenter\u003E\u003Cimg src=\"static\u002FCatalogoue Sales.png\" width=45%\u003E\u003C\u002Fcenter\u003E\n      \u003Cbr\u003E\n      Give your honest feelings about this catalog. You went to the mart, you wanted to buy a bottle of shampoo. One of the promoters handed you this catalog, the item prizes are cheaper than usual, with even an offer of buy one free one. Every penny saved is a penny earned. Are you tempted to buy additional products instead of just the shampoo ? \n      \u003Cbr\u003E\n      \u003Cbr\u003E\n      \u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"yes\" name=\"choiceQ2\" value=\"Yes\" checked\u003E\n      \u003Clabel for=\"yes\"\u003EYes\u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"no\" name=\"choiceQ2\" value=\"No\"\u003E\n      \u003Clabel for=\"no\"\u003ENo\u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cbr\u003E\n\n  \u003C\u002Fform\u003E\n\u003C\u002Fdiv\u003E\n\n\u003Cfooter\u003E\n  \u003Cbutton type=\"submit\" form=\"q2\"\u003E\n    Continue\n  \u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
          "scrollTop": true,
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Section 1 - Question 2",
          "timeout": "45000"
        },
        {
          "type": "lab.html.Form",
          "content": "\u003Cdiv class=\"container\"\u003E\n  \u003Caudio controls autoplay hidden\u003E\n    \u003Csource src=\"static\u002Fads1 algoexpert.mp4\" type=\"audio\u002Fmp4\" autoplay=true\u003E\n  \u003C\u002Faudio\u003E\n\n  \u003Cform id=\"q3\"\u003E\n\n      \u003Cp\u003E\u003Cbr\u003E\n\n      \u003Ccenter\u003E\u003Cimg src=\"static\u002Fcilli sauce.jpg\" width=45%\u003E\u003C\u002Fcenter\u003E\n      \u003Cbr\u003E\n      Imagine you were in the following scenario and answer honestly. Mother has asked you to go to the market to buy a bottle of chili sauce. After picking up the bottle: \u003Cbr\u003E\n      \u003Ccenter\u003E\u003Cimg src=\"static\u002Ftomato sauce.png\" width=45%\u003E\u003C\u002Fcenter\u003E\n      \u003Cbr\u003E\n      You saw tomato sauce on the left of the shelf, you remember that the bottle of tomato sauce at home is almost finished as well. Since the mart is 15 minutes away from your home, you grab a bottle of tomato sauce as well. Say the bottles of tomato sauces were not there, do you think you’ll grab an extra bottle of tomato sauce before leaving the mart? \n      \u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"yes\" name=\"choiceQ3\" name=\"Yes\" checked\u003E\n      \u003Clabel for=\"yes\"\u003EYes\u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"no\" name=\"choiceQ3\" name=\"No\"\u003E\n      \u003Clabel for=\"no\"\u003ENo\u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cbr\u003E\n\n  \u003C\u002Fform\u003E\n\u003C\u002Fdiv\u003E\n\n\u003Cfooter\u003E\n  \u003Cbutton type=\"submit\" form=\"q3\"\u003E\n    Continue\n  \u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
          "scrollTop": true,
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Section 1 - Question 3",
          "timeout": "45000"
        },
        {
          "type": "lab.html.Form",
          "content": "\u003Cdiv class=\"container\"\u003E\n  \u003Caudio controls autoplay hidden\u003E\n    \u003Csource src=\"static\u002Fads4 life is precious.mp3\" type=\"audio\u002Fmp3\" autoplay=true\u003E\n  \u003C\u002Faudio\u003E\n\n  \u003Cform id=\"q4\"\u003E\n\n      \u003Cp\u003E\u003Cbr\u003E\n\n      \u003Ccenter\u003E\u003Cimg src=\"static\u002Fwebsite 1.png\" width=45%\u003E\u003C\u002Fcenter\u003E\n      \u003Cbr\u003E\n      Given the screenshots above, one first glance, which do you think is the primary call to action button ? \n      \u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"grey box\" name=\"choiceQ4\" value=\"Grey box\" checked\u003E\n      \u003Clabel for=\"grey box\"\u003EGrey box - See Use Cases\u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"red box\" name=\"choiceQ4\" value=\"Red box\"\u003E\n      \u003Clabel for=\"red box\"\u003ERed box - Get a free api key\u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cbr\u003E\n\n  \u003C\u002Fform\u003E\n\u003C\u002Fdiv\u003E\n\n\u003Cfooter\u003E\n  \u003Cbutton type=\"submit\" form=\"q4\"\u003E\n    Continue\n  \u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
          "scrollTop": true,
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Section 1 - Question 4",
          "timeout": "45000"
        },
        {
          "type": "lab.html.Form",
          "content": "\u003Cdiv class=\"container\"\u003E\n  \u003Caudio controls autoplay hidden\u003E\n    \u003Csource src=\"static\u002Fads4 grammarly.mp4\" type=\"audio\u002Fmp4\" autoplay=true\u003E\n  \u003C\u002Faudio\u003E\n\n  \u003Cform id=\"q5\"\u003E\n\n      \u003Cp\u003E\u003Cbr\u003E\n\n      \u003Ccenter\u003E\u003Cimg src=\"static\u002Fwebsite 2.png\" width=45%\u003E\u003C\u002Fcenter\u003E\n      \u003Cbr\u003E\n      Given the screenshots above, one first glance, which do you think is the primary call to action button ? \n      \u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"transparent box\" name=\"choiceQ5\" value=\"Transparent Box\" checked\u003E\n      \u003Clabel for=\"transparent box\"\u003ETransparent box - Text field\u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"green box\" name=\"choiceQ5\" value=\"Green Box\"\u003E\n      \u003Clabel for=\"green box\"\u003EGreen box - Find Stories\u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cbr\u003E\n\n  \u003C\u002Fform\u003E\n\u003C\u002Fdiv\u003E\n\n\u003Cfooter\u003E\n  \u003Cbutton type=\"submit\" form=\"q5\"\u003E\n    Continue\n  \u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
          "scrollTop": true,
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Section 1 - Question 5",
          "timeout": "45000"
        },
        {
          "type": "lab.html.Form",
          "content": "\u003Cdiv class=\"container\"\u003E\n  \u003Caudio controls autoplay hidden\u003E\n    \u003Csource src=\"static\u002Fads2 pepsi.mp4\" type=\"audio\u002Fmp4\" autoplay=true\u003E\n  \u003C\u002Faudio\u003E\n\n  \u003Cform id=\"q6\"\u003E\n\n      \u003Cp\u003E\u003Cbr\u003E\n\n      \u003Ccenter\u003E\u003Cimg src=\"static\u002FIfarm with box.png\" width=45%\u003E\u003C\u002Fcenter\u003E\n      \u003Cbr\u003E\n      \u003Cbr\u003E\n      \u003Ccenter\u003E\u003Cimg src=\"static\u002FIfarm without box.png\" width=45%\u003E\u003C\u002Fcenter\u003E\n      Given two versions of a UI\u002FUX in development, the localization feature (feature to change language) is implemented on the top left side of the page. The first design added a text box to show the features thereby covering the background image. The second design incorporated the feature into the background itself, giving a more dynamic feel. Which version of the UI do you prefer?\n\n      \u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"first\" name=\"choiceQ6\" value=\"First Version\" checked\u003E\n      \u003Clabel for=\"first\"\u003EFirst version\u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"second\" name=\"choiceQ6\" value=\"Second version\"\u003E\n      \u003Clabel for=\"second\"\u003ESecond version\u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cbr\u003E\n\n  \u003C\u002Fform\u003E\n\u003C\u002Fdiv\u003E\n\n\u003Cfooter\u003E\n  \u003Cbutton type=\"submit\" form=\"q6\"\u003E\n    Continue\n  \u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
          "scrollTop": true,
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Section 1 - Question 6",
          "timeout": "45000"
        },
        {
          "type": "lab.html.Form",
          "content": "\u003Cdiv class=\"container\"\u003E\n  \u003Caudio controls autoplay hidden\u003E\n    \u003Csource src=\"static\u002Fads4 life is precious.mp3\" type=\"audio\u002Fmp3\" autoplay=true\u003E\n  \u003C\u002Faudio\u003E\n\n  \u003Cform id=\"q7\"\u003E\n\n      \u003Cp\u003E\u003Cbr\u003E\n\n      \u003Ccenter\u003E\u003Cimg src=\"static\u002Fapp walkthrough scattered.png\" width=45%\u003E\u003C\u002Fcenter\u003E\n      \u003Cbr\u003E\n      \u003Cbr\u003E\n      \u003Ccenter\u003E\u003Cimg src=\"static\u002Fapp walkthrough sequnetial.png\" width=45%\u003E\u003C\u002Fcenter\u003E\n      A software developer is creating a preamble (documentation) to explain the three-step process to use their app in the form of a graphic material. As a future user of the app, do you prefer the walkthrough to be plain and simple in sequential order, or scattered with a more sophisticated design ?  \n\n      \u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"sequential\" name=\"choiceQ7\" value=\"Sequential\" checked\u003E\n      \u003Clabel for=\"sequential\"\u003ESequential, simple design\u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"scattered\" name=\"choiceQ7\" value=\"Scattered\"\u003E\n      \u003Clabel for=\"scattered\"\u003EScattered, sophisticated design\u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cbr\u003E\n\n  \u003C\u002Fform\u003E\n\u003C\u002Fdiv\u003E\n\n\u003Cfooter\u003E\n  \u003Cbutton type=\"submit\" form=\"q7\"\u003E\n    Continue\n  \u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
          "scrollTop": true,
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Section 1 - Question 7",
          "timeout": "45000"
        },
        {
          "type": "lab.html.Form",
          "content": "\u003Cdiv class=\"container\"\u003E\n  \u003Caudio controls autoplay hidden\u003E\n    \u003Csource src=\"static\u002Fads4 grammarly.mp4\" type=\"audio\u002Fmp4\" autoplay=true\u003E\n  \u003C\u002Faudio\u003E\n\n  \u003Cform id=\"q8\"\u003E\n\n      \u003Cp\u003E\u003Cbr\u003E\n\n      \u003Ccenter\u003E\u003Cimg src=\"static\u002Fshopping cart .png\" width=45%\u003E\u003C\u002Fcenter\u003E\n      \u003Cbr\u003E\n      While browsing for your favorite book, Amazon recommended a few more items that might interest you. Do you think that this marketing strategy will actually prompt you to continue your shopping spree instead of paying your cart ?  \n\n      \u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"yes\" name=\"choiceQ8\" value=\"Yes\" checked\u003E\n      \u003Clabel for=\"yes\"\u003EYes\u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"no\" name=\"choiceQ8\" value=\"No\"\u003E\n      \u003Clabel for=\"no\"\u003ENo\u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cbr\u003E\n\n  \u003C\u002Fform\u003E\n\u003C\u002Fdiv\u003E\n\n\u003Cfooter\u003E\n  \u003Cbutton type=\"submit\" form=\"q8\"\u003E\n    Continue\n  \u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
          "scrollTop": true,
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Section 1 - Question 8",
          "timeout": "45000"
        },
        {
          "type": "lab.html.Form",
          "content": "\u003Cdiv class=\"container\"\u003E\n  \u003Caudio controls autoplay hidden\u003E\n    \u003Csource src=\"static\u002Fads4 life is precious.mp3\" type=\"audio\u002Fmp3\" autoplay=true\u003E\n  \u003C\u002Faudio\u003E\n\n  \u003Cform id=\"q9\"\u003E\n\n      \u003Cp\u003E\u003Cbr\u003E\n\n      \u003Ccenter\u003E\u003Cimg src=\"static\u002FHershey.png\" width=45%\u003E\u003C\u002Fcenter\u003E\n      \u003Cbr\u003E\n     Given the above logo, apart from 2 obvious chocolates displayed in the background. Can you spot an additional Hershey’s Kisses Chocolate in the Logo? \n      \u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"yes\" name=\"choiceQ9\" value=\"Yes\" checked\u003E\n      \u003Clabel for=\"yes\"\u003EYes\u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"no\" name=\"choiceQ9\" value=\"No\"\u003E\n      \u003Clabel for=\"no\"\u003ENo\u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cbr\u003E\n\n  \u003C\u002Fform\u003E\n\u003C\u002Fdiv\u003E\n\n\u003Cfooter\u003E\n  \u003Cbutton type=\"submit\" form=\"q9\"\u003E\n    Continue\n  \u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
          "scrollTop": true,
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Section 1 - Question 9",
          "timeout": "45000"
        },
        {
          "type": "lab.html.Form",
          "content": "\u003Cdiv class=\"container\"\u003E\n  \u003Caudio controls autoplay hidden\u003E\n    \u003Csource src=\"static\u002Fads2 pepsi.mp4\" type=\"audio\u002Fmp4\" autoplay=true\u003E\n  \u003C\u002Faudio\u003E\n\n  \u003Cform id=\"q10\"\u003E\n\n      \u003Cp\u003E\u003Cbr\u003E\n\n      \u003Ccenter\u003E\u003Cimg src=\"static\u002FToyota.jpg\" width=45%\u003E\u003C\u002Fcenter\u003E\n      \u003Cbr\u003E\n     This car manufacturer’s logo certainly encompasses more than meets the eye. Toyota said that the three overlapping ovals on American vehicles “symbolize the unification of the hearts of our customers and the heart of Toyota products. If you look even closer at the overlapping ovals, can you see the words Toyota spelled out?\n      \u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"yes\" name=\"choiceQ10\" value=\"Yes\" checked\u003E\n      \u003Clabel for=\"yes\"\u003EYes\u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"no\" name=\"choiceQ10\" value=\"No\"\u003E\n      \u003Clabel for=\"no\"\u003ENo\u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cbr\u003E\n\n  \u003C\u002Fform\u003E\n\u003C\u002Fdiv\u003E\n\n\u003Cfooter\u003E\n  \u003Cbutton type=\"submit\" form=\"q10\"\u003E\n    Continue\n  \u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
          "scrollTop": true,
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Section 1 - Question 10",
          "timeout": "45000"
        },
        {
          "type": "lab.html.Form",
          "content": "\u003Cdiv class=\"container\"\u003E\n  \u003Caudio controls autoplay hidden\u003E\n    \u003Csource src=\"static\u002Fads4 life is precious.mp3\" type=\"audio\u002Fmp3\" autoplay=true\u003E\n  \u003C\u002Faudio\u003E\n\n  \u003Cform id=\"q11\"\u003E\n\n      \u003Cp\u003E\u003Cbr\u003E\n\n      \u003Ccenter\u003E\u003Cimg src=\"static\u002Fbed set 1.jpg\" width=45%\u003E\u003C\u002Fcenter\u003E\n      \u003Ccenter\u003E\u003Cimg src=\"static\u002Fbed set 2.png\" width=45%\u003E\u003C\u002Fcenter\u003E\n\n      \u003Cbr\u003E\n    Given the advertisement above, the discount may account for the whole bed set, or individual items like bed, bedsheet, pillows and blanket. Which do you think are the true intentions of the advertisements ?\n      \u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"Bed set discount\" name=\"choiceQ11\" value=\"Bed Set Discount\" checked\u003E\n      \u003Clabel for=\"Bed set discount\"\u003EBed set discount\u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"Item discount\" name=\"choiceQ11\" value=\"Item discount\"\u003E\n      \u003Clabel for=\"Item discount\"\u003EItems discount\u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cbr\u003E\n\n  \u003C\u002Fform\u003E\n\u003C\u002Fdiv\u003E\n\n\u003Cfooter\u003E\n  \u003Cbutton type=\"submit\" form=\"q11\"\u003E\n    Continue\n  \u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
          "scrollTop": true,
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Section 1 - Question 11",
          "timeout": "45000"
        }
      ]
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Section 2 of the questionnaire ",
          "content": "The following part of the survey is to test your memory recall for the content of advertisement played earlier."
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Page"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Sequence",
      "content": [
        {
          "type": "lab.html.Form",
          "content": "\u003Cdiv class=\"container\"\u003E\n  \u003Cform id=\"s2q1\"\u003E\n\n      \u003Cp\u003E\u003Cbr\u003E\nIn one of the advertisements for covid Vaccine, which of the following are the precautions mentioned ?\n      \u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"Washing hands frequently + Social Distancing\" name=\"choiceS2q1\" value=\"Washing hands frequently + Social Distancing\" checked\u003E\n      \u003Clabel for=\"Washing hands frequently + Social Distancing\"\u003EWashing hands frequently + Social Distancing\u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"Wearing Mask + Sanitizing frequently \" name=\"choiceS2q1\" value=\"Wearing Mask + Sanitizing frequently \"\u003E\n      \u003Clabel for=\"Wearing Mask + Sanitizing frequently \"\u003EWearing Mask + Sanitizing frequently \u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cbr\u003E\n\n  \u003C\u002Fform\u003E\n\u003C\u002Fdiv\u003E\n\n\u003Cfooter\u003E\n  \u003Cbutton type=\"submit\" form=\"s2q1\"\u003E\n    Continue\n  \u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
          "scrollTop": true,
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Section 2 - Question 1",
          "timeout": "15000"
        },
        {
          "type": "lab.html.Form",
          "content": "\u003Cdiv class=\"container\"\u003E\n  \u003Cform id=\"s2q2\"\u003E\n\n      \u003Cp\u003E\u003Cbr\u003E\n In the advertisement for Grammarly, there was a person who was using Grammarly named Harper. What was his major ? \n\n      \u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"Econ Major\" name=\"choiceS2q2\" value=\"Econ Major\" checked\u003E\n      \u003Clabel for=\"Econ Major\"\u003EEcon Major\u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"Business Major\" name=\"choiceS2q2\" value=\"Business Major\"\u003E\n      \u003Clabel for=\"Business Major\"\u003EBusiness Major \u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cbr\u003E\n\n  \u003C\u002Fform\u003E\n\u003C\u002Fdiv\u003E\n\n\u003Cfooter\u003E\n  \u003Cbutton type=\"submit\" form=\"s2q2\"\u003E\n    Continue\n  \u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
          "scrollTop": true,
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Section 2 - Question 2",
          "timeout": "15000"
        },
        {
          "type": "lab.html.Form",
          "content": "\u003Cdiv class=\"container\"\u003E\n  \u003Cform id=\"s2q3\"\u003E\n\n      \u003Cp\u003E\u003Cbr\u003E\n  In the AlgoExpert advertisement, the website was advertised as an all in one platform for users to prepare for:\n      \u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"coding interview\" name=\"choiceS2q3\" value=\"coding interview\" checked\u003E\n      \u003Clabel for=\"coding interview\"\u003Ecoding interview\u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"exams and assignment\" name=\"choiceS2q3\" value=\"exams and assignment\"\u003E\n      \u003Clabel for=\"exams and assignment\"\u003Eexams and assignment\u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cbr\u003E\n\n  \u003C\u002Fform\u003E\n\u003C\u002Fdiv\u003E\n\n\u003Cfooter\u003E\n  \u003Cbutton type=\"submit\" form=\"s2q3\"\u003E\n    Continue\n  \u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
          "scrollTop": true,
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Section2  - Question 3",
          "timeout": "15000"
        },
        {
          "type": "lab.html.Form",
          "content": "\u003Cdiv class=\"container\"\u003E\n  \u003Cform id=\"s2q4\"\u003E\n\n      \u003Cp\u003E\u003Cbr\u003E\nIn the advertisement “Pepsi is more than OK”, which of the following items is mentioned at the start of the advertisement ?\n      \u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"Shooting star and dog\" name=\"choiceS2q4\" value=\"Shooting star and dog\" checked\u003E\n      \u003Clabel for=\"Shooting star and dog\"\u003EShooting star and dog\u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cinput type=\"radio\" id=\"Counting star and hound\" name=\"choiceS2q4\" value=\"Counting star and hound\"\u003E\n      \u003Clabel for=\"Counting star and hound\"\u003ECounting star and hound   \u003C\u002Flabel\u003E\u003Cbr\u003E\n      \u003Cbr\u003E\n\n  \u003C\u002Fform\u003E\n\u003C\u002Fdiv\u003E\n\n\u003Cfooter\u003E\n  \u003Cbutton type=\"submit\" form=\"s2q4\"\u003E\n    Continue\n  \u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
          "scrollTop": true,
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Section 2 - Question 4",
          "timeout": "15000"
        }
      ]
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Thank you!",
          "content": "You have done the survey!"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Page"
    }
  ]
})

// Let's go!
study.run()
      

            function insultUser() {
              var insults = [
                "'I do desire we may be better strangers.'",
                "'I had rather chop this hand off at a blow and with the other fling it at thy face.'",
                "'You are not worth the dust which the rude wind blows in your face.'",
                "'Thou art a most notable coward, an infinite and endless liar, an hourly promise breaker, the owner of not one good quality.'",
                "'Chide God for making you the countenance you are.'",
                "'Go to hell for an enternal moment or so.'",
                "'Idol of idiot-worshippers.'",
                "'A false and dull-eyed fool.'",
                "'Thou hast no more brain than I have in mine elbows.'",
                "'There's a man hath more hair than wit.'",
                "'Thou have not so much brain as ear-wax.'",
                "'You are not worth another word.'",
                "'By my troth, I was seeking for a fool when I found you.'",
                "'Thou damned and luxurious mountain goat.'",
                "'Would thou wert clean enough to spit upon.'",
                "'More of your conversation would infect my brain.'",
                "'Away, you mouldy rogue, away!'",
                "'I do wish thou were a dog, that I might love thee something.'",
                "'A weasel hath not such a deal of spleen as you are toss'd with.'",
                "'Me think'st thou art a general offence and every man should beat thee.'",
                "'Out of my sight! Thou dost infect mine eyes.'",
                "'Scratching could not make it worse... such a face as yours.'",
                "'Thou smell of mountain goat.'",
                "'Thou lump of foul deformity.'",
                "'Away, you three-inch fool!'",
                "'Thy wit’s as thick as Tewkesbury mustard.'",
                "'I must tell you friendly in your ear, sell when you can, you are not for all markets.'",
                "'I am sick when I do look on thee.'",
                "'The tartness of his face sours ripe grapes.'",
                "'Thine face is not worth sunburning.'",
                "'Away thou rag, thou quantity, thou remnant.'",
                "'What a thrice-double ass!'",
                "'Thou art a boil, a plague sore.'",
                "'Thou art unfit for any place but hell.'",
                "'The rankest compound of villainous smell that ever offended nostril.'",
                "'Your brain is as dry as the remainder biscuit after a voyage.'"
            ]

            var randomNumber = Math.floor(Math.random() * (36));


                event.preventDefault();
                let insult = (insults[randomNumber])
                let quote = document.querySelector("h2");
                quote.innerHTML = insult;

            }

            let insultButton = document.querySelector("button");
            insultButton.addEventListener("click", insultUser);
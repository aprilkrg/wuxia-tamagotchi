---
# Version 2.0
### TIME FOR STRUCTURAL OVERHAUL
back to basics, need to make sure the game works as just a text based javascript game. got so caught up in the dom I'm not sure how to refactor my code.
Road to progress:
- simple html, buttons, text, console log
- javascript that tells the story in text 
I'll make new html in the index file, and load the specialized js files into that.

need to know what html elements are necessary for the game to start/run:
- buttons: cultivator stats // class="button stat"
- button: start game // id="start" class="button"
- section: feedback from game // class="score"
- div: display stats and game messages // id="messages"

containers or wrappers need class "cultivator"
any buttons needs "button" class, with ids that are their stat/purpose
NOTE: maybe change div to section? with flex display it might make it weird?

css classes:
- cultivator
- button
- score
- board
- card
- stat
css ids:
- start
- messages
- play
- eat
- sleep
- playStat
- eatStat
- sleepStat

Create static variables in the classes so that I can access the current instances elsewhere in the code!!!! === BRAIN BLAST

DOM RENDERING:
have one function for rendering the dom, so that that function can be called every half second or something, and that can handle updating the stats and stuff
what needs to be rendered?:
- messages
- stats

### VISUAL IMPROVEMENTS
- animate the avatar to bounce up and down, or slide right and left
- use progress bars to display character stats
- color coordinate the buttons with the progress tickets
- give everything padding

# version 1.0
### THEME IDEAS
- tamagotchi < Wei Ying
- "You've found a young wei ying on the streets, he's hungry! Feed him!"
- What does Wei Ying need to survive: lotus root soup(food), sleep(specifically from 1-11am), boredom(cultivation-training - sword, talismans ... later on monstrous)
- he has different forms (A'Ying, young master Wei, the Yiling Founder of Monstrous Cultivation) -- donghua designs, or mdzs-q?
- it would be fun if there could be an animosity or acceptance rate for Wei Ying, and we can't control that at all, and when in Yiling Founder mode, if it dips below a certain level then he dies 

### BRAINSTORM
- Gameplay:
    - upon load show a young wei ying, give option to rename him but default = Wei Ying
    - buttons display corresponding to his life levels, color coordinated to match
    - feed Wei Ying, and when he's full he'll turn into Wei-gongzi 
    - Wei-gongzi needs to eat, sleep and train in the cultivation arts. When his training reaches a certain level, give him the option to help Jiang Cheng, who's cultivation-training level has fallen to 0. If they pick no, then they can continue playing as Wei-gongzi until they die. If they choose to help Jiang Cheng, then their own cultivation-training level is locked at 0. [I'm having an idea to make the burial mounds it's own level - ice box for sure] Then when their story starts again, they are the Yiling Founder of Monstrous Cultivation the cultivation-training button is disabled, and the progress bar at the top is greyed out. 
    - As the Yiling Founder, there's a monstrous-cultivation button that is counting up to mark how badly the resentful energy is affecting him - or should the use of the ghostly-cultivation button correspond to the increase in his disapproval-rating?
    - icebox: it would be fun to have prompts arise that ask the user to hit the monstrous-cultivation button more - really mimic the choices that wei wuxian made. 


### USER STORIES
AAU:
- Entering the site displays a background image, and there is text overlaid inviting a user to name their Cultivator and set them on the upright path. A text box will accept the new name; default is "Wei Ying". After selecting to contiune with Wei Ying, or after hitting submit/enter on the text box, then the avatar will appear and animate across the screen to stay on one side. 
- Feed Wei Ying so he can grow into Wei Wuxian!



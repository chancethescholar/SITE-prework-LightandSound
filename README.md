# Pre-work - *Luz y Sonido*

**Luz y Sonido** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Chance Onyiorah**

Time spent: **1** hours spent in total

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tab), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Player can choose the difficulty of the game (easy is the original game, medium speeds up the playback after each turn, 
hard does the same as medium plus gives user a limited amount of time to guess)

## Video Walkthrough

Here's a walkthrough of implemented user stories:

Easy Level:
<img src='https://i.imgur.com/fG5HD0m.gif' title='Video Walkthrough Easy Level' width='' alt='Video Walkthrough Easy Level' />

Medium Level:
<img src='https://i.imgur.com/hcqwlrq.gif' title='Video Walkthrough Medium Level' width='' alt='Video Walkthrough Medium Level' />

Hard Level:
<img src='https://i.imgur.com/EjjicOv.gif' title='Video Walkthrough Hard Level' width='' alt='Video Walkthrough Hard Level' />

GIFs created with Kap.

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I used w3schools and stackoverflow to complete my submission.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
My biggest challenge was understanding the JavaScript code since I haven't had that much practice in JavaScript. 
Since the code was given to me, I had to do extra work to make sure that I understood it on my own especially when it came time write my own code
when working on the extensions. I overcame this challenge by going line by line of code and making sure I understood each line.
I also used some of the references given on the tutorial to get a better understanding of the concepts used in the code as well as a lot of Googling.  
One example of this was when I created different functions based on what difficulty level the user chose. I had to make sure I understand the 
playClueSequence function in order to manipulate it to fit my goal.  This included knowing that I needed to use certain variables, functions, 
and conditional statements. I also brought in outside knowledge from the Internet that I integrated into my code like the onload function which 
I wouldn’t have been able to do if I didn’t have a good understanding of the code beforehand since it needed to be tailored to this assignment.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
Since this was a basic HTML/CSS and JavaScript project, I have questions about how more backend programming maybe dealing with 
databases would be implemented into a different kind of project. I have a little bit of knowledge in that respect would like to
learn more about it in a formal setting.  I would also like to know more about the process of deploying websites after they developed
since the purpose of a website is to be used by people. How would this become available for the public to see and use and what kind of 
maintenance needs to be done more so on more complicated websites that use things like databases?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
I would spend time simplifying my code since I know that I repeated a lot of things when it came to creating the different branches for
each difficulty level. I would also like to add additional functionality like adding a timer to the hard level since a player can
lose if they take too much time. I would also add some sort of user profile system so people can look back on their scores from 
previous games.  It would also be nice to add longer patterns either by having the user choose how many patterns or the length of
the pattern length be determined by the difficulty level. Either way, it will lead to a more interactive and customized system
which I think makes the game more interesting.


## License

    Copyright 2021 Chance Onyiorah

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

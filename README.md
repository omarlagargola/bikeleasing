Hello Alessandro, hello Antonio and hello to whoever else is reading this.

My approach to this challenge has been quite a rollercoaster of emotions. You send me the email to do this task on December 27th, to be done and sent one week later on January 3rd before 16:00.

On December 27th I was enjoying my Christmas Holidays at my mother's home in the Canary Islands. I could not tell my mother (that I only see a couple of times a year) that I would spend the rest of the days working, because she would kill/disinherit me. We came back to Germany on December 30th, and we were planning to spend a couple of days with my mother in law until new year's eve. I could not tell my wife that I would spend those days working, because she would kill/divorce me.

Considering that I do not wish to die, or get divorced, and also that I was supposed to came back to my actual work on January the 2nd, I came to the conclusion that I could use only the afternoons of January 1st and 2nd in order to develop this task.

At first glance, I though that I would not have time to do this, and I was about to send you an email asking for a extension in the delivery date. But just before pressing the email send button, I though that I could use this time limitation in my own advantage. I had the idea that with this task I not only showing you my development skills, but also other ones, like time management, prioritization and working on a tight schedule. And the fact that you gave me freedom to implement whatever I wanted, gave me hope into believe that I could do it.

In every recruitment process, the goal of the candidate is to get the job; and the goal of the recruiter is to hire the best candidate possible, or at least the one that shows a better overall performance during the process. But I could not develop an application with a lot of functionality, because I would not have time to do it. So I thought "how could I surprise these guys with such a tight schedule?"

I decided to implement this small application in a way that, in my humble opinion, not every Frontend Developer would dare to do it. Because it is done without framework support, just Vanilla Javascript.

I took the idea from the code challenge that I had to do in order to get my second job. They asked me to implement something simple in Vanilla Javascript. I remember how at first glance I had no idea how to even start, actually I never worked without framework support. But and after a lot of googling and stackoverflowing, I was able to came up with a way to do it. Not sure what you think, but the feeling of facing a task that I have no much idea how to do, and after investigate came up with a solution, it is a feeling that I find very rewarding.

From that task I learned that it is very important to know the framework that you are working with; but as we all know that there is a new Javascript framework every week, it is most important to have a better understanding of Vanilla Javascript, because all future frameworks will be done using Javascript.

From the moment I received the email with the challenge, I spent those first days just thinking about what I would implement and taking notes about how I would do it, knowing that I had to do it in only 2 afternoons.

So yeah, I decided to show a list of bikes with just 2 functionalities:
  1. Select bikes to add them to a shopping bag, showing the price sum of all selected bikes.
  2. Filter the list of bikes by bike name.

On January 1st I implemented the different components and take care of responsiveness.
On January 2nd I implemented the filter and bike select functionalities, and also write the unit tests and E2E tests and improved a bit performance thanks to tips given by Lighthouse (https://developer.chrome.com/docs/lighthouse/overview).
On January 3dr during my lunch break, I wrote this "README.md" file.

Most of the important logic is implemented in the "serviceUtils.js" file. In the "Components" folder you will find the different components used in the application. You will also find some mock data in the "mocks" folder. Assets like images are stolen, of course. Some configuration files are also stolen/modified, of course :P

TOOLS USED:

I use "Vite" as local development server (https://vitejs.dev/), the unit tests are done with "Jest" (https://jestjs.io/), and the E2E test are done using "Playwright" (https://playwright.dev/). Those are the technologies that I use on a daily basis, and the ones that I am more familiar with.

I use BEM notation (https://css-tricks.com/bem-101/), a bit of HTML semantics (https://developer.mozilla.org/en-US/docs/Glossary/Semantics) and CSS logical properties instead of physical properties (https://css-tricks.com/css-logical-properties-and-values/). Not sure if you ever had to deal with right-to-left languages (like arabic or hebrew), but CSS logical properties can save you a lot of work.

INSTRUCTIONS OF USE:

Make sure to have the node version specified in ".nvmrc" file. If you have "nvm" you can just execute "nvm use".

Then as usual "npm i" to install dependencies.

"npm dev" to run the development server.

"npm test" to execute the unit tests.

"npm test:e2e" to execute the E2E tests (in order to execute the E2E test, the development server must be running).

I will answer whatever questions you have during our call on Thursday 4th at 16:00.

If you cannot run the application... well... it worked on my machine :D.

This is probably filled with bugs and things could have been better. I am only human after all, don't put your blame on me https://www.youtube.com/watch?v=L3wKzyIN1yk

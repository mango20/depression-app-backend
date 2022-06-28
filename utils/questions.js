const questions = [
    'You spend more time talking to yourself than to anyone else. How can you speak to yourself in a kinder way?',
    'What did you most enjoy doing as a child? How can you implement this activity into your present life?',
    'What are five words you would ideally like to be described as? Why?',
    'What are three things you are proud of yourself for doing today? (These can be big or small-even brushing your teeth counts!)',
    'When we practice mindfulness, we bring our attention to the present moment. When we are truly in the present moment, it is difficult for our minds to be fixated on the past or anxious about the future. Grounding yourself in the present moment can help quiet your busy mind. By bringing your awareness to your senses, you can focus on the here and now. Start by identifying one thing you see in your space, notice what you feel supporting your body, and gently bring your attention to what you hear, taste, and smell. If you are unable to utilize certain senses, simply focus on those senses you are able to recognize. Does your mind feel calmer?',
    'What core values are most important to you? How can you put these into practice?',
    'What are you most proud of accomplishing in your life? How does this make you feel?',
    'What is the biggest challenge you have overcome? How did you do it?',
    'What makes you feel most loved and celebrated?',
    'When we are feeling depressed, it can be easy to want to disconnect from others, but this is exactly when connection can help the most. Create a list of supportive friends and/or family you can lean on when you are struggling or having a hard day. Reach out to these people to ask them if it is okay to have them on your list and let them know how you like to receive support. Some of us like to just have someone listen, while others appreciate a more active approach. Our supporters are not mind readers, so let yours know what you prefer.',
    'Who do you count on most in your life? How do they show up for you?',
    'What are some things that you want to or need to let go of in your life?',
    'What is the most memorable lesson you have learned? Who taught it to you?',
    'How do you manage failure? Are there ways you can be gentler with yourself during these times?',
    'Get your body moving. Exercise improves both our physical health and our mental health. You do not need to invest in a gym membership or workout equipment-you can start small. Begin by incorporating a five-minute stroll around the neighborhood, or consider a gentle online yoga class. Research shows that the area of the brain that regulates mood is smaller in those who are experiencing depression. Exercise has been shown to help with nerve growth and connection in this area of the brain, thus bringing some relief to depressive feelings.',
    'What is your greatest strength? How does it serve you?',
    'Who are you most inspired by? Why?',
    'Who are the five people you spend the most timne with? What energy do they bring into your life?',
    'What limiting beliefs do you hold about yourself that are stopping you from making changes in your life?',
    'Meditation allows us to slow down, focus our attention, and quiet our busy minds. Begin by finding a comfortable position. You can sit upright, lie down, or adopt any other posture that works for your body. Gently close your eyes or lower your gaze. Start to notice your breath by placing a hand on your belly or chest and feeling the rise and fall of your body as you inhale and exhale. Try to simply focus on your breathing: if you notice your mind starting to wander, bring your attention back to your breath.',
    'Where do your limiting beliefs stem from? What are your earliest or most prominent memories of where these stories were created?',
    'What would your perfect day off look like?',
    'What makes you feel the most empowered? How can you do more of it?',
    'What role does fear play in your life?',
    'When we acknowledge things we are proud of doing throughout our day, it gives us a sense of accomplishment. Try writing down three things you are proud of yourself for doing at the end of each day. These can be as simple as taking a shower or cooking a meal, or as big as getting a promotion at work.',
    'Do you trust yourself? Why or why not?',
    'Are you happy in your career? What do you dream of doing?',
    'What does your perfect weekend look like? How can you make it a reality?',
    'What is something you have done to help someone else recently? How did it make you feel?',
    'Remember to breathe. Schedule breaks in your day to pause and focus on your breath. Set your alarm for a specific time each day and use it as a reminder to stop and breathe. Box breathing is a technique that can help calm the nervous system and decrease stress in your body. You can practice box breathing by inhaing for a count of four, holding your breath at the top of for a count of four, slowly exhaling for a count of four, and then holding your breath at the bottom for a count of four. Repeat this for a total of four rounds and notice how you feel.',
    'What is one small commitment you can make to yourself today that will leave you feeling proud?',
    'Who or what makes you laugh the most? Why?',
    'What is a problem you have overcome? How did you do it?',
    'What do you wish your younger self knew? Write a letter to them here.',
    'Create more opportunities for gratitude. Notice the words you use. For example,we often say that we "have to" eat dinner or that we "have to" take a shower. Our lives become lists of "have to\'s." Begin by replacing the words "have to" with "get to," and pay attention to how that shifts the statement into a place of gratitude. For example, "I \'get to\' eat dinner" or "I \'get to\' take a shower."',
    'Who is your biggest supporter? What does this person mean to you?',
    'What do you wish more people knew about you? Why is this important to you?',
    'When was the last time you cried? How did you feel afterward?',
    'Write yourself a love letter, then describe how it made you feel to write it.',
    'Continue to learn. Research shows that taking in new infornmation increases our mental well-being. Set a timer for 10 minutes and listen to a podcast, read a book, pick up a newspaper, or simply research a topic you are interested in online. Notice what you have learned in a short amount of time. How does it feel to have learned something new?',
    'What is the kindest thing someone has done for you?',
    'What is your favorite childhood memory? Why?',
    'How do you imagine your life would be if you did not experience depression?',
    '4What makes you feel the most anxious? What is one small thing you can do to combat it?',
    'Get outside and experience nature. Go for a walk, find a hiking trail, rest by the water, or simply feel the grass between your bare toes. Take in the natural beauty that surrounds you. Notice the season, the color of the leaves, the temperature of the air, and how it feels to just be, without a need to change anything. Nature can be healing and help lower your stress, anxiety, and depression.',
    'What is the hardest thing you have had to do in your life? How did you get through it?',
    'What are three things that bring you joy? How can you do more of them?',
    'Who do you struggle to set healthy boundaries with? Why?',
    'What is one self-care ritual (other than journaling) you can implement into your daily routine?',
    "Listen to some music and get lost in the rhythm and beat. Whether it is classical,rock, or rap, turn on a song that always makes you smile and reminds you of a happy time. Don't be afraid to turn up the volume and move your body if you feel so inclined. Extra points if you incorporate listening to your favorite song into your daily routine!",
    'What brings you the most comfort? Why?',
    'List any negative self-talk you experience, then write a counter statement for each item.',
    'When are you most self-critical? Why?',
    'What makes you feel the most confident? Why?',
    'Maintain a healthy diet. What we put into our bodies matters and affects our overall well-being. Pay attention to what your body is telling you. Are you eating to satiate hunger, because you are feeling happy or sad, or to connect with your senses? As we become attuned to what our bodies need, we can begin to make incremental changes to better nourish ourselves.',
    'How do you find acceptance during difficult times? How can you use that self-comfort to support you right now?',
    "What is it like for you to sit with your emotions? What do you notice when you don't distract yourself from them?",
    'What is something you once beat yourself up about but can now laugh at?',
    'Who in your life would you describe as resilient? What can you learn from them?',
    "Focusing outward and performing small acts of kindness can create feelings of purpose and help boost our moods. How can you be of service to someone? Perhaps you can take care of a neighbor's pet, carrys omeone's groceries to their car, help an elderly person cross the street, or simply ask a cashier how their day is going. It doesn't really matter what the act is, so long as you are helping someone else.",
    'Slow down and take five deep breaths. What do you notice happens in your body when you do this? How do you feel?',
    'If you were granted three wishes, what would you ask for? Why?',
    'What and/or who makes you feel the most appreciated? Why?',
    'What is thing in your life that you enjoy? What can you do to develop more of it in your life?',
    'What makes you laugh? As they say, laughter is the best medicine. When we laugh, our bodies release endorphins, which act as natural painkillers and mood boosters. So go ahead and watch a funny movie, pull up some silly videos on your computer, or listen to your favorite comedian-and then notice what happens. Can you challenge yourself to laugh once a day?',
    'What is one thing you are looking forward to? Why?',
    'When is the last time you did something kind for yourself? How did it feel?',
    'What is one thing that went better than you expected in the last month?',
    'List three goals you have for the next year. How would you feel if you accomplished them?',
    'Get lost in a good book. Schedule reading time into your routine, even if it is only 10 minutes a day. When we read, we tend to get swept up in the story and forget about our own worries and stress. There is also the added benefit of the accomplishment we feel when we finish reading a book.',
    'What do you feel you take for granted? How could you express more gratitude for these things?',
    'What is something you are feeling challenged by? How might you begin to work through it?',
    'How have you been unkind to yourself? What can you learn from this behavior?',
    'What have you learned about yourself through your experience with depression?',
    'Cultivate a growth mindset rather than a fixed mindset. Those with a growth mindset are willing to take risks and make mistakes, see their perceived failures as opportunities to grow, and are open to receiving feedback. Take time to evaluate where in your life you can incorporate more of a growth mindset. For example, what can you do that is out of your comfort zone, and how can you use it as an opportunity to move yourself forward and learn from it?',
]

export default questions

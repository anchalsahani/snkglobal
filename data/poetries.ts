export interface Poetry {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  content: string; // full poetry content
  slug: string;
}

export const poetries: Poetry[] = [
  {
    id: 1,
    date: "September 15, 2024",
    title: "Grief",
    excerpt:
      "Grief is love for me, the way it stays and waits for me to come back every time…",
    content: `Grief, 
 is love for me, 
the way it stays and waits for me to come back every time, and the surreal, stupid thought of leaving it behind.
I live in it daily, but cannot promise it a rhyme. I know it’s not there, but somehow it is still mine. Like a tree on the river bank with its branches tilted just enough to touch water for birds to build a nest and stay, and for humans to pause and pray. And the roots run deeper than I can see, forcing me to stay when all I want is to drift away.

Grief,
 is home for me, 
a home I do not leave but learn to walk inside, a room where silence breathes with me, and shadows no longer frighten but sit beside me. home that pulls me towards you, every time I step forward to go to another place. Home that keeps calling my name with its voice echoing in silence only I can hear. Home- I’m still here, dear.

Grief,
 is waiting for me, 
On the doormat of my room behind my slippers, staring at the doorknob to be rotated and left open and then closed again. On my study table behind the lamp highlighted in the book waiting to be read by me to come alive again and in the dms of my old friends where nostalgia lives from years but now its replaced by grief

Grief, 
 is walking with me, 
in the half light morning when I do not yet know if I’ve woken, or if I am still inside my dream. Or on the yellow-tinted road behind my school, where sky and sun once kept me company, I still hear the bell echoing against the walls, children rushing, the dust rising like incense. But me ? I'm not there ? So i have a friend to hold my hands and take me back to the places i have lived and died, i wonder if I'm still alive ? 

Grief, 
 is a part of me, 
The one that beats in me and helps me to stay alive, the one who stays, and waits and tells me stories of another time and place. The one who walks with me in the half light morning just to sit beside me in the dark, the one who reminds me that I am still alive, and that I'm still here, and I have a life to live, and a story to share.
​And yet,

​Grief,
is not me. 

~anchal`,
    slug: "grief",
  },
  {
    id: 2,
    date: "July 23, 2024",
    title: "Pretty little lies",
    excerpt:
      "If someday someone asks me why I keep writing so much, I’ll tell them… not about how you took me out from the cave of my dark metaphoric thoughts, to push me into the light…",
    content:
      "If someday someone asks me why I keep writing so much, I’ll tell them… not about how you took me out from the cave of my dark metaphoric thoughts, to push me into the light…\n\n[Full poem content here]",
    slug: "pretty-little-lies",
  },
  {
    id: 3,
    date: "August 10, 2024",
    title: "Silent Echoes",
    excerpt:
      "The silence between us is louder than the storms, echoing through the chambers of my restless heart…",
    content:
      "The silence between us is louder than the storms, echoing through the chambers of my restless heart…\n\n[Full poem content here]",
    slug: "silent-echoes",
  },
  {
    id: 4,
    date: "September 1, 2024",
    title: "Unwritten Chapters",
    excerpt:
      "There are words I never dared to speak, yet they bleed quietly across the pages of my unfinished stories…",
    content:
      "There are words I never dared to speak, yet they bleed quietly across the pages of my unfinished stories…\n\n[Full poem content here]",
    slug: "unwritten-chapters",
  },
];

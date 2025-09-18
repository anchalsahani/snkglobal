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
    title: "Not a Love Poem",
    excerpt:
      "You taught me how to fall in love and fall apart at the same time…",
    content:
`You taught me how to fall in love and fall apart at the same time. Now, my eyes sing the way poets scream in their rhyme. I sit here, staring at my wounds, longing to be with you every time. I light up a cigarette, write poems in ash, and count stars while taking another glass of wine.

Oh, to be a poet, but I don't want to write poetry anymore, over pain, love, and life, because these things left me on the shore. I'm drowning slowly, waves of solitude taking me in. I'm getting punished for—I don't remember which sin.

My hands tremble at every word, but for you, I write. Your absence haunts me, making my life dark from bright. I back up to your favorite place, bathed in whispers of the trees, where you built castles in the clouds and chased dreams on velvet knees.

I saw oceans in your eyes and depth in your words. The mole on your chin plays the role of the swords. I wrote a lot of poetry, read multiple poems, but none of them described beauty the way you did. Butterflies appear everywhere you put your feet.

In the pursuit of getting enlightenment, I started to believe in God. For someday when you will come, I will stop doing discord. I'm tired of asking questions whose answers I don't find. This isn't a love poem, just to remind.

~anchal`,
    slug: "pretty-little-lies",
  },
];

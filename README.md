<p align="center">
  <img src="https://raw.githubusercontent.com/andyruwruw/password-encrypter/main/src/assets/images/graphic.svg?token=ALDKK3UPWKXHGODNGMXSSLDA4N754" width="300px"></img>
</p>

<h2 align="center">
  password-encrypter
</h2>

<p align="center">
  <a href="https://vercel.com/andyruwruw/password">Website</a>
  ·
  <a href="https://github.com/andyruwruw/password-encrypter/issues/new/choose">Submit an Issue</a>
</p>

# Overview

*password-encrypter* allows users to generate secure passwords utilizing SHA256.

I wanted a algorithmic way to store and generate my own passwords in a way that maintained security but increased memorability. Storing passwords in plaintext is never a good idea, but maintaining several secrets for each password ensure they'll stay safe.

Passwords are made from a combination of 4 parameters:

- *Base*
  - The *base* isn't stored verbatim, but instead a hint for either is stored in a way that only I can figure out their true value.
- *Home*
  - The *home* ensures all passwords are encrypted partially based on where they're to.
- *Number*
  - The *number* isn't stored verbatim, but instead a hint for either is stored in a way that only I can figure out their true value.
- *Skeleton Key*
  - I use a the same *skeleton key* for all my passwords, and have never written it down. It is the one part of this process that should stay completely secret.

This website makes no server calls and is all done in browser. It's for personal use but feel free to fork and run your own version.

I would not recommend using someone else's instance of this for your own password management. You should understand the code and have complete control over the process.

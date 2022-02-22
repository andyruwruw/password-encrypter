<p align="center">
  <img src="https://raw.githubusercontent.com/andyruwruw/password-encrypter/main/src/assets/images/graphic.svg?token=ALDKK3UPWKXHGODNGMXSSLDA4N754" width="300px"></img>
</p>

<h2 align="center">
  password-encrypter
</h2>

<p align="center">
  <a href="https://password-encrypter.vercel.app/">Website</a>
  ·
  <a href="https://github.com/andyruwruw/password-encrypter/issues/new/choose">Submit an Issue</a>
</p>

# Overview

*password-encrypter* allows users to generate secure passwords utilizing [SHA256](https://en.wikipedia.org/wiki/SHA-2).

I wanted a algorithmic way to store and generate my own passwords in a way that maintained security but increased memorability. Storing passwords in plaintext is never a good idea, but maintaining several secrets for each password ensure they'll stay safe.

# How it Works

Passwords are generated from a combination of four parameters:

- *Base*
  - The *base* isn't stored verbatim, but instead a hint for either is stored in a way that only I can figure out their true value.
- *Home*
  - The *home* ensures all passwords are encrypted partially based on where they're to.
- *Number*
  - The *number* isn't stored verbatim, but instead a hint for either is stored in a way that only I can figure out their true value.
- *Skeleton Key*
  - I use a the same *skeleton key* for all my passwords, and have never written it down. It is the one part of this process that should stay completely secret.

# Usage


This website makes no server calls and is all done in browser.

It's for personal use but feel free to fork and run your own version. **I would not recommend using someone else's instance of this for your own password management**.

I would also recommend changing some of the values around in the [config](https://github.com/andyruwruw/password-encrypter/blob/main/src/config/index.ts).

You should understand the code and have complete control over the process.

# Reversable Encryption

I needed to store some recovery codes, meaning I needed to add a reversable function. This functions in the same way as password generation.

You provide the four parameters to generate the passcode, and the data as a string to be encrypted.

The data will be signed with the passcode using [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken).

You can record the returned encrypted token as plaintext and use it in combination with those same four parameters to decrypt it.

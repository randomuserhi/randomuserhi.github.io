# Building
- `npm install`
    - download dependencies
- `npm run build`
    - builds the project
- `npm run copy-js3party`
    - copy over 3rd party libraries (required to be done once, or everytime js3party gets updated)
    
> Note that this sample has [Fuse.js](https://www.fusejs.io/) as a dependency as it is common to use. It is not necessary for RHU to function.

# Running
- `node server.js`
- Connect to `127.0.0.1:3000` on your browser

# NOTES
Use this [series](https://youtu.be/8fTFEtekJno?si=1QiJVHbsBUjzwGb7) as inspiration (not necessarily a good framework though).
- [ ] Blogs
    - [ ] React in pure JS (RHU)
        - *Probably needs me to re-write RHU to remove a bunch of junk like RHU core library sucks*
            - Should just include the main React-HTML functionality, WeakCollection stuff, Styles, Themes and Symbols
                - Create a new Repo -> deprecate old RHU -> give new name etc...
            - Basically mostly stripping and removing the main RHU core library
                - Re-factor stuff to use the new class extends syntax and avoid `Reflect.Construct` etc...
                - Or use `Reflect.Construct` on its own without `RHU.inherit` strictly for the Weak datastructures
        - [ ] Monaco editor showcase? - Live example
    - [ ] Deep Engine
- [ ] Hire vs Fun showcase
    - Website should be built mainly for hireability
    - Ability to switch between fun aesthetic side and hireability side
        - Or have a good balance (purely hireable stuff should be whats seen first)
            - Well formatted and easy to read for recruiters
            - What I do, Who I am, Location
            - Experience
            - Personal Projects
        - Fun stuff for small things like showcasing technologies I've worked with
        - Fun stuff that does not interfere with viewing main information (cute interactable pets that hang on the side of the page)
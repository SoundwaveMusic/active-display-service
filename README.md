## SoundClout Active Display Module
#### *Active Display module for SoundClout based off of the `Hack Reactor @Galvanize` curriculum*

---

### Related Projects/Modules
 - [Active Display Module (This Module)](https://github.com/4-ever-young/soundclout-active-display-module.git)
 - [Active Player Module](https://github.com/4-ever-young/soundclout-active-player-module.git)
 - [Information and Comments Module](https://github.com/4-ever-young/soundclout-info-comments-module.git)
 - [Sidebar Module](https://github.com/4-ever-young/soundclout-sidebar-module.git)

This repository contains the implementation of the Active Player module for `SoundClout`, a semi-static replication of `SoundCloud`'s display page for individual songs. Active Display is a replication of the center-front module which displays the selected song's music player, timestamped comments, album artwork, and more. For a full feature list view the below section called 'Feature Set'.

### Getting Started
In order to effectively run this module users will need to ensure that the proper dependendencies are installed on the machine running the server chosen to host this repositories files. This can easily be achieved through the utilization of npm, yarn, or any other package manager. Sample code for npm is included below:
```sh
$ npm install
```

### Feature Set
The below information is the determined feature set that this repository will be aiming to achieve:
  #### Bare Minimum
   - Static display of entire encapsulating box
   - Static/dynamic display of album artwork
   - Static/dynamic display of background
   - Static/dynamic display of "Play" button (should change to "Pause" button once "Play" is pressed)
   - Interactive "Play" button to display song information
   - Static/dynamic display of Artist name
   - Static/dynamic display of Song name
   - Static/dynamic/active display of Post date
   - Static/dynamic display of associated Tags
   - Alerts for Artist, Song, Tags, and Album Artwork instead of hyperlinks
   - Static/dynamic display for song waveform
   - Static/dynamic display of comments for song timestamp (should display comments on hover/click)
   - Actually plays song
   - Static/dynamic display for song length
  #### Stretch Goals
   - Change color of song waveform as music plays
   - Dynamically display current timestamp with a bar
   - Dynamically display current timestamp with a number
   - Maybe more...


# ProductsList

![Poseidon logo](poseidon.svg)

<!--{{icons}}-->
[![React](https://i.imgur.com/cBSDMbz.png)](https://facebook.github.io/react/)
[![Yarn](https://i.imgur.com/cShYnsa.png)](https://yarnpkg.com/)
[![Webpack](https://i.imgur.com/y4TjpNt.png)](https://webpack.github.io/)
<!--{{/icons}}-->


An app using the XXXLutz Hydra Corporate Identity 

> Hydra Corporate Identity (CI) is a platform for building React applications with conventions for supporting all XXXLGroup rails (XXXLutz, Moebelix, Moemax, ...), best practices for reusable components and a modern tech stack.



## Resources
* https://hydra.xxxl-dev.at/ - Hydra Component Styleguide 
* https://docs.xxxl-dev.at/ - Development documentation


## Quick Overview

**Start building:**
### `yarn dev`

Choose the environment you want to develop for and hit enter.


### `yarn cli` 
**Overview of all CLI commands**


## Initial Project structure

Yarn Workspaces (https://yarnpkg.com/lang/en/docs/workspaces/) is used to enable linking of project dependencies & promote reusability, aswell as publishing, of components 

```text
packages
├── frontend
│   ├── src
│   │   ├── common // acts as the base for pages, components, styles
│   │   ├── les    // can change styles of pages, styles, components by mirroring the file structure of common 
│   │   ├          // when developing or building rails (les, lz, mbx, mmx) - hydra components automatically use the rail specific styling / specifications
│   │   ├── lz     
│   │   ├── mbx 
|   |   └── mmx  
|   |
└   └── package.json
```

## Philosophy
* Rapid setup with almost no configuration, predefined build and development configurations deliver easy conventions.
+ Fast development that covers all XXXL rails with a common codebase. Deviations from this pattern can easily be handled per rail.
* Reusable UI components help building applications that follow the corporate identity.
* Optimized helper tools for mainting a clean and future-proof codebase even for larger teams.



## (optional) Configuring your code editor 

### IDE resolver

IntelliJ IDEA:

Open setting in your IntelliJ and select the "webpack.ide.resolver.js" file

```
Languages & Frameworlds -> Javascript -> Webpack
```

```
webpack.ide.resolver.js
```

### IDE configuration recommendations

Linting is covered via npm scripts and pre-commit hooks. If you want additional
support while coding, consider enabling the features or installing the plugins
below.

Recommended Plugins:

* EditorConfig (basic file formats)
* ESLint (JS code style checker)
* Prettier (general code style formatter)
* Stylelint (CSS code style checker)




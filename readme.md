# vertical-rhythm

Vertical-rhythm generator for web. 

## Setup

Copy script file `src/vertical-rhythm.js` in your workspace. It only depends on `polished` module for working.  

Install `polished` npm module to use this script

```
npm i polished --save
```

## Usage

Script exposes function which generates css styles for html tag, header tags and content(eg paragraph) tags.

```js

const { html, headers, content, baseLineSpacing, contentSpacing } = verticalRhythm({
    fontSize: '18px',
    contentSpacingFactor: 2,
    headerMarginTopFactor: [4, 6, 4, 3, 3, 2],
    considerFontSizeChange: true,
    headerFontModularScale: 1.16,
});

```

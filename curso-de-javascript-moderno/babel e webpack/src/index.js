const name = 'Guilherme'
const obj = {
  name,
}

const newObj = {
  ...obj
}

// yarn add -D @babel/core @babel/cli @babel/preset-env babel-loader webpack webpack-cli regenerator-runtime core-js@2
// npx babel index.js -o bundle.js --presets=@babel/env -w  

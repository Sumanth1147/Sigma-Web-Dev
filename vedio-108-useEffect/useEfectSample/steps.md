npm create vite@latest
npm i


```
try to load app and understand the sequence of alerts to understand how useEffect works

```

comment out strict mode in main.jsx

### sequence of alerts when reloaded for the first time
```
Hey I will run on every render
Hey welcome to my page. This is the first render
Hey I am running because color was changed  // this is beacause initially we assign count = 0, so count is changed
Count was changed
Hey I will run on every render
Hey I am running because color was changed
```

### sequence when count is changed after loading the app
```
Hey I will run on every render
Count was changed
Hey I will run on every render
Hey I am running because color was changed
```

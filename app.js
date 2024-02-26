const parent=React.createElement("div",{},
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"This is the heading"),React.createElement("p",{},"This is the paragraph")]))
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
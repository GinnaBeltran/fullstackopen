```mermaid
sequenceDiagram
    participant browser
    participant server
    browser->>server:HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
    server-->>browser:HTML-code
    browser->>server:HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->>browser:main.css
    browser->>server:https://studies.cs.helsinki.fi/exampleapp/spa.js
    server-->>browser:spa.js
    browser->>server:HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
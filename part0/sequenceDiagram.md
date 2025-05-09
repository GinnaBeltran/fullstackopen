```mermaid
sequenceDiagram
    participant browser
    participant server
    browser->>server:HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
    server-->>browser:HTML-code
    browser->>server:HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->>browser:main.css
    browser->>server:HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
    server-->>browser:main.js
    browser->>server:HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->>browser:[{ content: "Happy code", date: "2025-05-05T16:15:31.396Z" }]

import React, {useEffect, useState} from 'react';

const App = () => {
    const [backendContent, setBackendContent] = useState("");

    const getData = () => {
        fetch('/api/users', {
            method:"GET",
            mode: "cors",
            credentials: "same-origin"
        }).then(response => response.text())
            .then(data => setBackendContent(data));
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <div>
            <p>Content from frontend</p>
            {backendContent === "" ? "loading..." : backendContent}
        </div>
    );
}

export default App;

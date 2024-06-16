import { useEffect } from "react";

const CsrfToken = () => {
    useEffect(() => {
        async function fetchCsrfToken() {
            try {
                const response = await fetch('/csrf-token');
                const data = await response.json();
                setCsrfToken(data.csrf_token);
            } catch (error) {
                console.error('Error fetching CSRF token:', error);
            }
        }
        fetchCsrfToken();
    }, []);
}
export default CsrfToken;
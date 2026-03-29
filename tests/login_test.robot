*** Settings ***
Library    Browser

*** Variables ***
${LOGIN_URL}    http://127.0.0.1:5173/login.html
${USERNAME}     testuser
${PASSWORD}     test123

*** Test Cases ***
Successful Login Test
    New Browser    chromium    headless=False
    New Page    ${LOGIN_URL}

    Fill Text    id=login-username    ${USERNAME}
    Fill Text    id=login-password    ${PASSWORD}
    Click        id=login-btn

    Get Text     id=login-message    ==    Login successful

    Close Browser
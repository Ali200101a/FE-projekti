*** Settings ***
Library    Browser
Library    OperatingSystem

*** Variables ***
${LOGIN_URL}    http://127.0.0.1:5173/login.html

*** Test Cases ***
Login With Environment Variables
    ${username}=    Get Environment Variable    TEST_USERNAME
    ${password}=    Get Environment Variable    TEST_PASSWORD

    New Browser    chromium    headless=False
    New Page       ${LOGIN_URL}

    Fill Text    id=login-username    ${username}
    Fill Text    id=login-password    ${password}
    Click        id=login-btn

    Get Text     id=login-message    ==    Login successful

    Close Browser

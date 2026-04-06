*** Settings ***
Library    Browser
Library    CryptoLibrary    variable_decryption=True

*** Variables ***
${LOGIN_URL}      http://127.0.0.1:5173/login.html
# These values are encrypted with CryptoLibrary.
# Replace them with your own encrypted values (see instructions below).
${USERNAME}       crypt:jPujGNSUPZs3Wrxba09e0r7QjDB7Dji8dVZ4qBafiBOgxUe6Fs172IQW95fvZsXnX8p52phpVuA=
${PASSWORD}       crypt:r722sCQtfi/+ZBB+iToD9G3nCMTfRJBCVfqWd5VzUU/yPZxJ3+0xIkGJyDFlhxGiAtwHA8zOSQ==

*** Test Cases ***
Login With Encrypted Credentials
    New Browser    chromium    headless=False
    New Page       ${LOGIN_URL}

    Fill Text    id=login-username    ${USERNAME}
    Fill Text    id=login-password    ${PASSWORD}
    Click        id=login-btn

    Get Text     id=login-message    ==    Login successful

    Close Browser

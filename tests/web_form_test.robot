*** Settings ***
Library    Browser

*** Variables ***
${URL}    https://www.selenium.dev/selenium/web/web-form.html

*** Test Cases ***
Web Form Test
    New Browser    chromium    headless=False
    New Page    ${URL}

    Fill Text    css=input[name="my-text"]    hello
    Fill Text    css=input[name="my-password"]    123456
    Fill Text    css=textarea[name="my-textarea"]    test text

    Select Options By    css=select    value    2
    Fill Text    css=input[name="my-datalist"]    Seattle

    Click    text=Default checkbox
    Click    text=Default radio

    Click    text=Submit

    Close Browser
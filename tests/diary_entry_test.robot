*** Settings ***
Library    Browser

*** Variables ***
${URL}    http://127.0.0.1:5173/entries.html

*** Test Cases ***
Add Diary Entry Test
    New Browser    chromium    headless=False
    New Page    ${URL}

    Fill Text    id=entry-date    2026-01-01
    Fill Text    id=entry-text    Robot test entry
    Click        id=add-entry-btn

    Get Text     css=#cards-container    *=    Robot test entry

    Close Browser
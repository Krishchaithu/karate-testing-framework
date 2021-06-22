Feature: 
  Background:
#    * def chromerdriver = "C:/Program Files/Google/Chrome/Application/chrome.exe"
#    * configure driver = { type: 'chrome', executable: #(chromerdriver) }
#    * configure driver  { type: 'chromedriver', port: 9515, executable: 'chromedriver' }
    Scenario: open google page
      Given driver "http://google.co.in"
      * driver.maximize()
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

var i = 0; //初始化点击次数为0

driver.get('http://localhost:8080/praise/src/');
do {
    driver.findElement(By.id('hand')).click();
    i++;
} while (i < 11)

driver.findElement(By.id('hand')).click();
// driver.wait(until.titleIs('praise'), 1000);

driver.quit();